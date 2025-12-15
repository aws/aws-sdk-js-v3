// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateVpcEncryptionControlRequest, CreateVpcEncryptionControlResult } from "../models/models_2";
import { CreateVpcEncryptionControl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVpcEncryptionControlCommand}.
 */
export interface CreateVpcEncryptionControlCommandInput extends CreateVpcEncryptionControlRequest {}
/**
 * @public
 *
 * The output of {@link CreateVpcEncryptionControlCommand}.
 */
export interface CreateVpcEncryptionControlCommandOutput extends CreateVpcEncryptionControlResult, __MetadataBearer {}

/**
 * <p>Creates a VPC Encryption Control configuration for a specified VPC. VPC Encryption Control enables you to enforce encryption for all data in transit within and between VPCs to meet compliance requirements for standards like HIPAA, FedRAMP, and PCI DSS.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-encryption-controls.html">Enforce VPC encryption in transit</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpcEncryptionControlCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpcEncryptionControlCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CreateVpcEncryptionControlRequest
 *   DryRun: true || false,
 *   VpcId: "STRING_VALUE", // required
 *   TagSpecifications: [ // TagSpecificationList
 *     { // TagSpecification
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "declarative-policies-report" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "image-usage-report" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "outpost-lag" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "service-link-virtual-interface" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-metering-policy" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "vpc-encryption-control" || "route-server" || "route-server-endpoint" || "route-server-peer" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint" || "verified-access-endpoint-target" || "ipam-external-resource-verification-token" || "capacity-block" || "mac-modification-task" || "ipam-prefix-list-resolver" || "ipam-policy" || "ipam-prefix-list-resolver-target" || "capacity-manager-data-export" || "vpn-concentrator",
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new CreateVpcEncryptionControlCommand(input);
 * const response = await client.send(command);
 * // { // CreateVpcEncryptionControlResult
 * //   VpcEncryptionControl: { // VpcEncryptionControl
 * //     VpcId: "STRING_VALUE",
 * //     VpcEncryptionControlId: "STRING_VALUE",
 * //     Mode: "monitor" || "enforce",
 * //     State: "enforce-in-progress" || "monitor-in-progress" || "enforce-failed" || "monitor-failed" || "deleting" || "deleted" || "available" || "creating" || "delete-failed",
 * //     StateMessage: "STRING_VALUE",
 * //     ResourceExclusions: { // VpcEncryptionControlExclusions
 * //       InternetGateway: { // VpcEncryptionControlExclusion
 * //         State: "enabling" || "enabled" || "disabling" || "disabled",
 * //         StateMessage: "STRING_VALUE",
 * //       },
 * //       EgressOnlyInternetGateway: {
 * //         State: "enabling" || "enabled" || "disabling" || "disabled",
 * //         StateMessage: "STRING_VALUE",
 * //       },
 * //       NatGateway: {
 * //         State: "enabling" || "enabled" || "disabling" || "disabled",
 * //         StateMessage: "STRING_VALUE",
 * //       },
 * //       VirtualPrivateGateway: {
 * //         State: "enabling" || "enabled" || "disabling" || "disabled",
 * //         StateMessage: "STRING_VALUE",
 * //       },
 * //       VpcPeering: {
 * //         State: "enabling" || "enabled" || "disabling" || "disabled",
 * //         StateMessage: "STRING_VALUE",
 * //       },
 * //       Lambda: "<VpcEncryptionControlExclusion>",
 * //       VpcLattice: "<VpcEncryptionControlExclusion>",
 * //       ElasticFileSystem: "<VpcEncryptionControlExclusion>",
 * //     },
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
 * @param CreateVpcEncryptionControlCommandInput - {@link CreateVpcEncryptionControlCommandInput}
 * @returns {@link CreateVpcEncryptionControlCommandOutput}
 * @see {@link CreateVpcEncryptionControlCommandInput} for command's `input` shape.
 * @see {@link CreateVpcEncryptionControlCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateVpcEncryptionControlCommand extends $Command
  .classBuilder<
    CreateVpcEncryptionControlCommandInput,
    CreateVpcEncryptionControlCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "CreateVpcEncryptionControl", {})
  .n("EC2Client", "CreateVpcEncryptionControlCommand")
  .sc(CreateVpcEncryptionControl$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVpcEncryptionControlRequest;
      output: CreateVpcEncryptionControlResult;
    };
    sdk: {
      input: CreateVpcEncryptionControlCommandInput;
      output: CreateVpcEncryptionControlCommandOutput;
    };
  };
}
