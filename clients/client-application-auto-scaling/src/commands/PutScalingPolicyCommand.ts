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

import {
  ApplicationAutoScalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationAutoScalingClient";
import { PutScalingPolicyRequest, PutScalingPolicyResponse } from "../models/models_0";
import { de_PutScalingPolicyCommand, se_PutScalingPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutScalingPolicyCommand}.
 */
export interface PutScalingPolicyCommandInput extends PutScalingPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutScalingPolicyCommand}.
 */
export interface PutScalingPolicyCommandOutput extends PutScalingPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates or updates a scaling policy for an Application Auto Scaling scalable target.</p>
 *          <p>Each scalable target is identified by a service namespace, resource ID, and scalable
 *          dimension. A scaling policy applies to the scalable target identified by those three
 *          attributes. You cannot create a scaling policy until you have registered the resource as a
 *          scalable target.</p>
 *          <p>Multiple scaling policies can be in force at the same time for the same scalable target.
 *          You can have one or more target tracking scaling policies, one or more step scaling
 *          policies, or both. However, there is a chance that multiple policies could conflict,
 *          instructing the scalable target to scale out or in at the same time. Application Auto Scaling gives
 *          precedence to the policy that provides the largest capacity for both scale out and scale
 *          in. For example, if one policy increases capacity by 3, another policy increases capacity
 *          by 200 percent, and the current capacity is 10, Application Auto Scaling uses the policy with the highest
 *          calculated capacity (200% of 10 = 20) and scales out to 30. </p>
 *          <p>We recommend caution, however, when using target tracking scaling policies with step
 *          scaling policies because conflicts between these policies can cause undesirable behavior.
 *          For example, if the step scaling policy initiates a scale-in activity before the target
 *          tracking policy is ready to scale in, the scale-in activity will not be blocked. After the
 *          scale-in activity completes, the target tracking policy could instruct the scalable target
 *          to scale out again. </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p>
 *          <note>
 *             <p>If a scalable target is deregistered, the scalable target is no longer available to
 *             use scaling policies. Any scaling policies that were specified for the scalable target
 *             are deleted.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationAutoScalingClient, PutScalingPolicyCommand } from "@aws-sdk/client-application-auto-scaling"; // ES Modules import
 * // const { ApplicationAutoScalingClient, PutScalingPolicyCommand } = require("@aws-sdk/client-application-auto-scaling"); // CommonJS import
 * const client = new ApplicationAutoScalingClient(config);
 * const input = { // PutScalingPolicyRequest
 *   PolicyName: "STRING_VALUE", // required
 *   ServiceNamespace: "ecs" || "elasticmapreduce" || "ec2" || "appstream" || "dynamodb" || "rds" || "sagemaker" || "custom-resource" || "comprehend" || "lambda" || "cassandra" || "kafka" || "elasticache" || "neptune", // required
 *   ResourceId: "STRING_VALUE", // required
 *   ScalableDimension: "ecs:service:DesiredCount" || "ec2:spot-fleet-request:TargetCapacity" || "elasticmapreduce:instancegroup:InstanceCount" || "appstream:fleet:DesiredCapacity" || "dynamodb:table:ReadCapacityUnits" || "dynamodb:table:WriteCapacityUnits" || "dynamodb:index:ReadCapacityUnits" || "dynamodb:index:WriteCapacityUnits" || "rds:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredInstanceCount" || "custom-resource:ResourceType:Property" || "comprehend:document-classifier-endpoint:DesiredInferenceUnits" || "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits" || "lambda:function:ProvisionedConcurrency" || "cassandra:table:ReadCapacityUnits" || "cassandra:table:WriteCapacityUnits" || "kafka:broker-storage:VolumeSize" || "elasticache:replication-group:NodeGroups" || "elasticache:replication-group:Replicas" || "neptune:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredProvisionedConcurrency", // required
 *   PolicyType: "StepScaling" || "TargetTrackingScaling",
 *   StepScalingPolicyConfiguration: { // StepScalingPolicyConfiguration
 *     AdjustmentType: "ChangeInCapacity" || "PercentChangeInCapacity" || "ExactCapacity",
 *     StepAdjustments: [ // StepAdjustments
 *       { // StepAdjustment
 *         MetricIntervalLowerBound: Number("double"),
 *         MetricIntervalUpperBound: Number("double"),
 *         ScalingAdjustment: Number("int"), // required
 *       },
 *     ],
 *     MinAdjustmentMagnitude: Number("int"),
 *     Cooldown: Number("int"),
 *     MetricAggregationType: "Average" || "Minimum" || "Maximum",
 *   },
 *   TargetTrackingScalingPolicyConfiguration: { // TargetTrackingScalingPolicyConfiguration
 *     TargetValue: Number("double"), // required
 *     PredefinedMetricSpecification: { // PredefinedMetricSpecification
 *       PredefinedMetricType: "DynamoDBReadCapacityUtilization" || "DynamoDBWriteCapacityUtilization" || "ALBRequestCountPerTarget" || "RDSReaderAverageCPUUtilization" || "RDSReaderAverageDatabaseConnections" || "EC2SpotFleetRequestAverageCPUUtilization" || "EC2SpotFleetRequestAverageNetworkIn" || "EC2SpotFleetRequestAverageNetworkOut" || "SageMakerVariantInvocationsPerInstance" || "ECSServiceAverageCPUUtilization" || "ECSServiceAverageMemoryUtilization" || "AppStreamAverageCapacityUtilization" || "ComprehendInferenceUtilization" || "LambdaProvisionedConcurrencyUtilization" || "CassandraReadCapacityUtilization" || "CassandraWriteCapacityUtilization" || "KafkaBrokerStorageUtilization" || "ElastiCachePrimaryEngineCPUUtilization" || "ElastiCacheReplicaEngineCPUUtilization" || "ElastiCacheDatabaseMemoryUsageCountedForEvictPercentage" || "NeptuneReaderAverageCPUUtilization" || "SageMakerVariantProvisionedConcurrencyUtilization" || "ElastiCacheDatabaseCapacityUsageCountedForEvictPercentage", // required
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
 *           Expression: "STRING_VALUE",
 *           Id: "STRING_VALUE", // required
 *           Label: "STRING_VALUE",
 *           MetricStat: { // TargetTrackingMetricStat
 *             Metric: { // TargetTrackingMetric
 *               Dimensions: [ // TargetTrackingMetricDimensions
 *                 { // TargetTrackingMetricDimension
 *                   Name: "STRING_VALUE", // required
 *                   Value: "STRING_VALUE", // required
 *                 },
 *               ],
 *               MetricName: "STRING_VALUE",
 *               Namespace: "STRING_VALUE",
 *             },
 *             Stat: "STRING_VALUE", // required
 *             Unit: "STRING_VALUE",
 *           },
 *           ReturnData: true || false,
 *         },
 *       ],
 *     },
 *     ScaleOutCooldown: Number("int"),
 *     ScaleInCooldown: Number("int"),
 *     DisableScaleIn: true || false,
 *   },
 * };
 * const command = new PutScalingPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutScalingPolicyResponse
 * //   PolicyARN: "STRING_VALUE", // required
 * //   Alarms: [ // Alarms
 * //     { // Alarm
 * //       AlarmName: "STRING_VALUE", // required
 * //       AlarmARN: "STRING_VALUE", // required
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
 * @see {@link ApplicationAutoScalingClientResolvedConfig | config} for ApplicationAutoScalingClient's `config` shape.
 *
 * @throws {@link ConcurrentUpdateException} (server fault)
 *  <p>Concurrent updates caused an exception, for example, if you request an update to an
 *          Application Auto Scaling resource that already has a pending update.</p>
 *
 * @throws {@link FailedResourceAccessException} (client fault)
 *  <p>Failed access to resources caused an exception. This exception is thrown when Application Auto Scaling
 *          is unable to retrieve the alarms associated with a scaling policy due to a client error,
 *          for example, if the role ARN specified for a scalable target does not have permission to
 *          call the CloudWatch <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html">DescribeAlarms</a> on your behalf.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an internal error.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A per-account resource limit is exceeded. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-limits.html">Application Auto Scaling service quotas</a>.</p>
 *
 * @throws {@link ObjectNotFoundException} (client fault)
 *  <p>The specified object could not be found. For any operation that depends on the existence
 *          of a scalable target, this exception is thrown if the scalable target with the specified
 *          service namespace, resource ID, and scalable dimension does not exist. For any operation
 *          that deletes or deregisters a resource, this exception is thrown if the resource cannot be
 *          found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception was thrown for a validation issue. Review the available parameters for the
 *          API request.</p>
 *
 * @throws {@link ApplicationAutoScalingServiceException}
 * <p>Base exception class for all service exceptions from ApplicationAutoScaling service.</p>
 *
 * @example To apply a target tracking scaling policy with a predefined metric specification
 * ```javascript
 * // The following example applies a target tracking scaling policy with a predefined metric specification to an Amazon ECS service called web-app in the default cluster. The policy keeps the average CPU utilization of the service at 75 percent, with scale-out and scale-in cooldown periods of 60 seconds.
 * const input = {
 *   "PolicyName": "cpu75-target-tracking-scaling-policy",
 *   "PolicyType": "TargetTrackingScaling",
 *   "ResourceId": "service/default/web-app",
 *   "ScalableDimension": "ecs:service:DesiredCount",
 *   "ServiceNamespace": "ecs",
 *   "TargetTrackingScalingPolicyConfiguration": {
 *     "PredefinedMetricSpecification": {
 *       "PredefinedMetricType": "ECSServiceAverageCPUUtilization"
 *     },
 *     "ScaleInCooldown": 60,
 *     "ScaleOutCooldown": 60,
 *     "TargetValue": 75
 *   }
 * };
 * const command = new PutScalingPolicyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Alarms": [
 *     {
 *       "AlarmARN": "arn:aws:cloudwatch:us-west-2:012345678910:alarm:TargetTracking-service/default/web-app-AlarmHigh-d4f0770c-b46e-434a-a60f-3b36d653feca",
 *       "AlarmName": "TargetTracking-service/default/web-app-AlarmHigh-d4f0770c-b46e-434a-a60f-3b36d653feca"
 *     },
 *     {
 *       "AlarmARN": "arn:aws:cloudwatch:us-west-2:012345678910:alarm:TargetTracking-service/default/web-app-AlarmLow-1b437334-d19b-4a63-a812-6c67aaf2910d",
 *       "AlarmName": "TargetTracking-service/default/web-app-AlarmLow-1b437334-d19b-4a63-a812-6c67aaf2910d"
 *     }
 *   ],
 *   "PolicyARN": "arn:aws:autoscaling:us-west-2:012345678910:scalingPolicy:6d8972f3-efc8-437c-92d1-6270f29a66e7:resource/ecs/service/default/web-app:policyName/cpu75-target-tracking-scaling-policy"
 * }
 * *\/
 * // example id: to-apply-a-target-tracking-scaling-policy-with-a-predefined-metric-specification-1569364247984
 * ```
 *
 */
export class PutScalingPolicyCommand extends $Command<
  PutScalingPolicyCommandInput,
  PutScalingPolicyCommandOutput,
  ApplicationAutoScalingClientResolvedConfig
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
    configuration: ApplicationAutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutScalingPolicyCommandInput, PutScalingPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutScalingPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationAutoScalingClient";
    const commandName = "PutScalingPolicyCommand";
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
