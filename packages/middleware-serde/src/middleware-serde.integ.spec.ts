import { EC2 } from "@aws-sdk/client-ec2";
import { S3 } from "@aws-sdk/client-s3";
import { SageMaker } from "@aws-sdk/client-sagemaker";
import { SageMakerRuntime } from "@aws-sdk/client-sagemaker-runtime";

import { requireRequestsFrom } from "../../../private/aws-util-test/src";

describe("middleware-serde", () => {
  describe(S3.name, () => {
    it("should serialize xml", async () => {
      const client = new S3({ region: "us-west-2" });
      requireRequestsFrom(client).toMatch({
        method: "PUT",
        hostname: "s3.us-west-2.amazonaws.com",
        body: '<?xml version="1.0" encoding="UTF-8"?><AccessControlPolicy xmlns="http://s3.amazonaws.com/doc/2006-03-01/"><AccessControlList><Grant><Grantee xsi:type="CanonicalUser" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><DisplayName>STRING_VALUE</DisplayName><EmailAddress>STRING_VALUE</EmailAddress><ID>STRING_VALUE</ID><URI>STRING_VALUE</URI></Grantee><Permission>READ</Permission></Grant></AccessControlList><Owner><DisplayName>STRING_VALUE</DisplayName><ID>STRING_VALUE</ID></Owner></AccessControlPolicy>',
        protocol: "https:",
        path: "/STRING_VALUE/",
        headers: {
          "content-type": "application/xml",
          "x-amz-acl": "private",
          "content-length": "509",
          Expect: "100-continue",
          "content-md5": "qpwmS0vhCISEXes008aoXA==",
          host: "s3.us-west-2.amazonaws.com",
          "x-amz-content-sha256": "c0a89780e1aac5dfa17604e9e25616e7babba0b655db189be49b4c352543bb22",
        },
        query: { acl: "" },
      });
      await client.putBucketAcl({
        ACL: "private",
        AccessControlPolicy: {
          Grants: [
            {
              Grantee: {
                DisplayName: "STRING_VALUE",
                EmailAddress: "STRING_VALUE",
                ID: "STRING_VALUE",
                URI: "STRING_VALUE",
                Type: "CanonicalUser", // required
              },
              Permission: "READ",
            },
          ],
          Owner: {
            DisplayName: "STRING_VALUE",
            ID: "STRING_VALUE",
          },
        },
        Bucket: "STRING_VALUE", // required
      });
    });
  });

  describe(EC2.name, () => {
    it("should serialize query", async () => {
      const client = new EC2({ region: "us-west-2" });
      requireRequestsFrom(client).toMatch({
        method: "POST",
        hostname: "ec2.us-west-2.amazonaws.com",
        query: {},
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          host: "ec2.us-west-2.amazonaws.com",
        },
        body: /ClientCidrBlock=ClientCidrBlock&ServerCertificateArn=ServerCertificateArn(.*?)&Action=CreateClientVpnEndpoint&Version=2016-11-15/,
        protocol: "https:",
        path: "/",
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
    it("should serialize json", async () => {
      const client = new SageMaker({ region: "us-west-2" });
      requireRequestsFrom(client).toMatch({
        method: "POST",
        hostname: "api.sagemaker.us-west-2.amazonaws.com",
        query: {},
        headers: {
          "content-type": "application/x-amz-json-1.1",
          "x-amz-target": "SageMaker.PutModelPackageGroupPolicy",
          host: "api.sagemaker.us-west-2.amazonaws.com",
        },
        body: '{"ModelPackageGroupName":"ModelPackageGroupName","ResourcePolicy":"ResourcePolicy"}',
        protocol: "https:",
        path: "/",
      });
      await client.putModelPackageGroupPolicy({
        ModelPackageGroupName: "ModelPackageGroupName",
        ResourcePolicy: "ResourcePolicy",
      });
    });
  });

  describe(SageMakerRuntime.name, () => {
    it("should serialize json", async () => {
      const client = new SageMakerRuntime({ region: "us-west-2" });
      requireRequestsFrom(client).toMatch({
        method: "POST",
        hostname: "runtime.sagemaker.us-west-2.amazonaws.com",
        query: {},
        headers: {
          "x-amzn-sagemaker-inputlocation": "InputLocation",
          host: "runtime.sagemaker.us-west-2.amazonaws.com",
          "x-amz-content-sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
        },
        body: /undefined/,
        protocol: "https:",
        path: "/endpoints/EndpointName/async-invocations",
      });
      await client.invokeEndpointAsync({
        EndpointName: "EndpointName",
        InputLocation: "InputLocation",
      });
    });
  });
});
