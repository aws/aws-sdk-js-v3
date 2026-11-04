// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ConfirmForgotPasswordRequest, ConfirmForgotPasswordResponse } from "../models/models_0";
import { ConfirmForgotPassword$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ConfirmForgotPasswordCommand}.
 */
export interface ConfirmForgotPasswordCommandInput extends ConfirmForgotPasswordRequest {}
/**
 * @public
 *
 * The output of {@link ConfirmForgotPasswordCommand}.
 */
export interface ConfirmForgotPasswordCommandOutput extends ConfirmForgotPasswordResponse, __MetadataBearer {}

/**
 * This public API operation accepts a confirmation code that Amazon Cognito sent to a user and accepts a new password for that user.
 *
 * > **Note:** Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see [Using the Amazon Cognito user pools API and user pool endpoints](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ConfirmForgotPasswordCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ConfirmForgotPasswordCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // ConfirmForgotPasswordRequest
 *   ClientId: "STRING_VALUE", // required
 *   SecretHash: "STRING_VALUE",
 *   Username: "STRING_VALUE", // required
 *   ConfirmationCode: "STRING_VALUE", // required
 *   Password: "STRING_VALUE", // required
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
 * const command = new ConfirmForgotPasswordCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ConfirmForgotPasswordCommandInput - {@link ConfirmForgotPasswordCommandInput}
 * @returns {@link ConfirmForgotPasswordCommandOutput}
 * @see {@link ConfirmForgotPasswordCommandInput} for command's `input` shape.
 * @see {@link ConfirmForgotPasswordCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link CodeMismatchException} (client fault)
 *
 * This exception is thrown if the provided code doesn't match what the server was expecting.
 *
 * @throws {@link ExpiredCodeException} (client fault)
 *
 * This exception is thrown if a code has expired.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * This exception is thrown when WAF doesn't allow your request based on a web ACL that's associated with your user pool.
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
 * @throws {@link PasswordHistoryPolicyViolationException} (client fault)
 *
 * The message returned when a user's new password matches a previous password and doesn't comply with the password-history policy.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service can't find the requested resource.
 *
 * @throws {@link TooManyFailedAttemptsException} (client fault)
 *
 * This exception is thrown when the user has made too many failed attempts for a given action, such as sign-in.
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
export class ConfirmForgotPasswordCommand extends command<ConfirmForgotPasswordCommandInput, ConfirmForgotPasswordCommandOutput>(
  _ep0,
  _mw0,
  "ConfirmForgotPassword",
  ConfirmForgotPassword$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConfirmForgotPasswordRequest;
      output: {};
    };
    sdk: {
      input: ConfirmForgotPasswordCommandInput;
      output: ConfirmForgotPasswordCommandOutput;
    };
  };
}
