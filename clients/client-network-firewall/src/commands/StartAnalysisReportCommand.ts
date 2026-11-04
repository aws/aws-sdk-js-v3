// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartAnalysisReportRequest, StartAnalysisReportResponse } from "../models/models_0";
import { StartAnalysisReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Generates a traffic analysis report for the timeframe and traffic type you specify.
 *
 * For information on the contents of a traffic analysis report, see AnalysisReport.
 *
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
export class StartAnalysisReportCommand extends command<StartAnalysisReportCommandInput, StartAnalysisReportCommandOutput>(
  _ep0,
  _mw0,
  "StartAnalysisReport",
  StartAnalysisReport$
) {
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
