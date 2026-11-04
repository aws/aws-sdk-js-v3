// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAnalysisReportResultsRequest, GetAnalysisReportResultsResponse } from "../models/models_0";
import { GetAnalysisReportResults$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * The results of a `COMPLETED` analysis report generated with StartAnalysisReport.
 *
 * For more information, see AnalysisTypeReportResult.
 *
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
 *
 * Your request is valid, but Network Firewall couldn't perform the operation because of a system problem. Retry your request.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The operation failed because of a problem with your request. Examples include:
 *
 * - You specified an unsupported parameter name or value.
 * - You tried to update a property with a value that isn't among the available types.
 * - Your request references an ARN that is malformed, or corresponds to a resource that isn't valid in the context of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Unable to locate a resource using the parameters that you provided.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Unable to process the request due to throttling limitations.
 *
 * @throws {@link NetworkFirewallServiceException}
 *
 * Base exception class for all service exceptions from NetworkFirewall service.
 *
 * @public
 */
export class GetAnalysisReportResultsCommand extends command<GetAnalysisReportResultsCommandInput, GetAnalysisReportResultsCommandOutput>(
  _ep0,
  _mw0,
  "GetAnalysisReportResults",
  GetAnalysisReportResults$
) {
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
