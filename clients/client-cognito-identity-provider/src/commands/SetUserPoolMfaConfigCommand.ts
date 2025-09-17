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
import { SetUserPoolMfaConfigRequest, SetUserPoolMfaConfigResponse } from "../models/models_1";
import { de_SetUserPoolMfaConfigCommand, se_SetUserPoolMfaConfigCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetUserPoolMfaConfigCommand}.
 */
export interface SetUserPoolMfaConfigCommandInput extends SetUserPoolMfaConfigRequest {}
/**
 * @public
 *
 * The output of {@link SetUserPoolMfaConfigCommand}.
 */
export interface SetUserPoolMfaConfigCommandOutput extends SetUserPoolMfaConfigResponse, __MetadataBearer {}

/**
 * <p>Sets user pool multi-factor authentication (MFA) and passkey configuration. For more
 *             information about user pool MFA, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-mfa.html">Adding MFA</a>. For more information about WebAuthn passkeys see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-authentication-flow-methods.html#amazon-cognito-user-pools-authentication-flow-methods-passkey">Authentication flows</a>.</p>
 *          <note>
 *             <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 *             require you to register an origination phone number before you can send SMS messages
 *             to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 *             phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>.
 *             Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 *             receive SMS messages might not be able to sign up, activate their accounts, or sign
 *             in.</p>
 *             <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 *             Amazon Simple Notification Service might place your account in the SMS sandbox. In <i>
 *                   <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox
 *                     mode</a>
 *                </i>, you can send messages only to verified phone
 *             numbers. After you test your app while in the sandbox environment, you can move out
 *             of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito
 *                 Developer Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, SetUserPoolMfaConfigCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, SetUserPoolMfaConfigCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // SetUserPoolMfaConfigRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   SmsMfaConfiguration: { // SmsMfaConfigType
 *     SmsAuthenticationMessage: "STRING_VALUE",
 *     SmsConfiguration: { // SmsConfigurationType
 *       SnsCallerArn: "STRING_VALUE", // required
 *       ExternalId: "STRING_VALUE",
 *       SnsRegion: "STRING_VALUE",
 *     },
 *   },
 *   SoftwareTokenMfaConfiguration: { // SoftwareTokenMfaConfigType
 *     Enabled: true || false,
 *   },
 *   EmailMfaConfiguration: { // EmailMfaConfigType
 *     Message: "STRING_VALUE",
 *     Subject: "STRING_VALUE",
 *   },
 *   MfaConfiguration: "OFF" || "ON" || "OPTIONAL",
 *   WebAuthnConfiguration: { // WebAuthnConfigurationType
 *     RelyingPartyId: "STRING_VALUE",
 *     UserVerification: "required" || "preferred",
 *   },
 * };
 * const command = new SetUserPoolMfaConfigCommand(input);
 * const response = await client.send(command);
 * // { // SetUserPoolMfaConfigResponse
 * //   SmsMfaConfiguration: { // SmsMfaConfigType
 * //     SmsAuthenticationMessage: "STRING_VALUE",
 * //     SmsConfiguration: { // SmsConfigurationType
 * //       SnsCallerArn: "STRING_VALUE", // required
 * //       ExternalId: "STRING_VALUE",
 * //       SnsRegion: "STRING_VALUE",
 * //     },
 * //   },
 * //   SoftwareTokenMfaConfiguration: { // SoftwareTokenMfaConfigType
 * //     Enabled: true || false,
 * //   },
 * //   EmailMfaConfiguration: { // EmailMfaConfigType
 * //     Message: "STRING_VALUE",
 * //     Subject: "STRING_VALUE",
 * //   },
 * //   MfaConfiguration: "OFF" || "ON" || "OPTIONAL",
 * //   WebAuthnConfiguration: { // WebAuthnConfigurationType
 * //     RelyingPartyId: "STRING_VALUE",
 * //     UserVerification: "required" || "preferred",
 * //   },
 * // };
 *
 * ```
 *
 * @param SetUserPoolMfaConfigCommandInput - {@link SetUserPoolMfaConfigCommandInput}
 * @returns {@link SetUserPoolMfaConfigCommandOutput}
 * @see {@link SetUserPoolMfaConfigCommandInput} for command's `input` shape.
 * @see {@link SetUserPoolMfaConfigCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link InvalidSmsRoleAccessPolicyException} (client fault)
 *  <p>This exception is returned when the role provided for SMS configuration doesn't have
 *             permission to publish using Amazon SNS.</p>
 *
 * @throws {@link InvalidSmsRoleTrustRelationshipException} (client fault)
 *  <p>This exception is thrown when the trust relationship is not valid for the role
 *             provided for SMS configuration. This can happen if you don't trust
 *                 <code>cognito-idp.amazonaws.com</code> or the external ID provided in the role does
 *             not match what is provided in the SMS configuration for the user pool.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
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
export class SetUserPoolMfaConfigCommand extends $Command
  .classBuilder<
    SetUserPoolMfaConfigCommandInput,
    SetUserPoolMfaConfigCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "SetUserPoolMfaConfig", {})
  .n("CognitoIdentityProviderClient", "SetUserPoolMfaConfigCommand")
  .f(void 0, void 0)
  .ser(se_SetUserPoolMfaConfigCommand)
  .de(de_SetUserPoolMfaConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetUserPoolMfaConfigRequest;
      output: SetUserPoolMfaConfigResponse;
    };
    sdk: {
      input: SetUserPoolMfaConfigCommandInput;
      output: SetUserPoolMfaConfigCommandOutput;
    };
  };
}
