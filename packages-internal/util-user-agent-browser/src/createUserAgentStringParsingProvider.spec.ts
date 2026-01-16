import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { createUserAgentStringParsingProvider } from "./createUserAgentStringParsingProvider";
import type { PreviouslyResolved } from "./index";

const ua =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36";

const mockConfig: PreviouslyResolved = {
  userAgentAppId: vi.fn().mockResolvedValue(undefined),
};

describe("createUserAgentStringParsingProvider", () => {
  beforeEach(() => {
    vi.spyOn(window.navigator, "userAgent", "get").mockReturnValue(ua);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should populate metrics", async () => {
    const userAgent = await createUserAgentStringParsingProvider({ serviceId: "s3", clientVersion: "0.1.0" })(
      mockConfig
    );
    expect(userAgent[0]).toEqual(["aws-sdk-js", "0.1.0"]);
    expect(userAgent[1]).toEqual(["ua", "2.1"]);
    expect(userAgent[2]).toEqual(["os/macOS", "10.15.7"]);
    expect(userAgent[3]).toEqual(["lang/js"]);
    expect(userAgent[4]).toEqual(["md/browser", "Chrome_86.0.4240.111"]);
    expect(userAgent[5]).toEqual(["api/s3", "0.1.0"]);
    expect(userAgent.length).toBe(6);
  });

  it("should populate metrics when service id not available", async () => {
    const userAgent = await createUserAgentStringParsingProvider({ serviceId: undefined, clientVersion: "0.1.0" })(
      mockConfig
    );
    expect(userAgent).not.toContainEqual(["api/s3", "0.1.0"]);
    expect(userAgent.length).toBe(5);
  });

  it("should include appId when provided", async () => {
    const configWithAppId: PreviouslyResolved = {
      userAgentAppId: vi.fn().mockResolvedValue("test-app-id"),
    };
    const userAgent = await createUserAgentStringParsingProvider({ serviceId: "s3", clientVersion: "0.1.0" })(
      configWithAppId
    );
    expect(userAgent[6]).toEqual(["app/test-app-id"]);
    expect(userAgent.length).toBe(7);
  });

  it("should not include appId when not provided", async () => {
    const userAgent = await createUserAgentStringParsingProvider({ serviceId: "s3", clientVersion: "0.1.0" })(
      mockConfig
    );
    expect(userAgent).not.toContainEqual(expect.arrayContaining(["app/"]));
    expect(userAgent.length).toBe(6);
  });
});
