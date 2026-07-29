// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RevokeStreamUrlInput } from "../models/models_0";
import { RevokeStreamUrl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RevokeStreamUrlCommand}.
 */
export interface RevokeStreamUrlCommandInput extends RevokeStreamUrlInput {}
/**
 * @public
 *
 * The output of {@link RevokeStreamUrlCommand}.
 */
export interface RevokeStreamUrlCommandOutput extends __MetadataBearer {}

/**
 * <p>Revokes a stream URL so that it can no longer start new stream sessions. By default, stream sessions that are already running continue until they end on their own. To also end running sessions, set <code>RevocationMode</code> to <code>REVOKE_AND_TERMINATE_SESSIONS</code>.</p> <p>Revoking a stream URL is permanent. The status of the stream URL changes to <code>REVOKED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftStreamsClient, RevokeStreamUrlCommand } from "@aws-sdk/client-gameliftstreams"; // ES Modules import
 * // const { GameLiftStreamsClient, RevokeStreamUrlCommand } = require("@aws-sdk/client-gameliftstreams"); // CommonJS import
 * // import type { GameLiftStreamsClientConfig } from "@aws-sdk/client-gameliftstreams";
 * const config = {}; // type is GameLiftStreamsClientConfig
 * const client = new GameLiftStreamsClient(config);
 * const input = { // RevokeStreamUrlInput
 *   Identifier: "STRING_VALUE", // required
 *   StreamUrlIdentifier: "STRING_VALUE", // required
 *   RevocationMode: "REVOKE_URL" || "REVOKE_AND_TERMINATE_SESSIONS",
 * };
 * const command = new RevokeStreamUrlCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RevokeStreamUrlCommandInput - {@link RevokeStreamUrlCommandInput}
 * @returns {@link RevokeStreamUrlCommandOutput}
 * @see {@link RevokeStreamUrlCommandInput} for command's `input` shape.
 * @see {@link RevokeStreamUrlCommandOutput} for command's `response` shape.
 * @see {@link GameLiftStreamsClientResolvedConfig | config} for GameLiftStreamsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have the required permissions to access this Amazon GameLift Streams resource. Correct the permissions before you try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Correct the request before you try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Retry the request after the suggested wait time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameter values in the request fail to satisfy the specified constraints. Correct the invalid parameter values before retrying the request.</p>
 *
 * @throws {@link GameLiftStreamsServiceException}
 * <p>Base exception class for all service exceptions from GameLiftStreams service.</p>
 *
 *
 * @public
 */
export class RevokeStreamUrlCommand extends command<RevokeStreamUrlCommandInput, RevokeStreamUrlCommandOutput>(
  _ep0,
  _mw0,
  "RevokeStreamUrl",
  RevokeStreamUrl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RevokeStreamUrlInput;
      output: {};
    };
    sdk: {
      input: RevokeStreamUrlCommandInput;
      output: RevokeStreamUrlCommandOutput;
    };
  };
}
