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
import { DescribeSecurityGroupRulesRequest, DescribeSecurityGroupRulesResult } from "../models/models_4";
import { de_DescribeSecurityGroupRulesCommand, se_DescribeSecurityGroupRulesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSecurityGroupRulesCommand}.
 */
export interface DescribeSecurityGroupRulesCommandInput extends DescribeSecurityGroupRulesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSecurityGroupRulesCommand}.
 */
export interface DescribeSecurityGroupRulesCommandOutput extends DescribeSecurityGroupRulesResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more of your security group rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSecurityGroupRulesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSecurityGroupRulesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeSecurityGroupRulesRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   SecurityGroupRuleIds: [ // SecurityGroupRuleIdList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeSecurityGroupRulesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSecurityGroupRulesResult
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
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSecurityGroupRulesCommandInput - {@link DescribeSecurityGroupRulesCommandInput}
 * @returns {@link DescribeSecurityGroupRulesCommandOutput}
 * @see {@link DescribeSecurityGroupRulesCommandInput} for command's `input` shape.
 * @see {@link DescribeSecurityGroupRulesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeSecurityGroupRulesCommand extends $Command<
  DescribeSecurityGroupRulesCommandInput,
  DescribeSecurityGroupRulesCommandOutput,
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
  constructor(readonly input: DescribeSecurityGroupRulesCommandInput) {
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
  ): Handler<DescribeSecurityGroupRulesCommandInput, DescribeSecurityGroupRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSecurityGroupRulesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeSecurityGroupRulesCommand";
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
  private serialize(input: DescribeSecurityGroupRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSecurityGroupRulesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSecurityGroupRulesCommandOutput> {
    return de_DescribeSecurityGroupRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
