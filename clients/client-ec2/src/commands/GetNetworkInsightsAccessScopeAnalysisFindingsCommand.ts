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
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  GetNetworkInsightsAccessScopeAnalysisFindingsRequest,
  GetNetworkInsightsAccessScopeAnalysisFindingsResult,
} from "../models/models_5";
import {
  de_GetNetworkInsightsAccessScopeAnalysisFindingsCommand,
  se_GetNetworkInsightsAccessScopeAnalysisFindingsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetNetworkInsightsAccessScopeAnalysisFindingsCommand}.
 */
export interface GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput
  extends GetNetworkInsightsAccessScopeAnalysisFindingsRequest {}
/**
 * @public
 *
 * The output of {@link GetNetworkInsightsAccessScopeAnalysisFindingsCommand}.
 */
export interface GetNetworkInsightsAccessScopeAnalysisFindingsCommandOutput
  extends GetNetworkInsightsAccessScopeAnalysisFindingsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the findings for the specified Network Access Scope analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetNetworkInsightsAccessScopeAnalysisFindingsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetNetworkInsightsAccessScopeAnalysisFindingsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetNetworkInsightsAccessScopeAnalysisFindingsRequest
 *   NetworkInsightsAccessScopeAnalysisId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new GetNetworkInsightsAccessScopeAnalysisFindingsCommand(input);
 * const response = await client.send(command);
 * // { // GetNetworkInsightsAccessScopeAnalysisFindingsResult
 * //   NetworkInsightsAccessScopeAnalysisId: "STRING_VALUE",
 * //   AnalysisStatus: "running" || "succeeded" || "failed",
 * //   AnalysisFindings: [ // AccessScopeAnalysisFindingList
 * //     { // AccessScopeAnalysisFinding
 * //       NetworkInsightsAccessScopeAnalysisId: "STRING_VALUE",
 * //       NetworkInsightsAccessScopeId: "STRING_VALUE",
 * //       FindingId: "STRING_VALUE",
 * //       FindingComponents: [ // PathComponentList
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
 * //               AvailabilityZones: [ // ValueStringList
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
 * //                 Sources: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 Destinations: [
 * //                   "STRING_VALUE",
 * //                 ],
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
 * //                 Sources: [
 * //                   "STRING_VALUE",
 * //                 ],
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
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput - {@link GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput}
 * @returns {@link GetNetworkInsightsAccessScopeAnalysisFindingsCommandOutput}
 * @see {@link GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput} for command's `input` shape.
 * @see {@link GetNetworkInsightsAccessScopeAnalysisFindingsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetNetworkInsightsAccessScopeAnalysisFindingsCommand extends $Command<
  GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput,
  GetNetworkInsightsAccessScopeAnalysisFindingsCommandOutput,
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
  constructor(readonly input: GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput) {
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
  ): Handler<
    GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput,
    GetNetworkInsightsAccessScopeAnalysisFindingsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetNetworkInsightsAccessScopeAnalysisFindingsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetNetworkInsightsAccessScopeAnalysisFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
    input: GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetNetworkInsightsAccessScopeAnalysisFindingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetNetworkInsightsAccessScopeAnalysisFindingsCommandOutput> {
    return de_GetNetworkInsightsAccessScopeAnalysisFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
