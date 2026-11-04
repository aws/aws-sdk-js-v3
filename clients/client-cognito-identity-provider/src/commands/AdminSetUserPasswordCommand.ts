// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AdminSetUserPasswordRequest, AdminSetUserPasswordResponse } from "../models/models_0";
import { AdminSetUserPassword$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AdminSetUserPasswordCommand}.
 */
export interface AdminSetUserPasswordCommandInput extends AdminSetUserPasswordRequest {}
/**
 * @public
 *
 * The output of {@link AdminSetUserPasswordCommand}.
 */
export interface AdminSetUserPasswordCommandOutput extends AdminSetUserPasswordResponse, __MetadataBearer {}

/**
 * Sets the specified user's password in a user pool. This operation administratively sets a temporary or permanent password for a user. With this operation, you can bypass self-service password changes and permit immediate sign-in with the password that you set. To do this, set `Permanent` to `true`.
 *
 * You can also set a new temporary password in this request, send it to a user, and require them to choose a new password on their next sign-in. To do this, set `Permanent` to `false`.
 *
 * If the password is temporary, the user's `Status` becomes `FORCE_CHANGE_PASSWORD`. When the user next tries to sign in, the `InitiateAuth` or `AdminInitiateAuth` response includes the `NEW_PASSWORD_REQUIRED` challenge. If the user doesn't sign in before the temporary password expires, they can no longer sign in and you must repeat this operation to set a temporary or permanent password for them.
 *
 * After the user sets a new password, or if you set a permanent password, their status becomes `Confirmed`.
 *
 * `AdminSetUserPassword` can set a password for the user profile that Amazon Cognito creates for third-party federated users. When you set a password, the federated user's status changes from `EXTERNAL_PROVIDER` to `CONFIRMED`. A user in this state can sign in as a federated user, and initiate authentication flows in the API like a linked native user. They can also modify their password and attributes in token-authenticated API requests like `ChangePassword` and `UpdateUserAttributes`. As a best security practice and to keep users in sync with your external IdP, don't set passwords on federated user profiles. To set up a federated user for native sign-in with a linked native user, refer to [Linking federated users to an existing user profile](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation-consolidate-users.html).
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
 * import { CognitoIdentityProviderClient, AdminSetUserPasswordCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminSetUserPasswordCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminSetUserPasswordRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   Username: "STRING_VALUE", // required
 *   Password: "STRING_VALUE", // required
 *   Permanent: true || false,
 * };
 * const command = new AdminSetUserPasswordCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AdminSetUserPasswordCommandInput - {@link AdminSetUserPasswordCommandInput}
 * @returns {@link AdminSetUserPasswordCommandOutput}
 * @see {@link AdminSetUserPasswordCommandInput} for command's `input` shape.
 * @see {@link AdminSetUserPasswordCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidPasswordException} (client fault)
 *
 * This exception is thrown when Amazon Cognito encounters an invalid password.
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
export class AdminSetUserPasswordCommand extends command<AdminSetUserPasswordCommandInput, AdminSetUserPasswordCommandOutput>(
  _ep0,
  _mw0,
  "AdminSetUserPassword",
  AdminSetUserPassword$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AdminSetUserPasswordRequest;
      output: {};
    };
    sdk: {
      input: AdminSetUserPasswordCommandInput;
      output: AdminSetUserPasswordCommandOutput;
    };
  };
}
