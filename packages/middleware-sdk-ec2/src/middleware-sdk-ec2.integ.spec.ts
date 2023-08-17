import { EC2 } from "@aws-sdk/client-ec2";

import { TestHttpHandler } from "../../../private/aws-util-test/src";

describe("EC2", () => {
  describe("middleware-sdk-ec2", () => {
    it("serializes PSU and DestinationRegion", async () => {
      const client = new EC2({
        region: "us-east-1",
      });

      new TestHttpHandler({
        method: "POST",
        hostname: /ec2\.(.*?)\.amazonaws\.com/,
        protocol: "https:",
        query: {},
        headers: {},
        body: (body) => {
          const parse = new URLSearchParams(body);
          expect(parse.get("DestinationRegion")).toEqual("us-east-1");
          expect(parse.get("SourceRegion")).toEqual("us-west-2");
          expect(parse.get("SourceSnapshotId")).toEqual("my-snapshot-id");
          expect(parse.get("Action")).toEqual("CopySnapshot");
          expect(parse.get("Version")).toEqual("2016-11-15");
          const psu = parse.get("PresignedUrl") as string;
          const matcher =
            /https\:\/\/ec2\.us-west-2\.amazonaws\.com\/\?Action=CopySnapshot&DestinationRegion=us-east-1&SourceRegion=us-west-2&SourceSnapshotId=my-snapshot-id&Version=2016-11-15&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=(.+)\%2Fus-west-2\%2Fec2\%2Faws4_request&X-Amz-Date=(\d{8})T(\d{6})Z&X-Amz-Expires=3600(&X-Amz-Security-Token=(.+))?&X-Amz-Signature=(.+)&X-Amz-SignedHeaders=host/;

          expect(psu).toMatch(matcher);
        },
      }).watch(client);

      await client.copySnapshot({
        SourceSnapshotId: "my-snapshot-id",
        SourceRegion: "us-west-2",
      });

      expect.hasAssertions();
    });

    it("serializes PSU and DestinationRegion when Encrypted=true and KmsKeyId present", async () => {
      const client = new EC2({
        region: "us-east-1",
      });

      new TestHttpHandler({
        method: "POST",
        hostname: /ec2\.(.*?)\.amazonaws\.com/,
        protocol: "https:",
        query: {},
        headers: {},
        body: (body) => {
          const parse = new URLSearchParams(body);
          expect(parse.get("DestinationRegion")).toEqual("us-east-1");
          expect(parse.get("Encrypted")).toEqual("true");
          expect(parse.get("KmsKeyId")).toEqual("my-kms-key");
          expect(parse.get("SourceRegion")).toEqual("us-west-2");
          expect(parse.get("SourceSnapshotId")).toEqual("my-snapshot-id");
          expect(parse.get("Action")).toEqual("CopySnapshot");
          expect(parse.get("Version")).toEqual("2016-11-15");
          const psu = parse.get("PresignedUrl") as string;
          const matcher =
            /https\:\/\/ec2\.us-west-2\.amazonaws\.com\/\?Action=CopySnapshot&DestinationRegion=us-east-1&Encrypted=true&KmsKeyId=my-kms-key&SourceRegion=us-west-2&SourceSnapshotId=my-snapshot-id&Version=2016-11-15&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=(.+)\%2Fus-west-2\%2Fec2\%2Faws4_request&X-Amz-Date=(\d{8})T(\d{6})Z&X-Amz-Expires=3600(&X-Amz-Security-Token=(.+))?&X-Amz-Signature=(.+)&X-Amz-SignedHeaders=host/;

          expect(psu).toMatch(matcher);
        },
      }).watch(client);

      await client.copySnapshot({
        SourceSnapshotId: "my-snapshot-id",
        SourceRegion: "us-west-2",
        Encrypted: true,
        KmsKeyId: "my-kms-key",
      });

      expect.hasAssertions();
    });
  });

  // skipped due to ISOB failing DNS lookup
  xit("in us-isob-east-1, serializes PSU and DestinationRegion when Encrypted=true and KmsKeyId present", async () => {
    const client = new EC2({
      region: "us-isob-east-1",
    });

    new TestHttpHandler({
      method: "POST",
      hostname: "ec2.us-isob-east-1.sc2s.sgov.gov",
      protocol: "https:",
      query: {},
      headers: {},
      body: (body) => {
        const parse = new URLSearchParams(body);
        expect(parse.get("DestinationRegion")).toEqual("us-isob-east-1");
        expect(parse.get("Encrypted")).toEqual("true");
        expect(parse.get("KmsKeyId")).toEqual("my-kms-key");
        expect(parse.get("SourceRegion")).toEqual("us-isob-east-1");
        expect(parse.get("SourceSnapshotId")).toEqual("my-snapshot-id");
        expect(parse.get("Action")).toEqual("CopySnapshot");
        expect(parse.get("Version")).toEqual("2016-11-15");
        const psu = parse.get("PresignedUrl") as string;

        const matchers = [
          /https\:\/\/ec2\.us-isob-east-1\.sc2s\.sgov\.gov\/\?Action=CopySnapshot/,
          /DestinationRegion=us-isob-east-1/,
          /Encrypted=true/,
          /KmsKeyId=my-kms-key/,
          /SourceRegion=us-isob-east-1/,
          /SourceSnapshotId=my-snapshot-id/,
          /Version=2016-11-15/,
          /X-Amz-Algorithm=AWS4-HMAC-SHA256/,
          /X-Amz-Credential=(.+)\%2Fus-isob-east-1\%2Fec2\%2Faws4_request/,
          /X-Amz-Date=(\d{8})T(\d{6})Z/,
          /X-Amz-Expires=3600(&X-Amz-Security-Token=(.+))?/,
          /X-Amz-Signature=(.+)/,
          /X-Amz-SignedHeaders=host/,
        ];

        for (const matcher of matchers) {
          expect(psu).toMatch(matcher);
        }
      },
    }).watch(client);

    await client.copySnapshot({
      SourceSnapshotId: "my-snapshot-id",
      Description: "my-description",
      DestinationRegion: "us-isob-east-1",
      SourceRegion: "us-isob-east-1",
      Encrypted: true,
      KmsKeyId: "my-kms-key",
    });

    expect.hasAssertions();
  });
});
