// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AdminCreateUserRequest, AdminCreateUserResponse } from "../models/models_0";
import { AdminCreateUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AdminCreateUserCommand}.
 */
export interface AdminCreateUserCommandInput extends AdminCreateUserRequest {}
/**
 * @public
 *
 * The output of {@link AdminCreateUserCommand}.
 */
export interface AdminCreateUserCommandOutput extends AdminCreateUserResponse, __MetadataBearer {}

/**
 * Creates a new user in the specified user pool.
 *
 * If `MessageAction` isn't set, the default is to send a welcome message via email or phone (SMS).
 *
 * This message is based on a template that you configured in your call to create or update a user pool. This template includes your custom sign-up instructions and placeholders for user name and temporary password.
 *
 * Alternatively, you can call `AdminCreateUser` with `SUPPRESS` for the `MessageAction` parameter, and Amazon Cognito won't send any email.
 *
 * In either case, if the user has a password, they will be in the `FORCE_CHANGE_PASSWORD` state until they sign in and set their password. Your invitation message template must have the `\{####\}` password placeholder if your users have passwords. If your template doesn't have this placeholder, Amazon Cognito doesn't deliver the invitation message. In this case, you must update your message template and resend the password with a new `AdminCreateUser` request with a `MessageAction` value of `RESEND`.
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
 * import { CognitoIdentityProviderClient, AdminCreateUserCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminCreateUserCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminCreateUserRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   Username: "STRING_VALUE", // required
 *   UserAttributes: [ // AttributeListType
 *     { // AttributeType
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   ValidationData: [
 *     {
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   TemporaryPassword: "STRING_VALUE",
 *   ForceAliasCreation: true || false,
 *   MessageAction: "RESEND" || "SUPPRESS",
 *   DesiredDeliveryMediums: [ // DeliveryMediumListType
 *     "SMS" || "EMAIL",
 *   ],
 *   ClientMetadata: { // ClientMetadataType
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new AdminCreateUserCommand(input);
 * const response = await client.send(command);
 * // { // AdminCreateUserResponse
 * //   User: { // UserType
 * //     Username: "STRING_VALUE",
 * //     Attributes: [ // AttributeListType
 * //       { // AttributeType
 * //         Name: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     UserCreateDate: new Date("TIMESTAMP"),
 * //     UserLastModifiedDate: new Date("TIMESTAMP"),
 * //     Enabled: true || false,
 * //     UserStatus: "UNCONFIRMED" || "CONFIRMED" || "ARCHIVED" || "COMPROMISED" || "UNKNOWN" || "RESET_REQUIRED" || "FORCE_CHANGE_PASSWORD" || "EXTERNAL_PROVIDER",
 * //     MFAOptions: [ // MFAOptionListType
 * //       { // MFAOptionType
 * //         DeliveryMedium: "SMS" || "EMAIL",
 * //         AttributeName: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param AdminCreateUserCommandInput - {@link AdminCreateUserCommandInput}
 * @returns {@link AdminCreateUserCommandOutput}
 * @see {@link AdminCreateUserCommandInput} for command's `input` shape.
 * @see {@link AdminCreateUserCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link CodeDeliveryFailureException} (client fault)
 *
 * This exception is thrown when a verification code fails to deliver successfully.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * This exception is thrown when Amazon Cognito encounters an internal error.
 *
 * @throws {@link InvalidLambdaResponseException} (client fault)
 *
 * This exception is thrown when Amazon Cognito encounters an invalid Lambda response.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service encounters an invalid parameter.
 *
 * @throws {@link InvalidPasswordException} (client fault)
 *
 * This exception is thrown when Amazon Cognito encounters an invalid password.
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
 * @throws {@link PreconditionNotMetException} (client fault)
 *
 * This exception is thrown when a precondition is not met.
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
 * @throws {@link UnsupportedUserStateException} (client fault)
 *
 * The request failed because the user is in an unsupported state.
 *
 * @throws {@link UserLambdaValidationException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service encounters a user validation exception with the Lambda service.
 *
 * @throws {@link UsernameExistsException} (client fault)
 *
 * This exception is thrown when Amazon Cognito encounters a user name that already exists in the user pool.
 *
 * @throws {@link UserNotFoundException} (client fault)
 *
 * This exception is thrown when a user isn't found.
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 *
 * Base exception class for all service exceptions from CognitoIdentityProvider service.
 *
 * @example An AdminCreateUser request for for a test user named John.
 * ```javascript
 * // This request submits a value for all possible parameters for AdminCreateUser.
 * const input = {
 *   DesiredDeliveryMediums: [
 *     "SMS"
 *   ],
 *   MessageAction: "SUPPRESS",
 *   TemporaryPassword: "This-is-my-test-99!",
 *   UserAttributes: [
 *     {
 *       Name: "name",
 *       Value: "John"
 *     },
 *     {
 *       Name: "phone_number",
 *       Value: "+12065551212"
 *     },
 *     {
 *       Name: "email",
 *       Value: "testuser@example.com"
 *     }
 *   ],
 *   UserPoolId: "us-east-1_EXAMPLE",
 *   Username: "testuser"
 * };
 * const command = new AdminCreateUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   User: {
 *     Attributes: [
 *       {
 *         Name: "sub",
 *         Value: "d16b4aa8-8633-4abd-93b3-5062a8e1b5f8"
 *       },
 *       {
 *         Name: "name",
 *         Value: "John"
 *       },
 *       {
 *         Name: "phone_number",
 *         Value: "+12065551212"
 *       },
 *       {
 *         Name: "email",
 *         Value: "testuser@example.com"
 *       }
 *     ],
 *     Enabled: true,
 *     UserCreateDate: 1.689980857949E9,
 *     UserLastModifiedDate: 1.689980857949E9,
 *     UserStatus: "FORCE_CHANGE_PASSWORD",
 *     Username: "testuser"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class AdminCreateUserCommand extends command<AdminCreateUserCommandInput, AdminCreateUserCommandOutput>(
  _ep0,
  _mw0,
  "AdminCreateUser",
  AdminCreateUser$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AdminCreateUserRequest;
      output: AdminCreateUserResponse;
    };
    sdk: {
      input: AdminCreateUserCommandInput;
      output: AdminCreateUserCommandOutput;
    };
  };
}
