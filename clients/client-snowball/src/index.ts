// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>The Amazon Web Services Snow Family provides a petabyte-scale data transport solution that uses
 *       secure devices to transfer large amounts of data between your on-premises data centers and
 *       Amazon Simple Storage Service (Amazon S3). The Snow Family commands described here provide access to the same
 *       functionality that is available in the Amazon Web Services Snow Family Management Console, which enables you to create
 *       and manage jobs for a Snow Family device. To transfer data locally with a Snow Family device,
 *       you'll need to use the Snowball Edge client or the Amazon S3 API Interface for Snowball or OpsHub for Snow Family. For more information, see the <a href="https://docs.aws.amazon.com/AWSImportExport/latest/ug/api-reference.html">User Guide</a>.</p>
 *
 * @packageDocumentation
 */
export * from "./SnowballClient";
export * from "./Snowball";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { SnowballExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { SnowballServiceException } from "./models/SnowballServiceException";
