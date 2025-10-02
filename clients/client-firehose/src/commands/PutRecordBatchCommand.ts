// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { PutRecordBatchInput, PutRecordBatchOutput } from "../models/models_0";
import { de_PutRecordBatchCommand, se_PutRecordBatchCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutRecordBatchCommand}.
 */
export interface PutRecordBatchCommandInput extends PutRecordBatchInput {}
/**
 * @public
 *
 * The output of {@link PutRecordBatchCommand}.
 */
export interface PutRecordBatchCommandOutput extends PutRecordBatchOutput, __MetadataBearer {}

/**
 * <p>Writes multiple data records into a Firehose stream in a single call, which can
 *          achieve higher throughput per producer than when writing single records. To write single
 *          data records into a Firehose stream, use <a>PutRecord</a>. Applications using
 *          these operations are referred to as producers.</p>
 *          <p>Firehose accumulates and publishes a particular metric for a customer account in one minute intervals. It is possible that the bursts of incoming bytes/records ingested to a Firehose stream last only for a few seconds. Due to this, the actual spikes in the traffic might not be fully visible in the customer's 1 minute CloudWatch metrics.</p>
 *          <p>For information about service quota, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Firehose
 *          Quota</a>.</p>
 *          <p>Each <a>PutRecordBatch</a> request supports up to 500 records. Each record
 *          in the request can be as large as 1,000 KB (before base64 encoding), up to a limit of 4 MB
 *          for the entire request. These limits cannot be changed.</p>
 *          <p>You must specify the name of the Firehose stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000
 *          KB in size, and any kind of data. For example, it could be a segment from a log file,
 *          geographic location data, website clickstream data, and so on.</p>
 *          <p>For multi record de-aggregation, you can not put more than 500 records even if the
 *          data blob length is less than 1000 KiB. If you include more than 500 records, the request
 *          succeeds but the record de-aggregation doesn't work as expected and transformation lambda
 *          is invoked with the complete base64 encoded data blob instead of de-aggregated base64
 *          decoded records.</p>
 *          <p>Firehose buffers records before delivering them to the destination. To
 *          disambiguate the data blobs at the destination, a common solution is to use delimiters in
 *          the data, such as a newline (<code>\n</code>) or some other character unique within the
 *          data. This allows the consumer application to parse individual data items when reading the
 *          data from the destination.</p>
 *          <p>The <a>PutRecordBatch</a> response includes a count of failed records,
 *             <code>FailedPutCount</code>, and an array of responses, <code>RequestResponses</code>.
 *          Even if the <a>PutRecordBatch</a> call succeeds, the value of
 *             <code>FailedPutCount</code> may be greater than 0, indicating that there are records for
 *          which the operation didn't succeed. Each entry in the <code>RequestResponses</code> array
 *          provides additional information about the processed record. It directly correlates with a
 *          record in the request array using the same ordering, from the top to the bottom. The
 *          response array always includes the same number of records as the request array.
 *             <code>RequestResponses</code> includes both successfully and unsuccessfully processed
 *          records. Firehose tries to process all records in each <a>PutRecordBatch</a> request. A single record failure does not stop the processing
 *          of subsequent records. </p>
 *          <p>A successfully processed record includes a <code>RecordId</code> value, which is
 *          unique for the record. An unsuccessfully processed record includes <code>ErrorCode</code>
 *          and <code>ErrorMessage</code> values. <code>ErrorCode</code> reflects the type of error,
 *          and is one of the following values: <code>ServiceUnavailableException</code> or
 *             <code>InternalFailure</code>. <code>ErrorMessage</code> provides more detailed
 *          information about the error.</p>
 *          <p>If there is an internal server error or a timeout, the write might have completed or
 *          it might have failed. If <code>FailedPutCount</code> is greater than 0, retry the request,
 *          resending only those records that might have failed processing. This minimizes the possible
 *          duplicate records and also reduces the total bytes sent (and corresponding charges). We
 *          recommend that you handle any duplicates at the destination.</p>
 *          <p>If <a>PutRecordBatch</a> throws <code>ServiceUnavailableException</code>,
 *          the API is automatically reinvoked (retried) 3 times. If the exception persists, it is
 *          possible that the throughput limits have been exceeded for the Firehose stream.</p>
 *          <p>Re-invoking the Put API operations (for example, PutRecord and PutRecordBatch) can
 *          result in data duplicates. For larger data assets, allow for a longer time out before
 *          retrying Put API operations.</p>
 *          <p>Data records sent to Firehose are stored for 24 hours from the time they
 *          are added to a Firehose stream as it attempts to send the records to the destination. If
 *          the destination is unreachable for more than 24 hours, the data is no longer
 *          available.</p>
 *          <important>
 *             <p>Don't concatenate two or more base64 strings to form the data fields of your records.
 *             Instead, concatenate the raw data, then perform base64 encoding.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, PutRecordBatchCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, PutRecordBatchCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * // import type { FirehoseClientConfig } from "@aws-sdk/client-firehose";
 * const config = {}; // type is FirehoseClientConfig
 * const client = new FirehoseClient(config);
 * const input = { // PutRecordBatchInput
 *   DeliveryStreamName: "STRING_VALUE", // required
 *   Records: [ // PutRecordBatchRequestEntryList // required
 *     { // Record
 *       Data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")       // required
 *     },
 *   ],
 * };
 * const command = new PutRecordBatchCommand(input);
 * const response = await client.send(command);
 * // { // PutRecordBatchOutput
 * //   FailedPutCount: Number("int"), // required
 * //   Encrypted: true || false,
 * //   RequestResponses: [ // PutRecordBatchResponseEntryList // required
 * //     { // PutRecordBatchResponseEntry
 * //       RecordId: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutRecordBatchCommandInput - {@link PutRecordBatchCommandInput}
 * @returns {@link PutRecordBatchCommandOutput}
 * @see {@link PutRecordBatchCommandInput} for command's `input` shape.
 * @see {@link PutRecordBatchCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for FirehoseClient's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter has a value that is not valid.</p>
 *
 * @throws {@link InvalidKMSResourceException} (client fault)
 *  <p>Firehose throws this exception when an attempt to put records or to start
 *          or stop Firehose stream encryption fails. This happens when the KMS service throws one of
 *          the following exception types: <code>AccessDeniedException</code>,
 *             <code>InvalidStateException</code>, <code>DisabledException</code>, or
 *             <code>NotFoundException</code>.</p>
 *
 * @throws {@link InvalidSourceException} (client fault)
 *  <p>Only requests from CloudWatch Logs are supported when CloudWatch Logs decompression is enabled.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unavailable. Back off and retry the operation. If you continue to see
 *          the exception, throughput limits for the Firehose stream may have been exceeded. For more
 *          information about limits and how to request an increase, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Firehose
 *          Limits</a>.</p>
 *
 * @throws {@link FirehoseServiceException}
 * <p>Base exception class for all service exceptions from Firehose service.</p>
 *
 *
 * @public
 */
export class PutRecordBatchCommand extends $Command
  .classBuilder<
    PutRecordBatchCommandInput,
    PutRecordBatchCommandOutput,
    FirehoseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FirehoseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Firehose_20150804", "PutRecordBatch", {})
  .n("FirehoseClient", "PutRecordBatchCommand")
  .f(void 0, void 0)
  .ser(se_PutRecordBatchCommand)
  .de(de_PutRecordBatchCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRecordBatchInput;
      output: PutRecordBatchOutput;
    };
    sdk: {
      input: PutRecordBatchCommandInput;
      output: PutRecordBatchCommandOutput;
    };
  };
}
