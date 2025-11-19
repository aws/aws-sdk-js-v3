// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateUserPoolClientRequest } from "../models/models_0";
import { UpdateUserPoolClientResponse } from "../models/models_1";
import { UpdateUserPoolClient } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateUserPoolClientCommand}.
 */
export interface UpdateUserPoolClientCommandInput extends UpdateUserPoolClientRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserPoolClientCommand}.
 */
export interface UpdateUserPoolClientCommandOutput extends UpdateUserPoolClientResponse, __MetadataBearer {}

/**
 * <p>Given a user pool app client ID, updates the configuration. To avoid setting
 *             parameters to Amazon Cognito defaults, construct this API request to pass the existing
 *             configuration of your app client, modified to include the changes that you want to
 *             make.</p>
 *          <important>
 *             <p>If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.</p>
 *          </important>
 *          <p>Unlike app clients created in the console, Amazon Cognito doesn't automatically assign a
 * branding style to app clients that you configure with this API operation. Managed login and classic hosted UI pages aren't
 * available for your client until after you apply a branding style.</p>
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
 * import { CognitoIdentityProviderClient, UpdateUserPoolClientCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateUserPoolClientCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // UpdateUserPoolClientRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   ClientId: "STRING_VALUE", // required
 *   ClientName: "STRING_VALUE",
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
 * const command = new UpdateUserPoolClientCommand(input);
 * const response = await client.send(command);
 * // { // UpdateUserPoolClientResponse
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
 * @param UpdateUserPoolClientCommandInput - {@link UpdateUserPoolClientCommandInput}
 * @returns {@link UpdateUserPoolClientCommandOutput}
 * @see {@link UpdateUserPoolClientCommandInput} for command's `input` shape.
 * @see {@link UpdateUserPoolClientCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>This exception is thrown if two or more modifications are happening
 *             concurrently.</p>
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
 * @public
 */
export class UpdateUserPoolClientCommand extends $Command
  .classBuilder<
    UpdateUserPoolClientCommandInput,
    UpdateUserPoolClientCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "UpdateUserPoolClient", {})
  .n("CognitoIdentityProviderClient", "UpdateUserPoolClientCommand")
  .sc(UpdateUserPoolClient)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserPoolClientRequest;
      output: UpdateUserPoolClientResponse;
    };
    sdk: {
      input: UpdateUserPoolClientCommandInput;
      output: UpdateUserPoolClientCommandOutput;
    };
  };
}
