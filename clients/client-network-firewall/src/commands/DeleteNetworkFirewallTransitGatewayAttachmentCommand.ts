// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DeleteNetworkFirewallTransitGatewayAttachmentRequest,
  DeleteNetworkFirewallTransitGatewayAttachmentResponse,
} from "../models/models_0";
import type {
  NetworkFirewallClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFirewallClient";
import { DeleteNetworkFirewallTransitGatewayAttachment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNetworkFirewallTransitGatewayAttachmentCommand}.
 */
export interface DeleteNetworkFirewallTransitGatewayAttachmentCommandInput
  extends DeleteNetworkFirewallTransitGatewayAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNetworkFirewallTransitGatewayAttachmentCommand}.
 */
export interface DeleteNetworkFirewallTransitGatewayAttachmentCommandOutput
  extends DeleteNetworkFirewallTransitGatewayAttachmentResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a transit gateway attachment from a Network Firewall. Either the firewall owner or the transit gateway owner can delete the attachment.</p>
 *          <important>
 *             <p>After you delete a transit gateway attachment, traffic will no longer flow through the firewall endpoints.</p>
 *          </important>
 *          <p>After you initiate the delete operation, use <a>DescribeFirewall</a> to monitor the deletion status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DeleteNetworkFirewallTransitGatewayAttachmentCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DeleteNetworkFirewallTransitGatewayAttachmentCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // DeleteNetworkFirewallTransitGatewayAttachmentRequest
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 * };
 * const command = new DeleteNetworkFirewallTransitGatewayAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteNetworkFirewallTransitGatewayAttachmentResponse
 * //   TransitGatewayAttachmentId: "STRING_VALUE", // required
 * //   TransitGatewayAttachmentStatus: "CREATING" || "DELETING" || "DELETED" || "FAILED" || "ERROR" || "READY" || "PENDING_ACCEPTANCE" || "REJECTING" || "REJECTED", // required
 * // };
 *
 * ```
 *
 * @param DeleteNetworkFirewallTransitGatewayAttachmentCommandInput - {@link DeleteNetworkFirewallTransitGatewayAttachmentCommandInput}
 * @returns {@link DeleteNetworkFirewallTransitGatewayAttachmentCommandOutput}
 * @see {@link DeleteNetworkFirewallTransitGatewayAttachmentCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkFirewallTransitGatewayAttachmentCommandOutput} for command's `response` shape.
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
export class DeleteNetworkFirewallTransitGatewayAttachmentCommand extends $Command
  .classBuilder<
    DeleteNetworkFirewallTransitGatewayAttachmentCommandInput,
    DeleteNetworkFirewallTransitGatewayAttachmentCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "DeleteNetworkFirewallTransitGatewayAttachment", {})
  .n("NetworkFirewallClient", "DeleteNetworkFirewallTransitGatewayAttachmentCommand")
  .sc(DeleteNetworkFirewallTransitGatewayAttachment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNetworkFirewallTransitGatewayAttachmentRequest;
      output: DeleteNetworkFirewallTransitGatewayAttachmentResponse;
    };
    sdk: {
      input: DeleteNetworkFirewallTransitGatewayAttachmentCommandInput;
      output: DeleteNetworkFirewallTransitGatewayAttachmentCommandOutput;
    };
  };
}
