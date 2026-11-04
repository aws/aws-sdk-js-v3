// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteProxyRequest, DeleteProxyResponse } from "../models/models_0";
import { DeleteProxy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteProxyCommand}.
 */
export interface DeleteProxyCommandInput extends DeleteProxyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProxyCommand}.
 */
export interface DeleteProxyCommandOutput extends DeleteProxyResponse, __MetadataBearer {}

/**
 * Deletes the specified Proxy.
 *
 * Detaches a Proxy configuration from a NAT Gateway.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DeleteProxyCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DeleteProxyCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // DeleteProxyRequest
 *   NatGatewayId: "STRING_VALUE", // required
 *   ProxyName: "STRING_VALUE",
 *   ProxyArn: "STRING_VALUE",
 * };
 * const command = new DeleteProxyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteProxyResponse
 * //   NatGatewayId: "STRING_VALUE",
 * //   ProxyName: "STRING_VALUE",
 * //   ProxyArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteProxyCommandInput - {@link DeleteProxyCommandInput}
 * @returns {@link DeleteProxyCommandOutput}
 * @see {@link DeleteProxyCommandInput} for command's `input` shape.
 * @see {@link DeleteProxyCommandOutput} for command's `response` shape.
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
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The operation you requested isn't supported by Network Firewall.
 *
 * @throws {@link NetworkFirewallServiceException}
 *
 * Base exception class for all service exceptions from NetworkFirewall service.
 *
 * @public
 */
export class DeleteProxyCommand extends command<DeleteProxyCommandInput, DeleteProxyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteProxy",
  DeleteProxy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProxyRequest;
      output: DeleteProxyResponse;
    };
    sdk: {
      input: DeleteProxyCommandInput;
      output: DeleteProxyCommandOutput;
    };
  };
}
