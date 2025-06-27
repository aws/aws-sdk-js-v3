// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { ListSignalingChannelsInput, ListSignalingChannelsOutput } from "../models/models_0";
import { de_ListSignalingChannelsCommand, se_ListSignalingChannelsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSignalingChannelsCommand}.
 */
export interface ListSignalingChannelsCommandInput extends ListSignalingChannelsInput {}
/**
 * @public
 *
 * The output of {@link ListSignalingChannelsCommand}.
 */
export interface ListSignalingChannelsCommandOutput extends ListSignalingChannelsOutput, __MetadataBearer {}

/**
 * <p>Returns an array of <code>ChannelInfo</code> objects. Each object describes a
 *             signaling channel. To retrieve only those channels that satisfy a specific condition,
 *             you can specify a <code>ChannelNameCondition</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, ListSignalingChannelsCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, ListSignalingChannelsCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const input = { // ListSignalingChannelsInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ChannelNameCondition: { // ChannelNameCondition
 *     ComparisonOperator: "BEGINS_WITH",
 *     ComparisonValue: "STRING_VALUE",
 *   },
 * };
 * const command = new ListSignalingChannelsCommand(input);
 * const response = await client.send(command);
 * // { // ListSignalingChannelsOutput
 * //   ChannelInfoList: [ // ChannelInfoList
 * //     { // ChannelInfo
 * //       ChannelName: "STRING_VALUE",
 * //       ChannelARN: "STRING_VALUE",
 * //       ChannelType: "SINGLE_MASTER" || "FULL_MESH",
 * //       ChannelStatus: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       SingleMasterConfiguration: { // SingleMasterConfiguration
 * //         MessageTtlSeconds: Number("int"),
 * //       },
 * //       Version: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSignalingChannelsCommandInput - {@link ListSignalingChannelsCommandInput}
 * @returns {@link ListSignalingChannelsCommandOutput}
 * @see {@link ListSignalingChannelsCommandInput} for command's `input` shape.
 * @see {@link ListSignalingChannelsCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to perform this operation.</p>
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *  <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of
 *             allowed client calls. Try making the call later.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The value for this input parameter is invalid.</p>
 *
 * @throws {@link KinesisVideoServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideo service.</p>
 *
 *
 * @public
 */
export class ListSignalingChannelsCommand extends $Command
  .classBuilder<
    ListSignalingChannelsCommandInput,
    ListSignalingChannelsCommandOutput,
    KinesisVideoClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisVideoClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("KinesisVideo_20170930", "ListSignalingChannels", {})
  .n("KinesisVideoClient", "ListSignalingChannelsCommand")
  .f(void 0, void 0)
  .ser(se_ListSignalingChannelsCommand)
  .de(de_ListSignalingChannelsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSignalingChannelsInput;
      output: ListSignalingChannelsOutput;
    };
    sdk: {
      input: ListSignalingChannelsCommandInput;
      output: ListSignalingChannelsCommandOutput;
    };
  };
}
