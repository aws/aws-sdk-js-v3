// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { RevokeOAuth2TokenWithIAMRequest, RevokeOAuth2TokenWithIAMResponse } from "../models/models_0";
import { RevokeOAuth2TokenWithIAM$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RevokeOAuth2TokenWithIAMCommand}.
 */
export interface RevokeOAuth2TokenWithIAMCommandInput extends RevokeOAuth2TokenWithIAMRequest {}
/**
 * @public
 *
 * The output of {@link RevokeOAuth2TokenWithIAMCommand}.
 */
export interface RevokeOAuth2TokenWithIAMCommandOutput extends RevokeOAuth2TokenWithIAMResponse, __MetadataBearer {}

/**
 * Grants permission to revoke an OAuth 2.0 refresh token and its associated refresh tokens
 *
 * Revokes a refresh_token issued by AWS Sign-In, invalidating the entire token
 * chain so that the refresh_token can no longer be used to mint new access_tokens.
 *
 * Idempotency: revoking an already-revoked, expired, or otherwise invalid token
 * still returns 200 OK with an empty body. Only the refresh_token type is accepted.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SigninClient, RevokeOAuth2TokenWithIAMCommand } from "@aws-sdk/client-signin"; // ES Modules import
 * // const { SigninClient, RevokeOAuth2TokenWithIAMCommand } = require("@aws-sdk/client-signin"); // CommonJS import
 * // import type { SigninClientConfig } from "@aws-sdk/client-signin";
 * const config = {}; // type is SigninClientConfig
 * const client = new SigninClient(config);
 * const input = { // RevokeOAuth2TokenWithIAMRequest
 *   token: "STRING_VALUE", // required
 * };
 * const command = new RevokeOAuth2TokenWithIAMCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RevokeOAuth2TokenWithIAMCommandInput - {@link RevokeOAuth2TokenWithIAMCommandInput}
 * @returns {@link RevokeOAuth2TokenWithIAMCommandOutput}
 * @see {@link RevokeOAuth2TokenWithIAMCommandInput} for command's `input` shape.
 * @see {@link RevokeOAuth2TokenWithIAMCommandOutput} for command's `response` shape.
 * @see {@link SigninClientResolvedConfig | config} for SigninClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  Error thrown for access denied scenarios with flexible HTTP status mapping
 *
 * Runtime HTTP Status Code Mapping:
 * - HTTP 401 (Unauthorized): TOKEN_EXPIRED, AUTHCODE_EXPIRED
 * - HTTP 403 (Forbidden): USER_CREDENTIALS_CHANGED, INSUFFICIENT_PERMISSIONS
 *
 * The specific HTTP status code is determined at runtime based on the error enum value.
 * Consumers should use the error field to determine the specific access denial reason.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Error thrown when an internal server error occurs
 *
 * HTTP Status Code: 500 Internal Server Error
 *
 * Used for unexpected server-side errors that prevent request processing.
 *
 * @throws {@link TooManyRequestsError} (client fault)
 *  Error thrown when rate limit is exceeded
 *
 * HTTP Status Code: 429 Too Many Requests
 *
 * Possible OAuth2ErrorCode values:
 * - INVALID_REQUEST: Rate limiting, too many requests, abuse prevention
 *
 * Possible causes:
 * - Too many token requests from the same client
 * - Rate limiting based on client_id or IP address
 * - Abuse prevention mechanisms triggered
 * - Service protection against excessive token generation
 *
 * @throws {@link ValidationException} (client fault)
 *  Error thrown when request validation fails
 *
 * HTTP Status Code: 400 Bad Request
 *
 * Used for request validation errors such as malformed parameters,
 * missing required fields, or invalid parameter values.
 *
 * @throws {@link SigninServiceException}
 * <p>Base exception class for all service exceptions from Signin service.</p>
 *
 *
 * @public
 */
export class RevokeOAuth2TokenWithIAMCommand extends command<RevokeOAuth2TokenWithIAMCommandInput, RevokeOAuth2TokenWithIAMCommandOutput>(
  _ep1,
  _mw0,
  "RevokeOAuth2TokenWithIAM",
  RevokeOAuth2TokenWithIAM$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RevokeOAuth2TokenWithIAMRequest;
      output: {};
    };
    sdk: {
      input: RevokeOAuth2TokenWithIAMCommandInput;
      output: RevokeOAuth2TokenWithIAMCommandOutput;
    };
  };
}
