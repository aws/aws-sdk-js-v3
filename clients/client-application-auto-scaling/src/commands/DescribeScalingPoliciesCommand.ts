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
import { DescribeScalingPoliciesRequest, DescribeScalingPoliciesResponse } from "../models/models_0";
import { de_DescribeScalingPoliciesCommand, se_DescribeScalingPoliciesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeScalingPoliciesCommand}.
 */
export interface DescribeScalingPoliciesCommandInput extends DescribeScalingPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeScalingPoliciesCommand}.
 */
export interface DescribeScalingPoliciesCommandOutput extends DescribeScalingPoliciesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the Application Auto Scaling scaling policies for the specified service namespace.</p>
 *          <p>You can filter the results using <code>ResourceId</code>,
 *          <code>ScalableDimension</code>, and <code>PolicyNames</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationAutoScalingClient, DescribeScalingPoliciesCommand } from "@aws-sdk/client-application-auto-scaling"; // ES Modules import
 * // const { ApplicationAutoScalingClient, DescribeScalingPoliciesCommand } = require("@aws-sdk/client-application-auto-scaling"); // CommonJS import
 * const client = new ApplicationAutoScalingClient(config);
 * const input = { // DescribeScalingPoliciesRequest
 *   PolicyNames: [ // ResourceIdsMaxLen1600
 *     "STRING_VALUE",
 *   ],
 *   ServiceNamespace: "ecs" || "elasticmapreduce" || "ec2" || "appstream" || "dynamodb" || "rds" || "sagemaker" || "custom-resource" || "comprehend" || "lambda" || "cassandra" || "kafka" || "elasticache" || "neptune", // required
 *   ResourceId: "STRING_VALUE",
 *   ScalableDimension: "ecs:service:DesiredCount" || "ec2:spot-fleet-request:TargetCapacity" || "elasticmapreduce:instancegroup:InstanceCount" || "appstream:fleet:DesiredCapacity" || "dynamodb:table:ReadCapacityUnits" || "dynamodb:table:WriteCapacityUnits" || "dynamodb:index:ReadCapacityUnits" || "dynamodb:index:WriteCapacityUnits" || "rds:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredInstanceCount" || "custom-resource:ResourceType:Property" || "comprehend:document-classifier-endpoint:DesiredInferenceUnits" || "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits" || "lambda:function:ProvisionedConcurrency" || "cassandra:table:ReadCapacityUnits" || "cassandra:table:WriteCapacityUnits" || "kafka:broker-storage:VolumeSize" || "elasticache:replication-group:NodeGroups" || "elasticache:replication-group:Replicas" || "neptune:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredProvisionedConcurrency",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeScalingPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeScalingPoliciesResponse
 * //   ScalingPolicies: [ // ScalingPolicies
 * //     { // ScalingPolicy
 * //       PolicyARN: "STRING_VALUE", // required
 * //       PolicyName: "STRING_VALUE", // required
 * //       ServiceNamespace: "ecs" || "elasticmapreduce" || "ec2" || "appstream" || "dynamodb" || "rds" || "sagemaker" || "custom-resource" || "comprehend" || "lambda" || "cassandra" || "kafka" || "elasticache" || "neptune", // required
 * //       ResourceId: "STRING_VALUE", // required
 * //       ScalableDimension: "ecs:service:DesiredCount" || "ec2:spot-fleet-request:TargetCapacity" || "elasticmapreduce:instancegroup:InstanceCount" || "appstream:fleet:DesiredCapacity" || "dynamodb:table:ReadCapacityUnits" || "dynamodb:table:WriteCapacityUnits" || "dynamodb:index:ReadCapacityUnits" || "dynamodb:index:WriteCapacityUnits" || "rds:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredInstanceCount" || "custom-resource:ResourceType:Property" || "comprehend:document-classifier-endpoint:DesiredInferenceUnits" || "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits" || "lambda:function:ProvisionedConcurrency" || "cassandra:table:ReadCapacityUnits" || "cassandra:table:WriteCapacityUnits" || "kafka:broker-storage:VolumeSize" || "elasticache:replication-group:NodeGroups" || "elasticache:replication-group:Replicas" || "neptune:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredProvisionedConcurrency", // required
 * //       PolicyType: "StepScaling" || "TargetTrackingScaling", // required
 * //       StepScalingPolicyConfiguration: { // StepScalingPolicyConfiguration
 * //         AdjustmentType: "ChangeInCapacity" || "PercentChangeInCapacity" || "ExactCapacity",
 * //         StepAdjustments: [ // StepAdjustments
 * //           { // StepAdjustment
 * //             MetricIntervalLowerBound: Number("double"),
 * //             MetricIntervalUpperBound: Number("double"),
 * //             ScalingAdjustment: Number("int"), // required
 * //           },
 * //         ],
 * //         MinAdjustmentMagnitude: Number("int"),
 * //         Cooldown: Number("int"),
 * //         MetricAggregationType: "Average" || "Minimum" || "Maximum",
 * //       },
 * //       TargetTrackingScalingPolicyConfiguration: { // TargetTrackingScalingPolicyConfiguration
 * //         TargetValue: Number("double"), // required
 * //         PredefinedMetricSpecification: { // PredefinedMetricSpecification
 * //           PredefinedMetricType: "DynamoDBReadCapacityUtilization" || "DynamoDBWriteCapacityUtilization" || "ALBRequestCountPerTarget" || "RDSReaderAverageCPUUtilization" || "RDSReaderAverageDatabaseConnections" || "EC2SpotFleetRequestAverageCPUUtilization" || "EC2SpotFleetRequestAverageNetworkIn" || "EC2SpotFleetRequestAverageNetworkOut" || "SageMakerVariantInvocationsPerInstance" || "ECSServiceAverageCPUUtilization" || "ECSServiceAverageMemoryUtilization" || "AppStreamAverageCapacityUtilization" || "ComprehendInferenceUtilization" || "LambdaProvisionedConcurrencyUtilization" || "CassandraReadCapacityUtilization" || "CassandraWriteCapacityUtilization" || "KafkaBrokerStorageUtilization" || "ElastiCachePrimaryEngineCPUUtilization" || "ElastiCacheReplicaEngineCPUUtilization" || "ElastiCacheDatabaseMemoryUsageCountedForEvictPercentage" || "NeptuneReaderAverageCPUUtilization" || "SageMakerVariantProvisionedConcurrencyUtilization" || "ElastiCacheDatabaseCapacityUsageCountedForEvictPercentage", // required
 * //           ResourceLabel: "STRING_VALUE",
 * //         },
 * //         CustomizedMetricSpecification: { // CustomizedMetricSpecification
 * //           MetricName: "STRING_VALUE",
 * //           Namespace: "STRING_VALUE",
 * //           Dimensions: [ // MetricDimensions
 * //             { // MetricDimension
 * //               Name: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           Statistic: "Average" || "Minimum" || "Maximum" || "SampleCount" || "Sum",
 * //           Unit: "STRING_VALUE",
 * //           Metrics: [ // TargetTrackingMetricDataQueries
 * //             { // TargetTrackingMetricDataQuery
 * //               Expression: "STRING_VALUE",
 * //               Id: "STRING_VALUE", // required
 * //               Label: "STRING_VALUE",
 * //               MetricStat: { // TargetTrackingMetricStat
 * //                 Metric: { // TargetTrackingMetric
 * //                   Dimensions: [ // TargetTrackingMetricDimensions
 * //                     { // TargetTrackingMetricDimension
 * //                       Name: "STRING_VALUE", // required
 * //                       Value: "STRING_VALUE", // required
 * //                     },
 * //                   ],
 * //                   MetricName: "STRING_VALUE",
 * //                   Namespace: "STRING_VALUE",
 * //                 },
 * //                 Stat: "STRING_VALUE", // required
 * //                 Unit: "STRING_VALUE",
 * //               },
 * //               ReturnData: true || false,
 * //             },
 * //           ],
 * //         },
 * //         ScaleOutCooldown: Number("int"),
 * //         ScaleInCooldown: Number("int"),
 * //         DisableScaleIn: true || false,
 * //       },
 * //       Alarms: [ // Alarms
 * //         { // Alarm
 * //           AlarmName: "STRING_VALUE", // required
 * //           AlarmARN: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeScalingPoliciesCommandInput - {@link DescribeScalingPoliciesCommandInput}
 * @returns {@link DescribeScalingPoliciesCommandOutput}
 * @see {@link DescribeScalingPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeScalingPoliciesCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The next token supplied was invalid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception was thrown for a validation issue. Review the available parameters for the
 *          API request.</p>
 *
 * @throws {@link ApplicationAutoScalingServiceException}
 * <p>Base exception class for all service exceptions from ApplicationAutoScaling service.</p>
 *
 * @example To describe scaling policies
 * ```javascript
 * // This example describes the scaling policies for the ECS service namespace.
 * const input = {
 *   "ServiceNamespace": "ecs"
 * };
 * const command = new DescribeScalingPoliciesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NextToken": "",
 *   "ScalingPolicies": [
 *     {
 *       "Alarms": [
 *         {
 *           "AlarmARN": "arn:aws:cloudwatch:us-west-2:012345678910:alarm:web-app-cpu-gt-75",
 *           "AlarmName": "web-app-cpu-gt-75"
 *         }
 *       ],
 *       "CreationTime": "2019-05-06T12:11:39.230Z",
 *       "PolicyARN": "arn:aws:autoscaling:us-west-2:012345678910:scalingPolicy:6d8972f3-efc8-437c-92d1-6270f29a66e7:resource/ecs/service/default/web-app:policyName/web-app-cpu-gt-75",
 *       "PolicyName": "web-app-cpu-gt-75",
 *       "PolicyType": "StepScaling",
 *       "ResourceId": "service/default/web-app",
 *       "ScalableDimension": "ecs:service:DesiredCount",
 *       "ServiceNamespace": "ecs",
 *       "StepScalingPolicyConfiguration": {
 *         "AdjustmentType": "PercentChangeInCapacity",
 *         "Cooldown": 60,
 *         "StepAdjustments": [
 *           {
 *             "MetricIntervalLowerBound": 0,
 *             "ScalingAdjustment": 200
 *           }
 *         ]
 *       }
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-scaling-policies-1470864609734
 * ```
 *
 */
export class DescribeScalingPoliciesCommand extends $Command<
  DescribeScalingPoliciesCommandInput,
  DescribeScalingPoliciesCommandOutput,
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
  constructor(readonly input: DescribeScalingPoliciesCommandInput) {
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
  ): Handler<DescribeScalingPoliciesCommandInput, DescribeScalingPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeScalingPoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationAutoScalingClient";
    const commandName = "DescribeScalingPoliciesCommand";
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
  private serialize(input: DescribeScalingPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeScalingPoliciesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeScalingPoliciesCommandOutput> {
    return de_DescribeScalingPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
