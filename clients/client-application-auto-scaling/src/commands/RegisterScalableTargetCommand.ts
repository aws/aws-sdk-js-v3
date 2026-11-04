// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterScalableTargetRequest, RegisterScalableTargetResponse } from "../models/models_0";
import { RegisterScalableTarget$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterScalableTargetCommand}.
 */
export interface RegisterScalableTargetCommandInput extends RegisterScalableTargetRequest {}
/**
 * @public
 *
 * The output of {@link RegisterScalableTargetCommand}.
 */
export interface RegisterScalableTargetCommandOutput extends RegisterScalableTargetResponse, __MetadataBearer {}

/**
 * Registers or updates a scalable target, which is the resource that you want to scale.
 *
 * Scalable targets are uniquely identified by the combination of resource ID, scalable dimension, and namespace, which represents some capacity dimension of the underlying service.
 *
 * When you register a new scalable target, you must specify values for the minimum and maximum capacity. If the specified resource is not active in the target service, this operation does not change the resource's current capacity. Otherwise, it changes the resource's current capacity to a value that is inside of this range.
 *
 * If you add a scaling policy, current capacity is adjustable within the specified range when scaling starts. Application Auto Scaling scaling policies will not scale capacity to values that are outside of the minimum and maximum range.
 *
 * After you register a scalable target, you do not need to register it again to use other Application Auto Scaling operations. To see which resources have been registered, use [DescribeScalableTargets](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html). You can also view the scaling policies for a service namespace by using [DescribeScalableTargets](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html). If you no longer need a scalable target, you can deregister it by using [DeregisterScalableTarget](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeregisterScalableTarget.html).
 *
 * To update a scalable target, specify the parameters that you want to change. Include the parameters that identify the scalable target: resource ID, scalable dimension, and namespace. Any parameters that you don't specify are not changed by this update request.
 *
 * > **Note:**
 * >
 * > If you call the `RegisterScalableTarget` API operation to create a scalable target, there might be a brief delay until the operation achieves [eventual consistency](https://en.wikipedia.org/wiki/Eventual_consistency). You might become aware of this brief delay if you get unexpected errors when performing sequential operations. The typical strategy is to retry the request, and some Amazon Web Services SDKs include automatic backoff and retry logic.
 * >
 * > If you call the `RegisterScalableTarget` API operation to update an existing scalable target, Application Auto Scaling retrieves the current capacity of the resource. If it's below the minimum capacity or above the maximum capacity, Application Auto Scaling adjusts the capacity of the scalable target to place it within these bounds, even if you don't include the `MinCapacity` or `MaxCapacity` request parameters.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationAutoScalingClient, RegisterScalableTargetCommand } from "@aws-sdk/client-application-auto-scaling"; // ES Modules import
 * // const { ApplicationAutoScalingClient, RegisterScalableTargetCommand } = require("@aws-sdk/client-application-auto-scaling"); // CommonJS import
 * // import type { ApplicationAutoScalingClientConfig } from "@aws-sdk/client-application-auto-scaling";
 * const config = {}; // type is ApplicationAutoScalingClientConfig
 * const client = new ApplicationAutoScalingClient(config);
 * const input = { // RegisterScalableTargetRequest
 *   ServiceNamespace: "ecs" || "elasticmapreduce" || "ec2" || "appstream" || "dynamodb" || "rds" || "sagemaker" || "custom-resource" || "comprehend" || "lambda" || "cassandra" || "kafka" || "elasticache" || "neptune" || "workspaces", // required
 *   ResourceId: "STRING_VALUE", // required
 *   ScalableDimension: "ecs:service:DesiredCount" || "ec2:spot-fleet-request:TargetCapacity" || "elasticmapreduce:instancegroup:InstanceCount" || "appstream:fleet:DesiredCapacity" || "dynamodb:table:ReadCapacityUnits" || "dynamodb:table:WriteCapacityUnits" || "dynamodb:index:ReadCapacityUnits" || "dynamodb:index:WriteCapacityUnits" || "rds:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredInstanceCount" || "custom-resource:ResourceType:Property" || "comprehend:document-classifier-endpoint:DesiredInferenceUnits" || "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits" || "lambda:function:ProvisionedConcurrency" || "cassandra:table:ReadCapacityUnits" || "cassandra:table:WriteCapacityUnits" || "kafka:broker-storage:VolumeSize" || "elasticache:cache-cluster:Nodes" || "elasticache:replication-group:NodeGroups" || "elasticache:replication-group:Replicas" || "neptune:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredProvisionedConcurrency" || "sagemaker:inference-component:DesiredCopyCount" || "workspaces:workspacespool:DesiredUserSessions", // required
 *   MinCapacity: Number("int"),
 *   MaxCapacity: Number("int"),
 *   RoleARN: "STRING_VALUE",
 *   SuspendedState: { // SuspendedState
 *     DynamicScalingInSuspended: true || false,
 *     DynamicScalingOutSuspended: true || false,
 *     ScheduledScalingSuspended: true || false,
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new RegisterScalableTargetCommand(input);
 * const response = await client.send(command);
 * // { // RegisterScalableTargetResponse
 * //   ScalableTargetARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterScalableTargetCommandInput - {@link RegisterScalableTargetCommandInput}
 * @returns {@link RegisterScalableTargetCommandOutput}
 * @see {@link RegisterScalableTargetCommandInput} for command's `input` shape.
 * @see {@link RegisterScalableTargetCommandOutput} for command's `response` shape.
 * @see {@link ApplicationAutoScalingClientResolvedConfig | config} for ApplicationAutoScalingClient's `config` shape.
 *
 * @throws {@link ConcurrentUpdateException} (server fault)
 *
 * Concurrent updates caused an exception, for example, if you request an update to an Application Auto Scaling resource that already has a pending update.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * The service encountered an internal error.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A per-account resource limit is exceeded. For more information, see [Application Auto Scaling service quotas](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-limits.html).
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An exception was thrown for a validation issue. Review the available parameters for the API request.
 *
 * @throws {@link ApplicationAutoScalingServiceException}
 *
 * Base exception class for all service exceptions from ApplicationAutoScaling service.
 *
 * @example To register an ECS service as a scalable target
 * ```javascript
 * // This example registers a scalable target from an Amazon ECS service called web-app that is running on the default cluster, with a minimum desired count of 1 task and a maximum desired count of 10 tasks.
 * const input = {
 *   MaxCapacity: 10,
 *   MinCapacity: 1,
 *   ResourceId: "service/default/web-app",
 *   ScalableDimension: "ecs:service:DesiredCount",
 *   ServiceNamespace: "ecs"
 * };
 * const command = new RegisterScalableTargetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ScalableTargetARN: "arn:aws:application-autoscaling:us-east-1:123456789012:scalable-target/1234abcd56ab78cd901ef1234567890ab123"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class RegisterScalableTargetCommand extends command<RegisterScalableTargetCommandInput, RegisterScalableTargetCommandOutput>(
  _ep0,
  _mw0,
  "RegisterScalableTarget",
  RegisterScalableTarget$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterScalableTargetRequest;
      output: RegisterScalableTargetResponse;
    };
    sdk: {
      input: RegisterScalableTargetCommandInput;
      output: RegisterScalableTargetCommandOutput;
    };
  };
}
