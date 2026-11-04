// smithy-typescript generated code
/* eslint-disable */
/**
 * AWS Signer is a fully managed code-signing service to help you ensure the trust and integrity of your code.
 *
 * Signer supports the following applications:
 *
 * With code signing for AWS Lambda, you can sign [AWS Lambda](http://docs.aws.amazon.com/lambda/latest/dg/) deployment packages. Integrated support is provided for [Amazon S3](http://docs.aws.amazon.com/AmazonS3/latest/gsg/), [Amazon CloudWatch](http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/), and [AWS CloudTrail](http://docs.aws.amazon.com/awscloudtrail/latest/userguide/). In order to sign code, you create a signing profile and then use Signer to sign Lambda zip files in S3.
 *
 * With code signing for IoT, you can sign code for any IoT device that is supported by AWS. IoT code signing is available for [Amazon FreeRTOS](http://docs.aws.amazon.com/freertos/latest/userguide/) and [AWS IoT Device Management](http://docs.aws.amazon.com/iot/latest/developerguide/), and is integrated with [AWS Certificate Manager (ACM)](http://docs.aws.amazon.com/acm/latest/userguide/). In order to sign code, you import a third-party code-signing certificate using ACM, and use that to sign updates in Amazon FreeRTOS and AWS IoT Device Management.
 *
 * With Signer and the Notation CLI from the [Notary  Project](https://notaryproject.dev/), you can sign container images stored in a container registry such as Amazon Elastic Container Registry (ECR). The signatures are stored in the registry alongside the images, where they are available for verifying image authenticity and integrity.
 *
 * For more information about Signer, see the [AWS Signer Developer Guide](http://docs.aws.amazon.com/signer/latest/developerguide/Welcome.html).
 *
 * @packageDocumentation
 */
export * from "./SignerClient";
export * from "./Signer";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { SignerExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./waiters";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { SignerServiceException } from "./models/SignerServiceException";
