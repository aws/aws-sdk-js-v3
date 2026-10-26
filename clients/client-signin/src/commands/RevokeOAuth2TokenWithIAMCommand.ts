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
 * Revokes an OAuth 2.0 refresh token and its associated token chain.
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
