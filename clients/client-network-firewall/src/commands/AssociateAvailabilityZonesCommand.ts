// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateAvailabilityZonesRequest, AssociateAvailabilityZonesResponse } from "../models/models_0";
import { AssociateAvailabilityZones$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateAvailabilityZonesCommand}.
 */
export interface AssociateAvailabilityZonesCommandInput extends AssociateAvailabilityZonesRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAvailabilityZonesCommand}.
 */
export interface AssociateAvailabilityZonesCommandOutput extends AssociateAvailabilityZonesResponse, __MetadataBearer {}

/**
 * Associates the specified Availability Zones with a transit gateway-attached firewall. For each Availability Zone, Network Firewall creates a firewall endpoint to process traffic. You can specify one or more Availability Zones where you want to deploy the firewall.
 *
 * After adding Availability Zones, you must update your transit gateway route tables to direct traffic through the new firewall endpoints. Use DescribeFirewall to monitor the status of the new endpoints.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, AssociateAvailabilityZonesCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, AssociateAvailabilityZonesCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // AssociateAvailabilityZonesRequest
 *   UpdateToken: "STRING_VALUE",
 *   FirewallArn: "STRING_VALUE",
 *   FirewallName: "STRING_VALUE",
 *   AvailabilityZoneMappings: [ // AvailabilityZoneMappings // required
 *     { // AvailabilityZoneMapping
 *       AvailabilityZone: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new AssociateAvailabilityZonesCommand(input);
 * const response = await client.send(command);
 * // { // AssociateAvailabilityZonesResponse
 * //   FirewallArn: "STRING_VALUE",
 * //   FirewallName: "STRING_VALUE",
 * //   AvailabilityZoneMappings: [ // AvailabilityZoneMappings
 * //     { // AvailabilityZoneMapping
 * //       AvailabilityZone: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   UpdateToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateAvailabilityZonesCommandInput - {@link AssociateAvailabilityZonesCommandInput}
 * @returns {@link AssociateAvailabilityZonesCommandOutput}
 * @see {@link AssociateAvailabilityZonesCommandInput} for command's `input` shape.
 * @see {@link AssociateAvailabilityZonesCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InsufficientCapacityException} (server fault)
 *
 * Amazon Web Services doesn't currently have enough available capacity to fulfill your request. Try your request later.
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
export class AssociateAvailabilityZonesCommand extends command<AssociateAvailabilityZonesCommandInput, AssociateAvailabilityZonesCommandOutput>(
  _ep0,
  _mw0,
  "AssociateAvailabilityZones",
  AssociateAvailabilityZones$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateAvailabilityZonesRequest;
      output: AssociateAvailabilityZonesResponse;
    };
    sdk: {
      input: AssociateAvailabilityZonesCommandInput;
      output: AssociateAvailabilityZonesCommandOutput;
    };
  };
}
