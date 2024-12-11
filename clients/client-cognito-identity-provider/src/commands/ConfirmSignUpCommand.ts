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
  ConfirmSignUpRequest,
  ConfirmSignUpRequestFilterSensitiveLog,
  ConfirmSignUpResponse,
  ConfirmSignUpResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ConfirmSignUpCommand, se_ConfirmSignUpCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ConfirmSignUpCommand}.
 */
export interface ConfirmSignUpCommandInput extends ConfirmSignUpRequest {}
/**
 * @public
 *
 * The output of {@link ConfirmSignUpCommand}.
 */
export interface ConfirmSignUpCommandOutput extends ConfirmSignUpResponse, __MetadataBearer {}

/**
 * <p>This public API operation submits a code that Amazon Cognito sent to your user when they signed
 *             up in your user pool via the <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SignUp.html">SignUp</a>
 *             API operation. After your user enters their code, they confirm ownership of the email
 *             address or phone number that they provided, and their user account becomes active.
 *             Depending on your user pool configuration, your users will receive their confirmation
 *             code in an email or SMS message.</p>
 *          <p>Local users who signed up in your user pool are the only type of user who can confirm
 *             sign-up with a code. Users who federate through an external identity provider (IdP) have
 *             already been confirmed by their IdP. Administrator-created users, users created with the
 *                 <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminCreateUser.html">AdminCreateUser</a> API operation, confirm their accounts when they respond to
 *             their invitation email message and choose a password. They do not receive a confirmation
 *             code. Instead, they receive a temporary password.</p>
 *          <note>
 *             <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 *     this operation, you can't use IAM credentials to authorize requests, and you can't
 *     grant IAM permissions in policies. For more information about authorization models in
 *     Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ConfirmSignUpCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ConfirmSignUpCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // ConfirmSignUpRequest
 *   ClientId: "STRING_VALUE", // required
 *   SecretHash: "STRING_VALUE",
 *   Username: "STRING_VALUE", // required
 *   ConfirmationCode: "STRING_VALUE", // required
 *   ForceAliasCreation: true || false,
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
 *   Session: "STRING_VALUE",
 * };
 * const command = new ConfirmSignUpCommand(input);
 * const response = await client.send(command);
 * // { // ConfirmSignUpResponse
 * //   Session: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ConfirmSignUpCommandInput - {@link ConfirmSignUpCommandInput}
 * @returns {@link ConfirmSignUpCommandOutput}
 * @see {@link ConfirmSignUpCommandInput} for command's `input` shape.
 * @see {@link ConfirmSignUpCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidLambdaResponseException} (client fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an invalid Lambda response.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>This exception is thrown when a user exceeds the limit for a requested Amazon Web Services
 *             resource.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link TooManyFailedAttemptsException} (client fault)
 *  <p>This exception is thrown when the user has made too many failed attempts for a given
 *             action, such as sign-in.</p>
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
 * @throws {@link UserNotFoundException} (client fault)
 *  <p>This exception is thrown when a user isn't found.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 * @public
 */
export class ConfirmSignUpCommand extends $Command
  .classBuilder<
    ConfirmSignUpCommandInput,
    ConfirmSignUpCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "ConfirmSignUp", {})
  .n("CognitoIdentityProviderClient", "ConfirmSignUpCommand")
  .f(ConfirmSignUpRequestFilterSensitiveLog, ConfirmSignUpResponseFilterSensitiveLog)
  .ser(se_ConfirmSignUpCommand)
  .de(de_ConfirmSignUpCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConfirmSignUpRequest;
      output: ConfirmSignUpResponse;
    };
    sdk: {
      input: ConfirmSignUpCommandInput;
      output: ConfirmSignUpCommandOutput;
    };
  };
}
