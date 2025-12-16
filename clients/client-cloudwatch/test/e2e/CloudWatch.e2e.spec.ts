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
    cborShorthand: new CloudWatch({
      region: "us-west-2",
      protocol: AwsSmithyRpcV2CborProtocol,
    }),
    queryShorthand: new CloudWatch({
      region: "us-west-2",
      protocol: AwsQueryProtocol,
    }),
    jsonShorthand: new CloudWatch({
      region: "us-west-2",
      protocol: AwsJson1_0Protocol,
    }),
  };

  for (const client of Object.values(cloudwatch)) {
    it(`can make requests with ${client.config.protocol.constructor.name}`, async () => {
      const dashes = await client.listDashboards();
      expect(dashes.DashboardEntries ?? []).toBeInstanceOf(Array);
    });
  }
});
