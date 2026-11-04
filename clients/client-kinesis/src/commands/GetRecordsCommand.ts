// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep5, _mw0, command } from "../commandBuilder";
import type { GetRecordsInput, GetRecordsOutput } from "../models/models_0";
import { GetRecords$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRecordsCommand}.
 */
export interface GetRecordsCommandInput extends GetRecordsInput {}
/**
 * @public
 *
 * The output of {@link GetRecordsCommand}.
 */
export interface GetRecordsCommandOutput extends GetRecordsOutput, __MetadataBearer {}

/**
 * Gets data records from a Kinesis data stream's shard.
 *
 * > **Note:** When invoking this API, you must use either the `StreamARN` or the `StreamName` parameter, or both. It is recommended that you use the `StreamARN` input parameter when you invoke this API.
 *
 * Specify a shard iterator using the `ShardIterator` parameter. The shard iterator specifies the position in the shard from which you want to start reading data records sequentially. If there are no records available in the portion of the shard that the iterator points to, GetRecords returns an empty list. It might take multiple calls to get to a portion of the shard that contains records.
 *
 * You can scale by provisioning multiple shards per stream while considering service limits (for more information, see [Amazon Kinesis Data Streams Limits](https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html) in the *Amazon Kinesis Data Streams Developer Guide*). Your application should have one thread per shard, each reading continuously from its stream. To read from a stream continually, call GetRecords in a loop. Use GetShardIterator to get the shard iterator to specify in the first GetRecords call. GetRecords returns a new shard iterator in `NextShardIterator`. Specify the shard iterator returned in `NextShardIterator` in subsequent calls to GetRecords. If the shard has been closed, the shard iterator can't return more data and GetRecords returns `null` in `NextShardIterator`. You can terminate the loop when the shard is closed, or when the shard iterator reaches the record with the sequence number or other attribute that marks it as the last record to process.
 *
 * Each data record can be up to 1 MiB in size by default. Amazon Kinesis Data Streams supports large records up to 10 MiB in size, but the average throughput for your stream cannot exceed 1 MiB per second. For more information about how large records are handled, see [Large records](https://docs.aws.amazon.com/streams/latest/dev/large-records.html). Each shard can read up to 2 MiB per second. You can ensure that your calls don't exceed the maximum supported size or throughput by using the `Limit` parameter to specify the maximum number of records that GetRecords can return. Consider your average record size when determining this limit. The maximum number of records that can be returned per call is 10,000.
 *
 * The size of the data returned by GetRecords varies depending on the utilization of the shard. It is recommended that consumer applications retrieve records via the `GetRecords` command using the 5 TPS limit to remain caught up. Retrieving records less frequently can lead to consumer applications falling behind. The maximum size of data that GetRecords can return is 10 MiB. If a call returns this amount of data, subsequent calls made within the next 5 seconds throw `ProvisionedThroughputExceededException`. If there is insufficient provisioned throughput on the stream, subsequent calls made within the next 1 second throw `ProvisionedThroughputExceededException`. GetRecords doesn't return any data when it throws an exception. For this reason, we recommend that you wait 1 second between calls to GetRecords. However, it's possible that the application will get exceptions for longer than 1 second.
 *
 * To detect whether the application is falling behind in processing, you can use the `MillisBehindLatest` response attribute. You can also monitor the stream using CloudWatch metrics and other mechanisms (see [Monitoring](https://docs.aws.amazon.com/kinesis/latest/dev/monitoring.html) in the *Amazon Kinesis Data Streams Developer Guide*).
 *
 * Each Amazon Kinesis record includes a value, `ApproximateArrivalTimestamp`, that is set when a stream successfully receives and stores a record. This is commonly referred to as a server-side time stamp, whereas a client-side time stamp is set when a data producer creates or sends the record to a stream (a data producer is any data source putting data records into a stream, for example with PutRecords). The time stamp has millisecond precision. There are no guarantees about the time stamp accuracy, or that the time stamp is always increasing. For example, records in a shard or across a stream might have time stamps that are out of order.
 *
 * This operation has a limit of five transactions per second per shard.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, GetRecordsCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, GetRecordsCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // GetRecordsInput
 *   ShardIterator: "STRING_VALUE", // required
 *   Limit: Number("int"),
 *   StreamARN: "STRING_VALUE",
 *   StreamId: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new GetRecordsCommand(input);
 * const response = await client.send(command);
 * // { // GetRecordsOutput
 * //   Records: [ // RecordList // required
 * //     { // Record
 * //       SequenceNumber: "STRING_VALUE", // required
 * //       ApproximateArrivalTimestamp: new Date("TIMESTAMP"),
 * //       Data: new Uint8Array(), // required
 * //       PartitionKey: "STRING_VALUE",
 * //       EncryptionType: "NONE" || "KMS",
 * //     },
 * //   ],
 * //   NextShardIterator: "STRING_VALUE",
 * //   MillisBehindLatest: Number("long"),
 * //   ChildShards: [ // ChildShardList
 * //     { // ChildShard
 * //       ShardId: "STRING_VALUE", // required
 * //       ParentShards: [ // ShardIdList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       HashKeyRange: { // HashKeyRange
 * //         StartingHashKey: "STRING_VALUE", // required
 * //         EndingHashKey: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetRecordsCommandInput - {@link GetRecordsCommandInput}
 * @returns {@link GetRecordsCommandOutput}
 * @see {@link GetRecordsCommandInput} for command's `input` shape.
 * @see {@link GetRecordsCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Specifies that you do not have the permissions required to perform this operation.
 *
 * @throws {@link DryRunOperationException} (client fault)
 *
 * The request was rejected because the DryRun parameter was specified.
 *
 * @throws {@link ExpiredIteratorException} (client fault)
 *
 * The provided iterator exceeds the maximum age allowed.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * The processing of the request failed because of an unknown error, exception, or failure.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * A specified parameter exceeds its restrictions, is not supported, or can't be used. For more information, see the returned message.
 *
 * @throws {@link KMSAccessDeniedException} (client fault)
 *
 * The ciphertext references a key that doesn't exist or that you don't have access to.
 *
 * @throws {@link KMSDisabledException} (client fault)
 *
 * The request was rejected because the specified customer master key (CMK) isn't enabled.
 *
 * @throws {@link KMSInvalidStateException} (client fault)
 *
 * The request was rejected because the state of the specified resource isn't valid for this request. For more information, see [How Key State Affects Use of a Customer Master Key](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Amazon Web Services Key Management Service Developer Guide*.
 *
 * @throws {@link KMSNotFoundException} (client fault)
 *
 * The request was rejected because the specified entity or resource can't be found.
 *
 * @throws {@link KMSOptInRequired} (client fault)
 *
 * The Amazon Web Services access key ID needs a subscription for the service.
 *
 * @throws {@link KMSThrottlingException} (client fault)
 *
 * The request was denied due to request throttling. For more information about throttling, see [Limits](https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#requests-per-second) in the *Amazon Web Services Key Management Service Developer Guide*.
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *
 * The request rate for the stream is too high, or the requested data is too large for the available throughput. Reduce the frequency or size of your requests. For more information, see [Streams Limits](https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html) in the *Amazon Kinesis Data Streams Developer Guide*, and [Error Retries and Exponential Backoff in Amazon Web Services](https://docs.aws.amazon.com/general/latest/gr/api-retries.html) in the *Amazon Web Services General Reference*.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource could not be found. The stream might not be specified correctly.
 *
 * @throws {@link KinesisServiceException}
 *
 * Base exception class for all service exceptions from Kinesis service.
 *
 * @public
 */
export class GetRecordsCommand extends command<GetRecordsCommandInput, GetRecordsCommandOutput>(
  _ep5,
  _mw0,
  "GetRecords",
  GetRecords$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRecordsInput;
      output: GetRecordsOutput;
    };
    sdk: {
      input: GetRecordsCommandInput;
      output: GetRecordsCommandOutput;
    };
  };
}
