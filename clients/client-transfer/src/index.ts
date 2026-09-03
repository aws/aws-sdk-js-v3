// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Transfer Family offers fully managed support for the transfer of files over SFTP, AS2, FTPS, FTP, and web browser-based transfers directly into and out of Amazon Web Services storage services.</p> <p>File transfer protocols are used in data exchange workflows across different industries such as financial services, healthcare, advertising, and retail, among others. Transfer Family simplifies the migration of file transfer workflows to Amazon Web Services.</p> <p>To use the Transfer Family service, you instantiate a server in the Amazon Web Services Region of your choice. You can create the server, list available servers, and update and delete servers. The server is the entity that requests file operations from Transfer Family. Servers have a number of important properties. The server is a named instance as identified by a system assigned <code>ServerId</code> identifier. You can optionally assign a hostname, or even a custom hostname to a server. The service bills for any instantiated servers (even ones <code>OFFLINE</code>), and for the amount of data transferred.</p> <p>Users must be known to the server that requests file operations. A user as identified by their username is assigned to a server. Usernames are used to authenticate requests. A server can have only one authentication method: <code>AWS_DIRECTORY_SERVICE</code>, <code>SERVICE_MANAGED</code>, <code>AWS_LAMBDA</code>, or <code>API_GATEWAY</code>.</p> <p>Transfer Family also supports web applications that provide browser-based file transfer capabilities. Web applications can be configured with VPC endpoints to enable secure, private connectivity within your Virtual Private Cloud (VPC). This allows you to control network access and route traffic through your VPC infrastructure while maintaining the managed benefits of Transfer Family.</p> <p>This API interface reference for Transfer Family contains documentation for a programming interface that you can use to manage Transfer Family. The reference structure is as follows:</p> <ul> <li> <p>For the alphabetical list of API actions, see .</p> </li> <li> <p>For the alphabetical list of data types, see .</p> </li> <li> <p>For a list of common query parameters, see <a>CommonParameters</a>.</p> </li> <li> <p>For descriptions of the error codes, see <a>CommonErrors</a>.</p> </li> </ul> <note> <p>Rather than actually running a command, you can use the <code>--generate-cli-skeleton</code> parameter with any API call to generate and display a parameter template. You can then use the generated template to customize and use as input on a later command. For details, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-skeleton.html#cli-usage-skeleton-generate">Generate and use a parameter skeleton file</a>.</p> </note>
 *
 * @packageDocumentation
 */
export * from "./TransferClient";
export * from "./Transfer";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { TransferExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./waiters";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { TransferServiceException } from "./models/TransferServiceException";
