// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetQueryStatusInput, GetQueryStatusOutput } from "../models/models_0";
import { GetQueryStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetQueryStatusCommand}.
 */
export interface GetQueryStatusCommandInput extends GetQueryStatusInput {}
/**
 * @public
 *
 * The output of {@link GetQueryStatusCommand}.
 */
export interface GetQueryStatusCommandOutput extends GetQueryStatusOutput, __MetadataBearer {}

/**
 * Returns the current status of a query for the Amazon CloudWatch Internet Monitor query interface, for a specified query ID and monitor. When you run a query, check the status to make sure that the query has `SUCCEEDED` before you review the results.
 *
 * - `QUEUED`: The query is scheduled to run.
 * - `RUNNING`: The query is in progress but not complete.
 * - `SUCCEEDED`: The query completed sucessfully.
 * - `FAILED`: The query failed due to an error.
 * - `CANCELED`: The query was canceled.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InternetMonitorClient, GetQueryStatusCommand } from "@aws-sdk/client-internetmonitor"; // ES Modules import
 * // const { InternetMonitorClient, GetQueryStatusCommand } = require("@aws-sdk/client-internetmonitor"); // CommonJS import
 * // import type { InternetMonitorClientConfig } from "@aws-sdk/client-internetmonitor";
 * const config = {}; // type is InternetMonitorClientConfig
 * const client = new InternetMonitorClient(config);
 * const input = { // GetQueryStatusInput
 *   MonitorName: "STRING_VALUE", // required
 *   QueryId: "STRING_VALUE", // required
 * };
 * const command = new GetQueryStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetQueryStatusOutput
 * //   Status: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetQueryStatusCommandInput - {@link GetQueryStatusCommandInput}
 * @returns {@link GetQueryStatusCommandOutput}
 * @see {@link GetQueryStatusCommandInput} for command's `input` shape.
 * @see {@link GetQueryStatusCommandOutput} for command's `response` shape.
 * @see {@link InternetMonitorClientResolvedConfig | config} for InternetMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error occurred.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request exceeded a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Invalid request.
 *
 * @throws {@link InternetMonitorServiceException}
 *
 * Base exception class for all service exceptions from InternetMonitor service.
 *
 * @public
 */
export class GetQueryStatusCommand extends command<GetQueryStatusCommandInput, GetQueryStatusCommandOutput>(
  _ep0,
  _mw0,
  "GetQueryStatus",
  GetQueryStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueryStatusInput;
      output: GetQueryStatusOutput;
    };
    sdk: {
      input: GetQueryStatusCommandInput;
      output: GetQueryStatusCommandOutput;
    };
  };
}
