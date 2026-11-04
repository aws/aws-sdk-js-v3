// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSubnetChangeProtectionRequest, UpdateSubnetChangeProtectionResponse } from "../models/models_0";
import { UpdateSubnetChangeProtection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSubnetChangeProtectionCommand}.
 */
export interface UpdateSubnetChangeProtectionCommandInput extends UpdateSubnetChangeProtectionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSubnetChangeProtectionCommand}.
 */
export interface UpdateSubnetChangeProtectionCommandOutput extends UpdateSubnetChangeProtectionResponse, __MetadataBearer {}

/**
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateSubnetChangeProtectionCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateSubnetChangeProtectionCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // UpdateSubnetChangeProtectionRequest
 *   UpdateToken: "STRING_VALUE",
 *   FirewallArn: "STRING_VALUE",
 *   FirewallName: "STRING_VALUE",
 *   SubnetChangeProtection: true || false, // required
 * };
 * const command = new UpdateSubnetChangeProtectionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSubnetChangeProtectionResponse
 * //   UpdateToken: "STRING_VALUE",
 * //   FirewallArn: "STRING_VALUE",
 * //   FirewallName: "STRING_VALUE",
 * //   SubnetChangeProtection: true || false,
 * // };
 *
 * ```
 *
 * @param UpdateSubnetChangeProtectionCommandInput - {@link UpdateSubnetChangeProtectionCommandInput}
 * @returns {@link UpdateSubnetChangeProtectionCommandOutput}
 * @see {@link UpdateSubnetChangeProtectionCommandInput} for command's `input` shape.
 * @see {@link UpdateSubnetChangeProtectionCommandOutput} for command's `response` shape.
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
export class UpdateSubnetChangeProtectionCommand extends command<UpdateSubnetChangeProtectionCommandInput, UpdateSubnetChangeProtectionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSubnetChangeProtection",
  UpdateSubnetChangeProtection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSubnetChangeProtectionRequest;
      output: UpdateSubnetChangeProtectionResponse;
    };
    sdk: {
      input: UpdateSubnetChangeProtectionCommandInput;
      output: UpdateSubnetChangeProtectionCommandOutput;
    };
  };
}
