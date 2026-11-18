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
 * Inspects the metadata and active state of an OAuth 2.0 access token or refresh token.
 *
 * Implements RFC 7662 OAuth 2.0 Token Introspection over a SigV4-authenticated
 * endpoint. Returns the claims associated with a token issued by AWS Sign-In.
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
 *  You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request failed because of an internal server error.
 *
 * @throws {@link TooManyRequestsError} (client fault)
 *  The request failed because you exceeded the request rate limit for this operation.
 *
 * @throws {@link ValidationException} (client fault)
 *  The request failed because it contains a malformed, missing, or invalid parameter.
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
