// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>With the Amazon Cognito user pools API, you can configure user pools and authenticate users. To
 *             authenticate users from third-party identity providers (IdPs) in this API, you can
 *                 <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation-consolidate-users.html">link IdP users to native user profiles</a>. Learn more
 *             about the authentication and authorization of federated users at <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation.html">Adding user pool sign-in through a third party</a> and in the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-userpools-server-contract-reference.html">User pool federation endpoints and managed login reference</a>.</p>
 *          <p>This API reference provides detailed information about API operations and object types
 *             in Amazon Cognito.</p>
 *          <p>Along with resource management operations, the Amazon Cognito user pools API includes classes
 *             of operations and authorization models for client-side and server-side authentication of
 *             users. You can interact with operations in the Amazon Cognito user pools API as any of the
 *             following subjects.</p>
 *          <ol>
 *             <li>
 *                <p>An administrator who wants to configure user pools, app clients, users,
 *                     groups, or other user pool functions.</p>
 *             </li>
 *             <li>
 *                <p>A server-side app, like a web application, that wants to use its Amazon Web Services
 *                     privileges to manage, authenticate, or authorize a user.</p>
 *             </li>
 *             <li>
 *                <p>A client-side app, like a mobile app, that wants to make unauthenticated
 *                     requests to manage, authenticate, or authorize a user.</p>
 *             </li>
 *          </ol>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flows-public-server-side.html#user-pools-API-operations">Understanding API, OIDC, and managed login pages
 *                 authentication</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
 *          <p>With your Amazon Web Services SDK, you can build the logic to support operational flows in every use
 *             case for this API. You can also make direct REST API requests to <a href="https://docs.aws.amazon.com/general/latest/gr/cognito_identity.html#cognito_identity_your_user_pools_region">Amazon Cognito user pools service endpoints</a>. The following links can get you started
 *             with the <code>CognitoIdentityProvider</code> client in supported Amazon Web Services SDKs.</p>
 *          <p>To get started with an Amazon Web Services SDK, see <a href="http://aws.amazon.com/developer/tools/">Tools to Build on Amazon Web Services</a>. For example actions and scenarios, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/service_code_examples_cognito-identity-provider.html">Code examples for Amazon Cognito Identity Provider using Amazon Web Services
 *                 SDKs</a>.</p>
 *
 * @packageDocumentation
 */
export * from "./CognitoIdentityProviderClient";
export * from "./CognitoIdentityProvider";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { CognitoIdentityProviderExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { CognitoIdentityProviderServiceException } from "./models/CognitoIdentityProviderServiceException";
