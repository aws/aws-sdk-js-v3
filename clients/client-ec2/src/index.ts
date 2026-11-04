// smithy-typescript generated code
/* eslint-disable */
/**
 * Amazon Elastic Compute Cloud
 *
 * This is the *Amazon EC2 API Reference*. It provides descriptions, API request parameters, and the XML response for each of the Amazon EC2 Query API actions. Note that the Amazon EC2 API includes actions for Amazon EC2 plus additional services, such as Amazon EBS and Amazon VPC.
 *
 * **Learn more**
 *
 * - To learn about using the Query API, see [Using the API for Amazon EC2](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-low-level-api.html).
 * - To learn about the permissions required to call an Amazon EC2 API action, see [Actions, resources, and condition keys for Amazon EC2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2.html).
 * - To get the list of API actions by service and resource, see [Actions by service](https://docs.aws.amazon.com/ec2/latest/devguide/OperationList-query.html).
 * - To get the alphabetical list of API actions, see .
 * - To get descriptions of the API error codes, see [Error codes for the Amazon EC2 API](https://docs.aws.amazon.com/ec2/latest/devguide/errors-overview.html).
 *
 * Alternatively, use one of the following methods to access the Amazon EC2 API, instead of using the Query API directly:
 *
 * - [Amazon Web Services CLI Command Reference - ec2 commands](https://docs.aws.amazon.com/cli/latest/reference/ec2/)
 * - [CloudFormation - Amazon EC2 resource type reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/AWS_EC2.html)
 * - [Amazon Web Services Tools for PowerShell Cmdlet Reference - Amazon EC2 cmdlets](https://docs.aws.amazon.com/powershell/v5/reference/items/EC2_cmdlets.html)
 * - [Amazon Web Services SDKs](https://builder.aws.com/build/tools)
 *
 * @packageDocumentation
 */
export * from "./EC2Client";
export * from "./EC2";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { EC2ExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./waiters";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/models_0";
export * from "./models/models_1";
export * from "./models/models_2";
export * from "./models/models_3";
export * from "./models/models_4";
export * from "./models/models_5";
export * from "./models/models_6";
export * from "./models/models_7";
export * from "./models/models_8";

export { EC2ServiceException } from "./models/EC2ServiceException";
