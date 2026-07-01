// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTagsForDeliveryStreamInput, ListTagsForDeliveryStreamOutput } from "../models/models_0";
import { ListTagsForDeliveryStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { FirehoseClientConfig } from "@aws-sdk/client-firehose";
 * const config = {}; // type is FirehoseClientConfig
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
 *
 * @public
 */
export class ListTagsForDeliveryStreamCommand extends command<ListTagsForDeliveryStreamCommandInput, ListTagsForDeliveryStreamCommandOutput>(
  _ep0,
  _mw0,
  "ListTagsForDeliveryStream",
  ListTagsForDeliveryStream$
) {
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
