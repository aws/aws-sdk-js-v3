// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RevokeUserSessionRequest, RevokeUserSessionResponse } from "../models/models_1";
import { RevokeUserSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RevokeUserSessionCommand}.
 */
export interface RevokeUserSessionCommandInput extends RevokeUserSessionRequest {}
/**
 * @public
 *
 * The output of {@link RevokeUserSessionCommand}.
 */
export interface RevokeUserSessionCommandOutput extends RevokeUserSessionResponse, __MetadataBearer {}

/**
 * <p>Revokes a specific session for the currently signed-in user. Amazon Cognito authorizes this
 *             operation with the user's access token, revokes all refresh and access tokens that are
 *             associated with the session, and deletes the session record. You can't revoke the
 *             session that the calling access token belongs to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, RevokeUserSessionCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, RevokeUserSessionCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // RevokeUserSessionRequest
 *   AccessToken: "STRING_VALUE", // required
 *   SessionId: "STRING_VALUE", // required
 *   RevokeAssociatedSessions: "NONE" || "LINKED",
 * };
 * const command = new RevokeUserSessionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RevokeUserSessionCommandInput - {@link RevokeUserSessionCommandInput}
 * @returns {@link RevokeUserSessionCommandOutput}
 * @see {@link RevokeUserSessionCommandInput} for command's `input` shape.
 * @see {@link RevokeUserSessionCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>This exception is thrown when WAF doesn't allow your request based on a web
 *             ACL that's associated with your user pool.</p>
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
 * @throws {@link PasswordResetRequiredException} (client fault)
 *  <p>This exception is thrown when a password reset is required.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link UserNotConfirmedException} (client fault)
 *  <p>This exception is thrown when a user isn't confirmed successfully.</p>
 *
 * @throws {@link UserNotFoundException} (client fault)
 *  <p>This exception is thrown when a user isn't found.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @example Example revoke one of a user's own sessions
 * ```javascript
 * // The following example revokes a single token session that belongs to the user who owns the provided access token, such as signing out a lost or stolen device. Only the targeted session is revoked.
 * const input = {
 *   AccessToken: "eyJra456defEXAMPLE",
 *   RevokeAssociatedSessions: "NONE",
 *   SessionId: "tknm5k9p2q7r4s8t1v6w3x0y5z2b"
 * };
 * const command = new RevokeUserSessionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class RevokeUserSessionCommand extends command<RevokeUserSessionCommandInput, RevokeUserSessionCommandOutput>(
  _ep0,
  _mw0,
  "RevokeUserSession",
  RevokeUserSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RevokeUserSessionRequest;
      output: {};
    };
    sdk: {
      input: RevokeUserSessionCommandInput;
      output: RevokeUserSessionCommandOutput;
    };
  };
}
