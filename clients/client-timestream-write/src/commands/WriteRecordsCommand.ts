// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { WriteRecordsRequest, WriteRecordsResponse } from "../models/models_0";
import { WriteRecords$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Enables you to write your time-series data into Timestream. You can specify a single data point or a batch of data points to be inserted into the system. Timestream offers you a flexible schema that auto detects the column names and data types for your Timestream tables based on the dimension names and data types of the data points you specify when invoking writes into the database.
 *
 * Timestream supports eventual consistency read semantics. This means that when you query data immediately after writing a batch of data into Timestream, the query results might not reflect the results of a recently completed write operation. The results may also include some stale data. If you repeat the query request after a short time, the results should return the latest data. [Service quotas apply](https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html).
 *
 * See [code sample](https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.write.html) for details.
 *
 * **Upserts**
 *
 * You can use the `Version` parameter in a `WriteRecords` request to update data points. Timestream tracks a version number with each record. `Version` defaults to `1` when it's not specified for the record in the request. Timestream updates an existing record’s measure value along with its `Version` when it receives a write request with a higher `Version` number for that record. When it receives an update request where the measure value is the same as that of the existing record, Timestream still updates `Version`, if it is greater than the existing value of `Version`. You can update a data point as many times as desired, as long as the value of `Version` continuously increases.
 *
 * For example, suppose you write a new record without indicating `Version` in the request. Timestream stores this record, and set `Version` to `1`. Now, suppose you try to update this record with a `WriteRecords` request of the same record with a different measure value but, like before, do not provide `Version`. In this case, Timestream will reject this update with a `RejectedRecordsException` since the updated record’s version is not greater than the existing value of Version.
 *
 * However, if you were to resend the update request with `Version` set to `2`, Timestream would then succeed in updating the record’s value, and the `Version` would be set to `2`. Next, suppose you sent a `WriteRecords` request with this same record and an identical measure value, but with `Version` set to `3`. In this case, Timestream would only update `Version` to `3`. Any further updates would need to send a version number greater than `3`, or the update requests would receive a `RejectedRecordsException`.
 *
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
 *
 * You are not authorized to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Timestream was unable to fully process this request because of an internal server error.
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * The requested endpoint was not valid.
 *
 * @throws {@link RejectedRecordsException} (client fault)
 *
 * WriteRecords would throw this exception in the following cases:
 *
 * - Records with duplicate data where there are multiple records with the same dimensions, timestamps, and measure names but:
 *
 *   - Measure values are different
 *   - Version is not present in the request *or* the value of version in the new record is equal to or lower than the existing value
 *
 *   In this case, if Timestream rejects data, the `ExistingVersion` field in the `RejectedRecords` response will indicate the current record’s version. To force an update, you can resend the request with a version for the record set to a value greater than the `ExistingVersion`.
 * - Records with timestamps that lie outside the retention duration of the memory store.
 * - Records with dimensions or measures that exceed the Timestream defined limits.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html) in the Amazon Timestream Developer Guide.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access a nonexistent resource. The resource might not be specified correctly, or its status might not be ACTIVE.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Too many requests were made by a user and they exceeded the service quotas. The request was throttled.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An invalid or malformed request.
 *
 * @throws {@link TimestreamWriteServiceException}
 *
 * Base exception class for all service exceptions from TimestreamWrite service.
 *
 * @public
 */
export class WriteRecordsCommand extends command<WriteRecordsCommandInput, WriteRecordsCommandOutput>(
  _ep0,
  _mw0,
  "WriteRecords",
  WriteRecords$
) {
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
