// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TagStreamInput, TagStreamOutput } from "../models/models_0";
import { TagStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TagStreamCommand}.
 */
export interface TagStreamCommandInput extends TagStreamInput {}
/**
 * @public
 *
 * The output of {@link TagStreamCommand}.
 */
export interface TagStreamCommandOutput extends TagStreamOutput, __MetadataBearer {}

/**
 * Adds one or more tags to a stream. A *tag* is a key-value pair (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html) in the *Billing and Cost Management and Cost Management User Guide*.
 *
 * You must provide either the `StreamName` or the `StreamARN`.
 *
 * This operation requires permission for the `KinesisVideo:TagStream` action.
 *
 * A Kinesis video stream can support up to 50 tags.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, TagStreamCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, TagStreamCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // import type { KinesisVideoClientConfig } from "@aws-sdk/client-kinesis-video";
 * const config = {}; // type is KinesisVideoClientConfig
 * const client = new KinesisVideoClient(config);
 * const input = { // TagStreamInput
 *   StreamARN: "STRING_VALUE",
 *   StreamName: "STRING_VALUE",
 *   Tags: { // ResourceTags // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new TagStreamCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TagStreamCommandInput - {@link TagStreamCommandInput}
 * @returns {@link TagStreamCommandOutput}
 * @see {@link TagStreamCommandInput} for command's `input` shape.
 * @see {@link TagStreamCommandOutput} for command's `response` shape.
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
 * @throws {@link TagsPerResourceExceededLimitException} (client fault)
 *
 * You have exceeded the limit of tags that you can associate with the resource. A Kinesis video stream can support up to 50 tags.
 *
 * @throws {@link KinesisVideoServiceException}
 *
 * Base exception class for all service exceptions from KinesisVideo service.
 *
 * @public
 */
export class TagStreamCommand extends command<TagStreamCommandInput, TagStreamCommandOutput>(
  _ep0,
  _mw0,
  "TagStream",
  TagStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TagStreamInput;
      output: {};
    };
    sdk: {
      input: TagStreamCommandInput;
      output: TagStreamCommandOutput;
    };
  };
}
