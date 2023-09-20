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

import { AutoScalingPlansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingPlansClient";
import { UpdateScalingPlanRequest, UpdateScalingPlanResponse } from "../models/models_0";
import { de_UpdateScalingPlanCommand, se_UpdateScalingPlanCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateScalingPlanCommand}.
 */
export interface UpdateScalingPlanCommandInput extends UpdateScalingPlanRequest {}
/**
 * @public
 *
 * The output of {@link UpdateScalingPlanCommand}.
 */
export interface UpdateScalingPlanCommandOutput extends UpdateScalingPlanResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the specified scaling plan.</p>
 *          <p>You cannot update a scaling plan if it is in the process of being created, updated, or
 *          deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingPlansClient, UpdateScalingPlanCommand } from "@aws-sdk/client-auto-scaling-plans"; // ES Modules import
 * // const { AutoScalingPlansClient, UpdateScalingPlanCommand } = require("@aws-sdk/client-auto-scaling-plans"); // CommonJS import
 * const client = new AutoScalingPlansClient(config);
 * const input = { // UpdateScalingPlanRequest
 *   ScalingPlanName: "STRING_VALUE", // required
 *   ScalingPlanVersion: Number("long"), // required
 *   ApplicationSource: { // ApplicationSource
 *     CloudFormationStackARN: "STRING_VALUE",
 *     TagFilters: [ // TagFilters
 *       { // TagFilter
 *         Key: "STRING_VALUE",
 *         Values: [ // TagValues
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 *   ScalingInstructions: [ // ScalingInstructions
 *     { // ScalingInstruction
 *       ServiceNamespace: "autoscaling" || "ecs" || "ec2" || "rds" || "dynamodb", // required
 *       ResourceId: "STRING_VALUE", // required
 *       ScalableDimension: "autoscaling:autoScalingGroup:DesiredCapacity" || "ecs:service:DesiredCount" || "ec2:spot-fleet-request:TargetCapacity" || "rds:cluster:ReadReplicaCount" || "dynamodb:table:ReadCapacityUnits" || "dynamodb:table:WriteCapacityUnits" || "dynamodb:index:ReadCapacityUnits" || "dynamodb:index:WriteCapacityUnits", // required
 *       MinCapacity: Number("int"), // required
 *       MaxCapacity: Number("int"), // required
 *       TargetTrackingConfigurations: [ // TargetTrackingConfigurations // required
 *         { // TargetTrackingConfiguration
 *           PredefinedScalingMetricSpecification: { // PredefinedScalingMetricSpecification
 *             PredefinedScalingMetricType: "ASGAverageCPUUtilization" || "ASGAverageNetworkIn" || "ASGAverageNetworkOut" || "DynamoDBReadCapacityUtilization" || "DynamoDBWriteCapacityUtilization" || "ECSServiceAverageCPUUtilization" || "ECSServiceAverageMemoryUtilization" || "ALBRequestCountPerTarget" || "RDSReaderAverageCPUUtilization" || "RDSReaderAverageDatabaseConnections" || "EC2SpotFleetRequestAverageCPUUtilization" || "EC2SpotFleetRequestAverageNetworkIn" || "EC2SpotFleetRequestAverageNetworkOut", // required
 *             ResourceLabel: "STRING_VALUE",
 *           },
 *           CustomizedScalingMetricSpecification: { // CustomizedScalingMetricSpecification
 *             MetricName: "STRING_VALUE", // required
 *             Namespace: "STRING_VALUE", // required
 *             Dimensions: [ // MetricDimensions
 *               { // MetricDimension
 *                 Name: "STRING_VALUE", // required
 *                 Value: "STRING_VALUE", // required
 *               },
 *             ],
 *             Statistic: "Average" || "Minimum" || "Maximum" || "SampleCount" || "Sum", // required
 *             Unit: "STRING_VALUE",
 *           },
 *           TargetValue: Number("double"), // required
 *           DisableScaleIn: true || false,
 *           ScaleOutCooldown: Number("int"),
 *           ScaleInCooldown: Number("int"),
 *           EstimatedInstanceWarmup: Number("int"),
 *         },
 *       ],
 *       PredefinedLoadMetricSpecification: { // PredefinedLoadMetricSpecification
 *         PredefinedLoadMetricType: "ASGTotalCPUUtilization" || "ASGTotalNetworkIn" || "ASGTotalNetworkOut" || "ALBTargetGroupRequestCount", // required
 *         ResourceLabel: "STRING_VALUE",
 *       },
 *       CustomizedLoadMetricSpecification: { // CustomizedLoadMetricSpecification
 *         MetricName: "STRING_VALUE", // required
 *         Namespace: "STRING_VALUE", // required
 *         Dimensions: [
 *           {
 *             Name: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *         Statistic: "Average" || "Minimum" || "Maximum" || "SampleCount" || "Sum", // required
 *         Unit: "STRING_VALUE",
 *       },
 *       ScheduledActionBufferTime: Number("int"),
 *       PredictiveScalingMaxCapacityBehavior: "SetForecastCapacityToMaxCapacity" || "SetMaxCapacityToForecastCapacity" || "SetMaxCapacityAboveForecastCapacity",
 *       PredictiveScalingMaxCapacityBuffer: Number("int"),
 *       PredictiveScalingMode: "ForecastAndScale" || "ForecastOnly",
 *       ScalingPolicyUpdateBehavior: "KeepExternalPolicies" || "ReplaceExternalPolicies",
 *       DisableDynamicScaling: true || false,
 *     },
 *   ],
 * };
 * const command = new UpdateScalingPlanCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateScalingPlanCommandInput - {@link UpdateScalingPlanCommandInput}
 * @returns {@link UpdateScalingPlanCommandOutput}
 * @see {@link UpdateScalingPlanCommandInput} for command's `input` shape.
 * @see {@link UpdateScalingPlanCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingPlansClientResolvedConfig | config} for AutoScalingPlansClient's `config` shape.
 *
 * @throws {@link ConcurrentUpdateException} (server fault)
 *  <p>Concurrent updates caused an exception, for example, if you request an update to a
 *          scaling plan that already has a pending update.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an internal error.</p>
 *
 * @throws {@link ObjectNotFoundException} (client fault)
 *  <p>The specified object could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception was thrown for a validation issue. Review the parameters provided.</p>
 *
 * @throws {@link AutoScalingPlansServiceException}
 * <p>Base exception class for all service exceptions from AutoScalingPlans service.</p>
 *
 */
export class UpdateScalingPlanCommand extends $Command<
  UpdateScalingPlanCommandInput,
  UpdateScalingPlanCommandOutput,
  AutoScalingPlansClientResolvedConfig
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
  constructor(readonly input: UpdateScalingPlanCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingPlansClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateScalingPlanCommandInput, UpdateScalingPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateScalingPlanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingPlansClient";
    const commandName = "UpdateScalingPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AnyScaleScalingPlannerFrontendService",
        operation: "UpdateScalingPlan",
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
  private serialize(input: UpdateScalingPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateScalingPlanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateScalingPlanCommandOutput> {
    return de_UpdateScalingPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
