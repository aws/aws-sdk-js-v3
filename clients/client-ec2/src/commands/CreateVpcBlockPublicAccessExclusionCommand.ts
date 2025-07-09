// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateVpcBlockPublicAccessExclusionRequest,
  CreateVpcBlockPublicAccessExclusionResult,
} from "../models/models_2";
import {
  de_CreateVpcBlockPublicAccessExclusionCommand,
  se_CreateVpcBlockPublicAccessExclusionCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVpcBlockPublicAccessExclusionCommand}.
 */
export interface CreateVpcBlockPublicAccessExclusionCommandInput extends CreateVpcBlockPublicAccessExclusionRequest {}
/**
 * @public
 *
 * The output of {@link CreateVpcBlockPublicAccessExclusionCommand}.
 */
export interface CreateVpcBlockPublicAccessExclusionCommandOutput
  extends CreateVpcBlockPublicAccessExclusionResult,
    __MetadataBearer {}

/**
 * <p>Create a VPC Block Public Access (BPA) exclusion. A VPC BPA exclusion is a mode that can be applied to a single VPC or subnet that exempts it from the account’s BPA mode and will allow bidirectional or egress-only access. You can create BPA exclusions for VPCs and subnets even when BPA is not enabled on the account to ensure that there is no traffic disruption to the exclusions when VPC BPA is turned on. To learn more about VPC BPA, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/security-vpc-bpa.html">Block public access to VPCs and subnets</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpcBlockPublicAccessExclusionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpcBlockPublicAccessExclusionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateVpcBlockPublicAccessExclusionRequest
 *   DryRun: true || false,
 *   SubnetId: "STRING_VALUE",
 *   VpcId: "STRING_VALUE",
 *   InternetGatewayExclusionMode: "allow-bidirectional" || "allow-egress", // required
 *   TagSpecifications: [ // TagSpecificationList
 *     { // TagSpecification
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "declarative-policies-report" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "outpost-lag" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "service-link-virtual-interface" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "route-server" || "route-server-endpoint" || "route-server-peer" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint" || "verified-access-endpoint-target" || "ipam-external-resource-verification-token" || "capacity-block" || "mac-modification-task",
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new CreateVpcBlockPublicAccessExclusionCommand(input);
 * const response = await client.send(command);
 * // { // CreateVpcBlockPublicAccessExclusionResult
 * //   VpcBlockPublicAccessExclusion: { // VpcBlockPublicAccessExclusion
 * //     ExclusionId: "STRING_VALUE",
 * //     InternetGatewayExclusionMode: "allow-bidirectional" || "allow-egress",
 * //     ResourceArn: "STRING_VALUE",
 * //     State: "create-in-progress" || "create-complete" || "create-failed" || "update-in-progress" || "update-complete" || "update-failed" || "delete-in-progress" || "delete-complete" || "disable-in-progress" || "disable-complete",
 * //     Reason: "STRING_VALUE",
 * //     CreationTimestamp: new Date("TIMESTAMP"),
 * //     LastUpdateTimestamp: new Date("TIMESTAMP"),
 * //     DeletionTimestamp: new Date("TIMESTAMP"),
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateVpcBlockPublicAccessExclusionCommandInput - {@link CreateVpcBlockPublicAccessExclusionCommandInput}
 * @returns {@link CreateVpcBlockPublicAccessExclusionCommandOutput}
 * @see {@link CreateVpcBlockPublicAccessExclusionCommandInput} for command's `input` shape.
 * @see {@link CreateVpcBlockPublicAccessExclusionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateVpcBlockPublicAccessExclusionCommand extends $Command
  .classBuilder<
    CreateVpcBlockPublicAccessExclusionCommandInput,
    CreateVpcBlockPublicAccessExclusionCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "CreateVpcBlockPublicAccessExclusion", {})
  .n("EC2Client", "CreateVpcBlockPublicAccessExclusionCommand")
  .f(void 0, void 0)
  .ser(se_CreateVpcBlockPublicAccessExclusionCommand)
  .de(de_CreateVpcBlockPublicAccessExclusionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVpcBlockPublicAccessExclusionRequest;
      output: CreateVpcBlockPublicAccessExclusionResult;
    };
    sdk: {
      input: CreateVpcBlockPublicAccessExclusionCommandInput;
      output: CreateVpcBlockPublicAccessExclusionCommandOutput;
    };
  };
}
