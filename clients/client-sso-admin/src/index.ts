// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>AWS IAM Identity Center (successor to AWS Single Sign-On) helps you securely create, or connect, your workforce identities and manage their
 *       access centrally across AWS accounts and applications. IAM Identity Center is the recommended
 *       approach for workforce authentication and authorization in AWS, for organizations of any size
 *       and type.</p>
 *          <note>
 *             <p>Although AWS Single Sign-On was renamed, the <code>sso</code> and
 *         <code>identitystore</code> API namespaces will continue to retain their original name for
 *         backward compatibility purposes. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#renamed">IAM Identity Center rename</a>.</p>
 *          </note>
 *          <p>This reference guide provides information on single sign-on operations which could be used for
 *       access management of AWS accounts. For information about IAM Identity Center features, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">IAM Identity Center User
 *         Guide</a>.</p>
 *          <p>Many operations in the IAM Identity Center APIs rely on identifiers for users and groups, known as
 *       principals. For more information about how to work with principals and principal IDs in IAM Identity Center,
 *       see the <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/welcome.html">Identity Store API
 *         Reference</a>.</p>
 *          <note>
 *             <p>AWS provides SDKs that consist of libraries and sample code for various programming
 *         languages and platforms (Java, Ruby, .Net, iOS, Android, and more). The SDKs provide a
 *         convenient way to create programmatic access to IAM Identity Center and other AWS services. For more
 *         information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p>
 *          </note>
 *
 * @packageDocumentation
 */
export * from "./SSOAdminClient";
export * from "./SSOAdmin";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { SSOAdminServiceException } from "./models/SSOAdminServiceException";
