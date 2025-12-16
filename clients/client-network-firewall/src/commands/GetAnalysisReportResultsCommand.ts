// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetAnalysisReportResultsRequest, GetAnalysisReportResultsResponse } from "../models/models_0";
import type {
  NetworkFirewallClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFirewallClient";
import { GetAnalysisReportResults$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAnalysisReportResultsCommand}.
 */
export interface GetAnalysisReportResultsCommandInput extends GetAnalysisReportResultsRequest {}
/**
 * @public
 *
 * The output of {@link GetAnalysisReportResultsCommand}.
 */
export interface GetAnalysisReportResultsCommandOutput extends GetAnalysisReportResultsResponse, __MetadataBearer {}

/**
 * <p>The results of a <code>COMPLETED</code> analysis report generated with <a>StartAnalysisReport</a>.</p>
 *          <p>For more information, see <a>AnalysisTypeReportResult</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, GetAnalysisReportResultsCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, GetAnalysisReportResultsCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // GetAnalysisReportResultsRequest
 *   FirewallName: "STRING_VALUE",
 *   AnalysisReportId: "STRING_VALUE", // required
 *   FirewallArn: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetAnalysisReportResultsCommand(input);
 * const response = await client.send(command);
 * // { // GetAnalysisReportResultsResponse
 * //   Status: "STRING_VALUE",
 * //   StartTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
 * //   ReportTime: new Date("TIMESTAMP"),
 * //   AnalysisType: "TLS_SNI" || "HTTP_HOST",
 * //   NextToken: "STRING_VALUE",
 * //   AnalysisReportResults: [ // AnalysisReportResults
 * //     { // AnalysisTypeReportResult
 * //       Protocol: "STRING_VALUE",
 * //       FirstAccessed: new Date("TIMESTAMP"),
 * //       LastAccessed: new Date("TIMESTAMP"),
 * //       Domain: "STRING_VALUE",
 * //       Hits: { // Hits
 * //         Count: Number("int"),
 * //       },
 * //       UniqueSources: { // UniqueSources
 * //         Count: Number("int"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetAnalysisReportResultsCommandInput - {@link GetAnalysisReportResultsCommandInput}
 * @returns {@link GetAnalysisReportResultsCommandOutput}
 * @see {@link GetAnalysisReportResultsCommandInput} for command's `input` shape.
 * @see {@link GetAnalysisReportResultsCommandOutput} for command's `response` shape.
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
export class GetAnalysisReportResultsCommand extends $Command
  .classBuilder<
    GetAnalysisReportResultsCommandInput,
    GetAnalysisReportResultsCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "GetAnalysisReportResults", {})
  .n("NetworkFirewallClient", "GetAnalysisReportResultsCommand")
  .sc(GetAnalysisReportResults$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAnalysisReportResultsRequest;
      output: GetAnalysisReportResultsResponse;
    };
    sdk: {
      input: GetAnalysisReportResultsCommandInput;
      output: GetAnalysisReportResultsCommandOutput;
    };
  };
}
