// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeVpcEndpointAssociationRequest, DescribeVpcEndpointAssociationResponse } from "../models/models_0";
import type {
  NetworkFirewallClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFirewallClient";
import { DescribeVpcEndpointAssociation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcEndpointAssociationCommand}.
 */
export interface DescribeVpcEndpointAssociationCommandInput extends DescribeVpcEndpointAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpcEndpointAssociationCommand}.
 */
export interface DescribeVpcEndpointAssociationCommandOutput
  extends DescribeVpcEndpointAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Returns the data object for the specified VPC endpoint association. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeVpcEndpointAssociationCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeVpcEndpointAssociationCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // DescribeVpcEndpointAssociationRequest
 *   VpcEndpointAssociationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeVpcEndpointAssociationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcEndpointAssociationResponse
 * //   VpcEndpointAssociation: { // VpcEndpointAssociation
 * //     VpcEndpointAssociationId: "STRING_VALUE",
 * //     VpcEndpointAssociationArn: "STRING_VALUE", // required
 * //     FirewallArn: "STRING_VALUE", // required
 * //     VpcId: "STRING_VALUE", // required
 * //     SubnetMapping: { // SubnetMapping
 * //       SubnetId: "STRING_VALUE", // required
 * //       IPAddressType: "DUALSTACK" || "IPV4" || "IPV6",
 * //     },
 * //     Description: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   VpcEndpointAssociationStatus: { // VpcEndpointAssociationStatus
 * //     Status: "PROVISIONING" || "DELETING" || "READY", // required
 * //     AssociationSyncState: { // AssociationSyncState
 * //       "<keys>": { // AZSyncState
 * //         Attachment: { // Attachment
 * //           SubnetId: "STRING_VALUE",
 * //           EndpointId: "STRING_VALUE",
 * //           Status: "CREATING" || "DELETING" || "FAILED" || "ERROR" || "SCALING" || "READY",
 * //           StatusMessage: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeVpcEndpointAssociationCommandInput - {@link DescribeVpcEndpointAssociationCommandInput}
 * @returns {@link DescribeVpcEndpointAssociationCommandOutput}
 * @see {@link DescribeVpcEndpointAssociationCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcEndpointAssociationCommandOutput} for command's `response` shape.
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
export class DescribeVpcEndpointAssociationCommand extends $Command
  .classBuilder<
    DescribeVpcEndpointAssociationCommandInput,
    DescribeVpcEndpointAssociationCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "DescribeVpcEndpointAssociation", {})
  .n("NetworkFirewallClient", "DescribeVpcEndpointAssociationCommand")
  .sc(DescribeVpcEndpointAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVpcEndpointAssociationRequest;
      output: DescribeVpcEndpointAssociationResponse;
    };
    sdk: {
      input: DescribeVpcEndpointAssociationCommandInput;
      output: DescribeVpcEndpointAssociationCommandOutput;
    };
  };
}
