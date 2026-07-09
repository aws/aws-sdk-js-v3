// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetStreamRequest, GetStreamResponse } from "../models/models_0";
import { GetStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetStreamCommand}.
 */
export interface GetStreamCommandInput extends GetStreamRequest {}
/**
 * @public
 *
 * The output of {@link GetStreamCommand}.
 */
export interface GetStreamCommandOutput extends GetStreamResponse, __MetadataBearer {}

/**
 * <p>Gets information about the active (live) stream on a specified channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, GetStreamCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, GetStreamCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // GetStreamRequest
 *   channelArn: "STRING_VALUE", // required
 * };
 * const command = new GetStreamCommand(input);
 * const response = await client.send(command);
 * // { // GetStreamResponse
 * //   stream: { // Stream
 * //     channelArn: "STRING_VALUE",
 * //     streamId: "STRING_VALUE",
 * //     playbackUrl: "STRING_VALUE",
 * //     startTime: new Date("TIMESTAMP"),
 * //     state: "STRING_VALUE",
 * //     health: "STRING_VALUE",
 * //     viewerCount: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetStreamCommandInput - {@link GetStreamCommandInput}
 * @returns {@link GetStreamCommandOutput}
 * @see {@link GetStreamCommandInput} for command's `input` shape.
 * @see {@link GetStreamCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ChannelNotBroadcasting} (client fault)
 *  <p>The stream is offline for the given channel ARN.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 *
 * @public
 */
export class GetStreamCommand extends command<GetStreamCommandInput, GetStreamCommandOutput>(
  _ep0,
  _mw0,
  "GetStream",
  GetStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStreamRequest;
      output: GetStreamResponse;
    };
    sdk: {
      input: GetStreamCommandInput;
      output: GetStreamCommandOutput;
    };
  };
}
