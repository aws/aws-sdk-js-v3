// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { QueryRequest, QueryResponse } from "../models/models_0";
import { Query$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * `Query` is a synchronous operation that enables you to run a query against your Amazon Timestream data.
 *
 * If you enabled `QueryInsights`, this API also returns insights and metrics related to the query that you executed. `QueryInsights` helps with performance tuning of your query. For more information about `QueryInsights`, see [Using query insights to optimize queries in Amazon Timestream](https://docs.aws.amazon.com/timestream/latest/developerguide/using-query-insights.html).
 *
 * > **Note:** The maximum number of `Query` API requests you're allowed to make with `QueryInsights` enabled is 1 query per second (QPS). If you exceed this query rate, it might result in throttling.
 *
 * `Query` will time out after 60 seconds. You must update the default timeout in the SDK to support a timeout of 60 seconds. See the [code sample](https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.run-query.html) for details.
 *
 * Your query request will fail in the following cases:
 *
 * - If you submit a `Query` request with the same client token outside of the 5-minute idempotency window.
 * - If you submit a `Query` request with the same client token, but change other parameters, within the 5-minute idempotency window.
 * - If the size of the row (including the query metadata) exceeds 1 MB, then the query will fail with the following error message:
 *
 *   `Query aborted as max page response size has been exceeded by the output result row`
 * - If the IAM principal of the query initiator and the result reader are not the same and/or the query initiator and the result reader do not have the same query string in the query requests, the query will fail with an `Invalid pagination token` error.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, QueryCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, QueryCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * // import type { TimestreamQueryClientConfig } from "@aws-sdk/client-timestream-query";
 * const config = {}; // type is TimestreamQueryClientConfig
 * const client = new TimestreamQueryClient(config);
 * const input = { // QueryRequest
 *   QueryString: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxRows: Number("int"),
 *   QueryInsights: { // QueryInsights
 *     Mode: "ENABLED_WITH_RATE_CONTROL" || "DISABLED", // required
 *   },
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
 * //   QueryInsightsResponse: { // QueryInsightsResponse
 * //     QuerySpatialCoverage: { // QuerySpatialCoverage
 * //       Max: { // QuerySpatialCoverageMax
 * //         Value: Number("double"),
 * //         TableArn: "STRING_VALUE",
 * //         PartitionKey: [ // PartitionKeyList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     QueryTemporalRange: { // QueryTemporalRange
 * //       Max: { // QueryTemporalRangeMax
 * //         Value: Number("long"),
 * //         TableArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     QueryTableCount: Number("long"),
 * //     OutputRows: Number("long"),
 * //     OutputBytes: Number("long"),
 * //     UnloadPartitionCount: Number("long"),
 * //     UnloadWrittenRows: Number("long"),
 * //     UnloadWrittenBytes: Number("long"),
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
 *
 * You do not have the necessary permissions to access the account settings.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Unable to poll results for a cancelled query.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred while processing the request.
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * The requested endpoint is invalid.
 *
 * @throws {@link QueryExecutionException} (client fault)
 *
 * Timestream was unable to run the query successfully.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled due to excessive requests.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Invalid or malformed request.
 *
 * @throws {@link TimestreamQueryServiceException}
 *
 * Base exception class for all service exceptions from TimestreamQuery service.
 *
 * @public
 */
export class QueryCommand extends command<QueryCommandInput, QueryCommandOutput>(
  _ep0,
  _mw0,
  "Query",
  Query$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: QueryRequest;
      output: QueryResponse;
    };
    sdk: {
      input: QueryCommandInput;
      output: QueryCommandOutput;
    };
  };
}
