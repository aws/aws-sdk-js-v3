// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { GetRecordsInput, GetRecordsOutput } from "../models/models_0";
import { de_GetRecordsCommand, se_GetRecordsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets data records from a Kinesis data stream's shard.</p>
 *          <note>
 *             <p>When invoking this API, you must use either the <code>StreamARN</code> or the
 *                     <code>StreamName</code> parameter, or both. It is recommended that you use the
 *                     <code>StreamARN</code> input parameter when you invoke this API.</p>
 *          </note>
 *          <p>Specify a shard iterator using the <code>ShardIterator</code> parameter. The shard
 *             iterator specifies the position in the shard from which you want to start reading data
 *             records sequentially. If there are no records available in the portion of the shard that
 *             the iterator points to, <a>GetRecords</a> returns an empty list. It might
 *             take multiple calls to get to a portion of the shard that contains records.</p>
 *          <p>You can scale by provisioning multiple shards per stream while considering service
 *             limits (for more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Amazon Kinesis Data Streams
 *                 Limits</a> in the <i>Amazon Kinesis Data Streams Developer
 *                 Guide</i>). Your application should have one thread per shard, each reading
 *             continuously from its stream. To read from a stream continually, call <a>GetRecords</a> in a loop. Use <a>GetShardIterator</a> to get the
 *             shard iterator to specify in the first <a>GetRecords</a> call. <a>GetRecords</a> returns a new shard iterator in
 *                 <code>NextShardIterator</code>. Specify the shard iterator returned in
 *                 <code>NextShardIterator</code> in subsequent calls to <a>GetRecords</a>.
 *             If the shard has been closed, the shard iterator can't return more data and <a>GetRecords</a> returns <code>null</code> in <code>NextShardIterator</code>.
 *             You can terminate the loop when the shard is closed, or when the shard iterator reaches
 *             the record with the sequence number or other attribute that marks it as the last record
 *             to process.</p>
 *          <p>Each data record can be up to 1 MiB in size, and each shard can read up to 2 MiB per
 *             second. You can ensure that your calls don't exceed the maximum supported size or
 *             throughput by using the <code>Limit</code> parameter to specify the maximum number of
 *             records that <a>GetRecords</a> can return. Consider your average record size
 *             when determining this limit. The maximum number of records that can be returned per call
 *             is 10,000.</p>
 *          <p>The size of the data returned by <a>GetRecords</a> varies depending on the
 *             utilization of the shard. It is recommended that consumer applications retrieve records
 *             via the <code>GetRecords</code> command using the 5 TPS limit to remain caught up.
 *             Retrieving records less frequently can lead to consumer applications falling behind. The
 *             maximum size of data that <a>GetRecords</a> can return is 10 MiB. If a call
 *             returns this amount of data, subsequent calls made within the next 5 seconds throw
 *                 <code>ProvisionedThroughputExceededException</code>. If there is insufficient
 *             provisioned throughput on the stream, subsequent calls made within the next 1 second
 *             throw <code>ProvisionedThroughputExceededException</code>. <a>GetRecords</a>
 *             doesn't return any data when it throws an exception. For this reason, we recommend that
 *             you wait 1 second between calls to <a>GetRecords</a>. However, it's possible
 *             that the application will get exceptions for longer than 1 second.</p>
 *          <p>To detect whether the application is falling behind in processing, you can use the
 *                 <code>MillisBehindLatest</code> response attribute. You can also monitor the stream
 *             using CloudWatch metrics and other mechanisms (see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/monitoring.html">Monitoring</a> in the <i>Amazon
 *                 Kinesis Data Streams Developer Guide</i>).</p>
 *          <p>Each Amazon Kinesis record includes a value, <code>ApproximateArrivalTimestamp</code>,
 *             that is set when a stream successfully receives and stores a record. This is commonly
 *             referred to as a server-side time stamp, whereas a client-side time stamp is set when a
 *             data producer creates or sends the record to a stream (a data producer is any data
 *             source putting data records into a stream, for example with <a>PutRecords</a>). The time stamp has millisecond precision. There are no guarantees about the time
 *             stamp accuracy, or that the time stamp is always increasing. For example, records in a
 *             shard or across a stream might have time stamps that are out of order.</p>
 *          <p>This operation has a limit of five transactions per second per shard.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, GetRecordsCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, GetRecordsCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const input = { // GetRecordsInput
 *   ShardIterator: "STRING_VALUE", // required
 *   Limit: Number("int"),
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new GetRecordsCommand(input);
 * const response = await client.send(command);
 * // { // GetRecordsOutput
 * //   Records: [ // RecordList // required
 * //     { // Record
 * //       SequenceNumber: "STRING_VALUE", // required
 * //       ApproximateArrivalTimestamp: new Date("TIMESTAMP"),
 * //       Data: new Uint8Array(), // required
 * //       PartitionKey: "STRING_VALUE", // required
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
 *  <p>Specifies that you do not have the permissions required to perform this
 *             operation.</p>
 *
 * @throws {@link ExpiredIteratorException} (client fault)
 *  <p>The provided iterator exceeds the maximum age allowed.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>The processing of the request failed because of an unknown error, exception, or
 *             failure.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>A specified parameter exceeds its restrictions, is not supported, or can't be used.
 *             For more information, see the returned message.</p>
 *
 * @throws {@link KMSAccessDeniedException} (client fault)
 *  <p>The ciphertext references a key that doesn't exist or that you don't have access
 *             to.</p>
 *
 * @throws {@link KMSDisabledException} (client fault)
 *  <p>The request was rejected because the specified customer master key (CMK) isn't
 *             enabled.</p>
 *
 * @throws {@link KMSInvalidStateException} (client fault)
 *  <p>The request was rejected because the state of the specified resource isn't valid for
 *             this request. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a
 *                 Customer Master Key</a> in the <i>Amazon Web Services Key Management
 *                 Service Developer Guide</i>.</p>
 *
 * @throws {@link KMSNotFoundException} (client fault)
 *  <p>The request was rejected because the specified entity or resource can't be
 *             found.</p>
 *
 * @throws {@link KMSOptInRequired} (client fault)
 *  <p>The Amazon Web Services access key ID needs a subscription for the service.</p>
 *
 * @throws {@link KMSThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. For more information about
 *             throttling, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#requests-per-second">Limits</a> in
 *             the <i>Amazon Web Services Key Management Service Developer
 *             Guide</i>.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The request rate for the stream is too high, or the requested data is too large for
 *             the available throughput. Reduce the frequency or size of your requests. For more
 *             information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Streams Limits</a> in the
 *                 <i>Amazon Kinesis Data Streams Developer Guide</i>, and <a href="https://docs.aws.amazon.com/general/latest/gr/api-retries.html">Error Retries and
 *                 Exponential Backoff in Amazon Web Services</a> in the <i>Amazon Web Services General Reference</i>.</p>
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
export class GetRecordsCommand extends $Command
  .classBuilder<
    GetRecordsCommandInput,
    GetRecordsCommandOutput,
    KinesisClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    OperationType: { type: "staticContextParams", value: `data` },
    StreamARN: { type: "contextParams", name: "StreamARN" },
  })
  .m(function (this: any, Command: any, cs: any, config: KinesisClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Kinesis_20131202", "GetRecords", {})
  .n("KinesisClient", "GetRecordsCommand")
  .f(void 0, void 0)
  .ser(se_GetRecordsCommand)
  .de(de_GetRecordsCommand)
  .build() {
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
