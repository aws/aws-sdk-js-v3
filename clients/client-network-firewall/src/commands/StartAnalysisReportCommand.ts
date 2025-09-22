// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartAnalysisReportRequest, StartAnalysisReportResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { StartAnalysisReport } from "../schemas/schemas_16_Analysis";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartAnalysisReportCommand}.
 */
export interface StartAnalysisReportCommandInput extends StartAnalysisReportRequest {}
/**
 * @public
 *
 * The output of {@link StartAnalysisReportCommand}.
 */
export interface StartAnalysisReportCommandOutput extends StartAnalysisReportResponse, __MetadataBearer {}

/**
 * <p>Generates a traffic analysis report for the timeframe and traffic type you specify.</p>
 *          <p>For information on the contents of a traffic analysis report, see <a>AnalysisReport</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, StartAnalysisReportCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, StartAnalysisReportCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // StartAnalysisReportRequest
 *   FirewallName: "STRING_VALUE",
 *   FirewallArn: "STRING_VALUE",
 *   AnalysisType: "TLS_SNI" || "HTTP_HOST", // required
 * };
 * const command = new StartAnalysisReportCommand(input);
 * const response = await client.send(command);
 * // { // StartAnalysisReportResponse
 * //   AnalysisReportId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartAnalysisReportCommandInput - {@link StartAnalysisReportCommandInput}
 * @returns {@link StartAnalysisReportCommandOutput}
 * @see {@link StartAnalysisReportCommandInput} for command's `input` shape.
 * @see {@link StartAnalysisReportCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Your request is valid, but Network Firewall couldn't perform the operation because of a
 *          system problem. Retry your request. </p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The operation failed because of a problem with your request. Examples include: </p>
 *          <ul>
 *             <li>
 *                <p>You specified an unsupported parameter name or value.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a property with a value that isn't among the available
 *                types.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                that isn't valid in the context of the request.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Unable to locate a resource using the parameters that you provided.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Unable to process the request due to throttling limitations.</p>
 *
 * @throws {@link NetworkFirewallServiceException}
 * <p>Base exception class for all service exceptions from NetworkFirewall service.</p>
 *
 *
 * @public
 */
export class StartAnalysisReportCommand extends $Command
  .classBuilder<
    StartAnalysisReportCommandInput,
    StartAnalysisReportCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "StartAnalysisReport", {})
  .n("NetworkFirewallClient", "StartAnalysisReportCommand")
  .sc(StartAnalysisReport)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAnalysisReportRequest;
      output: StartAnalysisReportResponse;
    };
    sdk: {
      input: StartAnalysisReportCommandInput;
      output: StartAnalysisReportCommandOutput;
    };
  };
}
