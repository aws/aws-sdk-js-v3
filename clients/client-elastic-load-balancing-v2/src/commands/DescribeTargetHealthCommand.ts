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
import { DescribeTargetHealthInput, DescribeTargetHealthOutput } from "../models/models_0";
import { de_DescribeTargetHealthCommand, se_DescribeTargetHealthCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTargetHealthCommand}.
 */
export interface DescribeTargetHealthCommandInput extends DescribeTargetHealthInput {}
/**
 * @public
 *
 * The output of {@link DescribeTargetHealthCommand}.
 */
export interface DescribeTargetHealthCommandOutput extends DescribeTargetHealthOutput, __MetadataBearer {}

/**
 * @public
 * <p>Describes the health of the specified targets or all of your targets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeTargetHealthCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeTargetHealthCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // DescribeTargetHealthInput
 *   TargetGroupArn: "STRING_VALUE", // required
 *   Targets: [ // TargetDescriptions
 *     { // TargetDescription
 *       Id: "STRING_VALUE", // required
 *       Port: Number("int"),
 *       AvailabilityZone: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new DescribeTargetHealthCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTargetHealthOutput
 * //   TargetHealthDescriptions: [ // TargetHealthDescriptions
 * //     { // TargetHealthDescription
 * //       Target: { // TargetDescription
 * //         Id: "STRING_VALUE", // required
 * //         Port: Number("int"),
 * //         AvailabilityZone: "STRING_VALUE",
 * //       },
 * //       HealthCheckPort: "STRING_VALUE",
 * //       TargetHealth: { // TargetHealth
 * //         State: "initial" || "healthy" || "unhealthy" || "unused" || "draining" || "unavailable",
 * //         Reason: "Elb.RegistrationInProgress" || "Elb.InitialHealthChecking" || "Target.ResponseCodeMismatch" || "Target.Timeout" || "Target.FailedHealthChecks" || "Target.NotRegistered" || "Target.NotInUse" || "Target.DeregistrationInProgress" || "Target.InvalidState" || "Target.IpUnusable" || "Target.HealthCheckDisabled" || "Elb.InternalError",
 * //         Description: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeTargetHealthCommandInput - {@link DescribeTargetHealthCommandInput}
 * @returns {@link DescribeTargetHealthCommandOutput}
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
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticLoadBalancing_v10",
        operation: "DescribeTargetHealth",
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
  private serialize(input: DescribeTargetHealthCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeTargetHealthCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTargetHealthCommandOutput> {
    return de_DescribeTargetHealthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
