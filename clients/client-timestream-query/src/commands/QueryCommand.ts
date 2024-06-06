// smithy-typescript generated code
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { QueryRequest, QueryRequestFilterSensitiveLog, QueryResponse } from "../models/models_0";
import { de_QueryCommand, se_QueryCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamQueryClientResolvedConfig } from "../TimestreamQueryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link QueryCommand}.
 */
export interface QueryCommandInput extends QueryRequest {}
/**
 * @public
 *
 * The output of {@link QueryCommand}.
 */
export interface QueryCommandOutput extends QueryResponse, __MetadataBearer {}

/**
 * <p>
 *             <code>Query</code> is a synchronous operation that enables you to run a query against
 *             your Amazon Timestream data. <code>Query</code> will time out after 60 seconds.
 *             You must update the default timeout in the SDK to support a timeout of 60 seconds. See
 *             the <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.run-query.html">code
 *                 sample</a> for details. </p>
 *          <p>Your query request will fail in the following cases:</p>
 *          <ul>
 *             <li>
 *                <p> If you submit a <code>Query</code> request with the same client token outside
 *                     of the 5-minute idempotency window. </p>
 *             </li>
 *             <li>
 *                <p> If you submit a <code>Query</code> request with the same client token, but
 *                     change other parameters, within the 5-minute idempotency window. </p>
 *             </li>
 *             <li>
 *                <p> If the size of the row (including the query metadata) exceeds 1 MB, then the
 *                     query will fail with the following error message: </p>
 *                <p>
 *                   <code>Query aborted as max page response size has been exceeded by the output
 *                         result row</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p> If the IAM principal of the query initiator and the result reader are not the
 *                     same and/or the query initiator and the result reader do not have the same query
 *                     string in the query requests, the query will fail with an <code>Invalid
 *                         pagination token</code> error. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, QueryCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, QueryCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * const client = new TimestreamQueryClient(config);
 * const input = { // QueryRequest
 *   QueryString: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxRows: Number("int"),
 * };
 * const command = new QueryCommand(input);
 * const response = await client.send(command);
 * // { // QueryResponse
 * //   QueryId: "STRING_VALUE", // required
 * //   NextToken: "STRING_VALUE",
 * //   Rows: [ // RowList // required
 * //     { // Row
 * //       Data: [ // DatumList // required
 * //         { // Datum
 * //           ScalarValue: "STRING_VALUE",
 * //           TimeSeriesValue: [ // TimeSeriesDataPointList
 * //             { // TimeSeriesDataPoint
 * //               Time: "STRING_VALUE", // required
 * //               Value: {
 * //                 ScalarValue: "STRING_VALUE",
 * //                 TimeSeriesValue: [
 * //                   {
 * //                     Time: "STRING_VALUE", // required
 * //                     Value: "<Datum>", // required
 * //                   },
 * //                 ],
 * //                 ArrayValue: [
 * //                   "<Datum>",
 * //                 ],
 * //                 RowValue: {
 * //                   Data: "<DatumList>", // required
 * //                 },
 * //                 NullValue: true || false,
 * //               },
 * //             },
 * //           ],
 * //           ArrayValue: "<DatumList>",
 * //           RowValue: "<Row>",
 * //           NullValue: true || false,
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   ColumnInfo: [ // ColumnInfoList // required
 * //     { // ColumnInfo
 * //       Name: "STRING_VALUE",
 * //       Type: { // Type
 * //         ScalarType: "VARCHAR" || "BOOLEAN" || "BIGINT" || "DOUBLE" || "TIMESTAMP" || "DATE" || "TIME" || "INTERVAL_DAY_TO_SECOND" || "INTERVAL_YEAR_TO_MONTH" || "UNKNOWN" || "INTEGER",
 * //         ArrayColumnInfo: {
 * //           Name: "STRING_VALUE",
 * //           Type: {
 * //             ScalarType: "VARCHAR" || "BOOLEAN" || "BIGINT" || "DOUBLE" || "TIMESTAMP" || "DATE" || "TIME" || "INTERVAL_DAY_TO_SECOND" || "INTERVAL_YEAR_TO_MONTH" || "UNKNOWN" || "INTEGER",
 * //             ArrayColumnInfo: "<ColumnInfo>",
 * //             TimeSeriesMeasureValueColumnInfo: "<ColumnInfo>",
 * //             RowColumnInfo: [
 * //               "<ColumnInfo>",
 * //             ],
 * //           },
 * //         },
 * //         TimeSeriesMeasureValueColumnInfo: "<ColumnInfo>",
 * //         RowColumnInfo: "<ColumnInfoList>",
 * //       },
 * //     },
 * //   ],
 * //   QueryStatus: { // QueryStatus
 * //     ProgressPercentage: Number("double"),
 * //     CumulativeBytesScanned: Number("long"),
 * //     CumulativeBytesMetered: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param QueryCommandInput - {@link QueryCommandInput}
 * @returns {@link QueryCommandOutput}
 * @see {@link QueryCommandInput} for command's `input` shape.
 * @see {@link QueryCommandOutput} for command's `response` shape.
 * @see {@link TimestreamQueryClientResolvedConfig | config} for TimestreamQueryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You are not authorized to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> Unable to poll results for a cancelled query. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *             The service was unable to fully process this request because of an internal
 *             server error. </p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *  <p>The requested endpoint was not valid.</p>
 *
 * @throws {@link QueryExecutionException} (client fault)
 *  <p>
 *             Timestream was unable to run the query successfully. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Invalid or malformed request. </p>
 *
 * @throws {@link TimestreamQueryServiceException}
 * <p>Base exception class for all service exceptions from TimestreamQuery service.</p>
 *
 * @public
 */
export class QueryCommand extends $Command
  .classBuilder<
    QueryCommandInput,
    QueryCommandOutput,
    TimestreamQueryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: TimestreamQueryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getEndpointDiscoveryPlugin(config, { clientStack: cs, isDiscoveredEndpointRequired: true, options: o }),
    ];
  })
  .s("Timestream_20181101", "Query", {})
  .n("TimestreamQueryClient", "QueryCommand")
  .f(QueryRequestFilterSensitiveLog, void 0)
  .ser(se_QueryCommand)
  .de(de_QueryCommand)
  .build() {}
