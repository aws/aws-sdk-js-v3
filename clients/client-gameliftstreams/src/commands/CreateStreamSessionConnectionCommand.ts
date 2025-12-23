// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GameLiftStreamsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GameLiftStreamsClient";
import type { CreateStreamSessionConnectionInput, CreateStreamSessionConnectionOutput } from "../models/models_0";
import { CreateStreamSessionConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateStreamSessionConnectionCommand}.
 */
export interface CreateStreamSessionConnectionCommandInput extends CreateStreamSessionConnectionInput {}
/**
 * @public
 *
 * The output of {@link CreateStreamSessionConnectionCommand}.
 */
export interface CreateStreamSessionConnectionCommandOutput extends CreateStreamSessionConnectionOutput, __MetadataBearer {}

/**
 * <p>Enables clients to reconnect to a stream session while preserving all session state and data in the disconnected session. This reconnection process can be initiated when a stream session is in either <code>PENDING_CLIENT_RECONNECTION</code> or <code>ACTIVE</code> status. The process works as follows: </p> <ol> <li> <p>Initial disconnect:</p> <ul> <li> <p>When a client disconnects or loses connection, the stream session transitions from <code>CONNECTED</code> to <code>PENDING_CLIENT_RECONNECTION</code> </p> </li> </ul> </li> <li> <p>Reconnection time window:</p> <ul> <li> <p>Clients have <code>ConnectionTimeoutSeconds</code> (defined in <a href="https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_StartStreamSession.html">StartStreamSession</a>) to reconnect before session termination</p> </li> <li> <p>Your backend server must call <b>CreateStreamSessionConnection</b> to initiate reconnection</p> </li> <li> <p>Session transitions to <code>RECONNECTING</code> status</p> </li> </ul> </li> <li> <p>Reconnection completion:</p> <ul> <li> <p>On successful <b>CreateStreamSessionConnection</b>, session status changes to <code>ACTIVE</code> </p> </li> <li> <p>Provide the new connection information to the requesting client</p> </li> <li> <p>Client must establish connection within <code>ConnectionTimeoutSeconds</code> </p> </li> <li> <p>Session terminates automatically if client fails to connect in time</p> </li> </ul> </li> </ol> <p>For more information about the stream session lifecycle, see <a href="https://docs.aws.amazon.com/gameliftstreams/latest/developerguide/stream-sessions.html">Stream sessions</a> in the <i>Amazon GameLift Streams Developer Guide</i>.</p> <p>To begin re-connecting to an existing stream session, specify the stream group ID and stream session ID that you want to reconnect to, and the signal request to use with the stream.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftStreamsClient, CreateStreamSessionConnectionCommand } from "@aws-sdk/client-gameliftstreams"; // ES Modules import
 * // const { GameLiftStreamsClient, CreateStreamSessionConnectionCommand } = require("@aws-sdk/client-gameliftstreams"); // CommonJS import
 * // import type { GameLiftStreamsClientConfig } from "@aws-sdk/client-gameliftstreams";
 * const config = {}; // type is GameLiftStreamsClientConfig
 * const client = new GameLiftStreamsClient(config);
 * const input = { // CreateStreamSessionConnectionInput
 *   ClientToken: "STRING_VALUE",
 *   Identifier: "STRING_VALUE", // required
 *   StreamSessionIdentifier: "STRING_VALUE", // required
 *   SignalRequest: "STRING_VALUE", // required
 * };
 * const command = new CreateStreamSessionConnectionCommand(input);
 * const response = await client.send(command);
 * // { // CreateStreamSessionConnectionOutput
 * //   SignalResponse: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateStreamSessionConnectionCommandInput - {@link CreateStreamSessionConnectionCommandInput}
 * @returns {@link CreateStreamSessionConnectionCommandOutput}
 * @see {@link CreateStreamSessionConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateStreamSessionConnectionCommandOutput} for command's `response` shape.
 * @see {@link GameLiftStreamsClientResolvedConfig | config} for GameLiftStreamsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have the required permissions to access this Amazon GameLift Streams resource. Correct the permissions before you try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.</p>
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
export class CreateStreamSessionConnectionCommand extends $Command
  .classBuilder<
    CreateStreamSessionConnectionCommandInput,
    CreateStreamSessionConnectionCommandOutput,
    GameLiftStreamsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftStreamsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLiftStreams", "CreateStreamSessionConnection", {})
  .n("GameLiftStreamsClient", "CreateStreamSessionConnectionCommand")
  .sc(CreateStreamSessionConnection$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStreamSessionConnectionInput;
      output: CreateStreamSessionConnectionOutput;
    };
    sdk: {
      input: CreateStreamSessionConnectionCommandInput;
      output: CreateStreamSessionConnectionCommandOutput;
    };
  };
}
