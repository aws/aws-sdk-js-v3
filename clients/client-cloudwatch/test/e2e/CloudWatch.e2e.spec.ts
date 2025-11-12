import { CloudWatch } from "@aws-sdk/client-cloudwatch";
import { AwsJson1_0Protocol, AwsQueryProtocol, AwsSmithyRpcV2CborProtocol } from "@aws-sdk/core";
import { describe, expect, test as it } from "vitest";

describe(CloudWatch.name, () => {
  const cloudwatch = {
    cbor: new CloudWatch({
      region: "us-west-2",
      protocol: new AwsSmithyRpcV2CborProtocol({
        defaultNamespace: "com.amazonaws.cloudwatch",
        awsQueryCompatible: true,
      }),
    }),
    query: new CloudWatch({
      region: "us-west-2",
      protocol: new AwsQueryProtocol({
        defaultNamespace: "com.amazonaws.cloudwatch",
        /**
         * Hi security scanners. I see you looking at my xml namespace.
         * It's not a link, ok? We're not going to make requests over http here.
         * Thanks.
         */
        xmlNamespace: "http://monitoring.amazonaws.com/doc/2010-08-01/",
        version: "2010-08-01",
      }),
    }),
    json: new CloudWatch({
      region: "us-west-2",
      protocol: new AwsJson1_0Protocol({
        defaultNamespace: "com.amazonaws.cloudwatch",
        serviceTarget: "GraniteServiceVersion20100801",
        awsQueryCompatible: true,
      }),
    }),
  };

  it("can make requests with AWS Query protocol", async () => {
    const dashes = await cloudwatch.query.listDashboards();
    expect(dashes.DashboardEntries ?? []).toBeInstanceOf(Array);
  });

  it("can make requests with Smithy RPCv2 CBOR protocol", async () => {
    const dashes = await cloudwatch.cbor.listDashboards();
    expect(dashes.DashboardEntries ?? []).toBeInstanceOf(Array);
  });

  it("can make requests with AWS JSON RPC protocol", async () => {
    const dashes = await cloudwatch.json.listDashboards();
    expect(dashes.DashboardEntries ?? []).toBeInstanceOf(Array);
  });
});
