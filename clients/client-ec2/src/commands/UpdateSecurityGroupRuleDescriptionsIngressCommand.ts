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
  UpdateSecurityGroupRuleDescriptionsIngressRequest,
  UpdateSecurityGroupRuleDescriptionsIngressResult,
} from "../models/models_7";
import {
  de_UpdateSecurityGroupRuleDescriptionsIngressCommand,
  se_UpdateSecurityGroupRuleDescriptionsIngressCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateSecurityGroupRuleDescriptionsIngressCommand}.
 */
export interface UpdateSecurityGroupRuleDescriptionsIngressCommandInput
  extends UpdateSecurityGroupRuleDescriptionsIngressRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSecurityGroupRuleDescriptionsIngressCommand}.
 */
export interface UpdateSecurityGroupRuleDescriptionsIngressCommandOutput
  extends UpdateSecurityGroupRuleDescriptionsIngressResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates the description of an ingress (inbound) security group rule. You can replace an
 * 			existing description, or add a description to a rule that did not have one previously.
 * 		    You can remove a description for a security group rule by omitting the description
 * 		    parameter in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UpdateSecurityGroupRuleDescriptionsIngressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UpdateSecurityGroupRuleDescriptionsIngressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // UpdateSecurityGroupRuleDescriptionsIngressRequest
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
 * const command = new UpdateSecurityGroupRuleDescriptionsIngressCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSecurityGroupRuleDescriptionsIngressResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param UpdateSecurityGroupRuleDescriptionsIngressCommandInput - {@link UpdateSecurityGroupRuleDescriptionsIngressCommandInput}
 * @returns {@link UpdateSecurityGroupRuleDescriptionsIngressCommandOutput}
 * @see {@link UpdateSecurityGroupRuleDescriptionsIngressCommandInput} for command's `input` shape.
 * @see {@link UpdateSecurityGroupRuleDescriptionsIngressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To update an inbound security group rule description
 * ```javascript
 * // This example updates the description for the specified security group rule.
 * const input = {
 *   "GroupId": "sg-123abc12",
 *   "IpPermissions": [
 *     {
 *       "FromPort": 22,
 *       "IpProtocol": "tcp",
 *       "IpRanges": [
 *         {
 *           "CidrIp": "203.0.113.0/16",
 *           "Description": "SSH access from the LA office"
 *         }
 *       ],
 *       "ToPort": 22
 *     }
 *   ]
 * };
 * const command = new UpdateSecurityGroupRuleDescriptionsIngressCommand(input);
 * await client.send(command);
 * // example id: to-update-an-inbound-security-group-rule-description-1529360820372
 * ```
 *
 */
export class UpdateSecurityGroupRuleDescriptionsIngressCommand extends $Command<
  UpdateSecurityGroupRuleDescriptionsIngressCommandInput,
  UpdateSecurityGroupRuleDescriptionsIngressCommandOutput,
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
  constructor(readonly input: UpdateSecurityGroupRuleDescriptionsIngressCommandInput) {
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
    UpdateSecurityGroupRuleDescriptionsIngressCommandInput,
    UpdateSecurityGroupRuleDescriptionsIngressCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        UpdateSecurityGroupRuleDescriptionsIngressCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "UpdateSecurityGroupRuleDescriptionsIngressCommand";
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
    input: UpdateSecurityGroupRuleDescriptionsIngressCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateSecurityGroupRuleDescriptionsIngressCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateSecurityGroupRuleDescriptionsIngressCommandOutput> {
    return de_UpdateSecurityGroupRuleDescriptionsIngressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
