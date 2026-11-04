// smithy-typescript generated code
/* eslint-disable */
/**
 * Security Token Service
 *
 * Amazon Web Services provides Security Token Service (STS) as a web service that enables you to request temporary, limited-privilege credentials for users. This guide describes the STS API. For more information, see [Temporary Security Credentials](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html) in the *IAM User Guide*.
 *
 * > **Note:** As an alternative to using the API, you can use one of the Amazon Web Services SDKs, which consist of libraries and sample code for various programming languages and platforms such as Java, Ruby, .NET, iOS, Android, and others. The SDKs provide a convenient way to create programmatic access to STS. For example, the SDKs can cryptographically sign requests, manage errors, and retry requests automatically. For information about the Amazon Web Services SDKs, see [Tools to Build on Amazon Web Services](http://aws.amazon.com/tools/).
 *
 * For information about setting up signatures and authorization through the API, see [Signing Amazon Web Services API Requests](https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html) in the *Amazon Web Services General Reference*. For general information about the Query API, see [Making Query Requests](https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html) in the *IAM User Guide*. For information about using security tokens with other Amazon Web Services products, see [Amazon Web Services Services That Work with IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html) in the *IAM User Guide*.
 *
 * For information about STS endpoints, see [STS Regions and endpoints](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_region-endpoints.html) in the *IAM User Guide*. For information about logging STS API calls, see [Logging IAM and STS API calls with CloudTrail](https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html) in the *IAM User Guide*.
 *
 * @packageDocumentation
 */
export * from "./STSClient";
export * from "./STS";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { STSExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./schemas/schemas_0";

export * from "./models/errors";
export * from "./models/models_0";

export * from "./defaultRoleAssumers"

export { STSServiceException } from "./models/STSServiceException";
