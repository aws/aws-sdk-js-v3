// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyVpcPeeringConnectionOptionsRequest } from "../models/models_7";
import type { ModifyVpcPeeringConnectionOptionsResult } from "../models/models_8";
import { ModifyVpcPeeringConnectionOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyVpcPeeringConnectionOptionsCommand}.
 */
export interface ModifyVpcPeeringConnectionOptionsCommandInput extends ModifyVpcPeeringConnectionOptionsRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVpcPeeringConnectionOptionsCommand}.
 */
export interface ModifyVpcPeeringConnectionOptionsCommandOutput extends ModifyVpcPeeringConnectionOptionsResult, __MetadataBearer {}

/**
 * <p>Modifies the VPC peering connection options on one side of a VPC peering connection.</p>
 *          <p>If the peered VPCs are in the same Amazon Web Services account, you can enable DNS
 *             resolution for queries from the local VPC. This ensures that queries from the local VPC
 *             resolve to private IP addresses in the peer VPC. This option is not available if the
 *             peered VPCs are in different Amazon Web Services accounts or different Regions. For
 *             peered VPCs in different Amazon Web Services accounts, each Amazon Web Services account
 *             owner must initiate a separate request to modify the peering connection options. For
 *             inter-region peering connections, you must use the Region for the requester VPC to
 *             modify the requester VPC peering options and the Region for the accepter VPC to modify
 *             the accepter VPC peering options. To verify which VPCs are the accepter and the
 *             requester for a VPC peering connection, use the <a>DescribeVpcPeeringConnections</a> command.</p>
 *          <p>Multipath resilience replicates the traffic of an inter-Region VPC peering connection across
 *             multiple network paths. You can allow multipath resilience for your side of the connection if both of its
 *             Regions are supported. It takes effect only when both the requester and the
 *             accepter allow it. Additional charges apply when multipath resilience is in effect. For more
 *             information, see <a href="http://aws.amazon.com/vpc/pricing/">Amazon VPC pricing</a>. To check whether multipath resilience is in effect, use
 *             <a>DescribeVpcPeeringConnections</a> and check <code>multipathResilienceStatus</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcPeeringConnectionOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcPeeringConnectionOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyVpcPeeringConnectionOptionsRequest
 *   AccepterPeeringConnectionOptions: { // PeeringConnectionOptionsRequest
 *     AllowDnsResolutionFromRemoteVpc: true || false,
 *     AllowEgressFromLocalClassicLinkToRemoteVpc: true || false,
 *     AllowEgressFromLocalVpcToRemoteClassicLink: true || false,
 *     AllowMultipathResilience: true || false,
 *     MultipathResilienceMode: "always-on",
 *   },
 *   DryRun: true || false,
 *   RequesterPeeringConnectionOptions: {
 *     AllowDnsResolutionFromRemoteVpc: true || false,
 *     AllowEgressFromLocalClassicLinkToRemoteVpc: true || false,
 *     AllowEgressFromLocalVpcToRemoteClassicLink: true || false,
 *     AllowMultipathResilience: true || false,
 *     MultipathResilienceMode: "always-on",
 *   },
 *   VpcPeeringConnectionId: "STRING_VALUE", // required
 * };
 * const command = new ModifyVpcPeeringConnectionOptionsCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVpcPeeringConnectionOptionsResult
 * //   AccepterPeeringConnectionOptions: { // PeeringConnectionOptions
 * //     AllowDnsResolutionFromRemoteVpc: true || false,
 * //     AllowEgressFromLocalClassicLinkToRemoteVpc: true || false,
 * //     AllowEgressFromLocalVpcToRemoteClassicLink: true || false,
 * //     AllowMultipathResilience: true || false,
 * //     MultipathResilienceMode: "always-on",
 * //   },
 * //   RequesterPeeringConnectionOptions: {
 * //     AllowDnsResolutionFromRemoteVpc: true || false,
 * //     AllowEgressFromLocalClassicLinkToRemoteVpc: true || false,
 * //     AllowEgressFromLocalVpcToRemoteClassicLink: true || false,
 * //     AllowMultipathResilience: true || false,
 * //     MultipathResilienceMode: "always-on",
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyVpcPeeringConnectionOptionsCommandInput - {@link ModifyVpcPeeringConnectionOptionsCommandInput}
 * @returns {@link ModifyVpcPeeringConnectionOptionsCommandOutput}
 * @see {@link ModifyVpcPeeringConnectionOptionsCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcPeeringConnectionOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyVpcPeeringConnectionOptionsCommand extends command<ModifyVpcPeeringConnectionOptionsCommandInput, ModifyVpcPeeringConnectionOptionsCommandOutput>(
  _ep0,
  _mw0,
  "ModifyVpcPeeringConnectionOptions",
  ModifyVpcPeeringConnectionOptions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyVpcPeeringConnectionOptionsRequest;
      output: ModifyVpcPeeringConnectionOptionsResult;
    };
    sdk: {
      input: ModifyVpcPeeringConnectionOptionsCommandInput;
      output: ModifyVpcPeeringConnectionOptionsCommandOutput;
    };
  };
}
