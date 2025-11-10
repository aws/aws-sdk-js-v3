// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InternetMonitorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InternetMonitorClient";
import { GetQueryStatusInput, GetQueryStatusOutput } from "../models/models_0";
import { GetQueryStatus } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns the current status of a query for the Amazon CloudWatch Internet Monitor query interface, for a specified query ID and monitor.
 * 			When you run a query, check the status to make sure that the query has <code>SUCCEEDED</code> before you review the results.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>QUEUED</code>: The query is scheduled to run.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RUNNING</code>: The query is in progress but not complete.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SUCCEEDED</code>: The query completed sucessfully.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>FAILED</code>: The query failed due to an error.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CANCELED</code>: The query was canceled.</p>
 *             </li>
 *          </ul>
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
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Invalid request.</p>
 *
 * @throws {@link InternetMonitorServiceException}
 * <p>Base exception class for all service exceptions from InternetMonitor service.</p>
 *
 *
 * @public
 */
export class GetQueryStatusCommand extends $Command
  .classBuilder<
    GetQueryStatusCommandInput,
    GetQueryStatusCommandOutput,
    InternetMonitorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InternetMonitorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("InternetMonitor20210603", "GetQueryStatus", {})
  .n("InternetMonitorClient", "GetQueryStatusCommand")
  .sc(GetQueryStatus)
  .build() {
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
