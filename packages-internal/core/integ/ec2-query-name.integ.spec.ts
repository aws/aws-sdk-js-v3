import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { EC2 } from "@aws-sdk/client-ec2";
import { describe, expect, test as it } from "vitest";

describe("EC2", () => {
  it("should serialize based on ec2QueryName if present (runInstances)", async () => {
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
          "NetworkInterface.1.Ipv6Addresses.1.Ipv6Address=xx",
          "NetworkInterface.1.PrivateIpAddresses.1.PrivateIpAddress=xx",
          "Version=2016-11-15",
        ]);
      },
    });

    await ec2.runInstances({
      DryRun: true,
      MaxCount: 1,
      MinCount: 0,
      NetworkInterfaces: [
        {
          PrivateIpAddresses: [{ PrivateIpAddress: "xx" }],
          Ipv6Addresses: [{ Ipv6Address: "xx" }],
        },
      ],
    });

    expect.assertions(1);
  });

  it("should serialize based on ec2QueryName if present (requestSpotInstances)", async () => {
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
          "Action=RequestSpotInstances",
          "DryRun=true",
          "LaunchSpecification.NetworkInterface.1.Ipv6Addresses.1.Ipv6Address=xx",
          "LaunchSpecification.NetworkInterface.1.PrivateIpAddresses.1.PrivateIpAddress=xx",
          "Version=2016-11-15",
        ]);
      },
    });

    await ec2.requestSpotInstances({
      DryRun: true,
      LaunchSpecification: {
        NetworkInterfaces: [
          {
            PrivateIpAddresses: [{ PrivateIpAddress: "xx" }],
            Ipv6Addresses: [{ Ipv6Address: "xx" }],
          },
        ],
      },
    });

    expect.assertions(1);
  });

  it("should serialize based on ec2QueryName if present (requestSpotFleet)", async () => {
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
          "Action=RequestSpotFleet",
          "DryRun=true",
          "SpotFleetRequestConfig.IamFleetRole=",
          "SpotFleetRequestConfig.LaunchSpecifications.1.NetworkInterfaceSet.1.Ipv6Addresses.1.Ipv6Address=xx",
          "SpotFleetRequestConfig.LaunchSpecifications.1.NetworkInterfaceSet.1.PrivateIpAddresses.1.PrivateIpAddress=xx",
          "SpotFleetRequestConfig.TargetCapacity=0",
          "Version=2016-11-15",
        ]);
      },
    });

    await ec2.requestSpotFleet({
      DryRun: true,
      SpotFleetRequestConfig: {
        IamFleetRole: "",
        TargetCapacity: 0,
        LaunchSpecifications: [
          {
            NetworkInterfaces: [
              {
                PrivateIpAddresses: [{ PrivateIpAddress: "xx" }],
                Ipv6Addresses: [{ Ipv6Address: "xx" }],
              },
            ],
          },
        ],
      },
    });

    expect.assertions(1);
  });
});
