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
  AdminCreateUserRequest,
  AdminCreateUserRequestFilterSensitiveLog,
  AdminCreateUserResponse,
  AdminCreateUserResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_AdminCreateUserCommand, se_AdminCreateUserCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a new user in the specified user pool.</p>
 *          <p>If <code>MessageAction</code> isn't set, the default is to send a welcome message via
 *             email or phone (SMS).</p>
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
 *          <p>This message is based on a template that you configured in your call to create or
 *             update a user pool. This template includes your custom sign-up instructions and
 *             placeholders for user name and temporary password.</p>
 *          <p>Alternatively, you can call <code>AdminCreateUser</code> with <code>SUPPRESS</code>
 *             for the <code>MessageAction</code> parameter, and Amazon Cognito won't send any email. </p>
 *          <p>In either case, if the user has a password, they will be in the
 *                 <code>FORCE_CHANGE_PASSWORD</code> state until they sign in and set their password.
 *             Your invitation message template must have the <code>\{####\}</code> password placeholder
 *             if your users have passwords. If your template doesn't have this placeholder, Amazon Cognito
 *             doesn't deliver the invitation message. In this case, you must update your message
 *             template and resend the password with a new <code>AdminCreateUser</code> request with a
 *                 <code>MessageAction</code> value of <code>RESEND</code>.</p>
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
 * import { CognitoIdentityProviderClient, AdminCreateUserCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminCreateUserCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
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
 *  <p>This exception is thrown when a verification code fails to deliver
 *             successfully.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
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
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>This exception is thrown when a precondition is not met.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link UnexpectedLambdaException} (client fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an unexpected exception with
 *             Lambda.</p>
 *
 * @throws {@link UnsupportedUserStateException} (client fault)
 *  <p>The request failed because the user is in an unsupported state.</p>
 *
 * @throws {@link UserLambdaValidationException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters a user validation exception
 *             with the Lambda service.</p>
 *
 * @throws {@link UsernameExistsException} (client fault)
 *  <p>This exception is thrown when Amazon Cognito encounters a user name that already
 *             exists in the user pool.</p>
 *
 * @throws {@link UserNotFoundException} (client fault)
 *  <p>This exception is thrown when a user isn't found.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 * @public
 * @example An AdminCreateUser request for for a test user named John.
 * ```javascript
 * // This request submits a value for all possible parameters for AdminCreateUser.
 * const input = {
 *   "DesiredDeliveryMediums": [
 *     "SMS"
 *   ],
 *   "MessageAction": "SUPPRESS",
 *   "TemporaryPassword": "This-is-my-test-99!",
 *   "UserAttributes": [
 *     {
 *       "Name": "name",
 *       "Value": "John"
 *     },
 *     {
 *       "Name": "phone_number",
 *       "Value": "+12065551212"
 *     },
 *     {
 *       "Name": "email",
 *       "Value": "testuser@example.com"
 *     }
 *   ],
 *   "UserPoolId": "us-east-1_EXAMPLE",
 *   "Username": "testuser"
 * };
 * const command = new AdminCreateUserCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "User": {
 *     "Attributes": [
 *       {
 *         "Name": "sub",
 *         "Value": "d16b4aa8-8633-4abd-93b3-5062a8e1b5f8"
 *       },
 *       {
 *         "Name": "name",
 *         "Value": "John"
 *       },
 *       {
 *         "Name": "phone_number",
 *         "Value": "+12065551212"
 *       },
 *       {
 *         "Name": "email",
 *         "Value": "testuser@example.com"
 *       }
 *     ],
 *     "Enabled": true,
 *     "UserCreateDate": 1689980857.949,
 *     "UserLastModifiedDate": 1689980857.949,
 *     "UserStatus": "FORCE_CHANGE_PASSWORD",
 *     "Username": "testuser"
 *   }
 * }
 * *\/
 * // example id: an-admincreateuser-request-for-for-a-test-user-named-john-1689980900481
 * ```
 *
 */
export class AdminCreateUserCommand extends $Command
  .classBuilder<
    AdminCreateUserCommandInput,
    AdminCreateUserCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "AdminCreateUser", {})
  .n("CognitoIdentityProviderClient", "AdminCreateUserCommand")
  .f(AdminCreateUserRequestFilterSensitiveLog, AdminCreateUserResponseFilterSensitiveLog)
  .ser(se_AdminCreateUserCommand)
  .de(de_AdminCreateUserCommand)
  .build() {
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
