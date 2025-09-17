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
  RespondToAuthChallengeRequest,
  RespondToAuthChallengeRequestFilterSensitiveLog,
  RespondToAuthChallengeResponse,
  RespondToAuthChallengeResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_RespondToAuthChallengeCommand, se_RespondToAuthChallengeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RespondToAuthChallengeCommand}.
 */
export interface RespondToAuthChallengeCommandInput extends RespondToAuthChallengeRequest {}
/**
 * @public
 *
 * The output of {@link RespondToAuthChallengeCommand}.
 */
export interface RespondToAuthChallengeCommandOutput extends RespondToAuthChallengeResponse, __MetadataBearer {}

/**
 * <p>Some API operations in a user pool generate a challenge, like a prompt for an MFA
 *             code, for device authentication that bypasses MFA, or for a custom authentication
 *             challenge. A <code>RespondToAuthChallenge</code> API request provides the answer to that
 *             challenge, like a code or a secure remote password (SRP). The parameters of a response
 *             to an authentication challenge vary with the type of challenge.</p>
 *          <p>For more information about custom authentication challenges, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-challenge.html">Custom
 *                 authentication challenge Lambda triggers</a>.</p>
 *          <note>
 *             <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 *     this operation, you can't use IAM credentials to authorize requests, and you can't
 *     grant IAM permissions in policies. For more information about authorization models in
 *     Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a>.</p>
 *          </note>
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
 * import { CognitoIdentityProviderClient, RespondToAuthChallengeCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, RespondToAuthChallengeCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // RespondToAuthChallengeRequest
 *   ClientId: "STRING_VALUE", // required
 *   ChallengeName: "SMS_MFA" || "EMAIL_OTP" || "SOFTWARE_TOKEN_MFA" || "SELECT_MFA_TYPE" || "MFA_SETUP" || "PASSWORD_VERIFIER" || "CUSTOM_CHALLENGE" || "SELECT_CHALLENGE" || "DEVICE_SRP_AUTH" || "DEVICE_PASSWORD_VERIFIER" || "ADMIN_NO_SRP_AUTH" || "NEW_PASSWORD_REQUIRED" || "SMS_OTP" || "PASSWORD" || "WEB_AUTHN" || "PASSWORD_SRP", // required
 *   Session: "STRING_VALUE",
 *   ChallengeResponses: { // ChallengeResponsesType
 *     "<keys>": "STRING_VALUE",
 *   },
 *   AnalyticsMetadata: { // AnalyticsMetadataType
 *     AnalyticsEndpointId: "STRING_VALUE",
 *   },
 *   UserContextData: { // UserContextDataType
 *     IpAddress: "STRING_VALUE",
 *     EncodedData: "STRING_VALUE",
 *   },
 *   ClientMetadata: { // ClientMetadataType
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new RespondToAuthChallengeCommand(input);
 * const response = await client.send(command);
 * // { // RespondToAuthChallengeResponse
 * //   ChallengeName: "SMS_MFA" || "EMAIL_OTP" || "SOFTWARE_TOKEN_MFA" || "SELECT_MFA_TYPE" || "MFA_SETUP" || "PASSWORD_VERIFIER" || "CUSTOM_CHALLENGE" || "SELECT_CHALLENGE" || "DEVICE_SRP_AUTH" || "DEVICE_PASSWORD_VERIFIER" || "ADMIN_NO_SRP_AUTH" || "NEW_PASSWORD_REQUIRED" || "SMS_OTP" || "PASSWORD" || "WEB_AUTHN" || "PASSWORD_SRP",
 * //   Session: "STRING_VALUE",
 * //   ChallengeParameters: { // ChallengeParametersType
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   AuthenticationResult: { // AuthenticationResultType
 * //     AccessToken: "STRING_VALUE",
 * //     ExpiresIn: Number("int"),
 * //     TokenType: "STRING_VALUE",
 * //     RefreshToken: "STRING_VALUE",
 * //     IdToken: "STRING_VALUE",
 * //     NewDeviceMetadata: { // NewDeviceMetadataType
 * //       DeviceKey: "STRING_VALUE",
 * //       DeviceGroupKey: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param RespondToAuthChallengeCommandInput - {@link RespondToAuthChallengeCommandInput}
 * @returns {@link RespondToAuthChallengeCommandOutput}
 * @see {@link RespondToAuthChallengeCommandInput} for command's `input` shape.
 * @see {@link RespondToAuthChallengeCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link AliasExistsException} (client fault)
 *  <p>This exception is thrown when a user tries to confirm the account with an email
 *             address or phone number that has already been supplied as an alias for a different user
 *             profile. This exception indicates that an account with this email address or phone
 *             already exists in a user pool that you've configured to use email address or phone
 *             number as a sign-in alias.</p>
 *
 * @throws {@link CodeMismatchException} (client fault)
 *  <p>This exception is thrown if the provided code doesn't match what the server was
 *             expecting.</p>
 *
 * @throws {@link ExpiredCodeException} (client fault)
 *  <p>This exception is thrown if a code has expired.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>This exception is thrown when WAF doesn't allow your request based on a web
 *             ACL that's associated with your user pool.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidEmailRoleAccessPolicyException} (client fault)
 *  <p>This exception is thrown when Amazon Cognito isn't allowed to use your email identity. HTTP
 *             status code: 400.</p>
 *
 * @throws {@link InvalidLambdaResponseException} (client fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an invalid Lambda response.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link InvalidPasswordException} (client fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an invalid password.</p>
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
 * @throws {@link InvalidUserPoolConfigurationException} (client fault)
 *  <p>This exception is thrown when the user pool configuration is not valid.</p>
 *
 * @throws {@link MFAMethodNotFoundException} (client fault)
 *  <p>This exception is thrown when Amazon Cognito can't find a multi-factor authentication
 *             (MFA) method.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link PasswordHistoryPolicyViolationException} (client fault)
 *  <p>The message returned when a user's new password matches a previous password and
 *             doesn't comply with the password-history policy.</p>
 *
 * @throws {@link PasswordResetRequiredException} (client fault)
 *  <p>This exception is thrown when a password reset is required.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link SoftwareTokenMFANotFoundException} (client fault)
 *  <p>This exception is thrown when the software token time-based one-time password (TOTP)
 *             multi-factor authentication (MFA) isn't activated for the user pool.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link UnexpectedLambdaException} (client fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an unexpected exception with
 *             Lambda.</p>
 *
 * @throws {@link UserLambdaValidationException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters a user validation exception
 *             with the Lambda service.</p>
 *
 * @throws {@link UserNotConfirmedException} (client fault)
 *  <p>This exception is thrown when a user isn't confirmed successfully.</p>
 *
 * @throws {@link UserNotFoundException} (client fault)
 *  <p>This exception is thrown when a user isn't found.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @public
 */
export class RespondToAuthChallengeCommand extends $Command
  .classBuilder<
    RespondToAuthChallengeCommandInput,
    RespondToAuthChallengeCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "RespondToAuthChallenge", {})
  .n("CognitoIdentityProviderClient", "RespondToAuthChallengeCommand")
  .f(RespondToAuthChallengeRequestFilterSensitiveLog, RespondToAuthChallengeResponseFilterSensitiveLog)
  .ser(se_RespondToAuthChallengeCommand)
  .de(de_RespondToAuthChallengeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RespondToAuthChallengeRequest;
      output: RespondToAuthChallengeResponse;
    };
    sdk: {
      input: RespondToAuthChallengeCommandInput;
      output: RespondToAuthChallengeCommandOutput;
    };
  };
}
