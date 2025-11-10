// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  AcceptNetworkFirewallTransitGatewayAttachmentRequest,
  AcceptNetworkFirewallTransitGatewayAttachmentResponse,
} from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { AcceptNetworkFirewallTransitGatewayAttachment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcceptNetworkFirewallTransitGatewayAttachmentCommand}.
 */
export interface AcceptNetworkFirewallTransitGatewayAttachmentCommandInput
  extends AcceptNetworkFirewallTransitGatewayAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link AcceptNetworkFirewallTransitGatewayAttachmentCommand}.
 */
export interface AcceptNetworkFirewallTransitGatewayAttachmentCommandOutput
  extends AcceptNetworkFirewallTransitGatewayAttachmentResponse,
    __MetadataBearer {}

/**
 * <p>Accepts a transit gateway attachment request for Network Firewall. When you accept the attachment request, Network Firewall creates the necessary routing components to enable traffic flow between the transit gateway and firewall endpoints.</p>
 *          <p>You must accept a transit gateway attachment to complete the creation of a transit gateway-attached firewall, unless auto-accept is enabled on the transit gateway. After acceptance, use <a>DescribeFirewall</a> to verify the firewall status.</p>
 *          <p>To reject an attachment instead of accepting it, use <a>RejectNetworkFirewallTransitGatewayAttachment</a>.</p>
 *          <note>
 *             <p>It can take several minutes for the attachment acceptance to complete and the firewall to become available.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, AcceptNetworkFirewallTransitGatewayAttachmentCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, AcceptNetworkFirewallTransitGatewayAttachmentCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // AcceptNetworkFirewallTransitGatewayAttachmentRequest
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 * };
 * const command = new AcceptNetworkFirewallTransitGatewayAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // AcceptNetworkFirewallTransitGatewayAttachmentResponse
 * //   TransitGatewayAttachmentId: "STRING_VALUE", // required
 * //   TransitGatewayAttachmentStatus: "CREATING" || "DELETING" || "DELETED" || "FAILED" || "ERROR" || "READY" || "PENDING_ACCEPTANCE" || "REJECTING" || "REJECTED", // required
 * // };
 *
 * ```
 *
 * @param AcceptNetworkFirewallTransitGatewayAttachmentCommandInput - {@link AcceptNetworkFirewallTransitGatewayAttachmentCommandInput}
 * @returns {@link AcceptNetworkFirewallTransitGatewayAttachmentCommandOutput}
 * @see {@link AcceptNetworkFirewallTransitGatewayAttachmentCommandInput} for command's `input` shape.
 * @see {@link AcceptNetworkFirewallTransitGatewayAttachmentCommandOutput} for command's `response` shape.
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
export class AcceptNetworkFirewallTransitGatewayAttachmentCommand extends $Command
  .classBuilder<
    AcceptNetworkFirewallTransitGatewayAttachmentCommandInput,
    AcceptNetworkFirewallTransitGatewayAttachmentCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "AcceptNetworkFirewallTransitGatewayAttachment", {})
  .n("NetworkFirewallClient", "AcceptNetworkFirewallTransitGatewayAttachmentCommand")
  .sc(AcceptNetworkFirewallTransitGatewayAttachment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptNetworkFirewallTransitGatewayAttachmentRequest;
      output: AcceptNetworkFirewallTransitGatewayAttachmentResponse;
    };
    sdk: {
      input: AcceptNetworkFirewallTransitGatewayAttachmentCommandInput;
      output: AcceptNetworkFirewallTransitGatewayAttachmentCommandOutput;
    };
  };
}
