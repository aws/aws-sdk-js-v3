// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartFlowFlushRequest, StartFlowFlushResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { StartFlowFlush } from "../schemas/schemas_3_Flow";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartFlowFlushCommand}.
 */
export interface StartFlowFlushCommandInput extends StartFlowFlushRequest {}
/**
 * @public
 *
 * The output of {@link StartFlowFlushCommand}.
 */
export interface StartFlowFlushCommandOutput extends StartFlowFlushResponse, __MetadataBearer {}

/**
 * <p>Begins the flushing of traffic from the firewall, according to the filters you define.
 *          When the operation starts, impacted flows are temporarily marked as timed out before the Suricata engine prunes,
 *          or flushes, the flows from the firewall table.</p>
 *          <important>
 *             <p>While the flush completes, impacted flows are processed as midstream traffic. This may result in a
 *             temporary increase in midstream traffic metrics. We recommend that you double check your stream exception policy
 *             before you perform a flush operation.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, StartFlowFlushCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, StartFlowFlushCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // StartFlowFlushRequest
 *   FirewallArn: "STRING_VALUE", // required
 *   AvailabilityZone: "STRING_VALUE",
 *   VpcEndpointAssociationArn: "STRING_VALUE",
 *   VpcEndpointId: "STRING_VALUE",
 *   MinimumFlowAgeInSeconds: Number("int"),
 *   FlowFilters: [ // FlowFilters // required
 *     { // FlowFilter
 *       SourceAddress: { // Address
 *         AddressDefinition: "STRING_VALUE", // required
 *       },
 *       DestinationAddress: {
 *         AddressDefinition: "STRING_VALUE", // required
 *       },
 *       SourcePort: "STRING_VALUE",
 *       DestinationPort: "STRING_VALUE",
 *       Protocols: [ // ProtocolStrings
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new StartFlowFlushCommand(input);
 * const response = await client.send(command);
 * // { // StartFlowFlushResponse
 * //   FirewallArn: "STRING_VALUE",
 * //   FlowOperationId: "STRING_VALUE",
 * //   FlowOperationStatus: "COMPLETED" || "IN_PROGRESS" || "FAILED" || "COMPLETED_WITH_ERRORS",
 * // };
 *
 * ```
 *
 * @param StartFlowFlushCommandInput - {@link StartFlowFlushCommandInput}
 * @returns {@link StartFlowFlushCommandOutput}
 * @see {@link StartFlowFlushCommandInput} for command's `input` shape.
 * @see {@link StartFlowFlushCommandOutput} for command's `response` shape.
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
export class StartFlowFlushCommand extends $Command
  .classBuilder<
    StartFlowFlushCommandInput,
    StartFlowFlushCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "StartFlowFlush", {})
  .n("NetworkFirewallClient", "StartFlowFlushCommand")
  .sc(StartFlowFlush)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartFlowFlushRequest;
      output: StartFlowFlushResponse;
    };
    sdk: {
      input: StartFlowFlushCommandInput;
      output: StartFlowFlushCommandOutput;
    };
  };
}
