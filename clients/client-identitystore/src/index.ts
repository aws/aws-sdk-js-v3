// smithy-typescript generated code
/* eslint-disable */
/**
 * <note> <p> IAM Identity Center uses the <code>sso</code>, <code>sso-directory</code>, and <code>identitystore</code> API namespaces. The <code>sso-directory</code> and <code>identitystore</code> namespaces authorize access to data in the Identity Store. Make sure your policies with IAM actions from these two namespaces are consistent to avoid conflicting authorization to the same data.</p> </note> <p>The Identity Store service used by IAM Identity Center provides a single place to retrieve all of your identities (users and groups). You can use the identity store API operations in this guide to manage your identity data programmatically. The scope of these APIs allows you to create, read, update, delete, and list users, groups, and memberships.</p> <p>This guide also describes identity store operations that you can call and includes detailed information about data types and errors.</p> <important> <p>If you use an external identity provider or Active Directory as your identity source, we recommend that you use the <code>Create</code>, <code>Update</code>, and <code>Delete</code> APIs with caution. Because IAM Identity Center doesn't support outbound synchronization, your identity source won't automatically update with the changes that you make to users or groups using these APIs.</p> </important> <p>Amazon Web Services provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, iOS, Android, and more). The SDKs provide a convenient way to programmatically access the identity store and other Amazon Web Services services. For more information about the Amazon Web Services SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Amazon Web Services Builder Center Toolbox</a>.</p>
 *
 * @packageDocumentation
 */
export * from "./IdentitystoreClient";
export * from "./Identitystore";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { IdentitystoreExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { IdentitystoreServiceException } from "./models/IdentitystoreServiceException";
