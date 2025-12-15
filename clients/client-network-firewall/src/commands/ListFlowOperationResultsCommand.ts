// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListFlowOperationResultsRequest, ListFlowOperationResultsResponse } from "../models/models_0";
import type {
  NetworkFirewallClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFirewallClient";
import { ListFlowOperationResults$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFlowOperationResultsCommand}.
 */
export interface ListFlowOperationResultsCommandInput extends ListFlowOperationResultsRequest {}
/**
 * @public
 *
 * The output of {@link ListFlowOperationResultsCommand}.
 */
export interface ListFlowOperationResultsCommandOutput extends ListFlowOperationResultsResponse, __MetadataBearer {}

/**
 * <p>Returns the results of a specific flow operation. </p>
 *          <p>Flow operations let you manage the flows tracked in the flow table, also known as the firewall table.</p>
 *          <p>A flow is network traffic that is monitored by a firewall, either by stateful or stateless rules.
 * For traffic to be considered part of a flow, it must share Destination, DestinationPort, Direction, Protocol, Source, and SourcePort. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, ListFlowOperationResultsCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, ListFlowOperationResultsCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // ListFlowOperationResultsRequest
 *   FirewallArn: "STRING_VALUE", // required
 *   FlowOperationId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   AvailabilityZone: "STRING_VALUE",
 *   VpcEndpointId: "STRING_VALUE",
 *   VpcEndpointAssociationArn: "STRING_VALUE",
 * };
 * const command = new ListFlowOperationResultsCommand(input);
 * const response = await client.send(command);
 * // { // ListFlowOperationResultsResponse
 * //   FirewallArn: "STRING_VALUE",
 * //   AvailabilityZone: "STRING_VALUE",
 * //   VpcEndpointAssociationArn: "STRING_VALUE",
 * //   VpcEndpointId: "STRING_VALUE",
 * //   FlowOperationId: "STRING_VALUE",
 * //   FlowOperationStatus: "COMPLETED" || "IN_PROGRESS" || "FAILED" || "COMPLETED_WITH_ERRORS",
 * //   StatusMessage: "STRING_VALUE",
 * //   FlowRequestTimestamp: new Date("TIMESTAMP"),
 * //   Flows: [ // Flows
 * //     { // Flow
 * //       SourceAddress: { // Address
 * //         AddressDefinition: "STRING_VALUE", // required
 * //       },
 * //       DestinationAddress: {
 * //         AddressDefinition: "STRING_VALUE", // required
 * //       },
 * //       SourcePort: "STRING_VALUE",
 * //       DestinationPort: "STRING_VALUE",
 * //       Protocol: "STRING_VALUE",
 * //       Age: Number("int"),
 * //       PacketCount: Number("int"),
 * //       ByteCount: Number("long"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFlowOperationResultsCommandInput - {@link ListFlowOperationResultsCommandInput}
 * @returns {@link ListFlowOperationResultsCommandOutput}
 * @see {@link ListFlowOperationResultsCommandInput} for command's `input` shape.
 * @see {@link ListFlowOperationResultsCommandOutput} for command's `response` shape.
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
export class ListFlowOperationResultsCommand extends $Command
  .classBuilder<
    ListFlowOperationResultsCommandInput,
    ListFlowOperationResultsCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "ListFlowOperationResults", {})
  .n("NetworkFirewallClient", "ListFlowOperationResultsCommand")
  .sc(ListFlowOperationResults$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFlowOperationResultsRequest;
      output: ListFlowOperationResultsResponse;
    };
    sdk: {
      input: ListFlowOperationResultsCommandInput;
      output: ListFlowOperationResultsCommandOutput;
    };
  };
}
