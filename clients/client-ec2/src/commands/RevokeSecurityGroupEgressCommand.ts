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
import { RevokeSecurityGroupEgressRequest, RevokeSecurityGroupEgressResult } from "../models/models_6";
import { de_RevokeSecurityGroupEgressCommand, se_RevokeSecurityGroupEgressCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RevokeSecurityGroupEgressCommand}.
 */
export interface RevokeSecurityGroupEgressCommandInput extends RevokeSecurityGroupEgressRequest {}
/**
 * @public
 *
 * The output of {@link RevokeSecurityGroupEgressCommand}.
 */
export interface RevokeSecurityGroupEgressCommandOutput extends RevokeSecurityGroupEgressResult, __MetadataBearer {}

/**
 * @public
 * <p>Removes the specified outbound (egress) rules from the specified security group.</p>
 *          <p>You can specify rules using either rule IDs or security group rule properties. If you use
 *          rule properties, the values that you specify (for example, ports) must match the existing rule's
 *          values exactly. Each rule has a protocol, from and to ports, and destination (CIDR range,
 *          security group, or prefix list). For the TCP and UDP protocols, you must also specify the
 *          destination port or range of ports. For the ICMP protocol, you must also specify the ICMP type
 *          and code. If the security group rule has a description, you do not need to specify the description
 *          to revoke the rule.</p>
 *          <p>For a default VPC, if the values you specify do not match the existing rule's values, no error is
 *          returned, and the output describes the security group rules that were not revoked.</p>
 *          <p>Amazon Web Services recommends that you describe the security group to verify that the rules were removed.</p>
 *          <p>Rule changes are propagated to instances within the security group as quickly as possible. However,
 *          a small delay might occur.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RevokeSecurityGroupEgressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RevokeSecurityGroupEgressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // RevokeSecurityGroupEgressRequest
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
 *   SecurityGroupRuleIds: [ // SecurityGroupRuleIdList
 *     "STRING_VALUE",
 *   ],
 *   CidrIp: "STRING_VALUE",
 *   FromPort: Number("int"),
 *   IpProtocol: "STRING_VALUE",
 *   ToPort: Number("int"),
 *   SourceSecurityGroupName: "STRING_VALUE",
 *   SourceSecurityGroupOwnerId: "STRING_VALUE",
 * };
 * const command = new RevokeSecurityGroupEgressCommand(input);
 * const response = await client.send(command);
 * // { // RevokeSecurityGroupEgressResult
 * //   Return: true || false,
 * //   UnknownIpPermissions: [ // IpPermissionList
 * //     { // IpPermission
 * //       FromPort: Number("int"),
 * //       IpProtocol: "STRING_VALUE",
 * //       IpRanges: [ // IpRangeList
 * //         { // IpRange
 * //           CidrIp: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Ipv6Ranges: [ // Ipv6RangeList
 * //         { // Ipv6Range
 * //           CidrIpv6: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PrefixListIds: [ // PrefixListIdList
 * //         { // PrefixListId
 * //           Description: "STRING_VALUE",
 * //           PrefixListId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ToPort: Number("int"),
 * //       UserIdGroupPairs: [ // UserIdGroupPairList
 * //         { // UserIdGroupPair
 * //           Description: "STRING_VALUE",
 * //           GroupId: "STRING_VALUE",
 * //           GroupName: "STRING_VALUE",
 * //           PeeringStatus: "STRING_VALUE",
 * //           UserId: "STRING_VALUE",
 * //           VpcId: "STRING_VALUE",
 * //           VpcPeeringConnectionId: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param RevokeSecurityGroupEgressCommandInput - {@link RevokeSecurityGroupEgressCommandInput}
 * @returns {@link RevokeSecurityGroupEgressCommandOutput}
 * @see {@link RevokeSecurityGroupEgressCommandInput} for command's `input` shape.
 * @see {@link RevokeSecurityGroupEgressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class RevokeSecurityGroupEgressCommand extends $Command<
  RevokeSecurityGroupEgressCommandInput,
  RevokeSecurityGroupEgressCommandOutput,
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
  constructor(readonly input: RevokeSecurityGroupEgressCommandInput) {
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
  ): Handler<RevokeSecurityGroupEgressCommandInput, RevokeSecurityGroupEgressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RevokeSecurityGroupEgressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RevokeSecurityGroupEgressCommand";
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
  private serialize(input: RevokeSecurityGroupEgressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RevokeSecurityGroupEgressCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RevokeSecurityGroupEgressCommandOutput> {
    return de_RevokeSecurityGroupEgressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
