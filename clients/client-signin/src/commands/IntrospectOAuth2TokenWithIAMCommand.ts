// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { IntrospectOAuth2TokenWithIAMRequest, IntrospectOAuth2TokenWithIAMResponse } from "../models/models_0";
import { IntrospectOAuth2TokenWithIAM$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link IntrospectOAuth2TokenWithIAMCommand}.
 */
export interface IntrospectOAuth2TokenWithIAMCommandInput extends IntrospectOAuth2TokenWithIAMRequest {}
/**
 * @public
 *
 * The output of {@link IntrospectOAuth2TokenWithIAMCommand}.
 */
export interface IntrospectOAuth2TokenWithIAMCommandOutput extends IntrospectOAuth2TokenWithIAMResponse, __MetadataBearer {}

/**
 * Grants permission to inspect the metadata and state of an OAuth 2.0
 * access token or refresh token
 *
 * Implements RFC 7662 OAuth 2.0 Token Introspection over a SigV4-authenticated
 * endpoint. Inspects the metadata of an access_token or refresh_token issued
 * by AWS Sign-In and returns the claims associated with it.
 *
 * Inactive token semantics (RFC 7662 §2.2): when the supplied token is
 * unknown, expired, revoked, malformed, or owned by a different account,
 * the response body is exactly \{ "active": false \} with all other claims
 * omitted.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SigninClient, IntrospectOAuth2TokenWithIAMCommand } from "@aws-sdk/client-signin"; // ES Modules import
 * // const { SigninClient, IntrospectOAuth2TokenWithIAMCommand } = require("@aws-sdk/client-signin"); // CommonJS import
 * // import type { SigninClientConfig } from "@aws-sdk/client-signin";
 * const config = {}; // type is SigninClientConfig
 * const client = new SigninClient(config);
 * const input = { // IntrospectOAuth2TokenWithIAMRequest
 *   token: "STRING_VALUE", // required
 *   tokenTypeHint: "STRING_VALUE",
 * };
 * const command = new IntrospectOAuth2TokenWithIAMCommand(input);
 * const response = await client.send(command);
 * // { // IntrospectOAuth2TokenWithIAMResponse
 * //   active: true || false, // required
 * //   clientId: "STRING_VALUE",
 * //   userId: "STRING_VALUE",
 * //   tokenType: "STRING_VALUE",
 * //   exp: Number("long"),
 * //   iat: Number("long"),
 * //   nbf: Number("long"),
 * //   sub: "STRING_VALUE",
 * //   aud: "STRING_VALUE",
 * //   iss: "STRING_VALUE",
 * //   jti: "STRING_VALUE",
 * //   accountId: "STRING_VALUE",
 * //   signinSession: "STRING_VALUE",
 * //   resource: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param IntrospectOAuth2TokenWithIAMCommandInput - {@link IntrospectOAuth2TokenWithIAMCommandInput}
 * @returns {@link IntrospectOAuth2TokenWithIAMCommandOutput}
 * @see {@link IntrospectOAuth2TokenWithIAMCommandInput} for command's `input` shape.
 * @see {@link IntrospectOAuth2TokenWithIAMCommandOutput} for command's `response` shape.
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
export class IntrospectOAuth2TokenWithIAMCommand extends command<IntrospectOAuth2TokenWithIAMCommandInput, IntrospectOAuth2TokenWithIAMCommandOutput>(
  _ep1,
  _mw0,
  "IntrospectOAuth2TokenWithIAM",
  IntrospectOAuth2TokenWithIAM$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: IntrospectOAuth2TokenWithIAMRequest;
      output: IntrospectOAuth2TokenWithIAMResponse;
    };
    sdk: {
      input: IntrospectOAuth2TokenWithIAMCommandInput;
      output: IntrospectOAuth2TokenWithIAMCommandOutput;
    };
  };
}
