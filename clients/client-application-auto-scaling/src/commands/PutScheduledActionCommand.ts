// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutScheduledActionRequest, PutScheduledActionResponse } from "../models/models_0";
import { PutScheduledAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutScheduledActionCommand}.
 */
export interface PutScheduledActionCommandInput extends PutScheduledActionRequest {}
/**
 * @public
 *
 * The output of {@link PutScheduledActionCommand}.
 */
export interface PutScheduledActionCommandOutput extends PutScheduledActionResponse, __MetadataBearer {}

/**
 * Creates or updates a scheduled action for an Application Auto Scaling scalable target.
 *
 * Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scheduled action applies to the scalable target identified by those three attributes. You cannot create a scheduled action until you have registered the resource as a scalable target.
 *
 * When you specify start and end times with a recurring schedule using a cron expression or rates, they form the boundaries for when the recurring action starts and stops.
 *
 * To update a scheduled action, specify the parameters that you want to change. If you don't specify start and end times, the old values are deleted.
 *
 * For more information, see [Scheduled scaling](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html) in the *Application Auto Scaling User Guide*.
 *
 * > **Note:** If a scalable target is deregistered, the scalable target is no longer available to run scheduled actions. Any scheduled actions that were specified for the scalable target are deleted.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationAutoScalingClient, PutScheduledActionCommand } from "@aws-sdk/client-application-auto-scaling"; // ES Modules import
 * // const { ApplicationAutoScalingClient, PutScheduledActionCommand } = require("@aws-sdk/client-application-auto-scaling"); // CommonJS import
 * // import type { ApplicationAutoScalingClientConfig } from "@aws-sdk/client-application-auto-scaling";
 * const config = {}; // type is ApplicationAutoScalingClientConfig
 * const client = new ApplicationAutoScalingClient(config);
 * const input = { // PutScheduledActionRequest
 *   ServiceNamespace: "ecs" || "elasticmapreduce" || "ec2" || "appstream" || "dynamodb" || "rds" || "sagemaker" || "custom-resource" || "comprehend" || "lambda" || "cassandra" || "kafka" || "elasticache" || "neptune" || "workspaces", // required
 *   Schedule: "STRING_VALUE",
 *   Timezone: "STRING_VALUE",
 *   ScheduledActionName: "STRING_VALUE", // required
 *   ResourceId: "STRING_VALUE", // required
 *   ScalableDimension: "ecs:service:DesiredCount" || "ec2:spot-fleet-request:TargetCapacity" || "elasticmapreduce:instancegroup:InstanceCount" || "appstream:fleet:DesiredCapacity" || "dynamodb:table:ReadCapacityUnits" || "dynamodb:table:WriteCapacityUnits" || "dynamodb:index:ReadCapacityUnits" || "dynamodb:index:WriteCapacityUnits" || "rds:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredInstanceCount" || "custom-resource:ResourceType:Property" || "comprehend:document-classifier-endpoint:DesiredInferenceUnits" || "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits" || "lambda:function:ProvisionedConcurrency" || "cassandra:table:ReadCapacityUnits" || "cassandra:table:WriteCapacityUnits" || "kafka:broker-storage:VolumeSize" || "elasticache:cache-cluster:Nodes" || "elasticache:replication-group:NodeGroups" || "elasticache:replication-group:Replicas" || "neptune:cluster:ReadReplicaCount" || "sagemaker:variant:DesiredProvisionedConcurrency" || "sagemaker:inference-component:DesiredCopyCount" || "workspaces:workspacespool:DesiredUserSessions", // required
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   ScalableTargetAction: { // ScalableTargetAction
 *     MinCapacity: Number("int"),
 *     MaxCapacity: Number("int"),
 *   },
 * };
 * const command = new PutScheduledActionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutScheduledActionCommandInput - {@link PutScheduledActionCommandInput}
 * @returns {@link PutScheduledActionCommandOutput}
 * @see {@link PutScheduledActionCommandInput} for command's `input` shape.
 * @see {@link PutScheduledActionCommandOutput} for command's `response` shape.
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
 * @throws {@link ObjectNotFoundException} (client fault)
 *
 * The specified object could not be found. For any operation that depends on the existence of a scalable target, this exception is thrown if the scalable target with the specified service namespace, resource ID, and scalable dimension does not exist. For any operation that deletes or deregisters a resource, this exception is thrown if the resource cannot be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An exception was thrown for a validation issue. Review the available parameters for the API request.
 *
 * @throws {@link ApplicationAutoScalingServiceException}
 *
 * Base exception class for all service exceptions from ApplicationAutoScaling service.
 *
 * @example To create a recurring scheduled action
 * ```javascript
 * // This example adds a scheduled action to a DynamoDB table called TestTable to scale out on a recurring schedule. On the specified schedule (every day at 12:15pm UTC), if the current capacity is below the value specified for MinCapacity, Application Auto Scaling scales out to the value specified by MinCapacity.
 * const input = {
 *   ResourceId: "table/TestTable",
 *   ScalableDimension: "dynamodb:table:WriteCapacityUnits",
 *   ScalableTargetAction: {
 *     MinCapacity: 6
 *   },
 *   Schedule: "cron(15 12 * * ? *)",
 *   ScheduledActionName: "my-recurring-action",
 *   ServiceNamespace: "dynamodb"
 * };
 * const command = new PutScheduledActionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class PutScheduledActionCommand extends command<PutScheduledActionCommandInput, PutScheduledActionCommandOutput>(
  _ep0,
  _mw0,
  "PutScheduledAction",
  PutScheduledAction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutScheduledActionRequest;
      output: {};
    };
    sdk: {
      input: PutScheduledActionCommandInput;
      output: PutScheduledActionCommandOutput;
    };
  };
}
