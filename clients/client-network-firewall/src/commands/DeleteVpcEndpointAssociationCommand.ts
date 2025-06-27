// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVpcEndpointAssociationRequest, DeleteVpcEndpointAssociationResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import {
  de_DeleteVpcEndpointAssociationCommand,
  se_DeleteVpcEndpointAssociationCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVpcEndpointAssociationCommand}.
 */
export interface DeleteVpcEndpointAssociationCommandInput extends DeleteVpcEndpointAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVpcEndpointAssociationCommand}.
 */
export interface DeleteVpcEndpointAssociationCommandOutput
  extends DeleteVpcEndpointAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the specified <a>VpcEndpointAssociation</a>.</p>
 *          <p>You can check whether an endpoint association is
 *          in use by reviewing the route tables for the Availability Zones where you have the endpoint subnet mapping.
 *          You can retrieve the subnet mapping by calling <a>DescribeVpcEndpointAssociation</a>.
 *          You define and update the route tables through Amazon VPC. As needed, update the route tables for the
 *          Availability Zone to remove the firewall endpoint for the association. When the route tables no longer use the firewall endpoint,
 *          you can remove the endpoint association safely.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DeleteVpcEndpointAssociationCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DeleteVpcEndpointAssociationCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const input = { // DeleteVpcEndpointAssociationRequest
 *   VpcEndpointAssociationArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteVpcEndpointAssociationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVpcEndpointAssociationResponse
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
 * @param DeleteVpcEndpointAssociationCommandInput - {@link DeleteVpcEndpointAssociationCommandInput}
 * @returns {@link DeleteVpcEndpointAssociationCommandOutput}
 * @see {@link DeleteVpcEndpointAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcEndpointAssociationCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Your request is valid, but Network Firewall couldn't perform the operation because of a
 *          system problem. Retry your request. </p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation failed because it's not valid. For example, you might have tried to delete
 *          a rule group or firewall policy that's in use.</p>
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
export class DeleteVpcEndpointAssociationCommand extends $Command
  .classBuilder<
    DeleteVpcEndpointAssociationCommandInput,
    DeleteVpcEndpointAssociationCommandOutput,
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
  .s("NetworkFirewall_20201112", "DeleteVpcEndpointAssociation", {})
  .n("NetworkFirewallClient", "DeleteVpcEndpointAssociationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteVpcEndpointAssociationCommand)
  .de(de_DeleteVpcEndpointAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVpcEndpointAssociationRequest;
      output: DeleteVpcEndpointAssociationResponse;
    };
    sdk: {
      input: DeleteVpcEndpointAssociationCommandInput;
      output: DeleteVpcEndpointAssociationCommandOutput;
    };
  };
}
