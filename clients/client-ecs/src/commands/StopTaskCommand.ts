// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopTaskRequest } from "../models/models_0";
import { StopTaskResponse } from "../models/models_1";
import { de_StopTaskCommand, se_StopTaskCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopTaskCommand}.
 */
export interface StopTaskCommandInput extends StopTaskRequest {}
/**
 * @public
 *
 * The output of {@link StopTaskCommand}.
 */
export interface StopTaskCommandOutput extends StopTaskResponse, __MetadataBearer {}

/**
 * <p>Stops a running task. Any tags associated with the task will be deleted.</p>
 *          <p>When you call <code>StopTask</code> on a task, the equivalent of <code>docker
 * 				stop</code> is issued to the containers running in the task. This results in a
 * 				<code>SIGTERM</code> value and a default 30-second timeout, after which the
 * 				<code>SIGKILL</code> value is sent and the containers are forcibly stopped. If the
 * 			container handles the <code>SIGTERM</code> value gracefully and exits within 30 seconds
 * 			from receiving it, no <code>SIGKILL</code> value is sent.</p>
 *          <p>For Windows containers, POSIX signals do not work and runtime stops the container by
 * 			sending a <code>CTRL_SHUTDOWN_EVENT</code>. For more information, see <a href="https://github.com/moby/moby/issues/25982">Unable to react to graceful shutdown
 * 				of (Windows) container #25982</a> on GitHub.</p>
 *          <note>
 *             <p>The default 30-second timeout can be configured on the Amazon ECS container agent with
 * 				the <code>ECS_CONTAINER_STOP_TIMEOUT</code> variable. For more information, see
 * 					<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS Container Agent Configuration</a> in the
 * 				<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, StopTaskCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, StopTaskCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // StopTaskRequest
 *   cluster: "STRING_VALUE",
 *   task: "STRING_VALUE", // required
 *   reason: "STRING_VALUE",
 * };
 * const command = new StopTaskCommand(input);
 * const response = await client.send(command);
 * // { // StopTaskResponse
 * //   task: { // Task
 * //     attachments: [ // Attachments
 * //       { // Attachment
 * //         id: "STRING_VALUE",
 * //         type: "STRING_VALUE",
 * //         status: "STRING_VALUE",
 * //         details: [ // AttachmentDetails
 * //           { // KeyValuePair
 * //             name: "STRING_VALUE",
 * //             value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     attributes: [ // Attributes
 * //       { // Attribute
 * //         name: "STRING_VALUE", // required
 * //         value: "STRING_VALUE",
 * //         targetType: "container-instance",
 * //         targetId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     availabilityZone: "STRING_VALUE",
 * //     capacityProviderName: "STRING_VALUE",
 * //     clusterArn: "STRING_VALUE",
 * //     connectivity: "CONNECTED" || "DISCONNECTED",
 * //     connectivityAt: new Date("TIMESTAMP"),
 * //     containerInstanceArn: "STRING_VALUE",
 * //     containers: [ // Containers
 * //       { // Container
 * //         containerArn: "STRING_VALUE",
 * //         taskArn: "STRING_VALUE",
 * //         name: "STRING_VALUE",
 * //         image: "STRING_VALUE",
 * //         imageDigest: "STRING_VALUE",
 * //         runtimeId: "STRING_VALUE",
 * //         lastStatus: "STRING_VALUE",
 * //         exitCode: Number("int"),
 * //         reason: "STRING_VALUE",
 * //         networkBindings: [ // NetworkBindings
 * //           { // NetworkBinding
 * //             bindIP: "STRING_VALUE",
 * //             containerPort: Number("int"),
 * //             hostPort: Number("int"),
 * //             protocol: "tcp" || "udp",
 * //             containerPortRange: "STRING_VALUE",
 * //             hostPortRange: "STRING_VALUE",
 * //           },
 * //         ],
 * //         networkInterfaces: [ // NetworkInterfaces
 * //           { // NetworkInterface
 * //             attachmentId: "STRING_VALUE",
 * //             privateIpv4Address: "STRING_VALUE",
 * //             ipv6Address: "STRING_VALUE",
 * //           },
 * //         ],
 * //         healthStatus: "HEALTHY" || "UNHEALTHY" || "UNKNOWN",
 * //         managedAgents: [ // ManagedAgents
 * //           { // ManagedAgent
 * //             lastStartedAt: new Date("TIMESTAMP"),
 * //             name: "ExecuteCommandAgent",
 * //             reason: "STRING_VALUE",
 * //             lastStatus: "STRING_VALUE",
 * //           },
 * //         ],
 * //         cpu: "STRING_VALUE",
 * //         memory: "STRING_VALUE",
 * //         memoryReservation: "STRING_VALUE",
 * //         gpuIds: [ // GpuIds
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     cpu: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     desiredStatus: "STRING_VALUE",
 * //     enableExecuteCommand: true || false,
 * //     executionStoppedAt: new Date("TIMESTAMP"),
 * //     group: "STRING_VALUE",
 * //     healthStatus: "HEALTHY" || "UNHEALTHY" || "UNKNOWN",
 * //     inferenceAccelerators: [ // InferenceAccelerators
 * //       { // InferenceAccelerator
 * //         deviceName: "STRING_VALUE", // required
 * //         deviceType: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     lastStatus: "STRING_VALUE",
 * //     launchType: "EC2" || "FARGATE" || "EXTERNAL",
 * //     memory: "STRING_VALUE",
 * //     overrides: { // TaskOverride
 * //       containerOverrides: [ // ContainerOverrides
 * //         { // ContainerOverride
 * //           name: "STRING_VALUE",
 * //           command: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //           environment: [ // EnvironmentVariables
 * //             {
 * //               name: "STRING_VALUE",
 * //               value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           environmentFiles: [ // EnvironmentFiles
 * //             { // EnvironmentFile
 * //               value: "STRING_VALUE", // required
 * //               type: "s3", // required
 * //             },
 * //           ],
 * //           cpu: Number("int"),
 * //           memory: Number("int"),
 * //           memoryReservation: Number("int"),
 * //           resourceRequirements: [ // ResourceRequirements
 * //             { // ResourceRequirement
 * //               value: "STRING_VALUE", // required
 * //               type: "GPU" || "InferenceAccelerator", // required
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       cpu: "STRING_VALUE",
 * //       inferenceAcceleratorOverrides: [ // InferenceAcceleratorOverrides
 * //         { // InferenceAcceleratorOverride
 * //           deviceName: "STRING_VALUE",
 * //           deviceType: "STRING_VALUE",
 * //         },
 * //       ],
 * //       executionRoleArn: "STRING_VALUE",
 * //       memory: "STRING_VALUE",
 * //       taskRoleArn: "STRING_VALUE",
 * //       ephemeralStorage: { // EphemeralStorage
 * //         sizeInGiB: Number("int"), // required
 * //       },
 * //     },
 * //     platformVersion: "STRING_VALUE",
 * //     platformFamily: "STRING_VALUE",
 * //     pullStartedAt: new Date("TIMESTAMP"),
 * //     pullStoppedAt: new Date("TIMESTAMP"),
 * //     startedAt: new Date("TIMESTAMP"),
 * //     startedBy: "STRING_VALUE",
 * //     stopCode: "TaskFailedToStart" || "EssentialContainerExited" || "UserInitiated" || "ServiceSchedulerInitiated" || "SpotInterruption" || "TerminationNotice",
 * //     stoppedAt: new Date("TIMESTAMP"),
 * //     stoppedReason: "STRING_VALUE",
 * //     stoppingAt: new Date("TIMESTAMP"),
 * //     tags: [ // Tags
 * //       { // Tag
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     taskArn: "STRING_VALUE",
 * //     taskDefinitionArn: "STRING_VALUE",
 * //     version: Number("long"),
 * //     ephemeralStorage: {
 * //       sizeInGiB: Number("int"), // required
 * //     },
 * //     fargateEphemeralStorage: { // TaskEphemeralStorage
 * //       sizeInGiB: Number("int"),
 * //       kmsKeyId: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StopTaskCommandInput - {@link StopTaskCommandInput}
 * @returns {@link StopTaskCommandOutput}
 * @see {@link StopTaskCommandInput} for command's `input` shape.
 * @see {@link StopTaskCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html">ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service
 * 				event messages</a>. </p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @example To stop a task
 * ```javascript
 * // This example stops a task with ID "1dc5c17a-422b-4dc4-b493-371970c6c4d6" in cluster "MyCluster".
 * const input = {
 *   cluster: "MyCluster",
 *   reason: "testing stop task.",
 *   task: "1dc5c17a-422b-4dc4-b493-371970c6c4d6"
 * };
 * const command = new StopTaskCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   task: {
 *     clusterArn: "arn:aws:ecs:us-east-1:012345678910:cluster/MyCluster",
 *     containerInstanceArn: "arn:aws:ecs:us-east-1:012345678910:container-instance/MyCluster/5991d8da-1d59-49d2-a31f-4230f9e73140",
 *     containers: [
 *       {
 *         containerArn: "arn:aws:ecs:us-east-1:012345678910:container/4df26bb4-f057-467b-a079-961675296e64",
 *         lastStatus: "RUNNING",
 *         name: "simple-app",
 *         networkBindings: [
 *           {
 *             bindIP: "0.0.0.0",
 *             containerPort: 80,
 *             hostPort: 32774,
 *             protocol: "tcp"
 *           }
 *         ],
 *         taskArn: "arn:aws:ecs:us-east-1:012345678910:task/MyCluster/1dc5c17a-422b-4dc4-b493-371970c6c4d6"
 *       },
 *       {
 *         containerArn: "arn:aws:ecs:us-east-1:012345678910:container/e09064f7-7361-4c87-8ab9-8d073bbdbcb9",
 *         lastStatus: "RUNNING",
 *         name: "busybox",
 *         networkBindings:         [],
 *         taskArn: "arn:aws:ecs:us-east-1:012345678910:task/MyCluster/1dc5c17a-422b-4dc4-b493-371970c6c4d6"
 *       }
 *     ],
 *     createdAt: 1.476822811295E9,
 *     desiredStatus: "STOPPED",
 *     lastStatus: "RUNNING",
 *     overrides: {
 *       containerOverrides: [
 *         {
 *           name: "simple-app"
 *         },
 *         {
 *           name: "busybox"
 *         }
 *       ]
 *     },
 *     startedAt: 1.476822833998E9,
 *     startedBy: "ecs-svc/9223370560032507596",
 *     stoppedReason: "testing stop task.",
 *     taskArn: "arn:aws:ecs:us-east-1:012345678910:task/1dc5c17a-422b-4dc4-b493-371970c6c4d6",
 *     taskDefinitionArn: "arn:aws:ecs:us-east-1:012345678910:task-definition/console-sample-app-dynamic-ports:1",
 *     version: 0
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StopTaskCommand extends $Command
  .classBuilder<
    StopTaskCommandInput,
    StopTaskCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerServiceV20141113", "StopTask", {})
  .n("ECSClient", "StopTaskCommand")
  .f(void 0, void 0)
  .ser(se_StopTaskCommand)
  .de(de_StopTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopTaskRequest;
      output: StopTaskResponse;
    };
    sdk: {
      input: StopTaskCommandInput;
      output: StopTaskCommandOutput;
    };
  };
}
