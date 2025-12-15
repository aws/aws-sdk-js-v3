// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import type { ListTagsForStreamInput, ListTagsForStreamOutput } from "../models/models_0";
import { ListTagsForStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTagsForStreamCommand}.
 */
export interface ListTagsForStreamCommandInput extends ListTagsForStreamInput {}
/**
 * @public
 *
 * The output of {@link ListTagsForStreamCommand}.
 */
export interface ListTagsForStreamCommandOutput extends ListTagsForStreamOutput, __MetadataBearer {}

/**
 * <p>Lists the tags for the specified Kinesis data stream. This operation has a limit of
 *             five transactions per second per account.</p>
 *          <note>
 *             <p>When invoking this API, you must use either the <code>StreamARN</code> or the
 *                     <code>StreamName</code> parameter, or both. It is recommended that you use the
 *                     <code>StreamARN</code> input parameter when you invoke this API.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, ListTagsForStreamCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, ListTagsForStreamCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // ListTagsForStreamInput
 *   StreamName: "STRING_VALUE",
 *   ExclusiveStartTagKey: "STRING_VALUE",
 *   Limit: Number("int"),
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new ListTagsForStreamCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsForStreamOutput
 * //   Tags: [ // TagList // required
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
 * @param ListTagsForStreamCommandInput - {@link ListTagsForStreamCommandInput}
 * @returns {@link ListTagsForStreamCommandOutput}
 * @see {@link ListTagsForStreamCommandInput} for command's `input` shape.
 * @see {@link ListTagsForStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Specifies that you do not have the permissions required to perform this
 *             operation.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>A specified parameter exceeds its restrictions, is not supported, or can't be used.
 *             For more information, see the returned message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *             stream requests exceeds the maximum number allowed. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found. The stream might not be specified
 *             correctly.</p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 *
 * @public
 */
export class ListTagsForStreamCommand extends $Command
  .classBuilder<
    ListTagsForStreamCommandInput,
    ListTagsForStreamCommandOutput,
    KinesisClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    OperationType: { type: "staticContextParams", value: `control` },
    StreamARN: { type: "contextParams", name: "StreamARN" },
  })
  .m(function (this: any, Command: any, cs: any, config: KinesisClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Kinesis_20131202", "ListTagsForStream", {})
  .n("KinesisClient", "ListTagsForStreamCommand")
  .sc(ListTagsForStream$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTagsForStreamInput;
      output: ListTagsForStreamOutput;
    };
    sdk: {
      input: ListTagsForStreamCommandInput;
      output: ListTagsForStreamCommandOutput;
    };
  };
}
