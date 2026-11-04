// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AdminInitiateAuthRequest, AdminInitiateAuthResponse } from "../models/models_0";
import { AdminInitiateAuth$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AdminInitiateAuthCommand}.
 */
export interface AdminInitiateAuthCommandInput extends AdminInitiateAuthRequest {}
/**
 * @public
 *
 * The output of {@link AdminInitiateAuthCommand}.
 */
export interface AdminInitiateAuthCommandOutput extends AdminInitiateAuthResponse, __MetadataBearer {}

/**
 * Starts sign-in for applications with a server-side component, for example a traditional web application. This operation specifies the authentication flow that you'd like to begin. The authentication flow that you specify must be supported in your app client configuration. For more information about authentication flows, see [Authentication flows](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-authentication-flow-methods.html).
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
 * import { CognitoIdentityProviderClient, AdminInitiateAuthCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminInitiateAuthCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminInitiateAuthRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   ClientId: "STRING_VALUE", // required
 *   AuthFlow: "USER_SRP_AUTH" || "REFRESH_TOKEN_AUTH" || "REFRESH_TOKEN" || "CUSTOM_AUTH" || "ADMIN_NO_SRP_AUTH" || "USER_PASSWORD_AUTH" || "ADMIN_USER_PASSWORD_AUTH" || "USER_AUTH", // required
 *   AuthParameters: { // AuthParametersType
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientMetadata: { // ClientMetadataType
 *     "<keys>": "STRING_VALUE",
 *   },
 *   AnalyticsMetadata: { // AnalyticsMetadataType
 *     AnalyticsEndpointId: "STRING_VALUE",
 *   },
 *   ContextData: { // ContextDataType
 *     IpAddress: "STRING_VALUE", // required
 *     ServerName: "STRING_VALUE", // required
 *     ServerPath: "STRING_VALUE", // required
 *     HttpHeaders: [ // HttpHeaderList // required
 *       { // HttpHeader
 *         headerName: "STRING_VALUE",
 *         headerValue: "STRING_VALUE",
 *       },
 *     ],
 *     EncodedData: "STRING_VALUE",
 *   },
 *   Session: "STRING_VALUE",
 * };
 * const command = new AdminInitiateAuthCommand(input);
 * const response = await client.send(command);
 * // { // AdminInitiateAuthResponse
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
 * //   AvailableChallenges: [ // AvailableChallengeListType
 * //     "SMS_MFA" || "EMAIL_OTP" || "SOFTWARE_TOKEN_MFA" || "SELECT_MFA_TYPE" || "MFA_SETUP" || "PASSWORD_VERIFIER" || "CUSTOM_CHALLENGE" || "SELECT_CHALLENGE" || "DEVICE_SRP_AUTH" || "DEVICE_PASSWORD_VERIFIER" || "ADMIN_NO_SRP_AUTH" || "NEW_PASSWORD_REQUIRED" || "SMS_OTP" || "PASSWORD" || "WEB_AUTHN" || "PASSWORD_SRP",
 * //   ],
 * // };
 *
 * ```
 *
 * @param AdminInitiateAuthCommandInput - {@link AdminInitiateAuthCommandInput}
 * @returns {@link AdminInitiateAuthCommandOutput}
 * @see {@link AdminInitiateAuthCommandInput} for command's `input` shape.
 * @see {@link AdminInitiateAuthCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
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
 * @throws {@link InvalidLambdaResponseException} (client fault)
 *
 * This exception is thrown when Amazon Cognito encounters an invalid Lambda response.
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
 * @throws {@link InvalidUserPoolConfigurationException} (client fault)
 *
 * This exception is thrown when the user pool configuration is not valid.
 *
 * @throws {@link MFAMethodNotFoundException} (client fault)
 *
 * This exception is thrown when Amazon Cognito can't find a multi-factor authentication (MFA) method.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *
 * This exception is thrown when a user isn't authorized.
 *
 * @throws {@link OperationNotEnabledException} (client fault)
 *
 * This exception is thrown when an operation is not available in the current region or for the current user pool configuration. This can occur when attempting to perform operations that are not supported in secondary replica regions.
 *
 * @throws {@link PasswordResetRequiredException} (client fault)
 *
 * This exception is thrown when a password reset is required.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service can't find the requested resource.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * This exception is thrown when the user has made too many requests for a given operation.
 *
 * @throws {@link UnexpectedLambdaException} (client fault)
 *
 * This exception is thrown when Amazon Cognito encounters an unexpected exception with Lambda.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * Exception that is thrown when you attempt to perform an operation that isn't enabled for the user pool client.
 *
 * @throws {@link UserLambdaValidationException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service encounters a user validation exception with the Lambda service.
 *
 * @throws {@link UserNotConfirmedException} (client fault)
 *
 * This exception is thrown when a user isn't confirmed successfully.
 *
 * @throws {@link UserNotFoundException} (client fault)
 *
 * This exception is thrown when a user isn't found.
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 *
 * Base exception class for all service exceptions from CognitoIdentityProvider service.
 *
 * @public
 */
export class AdminInitiateAuthCommand extends command<AdminInitiateAuthCommandInput, AdminInitiateAuthCommandOutput>(
  _ep0,
  _mw0,
  "AdminInitiateAuth",
  AdminInitiateAuth$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AdminInitiateAuthRequest;
      output: AdminInitiateAuthResponse;
    };
    sdk: {
      input: AdminInitiateAuthCommandInput;
      output: AdminInitiateAuthCommandOutput;
    };
  };
}
