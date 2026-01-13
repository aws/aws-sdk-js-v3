// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Transfer Family is a fully managed service that enables the transfer of files over the File Transfer Protocol (FTP), File Transfer Protocol over SSL (FTPS), or Secure Shell (SSH) File Transfer Protocol (SFTP) directly into and out of Amazon Simple Storage Service (Amazon S3) or Amazon EFS. Additionally, you can use Applicability Statement 2 (AS2) to transfer files into and out of Amazon S3. Amazon Web Services helps you seamlessly migrate your file transfer workflows to Transfer Family by integrating with existing authentication systems, and providing DNS routing with Amazon Route 53 so nothing changes for your customers and partners, or their applications. With your data in Amazon S3, you can use it with Amazon Web Services services for processing, analytics, machine learning, and archiving. Getting started with Transfer Family is easy since there is no infrastructure to buy and set up.</p>
 *
 * @packageDocumentation
 */
export * from "./TransferClient";
export * from "./Transfer";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { TransferExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";
export * from "./pagination";
export * from "./waiters";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { TransferServiceException } from "./models/TransferServiceException";
