import { customFields, snapshotTestingProtocolResponseSerializers } from "@smithy/snapshot-testing";

import { AwsEc2QuerySnapshotResponseSerializer } from "./snapshot-response-serializers/AwsEc2QuerySnapshotResponseSerializer";
import { AwsJsonRpc1_0SnapshotResponseSerializer } from "./snapshot-response-serializers/AwsJsonRpc1_0SnapshotResponseSerializer";
import { AwsJsonRpc1_1SnapshotResponseSerializer } from "./snapshot-response-serializers/AwsJsonRpc1_1SnapshotResponseSerializer";
import { AwsQuerySnapshotResponseSerializer } from "./snapshot-response-serializers/AwsQuerySnapshotResponseSerializer";
import { AwsRestJsonSnapshotResponseSerializer } from "./snapshot-response-serializers/AwsRestJsonSnapshotResponseSerializer";
import { AwsRestXmlSnapshotResponseSerializer } from "./snapshot-response-serializers/AwsRestXmlSnapshotResponseSerializer";

/**
 * @internal
 */
export const setup = () => {
  Object.assign(customFields, {
    PredictEndpoint: "https://localhost",
    ChecksumAlgorithm: "CRC64NVME",
    AccountId: "123456789012",
    OutpostId: "OutpostId",
    QueueUrl: "https://sqs.us-east-1.amazonaws.com/012345678901/MyQueue",

    // SQS - to allow md5 middleware to function.
    MD5OfMessageBody: "07261c767f72c87a6c6e6e62c93c2664", // md5 of "__Body__"
    MD5OfBody: "07261c767f72c87a6c6e6e62c93c2664", // md5 of "__Body__"
    MessageBody: "__Body__",
  });

  const [ec2, rpc10, rpc11, query, restJson, restXml] = [
    new AwsEc2QuerySnapshotResponseSerializer(),
    new AwsJsonRpc1_0SnapshotResponseSerializer(),
    new AwsJsonRpc1_1SnapshotResponseSerializer(),
    new AwsQuerySnapshotResponseSerializer(),
    new AwsRestJsonSnapshotResponseSerializer(),
    new AwsRestXmlSnapshotResponseSerializer(),
  ];

  Object.assign(snapshotTestingProtocolResponseSerializers, {
    [ec2.getShapeId()]: ec2,
    [rpc10.getShapeId()]: rpc10,
    [rpc11.getShapeId()]: rpc11,
    [query.getShapeId()]: query,
    [restJson.getShapeId()]: restJson,
    [restXml.getShapeId()]: restXml,
  });
};

setup();
