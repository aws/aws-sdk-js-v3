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
import { AuthorizeSecurityGroupEgressRequest, AuthorizeSecurityGroupEgressResult } from "../models/models_0";
import { de_AuthorizeSecurityGroupEgressCommand, se_AuthorizeSecurityGroupEgressCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AuthorizeSecurityGroupEgressCommand}.
 */
export interface AuthorizeSecurityGroupEgressCommandInput extends AuthorizeSecurityGroupEgressRequest {}
/**
 * @public
 *
 * The output of {@link AuthorizeSecurityGroupEgressCommand}.
 */
export interface AuthorizeSecurityGroupEgressCommandOutput
  extends AuthorizeSecurityGroupEgressResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Adds the specified outbound (egress) rules to a security group for use with a VPC.</p>
 *          <p>An outbound rule permits instances to send traffic to the specified IPv4 or IPv6 CIDR
 *             address ranges, or to the instances that are associated with the specified source
 *             security groups. When specifying an outbound rule for your security group in a VPC, the
 *             <code>IpPermissions</code> must include a destination for the traffic.</p>
 *          <p>You specify a protocol for each rule (for example, TCP).
 *        For the TCP and UDP protocols, you must also specify the destination port or port range.
 *        For the ICMP protocol, you must also specify the ICMP type and code.
 *        You can use -1 for the type or code to mean all types or all codes.</p>
 *          <p>Rule changes are propagated to affected instances as quickly as possible. However, a small delay might occur.</p>
 *          <p>For information about VPC security group quotas, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC quotas</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AuthorizeSecurityGroupEgressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AuthorizeSecurityGroupEgressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AuthorizeSecurityGroupEgressRequest
 *   DryRun: true || false,
 *   GroupId: "STRING_VALUE", // required
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
 *   CidrIp: "STRING_VALUE",
 *   FromPort: Number("int"),
 *   IpProtocol: "STRING_VALUE",
 *   ToPort: Number("int"),
 *   SourceSecurityGroupName: "STRING_VALUE",
 *   SourceSecurityGroupOwnerId: "STRING_VALUE",
 * };
 * const command = new AuthorizeSecurityGroupEgressCommand(input);
 * const response = await client.send(command);
 * // { // AuthorizeSecurityGroupEgressResult
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
 * @param AuthorizeSecurityGroupEgressCommandInput - {@link AuthorizeSecurityGroupEgressCommandInput}
 * @returns {@link AuthorizeSecurityGroupEgressCommandOutput}
 * @see {@link AuthorizeSecurityGroupEgressCommandInput} for command's `input` shape.
 * @see {@link AuthorizeSecurityGroupEgressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To add a rule that allows outbound traffic to a specific address range
 * ```javascript
 * // This example adds a rule that grants access to the specified address ranges on TCP port 80.
 * const input = {
 *   "GroupId": "sg-1a2b3c4d",
 *   "IpPermissions": [
 *     {
 *       "FromPort": 80,
 *       "IpProtocol": "tcp",
 *       "IpRanges": [
 *         {
 *           "CidrIp": "10.0.0.0/16"
 *         }
 *       ],
 *       "ToPort": 80
 *     }
 *   ]
 * };
 * const command = new AuthorizeSecurityGroupEgressCommand(input);
 * await client.send(command);
 * // example id: to-add-a-rule-that-allows-outbound-traffic-to-a-specific-address-range-1528929309636
 * ```
 *
 * @example To add a rule that allows outbound traffic to a specific security group
 * ```javascript
 * // This example adds a rule that grants access to the specified security group on TCP port 80.
 * const input = {
 *   "GroupId": "sg-1a2b3c4d",
 *   "IpPermissions": [
 *     {
 *       "FromPort": 80,
 *       "IpProtocol": "tcp",
 *       "ToPort": 80,
 *       "UserIdGroupPairs": [
 *         {
 *           "GroupId": "sg-4b51a32f"
 *         }
 *       ]
 *     }
 *   ]
 * };
 * const command = new AuthorizeSecurityGroupEgressCommand(input);
 * await client.send(command);
 * // example id: to-add-a-rule-that-allows-outbound-traffic-to-a-specific-security-group-1528929760260
 * ```
 *
 */
export class AuthorizeSecurityGroupEgressCommand extends $Command<
  AuthorizeSecurityGroupEgressCommandInput,
  AuthorizeSecurityGroupEgressCommandOutput,
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
  constructor(readonly input: AuthorizeSecurityGroupEgressCommandInput) {
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
  ): Handler<AuthorizeSecurityGroupEgressCommandInput, AuthorizeSecurityGroupEgressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AuthorizeSecurityGroupEgressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AuthorizeSecurityGroupEgressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "AuthorizeSecurityGroupEgress",
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
  private serialize(input: AuthorizeSecurityGroupEgressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AuthorizeSecurityGroupEgressCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AuthorizeSecurityGroupEgressCommandOutput> {
    return de_AuthorizeSecurityGroupEgressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
