// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopQueryInput, StopQueryOutput } from "../models/models_0";
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
export interface StopQueryCommandInput extends StopQueryInput {}
/**
 * @public
 *
 * The output of {@link StopQueryCommand}.
 */
export interface StopQueryCommandOutput extends StopQueryOutput, __MetadataBearer {}

/**
 * Stop a query that is progress for a specific monitor.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InternetMonitorClient, StopQueryCommand } from "@aws-sdk/client-internetmonitor"; // ES Modules import
 * // const { InternetMonitorClient, StopQueryCommand } = require("@aws-sdk/client-internetmonitor"); // CommonJS import
 * // import type { InternetMonitorClientConfig } from "@aws-sdk/client-internetmonitor";
 * const config = {}; // type is InternetMonitorClientConfig
 * const client = new InternetMonitorClient(config);
 * const input = { // StopQueryInput
 *   MonitorName: "STRING_VALUE", // required
 *   QueryId: "STRING_VALUE", // required
 * };
 * const command = new StopQueryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopQueryCommandInput - {@link StopQueryCommandInput}
 * @returns {@link StopQueryCommandOutput}
 * @see {@link StopQueryCommandInput} for command's `input` shape.
 * @see {@link StopQueryCommandOutput} for command's `response` shape.
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
export class StopQueryCommand extends command<StopQueryCommandInput, StopQueryCommandOutput>(
  _ep0,
  _mw0,
  "StopQuery",
  StopQuery$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopQueryInput;
      output: {};
    };
    sdk: {
      input: StopQueryCommandInput;
      output: StopQueryCommandOutput;
    };
  };
}
