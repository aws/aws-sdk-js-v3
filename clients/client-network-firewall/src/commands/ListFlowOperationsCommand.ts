// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListFlowOperationsRequest, ListFlowOperationsResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { de_ListFlowOperationsCommand, se_ListFlowOperationsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFlowOperationsCommand}.
 */
export interface ListFlowOperationsCommandInput extends ListFlowOperationsRequest {}
/**
 * @public
 *
 * The output of {@link ListFlowOperationsCommand}.
 */
export interface ListFlowOperationsCommandOutput extends ListFlowOperationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all flow operations ran in a specific firewall.
 *          You can optionally narrow the request scope by specifying the operation type or Availability Zone associated with a firewall's flow operations.  </p>
 *          <p>Flow operations let you manage the flows tracked in the flow table, also known as the firewall table.</p>
 *          <p>A flow is network traffic that is monitored by a firewall, either by stateful or stateless rules.
 * For traffic to be considered part of a flow, it must share Destination, DestinationPort, Direction, Protocol, Source, and SourcePort. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, ListFlowOperationsCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, ListFlowOperationsCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const input = { // ListFlowOperationsRequest
 *   FirewallArn: "STRING_VALUE", // required
 *   AvailabilityZone: "STRING_VALUE",
 *   FlowOperationType: "FLOW_FLUSH" || "FLOW_CAPTURE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListFlowOperationsCommand(input);
 * const response = await client.send(command);
 * // { // ListFlowOperationsResponse
 * //   FlowOperations: [ // FlowOperations
 * //     { // FlowOperationMetadata
 * //       FlowOperationId: "STRING_VALUE",
 * //       FlowOperationType: "FLOW_FLUSH" || "FLOW_CAPTURE",
 * //       FlowRequestTimestamp: new Date("TIMESTAMP"),
 * //       FlowOperationStatus: "COMPLETED" || "IN_PROGRESS" || "FAILED" || "COMPLETED_WITH_ERRORS",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFlowOperationsCommandInput - {@link ListFlowOperationsCommandInput}
 * @returns {@link ListFlowOperationsCommandOutput}
 * @see {@link ListFlowOperationsCommandInput} for command's `input` shape.
 * @see {@link ListFlowOperationsCommandOutput} for command's `response` shape.
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
export class ListFlowOperationsCommand extends $Command
  .classBuilder<
    ListFlowOperationsCommandInput,
    ListFlowOperationsCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkFirewall_20201112", "ListFlowOperations", {})
  .n("NetworkFirewallClient", "ListFlowOperationsCommand")
  .f(void 0, void 0)
  .ser(se_ListFlowOperationsCommand)
  .de(de_ListFlowOperationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFlowOperationsRequest;
      output: ListFlowOperationsResponse;
    };
    sdk: {
      input: ListFlowOperationsCommandInput;
      output: ListFlowOperationsCommandOutput;
    };
  };
}
