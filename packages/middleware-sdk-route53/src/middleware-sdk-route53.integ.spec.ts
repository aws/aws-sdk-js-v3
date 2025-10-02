import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { Route53 } from "@aws-sdk/client-route-53";
import { parseXML } from "@aws-sdk/xml-builder";
import { describe, expect, test as it } from "vitest";

describe("middleware-sdk-route53", () => {
  describe(Route53.name, () => {
    it("should normalize param names HostedZoneId", async () => {
      const client = new Route53({
        region: "us-west-2",
      });

      requireRequestsFrom(client).toMatch({
        body: /<HostedZoneId>my-zone<\/HostedZoneId>/,
      });

      await client.createKeySigningKey({
        HostedZoneId: "/hostedzone/my-zone",
        CallerReference: "abcd",
        KeyManagementServiceArn: "arn",
        Name: "name",
        Status: "ACTIVE",
      });

      expect.hasAssertions();
    });

    it("should normalize param names DelegationSetId", async () => {
      const client = new Route53({
        region: "us-west-2",
      });

      requireRequestsFrom(client).toMatch({
        body: /<DelegationSetId>my-set<\/DelegationSetId>/,
      });

      await client.createHostedZone({
        CallerReference: "abcd",
        Name: "name",
        DelegationSetId: "/delegationset/my-set",
      });

      expect.hasAssertions();
    });

    it("should normalize param names Id", async () => {
      const client = new Route53({
        region: "us-west-2",
      });

      requireRequestsFrom(client).toMatch({
        path: "/2013-04-01/change/my-change",
      });

      await client.getChange({
        Id: "/change/my-change",
      });

      expect.hasAssertions();
    });

    it("should update change resource record sets request", async () => {
      const client = new Route53({
        region: "us-west-2",
      });

      requireRequestsFrom(client).toMatch({
        body(raw) {
          const parsed = parseXML(raw);
          expect(
            parsed.ChangeResourceRecordSetsRequest.ChangeBatch.Changes.Change.ResourceRecordSet.AliasTarget.HostedZoneId
          ).toMatch(/^my-zone$/);
        },
      });

      await client.changeResourceRecordSets({
        HostedZoneId: "zone",
        ChangeBatch: {
          Changes: [
            {
              Action: "UPSERT",
              ResourceRecordSet: {
                Name: "name",
                Type: "CNAME",
                AliasTarget: {
                  HostedZoneId: "/hostedzone/my-zone",
                  DNSName: "dns-name",
                  EvaluateTargetHealth: false,
                },
              },
            },
          ],
        },
      });

      expect.hasAssertions();
    });
  });
});
