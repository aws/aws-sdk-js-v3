// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  RejectNetworkFirewallTransitGatewayAttachmentRequest,
  RejectNetworkFirewallTransitGatewayAttachmentResponse,
} from "../models/models_0";
import { RejectNetworkFirewallTransitGatewayAttachment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RejectNetworkFirewallTransitGatewayAttachmentCommand}.
 */
export interface RejectNetworkFirewallTransitGatewayAttachmentCommandInput extends RejectNetworkFirewallTransitGatewayAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link RejectNetworkFirewallTransitGatewayAttachmentCommand}.
 */
export interface RejectNetworkFirewallTransitGatewayAttachmentCommandOutput extends RejectNetworkFirewallTransitGatewayAttachmentResponse, __MetadataBearer {}

/**
 * Rejects a transit gateway attachment request for Network Firewall. When you reject the attachment request, Network Firewall cancels the creation of routing components between the transit gateway and firewall endpoints.
 *
 * Only the transit gateway owner can reject the attachment. After rejection, no traffic will flow through the firewall endpoints for this attachment.
 *
 * Use DescribeFirewall to monitor the rejection status. To accept the attachment instead of rejecting it, use AcceptNetworkFirewallTransitGatewayAttachment.
 *
 * > **Note:** Once rejected, you cannot reverse this action. To establish connectivity, you must create a new transit gateway-attached firewall.
 *
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
export class RejectNetworkFirewallTransitGatewayAttachmentCommand extends command<RejectNetworkFirewallTransitGatewayAttachmentCommandInput, RejectNetworkFirewallTransitGatewayAttachmentCommandOutput>(
  _ep0,
  _mw0,
  "RejectNetworkFirewallTransitGatewayAttachment",
  RejectNetworkFirewallTransitGatewayAttachment$
) {
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
