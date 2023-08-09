// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>With the Amazon Cognito user pools API, you can set up user pools and app clients, and
 *             authenticate users. To authenticate users from third-party identity providers (IdPs) in
 *             this API, you can <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation-consolidate-users.html">link IdP users to native user profiles</a>. Learn more
 *             about the authentication and authorization of federated users in the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-userpools-server-contract-reference.html">Using the Amazon Cognito user pools API and user pool endpoints</a>.</p>
 *          <p>This API reference provides detailed information about API operations and object types
 *             in Amazon Cognito. At the bottom of the page for each API operation and object, under
 *                 <i>See Also</i>, you can learn how to use it in an Amazon Web Services SDK in the
 *             language of your choice.</p>
 *          <p>Along with resource management operations, the Amazon Cognito user pools API includes classes
 *             of operations and authorization models for client-side and server-side user operations.
 *             For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a> in the
 *                 <i>Amazon Cognito Developer Guide</i>.</p>
 *          <p>You can also start reading about the <code>CognitoIdentityProvider</code> client in
 *             the following SDK guides.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/cli/latest/reference/cognito-idp/index.html#cli-aws-cognito-idp">Amazon Web Services
 *                         Command Line Interface</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sdkfornet/v3/apidocs/items/CognitoIdentityProvider/TCognitoIdentityProviderClient.html">Amazon Web Services SDK for .NET</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://sdk.amazonaws.com/cpp/api/LATEST/aws-cpp-sdk-cognito-idp/html/class_aws_1_1_cognito_identity_provider_1_1_cognito_identity_provider_client.html">Amazon Web Services SDK for C++</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sdk-for-go/api/service/cognitoidentityprovider/#CognitoIdentityProvider">Amazon Web Services SDK for Go</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/cognitoidentityprovider/CognitoIdentityProviderClient.html">Amazon Web Services SDK for Java V2</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html">Amazon Web Services
 *                         SDK for JavaScript</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/aws-sdk-php/v3/api/api-cognito-idp-2016-04-18.html">Amazon Web Services SDK for PHP
 *                         V3</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/cognito-idp.html">Amazon Web Services SDK for Python</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sdk-for-ruby/v3/api/Aws/CognitoIdentityProvider/Client.html">Amazon Web Services SDK
 *                         for Ruby V3</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>To get started with an Amazon Web Services SDK, see <a href="http://aws.amazon.com/developer/tools/">Tools to Build on Amazon Web Services</a>. For example actions and scenarios, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/service_code_examples_cognito-identity-provider.html">Code examples for Amazon Cognito Identity Provider using Amazon Web Services
 *                 SDKs</a>.</p>
 *
 * @packageDocumentation
 */
export * from "./CognitoIdentityProviderClient";
export * from "./CognitoIdentityProvider";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { CognitoIdentityProviderServiceException } from "./models/CognitoIdentityProviderServiceException";
