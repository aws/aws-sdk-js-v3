// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftStreamsClient";
import {
  CreateStreamSessionConnectionInput,
  CreateStreamSessionConnectionInputFilterSensitiveLog,
  CreateStreamSessionConnectionOutput,
  CreateStreamSessionConnectionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_CreateStreamSessionConnectionCommand,
  se_CreateStreamSessionConnectionCommand,
} from "../protocols/Aws_restJson1";

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
export interface CreateStreamSessionConnectionCommandOutput
  extends CreateStreamSessionConnectionOutput,
    __MetadataBearer {}

/**
 * <p>Allows clients to reconnect to a recently disconnected stream session without losing any data from the last session.</p>
 *          <p>A client can reconnect to a stream session that's in <code>PENDING_CLIENT_RECONNECTION</code> or <code>ACTIVE</code> status. In the
 *             stream session life cycle, when the client disconnects from the stream session, the stream session transitions from <code>CONNECTED</code>
 *             to <code>PENDING_CLIENT_RECONNECTION</code> status. When a client requests to reconnect by calling
 *                 <code>CreateStreamSessionConnection</code>, the stream session transitions to <code>RECONNECTING</code> status. When the reconnection
 *             is successful, the stream session transitions to <code>ACTIVE</code> status. After a stream session is disconnected for longer than
 *                 <code>ConnectionTimeoutSeconds</code>, the stream session transitions to the <code>TERMINATED</code> status.</p>
 *          <p>To connect to an existing stream session, specify the stream group ID and stream session ID that you want to reconnect to, as well as
 *             the signal request settings to use with the stream.</p>
 *          <p>
 *             <code>ConnectionTimeoutSeconds</code> defines the amount of time after the stream session disconnects that a reconnection is allowed. If
 *             a client is disconnected from the stream for longer than <code>ConnectionTimeoutSeconds</code>, the stream session ends.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftStreamsClient, CreateStreamSessionConnectionCommand } from "@aws-sdk/client-gameliftstreams"; // ES Modules import
 * // const { GameLiftStreamsClient, CreateStreamSessionConnectionCommand } = require("@aws-sdk/client-gameliftstreams"); // CommonJS import
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
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the
 *          conflict before retrying this request.</p>
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
 *  <p>One or more parameter values in the request fail to satisfy the specified constraints. Correct the invalid parameter values before
 *          retrying the request.</p>
 *
 * @throws {@link GameLiftStreamsServiceException}
 * <p>Base exception class for all service exceptions from GameLiftStreams service.</p>
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GameLiftStreams", "CreateStreamSessionConnection", {})
  .n("GameLiftStreamsClient", "CreateStreamSessionConnectionCommand")
  .f(CreateStreamSessionConnectionInputFilterSensitiveLog, CreateStreamSessionConnectionOutputFilterSensitiveLog)
  .ser(se_CreateStreamSessionConnectionCommand)
  .de(de_CreateStreamSessionConnectionCommand)
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
