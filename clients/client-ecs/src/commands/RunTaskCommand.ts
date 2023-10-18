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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { RunTaskRequest, RunTaskResponse } from "../models/models_0";
import { de_RunTaskCommand, se_RunTaskCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RunTaskCommand}.
 */
export interface RunTaskCommandInput extends RunTaskRequest {}
/**
 * @public
 *
 * The output of {@link RunTaskCommand}.
 */
export interface RunTaskCommandOutput extends RunTaskResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts a new task using the specified task definition.</p>
 *          <p>You can allow Amazon ECS to place tasks for you, or you can customize how Amazon ECS places
 * 			tasks using placement constraints and placement strategies. For more information, see
 * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <p>Alternatively, you can use <a>StartTask</a> to use your own scheduler or
 * 			place tasks manually on specific container instances.</p>
 *          <note>
 *             <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p>
 *          </note>
 *          <p>The Amazon ECS API follows an eventual consistency model. This is because of the
 * 			distributed nature of the system supporting the API. This means that the result of an
 * 			API command you run that affects your Amazon ECS resources might not be immediately visible
 * 			to all subsequent commands you run. Keep this in mind when you carry out an API command
 * 			that immediately follows a previous API command.</p>
 *          <p>To manage eventual consistency, you can do the following:</p>
 *          <ul>
 *             <li>
 *                <p>Confirm the state of the resource before you run a command to modify it. Run
 * 					the DescribeTasks command using an exponential backoff algorithm to ensure that
 * 					you allow enough time for the previous command to propagate through the system.
 * 					To do this, run the DescribeTasks command repeatedly, starting with a couple of
 * 					seconds of wait time and increasing gradually up to five minutes of wait
 * 					time.</p>
 *             </li>
 *             <li>
 *                <p>Add wait time between subsequent commands, even if the DescribeTasks command
 * 					returns an accurate response. Apply an exponential backoff algorithm starting
 * 					with a couple of seconds of wait time, and increase gradually up to about five
 * 					minutes of wait time.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, RunTaskCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, RunTaskCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // RunTaskRequest
 *   capacityProviderStrategy: [ // CapacityProviderStrategy
 *     { // CapacityProviderStrategyItem
 *       capacityProvider: "STRING_VALUE", // required
 *       weight: Number("int"),
 *       base: Number("int"),
 *     },
 *   ],
 *   cluster: "STRING_VALUE",
 *   count: Number("int"),
 *   enableECSManagedTags: true || false,
 *   enableExecuteCommand: true || false,
 *   group: "STRING_VALUE",
 *   launchType: "EC2" || "FARGATE" || "EXTERNAL",
 *   networkConfiguration: { // NetworkConfiguration
 *     awsvpcConfiguration: { // AwsVpcConfiguration
 *       subnets: [ // StringList // required
 *         "STRING_VALUE",
 *       ],
 *       securityGroups: [
 *         "STRING_VALUE",
 *       ],
 *       assignPublicIp: "ENABLED" || "DISABLED",
 *     },
 *   },
 *   overrides: { // TaskOverride
 *     containerOverrides: [ // ContainerOverrides
 *       { // ContainerOverride
 *         name: "STRING_VALUE",
 *         command: [
 *           "STRING_VALUE",
 *         ],
 *         environment: [ // EnvironmentVariables
 *           { // KeyValuePair
 *             name: "STRING_VALUE",
 *             value: "STRING_VALUE",
 *           },
 *         ],
 *         environmentFiles: [ // EnvironmentFiles
 *           { // EnvironmentFile
 *             value: "STRING_VALUE", // required
 *             type: "s3", // required
 *           },
 *         ],
 *         cpu: Number("int"),
 *         memory: Number("int"),
 *         memoryReservation: Number("int"),
 *         resourceRequirements: [ // ResourceRequirements
 *           { // ResourceRequirement
 *             value: "STRING_VALUE", // required
 *             type: "GPU" || "InferenceAccelerator", // required
 *           },
 *         ],
 *       },
 *     ],
 *     cpu: "STRING_VALUE",
 *     inferenceAcceleratorOverrides: [ // InferenceAcceleratorOverrides
 *       { // InferenceAcceleratorOverride
 *         deviceName: "STRING_VALUE",
 *         deviceType: "STRING_VALUE",
 *       },
 *     ],
 *     executionRoleArn: "STRING_VALUE",
 *     memory: "STRING_VALUE",
 *     taskRoleArn: "STRING_VALUE",
 *     ephemeralStorage: { // EphemeralStorage
 *       sizeInGiB: Number("int"), // required
 *     },
 *   },
 *   placementConstraints: [ // PlacementConstraints
 *     { // PlacementConstraint
 *       type: "distinctInstance" || "memberOf",
 *       expression: "STRING_VALUE",
 *     },
 *   ],
 *   placementStrategy: [ // PlacementStrategies
 *     { // PlacementStrategy
 *       type: "random" || "spread" || "binpack",
 *       field: "STRING_VALUE",
 *     },
 *   ],
 *   platformVersion: "STRING_VALUE",
 *   propagateTags: "TASK_DEFINITION" || "SERVICE" || "NONE",
 *   referenceId: "STRING_VALUE",
 *   startedBy: "STRING_VALUE",
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   taskDefinition: "STRING_VALUE", // required
 * };
 * const command = new RunTaskCommand(input);
 * const response = await client.send(command);
 * // { // RunTaskResponse
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
 * @param RunTaskCommandInput - {@link RunTaskCommandInput}
 * @returns {@link RunTaskCommandOutput}
 * @see {@link RunTaskCommandInput} for command's `input` shape.
 * @see {@link RunTaskCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
 *
 * @throws {@link BlockedException} (client fault)
 *  <p>Your Amazon Web Services account was blocked. For more information, contact <a href="http://aws.amazon.com/contact-us/">
 * 				Amazon Web Services Support</a>.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource,. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *
 * @throws {@link PlatformTaskDefinitionIncompatibilityException} (client fault)
 *  <p>The specified platform version doesn't satisfy the required capabilities of the task
 * 			definition.</p>
 *
 * @throws {@link PlatformUnknownException} (client fault)
 *  <p>The specified platform version doesn't exist.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link UnsupportedFeatureException} (client fault)
 *  <p>The specified task isn't supported in this Region.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 * @example To run a task on your default cluster
 * ```javascript
 * // This example runs the specified task definition on your default cluster.
 * const input = {
 *   "cluster": "default",
 *   "taskDefinition": "sleep360:1"
 * };
 * const command = new RunTaskCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "tasks": [
 *     {
 *       "containerInstanceArn": "arn:aws:ecs:us-east-1:<aws_account_id>:container-instance/default/ffe3d344-77e2-476c-a4d0-bf560ad50acb",
 *       "containers": [
 *         {
 *           "name": "sleep",
 *           "containerArn": "arn:aws:ecs:us-east-1:<aws_account_id>:container/default/58591c8e-be29-4ddf-95aa-ee459d4c59fd",
 *           "lastStatus": "PENDING",
 *           "taskArn": "arn:aws:ecs:us-east-1:<aws_account_id>:task/default/a9f21ea7-c9f5-44b1-b8e6-b31f50ed33c0"
 *         }
 *       ],
 *       "desiredStatus": "RUNNING",
 *       "lastStatus": "PENDING",
 *       "overrides": {
 *         "containerOverrides": [
 *           {
 *             "name": "sleep"
 *           }
 *         ]
 *       },
 *       "taskArn": "arn:aws:ecs:us-east-1:<aws_account_id>:task/default/a9f21ea7-c9f5-44b1-b8e6-b31f50ed33c0",
 *       "taskDefinitionArn": "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/sleep360:1"
 *     }
 *   ]
 * }
 * *\/
 * // example id: 6f238c83-a133-42cd-ab3d-abeca0560445
 * ```
 *
 */
export class RunTaskCommand extends $Command<RunTaskCommandInput, RunTaskCommandOutput, ECSClientResolvedConfig> {
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
  constructor(readonly input: RunTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RunTaskCommandInput, RunTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RunTaskCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "RunTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerServiceV20141113",
        operation: "RunTask",
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
  private serialize(input: RunTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RunTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RunTaskCommandOutput> {
    return de_RunTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
