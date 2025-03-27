// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { ListDeliveryStreamsInput, ListDeliveryStreamsOutput } from "../models/models_0";
import { de_ListDeliveryStreamsCommand, se_ListDeliveryStreamsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDeliveryStreamsCommand}.
 */
export interface ListDeliveryStreamsCommandInput extends ListDeliveryStreamsInput {}
/**
 * @public
 *
 * The output of {@link ListDeliveryStreamsCommand}.
 */
export interface ListDeliveryStreamsCommandOutput extends ListDeliveryStreamsOutput, __MetadataBearer {}

/**
 * <p>Lists your Firehose streams in alphabetical order of their names.</p>
 *          <p>The number of Firehose streams might be too large to return using a single call to
 *             <code>ListDeliveryStreams</code>. You can limit the number of Firehose streams returned,
 *          using the <code>Limit</code> parameter. To determine whether there are more delivery
 *          streams to list, check the value of <code>HasMoreDeliveryStreams</code> in the output. If
 *          there are more Firehose streams to list, you can request them by calling this operation
 *          again and setting the <code>ExclusiveStartDeliveryStreamName</code> parameter to the name
 *          of the last Firehose stream returned in the last call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, ListDeliveryStreamsCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, ListDeliveryStreamsCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const input = { // ListDeliveryStreamsInput
 *   Limit: Number("int"),
 *   DeliveryStreamType: "DirectPut" || "KinesisStreamAsSource" || "MSKAsSource" || "DatabaseAsSource",
 *   ExclusiveStartDeliveryStreamName: "STRING_VALUE",
 * };
 * const command = new ListDeliveryStreamsCommand(input);
 * const response = await client.send(command);
 * // { // ListDeliveryStreamsOutput
 * //   DeliveryStreamNames: [ // DeliveryStreamNameList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   HasMoreDeliveryStreams: true || false, // required
 * // };
 *
 * ```
 *
 * @param ListDeliveryStreamsCommandInput - {@link ListDeliveryStreamsCommandInput}
 * @returns {@link ListDeliveryStreamsCommandOutput}
 * @see {@link ListDeliveryStreamsCommandInput} for command's `input` shape.
 * @see {@link ListDeliveryStreamsCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for FirehoseClient's `config` shape.
 *
 * @throws {@link FirehoseServiceException}
 * <p>Base exception class for all service exceptions from Firehose service.</p>
 *
 *
 * @public
 */
export class ListDeliveryStreamsCommand extends $Command
  .classBuilder<
    ListDeliveryStreamsCommandInput,
    ListDeliveryStreamsCommandOutput,
    FirehoseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FirehoseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Firehose_20150804", "ListDeliveryStreams", {})
  .n("FirehoseClient", "ListDeliveryStreamsCommand")
  .f(void 0, void 0)
  .ser(se_ListDeliveryStreamsCommand)
  .de(de_ListDeliveryStreamsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDeliveryStreamsInput;
      output: ListDeliveryStreamsOutput;
    };
    sdk: {
      input: ListDeliveryStreamsCommandInput;
      output: ListDeliveryStreamsCommandOutput;
    };
  };
}
