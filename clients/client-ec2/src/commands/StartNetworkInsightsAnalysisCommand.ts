// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { StartNetworkInsightsAnalysisRequest, StartNetworkInsightsAnalysisResult } from "../models/models_7";
import { de_StartNetworkInsightsAnalysisCommand, se_StartNetworkInsightsAnalysisCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartNetworkInsightsAnalysisCommand}.
 */
export interface StartNetworkInsightsAnalysisCommandInput extends StartNetworkInsightsAnalysisRequest {}
/**
 * @public
 *
 * The output of {@link StartNetworkInsightsAnalysisCommand}.
 */
export interface StartNetworkInsightsAnalysisCommandOutput
  extends StartNetworkInsightsAnalysisResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Starts analyzing the specified path. If the path is reachable, the
 *          operation returns the shortest feasible path.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, StartNetworkInsightsAnalysisCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, StartNetworkInsightsAnalysisCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // StartNetworkInsightsAnalysisRequest
 *   NetworkInsightsPathId: "STRING_VALUE", // required
 *   AdditionalAccounts: [ // ValueStringList
 *     "STRING_VALUE",
 *   ],
 *   FilterInArns: [ // ArnList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 *   TagSpecifications: [ // TagSpecificationList
 *     { // TagSpecification
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint",
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE", // required
 * };
 * const command = new StartNetworkInsightsAnalysisCommand(input);
 * const response = await client.send(command);
 * // { // StartNetworkInsightsAnalysisResult
 * //   NetworkInsightsAnalysis: { // NetworkInsightsAnalysis
 * //     NetworkInsightsAnalysisId: "STRING_VALUE",
 * //     NetworkInsightsAnalysisArn: "STRING_VALUE",
 * //     NetworkInsightsPathId: "STRING_VALUE",
 * //     AdditionalAccounts: [ // ValueStringList
 * //       "STRING_VALUE",
 * //     ],
 * //     FilterInArns: [ // ArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     StartDate: new Date("TIMESTAMP"),
 * //     Status: "running" || "succeeded" || "failed",
 * //     StatusMessage: "STRING_VALUE",
 * //     WarningMessage: "STRING_VALUE",
 * //     NetworkPathFound: true || false,
 * //     ForwardPathComponents: [ // PathComponentList
 * //       { // PathComponent
 * //         SequenceNumber: Number("int"),
 * //         AclRule: { // AnalysisAclRule
 * //           Cidr: "STRING_VALUE",
 * //           Egress: true || false,
 * //           PortRange: { // PortRange
 * //             From: Number("int"),
 * //             To: Number("int"),
 * //           },
 * //           Protocol: "STRING_VALUE",
 * //           RuleAction: "STRING_VALUE",
 * //           RuleNumber: Number("int"),
 * //         },
 * //         AttachedTo: { // AnalysisComponent
 * //           Id: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //         },
 * //         Component: {
 * //           Id: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //         },
 * //         DestinationVpc: {
 * //           Id: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //         },
 * //         OutboundHeader: { // AnalysisPacketHeader
 * //           DestinationAddresses: [ // IpAddressList
 * //             "STRING_VALUE",
 * //           ],
 * //           DestinationPortRanges: [ // PortRangeList
 * //             {
 * //               From: Number("int"),
 * //               To: Number("int"),
 * //             },
 * //           ],
 * //           Protocol: "STRING_VALUE",
 * //           SourceAddresses: [
 * //             "STRING_VALUE",
 * //           ],
 * //           SourcePortRanges: [
 * //             {
 * //               From: Number("int"),
 * //               To: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //         InboundHeader: {
 * //           DestinationAddresses: [
 * //             "STRING_VALUE",
 * //           ],
 * //           DestinationPortRanges: [
 * //             {
 * //               From: Number("int"),
 * //               To: Number("int"),
 * //             },
 * //           ],
 * //           Protocol: "STRING_VALUE",
 * //           SourceAddresses: [
 * //             "STRING_VALUE",
 * //           ],
 * //           SourcePortRanges: [
 * //             {
 * //               From: Number("int"),
 * //               To: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //         RouteTableRoute: { // AnalysisRouteTableRoute
 * //           DestinationCidr: "STRING_VALUE",
 * //           DestinationPrefixListId: "STRING_VALUE",
 * //           EgressOnlyInternetGatewayId: "STRING_VALUE",
 * //           GatewayId: "STRING_VALUE",
 * //           InstanceId: "STRING_VALUE",
 * //           NatGatewayId: "STRING_VALUE",
 * //           NetworkInterfaceId: "STRING_VALUE",
 * //           Origin: "STRING_VALUE",
 * //           TransitGatewayId: "STRING_VALUE",
 * //           VpcPeeringConnectionId: "STRING_VALUE",
 * //           State: "STRING_VALUE",
 * //           CarrierGatewayId: "STRING_VALUE",
 * //           CoreNetworkArn: "STRING_VALUE",
 * //           LocalGatewayId: "STRING_VALUE",
 * //         },
 * //         SecurityGroupRule: { // AnalysisSecurityGroupRule
 * //           Cidr: "STRING_VALUE",
 * //           Direction: "STRING_VALUE",
 * //           SecurityGroupId: "STRING_VALUE",
 * //           PortRange: "<PortRange>",
 * //           PrefixListId: "STRING_VALUE",
 * //           Protocol: "STRING_VALUE",
 * //         },
 * //         SourceVpc: {
 * //           Id: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //         },
 * //         Subnet: {
 * //           Id: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //         },
 * //         Vpc: "<AnalysisComponent>",
 * //         AdditionalDetails: [ // AdditionalDetailList
 * //           { // AdditionalDetail
 * //             AdditionalDetailType: "STRING_VALUE",
 * //             Component: "<AnalysisComponent>",
 * //             VpcEndpointService: "<AnalysisComponent>",
 * //             RuleOptions: [ // RuleOptionList
 * //               { // RuleOption
 * //                 Keyword: "STRING_VALUE",
 * //                 Settings: [ // StringList
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             ],
 * //             RuleGroupTypePairs: [ // RuleGroupTypePairList
 * //               { // RuleGroupTypePair
 * //                 RuleGroupArn: "STRING_VALUE",
 * //                 RuleGroupType: "STRING_VALUE",
 * //               },
 * //             ],
 * //             RuleGroupRuleOptionsPairs: [ // RuleGroupRuleOptionsPairList
 * //               { // RuleGroupRuleOptionsPair
 * //                 RuleGroupArn: "STRING_VALUE",
 * //                 RuleOptions: [
 * //                   {
 * //                     Keyword: "STRING_VALUE",
 * //                     Settings: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //             ServiceName: "STRING_VALUE",
 * //             LoadBalancers: [ // AnalysisComponentList
 * //               "<AnalysisComponent>",
 * //             ],
 * //           },
 * //         ],
 * //         TransitGateway: "<AnalysisComponent>",
 * //         TransitGatewayRouteTableRoute: { // TransitGatewayRouteTableRoute
 * //           DestinationCidr: "STRING_VALUE",
 * //           State: "STRING_VALUE",
 * //           RouteOrigin: "STRING_VALUE",
 * //           PrefixListId: "STRING_VALUE",
 * //           AttachmentId: "STRING_VALUE",
 * //           ResourceId: "STRING_VALUE",
 * //           ResourceType: "STRING_VALUE",
 * //         },
 * //         Explanations: [ // ExplanationList
 * //           { // Explanation
 * //             Acl: "<AnalysisComponent>",
 * //             AclRule: {
 * //               Cidr: "STRING_VALUE",
 * //               Egress: true || false,
 * //               PortRange: "<PortRange>",
 * //               Protocol: "STRING_VALUE",
 * //               RuleAction: "STRING_VALUE",
 * //               RuleNumber: Number("int"),
 * //             },
 * //             Address: "STRING_VALUE",
 * //             Addresses: [
 * //               "STRING_VALUE",
 * //             ],
 * //             AttachedTo: "<AnalysisComponent>",
 * //             AvailabilityZones: [
 * //               "STRING_VALUE",
 * //             ],
 * //             Cidrs: [
 * //               "STRING_VALUE",
 * //             ],
 * //             Component: "<AnalysisComponent>",
 * //             CustomerGateway: "<AnalysisComponent>",
 * //             Destination: "<AnalysisComponent>",
 * //             DestinationVpc: "<AnalysisComponent>",
 * //             Direction: "STRING_VALUE",
 * //             ExplanationCode: "STRING_VALUE",
 * //             IngressRouteTable: "<AnalysisComponent>",
 * //             InternetGateway: "<AnalysisComponent>",
 * //             LoadBalancerArn: "STRING_VALUE",
 * //             ClassicLoadBalancerListener: { // AnalysisLoadBalancerListener
 * //               LoadBalancerPort: Number("int"),
 * //               InstancePort: Number("int"),
 * //             },
 * //             LoadBalancerListenerPort: Number("int"),
 * //             LoadBalancerTarget: { // AnalysisLoadBalancerTarget
 * //               Address: "STRING_VALUE",
 * //               AvailabilityZone: "STRING_VALUE",
 * //               Instance: "<AnalysisComponent>",
 * //               Port: Number("int"),
 * //             },
 * //             LoadBalancerTargetGroup: "<AnalysisComponent>",
 * //             LoadBalancerTargetGroups: [
 * //               "<AnalysisComponent>",
 * //             ],
 * //             LoadBalancerTargetPort: Number("int"),
 * //             ElasticLoadBalancerListener: "<AnalysisComponent>",
 * //             MissingComponent: "STRING_VALUE",
 * //             NatGateway: "<AnalysisComponent>",
 * //             NetworkInterface: "<AnalysisComponent>",
 * //             PacketField: "STRING_VALUE",
 * //             VpcPeeringConnection: "<AnalysisComponent>",
 * //             Port: Number("int"),
 * //             PortRanges: [
 * //               "<PortRange>",
 * //             ],
 * //             PrefixList: "<AnalysisComponent>",
 * //             Protocols: "<StringList>",
 * //             RouteTableRoute: {
 * //               DestinationCidr: "STRING_VALUE",
 * //               DestinationPrefixListId: "STRING_VALUE",
 * //               EgressOnlyInternetGatewayId: "STRING_VALUE",
 * //               GatewayId: "STRING_VALUE",
 * //               InstanceId: "STRING_VALUE",
 * //               NatGatewayId: "STRING_VALUE",
 * //               NetworkInterfaceId: "STRING_VALUE",
 * //               Origin: "STRING_VALUE",
 * //               TransitGatewayId: "STRING_VALUE",
 * //               VpcPeeringConnectionId: "STRING_VALUE",
 * //               State: "STRING_VALUE",
 * //               CarrierGatewayId: "STRING_VALUE",
 * //               CoreNetworkArn: "STRING_VALUE",
 * //               LocalGatewayId: "STRING_VALUE",
 * //             },
 * //             RouteTable: "<AnalysisComponent>",
 * //             SecurityGroup: "<AnalysisComponent>",
 * //             SecurityGroupRule: {
 * //               Cidr: "STRING_VALUE",
 * //               Direction: "STRING_VALUE",
 * //               SecurityGroupId: "STRING_VALUE",
 * //               PortRange: "<PortRange>",
 * //               PrefixListId: "STRING_VALUE",
 * //               Protocol: "STRING_VALUE",
 * //             },
 * //             SecurityGroups: [
 * //               "<AnalysisComponent>",
 * //             ],
 * //             SourceVpc: "<AnalysisComponent>",
 * //             State: "STRING_VALUE",
 * //             Subnet: "<AnalysisComponent>",
 * //             SubnetRouteTable: "<AnalysisComponent>",
 * //             Vpc: "<AnalysisComponent>",
 * //             VpcEndpoint: "<AnalysisComponent>",
 * //             VpnConnection: "<AnalysisComponent>",
 * //             VpnGateway: "<AnalysisComponent>",
 * //             TransitGateway: "<AnalysisComponent>",
 * //             TransitGatewayRouteTable: "<AnalysisComponent>",
 * //             TransitGatewayRouteTableRoute: {
 * //               DestinationCidr: "STRING_VALUE",
 * //               State: "STRING_VALUE",
 * //               RouteOrigin: "STRING_VALUE",
 * //               PrefixListId: "STRING_VALUE",
 * //               AttachmentId: "STRING_VALUE",
 * //               ResourceId: "STRING_VALUE",
 * //               ResourceType: "STRING_VALUE",
 * //             },
 * //             TransitGatewayAttachment: "<AnalysisComponent>",
 * //             ComponentAccount: "STRING_VALUE",
 * //             ComponentRegion: "STRING_VALUE",
 * //             FirewallStatelessRule: { // FirewallStatelessRule
 * //               RuleGroupArn: "STRING_VALUE",
 * //               Sources: "<ValueStringList>",
 * //               Destinations: "<ValueStringList>",
 * //               SourcePorts: "<PortRangeList>",
 * //               DestinationPorts: "<PortRangeList>",
 * //               Protocols: [ // ProtocolIntList
 * //                 Number("int"),
 * //               ],
 * //               RuleAction: "STRING_VALUE",
 * //               Priority: Number("int"),
 * //             },
 * //             FirewallStatefulRule: { // FirewallStatefulRule
 * //               RuleGroupArn: "STRING_VALUE",
 * //               Sources: "<ValueStringList>",
 * //               Destinations: "<ValueStringList>",
 * //               SourcePorts: "<PortRangeList>",
 * //               DestinationPorts: "<PortRangeList>",
 * //               Protocol: "STRING_VALUE",
 * //               RuleAction: "STRING_VALUE",
 * //               Direction: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         ElasticLoadBalancerListener: "<AnalysisComponent>",
 * //         FirewallStatelessRule: {
 * //           RuleGroupArn: "STRING_VALUE",
 * //           Sources: "<ValueStringList>",
 * //           Destinations: "<ValueStringList>",
 * //           SourcePorts: "<PortRangeList>",
 * //           DestinationPorts: "<PortRangeList>",
 * //           Protocols: [
 * //             Number("int"),
 * //           ],
 * //           RuleAction: "STRING_VALUE",
 * //           Priority: Number("int"),
 * //         },
 * //         FirewallStatefulRule: {
 * //           RuleGroupArn: "STRING_VALUE",
 * //           Sources: "<ValueStringList>",
 * //           Destinations: "<ValueStringList>",
 * //           SourcePorts: "<PortRangeList>",
 * //           DestinationPorts: "<PortRangeList>",
 * //           Protocol: "STRING_VALUE",
 * //           RuleAction: "STRING_VALUE",
 * //           Direction: "STRING_VALUE",
 * //         },
 * //         ServiceName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ReturnPathComponents: [
 * //       {
 * //         SequenceNumber: Number("int"),
 * //         AclRule: {
 * //           Cidr: "STRING_VALUE",
 * //           Egress: true || false,
 * //           PortRange: "<PortRange>",
 * //           Protocol: "STRING_VALUE",
 * //           RuleAction: "STRING_VALUE",
 * //           RuleNumber: Number("int"),
 * //         },
 * //         AttachedTo: "<AnalysisComponent>",
 * //         Component: "<AnalysisComponent>",
 * //         DestinationVpc: "<AnalysisComponent>",
 * //         OutboundHeader: {
 * //           DestinationAddresses: "<IpAddressList>",
 * //           DestinationPortRanges: "<PortRangeList>",
 * //           Protocol: "STRING_VALUE",
 * //           SourceAddresses: "<IpAddressList>",
 * //           SourcePortRanges: "<PortRangeList>",
 * //         },
 * //         InboundHeader: {
 * //           DestinationAddresses: "<IpAddressList>",
 * //           DestinationPortRanges: "<PortRangeList>",
 * //           Protocol: "STRING_VALUE",
 * //           SourceAddresses: "<IpAddressList>",
 * //           SourcePortRanges: "<PortRangeList>",
 * //         },
 * //         RouteTableRoute: {
 * //           DestinationCidr: "STRING_VALUE",
 * //           DestinationPrefixListId: "STRING_VALUE",
 * //           EgressOnlyInternetGatewayId: "STRING_VALUE",
 * //           GatewayId: "STRING_VALUE",
 * //           InstanceId: "STRING_VALUE",
 * //           NatGatewayId: "STRING_VALUE",
 * //           NetworkInterfaceId: "STRING_VALUE",
 * //           Origin: "STRING_VALUE",
 * //           TransitGatewayId: "STRING_VALUE",
 * //           VpcPeeringConnectionId: "STRING_VALUE",
 * //           State: "STRING_VALUE",
 * //           CarrierGatewayId: "STRING_VALUE",
 * //           CoreNetworkArn: "STRING_VALUE",
 * //           LocalGatewayId: "STRING_VALUE",
 * //         },
 * //         SecurityGroupRule: {
 * //           Cidr: "STRING_VALUE",
 * //           Direction: "STRING_VALUE",
 * //           SecurityGroupId: "STRING_VALUE",
 * //           PortRange: "<PortRange>",
 * //           PrefixListId: "STRING_VALUE",
 * //           Protocol: "STRING_VALUE",
 * //         },
 * //         SourceVpc: "<AnalysisComponent>",
 * //         Subnet: "<AnalysisComponent>",
 * //         Vpc: "<AnalysisComponent>",
 * //         AdditionalDetails: [
 * //           {
 * //             AdditionalDetailType: "STRING_VALUE",
 * //             Component: "<AnalysisComponent>",
 * //             VpcEndpointService: "<AnalysisComponent>",
 * //             RuleOptions: [
 * //               {
 * //                 Keyword: "STRING_VALUE",
 * //                 Settings: "<StringList>",
 * //               },
 * //             ],
 * //             RuleGroupTypePairs: [
 * //               {
 * //                 RuleGroupArn: "STRING_VALUE",
 * //                 RuleGroupType: "STRING_VALUE",
 * //               },
 * //             ],
 * //             RuleGroupRuleOptionsPairs: [
 * //               {
 * //                 RuleGroupArn: "STRING_VALUE",
 * //                 RuleOptions: [
 * //                   {
 * //                     Keyword: "STRING_VALUE",
 * //                     Settings: "<StringList>",
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //             ServiceName: "STRING_VALUE",
 * //             LoadBalancers: [
 * //               "<AnalysisComponent>",
 * //             ],
 * //           },
 * //         ],
 * //         TransitGateway: "<AnalysisComponent>",
 * //         TransitGatewayRouteTableRoute: {
 * //           DestinationCidr: "STRING_VALUE",
 * //           State: "STRING_VALUE",
 * //           RouteOrigin: "STRING_VALUE",
 * //           PrefixListId: "STRING_VALUE",
 * //           AttachmentId: "STRING_VALUE",
 * //           ResourceId: "STRING_VALUE",
 * //           ResourceType: "STRING_VALUE",
 * //         },
 * //         Explanations: [
 * //           {
 * //             Acl: "<AnalysisComponent>",
 * //             AclRule: {
 * //               Cidr: "STRING_VALUE",
 * //               Egress: true || false,
 * //               PortRange: "<PortRange>",
 * //               Protocol: "STRING_VALUE",
 * //               RuleAction: "STRING_VALUE",
 * //               RuleNumber: Number("int"),
 * //             },
 * //             Address: "STRING_VALUE",
 * //             Addresses: "<IpAddressList>",
 * //             AttachedTo: "<AnalysisComponent>",
 * //             AvailabilityZones: "<ValueStringList>",
 * //             Cidrs: "<ValueStringList>",
 * //             Component: "<AnalysisComponent>",
 * //             CustomerGateway: "<AnalysisComponent>",
 * //             Destination: "<AnalysisComponent>",
 * //             DestinationVpc: "<AnalysisComponent>",
 * //             Direction: "STRING_VALUE",
 * //             ExplanationCode: "STRING_VALUE",
 * //             IngressRouteTable: "<AnalysisComponent>",
 * //             InternetGateway: "<AnalysisComponent>",
 * //             LoadBalancerArn: "STRING_VALUE",
 * //             ClassicLoadBalancerListener: {
 * //               LoadBalancerPort: Number("int"),
 * //               InstancePort: Number("int"),
 * //             },
 * //             LoadBalancerListenerPort: Number("int"),
 * //             LoadBalancerTarget: {
 * //               Address: "STRING_VALUE",
 * //               AvailabilityZone: "STRING_VALUE",
 * //               Instance: "<AnalysisComponent>",
 * //               Port: Number("int"),
 * //             },
 * //             LoadBalancerTargetGroup: "<AnalysisComponent>",
 * //             LoadBalancerTargetGroups: [
 * //               "<AnalysisComponent>",
 * //             ],
 * //             LoadBalancerTargetPort: Number("int"),
 * //             ElasticLoadBalancerListener: "<AnalysisComponent>",
 * //             MissingComponent: "STRING_VALUE",
 * //             NatGateway: "<AnalysisComponent>",
 * //             NetworkInterface: "<AnalysisComponent>",
 * //             PacketField: "STRING_VALUE",
 * //             VpcPeeringConnection: "<AnalysisComponent>",
 * //             Port: Number("int"),
 * //             PortRanges: "<PortRangeList>",
 * //             PrefixList: "<AnalysisComponent>",
 * //             Protocols: "<StringList>",
 * //             RouteTableRoute: {
 * //               DestinationCidr: "STRING_VALUE",
 * //               DestinationPrefixListId: "STRING_VALUE",
 * //               EgressOnlyInternetGatewayId: "STRING_VALUE",
 * //               GatewayId: "STRING_VALUE",
 * //               InstanceId: "STRING_VALUE",
 * //               NatGatewayId: "STRING_VALUE",
 * //               NetworkInterfaceId: "STRING_VALUE",
 * //               Origin: "STRING_VALUE",
 * //               TransitGatewayId: "STRING_VALUE",
 * //               VpcPeeringConnectionId: "STRING_VALUE",
 * //               State: "STRING_VALUE",
 * //               CarrierGatewayId: "STRING_VALUE",
 * //               CoreNetworkArn: "STRING_VALUE",
 * //               LocalGatewayId: "STRING_VALUE",
 * //             },
 * //             RouteTable: "<AnalysisComponent>",
 * //             SecurityGroup: "<AnalysisComponent>",
 * //             SecurityGroupRule: {
 * //               Cidr: "STRING_VALUE",
 * //               Direction: "STRING_VALUE",
 * //               SecurityGroupId: "STRING_VALUE",
 * //               PortRange: "<PortRange>",
 * //               PrefixListId: "STRING_VALUE",
 * //               Protocol: "STRING_VALUE",
 * //             },
 * //             SecurityGroups: "<AnalysisComponentList>",
 * //             SourceVpc: "<AnalysisComponent>",
 * //             State: "STRING_VALUE",
 * //             Subnet: "<AnalysisComponent>",
 * //             SubnetRouteTable: "<AnalysisComponent>",
 * //             Vpc: "<AnalysisComponent>",
 * //             VpcEndpoint: "<AnalysisComponent>",
 * //             VpnConnection: "<AnalysisComponent>",
 * //             VpnGateway: "<AnalysisComponent>",
 * //             TransitGateway: "<AnalysisComponent>",
 * //             TransitGatewayRouteTable: "<AnalysisComponent>",
 * //             TransitGatewayRouteTableRoute: {
 * //               DestinationCidr: "STRING_VALUE",
 * //               State: "STRING_VALUE",
 * //               RouteOrigin: "STRING_VALUE",
 * //               PrefixListId: "STRING_VALUE",
 * //               AttachmentId: "STRING_VALUE",
 * //               ResourceId: "STRING_VALUE",
 * //               ResourceType: "STRING_VALUE",
 * //             },
 * //             TransitGatewayAttachment: "<AnalysisComponent>",
 * //             ComponentAccount: "STRING_VALUE",
 * //             ComponentRegion: "STRING_VALUE",
 * //             FirewallStatelessRule: {
 * //               RuleGroupArn: "STRING_VALUE",
 * //               Sources: "<ValueStringList>",
 * //               Destinations: "<ValueStringList>",
 * //               SourcePorts: "<PortRangeList>",
 * //               DestinationPorts: "<PortRangeList>",
 * //               Protocols: [
 * //                 Number("int"),
 * //               ],
 * //               RuleAction: "STRING_VALUE",
 * //               Priority: Number("int"),
 * //             },
 * //             FirewallStatefulRule: {
 * //               RuleGroupArn: "STRING_VALUE",
 * //               Sources: "<ValueStringList>",
 * //               Destinations: "<ValueStringList>",
 * //               SourcePorts: "<PortRangeList>",
 * //               DestinationPorts: "<PortRangeList>",
 * //               Protocol: "STRING_VALUE",
 * //               RuleAction: "STRING_VALUE",
 * //               Direction: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         ElasticLoadBalancerListener: "<AnalysisComponent>",
 * //         FirewallStatelessRule: {
 * //           RuleGroupArn: "STRING_VALUE",
 * //           Sources: "<ValueStringList>",
 * //           Destinations: "<ValueStringList>",
 * //           SourcePorts: "<PortRangeList>",
 * //           DestinationPorts: "<PortRangeList>",
 * //           Protocols: [
 * //             Number("int"),
 * //           ],
 * //           RuleAction: "STRING_VALUE",
 * //           Priority: Number("int"),
 * //         },
 * //         FirewallStatefulRule: {
 * //           RuleGroupArn: "STRING_VALUE",
 * //           Sources: "<ValueStringList>",
 * //           Destinations: "<ValueStringList>",
 * //           SourcePorts: "<PortRangeList>",
 * //           DestinationPorts: "<PortRangeList>",
 * //           Protocol: "STRING_VALUE",
 * //           RuleAction: "STRING_VALUE",
 * //           Direction: "STRING_VALUE",
 * //         },
 * //         ServiceName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Explanations: [
 * //       {
 * //         Acl: "<AnalysisComponent>",
 * //         AclRule: {
 * //           Cidr: "STRING_VALUE",
 * //           Egress: true || false,
 * //           PortRange: "<PortRange>",
 * //           Protocol: "STRING_VALUE",
 * //           RuleAction: "STRING_VALUE",
 * //           RuleNumber: Number("int"),
 * //         },
 * //         Address: "STRING_VALUE",
 * //         Addresses: "<IpAddressList>",
 * //         AttachedTo: "<AnalysisComponent>",
 * //         AvailabilityZones: "<ValueStringList>",
 * //         Cidrs: "<ValueStringList>",
 * //         Component: "<AnalysisComponent>",
 * //         CustomerGateway: "<AnalysisComponent>",
 * //         Destination: "<AnalysisComponent>",
 * //         DestinationVpc: "<AnalysisComponent>",
 * //         Direction: "STRING_VALUE",
 * //         ExplanationCode: "STRING_VALUE",
 * //         IngressRouteTable: "<AnalysisComponent>",
 * //         InternetGateway: "<AnalysisComponent>",
 * //         LoadBalancerArn: "STRING_VALUE",
 * //         ClassicLoadBalancerListener: {
 * //           LoadBalancerPort: Number("int"),
 * //           InstancePort: Number("int"),
 * //         },
 * //         LoadBalancerListenerPort: Number("int"),
 * //         LoadBalancerTarget: {
 * //           Address: "STRING_VALUE",
 * //           AvailabilityZone: "STRING_VALUE",
 * //           Instance: "<AnalysisComponent>",
 * //           Port: Number("int"),
 * //         },
 * //         LoadBalancerTargetGroup: "<AnalysisComponent>",
 * //         LoadBalancerTargetGroups: "<AnalysisComponentList>",
 * //         LoadBalancerTargetPort: Number("int"),
 * //         ElasticLoadBalancerListener: "<AnalysisComponent>",
 * //         MissingComponent: "STRING_VALUE",
 * //         NatGateway: "<AnalysisComponent>",
 * //         NetworkInterface: "<AnalysisComponent>",
 * //         PacketField: "STRING_VALUE",
 * //         VpcPeeringConnection: "<AnalysisComponent>",
 * //         Port: Number("int"),
 * //         PortRanges: "<PortRangeList>",
 * //         PrefixList: "<AnalysisComponent>",
 * //         Protocols: "<StringList>",
 * //         RouteTableRoute: {
 * //           DestinationCidr: "STRING_VALUE",
 * //           DestinationPrefixListId: "STRING_VALUE",
 * //           EgressOnlyInternetGatewayId: "STRING_VALUE",
 * //           GatewayId: "STRING_VALUE",
 * //           InstanceId: "STRING_VALUE",
 * //           NatGatewayId: "STRING_VALUE",
 * //           NetworkInterfaceId: "STRING_VALUE",
 * //           Origin: "STRING_VALUE",
 * //           TransitGatewayId: "STRING_VALUE",
 * //           VpcPeeringConnectionId: "STRING_VALUE",
 * //           State: "STRING_VALUE",
 * //           CarrierGatewayId: "STRING_VALUE",
 * //           CoreNetworkArn: "STRING_VALUE",
 * //           LocalGatewayId: "STRING_VALUE",
 * //         },
 * //         RouteTable: "<AnalysisComponent>",
 * //         SecurityGroup: "<AnalysisComponent>",
 * //         SecurityGroupRule: {
 * //           Cidr: "STRING_VALUE",
 * //           Direction: "STRING_VALUE",
 * //           SecurityGroupId: "STRING_VALUE",
 * //           PortRange: "<PortRange>",
 * //           PrefixListId: "STRING_VALUE",
 * //           Protocol: "STRING_VALUE",
 * //         },
 * //         SecurityGroups: "<AnalysisComponentList>",
 * //         SourceVpc: "<AnalysisComponent>",
 * //         State: "STRING_VALUE",
 * //         Subnet: "<AnalysisComponent>",
 * //         SubnetRouteTable: "<AnalysisComponent>",
 * //         Vpc: "<AnalysisComponent>",
 * //         VpcEndpoint: "<AnalysisComponent>",
 * //         VpnConnection: "<AnalysisComponent>",
 * //         VpnGateway: "<AnalysisComponent>",
 * //         TransitGateway: "<AnalysisComponent>",
 * //         TransitGatewayRouteTable: "<AnalysisComponent>",
 * //         TransitGatewayRouteTableRoute: {
 * //           DestinationCidr: "STRING_VALUE",
 * //           State: "STRING_VALUE",
 * //           RouteOrigin: "STRING_VALUE",
 * //           PrefixListId: "STRING_VALUE",
 * //           AttachmentId: "STRING_VALUE",
 * //           ResourceId: "STRING_VALUE",
 * //           ResourceType: "STRING_VALUE",
 * //         },
 * //         TransitGatewayAttachment: "<AnalysisComponent>",
 * //         ComponentAccount: "STRING_VALUE",
 * //         ComponentRegion: "STRING_VALUE",
 * //         FirewallStatelessRule: {
 * //           RuleGroupArn: "STRING_VALUE",
 * //           Sources: "<ValueStringList>",
 * //           Destinations: "<ValueStringList>",
 * //           SourcePorts: "<PortRangeList>",
 * //           DestinationPorts: "<PortRangeList>",
 * //           Protocols: [
 * //             Number("int"),
 * //           ],
 * //           RuleAction: "STRING_VALUE",
 * //           Priority: Number("int"),
 * //         },
 * //         FirewallStatefulRule: {
 * //           RuleGroupArn: "STRING_VALUE",
 * //           Sources: "<ValueStringList>",
 * //           Destinations: "<ValueStringList>",
 * //           SourcePorts: "<PortRangeList>",
 * //           DestinationPorts: "<PortRangeList>",
 * //           Protocol: "STRING_VALUE",
 * //           RuleAction: "STRING_VALUE",
 * //           Direction: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     AlternatePathHints: [ // AlternatePathHintList
 * //       { // AlternatePathHint
 * //         ComponentId: "STRING_VALUE",
 * //         ComponentArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SuggestedAccounts: "<ValueStringList>",
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
 * @param StartNetworkInsightsAnalysisCommandInput - {@link StartNetworkInsightsAnalysisCommandInput}
 * @returns {@link StartNetworkInsightsAnalysisCommandOutput}
 * @see {@link StartNetworkInsightsAnalysisCommandInput} for command's `input` shape.
 * @see {@link StartNetworkInsightsAnalysisCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class StartNetworkInsightsAnalysisCommand extends $Command<
  StartNetworkInsightsAnalysisCommandInput,
  StartNetworkInsightsAnalysisCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: StartNetworkInsightsAnalysisCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartNetworkInsightsAnalysisCommandInput, StartNetworkInsightsAnalysisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartNetworkInsightsAnalysisCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "StartNetworkInsightsAnalysisCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "StartNetworkInsightsAnalysis",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: StartNetworkInsightsAnalysisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartNetworkInsightsAnalysisCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartNetworkInsightsAnalysisCommandOutput> {
    return de_StartNetworkInsightsAnalysisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
