// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RevokeConnectionTokenRequest, RevokeConnectionTokenResponse } from "../models/models_0";
import { RevokeConnectionToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RevokeConnectionTokenCommand}.
 */
export interface RevokeConnectionTokenCommandInput extends RevokeConnectionTokenRequest {}
/**
 * @public
 *
 * The output of {@link RevokeConnectionTokenCommand}.
 */
export interface RevokeConnectionTokenCommandOutput extends RevokeConnectionTokenResponse, __MetadataBearer {}

/**
 * <p>Revokes the specified connection token so that it can no longer connect to a stage. This operation disconnects any participant currently connected with the revoked token.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, RevokeConnectionTokenCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, RevokeConnectionTokenCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // RevokeConnectionTokenRequest
 *   tokenId: "STRING_VALUE", // required
 * };
 * const command = new RevokeConnectionTokenCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RevokeConnectionTokenCommandInput - {@link RevokeConnectionTokenCommandInput}
 * @returns {@link RevokeConnectionTokenCommandOutput}
 * @see {@link RevokeConnectionTokenCommandInput} for command's `input` shape.
 * @see {@link RevokeConnectionTokenCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IVSRealTimeServiceException}
 * <p>Base exception class for all service exceptions from IVSRealTime service.</p>
 *
 *
 * @public
 */
export class RevokeConnectionTokenCommand extends command<RevokeConnectionTokenCommandInput, RevokeConnectionTokenCommandOutput>(
  _ep0,
  _mw0,
  "RevokeConnectionToken",
  RevokeConnectionToken$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RevokeConnectionTokenRequest;
      output: {};
    };
    sdk: {
      input: RevokeConnectionTokenCommandInput;
      output: RevokeConnectionTokenCommandOutput;
    };
  };
}
