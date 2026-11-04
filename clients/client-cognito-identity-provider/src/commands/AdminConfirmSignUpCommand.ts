// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AdminConfirmSignUpRequest, AdminConfirmSignUpResponse } from "../models/models_0";
import { AdminConfirmSignUp$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AdminConfirmSignUpCommand}.
 */
export interface AdminConfirmSignUpCommandInput extends AdminConfirmSignUpRequest {}
/**
 * @public
 *
 * The output of {@link AdminConfirmSignUpCommand}.
 */
export interface AdminConfirmSignUpCommandOutput extends AdminConfirmSignUpResponse, __MetadataBearer {}

/**
 * Confirms user sign-up as an administrator.
 *
 * This request sets a user account active in a user pool that [requires confirmation of new user accounts](https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#signing-up-users-in-your-app-and-confirming-them-as-admin) before they can sign in. You can configure your user pool to not send confirmation codes to new users and instead confirm them with this API operation on the back end.
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
 * To configure your user pool to require administrative confirmation of users, set `AllowAdminCreateUserOnly` to `true` in a `CreateUserPool` or `UpdateUserPool` request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminConfirmSignUpCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminConfirmSignUpCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminConfirmSignUpRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   Username: "STRING_VALUE", // required
 *   ClientMetadata: { // ClientMetadataType
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new AdminConfirmSignUpCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AdminConfirmSignUpCommandInput - {@link AdminConfirmSignUpCommandInput}
 * @returns {@link AdminConfirmSignUpCommandOutput}
 * @see {@link AdminConfirmSignUpCommandInput} for command's `input` shape.
 * @see {@link AdminConfirmSignUpCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
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
export class AdminConfirmSignUpCommand extends command<AdminConfirmSignUpCommandInput, AdminConfirmSignUpCommandOutput>(
  _ep0,
  _mw0,
  "AdminConfirmSignUp",
  AdminConfirmSignUp$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AdminConfirmSignUpRequest;
      output: {};
    };
    sdk: {
      input: AdminConfirmSignUpCommandInput;
      output: AdminConfirmSignUpCommandOutput;
    };
  };
}
