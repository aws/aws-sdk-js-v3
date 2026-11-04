// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFlowOperationsRequest, ListFlowOperationsResponse } from "../models/models_0";
import { ListFlowOperations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a list of all flow operations ran in a specific firewall. You can optionally narrow the request scope by specifying the operation type or Availability Zone associated with a firewall's flow operations.
 *
 * Flow operations let you manage the flows tracked in the flow table, also known as the firewall table.
 *
 * A flow is network traffic that is monitored by a firewall, either by stateful or stateless rules. For traffic to be considered part of a flow, it must share Destination, DestinationPort, Direction, Protocol, Source, and SourcePort.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, ListFlowOperationsCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, ListFlowOperationsCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // ListFlowOperationsRequest
 *   FirewallArn: "STRING_VALUE", // required
 *   AvailabilityZone: "STRING_VALUE",
 *   AvailabilityZoneId: "STRING_VALUE",
 *   VpcEndpointAssociationArn: "STRING_VALUE",
 *   VpcEndpointId: "STRING_VALUE",
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
export class ListFlowOperationsCommand extends command<ListFlowOperationsCommandInput, ListFlowOperationsCommandOutput>(
  _ep0,
  _mw0,
  "ListFlowOperations",
  ListFlowOperations$
) {
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
