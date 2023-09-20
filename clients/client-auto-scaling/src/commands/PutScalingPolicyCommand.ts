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

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { PolicyARNType, PutScalingPolicyType } from "../models/models_0";
import { de_PutScalingPolicyCommand, se_PutScalingPolicyCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutScalingPolicyCommand}.
 */
export interface PutScalingPolicyCommandInput extends PutScalingPolicyType {}
/**
 * @public
 *
 * The output of {@link PutScalingPolicyCommand}.
 */
export interface PutScalingPolicyCommandOutput extends PolicyARNType, __MetadataBearer {}

/**
 * @public
 * <p>Creates or updates a scaling policy for an Auto Scaling group. Scaling policies are used to
 *             scale an Auto Scaling group based on configurable metrics. If no policies are defined, the
 *             dynamic scaling and predictive scaling features are not used. </p>
 *          <p>For more information about using dynamic scaling, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html">Target tracking
 *                 scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html">Step and simple scaling
 *                 policies</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *          <p>For more information about using predictive scaling, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html">Predictive
 *                 scaling for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *          <p>You can view the scaling policies for an Auto Scaling group using the <a>DescribePolicies</a> API call. If you are no longer using a scaling policy,
 *             you can delete it by calling the <a>DeletePolicy</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, PutScalingPolicyCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, PutScalingPolicyCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // PutScalingPolicyType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 *   PolicyType: "STRING_VALUE",
 *   AdjustmentType: "STRING_VALUE",
 *   MinAdjustmentStep: Number("int"),
 *   MinAdjustmentMagnitude: Number("int"),
 *   ScalingAdjustment: Number("int"),
 *   Cooldown: Number("int"),
 *   MetricAggregationType: "STRING_VALUE",
 *   StepAdjustments: [ // StepAdjustments
 *     { // StepAdjustment
 *       MetricIntervalLowerBound: Number("double"),
 *       MetricIntervalUpperBound: Number("double"),
 *       ScalingAdjustment: Number("int"), // required
 *     },
 *   ],
 *   EstimatedInstanceWarmup: Number("int"),
 *   TargetTrackingConfiguration: { // TargetTrackingConfiguration
 *     PredefinedMetricSpecification: { // PredefinedMetricSpecification
 *       PredefinedMetricType: "ASGAverageCPUUtilization" || "ASGAverageNetworkIn" || "ASGAverageNetworkOut" || "ALBRequestCountPerTarget", // required
 *       ResourceLabel: "STRING_VALUE",
 *     },
 *     CustomizedMetricSpecification: { // CustomizedMetricSpecification
 *       MetricName: "STRING_VALUE",
 *       Namespace: "STRING_VALUE",
 *       Dimensions: [ // MetricDimensions
 *         { // MetricDimension
 *           Name: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *       Statistic: "Average" || "Minimum" || "Maximum" || "SampleCount" || "Sum",
 *       Unit: "STRING_VALUE",
 *       Metrics: [ // TargetTrackingMetricDataQueries
 *         { // TargetTrackingMetricDataQuery
 *           Id: "STRING_VALUE", // required
 *           Expression: "STRING_VALUE",
 *           MetricStat: { // TargetTrackingMetricStat
 *             Metric: { // Metric
 *               Namespace: "STRING_VALUE", // required
 *               MetricName: "STRING_VALUE", // required
 *               Dimensions: [
 *                 {
 *                   Name: "STRING_VALUE", // required
 *                   Value: "STRING_VALUE", // required
 *                 },
 *               ],
 *             },
 *             Stat: "STRING_VALUE", // required
 *             Unit: "STRING_VALUE",
 *           },
 *           Label: "STRING_VALUE",
 *           ReturnData: true || false,
 *         },
 *       ],
 *     },
 *     TargetValue: Number("double"), // required
 *     DisableScaleIn: true || false,
 *   },
 *   Enabled: true || false,
 *   PredictiveScalingConfiguration: { // PredictiveScalingConfiguration
 *     MetricSpecifications: [ // PredictiveScalingMetricSpecifications // required
 *       { // PredictiveScalingMetricSpecification
 *         TargetValue: Number("double"), // required
 *         PredefinedMetricPairSpecification: { // PredictiveScalingPredefinedMetricPair
 *           PredefinedMetricType: "ASGCPUUtilization" || "ASGNetworkIn" || "ASGNetworkOut" || "ALBRequestCount", // required
 *           ResourceLabel: "STRING_VALUE",
 *         },
 *         PredefinedScalingMetricSpecification: { // PredictiveScalingPredefinedScalingMetric
 *           PredefinedMetricType: "ASGAverageCPUUtilization" || "ASGAverageNetworkIn" || "ASGAverageNetworkOut" || "ALBRequestCountPerTarget", // required
 *           ResourceLabel: "STRING_VALUE",
 *         },
 *         PredefinedLoadMetricSpecification: { // PredictiveScalingPredefinedLoadMetric
 *           PredefinedMetricType: "ASGTotalCPUUtilization" || "ASGTotalNetworkIn" || "ASGTotalNetworkOut" || "ALBTargetGroupRequestCount", // required
 *           ResourceLabel: "STRING_VALUE",
 *         },
 *         CustomizedScalingMetricSpecification: { // PredictiveScalingCustomizedScalingMetric
 *           MetricDataQueries: [ // MetricDataQueries // required
 *             { // MetricDataQuery
 *               Id: "STRING_VALUE", // required
 *               Expression: "STRING_VALUE",
 *               MetricStat: { // MetricStat
 *                 Metric: {
 *                   Namespace: "STRING_VALUE", // required
 *                   MetricName: "STRING_VALUE", // required
 *                   Dimensions: "<MetricDimensions>",
 *                 },
 *                 Stat: "STRING_VALUE", // required
 *                 Unit: "STRING_VALUE",
 *               },
 *               Label: "STRING_VALUE",
 *               ReturnData: true || false,
 *             },
 *           ],
 *         },
 *         CustomizedLoadMetricSpecification: { // PredictiveScalingCustomizedLoadMetric
 *           MetricDataQueries: [ // required
 *             {
 *               Id: "STRING_VALUE", // required
 *               Expression: "STRING_VALUE",
 *               MetricStat: {
 *                 Metric: {
 *                   Namespace: "STRING_VALUE", // required
 *                   MetricName: "STRING_VALUE", // required
 *                   Dimensions: "<MetricDimensions>",
 *                 },
 *                 Stat: "STRING_VALUE", // required
 *                 Unit: "STRING_VALUE",
 *               },
 *               Label: "STRING_VALUE",
 *               ReturnData: true || false,
 *             },
 *           ],
 *         },
 *         CustomizedCapacityMetricSpecification: { // PredictiveScalingCustomizedCapacityMetric
 *           MetricDataQueries: [ // required
 *             {
 *               Id: "STRING_VALUE", // required
 *               Expression: "STRING_VALUE",
 *               MetricStat: {
 *                 Metric: {
 *                   Namespace: "STRING_VALUE", // required
 *                   MetricName: "STRING_VALUE", // required
 *                   Dimensions: "<MetricDimensions>",
 *                 },
 *                 Stat: "STRING_VALUE", // required
 *                 Unit: "STRING_VALUE",
 *               },
 *               Label: "STRING_VALUE",
 *               ReturnData: true || false,
 *             },
 *           ],
 *         },
 *       },
 *     ],
 *     Mode: "ForecastAndScale" || "ForecastOnly",
 *     SchedulingBufferTime: Number("int"),
 *     MaxCapacityBreachBehavior: "HonorMaxCapacity" || "IncreaseMaxCapacity",
 *     MaxCapacityBuffer: Number("int"),
 *   },
 * };
 * const command = new PutScalingPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PolicyARNType
 * //   PolicyARN: "STRING_VALUE",
 * //   Alarms: [ // Alarms
 * //     { // Alarm
 * //       AlarmName: "STRING_VALUE",
 * //       AlarmARN: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutScalingPolicyCommandInput - {@link PutScalingPolicyCommandInput}
 * @returns {@link PutScalingPolicyCommandOutput}
 * @see {@link PutScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link PutScalingPolicyCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link LimitExceededFault} (client fault)
 *  <p>You have already reached a limit for your Amazon EC2 Auto Scaling
 *             resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For
 *             more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeAccountLimits.html">DescribeAccountLimits</a> in the <i>Amazon EC2 Auto Scaling API
 *             Reference</i>.</p>
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link ServiceLinkedRoleFailure} (server fault)
 *  <p>The service-linked role is not yet ready for use.</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @example To add a scaling policy to an Auto Scaling group
 * ```javascript
 * // This example adds the specified policy to the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "PolicyName": "alb1000-target-tracking-scaling-policy",
 *   "PolicyType": "TargetTrackingScaling",
 *   "TargetTrackingConfiguration": {
 *     "PredefinedMetricSpecification": {
 *       "PredefinedMetricType": "ALBRequestCountPerTarget",
 *       "ResourceLabel": "app/my-alb/778d41231b141a0f/targetgroup/my-alb-target-group/943f017f100becff"
 *     },
 *     "TargetValue": 1000
 *   }
 * };
 * const command = new PutScalingPolicyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Alarms": [
 *     {
 *       "AlarmARN": "arn:aws:cloudwatch:us-west-2:123456789012:alarm:TargetTracking-my-asg-AlarmHigh-fc0e4183-23ac-497e-9992-691c9980c38e",
 *       "AlarmName": "TargetTracking-my-asg-AlarmHigh-fc0e4183-23ac-497e-9992-691c9980c38e"
 *     },
 *     {
 *       "AlarmARN": "arn:aws:cloudwatch:us-west-2:123456789012:alarm:TargetTracking-my-asg-AlarmLow-61a39305-ed0c-47af-bd9e-471a352ee1a2",
 *       "AlarmName": "TargetTracking-my-asg-AlarmLow-61a39305-ed0c-47af-bd9e-471a352ee1a2"
 *     }
 *   ],
 *   "PolicyARN": "arn:aws:autoscaling:us-west-2:123456789012:scalingPolicy:228f02c2-c665-4bfd-aaac-8b04080bea3c:autoScalingGroupName/my-auto-scaling-group:policyName/alb1000-target-tracking-scaling-policy"
 * }
 * *\/
 * // example id: autoscaling-put-scaling-policy-1
 * ```
 *
 */
export class PutScalingPolicyCommand extends $Command<
  PutScalingPolicyCommandInput,
  PutScalingPolicyCommandOutput,
  AutoScalingClientResolvedConfig
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
  constructor(readonly input: PutScalingPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutScalingPolicyCommandInput, PutScalingPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutScalingPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "PutScalingPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AutoScaling_2011_01_01",
        operation: "PutScalingPolicy",
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
  private serialize(input: PutScalingPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutScalingPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutScalingPolicyCommandOutput> {
    return de_PutScalingPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
