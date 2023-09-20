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
import {
  DescribeClientVpnAuthorizationRulesRequest,
  DescribeClientVpnAuthorizationRulesResult,
} from "../models/models_3";
import {
  de_DescribeClientVpnAuthorizationRulesCommand,
  se_DescribeClientVpnAuthorizationRulesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeClientVpnAuthorizationRulesCommand}.
 */
export interface DescribeClientVpnAuthorizationRulesCommandInput extends DescribeClientVpnAuthorizationRulesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClientVpnAuthorizationRulesCommand}.
 */
export interface DescribeClientVpnAuthorizationRulesCommandOutput
  extends DescribeClientVpnAuthorizationRulesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the authorization rules for a specified Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeClientVpnAuthorizationRulesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeClientVpnAuthorizationRulesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeClientVpnAuthorizationRulesRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   DryRun: true || false,
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeClientVpnAuthorizationRulesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClientVpnAuthorizationRulesResult
 * //   AuthorizationRules: [ // AuthorizationRuleSet
 * //     { // AuthorizationRule
 * //       ClientVpnEndpointId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       GroupId: "STRING_VALUE",
 * //       AccessAll: true || false,
 * //       DestinationCidr: "STRING_VALUE",
 * //       Status: { // ClientVpnAuthorizationRuleStatus
 * //         Code: "authorizing" || "active" || "failed" || "revoking",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeClientVpnAuthorizationRulesCommandInput - {@link DescribeClientVpnAuthorizationRulesCommandInput}
 * @returns {@link DescribeClientVpnAuthorizationRulesCommandOutput}
 * @see {@link DescribeClientVpnAuthorizationRulesCommandInput} for command's `input` shape.
 * @see {@link DescribeClientVpnAuthorizationRulesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeClientVpnAuthorizationRulesCommand extends $Command<
  DescribeClientVpnAuthorizationRulesCommandInput,
  DescribeClientVpnAuthorizationRulesCommandOutput,
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
  constructor(readonly input: DescribeClientVpnAuthorizationRulesCommandInput) {
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
  ): Handler<DescribeClientVpnAuthorizationRulesCommandInput, DescribeClientVpnAuthorizationRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeClientVpnAuthorizationRulesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeClientVpnAuthorizationRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeClientVpnAuthorizationRules",
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
    input: DescribeClientVpnAuthorizationRulesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeClientVpnAuthorizationRulesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeClientVpnAuthorizationRulesCommandOutput> {
    return de_DescribeClientVpnAuthorizationRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
