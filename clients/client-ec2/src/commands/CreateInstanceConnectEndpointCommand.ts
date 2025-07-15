// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateInstanceConnectEndpointRequest, CreateInstanceConnectEndpointResult } from "../models/models_1";
import { de_CreateInstanceConnectEndpointCommand, se_CreateInstanceConnectEndpointCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateInstanceConnectEndpointCommand}.
 */
export interface CreateInstanceConnectEndpointCommandInput extends CreateInstanceConnectEndpointRequest {}
/**
 * @public
 *
 * The output of {@link CreateInstanceConnectEndpointCommand}.
 */
export interface CreateInstanceConnectEndpointCommandOutput
  extends CreateInstanceConnectEndpointResult,
    __MetadataBearer {}

/**
 * <p>Creates an EC2 Instance Connect Endpoint.</p>
 *          <p>An EC2 Instance Connect Endpoint allows you to connect to an instance, without
 *             requiring the instance to have a public IPv4 or public IPv6 address. For more
 *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Connect-using-EC2-Instance-Connect-Endpoint.html">Connect to your instances using EC2 Instance Connect Endpoint</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateInstanceConnectEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateInstanceConnectEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateInstanceConnectEndpointRequest
 *   DryRun: true || false,
 *   SubnetId: "STRING_VALUE", // required
 *   SecurityGroupIds: [ // SecurityGroupIdStringListRequest
 *     "STRING_VALUE",
 *   ],
 *   PreserveClientIp: true || false,
 *   ClientToken: "STRING_VALUE",
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
 *   IpAddressType: "ipv4" || "dualstack" || "ipv6",
 * };
 * const command = new CreateInstanceConnectEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateInstanceConnectEndpointResult
 * //   InstanceConnectEndpoint: { // Ec2InstanceConnectEndpoint
 * //     OwnerId: "STRING_VALUE",
 * //     InstanceConnectEndpointId: "STRING_VALUE",
 * //     InstanceConnectEndpointArn: "STRING_VALUE",
 * //     State: "create-in-progress" || "create-complete" || "create-failed" || "delete-in-progress" || "delete-complete" || "delete-failed",
 * //     StateMessage: "STRING_VALUE",
 * //     DnsName: "STRING_VALUE",
 * //     FipsDnsName: "STRING_VALUE",
 * //     NetworkInterfaceIds: [ // NetworkInterfaceIdSet
 * //       "STRING_VALUE",
 * //     ],
 * //     VpcId: "STRING_VALUE",
 * //     AvailabilityZone: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     SubnetId: "STRING_VALUE",
 * //     PreserveClientIp: true || false,
 * //     SecurityGroupIds: [ // SecurityGroupIdSet
 * //       "STRING_VALUE",
 * //     ],
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     IpAddressType: "ipv4" || "dualstack" || "ipv6",
 * //   },
 * //   ClientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateInstanceConnectEndpointCommandInput - {@link CreateInstanceConnectEndpointCommandInput}
 * @returns {@link CreateInstanceConnectEndpointCommandOutput}
 * @see {@link CreateInstanceConnectEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateInstanceConnectEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateInstanceConnectEndpointCommand extends $Command
  .classBuilder<
    CreateInstanceConnectEndpointCommandInput,
    CreateInstanceConnectEndpointCommandOutput,
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
  .s("AmazonEC2", "CreateInstanceConnectEndpoint", {})
  .n("EC2Client", "CreateInstanceConnectEndpointCommand")
  .f(void 0, void 0)
  .ser(se_CreateInstanceConnectEndpointCommand)
  .de(de_CreateInstanceConnectEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateInstanceConnectEndpointRequest;
      output: CreateInstanceConnectEndpointResult;
    };
    sdk: {
      input: CreateInstanceConnectEndpointCommandInput;
      output: CreateInstanceConnectEndpointCommandOutput;
    };
  };
}
