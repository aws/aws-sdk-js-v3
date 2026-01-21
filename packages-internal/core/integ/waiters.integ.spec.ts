import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import {
  type DescribeClusterCommandInput,
  Route53RecoveryControlConfig,
  waitUntilClusterCreated,
} from "@aws-sdk/client-route53-recovery-control-config";
import { type HeadObjectCommandInput, S3, waitUntilObjectExists } from "@aws-sdk/client-s3";
import { HttpResponse } from "@smithy/protocol-http";
import { Readable } from "node:stream";
import { describe, test as it } from "vitest";

describe("waiters", () => {
  it("should poll until a return condition is met (http status)", async () => {
    const s3 = new S3({
      credentials: {
        accessKeyId: "INTEG_TEST",
        secretAccessKey: "INTEG_TEST",
      },
      region: "us-west-2",
    });

    requireRequestsFrom(s3)
      .toMatch(
        {
          hostname: /s3\.us-west-2\.amazonaws\.com/,
        },
        {
          hostname: /s3\.us-west-2\.amazonaws\.com/,
        }
      )
      .respondWith(
        new HttpResponse({
          statusCode: 404,
          headers: {},
        }),
        new HttpResponse({
          statusCode: 200,
          headers: {},
        })
      );

    const waiterParams: HeadObjectCommandInput = {
      Bucket: "@@@@",
      Key: "####",
    };

    await waitUntilObjectExists({ client: s3, maxDelay: 5, maxWaitTime: 20 }, waiterParams);
  });

  it("should poll until a return condition is met (nested property)", async () => {
    const r53 = new Route53RecoveryControlConfig({
      credentials: {
        accessKeyId: "INTEG_TEST",
        secretAccessKey: "INTEG_TEST",
      },
      region: "us-west-2",
    });

    requireRequestsFrom(r53)
      .toMatch(
        {
          hostname: /amazon/,
        },
        {
          hostname: /amazon/,
        }
      )
      .respondWith(
        new HttpResponse({
          statusCode: 200,
          headers: {},
          body: Readable.from(
            JSON.stringify({
              Cluster: {
                Status: "PENDING",
              },
            })
          ),
        }),
        new HttpResponse({
          statusCode: 200,
          headers: {},
          body: Readable.from(
            JSON.stringify({
              Cluster: {
                Status: "DEPLOYED",
              },
            })
          ),
        })
      );

    const waiterParams: DescribeClusterCommandInput = {
      ClusterArn: "@@@@",
    };

    await waitUntilClusterCreated({ client: r53, maxDelay: 5, maxWaitTime: 20 }, waiterParams);
  });
}, 60_000);
