// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  AuthorizeSecurityGroupIngressRequest,
  AuthorizeSecurityGroupIngressRequestFilterSensitiveLog,
  AuthorizeSecurityGroupIngressResult,
  AuthorizeSecurityGroupIngressResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_ec2AuthorizeSecurityGroupIngressCommand,
  serializeAws_ec2AuthorizeSecurityGroupIngressCommand,
} from "../protocols/Aws_ec2";

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
 *          <note>
 *             <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AuthorizeSecurityGroupIngressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AuthorizeSecurityGroupIngressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AuthorizeSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param AuthorizeSecurityGroupIngressCommandInput - {@link AuthorizeSecurityGroupIngressCommandInput}
 * @returns {@link AuthorizeSecurityGroupIngressCommandOutput}
 * @see {@link AuthorizeSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link AuthorizeSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
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
      inputFilterSensitiveLog: AuthorizeSecurityGroupIngressRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AuthorizeSecurityGroupIngressResultFilterSensitiveLog,
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
    return serializeAws_ec2AuthorizeSecurityGroupIngressCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AuthorizeSecurityGroupIngressCommandOutput> {
    return deserializeAws_ec2AuthorizeSecurityGroupIngressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
