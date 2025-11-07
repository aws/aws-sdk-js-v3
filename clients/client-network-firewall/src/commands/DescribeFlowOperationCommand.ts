// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeFlowOperationRequest, DescribeFlowOperationResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { DescribeFlowOperation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFlowOperationCommand}.
 */
export interface DescribeFlowOperationCommandInput extends DescribeFlowOperationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFlowOperationCommand}.
 */
export interface DescribeFlowOperationCommandOutput extends DescribeFlowOperationResponse, __MetadataBearer {}

/**
 * <p>Returns key information about a specific flow operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeFlowOperationCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeFlowOperationCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // DescribeFlowOperationRequest
 *   FirewallArn: "STRING_VALUE", // required
 *   AvailabilityZone: "STRING_VALUE",
 *   VpcEndpointAssociationArn: "STRING_VALUE",
 *   VpcEndpointId: "STRING_VALUE",
 *   FlowOperationId: "STRING_VALUE", // required
 * };
 * const command = new DescribeFlowOperationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFlowOperationResponse
 * //   FirewallArn: "STRING_VALUE",
 * //   AvailabilityZone: "STRING_VALUE",
 * //   VpcEndpointAssociationArn: "STRING_VALUE",
 * //   VpcEndpointId: "STRING_VALUE",
 * //   FlowOperationId: "STRING_VALUE",
 * //   FlowOperationType: "FLOW_FLUSH" || "FLOW_CAPTURE",
 * //   FlowOperationStatus: "COMPLETED" || "IN_PROGRESS" || "FAILED" || "COMPLETED_WITH_ERRORS",
 * //   StatusMessage: "STRING_VALUE",
 * //   FlowRequestTimestamp: new Date("TIMESTAMP"),
 * //   FlowOperation: { // FlowOperation
 * //     MinimumFlowAgeInSeconds: Number("int"),
 * //     FlowFilters: [ // FlowFilters
 * //       { // FlowFilter
 * //         SourceAddress: { // Address
 * //           AddressDefinition: "STRING_VALUE", // required
 * //         },
 * //         DestinationAddress: {
 * //           AddressDefinition: "STRING_VALUE", // required
 * //         },
 * //         SourcePort: "STRING_VALUE",
 * //         DestinationPort: "STRING_VALUE",
 * //         Protocols: [ // ProtocolStrings
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFlowOperationCommandInput - {@link DescribeFlowOperationCommandInput}
 * @returns {@link DescribeFlowOperationCommandOutput}
 * @see {@link DescribeFlowOperationCommandInput} for command's `input` shape.
 * @see {@link DescribeFlowOperationCommandOutput} for command's `response` shape.
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
export class DescribeFlowOperationCommand extends $Command
  .classBuilder<
    DescribeFlowOperationCommandInput,
    DescribeFlowOperationCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "DescribeFlowOperation", {})
  .n("NetworkFirewallClient", "DescribeFlowOperationCommand")
  .sc(DescribeFlowOperation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFlowOperationRequest;
      output: DescribeFlowOperationResponse;
    };
    sdk: {
      input: DescribeFlowOperationCommandInput;
      output: DescribeFlowOperationCommandOutput;
    };
  };
}
