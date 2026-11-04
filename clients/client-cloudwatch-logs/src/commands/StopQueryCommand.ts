// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopQueryRequest, StopQueryResponse } from "../models/models_0";
import { StopQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopQueryCommand}.
 */
export interface StopQueryCommandInput extends StopQueryRequest {}
/**
 * @public
 *
 * The output of {@link StopQueryCommand}.
 */
export interface StopQueryCommandOutput extends StopQueryResponse, __MetadataBearer {}

/**
 * Stops a CloudWatch Logs Insights query that is in progress. If the query has already ended, the operation returns an error indicating that the specified query is not running.
 *
 * This operation can be used to cancel both interactive queries and individual scheduled query executions. When used with scheduled queries, `StopQuery` cancels only the specific execution identified by the query ID, not the scheduled query configuration itself.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, StopQueryCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, StopQueryCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // StopQueryRequest
 *   queryId: "STRING_VALUE", // required
 * };
 * const command = new StopQueryCommand(input);
 * const response = await client.send(command);
 * // { // StopQueryResponse
 * //   success: true || false,
 * // };
 *
 * ```
 *
 * @param StopQueryCommandInput - {@link StopQueryCommandInput}
 * @returns {@link StopQueryCommandOutput}
 * @see {@link StopQueryCommandInput} for command's `input` shape.
 * @see {@link StopQueryCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * A parameter is specified incorrectly.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service cannot complete the request.
 *
 * @throws {@link CloudWatchLogsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchLogs service.
 *
 * @public
 */
export class StopQueryCommand extends command<StopQueryCommandInput, StopQueryCommandOutput>(
  _ep0,
  _mw0,
  "StopQuery",
  StopQuery$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopQueryRequest;
      output: StopQueryResponse;
    };
    sdk: {
      input: StopQueryCommandInput;
      output: StopQueryCommandOutput;
    };
  };
}
