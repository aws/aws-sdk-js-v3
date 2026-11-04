// smithy-typescript generated code
/* eslint-disable */
/**
 * Amazon Cloud Directory
 *
 * Amazon Cloud Directory is a component of the AWS Directory Service that simplifies the development and management of cloud-scale web, mobile, and IoT applications. This guide describes the Cloud Directory operations that you can call programmatically and includes detailed information on data types and errors. For information about Cloud Directory features, see [AWS Directory Service](https://aws.amazon.com/directoryservice/) and the [Amazon Cloud Directory Developer Guide](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/what_is_cloud_directory.html).
 *
 * Amazon Cloud Directory is no longer open to new customers and will reach end of support on July 24, 2027. For alternatives to Amazon Cloud Directory, explore [Amazon DynamoDB](https://aws.amazon.com/dynamodb/) and [Amazon Neptune](https://aws.amazon.com/neptune/). If you need help choosing the right alternative for your use case, or for any other questions, contact [AWS Support](https://aws.amazon.com/support/).
 *
 * @packageDocumentation
 */
export * from "./CloudDirectoryClient";
export * from "./CloudDirectory";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { CloudDirectoryExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { CloudDirectoryServiceException } from "./models/CloudDirectoryServiceException";
