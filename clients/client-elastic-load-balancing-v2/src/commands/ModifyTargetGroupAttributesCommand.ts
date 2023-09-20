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

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { ModifyTargetGroupAttributesInput, ModifyTargetGroupAttributesOutput } from "../models/models_0";
import { de_ModifyTargetGroupAttributesCommand, se_ModifyTargetGroupAttributesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyTargetGroupAttributesCommand}.
 */
export interface ModifyTargetGroupAttributesCommandInput extends ModifyTargetGroupAttributesInput {}
/**
 * @public
 *
 * The output of {@link ModifyTargetGroupAttributesCommand}.
 */
export interface ModifyTargetGroupAttributesCommandOutput extends ModifyTargetGroupAttributesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the specified attributes of the specified target group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, ModifyTargetGroupAttributesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, ModifyTargetGroupAttributesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // ModifyTargetGroupAttributesInput
 *   TargetGroupArn: "STRING_VALUE", // required
 *   Attributes: [ // TargetGroupAttributes // required
 *     { // TargetGroupAttribute
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ModifyTargetGroupAttributesCommand(input);
 * const response = await client.send(command);
 * // { // ModifyTargetGroupAttributesOutput
 * //   Attributes: [ // TargetGroupAttributes
 * //     { // TargetGroupAttribute
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ModifyTargetGroupAttributesCommandInput - {@link ModifyTargetGroupAttributesCommandInput}
 * @returns {@link ModifyTargetGroupAttributesCommandOutput}
 * @see {@link ModifyTargetGroupAttributesCommandInput} for command's `input` shape.
 * @see {@link ModifyTargetGroupAttributesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration is not valid.</p>
 *
 * @throws {@link TargetGroupNotFoundException} (client fault)
 *  <p>The specified target group does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 * @example To modify the deregistration delay timeout
 * ```javascript
 * // This example sets the deregistration delay timeout to the specified value for the specified target group.
 * const input = {
 *   "Attributes": [
 *     {
 *       "Key": "deregistration_delay.timeout_seconds",
 *       "Value": "600"
 *     }
 *   ],
 *   "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067"
 * };
 * const command = new ModifyTargetGroupAttributesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Attributes": [
 *     {
 *       "Key": "stickiness.enabled",
 *       "Value": "false"
 *     },
 *     {
 *       "Key": "deregistration_delay.timeout_seconds",
 *       "Value": "600"
 *     },
 *     {
 *       "Key": "stickiness.type",
 *       "Value": "lb_cookie"
 *     },
 *     {
 *       "Key": "stickiness.lb_cookie.duration_seconds",
 *       "Value": "86400"
 *     }
 *   ]
 * }
 * *\/
 * // example id: elbv2-modify-target-group-attributes-1
 * ```
 *
 */
export class ModifyTargetGroupAttributesCommand extends $Command<
  ModifyTargetGroupAttributesCommandInput,
  ModifyTargetGroupAttributesCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
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
  constructor(readonly input: ModifyTargetGroupAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyTargetGroupAttributesCommandInput, ModifyTargetGroupAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyTargetGroupAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "ModifyTargetGroupAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticLoadBalancing_v10",
        operation: "ModifyTargetGroupAttributes",
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
  private serialize(input: ModifyTargetGroupAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyTargetGroupAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyTargetGroupAttributesCommandOutput> {
    return de_ModifyTargetGroupAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
