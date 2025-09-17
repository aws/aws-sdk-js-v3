// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  RejectNetworkFirewallTransitGatewayAttachmentRequest,
  RejectNetworkFirewallTransitGatewayAttachmentResponse,
} from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import {
  de_RejectNetworkFirewallTransitGatewayAttachmentCommand,
  se_RejectNetworkFirewallTransitGatewayAttachmentCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RejectNetworkFirewallTransitGatewayAttachmentCommand}.
 */
export interface RejectNetworkFirewallTransitGatewayAttachmentCommandInput
  extends RejectNetworkFirewallTransitGatewayAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link RejectNetworkFirewallTransitGatewayAttachmentCommand}.
 */
export interface RejectNetworkFirewallTransitGatewayAttachmentCommandOutput
  extends RejectNetworkFirewallTransitGatewayAttachmentResponse,
    __MetadataBearer {}

/**
 * <p>Rejects a transit gateway attachment request for Network Firewall. When you reject the attachment request, Network Firewall cancels the creation of routing components between the transit gateway and firewall endpoints.</p>
 *          <p>Only the transit gateway owner can reject the attachment. After rejection, no traffic will flow through the firewall endpoints for this attachment.</p>
 *          <p>Use <a>DescribeFirewall</a> to monitor the rejection status. To accept the attachment instead of rejecting it, use <a>AcceptNetworkFirewallTransitGatewayAttachment</a>.</p>
 *          <note>
 *             <p>Once rejected, you cannot reverse this action. To establish connectivity, you must create a new transit gateway-attached firewall.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, RejectNetworkFirewallTransitGatewayAttachmentCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, RejectNetworkFirewallTransitGatewayAttachmentCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // RejectNetworkFirewallTransitGatewayAttachmentRequest
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 * };
 * const command = new RejectNetworkFirewallTransitGatewayAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // RejectNetworkFirewallTransitGatewayAttachmentResponse
 * //   TransitGatewayAttachmentId: "STRING_VALUE", // required
 * //   TransitGatewayAttachmentStatus: "CREATING" || "DELETING" || "DELETED" || "FAILED" || "ERROR" || "READY" || "PENDING_ACCEPTANCE" || "REJECTING" || "REJECTED", // required
 * // };
 *
 * ```
 *
 * @param RejectNetworkFirewallTransitGatewayAttachmentCommandInput - {@link RejectNetworkFirewallTransitGatewayAttachmentCommandInput}
 * @returns {@link RejectNetworkFirewallTransitGatewayAttachmentCommandOutput}
 * @see {@link RejectNetworkFirewallTransitGatewayAttachmentCommandInput} for command's `input` shape.
 * @see {@link RejectNetworkFirewallTransitGatewayAttachmentCommandOutput} for command's `response` shape.
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
export class RejectNetworkFirewallTransitGatewayAttachmentCommand extends $Command
  .classBuilder<
    RejectNetworkFirewallTransitGatewayAttachmentCommandInput,
    RejectNetworkFirewallTransitGatewayAttachmentCommandOutput,
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
  .s("NetworkFirewall_20201112", "RejectNetworkFirewallTransitGatewayAttachment", {})
  .n("NetworkFirewallClient", "RejectNetworkFirewallTransitGatewayAttachmentCommand")
  .f(void 0, void 0)
  .ser(se_RejectNetworkFirewallTransitGatewayAttachmentCommand)
  .de(de_RejectNetworkFirewallTransitGatewayAttachmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectNetworkFirewallTransitGatewayAttachmentRequest;
      output: RejectNetworkFirewallTransitGatewayAttachmentResponse;
    };
    sdk: {
      input: RejectNetworkFirewallTransitGatewayAttachmentCommandInput;
      output: RejectNetworkFirewallTransitGatewayAttachmentCommandOutput;
    };
  };
}
