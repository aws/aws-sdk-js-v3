// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { CreateStreamInput } from "../models/models_0";
import { CreateStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a Kinesis data stream. A stream captures and transports data records that are continuously emitted from different data sources or *producers*. Scale-out within a stream is explicitly supported by means of shards, which are uniquely identified groups of data records in a stream.
 *
 * You can create your data stream using either on-demand or provisioned capacity mode. Data streams with an on-demand mode require no capacity planning and automatically scale to handle gigabytes of write and read throughput per minute. With the on-demand mode, Kinesis Data Streams automatically manages the shards in order to provide the necessary throughput.
 *
 * If you'd still like to proactively scale your on-demand data stream’s capacity, you can unlock the warm throughput feature for on-demand data streams by enabling `MinimumThroughputBillingCommitment` for your account. Once your account has `MinimumThroughputBillingCommitment` enabled, you can specify the warm throughput in MiB per second that your stream can support in writes.
 *
 * For the data streams with a provisioned mode, you must specify the number of shards for the data stream. Each shard can support reads up to five transactions per second, up to a maximum data read total of 2 MiB per second. Each shard can support writes up to 1,000 records per second, up to a maximum data write total of 1 MiB per second. If the amount of data input increases or decreases, you can add or remove shards.
 *
 * The stream name identifies the stream. The name is scoped to the Amazon Web Services account used by the application. It is also scoped by Amazon Web Services Region. That is, two streams in two different accounts can have the same name, and two streams in the same account, but in two different Regions, can have the same name.
 *
 * `CreateStream` is an asynchronous operation. Upon receiving a `CreateStream` request, Kinesis Data Streams immediately returns and sets the stream status to `CREATING`. After the stream is created, Kinesis Data Streams sets the stream status to `ACTIVE`. You should perform read and write operations only on an `ACTIVE` stream.
 *
 * You receive a `LimitExceededException` when making a `CreateStream` request when you try to do one of the following:
 *
 * - Have more than five streams in the `CREATING` state at any point in time.
 * - Create more shards than are authorized for your account.
 *
 * For the default shard or on-demand throughput limits for an Amazon Web Services account, see [Amazon Kinesis Data Streams Limits](https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html) in the *Amazon Kinesis Data Streams Developer Guide*. To increase this limit, [contact Amazon Web Services Support](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html).
 *
 * You can use DescribeStreamSummary to check the stream status, which is returned in `StreamStatus`.
 *
 * CreateStream has a limit of five transactions per second per account.
 *
 * You can add tags to the stream when making a `CreateStream` request by setting the `Tags` parameter. If you pass the `Tags` parameter, in addition to having the `kinesis:CreateStream` permission, you must also have the `kinesis:AddTagsToStream` permission for the stream that will be created. The `kinesis:TagResource` permission won’t work to tag streams on creation. Tags will take effect from the `CREATING` status of the stream, but you can't make any updates to the tags until the stream is in `ACTIVE` state.
 *
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
 *   WarmThroughputMiBps: Number("int"),
 *   MaxRecordSizeInKiB: Number("int"),
 *   RecordDistributionStrategy: "AUTO" || "USER_PARTITION_KEY",
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
 *
 * A specified parameter exceeds its restrictions, is not supported, or can't be used. For more information, see the returned message.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The resource is not available for this operation. For successful operation, the resource must be in the `ACTIVE` state.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Specifies that you tried to invoke this API for a data stream with the on-demand capacity mode. This API is only supported for data streams with the provisioned capacity mode.
 *
 * @throws {@link KinesisServiceException}
 *
 * Base exception class for all service exceptions from Kinesis service.
 *
 * @public
 */
export class CreateStreamCommand extends command<CreateStreamCommandInput, CreateStreamCommandOutput>(
  _ep1,
  _mw0,
  "CreateStream",
  CreateStream$
) {
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
