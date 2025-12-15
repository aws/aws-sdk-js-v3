// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>The Identity Store service used by IAM Identity Center provides a single place to retrieve all of your identities (users and groups). For more information, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html"> IAM Identity Center User Guide</a>.</p> <p>This reference guide describes the identity store operations that you can call programmatically and includes detailed information about data types and errors.</p> <note> <p> IAM Identity Center uses the <code>sso</code>, <code>sso-directory</code>, and <code>identitystore</code> API namespaces. The <code>sso-directory</code> and <code>identitystore</code> namespaces authorize access to data in the Identity Store. Make sure your policies with IAM actions from these two namespaces are consistent to avoid conflicting authorization to the same data.</p> </note>
 *
 * @packageDocumentation
 */
export * from "./IdentitystoreClient";
export * from "./Identitystore";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { IdentitystoreExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export type * from "./models/models_0";

export { IdentitystoreServiceException } from "./models/IdentitystoreServiceException";
