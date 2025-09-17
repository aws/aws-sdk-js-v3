// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { CreateStreamInput } from "../models/models_0";
import { de_CreateStreamCommand, se_CreateStreamCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateStreamCommand}.
 */
export interface CreateStreamCommandInput extends CreateStreamInput {}
/**
 * @public
 *
 * The output of {@link CreateStreamCommand}.
 */
export interface CreateStreamCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates a Kinesis data stream. A stream captures and transports data records that are
 *             continuously emitted from different data sources or <i>producers</i>.
 *             Scale-out within a stream is explicitly supported by means of shards, which are uniquely
 *             identified groups of data records in a stream.</p>
 *          <p>You can create your data stream using either on-demand or provisioned capacity mode.
 *             Data streams with an on-demand mode require no capacity planning and automatically scale
 *             to handle gigabytes of write and read throughput per minute. With the on-demand mode,
 *             Kinesis Data Streams automatically manages the shards in order to provide the necessary
 *             throughput. For the data streams with a provisioned mode, you must specify the number of
 *             shards for the data stream. Each shard can support reads up to five transactions per
 *             second, up to a maximum data read total of 2 MiB per second. Each shard can support
 *             writes up to 1,000 records per second, up to a maximum data write total of 1 MiB per
 *             second. If the amount of data input increases or decreases, you can add or remove
 *             shards.</p>
 *          <p>The stream name identifies the stream. The name is scoped to the Amazon Web Services
 *             account used by the application. It is also scoped by Amazon Web Services Region. That
 *             is, two streams in two different accounts can have the same name, and two streams in the
 *             same account, but in two different Regions, can have the same name.</p>
 *          <p>
 *             <code>CreateStream</code> is an asynchronous operation. Upon receiving a
 *                 <code>CreateStream</code> request, Kinesis Data Streams immediately returns and sets
 *             the stream status to <code>CREATING</code>. After the stream is created, Kinesis Data
 *             Streams sets the stream status to <code>ACTIVE</code>. You should perform read and write
 *             operations only on an <code>ACTIVE</code> stream. </p>
 *          <p>You receive a <code>LimitExceededException</code> when making a
 *                 <code>CreateStream</code> request when you try to do one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>Have more than five streams in the <code>CREATING</code> state at any point in
 *                     time.</p>
 *             </li>
 *             <li>
 *                <p>Create more shards than are authorized for your account.</p>
 *             </li>
 *          </ul>
 *          <p>For the default shard limit for an Amazon Web Services account, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Amazon
 *                 Kinesis Data Streams Limits</a> in the <i>Amazon Kinesis Data Streams
 *                 Developer Guide</i>. To increase this limit, <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">contact Amazon Web Services
 *                 Support</a>.</p>
 *          <p>You can use <a>DescribeStreamSummary</a> to check the stream status, which
 *             is returned in <code>StreamStatus</code>.</p>
 *          <p>
 *             <a>CreateStream</a> has a limit of five transactions per second per
 *             account.</p>
 *          <p>You can add tags to the stream when making a <code>CreateStream</code> request by setting the <code>Tags</code> parameter. If you pass the <code>Tags</code> parameter, in addition to having the <code>kinesis:CreateStream</code> permission, you must also have the <code>kinesis:AddTagsToStream</code> permission for the stream that will be created. The <code>kinesis:TagResource</code> permission won’t work to tag streams on creation. Tags will take effect from the <code>CREATING</code> status of the stream, but you can't make any updates to the tags until the stream is in <code>ACTIVE</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, CreateStreamCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, CreateStreamCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // CreateStreamInput
 *   StreamName: "STRING_VALUE", // required
 *   ShardCount: Number("int"),
 *   StreamModeDetails: { // StreamModeDetails
 *     StreamMode: "PROVISIONED" || "ON_DEMAND", // required
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateStreamCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateStreamCommandInput - {@link CreateStreamCommandInput}
 * @returns {@link CreateStreamCommandOutput}
 * @see {@link CreateStreamCommandInput} for command's `input` shape.
 * @see {@link CreateStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>A specified parameter exceeds its restrictions, is not supported, or can't be used.
 *             For more information, see the returned message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *             stream requests exceeds the maximum number allowed. </p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is not available for this operation. For successful operation, the
 *             resource must be in the <code>ACTIVE</code> state.</p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 *
 * @public
 */
export class CreateStreamCommand extends $Command
  .classBuilder<
    CreateStreamCommandInput,
    CreateStreamCommandOutput,
    KinesisClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Kinesis_20131202", "CreateStream", {})
  .n("KinesisClient", "CreateStreamCommand")
  .f(void 0, void 0)
  .ser(se_CreateStreamCommand)
  .de(de_CreateStreamCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStreamInput;
      output: {};
    };
    sdk: {
      input: CreateStreamCommandInput;
      output: CreateStreamCommandOutput;
    };
  };
}
