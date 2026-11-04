// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep5, _mw0, command } from "../commandBuilder";
import type { PutRecordsInput, PutRecordsOutput } from "../models/models_0";
import { PutRecords$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Writes multiple data records into a Kinesis data stream in a single call (also referred to as a `PutRecords` request). Use this operation to send data into the stream for data ingestion and processing.
 *
 * > **Note:** When invoking this API, you must use either the `StreamARN` or the `StreamName` parameter, or both. It is recommended that you use the `StreamARN` input parameter when you invoke this API.
 *
 * Each `PutRecords` request can support up to 500 records. Each record in the request can be as large as 10 MiB, up to a limit of 10 MiB for the entire request, including partition keys. Each shard can support writes up to 1,000 records per second, up to a maximum data write total of 1 MB per second.
 *
 * You must specify the name of the stream that captures, stores, and transports the data; and an array of request `Records`, with each record in the array requiring a partition key and data blob. The record size limit applies to the total size of the partition key and data blob.
 *
 * The data blob can be any type of data; for example, a segment from a log file, geographic/location data, website clickstream data, and so on.
 *
 * The partition key is used by Kinesis Data Streams as input to a hash function that maps the partition key and associated data to a specific shard. An MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards. As a result of this hashing mechanism, all data records with the same partition key map to the same shard within the stream. For more information, see [Adding Data to a Stream](https://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-add-data-to-stream) in the *Amazon Kinesis Data Streams Developer Guide*.
 *
 * Each record in the `Records` array may include an optional parameter, `ExplicitHashKey`, which overrides the partition key to shard mapping. This parameter allows a data producer to determine explicitly the shard where the record is stored. For more information, see [Adding Multiple Records with PutRecords](https://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-putrecords) in the *Amazon Kinesis Data Streams Developer Guide*.
 *
 * The `PutRecords` response includes an array of response `Records`. Each record in the response array directly correlates with a record in the request array using natural ordering, from the top to the bottom of the request and response. The response `Records` array always includes the same number of records as the request array.
 *
 * The response `Records` array includes both successfully and unsuccessfully processed records. Kinesis Data Streams attempts to process all records in each `PutRecords` request. A single record failure does not stop the processing of subsequent records. As a result, PutRecords doesn't guarantee the ordering of records. If you need to read records in the same order they are written to the stream, use PutRecord instead of `PutRecords`, and write to the same shard.
 *
 * A successfully processed record includes `ShardId` and `SequenceNumber` values. The `ShardId` parameter identifies the shard in the stream where the record is stored. The `SequenceNumber` parameter is an identifier assigned to the put record, unique to all records in the stream.
 *
 * An unsuccessfully processed record includes `ErrorCode` and `ErrorMessage` values. `ErrorCode` reflects the type of error and can be one of the following values: `ProvisionedThroughputExceededException` or `InternalFailure`. `ErrorMessage` provides more detailed information about the `ProvisionedThroughputExceededException` exception including the account ID, stream name, and shard ID of the record that was throttled. For more information about partially successful responses, see [Adding Multiple Records with PutRecords](https://docs.aws.amazon.com/kinesis/latest/dev/kinesis-using-sdk-java-add-data-to-stream.html#kinesis-using-sdk-java-putrecords) in the *Amazon Kinesis Data Streams Developer Guide*.
 *
 * > **Important:** After you write a record to a stream, you cannot modify that record or its order within the stream.
 *
 * By default, data records are accessible for 24 hours from the time that they are added to a stream. You can use IncreaseStreamRetentionPeriod or DecreaseStreamRetentionPeriod to modify this retention period.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, PutRecordsCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, PutRecordsCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // PutRecordsInput
 *   Records: [ // PutRecordsRequestEntryList // required
 *     { // PutRecordsRequestEntry
 *       Data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")       // required
 *       ExplicitHashKey: "STRING_VALUE",
 *       PartitionKey: "STRING_VALUE",
 *     },
 *   ],
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 *   StreamId: "STRING_VALUE",
 *   DryRun: true || false,
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
export class PutRecordsCommand extends command<PutRecordsCommandInput, PutRecordsCommandOutput>(
  _ep5,
  _mw0,
  "PutRecords",
  PutRecords$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRecordsInput;
      output: PutRecordsOutput;
    };
    sdk: {
      input: PutRecordsCommandInput;
      output: PutRecordsCommandOutput;
    };
  };
}
