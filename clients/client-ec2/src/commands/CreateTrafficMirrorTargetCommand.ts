// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateTrafficMirrorTargetRequest, CreateTrafficMirrorTargetResult } from "../models/models_2";
import { CreateTrafficMirrorTarget } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTrafficMirrorTargetCommand}.
 */
export interface CreateTrafficMirrorTargetCommandInput extends CreateTrafficMirrorTargetRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrafficMirrorTargetCommand}.
 */
export interface CreateTrafficMirrorTargetCommandOutput extends CreateTrafficMirrorTargetResult, __MetadataBearer {}

/**
 * <p>Creates a target for your Traffic Mirror session.</p>
 *          <p>A Traffic Mirror target is the destination for mirrored traffic. The Traffic Mirror source and
 *          the Traffic Mirror target (monitoring appliances) can be in the same VPC, or in
 *          different VPCs connected via VPC peering or a transit gateway.</p>
 *          <p>A Traffic Mirror target can be a network interface, a Network Load Balancer, or a Gateway Load Balancer endpoint.</p>
 *          <p>To use the target in a Traffic Mirror session, use  <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorSession.htm">CreateTrafficMirrorSession</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTrafficMirrorTargetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTrafficMirrorTargetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CreateTrafficMirrorTargetRequest
 *   NetworkInterfaceId: "STRING_VALUE",
 *   NetworkLoadBalancerArn: "STRING_VALUE",
 *   Description: "STRING_VALUE",
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
 *   DryRun: true || false,
 *   ClientToken: "STRING_VALUE",
 *   GatewayLoadBalancerEndpointId: "STRING_VALUE",
 * };
 * const command = new CreateTrafficMirrorTargetCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrafficMirrorTargetResult
 * //   TrafficMirrorTarget: { // TrafficMirrorTarget
 * //     TrafficMirrorTargetId: "STRING_VALUE",
 * //     NetworkInterfaceId: "STRING_VALUE",
 * //     NetworkLoadBalancerArn: "STRING_VALUE",
 * //     Type: "network-interface" || "network-load-balancer" || "gateway-load-balancer-endpoint",
 * //     Description: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     GatewayLoadBalancerEndpointId: "STRING_VALUE",
 * //   },
 * //   ClientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTrafficMirrorTargetCommandInput - {@link CreateTrafficMirrorTargetCommandInput}
 * @returns {@link CreateTrafficMirrorTargetCommandOutput}
 * @see {@link CreateTrafficMirrorTargetCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficMirrorTargetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateTrafficMirrorTargetCommand extends $Command
  .classBuilder<
    CreateTrafficMirrorTargetCommandInput,
    CreateTrafficMirrorTargetCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "CreateTrafficMirrorTarget", {})
  .n("EC2Client", "CreateTrafficMirrorTargetCommand")
  .sc(CreateTrafficMirrorTarget)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTrafficMirrorTargetRequest;
      output: CreateTrafficMirrorTargetResult;
    };
    sdk: {
      input: CreateTrafficMirrorTargetCommandInput;
      output: CreateTrafficMirrorTargetCommandOutput;
    };
  };
}
