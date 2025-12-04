// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  AmplifyBackendClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../AmplifyBackendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateBackendAuthRequest, UpdateBackendAuthResponse } from "../models/models_0";
import { UpdateBackendAuth } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBackendAuthCommand}.
 */
export interface UpdateBackendAuthCommandInput extends UpdateBackendAuthRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBackendAuthCommand}.
 */
export interface UpdateBackendAuthCommandOutput extends UpdateBackendAuthResponse, __MetadataBearer {}

/**
 * <p>Updates an existing backend authentication resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, UpdateBackendAuthCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, UpdateBackendAuthCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * // import type { AmplifyBackendClientConfig } from "@aws-sdk/client-amplifybackend";
 * const config = {}; // type is AmplifyBackendClientConfig
 * const client = new AmplifyBackendClient(config);
 * const input = { // UpdateBackendAuthRequest
 *   AppId: "STRING_VALUE", // required
 *   BackendEnvironmentName: "STRING_VALUE", // required
 *   ResourceConfig: { // UpdateBackendAuthResourceConfig
 *     AuthResources: "USER_POOL_ONLY" || "IDENTITY_POOL_AND_USER_POOL", // required
 *     IdentityPoolConfigs: { // UpdateBackendAuthIdentityPoolConfig
 *       UnauthenticatedLogin: true || false,
 *     },
 *     Service: "COGNITO", // required
 *     UserPoolConfigs: { // UpdateBackendAuthUserPoolConfig
 *       ForgotPassword: { // UpdateBackendAuthForgotPasswordConfig
 *         DeliveryMethod: "EMAIL" || "SMS",
 *         EmailSettings: { // EmailSettings
 *           EmailMessage: "STRING_VALUE",
 *           EmailSubject: "STRING_VALUE",
 *         },
 *         SmsSettings: { // SmsSettings
 *           SmsMessage: "STRING_VALUE",
 *         },
 *       },
 *       Mfa: { // UpdateBackendAuthMFAConfig
 *         MFAMode: "ON" || "OFF" || "OPTIONAL",
 *         Settings: { // Settings
 *           MfaTypes: [ // ListOfMfaTypesElement
 *             "SMS" || "TOTP",
 *           ],
 *           SmsMessage: "STRING_VALUE",
 *         },
 *       },
 *       OAuth: { // UpdateBackendAuthOAuthConfig
 *         DomainPrefix: "STRING_VALUE",
 *         OAuthGrantType: "CODE" || "IMPLICIT",
 *         OAuthScopes: [ // ListOfOAuthScopesElement
 *           "PHONE" || "EMAIL" || "OPENID" || "PROFILE" || "AWS_COGNITO_SIGNIN_USER_ADMIN",
 *         ],
 *         RedirectSignInURIs: [ // ListOf__string
 *           "STRING_VALUE",
 *         ],
 *         RedirectSignOutURIs: [
 *           "STRING_VALUE",
 *         ],
 *         SocialProviderSettings: { // SocialProviderSettings
 *           Facebook: { // BackendAuthSocialProviderConfig
 *             ClientId: "STRING_VALUE",
 *             ClientSecret: "STRING_VALUE",
 *           },
 *           Google: {
 *             ClientId: "STRING_VALUE",
 *             ClientSecret: "STRING_VALUE",
 *           },
 *           LoginWithAmazon: {
 *             ClientId: "STRING_VALUE",
 *             ClientSecret: "STRING_VALUE",
 *           },
 *           SignInWithApple: { // BackendAuthAppleProviderConfig
 *             ClientId: "STRING_VALUE",
 *             KeyId: "STRING_VALUE",
 *             PrivateKey: "STRING_VALUE",
 *             TeamId: "STRING_VALUE",
 *           },
 *         },
 *       },
 *       PasswordPolicy: { // UpdateBackendAuthPasswordPolicyConfig
 *         AdditionalConstraints: [ // ListOfAdditionalConstraintsElement
 *           "REQUIRE_DIGIT" || "REQUIRE_LOWERCASE" || "REQUIRE_SYMBOL" || "REQUIRE_UPPERCASE",
 *         ],
 *         MinimumLength: Number("double"),
 *       },
 *       VerificationMessage: { // UpdateBackendAuthVerificationMessageConfig
 *         DeliveryMethod: "EMAIL" || "SMS", // required
 *         EmailSettings: {
 *           EmailMessage: "STRING_VALUE",
 *           EmailSubject: "STRING_VALUE",
 *         },
 *         SmsSettings: {
 *           SmsMessage: "STRING_VALUE",
 *         },
 *       },
 *     },
 *   },
 *   ResourceName: "STRING_VALUE", // required
 * };
 * const command = new UpdateBackendAuthCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBackendAuthResponse
 * //   AppId: "STRING_VALUE",
 * //   BackendEnvironmentName: "STRING_VALUE",
 * //   Error: "STRING_VALUE",
 * //   JobId: "STRING_VALUE",
 * //   Operation: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateBackendAuthCommandInput - {@link UpdateBackendAuthCommandInput}
 * @returns {@link UpdateBackendAuthCommandOutput}
 * @see {@link UpdateBackendAuthCommandInput} for command's `input` shape.
 * @see {@link UpdateBackendAuthCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for AmplifyBackendClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>An error returned if a request is not formed properly.</p>
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  <p>An error returned if there's a temporary issue with the service.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>An error returned when a specific resource type is not found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>An error that is returned when a limit of a specific type has been exceeded.</p>
 *
 * @throws {@link AmplifyBackendServiceException}
 * <p>Base exception class for all service exceptions from AmplifyBackend service.</p>
 *
 *
 * @public
 */
export class UpdateBackendAuthCommand extends $Command
  .classBuilder<
    UpdateBackendAuthCommandInput,
    UpdateBackendAuthCommandOutput,
    AmplifyBackendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyBackendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmplifyBackend", "UpdateBackendAuth", {})
  .n("AmplifyBackendClient", "UpdateBackendAuthCommand")
  .sc(UpdateBackendAuth)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBackendAuthRequest;
      output: UpdateBackendAuthResponse;
    };
    sdk: {
      input: UpdateBackendAuthCommandInput;
      output: UpdateBackendAuthCommandOutput;
    };
  };
}
