import type { AwsIdentityProperties } from "@aws-sdk/types";
import type { AwsCredentialIdentity } from "@smithy/types";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { createProfileKeyedRefreshProvider } from "./createProfileKeyedRefreshProvider";

const START_MS = new Date("2024-01-01T00:00:00Z").getTime();

const SIX_HOURS = 6 * 3600_000;
let now: number;

const withProfile = (profile: string): AwsIdentityProperties => ({
  callerClientConfig: { profile, region: async () => "us-east-1" },
});

const profileOf = (options?: AwsIdentityProperties) => options?.callerClientConfig?.profile ?? "default";

describe("createProfileKeyedRefreshProvider", () => {
  beforeEach(() => {
    now = START_MS;
    vi.spyOn(Date, "now").mockImplementation(() => now);
    vi.spyOn(Math, "random").mockReturnValue(0.4);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  const source = () =>
    vi.fn(
      async (options?: AwsIdentityProperties): Promise<AwsCredentialIdentity> => ({
        accessKeyId: `AKID-${profileOf(options)}`,
        secretAccessKey: "SECRET",
        expiration: new Date(now + SIX_HOURS),
      })
    );

  it("gives each profile its own credentials when one provider is shared by several clients", async () => {
    const raw = source();
    const provider = createProfileKeyedRefreshProvider(profileOf, raw);

    await expect(provider(withProfile("dev"))).resolves.toMatchObject({ accessKeyId: "AKID-dev" });
    await expect(provider(withProfile("prod"))).resolves.toMatchObject({ accessKeyId: "AKID-prod" });
    expect(raw).toHaveBeenCalledTimes(2);
  });

  it("caches per profile", async () => {
    const raw = source();
    const provider = createProfileKeyedRefreshProvider(profileOf, raw);

    await provider(withProfile("dev"));
    await provider(withProfile("dev"));

    expect(raw).toHaveBeenCalledTimes(1);
  });

  it("invalidates only the lifecycle holding the rejected access key", async () => {
    const raw = source();
    const provider = createProfileKeyedRefreshProvider(profileOf, raw);
    await provider(withProfile("dev"));
    await provider(withProfile("prod"));
    raw.mockClear();

    provider.invalidate({ accessKeyId: "AKID-dev" });
    await provider(withProfile("dev"));
    await provider(withProfile("prod"));

    expect(raw).toHaveBeenCalledTimes(1);
    expect(profileOf(raw.mock.calls[0][0])).toBe("dev");
  });

  it("is marked memoized so the client layer does not wrap it again", () => {
    expect(createProfileKeyedRefreshProvider(profileOf, source()).memoized).toBe(true);
  });
});
