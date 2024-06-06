// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTasksRequest, DescribeTasksResponse } from "../models/models_0";
import { de_DescribeTasksCommand, se_DescribeTasksCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTasksCommand}.
 */
export interface DescribeTasksCommandInput extends DescribeTasksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTasksCommand}.
 */
export interface DescribeTasksCommandOutput extends DescribeTasksResponse, __MetadataBearer {}

/**
 * <p>Describes a specified task or tasks.</p>
 *          <p>Currently, stopped tasks appear in the returned results for at least one hour.</p>
 *          <p>If you have tasks with tags, and then delete the cluster, the tagged tasks are
 * 			returned in the response. If you create a new cluster with the same name as the deleted
 * 			cluster, the tagged tasks are not included in the response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeTasksCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeTasksCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // DescribeTasksRequest
 *   cluster: "STRING_VALUE",
 *   tasks: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   include: [ // TaskFieldList
 *     "TAGS",
 *   ],
 * };
 * const command = new DescribeTasksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTasksResponse
 * //   tasks: [ // Tasks
 * //     { // Task
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
 * //       attributes: [ // Attributes
 * //         { // Attribute
 * //           name: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //           targetType: "container-instance",
 * //           targetId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       availabilityZone: "STRING_VALUE",
 * //       capacityProviderName: "STRING_VALUE",
 * //       clusterArn: "STRING_VALUE",
 * //       connectivity: "CONNECTED" || "DISCONNECTED",
 * //       connectivityAt: new Date("TIMESTAMP"),
 * //       containerInstanceArn: "STRING_VALUE",
 * //       containers: [ // Containers
 * //         { // Container
 * //           containerArn: "STRING_VALUE",
 * //           taskArn: "STRING_VALUE",
 * //           name: "STRING_VALUE",
 * //           image: "STRING_VALUE",
 * //           imageDigest: "STRING_VALUE",
 * //           runtimeId: "STRING_VALUE",
 * //           lastStatus: "STRING_VALUE",
 * //           exitCode: Number("int"),
 * //           reason: "STRING_VALUE",
 * //           networkBindings: [ // NetworkBindings
 * //             { // NetworkBinding
 * //               bindIP: "STRING_VALUE",
 * //               containerPort: Number("int"),
 * //               hostPort: Number("int"),
 * //               protocol: "tcp" || "udp",
 * //               containerPortRange: "STRING_VALUE",
 * //               hostPortRange: "STRING_VALUE",
 * //             },
 * //           ],
 * //           networkInterfaces: [ // NetworkInterfaces
 * //             { // NetworkInterface
 * //               attachmentId: "STRING_VALUE",
 * //               privateIpv4Address: "STRING_VALUE",
 * //               ipv6Address: "STRING_VALUE",
 * //             },
 * //           ],
 * //           healthStatus: "HEALTHY" || "UNHEALTHY" || "UNKNOWN",
 * //           managedAgents: [ // ManagedAgents
 * //             { // ManagedAgent
 * //               lastStartedAt: new Date("TIMESTAMP"),
 * //               name: "ExecuteCommandAgent",
 * //               reason: "STRING_VALUE",
 * //               lastStatus: "STRING_VALUE",
 * //             },
 * //           ],
 * //           cpu: "STRING_VALUE",
 * //           memory: "STRING_VALUE",
 * //           memoryReservation: "STRING_VALUE",
 * //           gpuIds: [ // GpuIds
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       cpu: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       desiredStatus: "STRING_VALUE",
 * //       enableExecuteCommand: true || false,
 * //       executionStoppedAt: new Date("TIMESTAMP"),
 * //       group: "STRING_VALUE",
 * //       healthStatus: "HEALTHY" || "UNHEALTHY" || "UNKNOWN",
 * //       inferenceAccelerators: [ // InferenceAccelerators
 * //         { // InferenceAccelerator
 * //           deviceName: "STRING_VALUE", // required
 * //           deviceType: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       lastStatus: "STRING_VALUE",
 * //       launchType: "EC2" || "FARGATE" || "EXTERNAL",
 * //       memory: "STRING_VALUE",
 * //       overrides: { // TaskOverride
 * //         containerOverrides: [ // ContainerOverrides
 * //           { // ContainerOverride
 * //             name: "STRING_VALUE",
 * //             command: [ // StringList
 * //               "STRING_VALUE",
 * //             ],
 * //             environment: [ // EnvironmentVariables
 * //               {
 * //                 name: "STRING_VALUE",
 * //                 value: "STRING_VALUE",
 * //               },
 * //             ],
 * //             environmentFiles: [ // EnvironmentFiles
 * //               { // EnvironmentFile
 * //                 value: "STRING_VALUE", // required
 * //                 type: "s3", // required
 * //               },
 * //             ],
 * //             cpu: Number("int"),
 * //             memory: Number("int"),
 * //             memoryReservation: Number("int"),
 * //             resourceRequirements: [ // ResourceRequirements
 * //               { // ResourceRequirement
 * //                 value: "STRING_VALUE", // required
 * //                 type: "GPU" || "InferenceAccelerator", // required
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         cpu: "STRING_VALUE",
 * //         inferenceAcceleratorOverrides: [ // InferenceAcceleratorOverrides
 * //           { // InferenceAcceleratorOverride
 * //             deviceName: "STRING_VALUE",
 * //             deviceType: "STRING_VALUE",
 * //           },
 * //         ],
 * //         executionRoleArn: "STRING_VALUE",
 * //         memory: "STRING_VALUE",
 * //         taskRoleArn: "STRING_VALUE",
 * //         ephemeralStorage: { // EphemeralStorage
 * //           sizeInGiB: Number("int"), // required
 * //         },
 * //       },
 * //       platformVersion: "STRING_VALUE",
 * //       platformFamily: "STRING_VALUE",
 * //       pullStartedAt: new Date("TIMESTAMP"),
 * //       pullStoppedAt: new Date("TIMESTAMP"),
 * //       startedAt: new Date("TIMESTAMP"),
 * //       startedBy: "STRING_VALUE",
 * //       stopCode: "TaskFailedToStart" || "EssentialContainerExited" || "UserInitiated" || "ServiceSchedulerInitiated" || "SpotInterruption" || "TerminationNotice",
 * //       stoppedAt: new Date("TIMESTAMP"),
 * //       stoppedReason: "STRING_VALUE",
 * //       stoppingAt: new Date("TIMESTAMP"),
 * //       tags: [ // Tags
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       taskArn: "STRING_VALUE",
 * //       taskDefinitionArn: "STRING_VALUE",
 * //       version: Number("long"),
 * //       ephemeralStorage: {
 * //         sizeInGiB: Number("int"), // required
 * //       },
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
 * @param DescribeTasksCommandInput - {@link DescribeTasksCommandInput}
 * @returns {@link DescribeTasksCommandOutput}
 * @see {@link DescribeTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeTasksCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 * @public
 * @example To describe a task
 * ```javascript
 * // This example provides a description of the specified task, using the task UUID as an identifier.
 * const input = {
 *   "tasks": [
 *     "c5cba4eb-5dad-405e-96db-71ef8eefe6a8"
 *   ]
 * };
 * const command = new DescribeTasksCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "failures": [],
 *   "tasks": [
 *     {
 *       "clusterArn": "arn:aws:ecs:<region>:<aws_account_id>:cluster/default",
 *       "containerInstanceArn": "arn:aws:ecs:<region>:<aws_account_id>:container-instance/default/18f9eda5-27d7-4c19-b133-45adc516e8fb",
 *       "containers": [
 *         {
 *           "name": "ecs-demo",
 *           "containerArn": "arn:aws:ecs:<region>:<aws_account_id>:container/7c01765b-c588-45b3-8290-4ba38bd6c5a6",
 *           "lastStatus": "RUNNING",
 *           "networkBindings": [
 *             {
 *               "bindIP": "0.0.0.0",
 *               "containerPort": 80,
 *               "hostPort": 80
 *             }
 *           ],
 *           "taskArn": "arn:aws:ecs:<region>:<aws_account_id>:task/default/c5cba4eb-5dad-405e-96db-71ef8eefe6a8"
 *         }
 *       ],
 *       "desiredStatus": "RUNNING",
 *       "lastStatus": "RUNNING",
 *       "overrides": {
 *         "containerOverrides": [
 *           {
 *             "name": "ecs-demo"
 *           }
 *         ]
 *       },
 *       "startedBy": "ecs-svc/9223370608528463088",
 *       "taskArn": "arn:aws:ecs:<region>:<aws_account_id>:task/default/c5cba4eb-5dad-405e-96db-71ef8eefe6a8",
 *       "taskDefinitionArn": "arn:aws:ecs:<region>:<aws_account_id>:task-definition/amazon-ecs-sample:1"
 *     }
 *   ]
 * }
 * *\/
 * // example id: a90b0cde-f965-4946-b55e-cfd8cc54e827
 * ```
 *
 */
export class DescribeTasksCommand extends $Command
  .classBuilder<
    DescribeTasksCommandInput,
    DescribeTasksCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerServiceV20141113", "DescribeTasks", {})
  .n("ECSClient", "DescribeTasksCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTasksCommand)
  .de(de_DescribeTasksCommand)
  .build() {}
