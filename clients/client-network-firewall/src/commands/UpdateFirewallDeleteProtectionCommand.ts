// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateFirewallDeleteProtectionRequest, UpdateFirewallDeleteProtectionResponse } from "../models/models_0";
import { UpdateFirewallDeleteProtection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateFirewallDeleteProtectionCommand}.
 */
export interface UpdateFirewallDeleteProtectionCommandInput extends UpdateFirewallDeleteProtectionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFirewallDeleteProtectionCommand}.
 */
export interface UpdateFirewallDeleteProtectionCommandOutput extends UpdateFirewallDeleteProtectionResponse, __MetadataBearer {}

/**
 * Modifies the flag, `DeleteProtection`, which indicates whether it is possible to delete the firewall. If the flag is set to `TRUE`, the firewall is protected against deletion. This setting helps protect against accidentally deleting a firewall that's in use.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateFirewallDeleteProtectionCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateFirewallDeleteProtectionCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // UpdateFirewallDeleteProtectionRequest
 *   UpdateToken: "STRING_VALUE",
 *   FirewallArn: "STRING_VALUE",
 *   FirewallName: "STRING_VALUE",
 *   DeleteProtection: true || false, // required
 * };
 * const command = new UpdateFirewallDeleteProtectionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFirewallDeleteProtectionResponse
 * //   FirewallArn: "STRING_VALUE",
 * //   FirewallName: "STRING_VALUE",
 * //   DeleteProtection: true || false,
 * //   UpdateToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateFirewallDeleteProtectionCommandInput - {@link UpdateFirewallDeleteProtectionCommandInput}
 * @returns {@link UpdateFirewallDeleteProtectionCommandOutput}
 * @see {@link UpdateFirewallDeleteProtectionCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallDeleteProtectionCommandOutput} for command's `response` shape.
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
export class UpdateFirewallDeleteProtectionCommand extends command<UpdateFirewallDeleteProtectionCommandInput, UpdateFirewallDeleteProtectionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateFirewallDeleteProtection",
  UpdateFirewallDeleteProtection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFirewallDeleteProtectionRequest;
      output: UpdateFirewallDeleteProtectionResponse;
    };
    sdk: {
      input: UpdateFirewallDeleteProtectionCommandInput;
      output: UpdateFirewallDeleteProtectionCommandOutput;
    };
  };
}
