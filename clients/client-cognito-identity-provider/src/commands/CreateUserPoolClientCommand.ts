// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateUserPoolClientRequest,
  CreateUserPoolClientResponse,
  CreateUserPoolClientResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateUserPoolClientCommand, se_CreateUserPoolClientCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateUserPoolClientCommand}.
 */
export interface CreateUserPoolClientCommandInput extends CreateUserPoolClientRequest {}
/**
 * @public
 *
 * The output of {@link CreateUserPoolClientCommand}.
 */
export interface CreateUserPoolClientCommandOutput extends CreateUserPoolClientResponse, __MetadataBearer {}

/**
 * <p>Creates an app client in a user pool. This operation sets basic and advanced
 *             configuration options.</p>
 *          <p>Unlike app clients created in the console, Amazon Cognito doesn't automatically assign a
 * branding style to app clients that you configure with this API operation. Managed login and classic hosted UI pages aren't
 * available for your client until after you apply a branding style.</p>
 *          <important>
 *             <p>If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.</p>
 *          </important>
 *          <note>
 *             <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 *     this operation, you must use IAM credentials to authorize requests, and you must
 *     grant yourself the corresponding IAM permission in a policy.</p>
 *             <p class="title">
 *                <b>Learn more</b>
 *             </p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a>
 *                   </p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, CreateUserPoolClientCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, CreateUserPoolClientCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // CreateUserPoolClientRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   ClientName: "STRING_VALUE", // required
 *   GenerateSecret: true || false,
 *   RefreshTokenValidity: Number("int"),
 *   AccessTokenValidity: Number("int"),
 *   IdTokenValidity: Number("int"),
 *   TokenValidityUnits: { // TokenValidityUnitsType
 *     AccessToken: "seconds" || "minutes" || "hours" || "days",
 *     IdToken: "seconds" || "minutes" || "hours" || "days",
 *     RefreshToken: "seconds" || "minutes" || "hours" || "days",
 *   },
 *   ReadAttributes: [ // ClientPermissionListType
 *     "STRING_VALUE",
 *   ],
 *   WriteAttributes: [
 *     "STRING_VALUE",
 *   ],
 *   ExplicitAuthFlows: [ // ExplicitAuthFlowsListType
 *     "ADMIN_NO_SRP_AUTH" || "CUSTOM_AUTH_FLOW_ONLY" || "USER_PASSWORD_AUTH" || "ALLOW_ADMIN_USER_PASSWORD_AUTH" || "ALLOW_CUSTOM_AUTH" || "ALLOW_USER_PASSWORD_AUTH" || "ALLOW_USER_SRP_AUTH" || "ALLOW_REFRESH_TOKEN_AUTH" || "ALLOW_USER_AUTH",
 *   ],
 *   SupportedIdentityProviders: [ // SupportedIdentityProvidersListType
 *     "STRING_VALUE",
 *   ],
 *   CallbackURLs: [ // CallbackURLsListType
 *     "STRING_VALUE",
 *   ],
 *   LogoutURLs: [ // LogoutURLsListType
 *     "STRING_VALUE",
 *   ],
 *   DefaultRedirectURI: "STRING_VALUE",
 *   AllowedOAuthFlows: [ // OAuthFlowsType
 *     "code" || "implicit" || "client_credentials",
 *   ],
 *   AllowedOAuthScopes: [ // ScopeListType
 *     "STRING_VALUE",
 *   ],
 *   AllowedOAuthFlowsUserPoolClient: true || false,
 *   AnalyticsConfiguration: { // AnalyticsConfigurationType
 *     ApplicationId: "STRING_VALUE",
 *     ApplicationArn: "STRING_VALUE",
 *     RoleArn: "STRING_VALUE",
 *     ExternalId: "STRING_VALUE",
 *     UserDataShared: true || false,
 *   },
 *   PreventUserExistenceErrors: "LEGACY" || "ENABLED",
 *   EnableTokenRevocation: true || false,
 *   EnablePropagateAdditionalUserContextData: true || false,
 *   AuthSessionValidity: Number("int"),
 *   RefreshTokenRotation: { // RefreshTokenRotationType
 *     Feature: "ENABLED" || "DISABLED", // required
 *     RetryGracePeriodSeconds: Number("int"),
 *   },
 * };
 * const command = new CreateUserPoolClientCommand(input);
 * const response = await client.send(command);
 * // { // CreateUserPoolClientResponse
 * //   UserPoolClient: { // UserPoolClientType
 * //     UserPoolId: "STRING_VALUE",
 * //     ClientName: "STRING_VALUE",
 * //     ClientId: "STRING_VALUE",
 * //     ClientSecret: "STRING_VALUE",
 * //     LastModifiedDate: new Date("TIMESTAMP"),
 * //     CreationDate: new Date("TIMESTAMP"),
 * //     RefreshTokenValidity: Number("int"),
 * //     AccessTokenValidity: Number("int"),
 * //     IdTokenValidity: Number("int"),
 * //     TokenValidityUnits: { // TokenValidityUnitsType
 * //       AccessToken: "seconds" || "minutes" || "hours" || "days",
 * //       IdToken: "seconds" || "minutes" || "hours" || "days",
 * //       RefreshToken: "seconds" || "minutes" || "hours" || "days",
 * //     },
 * //     ReadAttributes: [ // ClientPermissionListType
 * //       "STRING_VALUE",
 * //     ],
 * //     WriteAttributes: [
 * //       "STRING_VALUE",
 * //     ],
 * //     ExplicitAuthFlows: [ // ExplicitAuthFlowsListType
 * //       "ADMIN_NO_SRP_AUTH" || "CUSTOM_AUTH_FLOW_ONLY" || "USER_PASSWORD_AUTH" || "ALLOW_ADMIN_USER_PASSWORD_AUTH" || "ALLOW_CUSTOM_AUTH" || "ALLOW_USER_PASSWORD_AUTH" || "ALLOW_USER_SRP_AUTH" || "ALLOW_REFRESH_TOKEN_AUTH" || "ALLOW_USER_AUTH",
 * //     ],
 * //     SupportedIdentityProviders: [ // SupportedIdentityProvidersListType
 * //       "STRING_VALUE",
 * //     ],
 * //     CallbackURLs: [ // CallbackURLsListType
 * //       "STRING_VALUE",
 * //     ],
 * //     LogoutURLs: [ // LogoutURLsListType
 * //       "STRING_VALUE",
 * //     ],
 * //     DefaultRedirectURI: "STRING_VALUE",
 * //     AllowedOAuthFlows: [ // OAuthFlowsType
 * //       "code" || "implicit" || "client_credentials",
 * //     ],
 * //     AllowedOAuthScopes: [ // ScopeListType
 * //       "STRING_VALUE",
 * //     ],
 * //     AllowedOAuthFlowsUserPoolClient: true || false,
 * //     AnalyticsConfiguration: { // AnalyticsConfigurationType
 * //       ApplicationId: "STRING_VALUE",
 * //       ApplicationArn: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //       ExternalId: "STRING_VALUE",
 * //       UserDataShared: true || false,
 * //     },
 * //     PreventUserExistenceErrors: "LEGACY" || "ENABLED",
 * //     EnableTokenRevocation: true || false,
 * //     EnablePropagateAdditionalUserContextData: true || false,
 * //     AuthSessionValidity: Number("int"),
 * //     RefreshTokenRotation: { // RefreshTokenRotationType
 * //       Feature: "ENABLED" || "DISABLED", // required
 * //       RetryGracePeriodSeconds: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateUserPoolClientCommandInput - {@link CreateUserPoolClientCommandInput}
 * @returns {@link CreateUserPoolClientCommandOutput}
 * @see {@link CreateUserPoolClientCommandInput} for command's `input` shape.
 * @see {@link CreateUserPoolClientCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link FeatureUnavailableInTierException} (client fault)
 *  <p>This exception is thrown when a feature you attempted to configure isn't
 *             available in your current feature plan.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidOAuthFlowException} (client fault)
 *  <p>This exception is thrown when the specified OAuth flow is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>This exception is thrown when a user exceeds the limit for a requested Amazon Web Services
 *             resource.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link ScopeDoesNotExistException} (client fault)
 *  <p>This exception is thrown when the specified scope doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @example Example user pool app client with email and username sign-in
 * ```javascript
 * // The following example creates an app client with all configurable properties set to an example value. The resulting user pool client connects to an analytics client, allows sign-in with username and password, and has two external identity providers associated with it.
 * const input = {
 *   AccessTokenValidity: 6,
 *   AllowedOAuthFlows: [
 *     "code"
 *   ],
 *   AllowedOAuthFlowsUserPoolClient: true,
 *   AllowedOAuthScopes: [
 *     "aws.cognito.signin.user.admin",
 *     "openid"
 *   ],
 *   AnalyticsConfiguration: {
 *     ApplicationId: "d70b2ba36a8c4dc5a04a0451a31a1e12",
 *     ExternalId: "my-external-id",
 *     RoleArn: "arn:aws:iam::123456789012:role/test-cognitouserpool-role",
 *     UserDataShared: true
 *   },
 *   CallbackURLs: [
 *     "https://example.com",
 *     "http://localhost",
 *     "myapp://example"
 *   ],
 *   ClientName: "my-test-app-client",
 *   DefaultRedirectURI: "https://example.com",
 *   ExplicitAuthFlows: [
 *     "ALLOW_ADMIN_USER_PASSWORD_AUTH",
 *     "ALLOW_USER_PASSWORD_AUTH",
 *     "ALLOW_REFRESH_TOKEN_AUTH"
 *   ],
 *   GenerateSecret: true,
 *   IdTokenValidity: 6,
 *   LogoutURLs: [
 *     "https://example.com/logout"
 *   ],
 *   PreventUserExistenceErrors: "ENABLED",
 *   ReadAttributes: [
 *     "email",
 *     "address",
 *     "preferred_username"
 *   ],
 *   RefreshTokenValidity: 6,
 *   SupportedIdentityProviders: [
 *     "SignInWithApple",
 *     "MySSO"
 *   ],
 *   TokenValidityUnits: {
 *     AccessToken: "hours",
 *     IdToken: "minutes",
 *     RefreshToken: "days"
 *   },
 *   UserPoolId: "us-east-1_EXAMPLE",
 *   WriteAttributes: [
 *     "family_name",
 *     "email"
 *   ]
 * };
 * const command = new CreateUserPoolClientCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   UserPoolClient: {
 *     AccessTokenValidity: 6,
 *     AllowedOAuthFlows: [
 *       "code"
 *     ],
 *     AllowedOAuthFlowsUserPoolClient: true,
 *     AllowedOAuthScopes: [
 *       "aws.cognito.signin.user.admin",
 *       "openid"
 *     ],
 *     AnalyticsConfiguration: {
 *       ApplicationId: "d70b2ba36a8c4dc5a04a0451a31a1e12",
 *       ExternalId: "my-external-id",
 *       RoleArn: "arn:aws:iam::123456789012:role/test-cognitouserpool-role",
 *       UserDataShared: true
 *     },
 *     AuthSessionValidity: 3,
 *     CallbackURLs: [
 *       "https://example.com",
 *       "http://localhost",
 *       "myapp://example"
 *     ],
 *     ClientId: "26cb2c60kq7nbmas7rbme9b6pp",
 *     ClientName: "my-test-app-client",
 *     ClientSecret: "13ka4h7u28d9oo44tqpq9djqsfvhvu8rk4d2ighvpu0k8fj1c2r9",
 *     CreationDate: 1.689885426107E9,
 *     DefaultRedirectURI: "https://example.com",
 *     EnablePropagateAdditionalUserContextData: false,
 *     EnableTokenRevocation: true,
 *     ExplicitAuthFlows: [
 *       "ALLOW_USER_PASSWORD_AUTH",
 *       "ALLOW_ADMIN_USER_PASSWORD_AUTH",
 *       "ALLOW_REFRESH_TOKEN_AUTH"
 *     ],
 *     IdTokenValidity: 6,
 *     LastModifiedDate: 1.689885426107E9,
 *     LogoutURLs: [
 *       "https://example.com/logout"
 *     ],
 *     PreventUserExistenceErrors: "ENABLED",
 *     ReadAttributes: [
 *       "address",
 *       "preferred_username",
 *       "email"
 *     ],
 *     RefreshTokenValidity: 6,
 *     SupportedIdentityProviders: [
 *       "SignInWithApple",
 *       "MySSO"
 *     ],
 *     TokenValidityUnits: {
 *       AccessToken: "hours",
 *       IdToken: "minutes",
 *       RefreshToken: "days"
 *     },
 *     UserPoolId: "us-east-1_EXAMPLE",
 *     WriteAttributes: [
 *       "family_name",
 *       "email"
 *     ]
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateUserPoolClientCommand extends $Command
  .classBuilder<
    CreateUserPoolClientCommandInput,
    CreateUserPoolClientCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSCognitoIdentityProviderService", "CreateUserPoolClient", {})
  .n("CognitoIdentityProviderClient", "CreateUserPoolClientCommand")
  .f(void 0, CreateUserPoolClientResponseFilterSensitiveLog)
  .ser(se_CreateUserPoolClientCommand)
  .de(de_CreateUserPoolClientCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateUserPoolClientRequest;
      output: CreateUserPoolClientResponse;
    };
    sdk: {
      input: CreateUserPoolClientCommandInput;
      output: CreateUserPoolClientCommandOutput;
    };
  };
}
