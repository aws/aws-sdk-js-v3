// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTagsForStreamInput, ListTagsForStreamOutput } from "../models/models_0";
import { ListTagsForStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a list of tags associated with the specified stream.
 *
 * In the request, you must specify either the `StreamName` or the `StreamARN`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, ListTagsForStreamCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, ListTagsForStreamCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // import type { KinesisVideoClientConfig } from "@aws-sdk/client-kinesis-video";
 * const config = {}; // type is KinesisVideoClientConfig
 * const client = new KinesisVideoClient(config);
 * const input = { // ListTagsForStreamInput
 *   NextToken: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 *   StreamName: "STRING_VALUE",
 * };
 * const command = new ListTagsForStreamCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsForStreamOutput
 * //   NextToken: "STRING_VALUE",
 * //   Tags: { // ResourceTags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ListTagsForStreamCommandInput - {@link ListTagsForStreamCommandInput}
 * @returns {@link ListTagsForStreamCommandOutput}
 * @see {@link ListTagsForStreamCommandInput} for command's `input` shape.
 * @see {@link ListTagsForStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *
 * Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client calls. Try making the call later.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * The value for this input parameter is invalid.
 *
 * @throws {@link InvalidResourceFormatException} (client fault)
 *
 * The format of the `StreamARN` is invalid.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *
 * The caller is not authorized to perform this operation.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Amazon Kinesis Video Streams can't find the stream that you specified.
 *
 * @throws {@link KinesisVideoServiceException}
 *
 * Base exception class for all service exceptions from KinesisVideo service.
 *
 * @public
 */
export class ListTagsForStreamCommand extends command<ListTagsForStreamCommandInput, ListTagsForStreamCommandOutput>(
  _ep0,
  _mw0,
  "ListTagsForStream",
  ListTagsForStream$
) {
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
