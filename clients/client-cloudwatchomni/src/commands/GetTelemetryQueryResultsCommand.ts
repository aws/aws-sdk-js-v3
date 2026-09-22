// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTelemetryQueryResultsRequest, GetTelemetryQueryResultsResponse } from "../models/models_0";
import { GetTelemetryQueryResults$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTelemetryQueryResultsCommand}.
 */
export interface GetTelemetryQueryResultsCommandInput extends GetTelemetryQueryResultsRequest {}
/**
 * @public
 *
 * The output of {@link GetTelemetryQueryResultsCommand}.
 */
export interface GetTelemetryQueryResultsCommandOutput extends GetTelemetryQueryResultsResponse, __MetadataBearer {}

/**
 * Returns the results for the specified query.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, GetTelemetryQueryResultsCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, GetTelemetryQueryResultsCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // GetTelemetryQueryResultsRequest
 *   queryId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetTelemetryQueryResultsCommand(input);
 * const response = await client.send(command);
 * // { // GetTelemetryQueryResultsResponse
 * //   status: "Running" || "Failed" || "Complete" || "Cancelled", // required
 * //   rows: [ // RowList
 * //     { // Row
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * //   statistics: { // QueryStatistics
 * //     bytesScanned: Number("double"),
 * //     percentComplete: Number("int"),
 * //     recordsScanned: Number("long"),
 * //     recordsMatched: Number("long"),
 * //     partialResults: { // PartialResults
 * //       partialResultsDetected: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTelemetryQueryResultsCommandInput - {@link GetTelemetryQueryResultsCommandInput}
 * @returns {@link GetTelemetryQueryResultsCommandOutput}
 * @see {@link GetTelemetryQueryResultsCommandInput} for command's `input` shape.
 * @see {@link GetTelemetryQueryResultsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to exceeding the allowed request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *  A parameter is specified incorrectly.
 *
 * @throws {@link CloudWatchOmniServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchOmni service.</p>
 *
 *
 * @example Get telemetry query results
 * ```javascript
 * // The following example retrieves a page of results for a completed query, along with execution statistics. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   maxResults: 100,
 *   queryId: "3b2a1c0d-7e6f-4a5b-8c9d-0e1f2a3b4c5d"
 * };
 * const command = new GetTelemetryQueryResultsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   rows: [
 *     {
 *       error_count: "42",
 *       service.name: "checkout-service"
 *     },
 *     {
 *       error_count: "7",
 *       service.name: "payments-service"
 *     }
 *   ],
 *   statistics: {
 *     bytesScanned: 1048576.0,
 *     partialResults: {
 *       partialResultsDetected: false
 *     },
 *     percentComplete: 100,
 *     recordsMatched: 49,
 *     recordsScanned: 20000
 *   },
 *   status: "Complete"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetTelemetryQueryResultsCommand extends command<GetTelemetryQueryResultsCommandInput, GetTelemetryQueryResultsCommandOutput>(
  _ep0,
  _mw0,
  "GetTelemetryQueryResults",
  GetTelemetryQueryResults$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTelemetryQueryResultsRequest;
      output: GetTelemetryQueryResultsResponse;
    };
    sdk: {
      input: GetTelemetryQueryResultsCommandInput;
      output: GetTelemetryQueryResultsCommandOutput;
    };
  };
}
