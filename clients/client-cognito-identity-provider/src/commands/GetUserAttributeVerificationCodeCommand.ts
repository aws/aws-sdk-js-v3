// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetUserAttributeVerificationCodeRequest,
  GetUserAttributeVerificationCodeResponse,
} from "../models/models_0";
import { GetUserAttributeVerificationCode$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetUserAttributeVerificationCodeCommand}.
 */
export interface GetUserAttributeVerificationCodeCommandInput extends GetUserAttributeVerificationCodeRequest {}
/**
 * @public
 *
 * The output of {@link GetUserAttributeVerificationCodeCommand}.
 */
export interface GetUserAttributeVerificationCodeCommandOutput extends GetUserAttributeVerificationCodeResponse, __MetadataBearer {}

/**
 * Given an attribute name, sends a user attribute verification code for the specified attribute name to the currently signed-in user.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 *
 * > **Note:** Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see [Using the Amazon Cognito user pools API and user pool endpoints](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html).
 *
 * > **Note:**
 * >
 * > This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with [Amazon Pinpoint](https://console.aws.amazon.com/pinpoint/home/). Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.
 * >
 * > If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In *[sandbox mode](https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html)* , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see [SMS message settings for Amazon Cognito user pools](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html) in the *Amazon Cognito Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetUserAttributeVerificationCodeCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetUserAttributeVerificationCodeCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // GetUserAttributeVerificationCodeRequest
 *   AccessToken: "STRING_VALUE", // required
 *   AttributeName: "STRING_VALUE", // required
 *   ClientMetadata: { // ClientMetadataType
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new GetUserAttributeVerificationCodeCommand(input);
 * const response = await client.send(command);
 * // { // GetUserAttributeVerificationCodeResponse
 * //   CodeDeliveryDetails: { // CodeDeliveryDetailsType
 * //     Destination: "STRING_VALUE",
 * //     DeliveryMedium: "SMS" || "EMAIL",
 * //     AttributeName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetUserAttributeVerificationCodeCommandInput - {@link GetUserAttributeVerificationCodeCommandInput}
 * @returns {@link GetUserAttributeVerificationCodeCommandOutput}
 * @see {@link GetUserAttributeVerificationCodeCommandInput} for command's `input` shape.
 * @see {@link GetUserAttributeVerificationCodeCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link CodeDeliveryFailureException} (client fault)
 *
 * This exception is thrown when a verification code fails to deliver successfully.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * This exception is thrown when WAF doesn't allow your request based on a web ACL that's associated with your user pool.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * This exception is thrown when a user exceeds the limit for a requested Amazon Web Services resource.
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
export class GetUserAttributeVerificationCodeCommand extends command<GetUserAttributeVerificationCodeCommandInput, GetUserAttributeVerificationCodeCommandOutput>(
  _ep0,
  _mw0,
  "GetUserAttributeVerificationCode",
  GetUserAttributeVerificationCode$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUserAttributeVerificationCodeRequest;
      output: GetUserAttributeVerificationCodeResponse;
    };
    sdk: {
      input: GetUserAttributeVerificationCodeCommandInput;
      output: GetUserAttributeVerificationCodeCommandOutput;
    };
  };
}
