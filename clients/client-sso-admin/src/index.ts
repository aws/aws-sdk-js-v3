// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>IAM Identity Center (successor to Single Sign-On) helps you securely create, or connect, your workforce identities and manage their
 *       access centrally across Amazon Web Services accounts and applications. IAM Identity Center is the recommended
 *       approach for workforce authentication and authorization in Amazon Web Services, for organizations of any size
 *       and type.</p>
 *          <note>
 *             <p>IAM Identity Center uses the <code>sso</code> and <code>identitystore</code> API namespaces.</p>
 *          </note>
 *          <p>This reference guide provides information on single sign-on operations which could be used for
 *       access management of Amazon Web Services accounts. For information about IAM Identity Center features, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">IAM Identity Center User
 *         Guide</a>.</p>
 *          <p>Many operations in the IAM Identity Center APIs rely on identifiers for users and groups, known as
 *       principals. For more information about how to work with principals and principal IDs in IAM Identity Center,
 *       see the <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/welcome.html">Identity Store API
 *         Reference</a>.</p>
 *          <note>
 *             <p>Amazon Web Services provides SDKs that consist of libraries and sample code for various programming
 *         languages and platforms (Java, Ruby, .Net, iOS, Android, and more). The SDKs provide a
 *         convenient way to create programmatic access to IAM Identity Center and other Amazon Web Services services. For more
 *         information about the Amazon Web Services SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p>
 *          </note>
 *
 * @packageDocumentation
 */
export * from "./SSOAdminClient";
export * from "./SSOAdmin";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { SSOAdminServiceException } from "./models/SSOAdminServiceException";
