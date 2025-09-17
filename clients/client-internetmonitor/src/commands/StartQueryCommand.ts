// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InternetMonitorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InternetMonitorClient";
import { StartQueryInput, StartQueryOutput } from "../models/models_0";
import { de_StartQueryCommand, se_StartQueryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartQueryCommand}.
 */
export interface StartQueryCommandInput extends StartQueryInput {}
/**
 * @public
 *
 * The output of {@link StartQueryCommand}.
 */
export interface StartQueryCommandOutput extends StartQueryOutput, __MetadataBearer {}

/**
 * <p>Start a query to return data for a specific query type for the Amazon CloudWatch Internet Monitor query interface. Specify a time period
 * 			for the data that you want returned by using <code>StartTime</code> and <code>EndTime</code>. You filter the query
 * 			results to return by providing parameters that you specify with <code>FilterParameters</code>.</p>
 *          <p>For more information about using the query interface, including examples, see
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-view-cw-tools-cwim-query.html">Using the Amazon CloudWatch Internet Monitor query interface</a>
 * 		in the Amazon CloudWatch Internet Monitor User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InternetMonitorClient, StartQueryCommand } from "@aws-sdk/client-internetmonitor"; // ES Modules import
 * // const { InternetMonitorClient, StartQueryCommand } = require("@aws-sdk/client-internetmonitor"); // CommonJS import
 * // import type { InternetMonitorClientConfig } from "@aws-sdk/client-internetmonitor";
 * const config = {}; // type is InternetMonitorClientConfig
 * const client = new InternetMonitorClient(config);
 * const input = { // StartQueryInput
 *   MonitorName: "STRING_VALUE", // required
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   QueryType: "STRING_VALUE", // required
 *   FilterParameters: [ // FilterParameters
 *     { // FilterParameter
 *       Field: "STRING_VALUE",
 *       Operator: "STRING_VALUE",
 *       Values: [ // FilterList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   LinkedAccountId: "STRING_VALUE",
 * };
 * const command = new StartQueryCommand(input);
 * const response = await client.send(command);
 * // { // StartQueryOutput
 * //   QueryId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartQueryCommandInput - {@link StartQueryCommandInput}
 * @returns {@link StartQueryCommandOutput}
 * @see {@link StartQueryCommandInput} for command's `input` shape.
 * @see {@link StartQueryCommandOutput} for command's `response` shape.
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
export class StartQueryCommand extends $Command
  .classBuilder<
    StartQueryCommandInput,
    StartQueryCommandOutput,
    InternetMonitorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InternetMonitorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("InternetMonitor20210603", "StartQuery", {})
  .n("InternetMonitorClient", "StartQueryCommand")
  .f(void 0, void 0)
  .ser(se_StartQueryCommand)
  .de(de_StartQueryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartQueryInput;
      output: StartQueryOutput;
    };
    sdk: {
      input: StartQueryCommandInput;
      output: StartQueryCommandOutput;
    };
  };
}
