// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateContainerAssociationRequest, UpdateContainerAssociationResponse } from "../models/models_0";
import type {
  NetworkFirewallClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFirewallClient";
import { UpdateContainerAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateContainerAssociationCommand}.
 */
export interface UpdateContainerAssociationCommandInput extends UpdateContainerAssociationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContainerAssociationCommand}.
 */
export interface UpdateContainerAssociationCommandOutput extends UpdateContainerAssociationResponse, __MetadataBearer {}

/**
 * <p>Updates the properties of an existing container association. Use this to modify the container monitoring configurations or description.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateContainerAssociationCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateContainerAssociationCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // UpdateContainerAssociationRequest
 *   ContainerAssociationName: "STRING_VALUE",
 *   ContainerAssociationArn: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Type: "ECS" || "EKS", // required
 *   ContainerMonitoringConfigurations: [ // ContainerMonitoringConfigurations // required
 *     { // ContainerMonitoringConfiguration
 *       ClusterArn: "STRING_VALUE", // required
 *       AttributeFilters: [ // ContainerAttributes
 *         { // ContainerAttribute
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   UpdateToken: "STRING_VALUE", // required
 * };
 * const command = new UpdateContainerAssociationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateContainerAssociationResponse
 * //   ContainerAssociationName: "STRING_VALUE",
 * //   ContainerAssociationArn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Type: "ECS" || "EKS",
 * //   ContainerMonitoringConfigurations: [ // ContainerMonitoringConfigurations
 * //     { // ContainerMonitoringConfiguration
 * //       ClusterArn: "STRING_VALUE", // required
 * //       AttributeFilters: [ // ContainerAttributes
 * //         { // ContainerAttribute
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Status: "ACTIVE" || "CREATING" || "DELETING",
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   UpdateToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateContainerAssociationCommandInput - {@link UpdateContainerAssociationCommandInput}
 * @returns {@link UpdateContainerAssociationCommandOutput}
 * @see {@link UpdateContainerAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateContainerAssociationCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidTokenException} (client fault)
 *  <p>The token you provided is stale or isn't valid for the operation. </p>
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
export class UpdateContainerAssociationCommand extends $Command
  .classBuilder<
    UpdateContainerAssociationCommandInput,
    UpdateContainerAssociationCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "UpdateContainerAssociation", {})
  .n("NetworkFirewallClient", "UpdateContainerAssociationCommand")
  .sc(UpdateContainerAssociation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContainerAssociationRequest;
      output: UpdateContainerAssociationResponse;
    };
    sdk: {
      input: UpdateContainerAssociationCommandInput;
      output: UpdateContainerAssociationCommandOutput;
    };
  };
}
