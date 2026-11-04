// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep5, _mw0, command } from "../commandBuilder";
import type { PutRecordInput, PutRecordOutput } from "../models/models_0";
import { PutRecord$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Writes a single data record into an Amazon Kinesis data stream. Call `PutRecord` to send data into the stream for real-time ingestion and subsequent processing, one record at a time. Each shard can support writes up to 1,000 records per second, up to a maximum data write total of 10 MiB per second.
 *
 * > **Note:** When invoking this API, you must use either the `StreamARN` or the `StreamName` parameter, or both. It is recommended that you use the `StreamARN` input parameter when you invoke this API.
 *
 * You must specify the name of the stream that captures, stores, and transports the data; a partition key; and the data blob itself.
 *
 * The data blob can be any type of data; for example, a segment from a log file, geographic/location data, website clickstream data, and so on.
 *
 * The partition key is used by Kinesis Data Streams to distribute data across shards. Kinesis Data Streams segregates the data records that belong to a stream into multiple shards, using the partition key associated with each data record to determine the shard to which a given data record belongs.
 *
 * Partition keys are Unicode strings, with a maximum length limit of 256 characters for each key. An MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards using the hash key ranges of the shards. You can override hashing the partition key to determine the shard by explicitly specifying a hash value using the `ExplicitHashKey` parameter. For more information, see [Adding Data to a Stream](https://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-add-data-to-stream) in the *Amazon Kinesis Data Streams Developer Guide*.
 *
 * `PutRecord` returns the shard ID of where the data record was placed and the sequence number that was assigned to the data record.
 *
 * Sequence numbers increase over time and are specific to a shard within a stream, not across all shards within a stream. To guarantee strictly increasing ordering, write serially to a shard and use the `SequenceNumberForOrdering` parameter. For more information, see [Adding Data to a Stream](https://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-add-data-to-stream) in the *Amazon Kinesis Data Streams Developer Guide*.
 *
 * > **Important:** After you write a record to a stream, you cannot modify that record or its order within the stream.
 *
 * If a `PutRecord` request cannot be processed because of insufficient provisioned throughput on the shard involved in the request, `PutRecord` throws `ProvisionedThroughputExceededException`.
 *
 * By default, data records are accessible for 24 hours from the time that they are added to a stream. You can use IncreaseStreamRetentionPeriod or DecreaseStreamRetentionPeriod to modify this retention period.
 *
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
 *   PartitionKey: "STRING_VALUE",
 *   ExplicitHashKey: "STRING_VALUE",
 *   SequenceNumberForOrdering: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 *   StreamId: "STRING_VALUE",
 *   DryRun: true || false,
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
 *
 * Specifies that you do not have the permissions required to perform this operation.
 *
 * @throws {@link DryRunOperationException} (client fault)
 *
 * The request was rejected because the DryRun parameter was specified.
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
export class PutRecordCommand extends command<PutRecordCommandInput, PutRecordCommandOutput>(
  _ep5,
  _mw0,
  "PutRecord",
  PutRecord$
) {
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
