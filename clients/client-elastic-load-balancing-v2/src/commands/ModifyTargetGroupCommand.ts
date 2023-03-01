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

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import {
  ModifyTargetGroupInput,
  ModifyTargetGroupInputFilterSensitiveLog,
  ModifyTargetGroupOutput,
  ModifyTargetGroupOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryModifyTargetGroupCommand,
  serializeAws_queryModifyTargetGroupCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link ModifyTargetGroupCommand}.
 */
export interface ModifyTargetGroupCommandInput extends ModifyTargetGroupInput {}
/**
 * The output of {@link ModifyTargetGroupCommand}.
 */
export interface ModifyTargetGroupCommandOutput extends ModifyTargetGroupOutput, __MetadataBearer {}

/**
 * <p>Modifies the health checks used when evaluating the health state of the targets in the
 *       specified target group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, ModifyTargetGroupCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, ModifyTargetGroupCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new ModifyTargetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyTargetGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyTargetGroupCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 *
 * @example To modify the health check configuration for a target group
 * ```javascript
 * // This example changes the configuration of the health checks used to evaluate the health of the targets for the specified target group.
 * const input = {
 *   "HealthCheckPort": "443",
 *   "HealthCheckProtocol": "HTTPS",
 *   "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-https-targets/2453ed029918f21f"
 * };
 * const command = new ModifyTargetGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "TargetGroups": [
 *     {
 *       "HealthCheckIntervalSeconds": 30,
 *       "HealthCheckPort": "443",
 *       "HealthCheckProtocol": "HTTPS",
 *       "HealthCheckTimeoutSeconds": 5,
 *       "HealthyThresholdCount": 5,
 *       "LoadBalancerArns": [
 *         "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188"
 *       ],
 *       "Matcher": {
 *         "HttpCode": "200"
 *       },
 *       "Port": 443,
 *       "Protocol": "HTTPS",
 *       "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-https-targets/2453ed029918f21f",
 *       "TargetGroupName": "my-https-targets",
 *       "UnhealthyThresholdCount": 2,
 *       "VpcId": "vpc-3ac0fb5f"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 */
export class ModifyTargetGroupCommand extends $Command<
  ModifyTargetGroupCommandInput,
  ModifyTargetGroupCommandOutput,
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

  constructor(readonly input: ModifyTargetGroupCommandInput) {
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
  ): Handler<ModifyTargetGroupCommandInput, ModifyTargetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyTargetGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "ModifyTargetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyTargetGroupInputFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyTargetGroupOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyTargetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyTargetGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyTargetGroupCommandOutput> {
    return deserializeAws_queryModifyTargetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
