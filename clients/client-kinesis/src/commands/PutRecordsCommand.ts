// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { PutRecordsInput, PutRecordsOutput } from "../models/models_0";
import { de_PutRecordsCommand, se_PutRecordsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutRecordsCommand}.
 */
export interface PutRecordsCommandInput extends PutRecordsInput {}
/**
 * @public
 *
 * The output of {@link PutRecordsCommand}.
 */
export interface PutRecordsCommandOutput extends PutRecordsOutput, __MetadataBearer {}

/**
 * <p>Writes multiple data records into a Kinesis data stream in a single call (also
 *             referred to as a <code>PutRecords</code> request). Use this operation to send data into
 *             the stream for data ingestion and processing. </p>
 *          <note>
 *             <p>When invoking this API, you must use either the <code>StreamARN</code> or the
 *                     <code>StreamName</code> parameter, or both. It is recommended that you use the
 *                     <code>StreamARN</code> input parameter when you invoke this API.</p>
 *          </note>
 *          <p>Each <code>PutRecords</code> request can support up to 500 records. Each record in the
 *             request can be as large as 1 MiB, up to a limit of 5 MiB for the entire request,
 *             including partition keys. Each shard can support writes up to 1,000 records per second,
 *             up to a maximum data write total of 1 MiB per second.</p>
 *          <p>You must specify the name of the stream that captures, stores, and transports the
 *             data; and an array of request <code>Records</code>, with each record in the array
 *             requiring a partition key and data blob. The record size limit applies to the total size
 *             of the partition key and data blob.</p>
 *          <p>The data blob can be any type of data; for example, a segment from a log file,
 *             geographic/location data, website clickstream data, and so on.</p>
 *          <p>The partition key is used by Kinesis Data Streams as input to a hash function that
 *             maps the partition key and associated data to a specific shard. An MD5 hash function is
 *             used to map partition keys to 128-bit integer values and to map associated data records
 *             to shards. As a result of this hashing mechanism, all data records with the same
 *             partition key map to the same shard within the stream. For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-add-data-to-stream">Adding Data to a Stream</a> in the <i>Amazon Kinesis Data Streams
 *                 Developer Guide</i>.</p>
 *          <p>Each record in the <code>Records</code> array may include an optional parameter,
 *                 <code>ExplicitHashKey</code>, which overrides the partition key to shard mapping.
 *             This parameter allows a data producer to determine explicitly the shard where the record
 *             is stored. For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-putrecords">Adding Multiple Records with PutRecords</a> in the <i>Amazon Kinesis
 *                 Data Streams Developer Guide</i>.</p>
 *          <p>The <code>PutRecords</code> response includes an array of response
 *                 <code>Records</code>. Each record in the response array directly correlates with a
 *             record in the request array using natural ordering, from the top to the bottom of the
 *             request and response. The response <code>Records</code> array always includes the same
 *             number of records as the request array.</p>
 *          <p>The response <code>Records</code> array includes both successfully and unsuccessfully
 *             processed records. Kinesis Data Streams attempts to process all records in each
 *                 <code>PutRecords</code> request. A single record failure does not stop the
 *             processing of subsequent records. As a result, PutRecords doesn't guarantee the ordering
 *             of records. If you need to read records in the same order they are written to the
 *             stream, use <a>PutRecord</a> instead of <code>PutRecords</code>, and write to
 *             the same shard.</p>
 *          <p>A successfully processed record includes <code>ShardId</code> and
 *                 <code>SequenceNumber</code> values. The <code>ShardId</code> parameter identifies
 *             the shard in the stream where the record is stored. The <code>SequenceNumber</code>
 *             parameter is an identifier assigned to the put record, unique to all records in the
 *             stream.</p>
 *          <p>An unsuccessfully processed record includes <code>ErrorCode</code> and
 *                 <code>ErrorMessage</code> values. <code>ErrorCode</code> reflects the type of error
 *             and can be one of the following values:
 *                 <code>ProvisionedThroughputExceededException</code> or <code>InternalFailure</code>.
 *                 <code>ErrorMessage</code> provides more detailed information about the
 *                 <code>ProvisionedThroughputExceededException</code> exception including the account
 *             ID, stream name, and shard ID of the record that was throttled. For more information
 *             about partially successful responses, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/kinesis-using-sdk-java-add-data-to-stream.html#kinesis-using-sdk-java-putrecords">Adding Multiple Records with PutRecords</a> in the <i>Amazon Kinesis
 *                 Data Streams Developer Guide</i>.</p>
 *          <important>
 *             <p>After you write a record to a stream, you cannot modify that record or its order
 *                 within the stream.</p>
 *          </important>
 *          <p>By default, data records are accessible for 24 hours from the time that they are added
 *             to a stream. You can use <a>IncreaseStreamRetentionPeriod</a> or <a>DecreaseStreamRetentionPeriod</a> to modify this retention period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, PutRecordsCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, PutRecordsCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const input = { // PutRecordsInput
 *   Records: [ // PutRecordsRequestEntryList // required
 *     { // PutRecordsRequestEntry
 *       Data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")       // required
 *       ExplicitHashKey: "STRING_VALUE",
 *       PartitionKey: "STRING_VALUE", // required
 *     },
 *   ],
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new PutRecordsCommand(input);
 * const response = await client.send(command);
 * // { // PutRecordsOutput
 * //   FailedRecordCount: Number("int"),
 * //   Records: [ // PutRecordsResultEntryList // required
 * //     { // PutRecordsResultEntry
 * //       SequenceNumber: "STRING_VALUE",
 * //       ShardId: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   EncryptionType: "NONE" || "KMS",
 * // };
 *
 * ```
 *
 * @param PutRecordsCommandInput - {@link PutRecordsCommandInput}
 * @returns {@link PutRecordsCommandOutput}
 * @see {@link PutRecordsCommandInput} for command's `input` shape.
 * @see {@link PutRecordsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class PutRecordsCommand extends $Command
  .classBuilder<
    PutRecordsCommandInput,
    PutRecordsCommandOutput,
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
  .s("Kinesis_20131202", "PutRecords", {})
  .n("KinesisClient", "PutRecordsCommand")
  .f(void 0, void 0)
  .ser(se_PutRecordsCommand)
  .de(de_PutRecordsCommand)
  .build() {}
