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
import { UpdateUserPoolRequest, UpdateUserPoolResponse } from "../models/models_1";
import { de_UpdateUserPoolCommand, se_UpdateUserPoolCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateUserPoolCommand}.
 */
export interface UpdateUserPoolCommandInput extends UpdateUserPoolRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserPoolCommand}.
 */
export interface UpdateUserPoolCommandOutput extends UpdateUserPoolResponse, __MetadataBearer {}

/**
 * <p>Updates the configuration of a user pool. To avoid setting parameters to Amazon Cognito
 *             defaults, construct this API request to pass the existing configuration of your user
 *             pool, modified to include the changes that you want to make.</p>
 *          <important>
 *             <p>If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.</p>
 *          </important>
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
 * import { CognitoIdentityProviderClient, UpdateUserPoolCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateUserPoolCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // UpdateUserPoolRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   Policies: { // UserPoolPolicyType
 *     PasswordPolicy: { // PasswordPolicyType
 *       MinimumLength: Number("int"),
 *       RequireUppercase: true || false,
 *       RequireLowercase: true || false,
 *       RequireNumbers: true || false,
 *       RequireSymbols: true || false,
 *       PasswordHistorySize: Number("int"),
 *       TemporaryPasswordValidityDays: Number("int"),
 *     },
 *     SignInPolicy: { // SignInPolicyType
 *       AllowedFirstAuthFactors: [ // AllowedFirstAuthFactorsListType
 *         "PASSWORD" || "EMAIL_OTP" || "SMS_OTP" || "WEB_AUTHN",
 *       ],
 *     },
 *   },
 *   DeletionProtection: "ACTIVE" || "INACTIVE",
 *   LambdaConfig: { // LambdaConfigType
 *     PreSignUp: "STRING_VALUE",
 *     CustomMessage: "STRING_VALUE",
 *     PostConfirmation: "STRING_VALUE",
 *     PreAuthentication: "STRING_VALUE",
 *     PostAuthentication: "STRING_VALUE",
 *     DefineAuthChallenge: "STRING_VALUE",
 *     CreateAuthChallenge: "STRING_VALUE",
 *     VerifyAuthChallengeResponse: "STRING_VALUE",
 *     PreTokenGeneration: "STRING_VALUE",
 *     UserMigration: "STRING_VALUE",
 *     PreTokenGenerationConfig: { // PreTokenGenerationVersionConfigType
 *       LambdaVersion: "V1_0" || "V2_0" || "V3_0", // required
 *       LambdaArn: "STRING_VALUE", // required
 *     },
 *     CustomSMSSender: { // CustomSMSLambdaVersionConfigType
 *       LambdaVersion: "V1_0", // required
 *       LambdaArn: "STRING_VALUE", // required
 *     },
 *     CustomEmailSender: { // CustomEmailLambdaVersionConfigType
 *       LambdaVersion: "V1_0", // required
 *       LambdaArn: "STRING_VALUE", // required
 *     },
 *     KMSKeyID: "STRING_VALUE",
 *   },
 *   AutoVerifiedAttributes: [ // VerifiedAttributesListType
 *     "phone_number" || "email",
 *   ],
 *   SmsVerificationMessage: "STRING_VALUE",
 *   EmailVerificationMessage: "STRING_VALUE",
 *   EmailVerificationSubject: "STRING_VALUE",
 *   VerificationMessageTemplate: { // VerificationMessageTemplateType
 *     SmsMessage: "STRING_VALUE",
 *     EmailMessage: "STRING_VALUE",
 *     EmailSubject: "STRING_VALUE",
 *     EmailMessageByLink: "STRING_VALUE",
 *     EmailSubjectByLink: "STRING_VALUE",
 *     DefaultEmailOption: "CONFIRM_WITH_LINK" || "CONFIRM_WITH_CODE",
 *   },
 *   SmsAuthenticationMessage: "STRING_VALUE",
 *   UserAttributeUpdateSettings: { // UserAttributeUpdateSettingsType
 *     AttributesRequireVerificationBeforeUpdate: [ // AttributesRequireVerificationBeforeUpdateType
 *       "phone_number" || "email",
 *     ],
 *   },
 *   MfaConfiguration: "OFF" || "ON" || "OPTIONAL",
 *   DeviceConfiguration: { // DeviceConfigurationType
 *     ChallengeRequiredOnNewDevice: true || false,
 *     DeviceOnlyRememberedOnUserPrompt: true || false,
 *   },
 *   EmailConfiguration: { // EmailConfigurationType
 *     SourceArn: "STRING_VALUE",
 *     ReplyToEmailAddress: "STRING_VALUE",
 *     EmailSendingAccount: "COGNITO_DEFAULT" || "DEVELOPER",
 *     From: "STRING_VALUE",
 *     ConfigurationSet: "STRING_VALUE",
 *   },
 *   SmsConfiguration: { // SmsConfigurationType
 *     SnsCallerArn: "STRING_VALUE", // required
 *     ExternalId: "STRING_VALUE",
 *     SnsRegion: "STRING_VALUE",
 *   },
 *   UserPoolTags: { // UserPoolTagsType
 *     "<keys>": "STRING_VALUE",
 *   },
 *   AdminCreateUserConfig: { // AdminCreateUserConfigType
 *     AllowAdminCreateUserOnly: true || false,
 *     UnusedAccountValidityDays: Number("int"),
 *     InviteMessageTemplate: { // MessageTemplateType
 *       SMSMessage: "STRING_VALUE",
 *       EmailMessage: "STRING_VALUE",
 *       EmailSubject: "STRING_VALUE",
 *     },
 *   },
 *   UserPoolAddOns: { // UserPoolAddOnsType
 *     AdvancedSecurityMode: "OFF" || "AUDIT" || "ENFORCED", // required
 *     AdvancedSecurityAdditionalFlows: { // AdvancedSecurityAdditionalFlowsType
 *       CustomAuthMode: "AUDIT" || "ENFORCED",
 *     },
 *   },
 *   AccountRecoverySetting: { // AccountRecoverySettingType
 *     RecoveryMechanisms: [ // RecoveryMechanismsType
 *       { // RecoveryOptionType
 *         Priority: Number("int"), // required
 *         Name: "verified_email" || "verified_phone_number" || "admin_only", // required
 *       },
 *     ],
 *   },
 *   PoolName: "STRING_VALUE",
 *   UserPoolTier: "LITE" || "ESSENTIALS" || "PLUS",
 * };
 * const command = new UpdateUserPoolCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateUserPoolCommandInput - {@link UpdateUserPoolCommandInput}
 * @returns {@link UpdateUserPoolCommandOutput}
 * @see {@link UpdateUserPoolCommandInput} for command's `input` shape.
 * @see {@link UpdateUserPoolCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidEmailRoleAccessPolicyException} (client fault)
 *  <p>This exception is thrown when Amazon Cognito isn't allowed to use your email identity. HTTP
 *             status code: 400.</p>
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
 * @throws {@link TierChangeNotAllowedException} (client fault)
 *  <p>This exception is thrown when you've attempted to change your feature plan but
 *             the operation isn't permitted.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link UserImportInProgressException} (client fault)
 *  <p>This exception is thrown when you're trying to modify a user pool while a user import
 *             job is in progress for that pool.</p>
 *
 * @throws {@link UserPoolTaggingException} (client fault)
 *  <p>This exception is thrown when a user pool tag can't be set or updated.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 * @public
 */
export class UpdateUserPoolCommand extends $Command
  .classBuilder<
    UpdateUserPoolCommandInput,
    UpdateUserPoolCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "UpdateUserPool", {})
  .n("CognitoIdentityProviderClient", "UpdateUserPoolCommand")
  .f(void 0, void 0)
  .ser(se_UpdateUserPoolCommand)
  .de(de_UpdateUserPoolCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserPoolRequest;
      output: {};
    };
    sdk: {
      input: UpdateUserPoolCommandInput;
      output: UpdateUserPoolCommandOutput;
    };
  };
}
