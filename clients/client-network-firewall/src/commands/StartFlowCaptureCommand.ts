// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartFlowCaptureRequest, StartFlowCaptureResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { StartFlowCapture } from "../schemas/schemas_3_Flow";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartFlowCaptureCommand}.
 */
export interface StartFlowCaptureCommandInput extends StartFlowCaptureRequest {}
/**
 * @public
 *
 * The output of {@link StartFlowCaptureCommand}.
 */
export interface StartFlowCaptureCommandOutput extends StartFlowCaptureResponse, __MetadataBearer {}

/**
 * <p>Begins capturing the flows in a firewall, according to the filters you define.
 *          Captures are similar, but not identical to snapshots. Capture operations provide visibility into flows that are not closed and are tracked by a firewall's flow table.
 *          Unlike snapshots, captures are a time-boxed view. </p>
 *          <p>A flow is network traffic that is monitored by a firewall, either by stateful or stateless rules.
 * For traffic to be considered part of a flow, it must share Destination, DestinationPort, Direction, Protocol, Source, and SourcePort. </p>
 *          <note>
 *             <p>To avoid encountering operation limits, you should avoid starting captures with broad filters, like wide IP ranges.
 *             Instead, we recommend you define more specific criteria with <code>FlowFilters</code>, like narrow IP ranges, ports, or protocols.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, StartFlowCaptureCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, StartFlowCaptureCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // StartFlowCaptureRequest
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
 * const command = new StartFlowCaptureCommand(input);
 * const response = await client.send(command);
 * // { // StartFlowCaptureResponse
 * //   FirewallArn: "STRING_VALUE",
 * //   FlowOperationId: "STRING_VALUE",
 * //   FlowOperationStatus: "COMPLETED" || "IN_PROGRESS" || "FAILED" || "COMPLETED_WITH_ERRORS",
 * // };
 *
 * ```
 *
 * @param StartFlowCaptureCommandInput - {@link StartFlowCaptureCommandInput}
 * @returns {@link StartFlowCaptureCommandOutput}
 * @see {@link StartFlowCaptureCommandInput} for command's `input` shape.
 * @see {@link StartFlowCaptureCommandOutput} for command's `response` shape.
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
export class StartFlowCaptureCommand extends $Command
  .classBuilder<
    StartFlowCaptureCommandInput,
    StartFlowCaptureCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "StartFlowCapture", {})
  .n("NetworkFirewallClient", "StartFlowCaptureCommand")
  .sc(StartFlowCapture)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartFlowCaptureRequest;
      output: StartFlowCaptureResponse;
    };
    sdk: {
      input: StartFlowCaptureCommandInput;
      output: StartFlowCaptureCommandOutput;
    };
  };
}
