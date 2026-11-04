// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteProxyRuleGroupRequest, DeleteProxyRuleGroupResponse } from "../models/models_0";
import { DeleteProxyRuleGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteProxyRuleGroupCommand}.
 */
export interface DeleteProxyRuleGroupCommandInput extends DeleteProxyRuleGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProxyRuleGroupCommand}.
 */
export interface DeleteProxyRuleGroupCommandOutput extends DeleteProxyRuleGroupResponse, __MetadataBearer {}

/**
 * Deletes the specified ProxyRuleGroup.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DeleteProxyRuleGroupCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DeleteProxyRuleGroupCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // DeleteProxyRuleGroupRequest
 *   ProxyRuleGroupName: "STRING_VALUE",
 *   ProxyRuleGroupArn: "STRING_VALUE",
 * };
 * const command = new DeleteProxyRuleGroupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteProxyRuleGroupResponse
 * //   ProxyRuleGroupName: "STRING_VALUE",
 * //   ProxyRuleGroupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteProxyRuleGroupCommandInput - {@link DeleteProxyRuleGroupCommandInput}
 * @returns {@link DeleteProxyRuleGroupCommandOutput}
 * @see {@link DeleteProxyRuleGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteProxyRuleGroupCommandOutput} for command's `response` shape.
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
export class DeleteProxyRuleGroupCommand extends command<DeleteProxyRuleGroupCommandInput, DeleteProxyRuleGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteProxyRuleGroup",
  DeleteProxyRuleGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProxyRuleGroupRequest;
      output: DeleteProxyRuleGroupResponse;
    };
    sdk: {
      input: DeleteProxyRuleGroupCommandInput;
      output: DeleteProxyRuleGroupCommandOutput;
    };
  };
}
