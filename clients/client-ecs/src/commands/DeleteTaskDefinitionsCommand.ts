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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DeleteTaskDefinitionsRequest, DeleteTaskDefinitionsResponse } from "../models/models_0";
import { de_DeleteTaskDefinitionsCommand, se_DeleteTaskDefinitionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteTaskDefinitionsCommand}.
 */
export interface DeleteTaskDefinitionsCommandInput extends DeleteTaskDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTaskDefinitionsCommand}.
 */
export interface DeleteTaskDefinitionsCommandOutput extends DeleteTaskDefinitionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes one or more task definitions.</p>
 *          <p>You must deregister a task definition revision before you delete it. For more information,
 * 			see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterTaskDefinition.html">DeregisterTaskDefinition</a>.</p>
 *          <p>When you delete a task definition revision, it is immediately transitions from the
 * 		<code>INACTIVE</code> to <code>DELETE_IN_PROGRESS</code>. Existing tasks and services
 * 		that reference a <code>DELETE_IN_PROGRESS</code> task definition revision continue to run
 * 		without disruption. Existing services that reference a <code>DELETE_IN_PROGRESS</code> task
 * 		definition revision can still scale up or down by modifying the service's desired
 * 		count.</p>
 *          <p>You can't use a <code>DELETE_IN_PROGRESS</code> task definition revision to run new tasks
 * 			or create new services. You also can't update an existing service to reference a
 * 			<code>DELETE_IN_PROGRESS</code> task definition revision.</p>
 *          <p> A task definition revision will stay in <code>DELETE_IN_PROGRESS</code> status until
 * 			all the associated tasks and services have been terminated.</p>
 *          <p>When you delete all <code>INACTIVE</code> task definition revisions, the task definition name is not displayed in the console and not returned in the API. If a task definition revisions are in the <code>DELETE_IN_PROGRESS</code> state, the task definition name is displayed in the console and returned in the API. The task definition name is retained by  Amazon ECS and the revision is incremented the next time you create a task definition with that name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeleteTaskDefinitionsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeleteTaskDefinitionsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // DeleteTaskDefinitionsRequest
 *   taskDefinitions: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteTaskDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTaskDefinitionsResponse
 * //   taskDefinitions: [ // TaskDefinitionList
 * //     { // TaskDefinition
 * //       taskDefinitionArn: "STRING_VALUE",
 * //       containerDefinitions: [ // ContainerDefinitions
 * //         { // ContainerDefinition
 * //           name: "STRING_VALUE",
 * //           image: "STRING_VALUE",
 * //           repositoryCredentials: { // RepositoryCredentials
 * //             credentialsParameter: "STRING_VALUE", // required
 * //           },
 * //           cpu: Number("int"),
 * //           memory: Number("int"),
 * //           memoryReservation: Number("int"),
 * //           links: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //           portMappings: [ // PortMappingList
 * //             { // PortMapping
 * //               containerPort: Number("int"),
 * //               hostPort: Number("int"),
 * //               protocol: "tcp" || "udp",
 * //               name: "STRING_VALUE",
 * //               appProtocol: "http" || "http2" || "grpc",
 * //               containerPortRange: "STRING_VALUE",
 * //             },
 * //           ],
 * //           essential: true || false,
 * //           entryPoint: [
 * //             "STRING_VALUE",
 * //           ],
 * //           command: [
 * //             "STRING_VALUE",
 * //           ],
 * //           environment: [ // EnvironmentVariables
 * //             { // KeyValuePair
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
 * //           mountPoints: [ // MountPointList
 * //             { // MountPoint
 * //               sourceVolume: "STRING_VALUE",
 * //               containerPath: "STRING_VALUE",
 * //               readOnly: true || false,
 * //             },
 * //           ],
 * //           volumesFrom: [ // VolumeFromList
 * //             { // VolumeFrom
 * //               sourceContainer: "STRING_VALUE",
 * //               readOnly: true || false,
 * //             },
 * //           ],
 * //           linuxParameters: { // LinuxParameters
 * //             capabilities: { // KernelCapabilities
 * //               add: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               drop: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             devices: [ // DevicesList
 * //               { // Device
 * //                 hostPath: "STRING_VALUE", // required
 * //                 containerPath: "STRING_VALUE",
 * //                 permissions: [ // DeviceCgroupPermissions
 * //                   "read" || "write" || "mknod",
 * //                 ],
 * //               },
 * //             ],
 * //             initProcessEnabled: true || false,
 * //             sharedMemorySize: Number("int"),
 * //             tmpfs: [ // TmpfsList
 * //               { // Tmpfs
 * //                 containerPath: "STRING_VALUE", // required
 * //                 size: Number("int"), // required
 * //                 mountOptions: "<StringList>",
 * //               },
 * //             ],
 * //             maxSwap: Number("int"),
 * //             swappiness: Number("int"),
 * //           },
 * //           secrets: [ // SecretList
 * //             { // Secret
 * //               name: "STRING_VALUE", // required
 * //               valueFrom: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           dependsOn: [ // ContainerDependencies
 * //             { // ContainerDependency
 * //               containerName: "STRING_VALUE", // required
 * //               condition: "START" || "COMPLETE" || "SUCCESS" || "HEALTHY", // required
 * //             },
 * //           ],
 * //           startTimeout: Number("int"),
 * //           stopTimeout: Number("int"),
 * //           hostname: "STRING_VALUE",
 * //           user: "STRING_VALUE",
 * //           workingDirectory: "STRING_VALUE",
 * //           disableNetworking: true || false,
 * //           privileged: true || false,
 * //           readonlyRootFilesystem: true || false,
 * //           dnsServers: "<StringList>",
 * //           dnsSearchDomains: "<StringList>",
 * //           extraHosts: [ // HostEntryList
 * //             { // HostEntry
 * //               hostname: "STRING_VALUE", // required
 * //               ipAddress: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           dockerSecurityOptions: "<StringList>",
 * //           interactive: true || false,
 * //           pseudoTerminal: true || false,
 * //           dockerLabels: { // DockerLabelsMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           ulimits: [ // UlimitList
 * //             { // Ulimit
 * //               name: "core" || "cpu" || "data" || "fsize" || "locks" || "memlock" || "msgqueue" || "nice" || "nofile" || "nproc" || "rss" || "rtprio" || "rttime" || "sigpending" || "stack", // required
 * //               softLimit: Number("int"), // required
 * //               hardLimit: Number("int"), // required
 * //             },
 * //           ],
 * //           logConfiguration: { // LogConfiguration
 * //             logDriver: "json-file" || "syslog" || "journald" || "gelf" || "fluentd" || "awslogs" || "splunk" || "awsfirelens", // required
 * //             options: { // LogConfigurationOptionsMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             secretOptions: [
 * //               {
 * //                 name: "STRING_VALUE", // required
 * //                 valueFrom: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //           healthCheck: { // HealthCheck
 * //             command: "<StringList>", // required
 * //             interval: Number("int"),
 * //             timeout: Number("int"),
 * //             retries: Number("int"),
 * //             startPeriod: Number("int"),
 * //           },
 * //           systemControls: [ // SystemControls
 * //             { // SystemControl
 * //               namespace: "STRING_VALUE",
 * //               value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           resourceRequirements: [ // ResourceRequirements
 * //             { // ResourceRequirement
 * //               value: "STRING_VALUE", // required
 * //               type: "GPU" || "InferenceAccelerator", // required
 * //             },
 * //           ],
 * //           firelensConfiguration: { // FirelensConfiguration
 * //             type: "fluentd" || "fluentbit", // required
 * //             options: { // FirelensConfigurationOptionsMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //           credentialSpecs: "<StringList>",
 * //         },
 * //       ],
 * //       family: "STRING_VALUE",
 * //       taskRoleArn: "STRING_VALUE",
 * //       executionRoleArn: "STRING_VALUE",
 * //       networkMode: "bridge" || "host" || "awsvpc" || "none",
 * //       revision: Number("int"),
 * //       volumes: [ // VolumeList
 * //         { // Volume
 * //           name: "STRING_VALUE",
 * //           host: { // HostVolumeProperties
 * //             sourcePath: "STRING_VALUE",
 * //           },
 * //           dockerVolumeConfiguration: { // DockerVolumeConfiguration
 * //             scope: "task" || "shared",
 * //             autoprovision: true || false,
 * //             driver: "STRING_VALUE",
 * //             driverOpts: { // StringMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             labels: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //           efsVolumeConfiguration: { // EFSVolumeConfiguration
 * //             fileSystemId: "STRING_VALUE", // required
 * //             rootDirectory: "STRING_VALUE",
 * //             transitEncryption: "ENABLED" || "DISABLED",
 * //             transitEncryptionPort: Number("int"),
 * //             authorizationConfig: { // EFSAuthorizationConfig
 * //               accessPointId: "STRING_VALUE",
 * //               iam: "ENABLED" || "DISABLED",
 * //             },
 * //           },
 * //           fsxWindowsFileServerVolumeConfiguration: { // FSxWindowsFileServerVolumeConfiguration
 * //             fileSystemId: "STRING_VALUE", // required
 * //             rootDirectory: "STRING_VALUE", // required
 * //             authorizationConfig: { // FSxWindowsFileServerAuthorizationConfig
 * //               credentialsParameter: "STRING_VALUE", // required
 * //               domain: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       status: "ACTIVE" || "INACTIVE" || "DELETE_IN_PROGRESS",
 * //       requiresAttributes: [ // RequiresAttributes
 * //         { // Attribute
 * //           name: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //           targetType: "container-instance",
 * //           targetId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       placementConstraints: [ // TaskDefinitionPlacementConstraints
 * //         { // TaskDefinitionPlacementConstraint
 * //           type: "memberOf",
 * //           expression: "STRING_VALUE",
 * //         },
 * //       ],
 * //       compatibilities: [ // CompatibilityList
 * //         "EC2" || "FARGATE" || "EXTERNAL",
 * //       ],
 * //       runtimePlatform: { // RuntimePlatform
 * //         cpuArchitecture: "X86_64" || "ARM64",
 * //         operatingSystemFamily: "WINDOWS_SERVER_2019_FULL" || "WINDOWS_SERVER_2019_CORE" || "WINDOWS_SERVER_2016_FULL" || "WINDOWS_SERVER_2004_CORE" || "WINDOWS_SERVER_2022_CORE" || "WINDOWS_SERVER_2022_FULL" || "WINDOWS_SERVER_20H2_CORE" || "LINUX",
 * //       },
 * //       requiresCompatibilities: [
 * //         "EC2" || "FARGATE" || "EXTERNAL",
 * //       ],
 * //       cpu: "STRING_VALUE",
 * //       memory: "STRING_VALUE",
 * //       inferenceAccelerators: [ // InferenceAccelerators
 * //         { // InferenceAccelerator
 * //           deviceName: "STRING_VALUE", // required
 * //           deviceType: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       pidMode: "host" || "task",
 * //       ipcMode: "host" || "task" || "none",
 * //       proxyConfiguration: { // ProxyConfiguration
 * //         type: "APPMESH",
 * //         containerName: "STRING_VALUE", // required
 * //         properties: [ // ProxyConfigurationProperties
 * //           {
 * //             name: "STRING_VALUE",
 * //             value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       registeredAt: new Date("TIMESTAMP"),
 * //       deregisteredAt: new Date("TIMESTAMP"),
 * //       registeredBy: "STRING_VALUE",
 * //       ephemeralStorage: { // EphemeralStorage
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
 * @param DeleteTaskDefinitionsCommandInput - {@link DeleteTaskDefinitionsCommandInput}
 * @returns {@link DeleteTaskDefinitionsCommandOutput}
 * @see {@link DeleteTaskDefinitionsCommandInput} for command's `input` shape.
 * @see {@link DeleteTaskDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource,. Or, it might be specifying an identifier that isn't valid.</p>
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
export class DeleteTaskDefinitionsCommand extends $Command<
  DeleteTaskDefinitionsCommandInput,
  DeleteTaskDefinitionsCommandOutput,
  ECSClientResolvedConfig
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
  constructor(readonly input: DeleteTaskDefinitionsCommandInput) {
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
  ): Handler<DeleteTaskDefinitionsCommandInput, DeleteTaskDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteTaskDefinitionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "DeleteTaskDefinitionsCommand";
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
  private serialize(input: DeleteTaskDefinitionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteTaskDefinitionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTaskDefinitionsCommandOutput> {
    return de_DeleteTaskDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
