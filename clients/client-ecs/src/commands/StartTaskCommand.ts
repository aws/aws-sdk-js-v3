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
import { StartTaskRequest, StartTaskResponse } from "../models/models_0";
import { de_StartTaskCommand, se_StartTaskCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartTaskCommand}.
 */
export interface StartTaskCommandInput extends StartTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartTaskCommand}.
 */
export interface StartTaskCommandOutput extends StartTaskResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts a new task from the specified task definition on the specified container
 * 			instance or instances.</p>
 *          <note>
 *             <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p>
 *          </note>
 *          <p>Alternatively, you can use <a>RunTask</a> to place tasks for you. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, StartTaskCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, StartTaskCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // StartTaskRequest
 *   cluster: "STRING_VALUE",
 *   containerInstances: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   enableECSManagedTags: true || false,
 *   enableExecuteCommand: true || false,
 *   group: "STRING_VALUE",
 *   networkConfiguration: { // NetworkConfiguration
 *     awsvpcConfiguration: { // AwsVpcConfiguration
 *       subnets: [ // required
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
 *         command: "<StringList>",
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
 * const command = new StartTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartTaskResponse
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
 * @param StartTaskCommandInput - {@link StartTaskCommandInput}
 * @returns {@link StartTaskCommandOutput}
 * @see {@link StartTaskCommandInput} for command's `input` shape.
 * @see {@link StartTaskCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
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
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 */
export class StartTaskCommand extends $Command<StartTaskCommandInput, StartTaskCommandOutput, ECSClientResolvedConfig> {
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
  constructor(readonly input: StartTaskCommandInput) {
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
  ): Handler<StartTaskCommandInput, StartTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StartTaskCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "StartTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerServiceV20141113",
        operation: "StartTask",
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
  private serialize(input: StartTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartTaskCommandOutput> {
    return de_StartTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
