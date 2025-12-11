// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  InternetMonitorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../InternetMonitorClient";
import type { GetQueryResultsInput, GetQueryResultsOutput } from "../models/models_0";
import { GetQueryResults } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQueryResultsCommand}.
 */
export interface GetQueryResultsCommandInput extends GetQueryResultsInput {}
/**
 * @public
 *
 * The output of {@link GetQueryResultsCommand}.
 */
export interface GetQueryResultsCommandOutput extends GetQueryResultsOutput, __MetadataBearer {}

/**
 * <p>Return the data for a query with the Amazon CloudWatch Internet Monitor query interface. Specify the query that you want to return results for by providing
 * 			a <code>QueryId</code> and a monitor name.</p>
 *          <p>For more information about using the query interface, including examples, see
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-view-cw-tools-cwim-query.html">Using the Amazon CloudWatch Internet Monitor query interface</a>
 * 			in the Amazon CloudWatch Internet Monitor User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InternetMonitorClient, GetQueryResultsCommand } from "@aws-sdk/client-internetmonitor"; // ES Modules import
 * // const { InternetMonitorClient, GetQueryResultsCommand } = require("@aws-sdk/client-internetmonitor"); // CommonJS import
 * // import type { InternetMonitorClientConfig } from "@aws-sdk/client-internetmonitor";
 * const config = {}; // type is InternetMonitorClientConfig
 * const client = new InternetMonitorClient(config);
 * const input = { // GetQueryResultsInput
 *   MonitorName: "STRING_VALUE", // required
 *   QueryId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetQueryResultsCommand(input);
 * const response = await client.send(command);
 * // { // GetQueryResultsOutput
 * //   Fields: [ // QueryFields // required
 * //     { // QueryField
 * //       Name: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Data: [ // QueryData // required
 * //     [ // QueryRow
 * //       "STRING_VALUE",
 * //     ],
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetQueryResultsCommandInput - {@link GetQueryResultsCommandInput}
 * @returns {@link GetQueryResultsCommandOutput}
 * @see {@link GetQueryResultsCommandInput} for command's `input` shape.
 * @see {@link GetQueryResultsCommandOutput} for command's `response` shape.
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
export class GetQueryResultsCommand extends $Command
  .classBuilder<
    GetQueryResultsCommandInput,
    GetQueryResultsCommandOutput,
    InternetMonitorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InternetMonitorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("InternetMonitor20210603", "GetQueryResults", {})
  .n("InternetMonitorClient", "GetQueryResultsCommand")
  .sc(GetQueryResults)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueryResultsInput;
      output: GetQueryResultsOutput;
    };
    sdk: {
      input: GetQueryResultsCommandInput;
      output: GetQueryResultsCommandOutput;
    };
  };
}
