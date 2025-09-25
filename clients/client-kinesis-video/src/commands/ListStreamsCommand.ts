// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { ListStreamsInput, ListStreamsOutput } from "../models/models_0";
import { ListStreams } from "../schemas/schemas_6_Signaling";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStreamsCommand}.
 */
export interface ListStreamsCommandInput extends ListStreamsInput {}
/**
 * @public
 *
 * The output of {@link ListStreamsCommand}.
 */
export interface ListStreamsCommandOutput extends ListStreamsOutput, __MetadataBearer {}

/**
 * <p>Returns an array of <code>StreamInfo</code> objects. Each object describes a
 *             stream. To retrieve only streams that satisfy a specific condition, you can specify a
 *                 <code>StreamNameCondition</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, ListStreamsCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, ListStreamsCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // import type { KinesisVideoClientConfig } from "@aws-sdk/client-kinesis-video";
 * const config = {}; // type is KinesisVideoClientConfig
 * const client = new KinesisVideoClient(config);
 * const input = { // ListStreamsInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   StreamNameCondition: { // StreamNameCondition
 *     ComparisonOperator: "BEGINS_WITH",
 *     ComparisonValue: "STRING_VALUE",
 *   },
 * };
 * const command = new ListStreamsCommand(input);
 * const response = await client.send(command);
 * // { // ListStreamsOutput
 * //   StreamInfoList: [ // StreamInfoList
 * //     { // StreamInfo
 * //       DeviceName: "STRING_VALUE",
 * //       StreamName: "STRING_VALUE",
 * //       StreamARN: "STRING_VALUE",
 * //       MediaType: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //       Version: "STRING_VALUE",
 * //       Status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       DataRetentionInHours: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStreamsCommandInput - {@link ListStreamsCommandInput}
 * @returns {@link ListStreamsCommandOutput}
 * @see {@link ListStreamsCommandInput} for command's `input` shape.
 * @see {@link ListStreamsCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
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
export class ListStreamsCommand extends $Command
  .classBuilder<
    ListStreamsCommandInput,
    ListStreamsCommandOutput,
    KinesisVideoClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisVideoClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KinesisVideo_20170930", "ListStreams", {})
  .n("KinesisVideoClient", "ListStreamsCommand")
  .sc(ListStreams)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStreamsInput;
      output: ListStreamsOutput;
    };
    sdk: {
      input: ListStreamsCommandInput;
      output: ListStreamsCommandOutput;
    };
  };
}
