// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { GetStreamRequest, GetStreamResponse } from "../models/models_0";
import { de_GetStreamCommand, se_GetStreamCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 *  <p/>
 *
 * @throws {@link ChannelNotBroadcasting} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 *
 * @public
 */
export class GetStreamCommand extends $Command
  .classBuilder<
    GetStreamCommandInput,
    GetStreamCommandOutput,
    IvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoService", "GetStream", {})
  .n("IvsClient", "GetStreamCommand")
  .f(void 0, void 0)
  .ser(se_GetStreamCommand)
  .de(de_GetStreamCommand)
  .build() {
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
