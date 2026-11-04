// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteProxyConfigurationRequest, DeleteProxyConfigurationResponse } from "../models/models_0";
import { DeleteProxyConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteProxyConfigurationCommand}.
 */
export interface DeleteProxyConfigurationCommandInput extends DeleteProxyConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProxyConfigurationCommand}.
 */
export interface DeleteProxyConfigurationCommandOutput extends DeleteProxyConfigurationResponse, __MetadataBearer {}

/**
 * Deletes the specified ProxyConfiguration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DeleteProxyConfigurationCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DeleteProxyConfigurationCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // DeleteProxyConfigurationRequest
 *   ProxyConfigurationName: "STRING_VALUE",
 *   ProxyConfigurationArn: "STRING_VALUE",
 * };
 * const command = new DeleteProxyConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteProxyConfigurationResponse
 * //   ProxyConfigurationName: "STRING_VALUE",
 * //   ProxyConfigurationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteProxyConfigurationCommandInput - {@link DeleteProxyConfigurationCommandInput}
 * @returns {@link DeleteProxyConfigurationCommandOutput}
 * @see {@link DeleteProxyConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteProxyConfigurationCommandOutput} for command's `response` shape.
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
export class DeleteProxyConfigurationCommand extends command<DeleteProxyConfigurationCommandInput, DeleteProxyConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteProxyConfiguration",
  DeleteProxyConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProxyConfigurationRequest;
      output: DeleteProxyConfigurationResponse;
    };
    sdk: {
      input: DeleteProxyConfigurationCommandInput;
      output: DeleteProxyConfigurationCommandOutput;
    };
  };
}
