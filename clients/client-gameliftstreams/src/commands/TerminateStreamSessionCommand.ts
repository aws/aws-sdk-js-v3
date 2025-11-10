// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftStreamsClient";
import { TerminateStreamSessionInput } from "../models/models_0";
import { TerminateStreamSession } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TerminateStreamSessionCommand}.
 */
export interface TerminateStreamSessionCommandInput extends TerminateStreamSessionInput {}
/**
 * @public
 *
 * The output of {@link TerminateStreamSessionCommand}.
 */
export interface TerminateStreamSessionCommandOutput extends __MetadataBearer {}

/**
 * <p>Permanently terminates an active stream session. When called, the stream session status changes to <code>TERMINATING</code>. You can terminate a stream session in any status except <code>ACTIVATING</code>. If the stream session is in <code>ACTIVATING</code> status, an exception is thrown.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftStreamsClient, TerminateStreamSessionCommand } from "@aws-sdk/client-gameliftstreams"; // ES Modules import
 * // const { GameLiftStreamsClient, TerminateStreamSessionCommand } = require("@aws-sdk/client-gameliftstreams"); // CommonJS import
 * // import type { GameLiftStreamsClientConfig } from "@aws-sdk/client-gameliftstreams";
 * const config = {}; // type is GameLiftStreamsClientConfig
 * const client = new GameLiftStreamsClient(config);
 * const input = { // TerminateStreamSessionInput
 *   Identifier: "STRING_VALUE", // required
 *   StreamSessionIdentifier: "STRING_VALUE", // required
 * };
 * const command = new TerminateStreamSessionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TerminateStreamSessionCommandInput - {@link TerminateStreamSessionCommandInput}
 * @returns {@link TerminateStreamSessionCommandOutput}
 * @see {@link TerminateStreamSessionCommandInput} for command's `input` shape.
 * @see {@link TerminateStreamSessionCommandOutput} for command's `response` shape.
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
export class TerminateStreamSessionCommand extends $Command
  .classBuilder<
    TerminateStreamSessionCommandInput,
    TerminateStreamSessionCommandOutput,
    GameLiftStreamsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftStreamsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLiftStreams", "TerminateStreamSession", {})
  .n("GameLiftStreamsClient", "TerminateStreamSessionCommand")
  .sc(TerminateStreamSession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TerminateStreamSessionInput;
      output: {};
    };
    sdk: {
      input: TerminateStreamSessionCommandInput;
      output: TerminateStreamSessionCommandOutput;
    };
  };
}
