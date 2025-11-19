// smithy-typescript generated code
/* eslint-disable */
/**
 * <p> Amazon Web Services Directory Service Data is an extension of Directory Service. This API reference provides detailed information
 *       about Directory Service Data operations and object types. </p>
 *          <p> With Directory Service Data, you can create, read, update, and delete users, groups, and memberships from
 *       your Managed Microsoft AD without additional costs and without deploying dedicated management
 *       instances. You can also perform built-in object management tasks across directories without
 *       direct network connectivity, which simplifies provisioning and access management to achieve
 *       fully automated deployments. Directory Service Data supports user and group write operations, such as
 *         <code>CreateUser</code> and <code>CreateGroup</code>, within the organizational unit (OU) of
 *       your Managed Microsoft AD. Directory Service Data supports read operations, such as <code>ListUsers</code> and
 *         <code>ListGroups</code>, on all users, groups, and group memberships within your
 *       Managed Microsoft AD and across trusted realms. Directory Service Data supports adding and removing group members in
 *       your OU and the Amazon Web Services Delegated Groups OU, so you can grant and deny access to specific roles
 *       and permissions. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_manage_users_groups.html">Manage users and
 *         groups</a> in the <i>Directory Service Administration Guide</i>. </p>
 *          <note>
 *             <p> Directory management operations and configuration changes made against the Directory Service
 *         API will also reflect in Directory Service Data API with eventual consistency. You can expect a short delay
 *         between management changes, such as adding a new directory trust and calling the Directory Service Data API
 *         for the newly created trusted realm. </p>
 *          </note>
 *          <p> Directory Service Data connects to your Managed Microsoft AD domain controllers and performs operations on
 *       underlying directory objects. When you create your Managed Microsoft AD, you choose subnets for domain
 *       controllers that Directory Service creates on your behalf. If a domain controller is unavailable, Directory Service Data
 *       uses an available domain controller. As a result, you might notice eventual consistency while
 *       objects replicate from one domain controller to another domain controller. For more
 *       information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_getting_started_what_gets_created.html">What
 *         gets created</a> in the <i>Directory Service Administration Guide</i>.
 *       Directory limits vary by Managed Microsoft AD edition: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Standard edition</b> – Supports 8 transactions per
 *           second (TPS) for read operations and 4 TPS for write operations per directory. There's a
 *           concurrency limit of 10 concurrent requests. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Enterprise edition</b> – Supports 16 transactions per
 *           second (TPS) for read operations and 8 TPS for write operations per directory. There's a
 *           concurrency limit of 10 concurrent requests.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Amazon Web Services Account</b> - Supports a total of 100 TPS for
 *           Directory Service Data operations across all directories.</p>
 *             </li>
 *          </ul>
 *          <p> Directory Service Data only supports the Managed Microsoft AD directory type and is only available in the primary
 *       Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html">Managed Microsoft AD</a>
 *       and <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/multi-region-global-primary-additional.html">Primary vs additional Regions</a> in the <i>Directory Service Administration
 *         Guide</i>. </p>
 *
 * @packageDocumentation
 */
export * from "./DirectoryServiceDataClient";
export * from "./DirectoryServiceData";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { DirectoryServiceDataExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export type * from "./models/models_0";

export { DirectoryServiceDataServiceException } from "./models/DirectoryServiceDataServiceException";
