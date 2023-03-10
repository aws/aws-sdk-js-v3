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
  DescribeTargetHealthInput,
  DescribeTargetHealthInputFilterSensitiveLog,
  DescribeTargetHealthOutput,
  DescribeTargetHealthOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeTargetHealthCommand,
  serializeAws_queryDescribeTargetHealthCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link DescribeTargetHealthCommand}.
 */
export interface DescribeTargetHealthCommandInput extends DescribeTargetHealthInput {}
/**
 * The output of {@link DescribeTargetHealthCommand}.
 */
export interface DescribeTargetHealthCommandOutput extends DescribeTargetHealthOutput, __MetadataBearer {}

/**
 * <p>Describes the health of the specified targets or all of your targets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeTargetHealthCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeTargetHealthCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new DescribeTargetHealthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTargetHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeTargetHealthCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link HealthUnavailableException} (server fault)
 *  <p>The health of the specified targets could not be retrieved due to an internal
 *       error.</p>
 *
 * @throws {@link InvalidTargetException} (client fault)
 *  <p>The specified target does not exist, is not in the same VPC as the target group, or has an
 *       unsupported instance type.</p>
 *
 * @throws {@link TargetGroupNotFoundException} (client fault)
 *  <p>The specified target group does not exist.</p>
 *
 *
 * @example To describe the health of the targets for a target group
 * ```javascript
 * // This example describes the health of the targets for the specified target group. One target is healthy but the other is not specified in an action, so it can't receive traffic from the load balancer.
 * const input = {
 *   "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067"
 * };
 * const command = new DescribeTargetHealthCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "TargetHealthDescriptions": [
 *     {
 *       "Target": {
 *         "Id": "i-0f76fade",
 *         "Port": 80
 *       },
 *       "TargetHealth": {
 *         "Description": "Given target group is not configured to receive traffic from ELB",
 *         "Reason": "Target.NotInUse",
 *         "State": "unused"
 *       }
 *     },
 *     {
 *       "HealthCheckPort": "80",
 *       "Target": {
 *         "Id": "i-0f76fade",
 *         "Port": 80
 *       },
 *       "TargetHealth": {
 *         "State": "healthy"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * // example id: elbv2-describe-target-health-1
 * ```
 *
 * @example To describe the health of a target
 * ```javascript
 * // This example describes the health of the specified target. This target is healthy.
 * const input = {
 *   "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
 *   "Targets": [
 *     {
 *       "Id": "i-0f76fade",
 *       "Port": 80
 *     }
 *   ]
 * };
 * const command = new DescribeTargetHealthCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "TargetHealthDescriptions": [
 *     {
 *       "HealthCheckPort": "80",
 *       "Target": {
 *         "Id": "i-0f76fade",
 *         "Port": 80
 *       },
 *       "TargetHealth": {
 *         "State": "healthy"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * // example id: elbv2-describe-target-health-2
 * ```
 *
 */
export class DescribeTargetHealthCommand extends $Command<
  DescribeTargetHealthCommandInput,
  DescribeTargetHealthCommandOutput,
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

  constructor(readonly input: DescribeTargetHealthCommandInput) {
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
  ): Handler<DescribeTargetHealthCommandInput, DescribeTargetHealthCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTargetHealthCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "DescribeTargetHealthCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTargetHealthInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeTargetHealthOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTargetHealthCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeTargetHealthCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTargetHealthCommandOutput> {
    return deserializeAws_queryDescribeTargetHealthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
