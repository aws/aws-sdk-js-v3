// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { ListTagsForDeliveryStreamInput, ListTagsForDeliveryStreamOutput } from "../models/models_0";
import { de_ListTagsForDeliveryStreamCommand, se_ListTagsForDeliveryStreamCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTagsForDeliveryStreamCommand}.
 */
export interface ListTagsForDeliveryStreamCommandInput extends ListTagsForDeliveryStreamInput {}
/**
 * @public
 *
 * The output of {@link ListTagsForDeliveryStreamCommand}.
 */
export interface ListTagsForDeliveryStreamCommandOutput extends ListTagsForDeliveryStreamOutput, __MetadataBearer {}

/**
 * <p>Lists the tags for the specified Firehose stream. This operation has a limit of five
 *          transactions per second per account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, ListTagsForDeliveryStreamCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, ListTagsForDeliveryStreamCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new FirehoseClient(config);
 * const input = { // ListTagsForDeliveryStreamInput
 *   DeliveryStreamName: "STRING_VALUE", // required
 *   ExclusiveStartTagKey: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListTagsForDeliveryStreamCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsForDeliveryStreamOutput
 * //   Tags: [ // ListTagsForDeliveryStreamOutputTagList // required
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   HasMoreTags: true || false, // required
 * // };
 *
 * ```
 *
 * @param ListTagsForDeliveryStreamCommandInput - {@link ListTagsForDeliveryStreamCommandInput}
 * @returns {@link ListTagsForDeliveryStreamCommandOutput}
 * @see {@link ListTagsForDeliveryStreamCommandInput} for command's `input` shape.
 * @see {@link ListTagsForDeliveryStreamCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for FirehoseClient's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter has a value that is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have already reached the limit for a requested resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link FirehoseServiceException}
 * <p>Base exception class for all service exceptions from Firehose service.</p>
 *
 * @public
 */
export class ListTagsForDeliveryStreamCommand extends $Command
  .classBuilder<
    ListTagsForDeliveryStreamCommandInput,
    ListTagsForDeliveryStreamCommandOutput,
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
  .s("Firehose_20150804", "ListTagsForDeliveryStream", {})
  .n("FirehoseClient", "ListTagsForDeliveryStreamCommand")
  .f(void 0, void 0)
  .ser(se_ListTagsForDeliveryStreamCommand)
  .de(de_ListTagsForDeliveryStreamCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTagsForDeliveryStreamInput;
      output: ListTagsForDeliveryStreamOutput;
    };
    sdk: {
      input: ListTagsForDeliveryStreamCommandInput;
      output: ListTagsForDeliveryStreamCommandOutput;
    };
  };
}
