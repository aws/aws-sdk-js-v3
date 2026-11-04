// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateFirewallPolicyChangeProtectionRequest,
  UpdateFirewallPolicyChangeProtectionResponse,
} from "../models/models_0";
import { UpdateFirewallPolicyChangeProtection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateFirewallPolicyChangeProtectionCommand}.
 */
export interface UpdateFirewallPolicyChangeProtectionCommandInput extends UpdateFirewallPolicyChangeProtectionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFirewallPolicyChangeProtectionCommand}.
 */
export interface UpdateFirewallPolicyChangeProtectionCommandOutput extends UpdateFirewallPolicyChangeProtectionResponse, __MetadataBearer {}

/**
 * Modifies the flag, `ChangeProtection`, which indicates whether it is possible to change the firewall. If the flag is set to `TRUE`, the firewall is protected from changes. This setting helps protect against accidentally changing a firewall that's in use.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateFirewallPolicyChangeProtectionCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateFirewallPolicyChangeProtectionCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // UpdateFirewallPolicyChangeProtectionRequest
 *   UpdateToken: "STRING_VALUE",
 *   FirewallArn: "STRING_VALUE",
 *   FirewallName: "STRING_VALUE",
 *   FirewallPolicyChangeProtection: true || false, // required
 * };
 * const command = new UpdateFirewallPolicyChangeProtectionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFirewallPolicyChangeProtectionResponse
 * //   UpdateToken: "STRING_VALUE",
 * //   FirewallArn: "STRING_VALUE",
 * //   FirewallName: "STRING_VALUE",
 * //   FirewallPolicyChangeProtection: true || false,
 * // };
 *
 * ```
 *
 * @param UpdateFirewallPolicyChangeProtectionCommandInput - {@link UpdateFirewallPolicyChangeProtectionCommandInput}
 * @returns {@link UpdateFirewallPolicyChangeProtectionCommandOutput}
 * @see {@link UpdateFirewallPolicyChangeProtectionCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallPolicyChangeProtectionCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidTokenException} (client fault)
 *
 * The token you provided is stale or isn't valid for the operation.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Unable to locate a resource using the parameters that you provided.
 *
 * @throws {@link ResourceOwnerCheckException} (client fault)
 *
 * Unable to change the resource because your account doesn't own it.
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
export class UpdateFirewallPolicyChangeProtectionCommand extends command<UpdateFirewallPolicyChangeProtectionCommandInput, UpdateFirewallPolicyChangeProtectionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateFirewallPolicyChangeProtection",
  UpdateFirewallPolicyChangeProtection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFirewallPolicyChangeProtectionRequest;
      output: UpdateFirewallPolicyChangeProtectionResponse;
    };
    sdk: {
      input: UpdateFirewallPolicyChangeProtectionCommandInput;
      output: UpdateFirewallPolicyChangeProtectionCommandOutput;
    };
  };
}
