import { describe, expect, test as it } from "vitest";

import { joinStreams } from "./join-streams.browser";

describe(joinStreams.name, () => {
  it("should join web API ReadableStreams together", async () => {
    expect.fail();
  });

  it("should not fail to handle an empty stream", async () => {
    expect.fail();
  });

  it("should throw an error when there is an error during any of the streams", async () => {
    expect.fail();
  });

  it("should release all locks and cancel all streams if an error is thrown during any stream", async () => {
    expect.fail();
  });

  it("should release all locks and cancel all streams if any stream promise rejects", async () => {
    expect.fail();
  });
});
