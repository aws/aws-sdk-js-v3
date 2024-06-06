// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { PutRecordInput, PutRecordOutput } from "../models/models_0";
import { de_PutRecordCommand, se_PutRecordCommand } from "../protocols/Aws_json1_1";

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
 * <p>Writes a single data record into an Amazon Firehose delivery stream. To
 *          write multiple data records into a delivery stream, use <a>PutRecordBatch</a>.
 *          Applications using these operations are referred to as producers.</p>
 *          <p>By default, each delivery stream can take in up to 2,000 transactions per second,
 *          5,000 records per second, or 5 MB per second. If you use <a>PutRecord</a> and
 *             <a>PutRecordBatch</a>, the limits are an aggregate across these two
 *          operations for each delivery stream. For more information about limits and how to request
 *          an increase, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon
 *             Firehose Limits</a>. </p>
 *          <p>Firehose accumulates and publishes a particular metric for a customer account in one minute intervals. It is possible that the bursts of incoming bytes/records ingested to a delivery stream last only for a few seconds. Due to this, the actual spikes in the traffic might not be fully visible in the customer's 1 minute CloudWatch metrics.</p>
 *          <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000
 *          KiB in size, and any kind of data. For example, it can be a segment from a log file,
 *          geographic location data, website clickstream data, and so on.</p>
 *          <p>Firehose buffers records before delivering them to the destination. To
 *          disambiguate the data blobs at the destination, a common solution is to use delimiters in
 *          the data, such as a newline (<code>\n</code>) or some other character unique within the
 *          data. This allows the consumer application to parse individual data items when reading the
 *          data from the destination.</p>
 *          <p>The <code>PutRecord</code> operation returns a <code>RecordId</code>, which is a
 *          unique string assigned to each record. Producer applications can use this ID for purposes
 *          such as auditability and investigation.</p>
 *          <p>If the <code>PutRecord</code> operation throws a
 *             <code>ServiceUnavailableException</code>, the API is automatically reinvoked (retried) 3
 *          times. If the exception persists, it is possible that the throughput limits have been
 *          exceeded for the delivery stream. </p>
 *          <p>Re-invoking the Put API operations (for example, PutRecord and PutRecordBatch) can
 *          result in data duplicates. For larger data assets, allow for a longer time out before
 *          retrying Put API operations.</p>
 *          <p>Data records sent to Firehose are stored for 24 hours from the time they
 *          are added to a delivery stream as it tries to send the records to the destination. If the
 *          destination is unreachable for more than 24 hours, the data is no longer
 *          available.</p>
 *          <important>
 *             <p>Don't concatenate two or more base64 strings to form the data fields of your records.
 *             Instead, concatenate the raw data, then perform base64 encoding.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, PutRecordCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, PutRecordCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const input = { // PutRecordInput
 *   DeliveryStreamName: "STRING_VALUE", // required
 *   Record: { // Record
 *     Data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")     // required
 *   },
 * };
 * const command = new PutRecordCommand(input);
 * const response = await client.send(command);
 * // { // PutRecordOutput
 * //   RecordId: "STRING_VALUE", // required
 * //   Encrypted: true || false,
 * // };
 *
 * ```
 *
 * @param PutRecordCommandInput - {@link PutRecordCommandInput}
 * @returns {@link PutRecordCommandOutput}
 * @see {@link PutRecordCommandInput} for command's `input` shape.
 * @see {@link PutRecordCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for FirehoseClient's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter has a value that is not valid.</p>
 *
 * @throws {@link InvalidKMSResourceException} (client fault)
 *  <p>Firehose throws this exception when an attempt to put records or to start
 *          or stop delivery stream encryption fails. This happens when the KMS service throws one of
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
 *          the exception, throughput limits for the delivery stream may have been exceeded. For more
 *          information about limits and how to request an increase, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Firehose
 *          Limits</a>.</p>
 *
 * @throws {@link FirehoseServiceException}
 * <p>Base exception class for all service exceptions from Firehose service.</p>
 *
 * @public
 */
export class PutRecordCommand extends $Command
  .classBuilder<
    PutRecordCommandInput,
    PutRecordCommandOutput,
    FirehoseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: FirehoseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Firehose_20150804", "PutRecord", {})
  .n("FirehoseClient", "PutRecordCommand")
  .f(void 0, void 0)
  .ser(se_PutRecordCommand)
  .de(de_PutRecordCommand)
  .build() {}
