// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AdminUserGlobalSignOutRequest, AdminUserGlobalSignOutResponse } from "../models/models_0";
import { AdminUserGlobalSignOut$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AdminUserGlobalSignOutCommand}.
 */
export interface AdminUserGlobalSignOutCommandInput extends AdminUserGlobalSignOutRequest {}
/**
 * @public
 *
 * The output of {@link AdminUserGlobalSignOutCommand}.
 */
export interface AdminUserGlobalSignOutCommandOutput extends AdminUserGlobalSignOutResponse, __MetadataBearer {}

/**
 * Invalidates the identity, access, and refresh tokens that Amazon Cognito issued to a user. Call this operation with your administrative credentials when your user signs out of your app. This results in the following behavior.
 *
 * - Amazon Cognito no longer accepts *token-authorized* user operations that you authorize with a signed-out user's access tokens. For more information, see [Using the Amazon Cognito user pools API and user pool endpoints](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html).
 *
 *   Amazon Cognito returns an `Access Token has been revoked` error when your app attempts to authorize a user pools API request with a revoked access token that contains the scope `aws.cognito.signin.user.admin`.
 * - Amazon Cognito no longer accepts a signed-out user's ID token in a [GetId](https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetId.html) request to an identity pool with `ServerSideTokenCheck` enabled for its user pool IdP configuration in [CognitoIdentityProvider](https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_CognitoIdentityProvider.html).
 * - Amazon Cognito no longer accepts a signed-out user's refresh tokens in refresh requests.
 *
 * Other requests might be valid until your user's token expires. This operation doesn't clear the [managed login](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html) session cookie. To clear the session for a user who signed in with managed login or the classic hosted UI, direct their browser session to the [logout endpoint](https://docs.aws.amazon.com/cognito/latest/developerguide/logout-endpoint.html).
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
 * import { CognitoIdentityProviderClient, AdminUserGlobalSignOutCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminUserGlobalSignOutCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminUserGlobalSignOutRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   Username: "STRING_VALUE", // required
 * };
 * const command = new AdminUserGlobalSignOutCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AdminUserGlobalSignOutCommandInput - {@link AdminUserGlobalSignOutCommandInput}
 * @returns {@link AdminUserGlobalSignOutCommandOutput}
 * @see {@link AdminUserGlobalSignOutCommandInput} for command's `input` shape.
 * @see {@link AdminUserGlobalSignOutCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * This exception is thrown when Amazon Cognito encounters an internal error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service encounters an invalid parameter.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * This exception is thrown when the user has made too many requests for a given operation.
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
export class AdminUserGlobalSignOutCommand extends command<AdminUserGlobalSignOutCommandInput, AdminUserGlobalSignOutCommandOutput>(
  _ep0,
  _mw0,
  "AdminUserGlobalSignOut",
  AdminUserGlobalSignOut$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AdminUserGlobalSignOutRequest;
      output: {};
    };
    sdk: {
      input: AdminUserGlobalSignOutCommandInput;
      output: AdminUserGlobalSignOutCommandOutput;
    };
  };
}
