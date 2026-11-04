// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateFirewallPolicyRequest, AssociateFirewallPolicyResponse } from "../models/models_0";
import { AssociateFirewallPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateFirewallPolicyCommand}.
 */
export interface AssociateFirewallPolicyCommandInput extends AssociateFirewallPolicyRequest {}
/**
 * @public
 *
 * The output of {@link AssociateFirewallPolicyCommand}.
 */
export interface AssociateFirewallPolicyCommandOutput extends AssociateFirewallPolicyResponse, __MetadataBearer {}

/**
 * Associates a FirewallPolicy to a Firewall.
 *
 * A firewall policy defines how to monitor and manage your VPC network traffic, using a collection of inspection rule groups and other settings. Each firewall requires one firewall policy association, and you can use the same firewall policy for multiple firewalls.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, AssociateFirewallPolicyCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, AssociateFirewallPolicyCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // AssociateFirewallPolicyRequest
 *   UpdateToken: "STRING_VALUE",
 *   FirewallArn: "STRING_VALUE",
 *   FirewallName: "STRING_VALUE",
 *   FirewallPolicyArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateFirewallPolicyCommand(input);
 * const response = await client.send(command);
 * // { // AssociateFirewallPolicyResponse
 * //   FirewallArn: "STRING_VALUE",
 * //   FirewallName: "STRING_VALUE",
 * //   FirewallPolicyArn: "STRING_VALUE",
 * //   UpdateToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateFirewallPolicyCommandInput - {@link AssociateFirewallPolicyCommandInput}
 * @returns {@link AssociateFirewallPolicyCommandOutput}
 * @see {@link AssociateFirewallPolicyCommandInput} for command's `input` shape.
 * @see {@link AssociateFirewallPolicyCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Your request is valid, but Network Firewall couldn't perform the operation because of a system problem. Retry your request.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *
 * The operation failed because it's not valid. For example, you might have tried to delete a rule group or firewall policy that's in use.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The operation failed because of a problem with your request. Examples include:
 *
 * - You specified an unsupported parameter name or value.
 * - You tried to update a property with a value that isn't among the available types.
 * - Your request references an ARN that is malformed, or corresponds to a resource that isn't valid in the context of the request.
 *
 * @throws {@link InvalidTokenException} (client fault)
 *
 * The token you provided is stale or isn't valid for the operation.
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
export class AssociateFirewallPolicyCommand extends command<AssociateFirewallPolicyCommandInput, AssociateFirewallPolicyCommandOutput>(
  _ep0,
  _mw0,
  "AssociateFirewallPolicy",
  AssociateFirewallPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateFirewallPolicyRequest;
      output: AssociateFirewallPolicyResponse;
    };
    sdk: {
      input: AssociateFirewallPolicyCommandInput;
      output: AssociateFirewallPolicyCommandOutput;
    };
  };
}
