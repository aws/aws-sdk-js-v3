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
  UpdateSecurityGroupRuleDescriptionsEgressRequest,
  UpdateSecurityGroupRuleDescriptionsEgressResult,
} from "../models/models_7";
import {
  de_UpdateSecurityGroupRuleDescriptionsEgressCommand,
  se_UpdateSecurityGroupRuleDescriptionsEgressCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateSecurityGroupRuleDescriptionsEgressCommand}.
 */
export interface UpdateSecurityGroupRuleDescriptionsEgressCommandInput
  extends UpdateSecurityGroupRuleDescriptionsEgressRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSecurityGroupRuleDescriptionsEgressCommand}.
 */
export interface UpdateSecurityGroupRuleDescriptionsEgressCommandOutput
  extends UpdateSecurityGroupRuleDescriptionsEgressResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates the description of an egress (outbound) security group rule. You
 * 			can replace an existing description, or add a description to a rule that did not have one
 * 			previously. You can remove a description for a security group rule by omitting the
 * 			description parameter in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UpdateSecurityGroupRuleDescriptionsEgressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UpdateSecurityGroupRuleDescriptionsEgressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // UpdateSecurityGroupRuleDescriptionsEgressRequest
 *   DryRun: true || false,
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
 *   SecurityGroupRuleDescriptions: [ // SecurityGroupRuleDescriptionList
 *     { // SecurityGroupRuleDescription
 *       SecurityGroupRuleId: "STRING_VALUE",
 *       Description: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateSecurityGroupRuleDescriptionsEgressCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSecurityGroupRuleDescriptionsEgressResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param UpdateSecurityGroupRuleDescriptionsEgressCommandInput - {@link UpdateSecurityGroupRuleDescriptionsEgressCommandInput}
 * @returns {@link UpdateSecurityGroupRuleDescriptionsEgressCommandOutput}
 * @see {@link UpdateSecurityGroupRuleDescriptionsEgressCommandInput} for command's `input` shape.
 * @see {@link UpdateSecurityGroupRuleDescriptionsEgressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To update an outbound security group rule description
 * ```javascript
 * // This example updates the description for the specified security group rule.
 * const input = {
 *   "GroupId": "sg-123abc12",
 *   "IpPermissions": [
 *     {
 *       "FromPort": 80,
 *       "IpProtocol": "tcp",
 *       "IpRanges": [
 *         {
 *           "CidrIp": "203.0.113.0/24",
 *           "Description": "Outbound HTTP access to server 2"
 *         }
 *       ],
 *       "ToPort": 80
 *     }
 *   ]
 * };
 * const command = new UpdateSecurityGroupRuleDescriptionsEgressCommand(input);
 * await client.send(command);
 * // example id: to-update-an-outbound-security-group-rule-description-1529360481544
 * ```
 *
 */
export class UpdateSecurityGroupRuleDescriptionsEgressCommand extends $Command<
  UpdateSecurityGroupRuleDescriptionsEgressCommandInput,
  UpdateSecurityGroupRuleDescriptionsEgressCommandOutput,
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
  constructor(readonly input: UpdateSecurityGroupRuleDescriptionsEgressCommandInput) {
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
    UpdateSecurityGroupRuleDescriptionsEgressCommandInput,
    UpdateSecurityGroupRuleDescriptionsEgressCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        UpdateSecurityGroupRuleDescriptionsEgressCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "UpdateSecurityGroupRuleDescriptionsEgressCommand";
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
    input: UpdateSecurityGroupRuleDescriptionsEgressCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateSecurityGroupRuleDescriptionsEgressCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateSecurityGroupRuleDescriptionsEgressCommandOutput> {
    return de_UpdateSecurityGroupRuleDescriptionsEgressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
