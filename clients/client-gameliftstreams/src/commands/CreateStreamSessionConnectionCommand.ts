// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateStreamSessionConnectionInput, CreateStreamSessionConnectionOutput } from "../models/models_0";
import { CreateStreamSessionConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Enables clients to reconnect to a stream session while preserving all session state and data in the disconnected session. This reconnection process can be initiated when a stream session is in either `PENDING_CLIENT_RECONNECTION` or `ACTIVE` status. The process works as follows:
 *
 * 1. Initial disconnect:
 *
 *    - When a client disconnects or loses connection, the stream session transitions from `CONNECTED` to `PENDING_CLIENT_RECONNECTION`
 * 2. Reconnection time window:
 *
 *    - Clients have `ConnectionTimeoutSeconds` (defined in [StartStreamSession](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_StartStreamSession.html)) to reconnect before session termination
 *    - Your backend server must call **CreateStreamSessionConnection** to initiate reconnection
 *    - Session transitions to `RECONNECTING` status
 * 3. Reconnection completion:
 *
 *    - On successful **CreateStreamSessionConnection**, session status changes to `ACTIVE`
 *    - Provide the new connection information to the requesting client
 *    - Client must establish connection within `ConnectionTimeoutSeconds`
 *    - Session terminates automatically if client fails to connect in time
 *
 * For more information about the stream session lifecycle, see [Stream sessions](https://docs.aws.amazon.com/gameliftstreams/latest/developerguide/stream-sessions.html) in the *Amazon GameLift Streams Developer Guide*.
 *
 * To begin re-connecting to an existing stream session, specify the stream group ID and stream session ID that you want to reconnect to, and the signal request to use with the stream.
 *
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
 *
 * You don't have the required permissions to access this Amazon GameLift Streams resource. Correct the permissions before you try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The service encountered an internal error and is unable to complete the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request was not found. Correct the request before you try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling. Retry the request after the suggested wait time.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One or more parameter values in the request fail to satisfy the specified constraints. Correct the invalid parameter values before retrying the request.
 *
 * @throws {@link GameLiftStreamsServiceException}
 *
 * Base exception class for all service exceptions from GameLiftStreams service.
 *
 * @public
 */
export class CreateStreamSessionConnectionCommand extends command<CreateStreamSessionConnectionCommandInput, CreateStreamSessionConnectionCommandOutput>(
  _ep0,
  _mw0,
  "CreateStreamSessionConnection",
  CreateStreamSessionConnection$
) {
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
