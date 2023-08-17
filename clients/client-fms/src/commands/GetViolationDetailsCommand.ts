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

import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { GetViolationDetailsRequest, GetViolationDetailsResponse } from "../models/models_0";
import { de_GetViolationDetailsCommand, se_GetViolationDetailsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetViolationDetailsCommand}.
 */
export interface GetViolationDetailsCommandInput extends GetViolationDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetViolationDetailsCommand}.
 */
export interface GetViolationDetailsCommandOutput extends GetViolationDetailsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetViolationDetailsCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetViolationDetailsCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const input = { // GetViolationDetailsRequest
 *   PolicyId: "STRING_VALUE", // required
 *   MemberAccount: "STRING_VALUE", // required
 *   ResourceId: "STRING_VALUE", // required
 *   ResourceType: "STRING_VALUE", // required
 * };
 * const command = new GetViolationDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetViolationDetailsResponse
 * //   ViolationDetail: { // ViolationDetail
 * //     PolicyId: "STRING_VALUE", // required
 * //     MemberAccount: "STRING_VALUE", // required
 * //     ResourceId: "STRING_VALUE", // required
 * //     ResourceType: "STRING_VALUE", // required
 * //     ResourceViolations: [ // ResourceViolations // required
 * //       { // ResourceViolation
 * //         AwsVPCSecurityGroupViolation: { // AwsVPCSecurityGroupViolation
 * //           ViolationTarget: "STRING_VALUE",
 * //           ViolationTargetDescription: "STRING_VALUE",
 * //           PartialMatches: [ // PartialMatches
 * //             { // PartialMatch
 * //               Reference: "STRING_VALUE",
 * //               TargetViolationReasons: [ // TargetViolationReasons
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //           PossibleSecurityGroupRemediationActions: [ // SecurityGroupRemediationActions
 * //             { // SecurityGroupRemediationAction
 * //               RemediationActionType: "REMOVE" || "MODIFY",
 * //               Description: "STRING_VALUE",
 * //               RemediationResult: { // SecurityGroupRuleDescription
 * //                 IPV4Range: "STRING_VALUE",
 * //                 IPV6Range: "STRING_VALUE",
 * //                 PrefixListId: "STRING_VALUE",
 * //                 Protocol: "STRING_VALUE",
 * //                 FromPort: Number("long"),
 * //                 ToPort: Number("long"),
 * //               },
 * //               IsDefaultAction: true || false,
 * //             },
 * //           ],
 * //         },
 * //         AwsEc2NetworkInterfaceViolation: { // AwsEc2NetworkInterfaceViolation
 * //           ViolationTarget: "STRING_VALUE",
 * //           ViolatingSecurityGroups: [ // ResourceIdList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         AwsEc2InstanceViolation: { // AwsEc2InstanceViolation
 * //           ViolationTarget: "STRING_VALUE",
 * //           AwsEc2NetworkInterfaceViolations: [ // AwsEc2NetworkInterfaceViolations
 * //             {
 * //               ViolationTarget: "STRING_VALUE",
 * //               ViolatingSecurityGroups: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //         NetworkFirewallMissingFirewallViolation: { // NetworkFirewallMissingFirewallViolation
 * //           ViolationTarget: "STRING_VALUE",
 * //           VPC: "STRING_VALUE",
 * //           AvailabilityZone: "STRING_VALUE",
 * //           TargetViolationReason: "STRING_VALUE",
 * //         },
 * //         NetworkFirewallMissingSubnetViolation: { // NetworkFirewallMissingSubnetViolation
 * //           ViolationTarget: "STRING_VALUE",
 * //           VPC: "STRING_VALUE",
 * //           AvailabilityZone: "STRING_VALUE",
 * //           TargetViolationReason: "STRING_VALUE",
 * //         },
 * //         NetworkFirewallMissingExpectedRTViolation: { // NetworkFirewallMissingExpectedRTViolation
 * //           ViolationTarget: "STRING_VALUE",
 * //           VPC: "STRING_VALUE",
 * //           AvailabilityZone: "STRING_VALUE",
 * //           CurrentRouteTable: "STRING_VALUE",
 * //           ExpectedRouteTable: "STRING_VALUE",
 * //         },
 * //         NetworkFirewallPolicyModifiedViolation: { // NetworkFirewallPolicyModifiedViolation
 * //           ViolationTarget: "STRING_VALUE",
 * //           CurrentPolicyDescription: { // NetworkFirewallPolicyDescription
 * //             StatelessRuleGroups: [ // StatelessRuleGroupList
 * //               { // StatelessRuleGroup
 * //                 RuleGroupName: "STRING_VALUE",
 * //                 ResourceId: "STRING_VALUE",
 * //                 Priority: Number("int"),
 * //               },
 * //             ],
 * //             StatelessDefaultActions: [ // NetworkFirewallActionList
 * //               "STRING_VALUE",
 * //             ],
 * //             StatelessFragmentDefaultActions: [
 * //               "STRING_VALUE",
 * //             ],
 * //             StatelessCustomActions: [
 * //               "STRING_VALUE",
 * //             ],
 * //             StatefulRuleGroups: [ // StatefulRuleGroupList
 * //               { // StatefulRuleGroup
 * //                 RuleGroupName: "STRING_VALUE",
 * //                 ResourceId: "STRING_VALUE",
 * //                 Priority: Number("int"),
 * //                 Override: { // NetworkFirewallStatefulRuleGroupOverride
 * //                   Action: "DROP_TO_ALERT",
 * //                 },
 * //               },
 * //             ],
 * //             StatefulDefaultActions: [
 * //               "STRING_VALUE",
 * //             ],
 * //             StatefulEngineOptions: { // StatefulEngineOptions
 * //               RuleOrder: "STRICT_ORDER" || "DEFAULT_ACTION_ORDER",
 * //             },
 * //           },
 * //           ExpectedPolicyDescription: {
 * //             StatelessRuleGroups: [
 * //               {
 * //                 RuleGroupName: "STRING_VALUE",
 * //                 ResourceId: "STRING_VALUE",
 * //                 Priority: Number("int"),
 * //               },
 * //             ],
 * //             StatelessDefaultActions: [
 * //               "STRING_VALUE",
 * //             ],
 * //             StatelessFragmentDefaultActions: "<NetworkFirewallActionList>",
 * //             StatelessCustomActions: "<NetworkFirewallActionList>",
 * //             StatefulRuleGroups: [
 * //               {
 * //                 RuleGroupName: "STRING_VALUE",
 * //                 ResourceId: "STRING_VALUE",
 * //                 Priority: Number("int"),
 * //                 Override: {
 * //                   Action: "DROP_TO_ALERT",
 * //                 },
 * //               },
 * //             ],
 * //             StatefulDefaultActions: "<NetworkFirewallActionList>",
 * //             StatefulEngineOptions: {
 * //               RuleOrder: "STRICT_ORDER" || "DEFAULT_ACTION_ORDER",
 * //             },
 * //           },
 * //         },
 * //         NetworkFirewallInternetTrafficNotInspectedViolation: { // NetworkFirewallInternetTrafficNotInspectedViolation
 * //           SubnetId: "STRING_VALUE",
 * //           SubnetAvailabilityZone: "STRING_VALUE",
 * //           RouteTableId: "STRING_VALUE",
 * //           ViolatingRoutes: [ // Routes
 * //             { // Route
 * //               DestinationType: "IPV4" || "IPV6" || "PREFIX_LIST",
 * //               TargetType: "GATEWAY" || "CARRIER_GATEWAY" || "INSTANCE" || "LOCAL_GATEWAY" || "NAT_GATEWAY" || "NETWORK_INTERFACE" || "VPC_ENDPOINT" || "VPC_PEERING_CONNECTION" || "EGRESS_ONLY_INTERNET_GATEWAY" || "TRANSIT_GATEWAY",
 * //               Destination: "STRING_VALUE",
 * //               Target: "STRING_VALUE",
 * //             },
 * //           ],
 * //           IsRouteTableUsedInDifferentAZ: true || false,
 * //           CurrentFirewallSubnetRouteTable: "STRING_VALUE",
 * //           ExpectedFirewallEndpoint: "STRING_VALUE",
 * //           FirewallSubnetId: "STRING_VALUE",
 * //           ExpectedFirewallSubnetRoutes: [ // ExpectedRoutes
 * //             { // ExpectedRoute
 * //               IpV4Cidr: "STRING_VALUE",
 * //               PrefixListId: "STRING_VALUE",
 * //               IpV6Cidr: "STRING_VALUE",
 * //               ContributingSubnets: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               AllowedTargets: [ // LengthBoundedStringList
 * //                 "STRING_VALUE",
 * //               ],
 * //               RouteTableId: "STRING_VALUE",
 * //             },
 * //           ],
 * //           ActualFirewallSubnetRoutes: [
 * //             {
 * //               DestinationType: "IPV4" || "IPV6" || "PREFIX_LIST",
 * //               TargetType: "GATEWAY" || "CARRIER_GATEWAY" || "INSTANCE" || "LOCAL_GATEWAY" || "NAT_GATEWAY" || "NETWORK_INTERFACE" || "VPC_ENDPOINT" || "VPC_PEERING_CONNECTION" || "EGRESS_ONLY_INTERNET_GATEWAY" || "TRANSIT_GATEWAY",
 * //               Destination: "STRING_VALUE",
 * //               Target: "STRING_VALUE",
 * //             },
 * //           ],
 * //           InternetGatewayId: "STRING_VALUE",
 * //           CurrentInternetGatewayRouteTable: "STRING_VALUE",
 * //           ExpectedInternetGatewayRoutes: [
 * //             {
 * //               IpV4Cidr: "STRING_VALUE",
 * //               PrefixListId: "STRING_VALUE",
 * //               IpV6Cidr: "STRING_VALUE",
 * //               ContributingSubnets: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               AllowedTargets: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               RouteTableId: "STRING_VALUE",
 * //             },
 * //           ],
 * //           ActualInternetGatewayRoutes: [
 * //             {
 * //               DestinationType: "IPV4" || "IPV6" || "PREFIX_LIST",
 * //               TargetType: "GATEWAY" || "CARRIER_GATEWAY" || "INSTANCE" || "LOCAL_GATEWAY" || "NAT_GATEWAY" || "NETWORK_INTERFACE" || "VPC_ENDPOINT" || "VPC_PEERING_CONNECTION" || "EGRESS_ONLY_INTERNET_GATEWAY" || "TRANSIT_GATEWAY",
 * //               Destination: "STRING_VALUE",
 * //               Target: "STRING_VALUE",
 * //             },
 * //           ],
 * //           VpcId: "STRING_VALUE",
 * //         },
 * //         NetworkFirewallInvalidRouteConfigurationViolation: { // NetworkFirewallInvalidRouteConfigurationViolation
 * //           AffectedSubnets: [
 * //             "STRING_VALUE",
 * //           ],
 * //           RouteTableId: "STRING_VALUE",
 * //           IsRouteTableUsedInDifferentAZ: true || false,
 * //           ViolatingRoute: {
 * //             DestinationType: "IPV4" || "IPV6" || "PREFIX_LIST",
 * //             TargetType: "GATEWAY" || "CARRIER_GATEWAY" || "INSTANCE" || "LOCAL_GATEWAY" || "NAT_GATEWAY" || "NETWORK_INTERFACE" || "VPC_ENDPOINT" || "VPC_PEERING_CONNECTION" || "EGRESS_ONLY_INTERNET_GATEWAY" || "TRANSIT_GATEWAY",
 * //             Destination: "STRING_VALUE",
 * //             Target: "STRING_VALUE",
 * //           },
 * //           CurrentFirewallSubnetRouteTable: "STRING_VALUE",
 * //           ExpectedFirewallEndpoint: "STRING_VALUE",
 * //           ActualFirewallEndpoint: "STRING_VALUE",
 * //           ExpectedFirewallSubnetId: "STRING_VALUE",
 * //           ActualFirewallSubnetId: "STRING_VALUE",
 * //           ExpectedFirewallSubnetRoutes: [
 * //             {
 * //               IpV4Cidr: "STRING_VALUE",
 * //               PrefixListId: "STRING_VALUE",
 * //               IpV6Cidr: "STRING_VALUE",
 * //               ContributingSubnets: "<ResourceIdList>",
 * //               AllowedTargets: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               RouteTableId: "STRING_VALUE",
 * //             },
 * //           ],
 * //           ActualFirewallSubnetRoutes: [
 * //             {
 * //               DestinationType: "IPV4" || "IPV6" || "PREFIX_LIST",
 * //               TargetType: "GATEWAY" || "CARRIER_GATEWAY" || "INSTANCE" || "LOCAL_GATEWAY" || "NAT_GATEWAY" || "NETWORK_INTERFACE" || "VPC_ENDPOINT" || "VPC_PEERING_CONNECTION" || "EGRESS_ONLY_INTERNET_GATEWAY" || "TRANSIT_GATEWAY",
 * //               Destination: "STRING_VALUE",
 * //               Target: "STRING_VALUE",
 * //             },
 * //           ],
 * //           InternetGatewayId: "STRING_VALUE",
 * //           CurrentInternetGatewayRouteTable: "STRING_VALUE",
 * //           ExpectedInternetGatewayRoutes: [
 * //             {
 * //               IpV4Cidr: "STRING_VALUE",
 * //               PrefixListId: "STRING_VALUE",
 * //               IpV6Cidr: "STRING_VALUE",
 * //               ContributingSubnets: "<ResourceIdList>",
 * //               AllowedTargets: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               RouteTableId: "STRING_VALUE",
 * //             },
 * //           ],
 * //           ActualInternetGatewayRoutes: [
 * //             "<Route>",
 * //           ],
 * //           VpcId: "STRING_VALUE",
 * //         },
 * //         NetworkFirewallBlackHoleRouteDetectedViolation: { // NetworkFirewallBlackHoleRouteDetectedViolation
 * //           ViolationTarget: "STRING_VALUE",
 * //           RouteTableId: "STRING_VALUE",
 * //           VpcId: "STRING_VALUE",
 * //           ViolatingRoutes: "<Routes>",
 * //         },
 * //         NetworkFirewallUnexpectedFirewallRoutesViolation: { // NetworkFirewallUnexpectedFirewallRoutesViolation
 * //           FirewallSubnetId: "STRING_VALUE",
 * //           ViolatingRoutes: "<Routes>",
 * //           RouteTableId: "STRING_VALUE",
 * //           FirewallEndpoint: "STRING_VALUE",
 * //           VpcId: "STRING_VALUE",
 * //         },
 * //         NetworkFirewallUnexpectedGatewayRoutesViolation: { // NetworkFirewallUnexpectedGatewayRoutesViolation
 * //           GatewayId: "STRING_VALUE",
 * //           ViolatingRoutes: "<Routes>",
 * //           RouteTableId: "STRING_VALUE",
 * //           VpcId: "STRING_VALUE",
 * //         },
 * //         NetworkFirewallMissingExpectedRoutesViolation: { // NetworkFirewallMissingExpectedRoutesViolation
 * //           ViolationTarget: "STRING_VALUE",
 * //           ExpectedRoutes: [
 * //             {
 * //               IpV4Cidr: "STRING_VALUE",
 * //               PrefixListId: "STRING_VALUE",
 * //               IpV6Cidr: "STRING_VALUE",
 * //               ContributingSubnets: "<ResourceIdList>",
 * //               AllowedTargets: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               RouteTableId: "STRING_VALUE",
 * //             },
 * //           ],
 * //           VpcId: "STRING_VALUE",
 * //         },
 * //         DnsRuleGroupPriorityConflictViolation: { // DnsRuleGroupPriorityConflictViolation
 * //           ViolationTarget: "STRING_VALUE",
 * //           ViolationTargetDescription: "STRING_VALUE",
 * //           ConflictingPriority: Number("int"),
 * //           ConflictingPolicyId: "STRING_VALUE",
 * //           UnavailablePriorities: [ // DnsRuleGroupPriorities
 * //             Number("int"),
 * //           ],
 * //         },
 * //         DnsDuplicateRuleGroupViolation: { // DnsDuplicateRuleGroupViolation
 * //           ViolationTarget: "STRING_VALUE",
 * //           ViolationTargetDescription: "STRING_VALUE",
 * //         },
 * //         DnsRuleGroupLimitExceededViolation: { // DnsRuleGroupLimitExceededViolation
 * //           ViolationTarget: "STRING_VALUE",
 * //           ViolationTargetDescription: "STRING_VALUE",
 * //           NumberOfRuleGroupsAlreadyAssociated: Number("int"),
 * //         },
 * //         PossibleRemediationActions: { // PossibleRemediationActions
 * //           Description: "STRING_VALUE",
 * //           Actions: [ // PossibleRemediationActionList
 * //             { // PossibleRemediationAction
 * //               Description: "STRING_VALUE",
 * //               OrderedRemediationActions: [ // OrderedRemediationActions // required
 * //                 { // RemediationActionWithOrder
 * //                   RemediationAction: { // RemediationAction
 * //                     Description: "STRING_VALUE",
 * //                     EC2CreateRouteAction: { // EC2CreateRouteAction
 * //                       Description: "STRING_VALUE",
 * //                       DestinationCidrBlock: "STRING_VALUE",
 * //                       DestinationPrefixListId: "STRING_VALUE",
 * //                       DestinationIpv6CidrBlock: "STRING_VALUE",
 * //                       VpcEndpointId: { // ActionTarget
 * //                         ResourceId: "STRING_VALUE",
 * //                         Description: "STRING_VALUE",
 * //                       },
 * //                       GatewayId: {
 * //                         ResourceId: "STRING_VALUE",
 * //                         Description: "STRING_VALUE",
 * //                       },
 * //                       RouteTableId: {
 * //                         ResourceId: "STRING_VALUE",
 * //                         Description: "STRING_VALUE",
 * //                       },
 * //                     },
 * //                     EC2ReplaceRouteAction: { // EC2ReplaceRouteAction
 * //                       Description: "STRING_VALUE",
 * //                       DestinationCidrBlock: "STRING_VALUE",
 * //                       DestinationPrefixListId: "STRING_VALUE",
 * //                       DestinationIpv6CidrBlock: "STRING_VALUE",
 * //                       GatewayId: {
 * //                         ResourceId: "STRING_VALUE",
 * //                         Description: "STRING_VALUE",
 * //                       },
 * //                       RouteTableId: {
 * //                         ResourceId: "STRING_VALUE",
 * //                         Description: "STRING_VALUE",
 * //                       },
 * //                     },
 * //                     EC2DeleteRouteAction: { // EC2DeleteRouteAction
 * //                       Description: "STRING_VALUE",
 * //                       DestinationCidrBlock: "STRING_VALUE",
 * //                       DestinationPrefixListId: "STRING_VALUE",
 * //                       DestinationIpv6CidrBlock: "STRING_VALUE",
 * //                       RouteTableId: "<ActionTarget>", // required
 * //                     },
 * //                     EC2CopyRouteTableAction: { // EC2CopyRouteTableAction
 * //                       Description: "STRING_VALUE",
 * //                       VpcId: "<ActionTarget>", // required
 * //                       RouteTableId: "<ActionTarget>", // required
 * //                     },
 * //                     EC2ReplaceRouteTableAssociationAction: { // EC2ReplaceRouteTableAssociationAction
 * //                       Description: "STRING_VALUE",
 * //                       AssociationId: "<ActionTarget>", // required
 * //                       RouteTableId: "<ActionTarget>", // required
 * //                     },
 * //                     EC2AssociateRouteTableAction: { // EC2AssociateRouteTableAction
 * //                       Description: "STRING_VALUE",
 * //                       RouteTableId: "<ActionTarget>", // required
 * //                       SubnetId: "<ActionTarget>",
 * //                       GatewayId: "<ActionTarget>",
 * //                     },
 * //                     EC2CreateRouteTableAction: { // EC2CreateRouteTableAction
 * //                       Description: "STRING_VALUE",
 * //                       VpcId: "<ActionTarget>", // required
 * //                     },
 * //                     FMSPolicyUpdateFirewallCreationConfigAction: { // FMSPolicyUpdateFirewallCreationConfigAction
 * //                       Description: "STRING_VALUE",
 * //                       FirewallCreationConfig: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                   Order: Number("int"),
 * //                 },
 * //               ],
 * //               IsDefaultAction: true || false,
 * //             },
 * //           ],
 * //         },
 * //         FirewallSubnetIsOutOfScopeViolation: { // FirewallSubnetIsOutOfScopeViolation
 * //           FirewallSubnetId: "STRING_VALUE",
 * //           VpcId: "STRING_VALUE",
 * //           SubnetAvailabilityZone: "STRING_VALUE",
 * //           SubnetAvailabilityZoneId: "STRING_VALUE",
 * //           VpcEndpointId: "STRING_VALUE",
 * //         },
 * //         RouteHasOutOfScopeEndpointViolation: { // RouteHasOutOfScopeEndpointViolation
 * //           SubnetId: "STRING_VALUE",
 * //           VpcId: "STRING_VALUE",
 * //           RouteTableId: "STRING_VALUE",
 * //           ViolatingRoutes: "<Routes>",
 * //           SubnetAvailabilityZone: "STRING_VALUE",
 * //           SubnetAvailabilityZoneId: "STRING_VALUE",
 * //           CurrentFirewallSubnetRouteTable: "STRING_VALUE",
 * //           FirewallSubnetId: "STRING_VALUE",
 * //           FirewallSubnetRoutes: "<Routes>",
 * //           InternetGatewayId: "STRING_VALUE",
 * //           CurrentInternetGatewayRouteTable: "STRING_VALUE",
 * //           InternetGatewayRoutes: "<Routes>",
 * //         },
 * //         ThirdPartyFirewallMissingFirewallViolation: { // ThirdPartyFirewallMissingFirewallViolation
 * //           ViolationTarget: "STRING_VALUE",
 * //           VPC: "STRING_VALUE",
 * //           AvailabilityZone: "STRING_VALUE",
 * //           TargetViolationReason: "STRING_VALUE",
 * //         },
 * //         ThirdPartyFirewallMissingSubnetViolation: { // ThirdPartyFirewallMissingSubnetViolation
 * //           ViolationTarget: "STRING_VALUE",
 * //           VPC: "STRING_VALUE",
 * //           AvailabilityZone: "STRING_VALUE",
 * //           TargetViolationReason: "STRING_VALUE",
 * //         },
 * //         ThirdPartyFirewallMissingExpectedRouteTableViolation: { // ThirdPartyFirewallMissingExpectedRouteTableViolation
 * //           ViolationTarget: "STRING_VALUE",
 * //           VPC: "STRING_VALUE",
 * //           AvailabilityZone: "STRING_VALUE",
 * //           CurrentRouteTable: "STRING_VALUE",
 * //           ExpectedRouteTable: "STRING_VALUE",
 * //         },
 * //         FirewallSubnetMissingVPCEndpointViolation: { // FirewallSubnetMissingVPCEndpointViolation
 * //           FirewallSubnetId: "STRING_VALUE",
 * //           VpcId: "STRING_VALUE",
 * //           SubnetAvailabilityZone: "STRING_VALUE",
 * //           SubnetAvailabilityZoneId: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     ResourceTags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     ResourceDescription: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetViolationDetailsCommandInput - {@link GetViolationDetailsCommandInput}
 * @returns {@link GetViolationDetailsCommandOutput}
 * @see {@link GetViolationDetailsCommandInput} for command's `input` shape.
 * @see {@link GetViolationDetailsCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The parameters of the request were invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link FMSServiceException}
 * <p>Base exception class for all service exceptions from FMS service.</p>
 *
 */
export class GetViolationDetailsCommand extends $Command<
  GetViolationDetailsCommandInput,
  GetViolationDetailsCommandOutput,
  FMSClientResolvedConfig
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
  constructor(readonly input: GetViolationDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetViolationDetailsCommandInput, GetViolationDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetViolationDetailsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "GetViolationDetailsCommand";
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
  private serialize(input: GetViolationDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetViolationDetailsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetViolationDetailsCommandOutput> {
    return de_GetViolationDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
