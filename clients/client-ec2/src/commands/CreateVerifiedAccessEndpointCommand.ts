// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateVerifiedAccessEndpointRequest, CreateVerifiedAccessEndpointResult } from "../models/models_2";
import { de_CreateVerifiedAccessEndpointCommand, se_CreateVerifiedAccessEndpointCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVerifiedAccessEndpointCommand}.
 */
export interface CreateVerifiedAccessEndpointCommandInput extends CreateVerifiedAccessEndpointRequest {}
/**
 * @public
 *
 * The output of {@link CreateVerifiedAccessEndpointCommand}.
 */
export interface CreateVerifiedAccessEndpointCommandOutput
  extends CreateVerifiedAccessEndpointResult,
    __MetadataBearer {}

/**
 * <p>An Amazon Web Services Verified Access endpoint is where you define your application along with an optional endpoint-level access policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVerifiedAccessEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVerifiedAccessEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateVerifiedAccessEndpointRequest
 *   VerifiedAccessGroupId: "STRING_VALUE", // required
 *   EndpointType: "load-balancer" || "network-interface" || "rds" || "cidr", // required
 *   AttachmentType: "vpc", // required
 *   DomainCertificateArn: "STRING_VALUE",
 *   ApplicationDomain: "STRING_VALUE",
 *   EndpointDomainPrefix: "STRING_VALUE",
 *   SecurityGroupIds: [ // SecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   LoadBalancerOptions: { // CreateVerifiedAccessEndpointLoadBalancerOptions
 *     Protocol: "http" || "https" || "tcp",
 *     Port: Number("int"),
 *     LoadBalancerArn: "STRING_VALUE",
 *     SubnetIds: [ // CreateVerifiedAccessEndpointSubnetIdList
 *       "STRING_VALUE",
 *     ],
 *     PortRanges: [ // CreateVerifiedAccessEndpointPortRangeList
 *       { // CreateVerifiedAccessEndpointPortRange
 *         FromPort: Number("int"),
 *         ToPort: Number("int"),
 *       },
 *     ],
 *   },
 *   NetworkInterfaceOptions: { // CreateVerifiedAccessEndpointEniOptions
 *     NetworkInterfaceId: "STRING_VALUE",
 *     Protocol: "http" || "https" || "tcp",
 *     Port: Number("int"),
 *     PortRanges: [
 *       {
 *         FromPort: Number("int"),
 *         ToPort: Number("int"),
 *       },
 *     ],
 *   },
 *   Description: "STRING_VALUE",
 *   PolicyDocument: "STRING_VALUE",
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
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 *   SseSpecification: { // VerifiedAccessSseSpecificationRequest
 *     CustomerManagedKeyEnabled: true || false,
 *     KmsKeyArn: "STRING_VALUE",
 *   },
 *   RdsOptions: { // CreateVerifiedAccessEndpointRdsOptions
 *     Protocol: "http" || "https" || "tcp",
 *     Port: Number("int"),
 *     RdsDbInstanceArn: "STRING_VALUE",
 *     RdsDbClusterArn: "STRING_VALUE",
 *     RdsDbProxyArn: "STRING_VALUE",
 *     RdsEndpoint: "STRING_VALUE",
 *     SubnetIds: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   CidrOptions: { // CreateVerifiedAccessEndpointCidrOptions
 *     Protocol: "http" || "https" || "tcp",
 *     SubnetIds: [
 *       "STRING_VALUE",
 *     ],
 *     Cidr: "STRING_VALUE",
 *     PortRanges: [
 *       {
 *         FromPort: Number("int"),
 *         ToPort: Number("int"),
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateVerifiedAccessEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateVerifiedAccessEndpointResult
 * //   VerifiedAccessEndpoint: { // VerifiedAccessEndpoint
 * //     VerifiedAccessInstanceId: "STRING_VALUE",
 * //     VerifiedAccessGroupId: "STRING_VALUE",
 * //     VerifiedAccessEndpointId: "STRING_VALUE",
 * //     ApplicationDomain: "STRING_VALUE",
 * //     EndpointType: "load-balancer" || "network-interface" || "rds" || "cidr",
 * //     AttachmentType: "vpc",
 * //     DomainCertificateArn: "STRING_VALUE",
 * //     EndpointDomain: "STRING_VALUE",
 * //     DeviceValidationDomain: "STRING_VALUE",
 * //     SecurityGroupIds: [ // SecurityGroupIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     LoadBalancerOptions: { // VerifiedAccessEndpointLoadBalancerOptions
 * //       Protocol: "http" || "https" || "tcp",
 * //       Port: Number("int"),
 * //       LoadBalancerArn: "STRING_VALUE",
 * //       SubnetIds: [ // VerifiedAccessEndpointSubnetIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       PortRanges: [ // VerifiedAccessEndpointPortRangeList
 * //         { // VerifiedAccessEndpointPortRange
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //     NetworkInterfaceOptions: { // VerifiedAccessEndpointEniOptions
 * //       NetworkInterfaceId: "STRING_VALUE",
 * //       Protocol: "http" || "https" || "tcp",
 * //       Port: Number("int"),
 * //       PortRanges: [
 * //         {
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //     Status: { // VerifiedAccessEndpointStatus
 * //       Code: "pending" || "active" || "updating" || "deleting" || "deleted",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     Description: "STRING_VALUE",
 * //     CreationTime: "STRING_VALUE",
 * //     LastUpdatedTime: "STRING_VALUE",
 * //     DeletionTime: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SseSpecification: { // VerifiedAccessSseSpecificationResponse
 * //       CustomerManagedKeyEnabled: true || false,
 * //       KmsKeyArn: "STRING_VALUE",
 * //     },
 * //     RdsOptions: { // VerifiedAccessEndpointRdsOptions
 * //       Protocol: "http" || "https" || "tcp",
 * //       Port: Number("int"),
 * //       RdsDbInstanceArn: "STRING_VALUE",
 * //       RdsDbClusterArn: "STRING_VALUE",
 * //       RdsDbProxyArn: "STRING_VALUE",
 * //       RdsEndpoint: "STRING_VALUE",
 * //       SubnetIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     CidrOptions: { // VerifiedAccessEndpointCidrOptions
 * //       Cidr: "STRING_VALUE",
 * //       PortRanges: [
 * //         {
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //         },
 * //       ],
 * //       Protocol: "http" || "https" || "tcp",
 * //       SubnetIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateVerifiedAccessEndpointCommandInput - {@link CreateVerifiedAccessEndpointCommandInput}
 * @returns {@link CreateVerifiedAccessEndpointCommandOutput}
 * @see {@link CreateVerifiedAccessEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateVerifiedAccessEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateVerifiedAccessEndpointCommand extends $Command
  .classBuilder<
    CreateVerifiedAccessEndpointCommandInput,
    CreateVerifiedAccessEndpointCommandOutput,
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
  .s("AmazonEC2", "CreateVerifiedAccessEndpoint", {})
  .n("EC2Client", "CreateVerifiedAccessEndpointCommand")
  .f(void 0, void 0)
  .ser(se_CreateVerifiedAccessEndpointCommand)
  .de(de_CreateVerifiedAccessEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVerifiedAccessEndpointRequest;
      output: CreateVerifiedAccessEndpointResult;
    };
    sdk: {
      input: CreateVerifiedAccessEndpointCommandInput;
      output: CreateVerifiedAccessEndpointCommandOutput;
    };
  };
}
