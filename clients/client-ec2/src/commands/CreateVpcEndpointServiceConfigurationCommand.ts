// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateVpcEndpointServiceConfigurationRequest,
  CreateVpcEndpointServiceConfigurationResult,
} from "../models/models_3";
import {
  de_CreateVpcEndpointServiceConfigurationCommand,
  se_CreateVpcEndpointServiceConfigurationCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVpcEndpointServiceConfigurationCommand}.
 */
export interface CreateVpcEndpointServiceConfigurationCommandInput
  extends CreateVpcEndpointServiceConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateVpcEndpointServiceConfigurationCommand}.
 */
export interface CreateVpcEndpointServiceConfigurationCommandOutput
  extends CreateVpcEndpointServiceConfigurationResult,
    __MetadataBearer {}

/**
 * <p>Creates a VPC endpoint service to which service consumers (Amazon Web Services accounts,
 *             users, and IAM roles) can connect.</p>
 *          <p>Before you create an endpoint service, you must create one of the following for your service:</p>
 *          <ul>
 *             <li>
 *                <p>A <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/">Network Load Balancer</a>.
 *                     Service consumers connect to your service using an interface endpoint.</p>
 *             </li>
 *             <li>
 *                <p>A <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/">Gateway Load Balancer</a>.
 *                     Service consumers connect to your service using a Gateway Load Balancer endpoint.</p>
 *             </li>
 *          </ul>
 *          <p>If you set the private DNS name, you must prove that you own the private DNS domain
 *             name.</p>
 *          <p>For more information, see the <a href="https://docs.aws.amazon.com/vpc/latest/privatelink/">Amazon Web Services PrivateLink
 * 	        Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpcEndpointServiceConfigurationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpcEndpointServiceConfigurationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateVpcEndpointServiceConfigurationRequest
 *   DryRun: true || false,
 *   AcceptanceRequired: true || false,
 *   PrivateDnsName: "STRING_VALUE",
 *   NetworkLoadBalancerArns: [ // ValueStringList
 *     "STRING_VALUE",
 *   ],
 *   GatewayLoadBalancerArns: [
 *     "STRING_VALUE",
 *   ],
 *   SupportedIpAddressTypes: [
 *     "STRING_VALUE",
 *   ],
 *   SupportedRegions: [
 *     "STRING_VALUE",
 *   ],
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
 * };
 * const command = new CreateVpcEndpointServiceConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateVpcEndpointServiceConfigurationResult
 * //   ServiceConfiguration: { // ServiceConfiguration
 * //     ServiceType: [ // ServiceTypeDetailSet
 * //       { // ServiceTypeDetail
 * //         ServiceType: "Interface" || "Gateway" || "GatewayLoadBalancer",
 * //       },
 * //     ],
 * //     ServiceId: "STRING_VALUE",
 * //     ServiceName: "STRING_VALUE",
 * //     ServiceState: "Pending" || "Available" || "Deleting" || "Deleted" || "Failed",
 * //     AvailabilityZones: [ // ValueStringList
 * //       "STRING_VALUE",
 * //     ],
 * //     AcceptanceRequired: true || false,
 * //     ManagesVpcEndpoints: true || false,
 * //     NetworkLoadBalancerArns: [
 * //       "STRING_VALUE",
 * //     ],
 * //     GatewayLoadBalancerArns: [
 * //       "STRING_VALUE",
 * //     ],
 * //     SupportedIpAddressTypes: [ // SupportedIpAddressTypes
 * //       "ipv4" || "ipv6",
 * //     ],
 * //     BaseEndpointDnsNames: [
 * //       "STRING_VALUE",
 * //     ],
 * //     PrivateDnsName: "STRING_VALUE",
 * //     PrivateDnsNameConfiguration: { // PrivateDnsNameConfiguration
 * //       State: "pendingVerification" || "verified" || "failed",
 * //       Type: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //     PayerResponsibility: "ServiceOwner",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SupportedRegions: [ // SupportedRegionSet
 * //       { // SupportedRegionDetail
 * //         Region: "STRING_VALUE",
 * //         ServiceState: "STRING_VALUE",
 * //       },
 * //     ],
 * //     RemoteAccessEnabled: true || false,
 * //   },
 * //   ClientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateVpcEndpointServiceConfigurationCommandInput - {@link CreateVpcEndpointServiceConfigurationCommandInput}
 * @returns {@link CreateVpcEndpointServiceConfigurationCommandOutput}
 * @see {@link CreateVpcEndpointServiceConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateVpcEndpointServiceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateVpcEndpointServiceConfigurationCommand extends $Command
  .classBuilder<
    CreateVpcEndpointServiceConfigurationCommandInput,
    CreateVpcEndpointServiceConfigurationCommandOutput,
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
  .s("AmazonEC2", "CreateVpcEndpointServiceConfiguration", {})
  .n("EC2Client", "CreateVpcEndpointServiceConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_CreateVpcEndpointServiceConfigurationCommand)
  .de(de_CreateVpcEndpointServiceConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVpcEndpointServiceConfigurationRequest;
      output: CreateVpcEndpointServiceConfigurationResult;
    };
    sdk: {
      input: CreateVpcEndpointServiceConfigurationCommandInput;
      output: CreateVpcEndpointServiceConfigurationCommandOutput;
    };
  };
}
