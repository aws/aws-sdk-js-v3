// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopStreamRequest, StopStreamResponse } from "../models/models_0";
import { StopStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopStreamCommand}.
 */
export interface StopStreamCommandInput extends StopStreamRequest {}
/**
 * @public
 *
 * The output of {@link StopStreamCommand}.
 */
export interface StopStreamCommandOutput extends StopStreamResponse, __MetadataBearer {}

/**
 * Disconnects the incoming RTMPS stream for the specified channel. Can be used in conjunction with DeleteStreamKey to prevent further streaming to a channel.
 *
 * > **Note:** Many streaming client-software libraries automatically reconnect a dropped RTMPS session, so to stop the stream permanently, you may want to first revoke the `streamKey` attached to the channel.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, StopStreamCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, StopStreamCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // StopStreamRequest
 *   channelArn: "STRING_VALUE", // required
 * };
 * const command = new StopStreamCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopStreamCommandInput - {@link StopStreamCommandInput}
 * @returns {@link StopStreamCommandOutput}
 * @see {@link StopStreamCommandInput} for command's `input` shape.
 * @see {@link StopStreamCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ChannelNotBroadcasting} (client fault)
 *
 * The stream is offline for the given channel ARN.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link StreamUnavailable} (server fault)
 *
 * The stream is temporarily unavailable.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link IvsServiceException}
 *
 * Base exception class for all service exceptions from Ivs service.
 *
 * @public
 */
export class StopStreamCommand extends command<StopStreamCommandInput, StopStreamCommandOutput>(
  _ep0,
  _mw0,
  "StopStream",
  StopStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopStreamRequest;
      output: {};
    };
    sdk: {
      input: StopStreamCommandInput;
      output: StopStreamCommandOutput;
    };
  };
}
