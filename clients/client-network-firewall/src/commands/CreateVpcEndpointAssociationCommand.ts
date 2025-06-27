// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateVpcEndpointAssociationRequest, CreateVpcEndpointAssociationResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import {
  de_CreateVpcEndpointAssociationCommand,
  se_CreateVpcEndpointAssociationCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVpcEndpointAssociationCommand}.
 */
export interface CreateVpcEndpointAssociationCommandInput extends CreateVpcEndpointAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateVpcEndpointAssociationCommand}.
 */
export interface CreateVpcEndpointAssociationCommandOutput
  extends CreateVpcEndpointAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Creates a firewall endpoint for an Network Firewall firewall. This type of firewall endpoint is independent of the firewall endpoints that you specify in the <code>Firewall</code> itself, and you define it in addition to those endpoints after the firewall has been created. You can define a VPC endpoint association using a different VPC than the one you used in the firewall specifications. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, CreateVpcEndpointAssociationCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, CreateVpcEndpointAssociationCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const input = { // CreateVpcEndpointAssociationRequest
 *   FirewallArn: "STRING_VALUE", // required
 *   VpcId: "STRING_VALUE", // required
 *   SubnetMapping: { // SubnetMapping
 *     SubnetId: "STRING_VALUE", // required
 *     IPAddressType: "DUALSTACK" || "IPV4" || "IPV6",
 *   },
 *   Description: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateVpcEndpointAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateVpcEndpointAssociationResponse
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
 * @param CreateVpcEndpointAssociationCommandInput - {@link CreateVpcEndpointAssociationCommandInput}
 * @returns {@link CreateVpcEndpointAssociationCommandOutput}
 * @see {@link CreateVpcEndpointAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateVpcEndpointAssociationCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InsufficientCapacityException} (server fault)
 *  <p>Amazon Web Services doesn't currently have enough available capacity to fulfill your request. Try your
 *          request later. </p>
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Unable to perform the operation because doing so would violate a limit setting. </p>
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
export class CreateVpcEndpointAssociationCommand extends $Command
  .classBuilder<
    CreateVpcEndpointAssociationCommandInput,
    CreateVpcEndpointAssociationCommandOutput,
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
  .s("NetworkFirewall_20201112", "CreateVpcEndpointAssociation", {})
  .n("NetworkFirewallClient", "CreateVpcEndpointAssociationCommand")
  .f(void 0, void 0)
  .ser(se_CreateVpcEndpointAssociationCommand)
  .de(de_CreateVpcEndpointAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVpcEndpointAssociationRequest;
      output: CreateVpcEndpointAssociationResponse;
    };
    sdk: {
      input: CreateVpcEndpointAssociationCommandInput;
      output: CreateVpcEndpointAssociationCommandOutput;
    };
  };
}
