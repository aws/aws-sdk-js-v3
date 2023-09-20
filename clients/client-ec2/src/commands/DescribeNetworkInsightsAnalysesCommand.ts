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
import { DescribeNetworkInsightsAnalysesRequest, DescribeNetworkInsightsAnalysesResult } from "../models/models_4";
import {
  de_DescribeNetworkInsightsAnalysesCommand,
  se_DescribeNetworkInsightsAnalysesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeNetworkInsightsAnalysesCommand}.
 */
export interface DescribeNetworkInsightsAnalysesCommandInput extends DescribeNetworkInsightsAnalysesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNetworkInsightsAnalysesCommand}.
 */
export interface DescribeNetworkInsightsAnalysesCommandOutput
  extends DescribeNetworkInsightsAnalysesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more of your network insights analyses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkInsightsAnalysesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkInsightsAnalysesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeNetworkInsightsAnalysesRequest
 *   NetworkInsightsAnalysisIds: [ // NetworkInsightsAnalysisIdList
 *     "STRING_VALUE",
 *   ],
 *   NetworkInsightsPathId: "STRING_VALUE",
 *   AnalysisStartTime: new Date("TIMESTAMP"),
 *   AnalysisEndTime: new Date("TIMESTAMP"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   DryRun: true || false,
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeNetworkInsightsAnalysesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNetworkInsightsAnalysesResult
 * //   NetworkInsightsAnalyses: [ // NetworkInsightsAnalysisList
 * //     { // NetworkInsightsAnalysis
 * //       NetworkInsightsAnalysisId: "STRING_VALUE",
 * //       NetworkInsightsAnalysisArn: "STRING_VALUE",
 * //       NetworkInsightsPathId: "STRING_VALUE",
 * //       AdditionalAccounts: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       FilterInArns: [ // ArnList
 * //         "STRING_VALUE",
 * //       ],
 * //       StartDate: new Date("TIMESTAMP"),
 * //       Status: "running" || "succeeded" || "failed",
 * //       StatusMessage: "STRING_VALUE",
 * //       WarningMessage: "STRING_VALUE",
 * //       NetworkPathFound: true || false,
 * //       ForwardPathComponents: [ // PathComponentList
 * //         { // PathComponent
 * //           SequenceNumber: Number("int"),
 * //           AclRule: { // AnalysisAclRule
 * //             Cidr: "STRING_VALUE",
 * //             Egress: true || false,
 * //             PortRange: { // PortRange
 * //               From: Number("int"),
 * //               To: Number("int"),
 * //             },
 * //             Protocol: "STRING_VALUE",
 * //             RuleAction: "STRING_VALUE",
 * //             RuleNumber: Number("int"),
 * //           },
 * //           AttachedTo: { // AnalysisComponent
 * //             Id: "STRING_VALUE",
 * //             Arn: "STRING_VALUE",
 * //             Name: "STRING_VALUE",
 * //           },
 * //           Component: {
 * //             Id: "STRING_VALUE",
 * //             Arn: "STRING_VALUE",
 * //             Name: "STRING_VALUE",
 * //           },
 * //           DestinationVpc: {
 * //             Id: "STRING_VALUE",
 * //             Arn: "STRING_VALUE",
 * //             Name: "STRING_VALUE",
 * //           },
 * //           OutboundHeader: { // AnalysisPacketHeader
 * //             DestinationAddresses: [ // IpAddressList
 * //               "STRING_VALUE",
 * //             ],
 * //             DestinationPortRanges: [ // PortRangeList
 * //               {
 * //                 From: Number("int"),
 * //                 To: Number("int"),
 * //               },
 * //             ],
 * //             Protocol: "STRING_VALUE",
 * //             SourceAddresses: [
 * //               "STRING_VALUE",
 * //             ],
 * //             SourcePortRanges: [
 * //               {
 * //                 From: Number("int"),
 * //                 To: Number("int"),
 * //               },
 * //             ],
 * //           },
 * //           InboundHeader: {
 * //             DestinationAddresses: [
 * //               "STRING_VALUE",
 * //             ],
 * //             DestinationPortRanges: [
 * //               {
 * //                 From: Number("int"),
 * //                 To: Number("int"),
 * //               },
 * //             ],
 * //             Protocol: "STRING_VALUE",
 * //             SourceAddresses: [
 * //               "STRING_VALUE",
 * //             ],
 * //             SourcePortRanges: [
 * //               {
 * //                 From: Number("int"),
 * //                 To: Number("int"),
 * //               },
 * //             ],
 * //           },
 * //           RouteTableRoute: { // AnalysisRouteTableRoute
 * //             DestinationCidr: "STRING_VALUE",
 * //             DestinationPrefixListId: "STRING_VALUE",
 * //             EgressOnlyInternetGatewayId: "STRING_VALUE",
 * //             GatewayId: "STRING_VALUE",
 * //             InstanceId: "STRING_VALUE",
 * //             NatGatewayId: "STRING_VALUE",
 * //             NetworkInterfaceId: "STRING_VALUE",
 * //             Origin: "STRING_VALUE",
 * //             TransitGatewayId: "STRING_VALUE",
 * //             VpcPeeringConnectionId: "STRING_VALUE",
 * //             State: "STRING_VALUE",
 * //             CarrierGatewayId: "STRING_VALUE",
 * //             CoreNetworkArn: "STRING_VALUE",
 * //             LocalGatewayId: "STRING_VALUE",
 * //           },
 * //           SecurityGroupRule: { // AnalysisSecurityGroupRule
 * //             Cidr: "STRING_VALUE",
 * //             Direction: "STRING_VALUE",
 * //             SecurityGroupId: "STRING_VALUE",
 * //             PortRange: "<PortRange>",
 * //             PrefixListId: "STRING_VALUE",
 * //             Protocol: "STRING_VALUE",
 * //           },
 * //           SourceVpc: {
 * //             Id: "STRING_VALUE",
 * //             Arn: "STRING_VALUE",
 * //             Name: "STRING_VALUE",
 * //           },
 * //           Subnet: {
 * //             Id: "STRING_VALUE",
 * //             Arn: "STRING_VALUE",
 * //             Name: "STRING_VALUE",
 * //           },
 * //           Vpc: "<AnalysisComponent>",
 * //           AdditionalDetails: [ // AdditionalDetailList
 * //             { // AdditionalDetail
 * //               AdditionalDetailType: "STRING_VALUE",
 * //               Component: "<AnalysisComponent>",
 * //               VpcEndpointService: "<AnalysisComponent>",
 * //               RuleOptions: [ // RuleOptionList
 * //                 { // RuleOption
 * //                   Keyword: "STRING_VALUE",
 * //                   Settings: [ // StringList
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               ],
 * //               RuleGroupTypePairs: [ // RuleGroupTypePairList
 * //                 { // RuleGroupTypePair
 * //                   RuleGroupArn: "STRING_VALUE",
 * //                   RuleGroupType: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               RuleGroupRuleOptionsPairs: [ // RuleGroupRuleOptionsPairList
 * //                 { // RuleGroupRuleOptionsPair
 * //                   RuleGroupArn: "STRING_VALUE",
 * //                   RuleOptions: [
 * //                     {
 * //                       Keyword: "STRING_VALUE",
 * //                       Settings: [
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                   ],
 * //                 },
 * //               ],
 * //               ServiceName: "STRING_VALUE",
 * //               LoadBalancers: [ // AnalysisComponentList
 * //                 "<AnalysisComponent>",
 * //               ],
 * //             },
 * //           ],
 * //           TransitGateway: "<AnalysisComponent>",
 * //           TransitGatewayRouteTableRoute: { // TransitGatewayRouteTableRoute
 * //             DestinationCidr: "STRING_VALUE",
 * //             State: "STRING_VALUE",
 * //             RouteOrigin: "STRING_VALUE",
 * //             PrefixListId: "STRING_VALUE",
 * //             AttachmentId: "STRING_VALUE",
 * //             ResourceId: "STRING_VALUE",
 * //             ResourceType: "STRING_VALUE",
 * //           },
 * //           Explanations: [ // ExplanationList
 * //             { // Explanation
 * //               Acl: "<AnalysisComponent>",
 * //               AclRule: {
 * //                 Cidr: "STRING_VALUE",
 * //                 Egress: true || false,
 * //                 PortRange: "<PortRange>",
 * //                 Protocol: "STRING_VALUE",
 * //                 RuleAction: "STRING_VALUE",
 * //                 RuleNumber: Number("int"),
 * //               },
 * //               Address: "STRING_VALUE",
 * //               Addresses: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               AttachedTo: "<AnalysisComponent>",
 * //               AvailabilityZones: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               Cidrs: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               Component: "<AnalysisComponent>",
 * //               CustomerGateway: "<AnalysisComponent>",
 * //               Destination: "<AnalysisComponent>",
 * //               DestinationVpc: "<AnalysisComponent>",
 * //               Direction: "STRING_VALUE",
 * //               ExplanationCode: "STRING_VALUE",
 * //               IngressRouteTable: "<AnalysisComponent>",
 * //               InternetGateway: "<AnalysisComponent>",
 * //               LoadBalancerArn: "STRING_VALUE",
 * //               ClassicLoadBalancerListener: { // AnalysisLoadBalancerListener
 * //                 LoadBalancerPort: Number("int"),
 * //                 InstancePort: Number("int"),
 * //               },
 * //               LoadBalancerListenerPort: Number("int"),
 * //               LoadBalancerTarget: { // AnalysisLoadBalancerTarget
 * //                 Address: "STRING_VALUE",
 * //                 AvailabilityZone: "STRING_VALUE",
 * //                 Instance: "<AnalysisComponent>",
 * //                 Port: Number("int"),
 * //               },
 * //               LoadBalancerTargetGroup: "<AnalysisComponent>",
 * //               LoadBalancerTargetGroups: [
 * //                 "<AnalysisComponent>",
 * //               ],
 * //               LoadBalancerTargetPort: Number("int"),
 * //               ElasticLoadBalancerListener: "<AnalysisComponent>",
 * //               MissingComponent: "STRING_VALUE",
 * //               NatGateway: "<AnalysisComponent>",
 * //               NetworkInterface: "<AnalysisComponent>",
 * //               PacketField: "STRING_VALUE",
 * //               VpcPeeringConnection: "<AnalysisComponent>",
 * //               Port: Number("int"),
 * //               PortRanges: [
 * //                 "<PortRange>",
 * //               ],
 * //               PrefixList: "<AnalysisComponent>",
 * //               Protocols: "<StringList>",
 * //               RouteTableRoute: {
 * //                 DestinationCidr: "STRING_VALUE",
 * //                 DestinationPrefixListId: "STRING_VALUE",
 * //                 EgressOnlyInternetGatewayId: "STRING_VALUE",
 * //                 GatewayId: "STRING_VALUE",
 * //                 InstanceId: "STRING_VALUE",
 * //                 NatGatewayId: "STRING_VALUE",
 * //                 NetworkInterfaceId: "STRING_VALUE",
 * //                 Origin: "STRING_VALUE",
 * //                 TransitGatewayId: "STRING_VALUE",
 * //                 VpcPeeringConnectionId: "STRING_VALUE",
 * //                 State: "STRING_VALUE",
 * //                 CarrierGatewayId: "STRING_VALUE",
 * //                 CoreNetworkArn: "STRING_VALUE",
 * //                 LocalGatewayId: "STRING_VALUE",
 * //               },
 * //               RouteTable: "<AnalysisComponent>",
 * //               SecurityGroup: "<AnalysisComponent>",
 * //               SecurityGroupRule: {
 * //                 Cidr: "STRING_VALUE",
 * //                 Direction: "STRING_VALUE",
 * //                 SecurityGroupId: "STRING_VALUE",
 * //                 PortRange: "<PortRange>",
 * //                 PrefixListId: "STRING_VALUE",
 * //                 Protocol: "STRING_VALUE",
 * //               },
 * //               SecurityGroups: [
 * //                 "<AnalysisComponent>",
 * //               ],
 * //               SourceVpc: "<AnalysisComponent>",
 * //               State: "STRING_VALUE",
 * //               Subnet: "<AnalysisComponent>",
 * //               SubnetRouteTable: "<AnalysisComponent>",
 * //               Vpc: "<AnalysisComponent>",
 * //               VpcEndpoint: "<AnalysisComponent>",
 * //               VpnConnection: "<AnalysisComponent>",
 * //               VpnGateway: "<AnalysisComponent>",
 * //               TransitGateway: "<AnalysisComponent>",
 * //               TransitGatewayRouteTable: "<AnalysisComponent>",
 * //               TransitGatewayRouteTableRoute: {
 * //                 DestinationCidr: "STRING_VALUE",
 * //                 State: "STRING_VALUE",
 * //                 RouteOrigin: "STRING_VALUE",
 * //                 PrefixListId: "STRING_VALUE",
 * //                 AttachmentId: "STRING_VALUE",
 * //                 ResourceId: "STRING_VALUE",
 * //                 ResourceType: "STRING_VALUE",
 * //               },
 * //               TransitGatewayAttachment: "<AnalysisComponent>",
 * //               ComponentAccount: "STRING_VALUE",
 * //               ComponentRegion: "STRING_VALUE",
 * //               FirewallStatelessRule: { // FirewallStatelessRule
 * //                 RuleGroupArn: "STRING_VALUE",
 * //                 Sources: "<ValueStringList>",
 * //                 Destinations: "<ValueStringList>",
 * //                 SourcePorts: "<PortRangeList>",
 * //                 DestinationPorts: "<PortRangeList>",
 * //                 Protocols: [ // ProtocolIntList
 * //                   Number("int"),
 * //                 ],
 * //                 RuleAction: "STRING_VALUE",
 * //                 Priority: Number("int"),
 * //               },
 * //               FirewallStatefulRule: { // FirewallStatefulRule
 * //                 RuleGroupArn: "STRING_VALUE",
 * //                 Sources: "<ValueStringList>",
 * //                 Destinations: "<ValueStringList>",
 * //                 SourcePorts: "<PortRangeList>",
 * //                 DestinationPorts: "<PortRangeList>",
 * //                 Protocol: "STRING_VALUE",
 * //                 RuleAction: "STRING_VALUE",
 * //                 Direction: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           ElasticLoadBalancerListener: "<AnalysisComponent>",
 * //           FirewallStatelessRule: {
 * //             RuleGroupArn: "STRING_VALUE",
 * //             Sources: "<ValueStringList>",
 * //             Destinations: "<ValueStringList>",
 * //             SourcePorts: "<PortRangeList>",
 * //             DestinationPorts: "<PortRangeList>",
 * //             Protocols: [
 * //               Number("int"),
 * //             ],
 * //             RuleAction: "STRING_VALUE",
 * //             Priority: Number("int"),
 * //           },
 * //           FirewallStatefulRule: {
 * //             RuleGroupArn: "STRING_VALUE",
 * //             Sources: "<ValueStringList>",
 * //             Destinations: "<ValueStringList>",
 * //             SourcePorts: "<PortRangeList>",
 * //             DestinationPorts: "<PortRangeList>",
 * //             Protocol: "STRING_VALUE",
 * //             RuleAction: "STRING_VALUE",
 * //             Direction: "STRING_VALUE",
 * //           },
 * //           ServiceName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ReturnPathComponents: [
 * //         {
 * //           SequenceNumber: Number("int"),
 * //           AclRule: {
 * //             Cidr: "STRING_VALUE",
 * //             Egress: true || false,
 * //             PortRange: "<PortRange>",
 * //             Protocol: "STRING_VALUE",
 * //             RuleAction: "STRING_VALUE",
 * //             RuleNumber: Number("int"),
 * //           },
 * //           AttachedTo: "<AnalysisComponent>",
 * //           Component: "<AnalysisComponent>",
 * //           DestinationVpc: "<AnalysisComponent>",
 * //           OutboundHeader: {
 * //             DestinationAddresses: "<IpAddressList>",
 * //             DestinationPortRanges: "<PortRangeList>",
 * //             Protocol: "STRING_VALUE",
 * //             SourceAddresses: "<IpAddressList>",
 * //             SourcePortRanges: "<PortRangeList>",
 * //           },
 * //           InboundHeader: {
 * //             DestinationAddresses: "<IpAddressList>",
 * //             DestinationPortRanges: "<PortRangeList>",
 * //             Protocol: "STRING_VALUE",
 * //             SourceAddresses: "<IpAddressList>",
 * //             SourcePortRanges: "<PortRangeList>",
 * //           },
 * //           RouteTableRoute: {
 * //             DestinationCidr: "STRING_VALUE",
 * //             DestinationPrefixListId: "STRING_VALUE",
 * //             EgressOnlyInternetGatewayId: "STRING_VALUE",
 * //             GatewayId: "STRING_VALUE",
 * //             InstanceId: "STRING_VALUE",
 * //             NatGatewayId: "STRING_VALUE",
 * //             NetworkInterfaceId: "STRING_VALUE",
 * //             Origin: "STRING_VALUE",
 * //             TransitGatewayId: "STRING_VALUE",
 * //             VpcPeeringConnectionId: "STRING_VALUE",
 * //             State: "STRING_VALUE",
 * //             CarrierGatewayId: "STRING_VALUE",
 * //             CoreNetworkArn: "STRING_VALUE",
 * //             LocalGatewayId: "STRING_VALUE",
 * //           },
 * //           SecurityGroupRule: {
 * //             Cidr: "STRING_VALUE",
 * //             Direction: "STRING_VALUE",
 * //             SecurityGroupId: "STRING_VALUE",
 * //             PortRange: "<PortRange>",
 * //             PrefixListId: "STRING_VALUE",
 * //             Protocol: "STRING_VALUE",
 * //           },
 * //           SourceVpc: "<AnalysisComponent>",
 * //           Subnet: "<AnalysisComponent>",
 * //           Vpc: "<AnalysisComponent>",
 * //           AdditionalDetails: [
 * //             {
 * //               AdditionalDetailType: "STRING_VALUE",
 * //               Component: "<AnalysisComponent>",
 * //               VpcEndpointService: "<AnalysisComponent>",
 * //               RuleOptions: [
 * //                 {
 * //                   Keyword: "STRING_VALUE",
 * //                   Settings: "<StringList>",
 * //                 },
 * //               ],
 * //               RuleGroupTypePairs: [
 * //                 {
 * //                   RuleGroupArn: "STRING_VALUE",
 * //                   RuleGroupType: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               RuleGroupRuleOptionsPairs: [
 * //                 {
 * //                   RuleGroupArn: "STRING_VALUE",
 * //                   RuleOptions: [
 * //                     {
 * //                       Keyword: "STRING_VALUE",
 * //                       Settings: "<StringList>",
 * //                     },
 * //                   ],
 * //                 },
 * //               ],
 * //               ServiceName: "STRING_VALUE",
 * //               LoadBalancers: [
 * //                 "<AnalysisComponent>",
 * //               ],
 * //             },
 * //           ],
 * //           TransitGateway: "<AnalysisComponent>",
 * //           TransitGatewayRouteTableRoute: {
 * //             DestinationCidr: "STRING_VALUE",
 * //             State: "STRING_VALUE",
 * //             RouteOrigin: "STRING_VALUE",
 * //             PrefixListId: "STRING_VALUE",
 * //             AttachmentId: "STRING_VALUE",
 * //             ResourceId: "STRING_VALUE",
 * //             ResourceType: "STRING_VALUE",
 * //           },
 * //           Explanations: [
 * //             {
 * //               Acl: "<AnalysisComponent>",
 * //               AclRule: {
 * //                 Cidr: "STRING_VALUE",
 * //                 Egress: true || false,
 * //                 PortRange: "<PortRange>",
 * //                 Protocol: "STRING_VALUE",
 * //                 RuleAction: "STRING_VALUE",
 * //                 RuleNumber: Number("int"),
 * //               },
 * //               Address: "STRING_VALUE",
 * //               Addresses: "<IpAddressList>",
 * //               AttachedTo: "<AnalysisComponent>",
 * //               AvailabilityZones: "<ValueStringList>",
 * //               Cidrs: "<ValueStringList>",
 * //               Component: "<AnalysisComponent>",
 * //               CustomerGateway: "<AnalysisComponent>",
 * //               Destination: "<AnalysisComponent>",
 * //               DestinationVpc: "<AnalysisComponent>",
 * //               Direction: "STRING_VALUE",
 * //               ExplanationCode: "STRING_VALUE",
 * //               IngressRouteTable: "<AnalysisComponent>",
 * //               InternetGateway: "<AnalysisComponent>",
 * //               LoadBalancerArn: "STRING_VALUE",
 * //               ClassicLoadBalancerListener: {
 * //                 LoadBalancerPort: Number("int"),
 * //                 InstancePort: Number("int"),
 * //               },
 * //               LoadBalancerListenerPort: Number("int"),
 * //               LoadBalancerTarget: {
 * //                 Address: "STRING_VALUE",
 * //                 AvailabilityZone: "STRING_VALUE",
 * //                 Instance: "<AnalysisComponent>",
 * //                 Port: Number("int"),
 * //               },
 * //               LoadBalancerTargetGroup: "<AnalysisComponent>",
 * //               LoadBalancerTargetGroups: [
 * //                 "<AnalysisComponent>",
 * //               ],
 * //               LoadBalancerTargetPort: Number("int"),
 * //               ElasticLoadBalancerListener: "<AnalysisComponent>",
 * //               MissingComponent: "STRING_VALUE",
 * //               NatGateway: "<AnalysisComponent>",
 * //               NetworkInterface: "<AnalysisComponent>",
 * //               PacketField: "STRING_VALUE",
 * //               VpcPeeringConnection: "<AnalysisComponent>",
 * //               Port: Number("int"),
 * //               PortRanges: "<PortRangeList>",
 * //               PrefixList: "<AnalysisComponent>",
 * //               Protocols: "<StringList>",
 * //               RouteTableRoute: {
 * //                 DestinationCidr: "STRING_VALUE",
 * //                 DestinationPrefixListId: "STRING_VALUE",
 * //                 EgressOnlyInternetGatewayId: "STRING_VALUE",
 * //                 GatewayId: "STRING_VALUE",
 * //                 InstanceId: "STRING_VALUE",
 * //                 NatGatewayId: "STRING_VALUE",
 * //                 NetworkInterfaceId: "STRING_VALUE",
 * //                 Origin: "STRING_VALUE",
 * //                 TransitGatewayId: "STRING_VALUE",
 * //                 VpcPeeringConnectionId: "STRING_VALUE",
 * //                 State: "STRING_VALUE",
 * //                 CarrierGatewayId: "STRING_VALUE",
 * //                 CoreNetworkArn: "STRING_VALUE",
 * //                 LocalGatewayId: "STRING_VALUE",
 * //               },
 * //               RouteTable: "<AnalysisComponent>",
 * //               SecurityGroup: "<AnalysisComponent>",
 * //               SecurityGroupRule: {
 * //                 Cidr: "STRING_VALUE",
 * //                 Direction: "STRING_VALUE",
 * //                 SecurityGroupId: "STRING_VALUE",
 * //                 PortRange: "<PortRange>",
 * //                 PrefixListId: "STRING_VALUE",
 * //                 Protocol: "STRING_VALUE",
 * //               },
 * //               SecurityGroups: "<AnalysisComponentList>",
 * //               SourceVpc: "<AnalysisComponent>",
 * //               State: "STRING_VALUE",
 * //               Subnet: "<AnalysisComponent>",
 * //               SubnetRouteTable: "<AnalysisComponent>",
 * //               Vpc: "<AnalysisComponent>",
 * //               VpcEndpoint: "<AnalysisComponent>",
 * //               VpnConnection: "<AnalysisComponent>",
 * //               VpnGateway: "<AnalysisComponent>",
 * //               TransitGateway: "<AnalysisComponent>",
 * //               TransitGatewayRouteTable: "<AnalysisComponent>",
 * //               TransitGatewayRouteTableRoute: {
 * //                 DestinationCidr: "STRING_VALUE",
 * //                 State: "STRING_VALUE",
 * //                 RouteOrigin: "STRING_VALUE",
 * //                 PrefixListId: "STRING_VALUE",
 * //                 AttachmentId: "STRING_VALUE",
 * //                 ResourceId: "STRING_VALUE",
 * //                 ResourceType: "STRING_VALUE",
 * //               },
 * //               TransitGatewayAttachment: "<AnalysisComponent>",
 * //               ComponentAccount: "STRING_VALUE",
 * //               ComponentRegion: "STRING_VALUE",
 * //               FirewallStatelessRule: {
 * //                 RuleGroupArn: "STRING_VALUE",
 * //                 Sources: "<ValueStringList>",
 * //                 Destinations: "<ValueStringList>",
 * //                 SourcePorts: "<PortRangeList>",
 * //                 DestinationPorts: "<PortRangeList>",
 * //                 Protocols: [
 * //                   Number("int"),
 * //                 ],
 * //                 RuleAction: "STRING_VALUE",
 * //                 Priority: Number("int"),
 * //               },
 * //               FirewallStatefulRule: {
 * //                 RuleGroupArn: "STRING_VALUE",
 * //                 Sources: "<ValueStringList>",
 * //                 Destinations: "<ValueStringList>",
 * //                 SourcePorts: "<PortRangeList>",
 * //                 DestinationPorts: "<PortRangeList>",
 * //                 Protocol: "STRING_VALUE",
 * //                 RuleAction: "STRING_VALUE",
 * //                 Direction: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           ElasticLoadBalancerListener: "<AnalysisComponent>",
 * //           FirewallStatelessRule: {
 * //             RuleGroupArn: "STRING_VALUE",
 * //             Sources: "<ValueStringList>",
 * //             Destinations: "<ValueStringList>",
 * //             SourcePorts: "<PortRangeList>",
 * //             DestinationPorts: "<PortRangeList>",
 * //             Protocols: [
 * //               Number("int"),
 * //             ],
 * //             RuleAction: "STRING_VALUE",
 * //             Priority: Number("int"),
 * //           },
 * //           FirewallStatefulRule: {
 * //             RuleGroupArn: "STRING_VALUE",
 * //             Sources: "<ValueStringList>",
 * //             Destinations: "<ValueStringList>",
 * //             SourcePorts: "<PortRangeList>",
 * //             DestinationPorts: "<PortRangeList>",
 * //             Protocol: "STRING_VALUE",
 * //             RuleAction: "STRING_VALUE",
 * //             Direction: "STRING_VALUE",
 * //           },
 * //           ServiceName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Explanations: [
 * //         {
 * //           Acl: "<AnalysisComponent>",
 * //           AclRule: {
 * //             Cidr: "STRING_VALUE",
 * //             Egress: true || false,
 * //             PortRange: "<PortRange>",
 * //             Protocol: "STRING_VALUE",
 * //             RuleAction: "STRING_VALUE",
 * //             RuleNumber: Number("int"),
 * //           },
 * //           Address: "STRING_VALUE",
 * //           Addresses: "<IpAddressList>",
 * //           AttachedTo: "<AnalysisComponent>",
 * //           AvailabilityZones: "<ValueStringList>",
 * //           Cidrs: "<ValueStringList>",
 * //           Component: "<AnalysisComponent>",
 * //           CustomerGateway: "<AnalysisComponent>",
 * //           Destination: "<AnalysisComponent>",
 * //           DestinationVpc: "<AnalysisComponent>",
 * //           Direction: "STRING_VALUE",
 * //           ExplanationCode: "STRING_VALUE",
 * //           IngressRouteTable: "<AnalysisComponent>",
 * //           InternetGateway: "<AnalysisComponent>",
 * //           LoadBalancerArn: "STRING_VALUE",
 * //           ClassicLoadBalancerListener: {
 * //             LoadBalancerPort: Number("int"),
 * //             InstancePort: Number("int"),
 * //           },
 * //           LoadBalancerListenerPort: Number("int"),
 * //           LoadBalancerTarget: {
 * //             Address: "STRING_VALUE",
 * //             AvailabilityZone: "STRING_VALUE",
 * //             Instance: "<AnalysisComponent>",
 * //             Port: Number("int"),
 * //           },
 * //           LoadBalancerTargetGroup: "<AnalysisComponent>",
 * //           LoadBalancerTargetGroups: "<AnalysisComponentList>",
 * //           LoadBalancerTargetPort: Number("int"),
 * //           ElasticLoadBalancerListener: "<AnalysisComponent>",
 * //           MissingComponent: "STRING_VALUE",
 * //           NatGateway: "<AnalysisComponent>",
 * //           NetworkInterface: "<AnalysisComponent>",
 * //           PacketField: "STRING_VALUE",
 * //           VpcPeeringConnection: "<AnalysisComponent>",
 * //           Port: Number("int"),
 * //           PortRanges: "<PortRangeList>",
 * //           PrefixList: "<AnalysisComponent>",
 * //           Protocols: "<StringList>",
 * //           RouteTableRoute: {
 * //             DestinationCidr: "STRING_VALUE",
 * //             DestinationPrefixListId: "STRING_VALUE",
 * //             EgressOnlyInternetGatewayId: "STRING_VALUE",
 * //             GatewayId: "STRING_VALUE",
 * //             InstanceId: "STRING_VALUE",
 * //             NatGatewayId: "STRING_VALUE",
 * //             NetworkInterfaceId: "STRING_VALUE",
 * //             Origin: "STRING_VALUE",
 * //             TransitGatewayId: "STRING_VALUE",
 * //             VpcPeeringConnectionId: "STRING_VALUE",
 * //             State: "STRING_VALUE",
 * //             CarrierGatewayId: "STRING_VALUE",
 * //             CoreNetworkArn: "STRING_VALUE",
 * //             LocalGatewayId: "STRING_VALUE",
 * //           },
 * //           RouteTable: "<AnalysisComponent>",
 * //           SecurityGroup: "<AnalysisComponent>",
 * //           SecurityGroupRule: {
 * //             Cidr: "STRING_VALUE",
 * //             Direction: "STRING_VALUE",
 * //             SecurityGroupId: "STRING_VALUE",
 * //             PortRange: "<PortRange>",
 * //             PrefixListId: "STRING_VALUE",
 * //             Protocol: "STRING_VALUE",
 * //           },
 * //           SecurityGroups: "<AnalysisComponentList>",
 * //           SourceVpc: "<AnalysisComponent>",
 * //           State: "STRING_VALUE",
 * //           Subnet: "<AnalysisComponent>",
 * //           SubnetRouteTable: "<AnalysisComponent>",
 * //           Vpc: "<AnalysisComponent>",
 * //           VpcEndpoint: "<AnalysisComponent>",
 * //           VpnConnection: "<AnalysisComponent>",
 * //           VpnGateway: "<AnalysisComponent>",
 * //           TransitGateway: "<AnalysisComponent>",
 * //           TransitGatewayRouteTable: "<AnalysisComponent>",
 * //           TransitGatewayRouteTableRoute: {
 * //             DestinationCidr: "STRING_VALUE",
 * //             State: "STRING_VALUE",
 * //             RouteOrigin: "STRING_VALUE",
 * //             PrefixListId: "STRING_VALUE",
 * //             AttachmentId: "STRING_VALUE",
 * //             ResourceId: "STRING_VALUE",
 * //             ResourceType: "STRING_VALUE",
 * //           },
 * //           TransitGatewayAttachment: "<AnalysisComponent>",
 * //           ComponentAccount: "STRING_VALUE",
 * //           ComponentRegion: "STRING_VALUE",
 * //           FirewallStatelessRule: {
 * //             RuleGroupArn: "STRING_VALUE",
 * //             Sources: "<ValueStringList>",
 * //             Destinations: "<ValueStringList>",
 * //             SourcePorts: "<PortRangeList>",
 * //             DestinationPorts: "<PortRangeList>",
 * //             Protocols: [
 * //               Number("int"),
 * //             ],
 * //             RuleAction: "STRING_VALUE",
 * //             Priority: Number("int"),
 * //           },
 * //           FirewallStatefulRule: {
 * //             RuleGroupArn: "STRING_VALUE",
 * //             Sources: "<ValueStringList>",
 * //             Destinations: "<ValueStringList>",
 * //             SourcePorts: "<PortRangeList>",
 * //             DestinationPorts: "<PortRangeList>",
 * //             Protocol: "STRING_VALUE",
 * //             RuleAction: "STRING_VALUE",
 * //             Direction: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       AlternatePathHints: [ // AlternatePathHintList
 * //         { // AlternatePathHint
 * //           ComponentId: "STRING_VALUE",
 * //           ComponentArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SuggestedAccounts: "<ValueStringList>",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeNetworkInsightsAnalysesCommandInput - {@link DescribeNetworkInsightsAnalysesCommandInput}
 * @returns {@link DescribeNetworkInsightsAnalysesCommandOutput}
 * @see {@link DescribeNetworkInsightsAnalysesCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkInsightsAnalysesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeNetworkInsightsAnalysesCommand extends $Command<
  DescribeNetworkInsightsAnalysesCommandInput,
  DescribeNetworkInsightsAnalysesCommandOutput,
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
  constructor(readonly input: DescribeNetworkInsightsAnalysesCommandInput) {
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
  ): Handler<DescribeNetworkInsightsAnalysesCommandInput, DescribeNetworkInsightsAnalysesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeNetworkInsightsAnalysesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeNetworkInsightsAnalysesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeNetworkInsightsAnalyses",
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
  private serialize(
    input: DescribeNetworkInsightsAnalysesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeNetworkInsightsAnalysesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeNetworkInsightsAnalysesCommandOutput> {
    return de_DescribeNetworkInsightsAnalysesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
