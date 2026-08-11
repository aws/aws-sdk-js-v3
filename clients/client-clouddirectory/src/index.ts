// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>Amazon Cloud Directory</fullname>
 *          <p>Amazon Cloud Directory is a component of the AWS Directory Service that simplifies the
 *       development and management of cloud-scale web, mobile, and IoT applications. This guide
 *       describes the Cloud Directory operations that you can call programmatically and includes
 *       detailed information on data types and errors. For information about Cloud Directory features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory
 *         Service</a> and the <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/what_is_cloud_directory.html">Amazon Cloud Directory Developer Guide</a>.</p>
 *          <p>Amazon Cloud Directory is no longer open to new customers and will reach end of support on July 24, 2027. For alternatives to Amazon Cloud Directory, explore <a href="https://aws.amazon.com/dynamodb/">Amazon DynamoDB</a> and <a href="https://aws.amazon.com/neptune/">Amazon Neptune</a>. If you need help choosing the right alternative for your use case, or for any other questions, contact <a href="https://aws.amazon.com/support/">AWS Support</a>.</p>
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
