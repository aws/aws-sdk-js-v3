// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>AWS IAM Identity Center (successor to AWS Single Sign-On) OpenID Connect (OIDC) is a web service that enables a client (such as AWS CLI
 *       or a native application) to register with IAM Identity Center. The service also enables the client to
 *       fetch the user’s access token upon successful authentication and authorization with
 *       IAM Identity Center.</p>
 *          <note>
 *             <p>Although AWS Single Sign-On was renamed, the <code>sso</code> and
 *         <code>identitystore</code> API namespaces will continue to retain their original name for
 *         backward compatibility purposes. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#renamed">IAM Identity Center rename</a>.</p>
 *          </note>
 *          <p>
 *             <b>Considerations for Using This Guide</b>
 *          </p>
 *          <p>Before you begin using this guide, we recommend that you first review the following
 *       important information about how the IAM Identity Center OIDC service works.</p>
 *          <ul>
 *             <li>
 *                <p>The IAM Identity Center OIDC service currently implements only the portions of the OAuth 2.0
 *           Device Authorization Grant standard (<a href="https://tools.ietf.org/html/rfc8628">https://tools.ietf.org/html/rfc8628</a>) that are necessary to enable single
 *           sign-on authentication with the AWS CLI. Support for other OIDC flows frequently needed
 *           for native applications, such as Authorization Code Flow (+ PKCE), will be addressed in
 *           future releases.</p>
 *             </li>
 *             <li>
 *                <p>The service emits only OIDC access tokens, such that obtaining a new token (For
 *           example, token refresh) requires explicit user re-authentication.</p>
 *             </li>
 *             <li>
 *                <p>The access tokens provided by this service grant access to all AWS account
 *           entitlements assigned to an IAM Identity Center user, not just a particular application.</p>
 *             </li>
 *             <li>
 *                <p>The documentation in this guide does not describe the mechanism to convert the access
 *           token into AWS Auth (“sigv4”) credentials for use with IAM-protected AWS service
 *           endpoints. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/PortalAPIReference/API_GetRoleCredentials.html">GetRoleCredentials</a> in the <i>IAM Identity Center Portal API Reference
 *             Guide</i>.</p>
 *             </li>
 *          </ul>
 *          <p>For general information about IAM Identity Center, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">What is
 *         IAM Identity Center?</a> in the <i>IAM Identity Center User Guide</i>.</p>
 *
 * @packageDocumentation
 */
export * from "./SSOOIDCClient";
export * from "./SSOOIDC";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export { RuntimeExtension } from "./runtimeExtensions";
export { SSOOIDCExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./models";

import "@aws-sdk/util-endpoints";

export { SSOOIDCServiceException } from "./models/SSOOIDCServiceException";
