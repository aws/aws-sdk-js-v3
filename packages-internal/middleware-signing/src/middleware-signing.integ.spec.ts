import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { EC2 } from "@aws-sdk/client-ec2";
import { SageMaker } from "@aws-sdk/client-sagemaker";
import { describe, test as it } from "vitest";

describe("middleware-signing", () => {
  describe(EC2.name, () => {
    it("sign requests in the header", async () => {
      const client = new EC2({ region: "us-west-2" });
      requireRequestsFrom(client).toMatch({
        headers: {
          "x-amz-date": /\d{8}T\d+Z/,
          "x-amz-content-sha256": /\w{30}\w+/,
          authorization:
            /AWS4-HMAC-SHA256 Credential=(.+)\/(.+)\/(.+)\/(.+)\/aws4_request, SignedHeaders=(.+), Signature=(.+)/,
        },
      });
      await client.createClientVpnEndpoint({
        ClientCidrBlock: "ClientCidrBlock",
        ServerCertificateArn: "ServerCertificateArn",
        AuthenticationOptions: [],
        ConnectionLogOptions: {},
      });
    });
  });

  describe(SageMaker.name, () => {
    it("sign requests in the header", async () => {
      const client = new SageMaker({ region: "us-west-2" });
      requireRequestsFrom(client).toMatch({
        headers: {
          "x-amz-date": /\d{8}T\d+Z/,
          "x-amz-content-sha256": /\w{30}\w+/,
          authorization:
            /AWS4-HMAC-SHA256 Credential=(.+)\/(.+)\/(.+)\/(.+)\/aws4_request, SignedHeaders=(.+), Signature=(.+)/,
        },
      });
      await client.putModelPackageGroupPolicy({
        ModelPackageGroupName: "ModelPackageGroupName",
        ResourcePolicy: "ResourcePolicy",
      });
    });
  });
});
