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
import { AuthorizeSecurityGroupIngressRequest, AuthorizeSecurityGroupIngressResult } from "../models/models_0";
import { de_AuthorizeSecurityGroupIngressCommand, se_AuthorizeSecurityGroupIngressCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AuthorizeSecurityGroupIngressCommand}.
 */
export interface AuthorizeSecurityGroupIngressCommandInput extends AuthorizeSecurityGroupIngressRequest {}
/**
 * @public
 *
 * The output of {@link AuthorizeSecurityGroupIngressCommand}.
 */
export interface AuthorizeSecurityGroupIngressCommandOutput
  extends AuthorizeSecurityGroupIngressResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Adds the specified inbound (ingress) rules to a security group.</p>
 *          <p>An inbound rule permits instances to receive traffic from the specified IPv4 or IPv6 CIDR
 *        address range, or from the instances that are associated with the specified destination security
 *        groups. When specifying an inbound rule for your security group in a VPC, the
 *          <code>IpPermissions</code> must include a source for the traffic.</p>
 *          <p>You specify a protocol for each rule (for example, TCP).
 *        For TCP and UDP, you must also specify the destination port or port range.
 *        For ICMP/ICMPv6, you must also specify the ICMP/ICMPv6 type and code.
 *        You can use -1 to mean all types or all codes.</p>
 *          <p>Rule changes are propagated to instances within the security group as quickly as possible.
 *          However, a small delay might occur.</p>
 *          <p>For more information about VPC security group quotas, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC quotas</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AuthorizeSecurityGroupIngressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AuthorizeSecurityGroupIngressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AuthorizeSecurityGroupIngressRequest
 *   CidrIp: "STRING_VALUE",
 *   FromPort: Number("int"),
 *   GroupId: "STRING_VALUE",
 *   GroupName: "STRING_VALUE",
 *   IpPermissions: [ // IpPermissionList
 *     { // IpPermission
 *       FromPort: Number("int"),
 *       IpProtocol: "STRING_VALUE",
 *       IpRanges: [ // IpRangeList
 *         { // IpRange
 *           CidrIp: "STRING_VALUE",
 *           Description: "STRING_VALUE",
 *         },
 *       ],
 *       Ipv6Ranges: [ // Ipv6RangeList
 *         { // Ipv6Range
 *           CidrIpv6: "STRING_VALUE",
 *           Description: "STRING_VALUE",
 *         },
 *       ],
 *       PrefixListIds: [ // PrefixListIdList
 *         { // PrefixListId
 *           Description: "STRING_VALUE",
 *           PrefixListId: "STRING_VALUE",
 *         },
 *       ],
 *       ToPort: Number("int"),
 *       UserIdGroupPairs: [ // UserIdGroupPairList
 *         { // UserIdGroupPair
 *           Description: "STRING_VALUE",
 *           GroupId: "STRING_VALUE",
 *           GroupName: "STRING_VALUE",
 *           PeeringStatus: "STRING_VALUE",
 *           UserId: "STRING_VALUE",
 *           VpcId: "STRING_VALUE",
 *           VpcPeeringConnectionId: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   IpProtocol: "STRING_VALUE",
 *   SourceSecurityGroupName: "STRING_VALUE",
 *   SourceSecurityGroupOwnerId: "STRING_VALUE",
 *   ToPort: Number("int"),
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
 * };
 * const command = new AuthorizeSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * // { // AuthorizeSecurityGroupIngressResult
 * //   Return: true || false,
 * //   SecurityGroupRules: [ // SecurityGroupRuleList
 * //     { // SecurityGroupRule
 * //       SecurityGroupRuleId: "STRING_VALUE",
 * //       GroupId: "STRING_VALUE",
 * //       GroupOwnerId: "STRING_VALUE",
 * //       IsEgress: true || false,
 * //       IpProtocol: "STRING_VALUE",
 * //       FromPort: Number("int"),
 * //       ToPort: Number("int"),
 * //       CidrIpv4: "STRING_VALUE",
 * //       CidrIpv6: "STRING_VALUE",
 * //       PrefixListId: "STRING_VALUE",
 * //       ReferencedGroupInfo: { // ReferencedSecurityGroup
 * //         GroupId: "STRING_VALUE",
 * //         PeeringStatus: "STRING_VALUE",
 * //         UserId: "STRING_VALUE",
 * //         VpcId: "STRING_VALUE",
 * //         VpcPeeringConnectionId: "STRING_VALUE",
 * //       },
 * //       Description: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AuthorizeSecurityGroupIngressCommandInput - {@link AuthorizeSecurityGroupIngressCommandInput}
 * @returns {@link AuthorizeSecurityGroupIngressCommandOutput}
 * @see {@link AuthorizeSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link AuthorizeSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To add a rule that allows inbound SSH traffic from an IPv4 address range
 * ```javascript
 * // This example enables inbound traffic on TCP port 22 (SSH). The rule includes a description to help you identify it later.
 * const input = {
 *   "GroupId": "sg-903004f8",
 *   "IpPermissions": [
 *     {
 *       "FromPort": 22,
 *       "IpProtocol": "tcp",
 *       "IpRanges": [
 *         {
 *           "CidrIp": "203.0.113.0/24",
 *           "Description": "SSH access from the LA office"
 *         }
 *       ],
 *       "ToPort": 22
 *     }
 *   ]
 * };
 * const command = new AuthorizeSecurityGroupIngressCommand(input);
 * await client.send(command);
 * // example id: to-add-a-rule-that-allows-inbound-ssh-traffic-1529011610328
 * ```
 *
 * @example To add a rule that allows inbound HTTP traffic from another security group
 * ```javascript
 * // This example enables inbound traffic on TCP port 80 from the specified security group. The group must be in the same VPC or a peer VPC. Incoming traffic is allowed based on the private IP addresses of instances that are associated with the specified security group.
 * const input = {
 *   "GroupId": "sg-111aaa22",
 *   "IpPermissions": [
 *     {
 *       "FromPort": 80,
 *       "IpProtocol": "tcp",
 *       "ToPort": 80,
 *       "UserIdGroupPairs": [
 *         {
 *           "Description": "HTTP access from other instances",
 *           "GroupId": "sg-1a2b3c4d"
 *         }
 *       ]
 *     }
 *   ]
 * };
 * const command = new AuthorizeSecurityGroupIngressCommand(input);
 * await client.send(command);
 * // example id: to-add-a-rule-that-allows-inbound-http-traffic-from-another-security-group-1529012163168
 * ```
 *
 * @example To add a rule that allows inbound RDP traffic from an IPv6 address range
 * ```javascript
 * // This example adds an inbound rule that allows RDP traffic from the specified IPv6 address range. The rule includes a description to help you identify it later.
 * const input = {
 *   "GroupId": "sg-123abc12 ",
 *   "IpPermissions": [
 *     {
 *       "FromPort": 3389,
 *       "IpProtocol": "tcp",
 *       "Ipv6Ranges": [
 *         {
 *           "CidrIpv6": "2001:db8:1234:1a00::/64",
 *           "Description": "RDP access from the NY office"
 *         }
 *       ],
 *       "ToPort": 3389
 *     }
 *   ]
 * };
 * const command = new AuthorizeSecurityGroupIngressCommand(input);
 * await client.send(command);
 * // example id: to-add-a-rule-with-a-description-1529012418116
 * ```
 *
 */
export class AuthorizeSecurityGroupIngressCommand extends $Command<
  AuthorizeSecurityGroupIngressCommandInput,
  AuthorizeSecurityGroupIngressCommandOutput,
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
  constructor(readonly input: AuthorizeSecurityGroupIngressCommandInput) {
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
  ): Handler<AuthorizeSecurityGroupIngressCommandInput, AuthorizeSecurityGroupIngressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AuthorizeSecurityGroupIngressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AuthorizeSecurityGroupIngressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "AuthorizeSecurityGroupIngress",
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
  private serialize(input: AuthorizeSecurityGroupIngressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AuthorizeSecurityGroupIngressCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AuthorizeSecurityGroupIngressCommandOutput> {
    return de_AuthorizeSecurityGroupIngressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
