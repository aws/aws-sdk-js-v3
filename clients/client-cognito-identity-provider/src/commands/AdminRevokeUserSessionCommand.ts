// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AdminRevokeUserSessionRequest, AdminRevokeUserSessionResponse } from "../models/models_0";
import { AdminRevokeUserSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AdminRevokeUserSessionCommand}.
 */
export interface AdminRevokeUserSessionCommandInput extends AdminRevokeUserSessionRequest {}
/**
 * @public
 *
 * The output of {@link AdminRevokeUserSessionCommand}.
 */
export interface AdminRevokeUserSessionCommandOutput extends AdminRevokeUserSessionResponse, __MetadataBearer {}

/**
 * <p>Revokes a specific user session as an administrator. Amazon Cognito revokes all refresh and
 *             access tokens that are associated with the session and deletes the session record. You
 *             can revoke either a token session or an SSO session, and you can optionally cascade the
 *             revocation to linked sessions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminRevokeUserSessionCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminRevokeUserSessionCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminRevokeUserSessionRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   Username: "STRING_VALUE", // required
 *   SessionId: "STRING_VALUE", // required
 *   RevokeAssociatedSessions: "NONE" || "LINKED",
 * };
 * const command = new AdminRevokeUserSessionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AdminRevokeUserSessionCommandInput - {@link AdminRevokeUserSessionCommandInput}
 * @returns {@link AdminRevokeUserSessionCommandOutput}
 * @see {@link AdminRevokeUserSessionCommandInput} for command's `input` shape.
 * @see {@link AdminRevokeUserSessionCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link OperationNotEnabledException} (client fault)
 *  <p>This exception is thrown when an operation is not available in the current region or for the current user pool configuration. This can occur when attempting to perform operations that are not supported in secondary replica regions.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link UserNotFoundException} (client fault)
 *  <p>This exception is thrown when a user isn't found.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @example Example revoke a user session as an administrator
 * ```javascript
 * // The following example revokes a token session for the user testuser and cascades the revocation to the parent SSO session that the token session came through.
 * const input = {
 *   RevokeAssociatedSessions: "LINKED",
 *   SessionId: "tknm5k9p2q7r4s8t1v6w3x0y5z2b",
 *   UserPoolId: "us-east-1_EXAMPLE",
 *   Username: "testuser"
 * };
 * const command = new AdminRevokeUserSessionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AdminRevokeUserSessionCommand extends command<AdminRevokeUserSessionCommandInput, AdminRevokeUserSessionCommandOutput>(
  _ep0,
  _mw0,
  "AdminRevokeUserSession",
  AdminRevokeUserSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AdminRevokeUserSessionRequest;
      output: {};
    };
    sdk: {
      input: AdminRevokeUserSessionCommandInput;
      output: AdminRevokeUserSessionCommandOutput;
    };
  };
}
