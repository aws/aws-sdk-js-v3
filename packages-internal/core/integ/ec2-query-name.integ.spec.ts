import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { EC2 } from "@aws-sdk/client-ec2";
import { describe, expect, test as it } from "vitest";

describe("EC2", () => {
  it("should serialize based on ec2QueryName if present", async () => {
    const ec2 = new EC2({
      region: "us-east-1",
      credentials: {
        accessKeyId: "INTEG",
        secretAccessKey: "INTEG",
      },
    });
    requireRequestsFrom(ec2).toMatch({
      body(b) {
        expect(b.split("&").sort()).toMatchObject([
          "Action=RunInstances",
          /^ClientToken=(.*?)$/,
          "DryRun=true",
          "MaxCount=1",
          "MinCount=0",
          "NetworkInterface.1.PrivateIpAddresses.1.PrivateIpAddress=10.0.0.10",
          "Version=2016-11-15",
        ]);
      },
    });

    await ec2.runInstances({
      DryRun: true,
      NetworkInterfaces: [
        {
          PrivateIpAddresses: [{ PrivateIpAddress: "10.0.0.10" }],
        },
      ],
      MaxCount: 1,
      MinCount: 0,
    });

    expect.assertions(1);
  });
});
