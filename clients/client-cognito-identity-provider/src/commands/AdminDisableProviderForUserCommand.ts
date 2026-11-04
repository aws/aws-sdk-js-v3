// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AdminDisableProviderForUserRequest, AdminDisableProviderForUserResponse } from "../models/models_0";
import { AdminDisableProviderForUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AdminDisableProviderForUserCommand}.
 */
export interface AdminDisableProviderForUserCommandInput extends AdminDisableProviderForUserRequest {}
/**
 * @public
 *
 * The output of {@link AdminDisableProviderForUserCommand}.
 */
export interface AdminDisableProviderForUserCommandOutput extends AdminDisableProviderForUserResponse, __MetadataBearer {}

/**
 * Prevents the user from signing in with the specified external (SAML or social) identity provider (IdP). If the user that you want to deactivate is a Amazon Cognito user pools native username + password user, they can't use their password to sign in. If the user to deactivate is a linked external IdP user, any link between that user and an existing user is removed. When the external user signs in again, and the user is no longer attached to the previously linked `DestinationUser`, the user must create a new user account.
 *
 * The value of `ProviderName` must match the name of a user pool IdP.
 *
 * To deactivate a local user, set `ProviderName` to `Cognito` and the `ProviderAttributeName` to `Cognito_Subject`. The `ProviderAttributeValue` must be user's local username.
 *
 * The `ProviderAttributeName` must always be `Cognito_Subject` for social IdPs. The `ProviderAttributeValue` must always be the exact subject that was used when the user was originally linked as a source user.
 *
 * For de-linking a SAML identity, there are two scenarios. If the linked identity has not yet been used to sign in, the `ProviderAttributeName` and `ProviderAttributeValue` must be the same values that were used for the `SourceUser` when the identities were originally linked using `AdminLinkProviderForUser` call. This is also true if the linking was done with `ProviderAttributeName` set to `Cognito_Subject`. If the user has already signed in, the `ProviderAttributeName` must be `Cognito_Subject` and `ProviderAttributeValue` must be the `NameID` from their SAML assertion.
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
 * import { CognitoIdentityProviderClient, AdminDisableProviderForUserCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminDisableProviderForUserCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminDisableProviderForUserRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   User: { // ProviderUserIdentifierType
 *     ProviderName: "STRING_VALUE",
 *     ProviderAttributeName: "STRING_VALUE",
 *     ProviderAttributeValue: "STRING_VALUE",
 *   },
 * };
 * const command = new AdminDisableProviderForUserCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AdminDisableProviderForUserCommandInput - {@link AdminDisableProviderForUserCommandInput}
 * @returns {@link AdminDisableProviderForUserCommandOutput}
 * @see {@link AdminDisableProviderForUserCommandInput} for command's `input` shape.
 * @see {@link AdminDisableProviderForUserCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link AliasExistsException} (client fault)
 *
 * This exception is thrown when a user tries to confirm the account with an email address or phone number that has already been supplied as an alias for a different user profile. This exception indicates that an account with this email address or phone already exists in a user pool that you've configured to use email address or phone number as a sign-in alias.
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
export class AdminDisableProviderForUserCommand extends command<AdminDisableProviderForUserCommandInput, AdminDisableProviderForUserCommandOutput>(
  _ep0,
  _mw0,
  "AdminDisableProviderForUser",
  AdminDisableProviderForUser$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AdminDisableProviderForUserRequest;
      output: {};
    };
    sdk: {
      input: AdminDisableProviderForUserCommandInput;
      output: AdminDisableProviderForUserCommandOutput;
    };
  };
}
