// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateAvailabilityZoneChangeProtectionRequest,
  UpdateAvailabilityZoneChangeProtectionResponse,
} from "../models/models_0";
import { UpdateAvailabilityZoneChangeProtection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAvailabilityZoneChangeProtectionCommand}.
 */
export interface UpdateAvailabilityZoneChangeProtectionCommandInput extends UpdateAvailabilityZoneChangeProtectionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAvailabilityZoneChangeProtectionCommand}.
 */
export interface UpdateAvailabilityZoneChangeProtectionCommandOutput extends UpdateAvailabilityZoneChangeProtectionResponse, __MetadataBearer {}

/**
 * Modifies the `AvailabilityZoneChangeProtection` setting for a transit gateway-attached firewall. When enabled, this setting prevents accidental changes to the firewall's Availability Zone configuration. This helps protect against disrupting traffic flow in production environments.
 *
 * When enabled, you must disable this protection before using AssociateAvailabilityZones or DisassociateAvailabilityZones to modify the firewall's Availability Zone configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateAvailabilityZoneChangeProtectionCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateAvailabilityZoneChangeProtectionCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // UpdateAvailabilityZoneChangeProtectionRequest
 *   UpdateToken: "STRING_VALUE",
 *   FirewallArn: "STRING_VALUE",
 *   FirewallName: "STRING_VALUE",
 *   AvailabilityZoneChangeProtection: true || false, // required
 * };
 * const command = new UpdateAvailabilityZoneChangeProtectionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAvailabilityZoneChangeProtectionResponse
 * //   UpdateToken: "STRING_VALUE",
 * //   FirewallArn: "STRING_VALUE",
 * //   FirewallName: "STRING_VALUE",
 * //   AvailabilityZoneChangeProtection: true || false,
 * // };
 *
 * ```
 *
 * @param UpdateAvailabilityZoneChangeProtectionCommandInput - {@link UpdateAvailabilityZoneChangeProtectionCommandInput}
 * @returns {@link UpdateAvailabilityZoneChangeProtectionCommandOutput}
 * @see {@link UpdateAvailabilityZoneChangeProtectionCommandInput} for command's `input` shape.
 * @see {@link UpdateAvailabilityZoneChangeProtectionCommandOutput} for command's `response` shape.
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
export class UpdateAvailabilityZoneChangeProtectionCommand extends command<UpdateAvailabilityZoneChangeProtectionCommandInput, UpdateAvailabilityZoneChangeProtectionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAvailabilityZoneChangeProtection",
  UpdateAvailabilityZoneChangeProtection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAvailabilityZoneChangeProtectionRequest;
      output: UpdateAvailabilityZoneChangeProtectionResponse;
    };
    sdk: {
      input: UpdateAvailabilityZoneChangeProtectionCommandInput;
      output: UpdateAvailabilityZoneChangeProtectionCommandOutput;
    };
  };
}
