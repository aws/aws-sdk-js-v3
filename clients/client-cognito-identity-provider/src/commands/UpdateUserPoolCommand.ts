// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateUserPoolRequest, UpdateUserPoolResponse } from "../models/models_1";
import { UpdateUserPool$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the configuration of a user pool. To avoid setting parameters to Amazon Cognito defaults, construct this API request to pass the existing configuration of your user pool, modified to include the changes that you want to make.
 *
 * > **Important:** If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.
 *
 * In secondary regions for user pools with multi-region replication, regional configurations for email, SMS, Lambda functions, and tags can be updated. Both global and regional settings must be provided as inputs, with global settings required to match existing values to maintain consistency across replicas.
 *
 * > **Note:**
 * >
 * > This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with [Amazon Pinpoint](https://console.aws.amazon.com/pinpoint/home/). Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.
 * >
 * > If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In *[sandbox mode](https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html)* , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see [SMS message settings for Amazon Cognito user pools](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html) in the *Amazon Cognito Developer Guide*.
 *
 * > **Note:**
 * >
 * > Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.
 * >
 * > **Learn more**
 * >
 * > - [Signing Amazon Web Services API Requests](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html)
 * > - [Using the Amazon Cognito user pools API and user pool endpoints](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, UpdateUserPoolCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateUserPoolCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
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
 *         "PASSWORD" || "EMAIL_OTP" || "SMS_OTP" || "WEB_AUTHN" || "SOFTWARE_TOKEN",
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
 *     InboundFederation: { // InboundFederationLambdaType
 *       LambdaVersion: "V1_0", // required
 *       LambdaArn: "STRING_VALUE", // required
 *     },
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
 *     SnsCallerArn: "STRING_VALUE",
 *     ExternalId: "STRING_VALUE",
 *     SnsRegion: "STRING_VALUE",
 *     EumsSms: { // EumsSmsConfigurationType
 *       CallerArn: "STRING_VALUE", // required
 *       ExternalId: "STRING_VALUE",
 *       OriginationIdentity: "STRING_VALUE",
 *       ConfigurationSetName: "STRING_VALUE",
 *       InEntityId: "STRING_VALUE",
 *       InTemplateId: "STRING_VALUE",
 *       Region: "STRING_VALUE",
 *     },
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
 *   KeyConfiguration: { // KeyConfigurationType
 *     KeyType: "AWS_OWNED_KEY" || "CUSTOMER_MANAGED_KEY",
 *     KmsKeyArn: "STRING_VALUE",
 *   },
 *   IssuerConfiguration: { // IssuerConfigurationType
 *     Type: "ORIGINAL" || "UPDATED",
 *   },
 *   AcrConfiguration: { // AcrConfigurationType
 *     "<keys>": { // AcrLevelConfigType
 *       AcrValue: "STRING_VALUE", // required
 *     },
 *   },
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
 *
 * This exception is thrown if two or more modifications are happening concurrently.
 *
 * @throws {@link FeatureUnavailableInTierException} (client fault)
 *
 * This exception is thrown when a feature that you attempted to use or configure isn't included in your user pool's current feature plan. This can occur when:
 *
 * - You configure a feature that your feature plan doesn't support.
 * - You make a request that uses a feature that requires a higher feature plan.
 *
 * To resolve this issue, upgrade your user pool to a feature plan that includes the feature.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * This exception is thrown when Amazon Cognito encounters an internal error.
 *
 * @throws {@link InvalidEmailRoleAccessPolicyException} (client fault)
 *
 * This exception is thrown when Amazon Cognito isn't allowed to use your email identity. HTTP status code: 400.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service encounters an invalid parameter.
 *
 * @throws {@link InvalidSmsRoleAccessPolicyException} (client fault)
 *
 * This exception is returned when the role provided for SMS configuration doesn't have permission to publish using Amazon SNS.
 *
 * @throws {@link InvalidSmsRoleTrustRelationshipException} (client fault)
 *
 * This exception is thrown when the trust relationship is not valid for the role provided for SMS configuration. This can happen if you don't trust `cognito-idp.amazonaws.com` or the external ID provided in the role does not match what is provided in the SMS configuration for the user pool.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *
 * This exception is thrown when a user isn't authorized.
 *
 * @throws {@link OperationNotEnabledException} (client fault)
 *
 * This exception is thrown when an operation is not available in the current region or for the current user pool configuration. This can occur when attempting to perform operations that are not supported in secondary replica regions.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service can't find the requested resource.
 *
 * @throws {@link TierChangeNotAllowedException} (client fault)
 *
 * This exception is thrown when you've attempted to change your feature plan but the operation isn't permitted.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * This exception is thrown when the user has made too many requests for a given operation.
 *
 * @throws {@link UserImportInProgressException} (client fault)
 *
 * This exception is thrown when you're trying to modify a user pool while a user import job is in progress for that pool.
 *
 * @throws {@link UserPoolTaggingException} (client fault)
 *
 * This exception is thrown when a user pool tag can't be set or updated.
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 *
 * Base exception class for all service exceptions from CognitoIdentityProvider service.
 *
 * @public
 */
export class UpdateUserPoolCommand extends command<UpdateUserPoolCommandInput, UpdateUserPoolCommandOutput>(
  _ep0,
  _mw0,
  "UpdateUserPool",
  UpdateUserPool$
) {
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
