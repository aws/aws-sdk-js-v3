// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAnalysisReportsRequest, ListAnalysisReportsResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { ListAnalysisReports } from "../schemas/schemas_4_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAnalysisReportsCommand}.
 */
export interface ListAnalysisReportsCommandInput extends ListAnalysisReportsRequest {}
/**
 * @public
 *
 * The output of {@link ListAnalysisReportsCommand}.
 */
export interface ListAnalysisReportsCommandOutput extends ListAnalysisReportsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all traffic analysis reports generated within the last 30 days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, ListAnalysisReportsCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, ListAnalysisReportsCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // ListAnalysisReportsRequest
 *   FirewallName: "STRING_VALUE",
 *   FirewallArn: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAnalysisReportsCommand(input);
 * const response = await client.send(command);
 * // { // ListAnalysisReportsResponse
 * //   AnalysisReports: [ // AnalysisReports
 * //     { // AnalysisReport
 * //       AnalysisReportId: "STRING_VALUE",
 * //       AnalysisType: "TLS_SNI" || "HTTP_HOST",
 * //       ReportTime: new Date("TIMESTAMP"),
 * //       Status: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAnalysisReportsCommandInput - {@link ListAnalysisReportsCommandInput}
 * @returns {@link ListAnalysisReportsCommandOutput}
 * @see {@link ListAnalysisReportsCommandInput} for command's `input` shape.
 * @see {@link ListAnalysisReportsCommandOutput} for command's `response` shape.
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
export class ListAnalysisReportsCommand extends $Command
  .classBuilder<
    ListAnalysisReportsCommandInput,
    ListAnalysisReportsCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "ListAnalysisReports", {})
  .n("NetworkFirewallClient", "ListAnalysisReportsCommand")
  .sc(ListAnalysisReports)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAnalysisReportsRequest;
      output: ListAnalysisReportsResponse;
    };
    sdk: {
      input: ListAnalysisReportsCommandInput;
      output: ListAnalysisReportsCommandOutput;
    };
  };
}
