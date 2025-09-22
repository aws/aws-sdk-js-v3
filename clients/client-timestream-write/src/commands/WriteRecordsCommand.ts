// smithy-typescript generated code
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { WriteRecordsRequest, WriteRecordsResponse } from "../models/models_0";
import { WriteRecords } from "../schemas/schemas_1_Table";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link WriteRecordsCommand}.
 */
export interface WriteRecordsCommandInput extends WriteRecordsRequest {}
/**
 * @public
 *
 * The output of {@link WriteRecordsCommand}.
 */
export interface WriteRecordsCommandOutput extends WriteRecordsResponse, __MetadataBearer {}

/**
 * <p>Enables you to write your time-series data into Timestream. You can specify a
 *          single data point or a batch of data points to be inserted into the system. Timestream offers you a flexible schema that auto detects the column names and data
 *          types for your Timestream tables based on the dimension names and data types of
 *          the data points you specify when invoking writes into the database. </p>
 *          <p>Timestream supports eventual consistency read semantics. This means that when
 *          you query data immediately after writing a batch of data into Timestream, the
 *          query results might not reflect the results of a recently completed write operation. The
 *          results may also include some stale data. If you repeat the query request after a short
 *          time, the results should return the latest data. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. </p>
 *          <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.write.html">code sample</a> for
 *          details.</p>
 *          <p>
 *             <b>Upserts</b>
 *          </p>
 *          <p>You can use the <code>Version</code> parameter in a <code>WriteRecords</code> request to
 *          update data points. Timestream tracks a version number with each record.
 *             <code>Version</code> defaults to <code>1</code> when it's not specified for the record
 *          in the request. Timestream updates an existing record’s measure value along with
 *          its <code>Version</code> when it receives a write request with a higher
 *             <code>Version</code> number for that record. When it receives an update request where
 *          the measure value is the same as that of the existing record, Timestream still
 *          updates <code>Version</code>, if it is greater than the existing value of
 *             <code>Version</code>. You can update a data point as many times as desired, as long as
 *          the value of <code>Version</code> continuously increases. </p>
 *          <p> For example, suppose you write a new record without indicating <code>Version</code> in
 *          the request. Timestream stores this record, and set <code>Version</code> to
 *             <code>1</code>. Now, suppose you try to update this record with a
 *             <code>WriteRecords</code> request of the same record with a different measure value but,
 *          like before, do not provide <code>Version</code>. In this case, Timestream will
 *          reject this update with a <code>RejectedRecordsException</code> since the updated record’s
 *          version is not greater than the existing value of Version. </p>
 *          <p>However, if you were to resend the update request with <code>Version</code> set to
 *             <code>2</code>, Timestream would then succeed in updating the record’s value,
 *          and the <code>Version</code> would be set to <code>2</code>. Next, suppose you sent a
 *             <code>WriteRecords</code> request with this same record and an identical measure value,
 *          but with <code>Version</code> set to <code>3</code>. In this case, Timestream
 *          would only update <code>Version</code> to <code>3</code>. Any further updates would need to
 *          send a version number greater than <code>3</code>, or the update requests would receive a
 *             <code>RejectedRecordsException</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, WriteRecordsCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, WriteRecordsCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * // import type { TimestreamWriteClientConfig } from "@aws-sdk/client-timestream-write";
 * const config = {}; // type is TimestreamWriteClientConfig
 * const client = new TimestreamWriteClient(config);
 * const input = { // WriteRecordsRequest
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   CommonAttributes: { // Record
 *     Dimensions: [ // Dimensions
 *       { // Dimension
 *         Name: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *         DimensionValueType: "VARCHAR",
 *       },
 *     ],
 *     MeasureName: "STRING_VALUE",
 *     MeasureValue: "STRING_VALUE",
 *     MeasureValueType: "DOUBLE" || "BIGINT" || "VARCHAR" || "BOOLEAN" || "TIMESTAMP" || "MULTI",
 *     Time: "STRING_VALUE",
 *     TimeUnit: "MILLISECONDS" || "SECONDS" || "MICROSECONDS" || "NANOSECONDS",
 *     Version: Number("long"),
 *     MeasureValues: [ // MeasureValues
 *       { // MeasureValue
 *         Name: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *         Type: "DOUBLE" || "BIGINT" || "VARCHAR" || "BOOLEAN" || "TIMESTAMP" || "MULTI", // required
 *       },
 *     ],
 *   },
 *   Records: [ // Records // required
 *     {
 *       Dimensions: [
 *         {
 *           Name: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *           DimensionValueType: "VARCHAR",
 *         },
 *       ],
 *       MeasureName: "STRING_VALUE",
 *       MeasureValue: "STRING_VALUE",
 *       MeasureValueType: "DOUBLE" || "BIGINT" || "VARCHAR" || "BOOLEAN" || "TIMESTAMP" || "MULTI",
 *       Time: "STRING_VALUE",
 *       TimeUnit: "MILLISECONDS" || "SECONDS" || "MICROSECONDS" || "NANOSECONDS",
 *       Version: Number("long"),
 *       MeasureValues: [
 *         {
 *           Name: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *           Type: "DOUBLE" || "BIGINT" || "VARCHAR" || "BOOLEAN" || "TIMESTAMP" || "MULTI", // required
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new WriteRecordsCommand(input);
 * const response = await client.send(command);
 * // { // WriteRecordsResponse
 * //   RecordsIngested: { // RecordsIngested
 * //     Total: Number("int"),
 * //     MemoryStore: Number("int"),
 * //     MagneticStore: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param WriteRecordsCommandInput - {@link WriteRecordsCommandInput}
 * @returns {@link WriteRecordsCommandOutput}
 * @see {@link WriteRecordsCommandInput} for command's `input` shape.
 * @see {@link WriteRecordsCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for TimestreamWriteClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          Timestream was unable to fully process this request because of an internal server
 *          error.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *  <p>The requested endpoint was not valid.</p>
 *
 * @throws {@link RejectedRecordsException} (client fault)
 *  <p> WriteRecords would throw this exception in the following cases: </p>
 *          <ul>
 *             <li>
 *                <p>Records with duplicate data where there are multiple records with the same
 *                dimensions, timestamps, and measure names but: </p>
 *                <ul>
 *                   <li>
 *                      <p>Measure values are different</p>
 *                   </li>
 *                   <li>
 *                      <p>Version is not present in the request <i>or</i> the value of
 *                      version in the new record is equal to or lower than the existing value</p>
 *                   </li>
 *                </ul>
 *                <p> In this case, if Timestream rejects data, the
 *                   <code>ExistingVersion</code> field in the <code>RejectedRecords</code> response
 *                will indicate the current record’s version. To force an update, you can resend the
 *                request with a version for the record set to a value greater than the
 *                   <code>ExistingVersion</code>.</p>
 *             </li>
 *             <li>
 *                <p> Records with timestamps that lie outside the retention duration of the memory
 *                store. </p>
 *             </li>
 *             <li>
 *                <p> Records with dimensions or measures that exceed the Timestream defined
 *                limits. </p>
 *             </li>
 *          </ul>
 *          <p> For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Quotas</a> in the Amazon Timestream Developer Guide. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent resource. The resource might not be
 *          specified correctly, or its status might not be ACTIVE.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> Too many requests were made by a user and they exceeded the service quotas. The request
 *          was throttled.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> An invalid or malformed request.</p>
 *
 * @throws {@link TimestreamWriteServiceException}
 * <p>Base exception class for all service exceptions from TimestreamWrite service.</p>
 *
 *
 * @public
 */
export class WriteRecordsCommand extends $Command
  .classBuilder<
    WriteRecordsCommandInput,
    WriteRecordsCommandOutput,
    TimestreamWriteClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TimestreamWriteClientResolvedConfig, o: any) {
    return [
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getEndpointDiscoveryPlugin(config, {
        clientStack: cs,
        isDiscoveredEndpointRequired: true,
        options: o,
      }),
    ];
  })
  .s("Timestream_20181101", "WriteRecords", {})
  .n("TimestreamWriteClient", "WriteRecordsCommand")
  .sc(WriteRecords)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: WriteRecordsRequest;
      output: WriteRecordsResponse;
    };
    sdk: {
      input: WriteRecordsCommandInput;
      output: WriteRecordsCommandOutput;
    };
  };
}
