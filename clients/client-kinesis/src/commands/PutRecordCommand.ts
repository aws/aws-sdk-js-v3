// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import type { PutRecordInput, PutRecordOutput } from "../models/models_0";
import { PutRecord } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutRecordCommand}.
 */
export interface PutRecordCommandInput extends PutRecordInput {}
/**
 * @public
 *
 * The output of {@link PutRecordCommand}.
 */
export interface PutRecordCommandOutput extends PutRecordOutput, __MetadataBearer {}

/**
 * <p>Writes a single data record into an Amazon Kinesis data stream. Call
 *                 <code>PutRecord</code> to send data into the stream for real-time ingestion and
 *             subsequent processing, one record at a time. Each shard can support writes up to 1,000
 *             records per second, up to a maximum data write total of 10 MiB per second.</p>
 *          <note>
 *             <p>When invoking this API, you must use either the <code>StreamARN</code> or the
 *                     <code>StreamName</code> parameter, or both. It is recommended that you use the
 *                     <code>StreamARN</code> input parameter when you invoke this API.</p>
 *          </note>
 *          <p>You must specify the name of the stream that captures, stores, and transports the
 *             data; a partition key; and the data blob itself.</p>
 *          <p>The data blob can be any type of data; for example, a segment from a log file,
 *             geographic/location data, website clickstream data, and so on.</p>
 *          <p>The partition key is used by Kinesis Data Streams to distribute data across shards.
 *             Kinesis Data Streams segregates the data records that belong to a stream into multiple
 *             shards, using the partition key associated with each data record to determine the shard
 *             to which a given data record belongs.</p>
 *          <p>Partition keys are Unicode strings, with a maximum length limit of 256 characters for
 *             each key. An MD5 hash function is used to map partition keys to 128-bit integer values
 *             and to map associated data records to shards using the hash key ranges of the shards.
 *             You can override hashing the partition key to determine the shard by explicitly
 *             specifying a hash value using the <code>ExplicitHashKey</code> parameter. For more
 *             information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-add-data-to-stream">Adding Data to a Stream</a> in the <i>Amazon Kinesis Data Streams
 *                 Developer Guide</i>.</p>
 *          <p>
 *             <code>PutRecord</code> returns the shard ID of where the data record was placed and the
 *             sequence number that was assigned to the data record.</p>
 *          <p>Sequence numbers increase over time and are specific to a shard within a stream, not
 *             across all shards within a stream. To guarantee strictly increasing ordering, write
 *             serially to a shard and use the <code>SequenceNumberForOrdering</code> parameter. For
 *             more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-add-data-to-stream">Adding Data to a Stream</a> in the <i>Amazon Kinesis Data Streams
 *                 Developer Guide</i>.</p>
 *          <important>
 *             <p>After you write a record to a stream, you cannot modify that record or its order
 *                 within the stream.</p>
 *          </important>
 *          <p>If a <code>PutRecord</code> request cannot be processed because of insufficient
 *             provisioned throughput on the shard involved in the request, <code>PutRecord</code>
 *             throws <code>ProvisionedThroughputExceededException</code>. </p>
 *          <p>By default, data records are accessible for 24 hours from the time that they are added
 *             to a stream. You can use <a>IncreaseStreamRetentionPeriod</a> or <a>DecreaseStreamRetentionPeriod</a> to modify this retention period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, PutRecordCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, PutRecordCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // PutRecordInput
 *   StreamName: "STRING_VALUE",
 *   Data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   PartitionKey: "STRING_VALUE", // required
 *   ExplicitHashKey: "STRING_VALUE",
 *   SequenceNumberForOrdering: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new PutRecordCommand(input);
 * const response = await client.send(command);
 * // { // PutRecordOutput
 * //   ShardId: "STRING_VALUE", // required
 * //   SequenceNumber: "STRING_VALUE", // required
 * //   EncryptionType: "NONE" || "KMS",
 * // };
 *
 * ```
 *
 * @param PutRecordCommandInput - {@link PutRecordCommandInput}
 * @returns {@link PutRecordCommandOutput}
 * @see {@link PutRecordCommandInput} for command's `input` shape.
 * @see {@link PutRecordCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Specifies that you do not have the permissions required to perform this
 *             operation.</p>
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
export class PutRecordCommand extends $Command
  .classBuilder<
    PutRecordCommandInput,
    PutRecordCommandOutput,
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Kinesis_20131202", "PutRecord", {})
  .n("KinesisClient", "PutRecordCommand")
  .sc(PutRecord)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRecordInput;
      output: PutRecordOutput;
    };
    sdk: {
      input: PutRecordCommandInput;
      output: PutRecordCommandOutput;
    };
  };
}
