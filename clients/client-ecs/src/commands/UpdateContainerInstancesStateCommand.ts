// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateContainerInstancesStateRequest, UpdateContainerInstancesStateResponse } from "../models/models_0";
import { UpdateContainerInstancesState$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateContainerInstancesStateCommand}.
 */
export interface UpdateContainerInstancesStateCommandInput extends UpdateContainerInstancesStateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContainerInstancesStateCommand}.
 */
export interface UpdateContainerInstancesStateCommandOutput extends UpdateContainerInstancesStateResponse, __MetadataBearer {}

/**
 * Modifies the status of an Amazon ECS container instance.
 *
 * Once a container instance has reached an `ACTIVE` state, you can change the status of a container instance to `DRAINING` to manually remove an instance from a cluster, for example to perform system updates, update the Docker daemon, or scale down the cluster size.
 *
 * > **Important:** A container instance can't be changed to `DRAINING` until it has reached an `ACTIVE` status. If the instance is in any other status, an error will be received.
 *
 * When you set a container instance to `DRAINING`, Amazon ECS prevents new tasks from being scheduled for placement on the container instance and replacement service tasks are started on other container instances in the cluster if the resources are available. Service tasks on the container instance that are in the `PENDING` state are stopped immediately.
 *
 * Service tasks on the container instance that are in the `RUNNING` state are stopped and replaced according to the service's deployment configuration parameters, `minimumHealthyPercent` and `maximumPercent`. You can change the deployment configuration of your service using [UpdateService](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateService.html).
 *
 * - If `minimumHealthyPercent` is below 100%, the scheduler can ignore `desiredCount` temporarily during task replacement. For example, `desiredCount` is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. If the minimum is 100%, the service scheduler can't remove existing tasks until the replacement tasks are considered healthy. Tasks for services that do not use a load balancer are considered healthy if they're in the `RUNNING` state. Tasks for services that use a load balancer are considered healthy if they're in the `RUNNING` state and are reported as healthy by the load balancer.
 * - The `maximumPercent` parameter represents an upper limit on the number of running tasks during task replacement. You can use this to define the replacement batch size. For example, if `desiredCount` is four tasks, a maximum of 200% starts four new tasks before stopping the four tasks to be drained, provided that the cluster resources required to do this are available. If the maximum is 100%, then replacement tasks can't start until the draining tasks have stopped.
 *
 * Any `PENDING` or `RUNNING` tasks that do not belong to a service aren't affected. You must wait for them to finish or stop them manually.
 *
 * A container instance has completed draining when it has no more `RUNNING` tasks. You can verify this using [ListTasks](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTasks.html).
 *
 * When a container instance has been drained, you can set a container instance to `ACTIVE` status and once it has reached that status the Amazon ECS scheduler can begin scheduling tasks on the instance again.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateContainerInstancesStateCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateContainerInstancesStateCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // UpdateContainerInstancesStateRequest
 *   cluster: "STRING_VALUE",
 *   containerInstances: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   status: "ACTIVE" || "DRAINING" || "REGISTERING" || "DEREGISTERING" || "REGISTRATION_FAILED", // required
 * };
 * const command = new UpdateContainerInstancesStateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateContainerInstancesStateResponse
 * //   containerInstances: [ // ContainerInstances
 * //     { // ContainerInstance
 * //       containerInstanceArn: "STRING_VALUE",
 * //       ec2InstanceId: "STRING_VALUE",
 * //       capacityProviderName: "STRING_VALUE",
 * //       version: Number("long"),
 * //       versionInfo: { // VersionInfo
 * //         agentVersion: "STRING_VALUE",
 * //         agentHash: "STRING_VALUE",
 * //         dockerVersion: "STRING_VALUE",
 * //       },
 * //       remainingResources: [ // Resources
 * //         { // Resource
 * //           name: "STRING_VALUE",
 * //           type: "STRING_VALUE",
 * //           doubleValue: Number("double"),
 * //           longValue: Number("long"),
 * //           integerValue: Number("int"),
 * //           stringSetValue: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       registeredResources: [
 * //         {
 * //           name: "STRING_VALUE",
 * //           type: "STRING_VALUE",
 * //           doubleValue: Number("double"),
 * //           longValue: Number("long"),
 * //           integerValue: Number("int"),
 * //           stringSetValue: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       status: "STRING_VALUE",
 * //       statusReason: "STRING_VALUE",
 * //       agentConnected: true || false,
 * //       runningTasksCount: Number("int"),
 * //       pendingTasksCount: Number("int"),
 * //       agentUpdateStatus: "PENDING" || "STAGING" || "STAGED" || "UPDATING" || "UPDATED" || "FAILED",
 * //       attributes: [ // Attributes
 * //         { // Attribute
 * //           name: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //           targetType: "container-instance",
 * //           targetId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       registeredAt: new Date("TIMESTAMP"),
 * //       attachments: [ // Attachments
 * //         { // Attachment
 * //           id: "STRING_VALUE",
 * //           type: "STRING_VALUE",
 * //           status: "STRING_VALUE",
 * //           details: [ // AttachmentDetails
 * //             { // KeyValuePair
 * //               name: "STRING_VALUE",
 * //               value: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       tags: [ // Tags
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       healthStatus: { // ContainerInstanceHealthStatus
 * //         overallStatus: "OK" || "IMPAIRED" || "INSUFFICIENT_DATA" || "INITIALIZING",
 * //         details: [ // InstanceHealthCheckResultList
 * //           { // InstanceHealthCheckResult
 * //             type: "CONTAINER_RUNTIME" || "ACCELERATED_COMPUTE" || "DAEMON" || "AGENT_CONNECTIVITY",
 * //             status: "OK" || "IMPAIRED" || "INSUFFICIENT_DATA" || "INITIALIZING",
 * //             statusReason: "STRING_VALUE",
 * //             lastUpdated: new Date("TIMESTAMP"),
 * //             lastStatusChange: new Date("TIMESTAMP"),
 * //           },
 * //         ],
 * //       },
 * //       gpuDevices: [ // GpuDevices
 * //         { // GpuDevice
 * //           gpuId: "STRING_VALUE",
 * //           sharingMode: "IDLE" || "NVIDIA_MPS" || "DEDICATED",
 * //           totalMemoryInMiB: Number("int"),
 * //           remainingMemoryInMiB: Number("int"),
 * //           containerCount: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   failures: [ // Failures
 * //     { // Failure
 * //       arn: "STRING_VALUE",
 * //       reason: "STRING_VALUE",
 * //       detail: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateContainerInstancesStateCommandInput - {@link UpdateContainerInstancesStateCommandInput}
 * @returns {@link UpdateContainerInstancesStateCommandOutput}
 * @see {@link UpdateContainerInstancesStateCommandInput} for command's `input` shape.
 * @see {@link UpdateContainerInstancesStateCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have authorization to perform the requested action.
 *
 * @throws {@link ClientException} (client fault)
 *
 * These errors are usually caused by a client action. This client action might be using an action or resource on behalf of a user that doesn't have permissions to use the action or resource. Or, it might be specifying an identifier that isn't valid.
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *
 * The specified cluster wasn't found. You can view your available clusters with [ListClusters](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html). Amazon ECS clusters are Region specific.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter isn't valid. Review the available parameters for the API request.
 *
 * For more information about service event errors, see [Amazon ECS service event messages](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html).
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server issue.
 *
 * @throws {@link ECSServiceException}
 *
 * Base exception class for all service exceptions from ECS service.
 *
 * @example To update the state of a container instance
 * ```javascript
 * // This example updates the state of the specified container instance in the default cluster to DRAINING.
 * const input = {
 *   cluster: "default",
 *   containerInstances: [
 *     "1c3be8ed-df30-47b4-8f1e-6e68ebd01f34"
 *   ],
 *   status: "DRAINING"
 * };
 * const command = new UpdateContainerInstancesStateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   containerInstances: [
 *     {
 *       agentConnected: true,
 *       attributes: [
 *         {
 *           name: "ecs.availability-zone",
 *           value: "us-west-2b"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.logging-driver.syslog"
 *         },
 *         {
 *           name: "ecs.instance-type",
 *           value: "c4.xlarge"
 *         },
 *         {
 *           name: "ecs.ami-id",
 *           value: "ami-a2ca61c2"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.task-iam-role-network-host"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.logging-driver.awslogs"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.logging-driver.json-file"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.docker-remote-api.1.17"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.privileged-container"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.docker-remote-api.1.18"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.docker-remote-api.1.19"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.ecr-auth"
 *         },
 *         {
 *           name: "ecs.os-type",
 *           value: "linux"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.docker-remote-api.1.20"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.docker-remote-api.1.21"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.docker-remote-api.1.22"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.task-iam-role"
 *         },
 *         {
 *           name: "com.amazonaws.ecs.capability.docker-remote-api.1.23"
 *         }
 *       ],
 *       containerInstanceArn: "arn:aws:ecs:us-west-2:012345678910:container-instance/default/1c3be8ed-df30-47b4-8f1e-6e68ebd01f34",
 *       ec2InstanceId: "i-05d99c76955727ec6",
 *       pendingTasksCount: 0,
 *       registeredResources: [
 *         {
 *           doubleValue: 0,
 *           integerValue: 4096,
 *           longValue: 0,
 *           name: "CPU",
 *           type: "INTEGER"
 *         },
 *         {
 *           doubleValue: 0,
 *           integerValue: 7482,
 *           longValue: 0,
 *           name: "MEMORY",
 *           type: "INTEGER"
 *         },
 *         {
 *           doubleValue: 0,
 *           integerValue: 0,
 *           longValue: 0,
 *           name: "PORTS",
 *           stringSetValue: [
 *             "22",
 *             "2376",
 *             "2375",
 *             "51678",
 *             "51679"
 *           ],
 *           type: "STRINGSET"
 *         },
 *         {
 *           doubleValue: 0,
 *           integerValue: 0,
 *           longValue: 0,
 *           name: "PORTS_UDP",
 *           stringSetValue:           [],
 *           type: "STRINGSET"
 *         }
 *       ],
 *       remainingResources: [
 *         {
 *           doubleValue: 0,
 *           integerValue: 4096,
 *           longValue: 0,
 *           name: "CPU",
 *           type: "INTEGER"
 *         },
 *         {
 *           doubleValue: 0,
 *           integerValue: 7482,
 *           longValue: 0,
 *           name: "MEMORY",
 *           type: "INTEGER"
 *         },
 *         {
 *           doubleValue: 0,
 *           integerValue: 0,
 *           longValue: 0,
 *           name: "PORTS",
 *           stringSetValue: [
 *             "22",
 *             "2376",
 *             "2375",
 *             "51678",
 *             "51679"
 *           ],
 *           type: "STRINGSET"
 *         },
 *         {
 *           doubleValue: 0,
 *           integerValue: 0,
 *           longValue: 0,
 *           name: "PORTS_UDP",
 *           stringSetValue:           [],
 *           type: "STRINGSET"
 *         }
 *       ],
 *       runningTasksCount: 0,
 *       status: "DRAINING",
 *       version: 30,
 *       versionInfo: {
 *         agentHash: "efe53c6",
 *         agentVersion: "1.13.1",
 *         dockerVersion: "DockerVersion: 1.11.2"
 *       }
 *     }
 *   ],
 *   failures:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateContainerInstancesStateCommand extends command<UpdateContainerInstancesStateCommandInput, UpdateContainerInstancesStateCommandOutput>(
  _ep0,
  _mw0,
  "UpdateContainerInstancesState",
  UpdateContainerInstancesState$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContainerInstancesStateRequest;
      output: UpdateContainerInstancesStateResponse;
    };
    sdk: {
      input: UpdateContainerInstancesStateCommandInput;
      output: UpdateContainerInstancesStateCommandOutput;
    };
  };
}
