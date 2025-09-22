import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { Readable } from "node:stream";
import { describe, test as it } from "vitest";

import { MediaStoreData } from "../src/MediaStoreData";

describe("@aws-sdk/client-mediastore-data", () => {
  describe("PutObject", () => {
    it("should contain correct x-amz-content-sha256 header", async () => {
      const client = new MediaStoreData({
        region: "us-west-2",
        credentials: {
          accessKeyId: "CLIENT_TEST",
          secretAccessKey: "CLIENT_TEST",
        },
      });

      requireRequestsFrom(client).toMatch({
        headers: {
          "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
        },
      });

      return await client.putObject({
        Path: "foo.avi",
        Body: Readable.from(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8])),
      });
    });
  });
});
