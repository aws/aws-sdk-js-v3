// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { RegisterTaskDefinitionRequest, RegisterTaskDefinitionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RegisterTaskDefinitionCommand,
  serializeAws_json1_1RegisterTaskDefinitionCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link RegisterTaskDefinitionCommand}.
 */
export interface RegisterTaskDefinitionCommandInput extends RegisterTaskDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link RegisterTaskDefinitionCommand}.
 */
export interface RegisterTaskDefinitionCommandOutput extends RegisterTaskDefinitionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Registers a new task definition from the supplied <code>family</code> and
 * 				<code>containerDefinitions</code>. Optionally, you can add data volumes to your
 * 			containers with the <code>volumes</code> parameter. For more information about task
 * 			definition parameters and defaults, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Amazon ECS Task
 * 				Definitions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <p>You can specify a role for your task with the <code>taskRoleArn</code> parameter.
 * 			When you specify a role for a task, its containers can then use the latest versions
 * 			of the CLI or SDKs to make API requests to the Amazon Web Services services that are specified in
 * 			the policy that's associated with the role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM
 * 				Roles for Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <p>You can specify a Docker networking mode for the containers in your task definition
 * 			with the <code>networkMode</code> parameter. The available network modes correspond to
 * 			those described in <a href="https://docs.docker.com/engine/reference/run/#/network-settings">Network
 * 				settings</a> in the Docker run reference. If you specify the <code>awsvpc</code>
 * 			network mode, the task is allocated an elastic network interface, and you must specify a
 * 				<a>NetworkConfiguration</a> when you create a service or run a task with
 * 			the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task Networking</a>
 * 			in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, RegisterTaskDefinitionCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, RegisterTaskDefinitionCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = {
 *   family: "STRING_VALUE", // required
 *   taskRoleArn: "STRING_VALUE",
 *   executionRoleArn: "STRING_VALUE",
 *   networkMode: "bridge" || "host" || "awsvpc" || "none",
 *   containerDefinitions: [ // required
 *     {
 *       name: "STRING_VALUE",
 *       image: "STRING_VALUE",
 *       repositoryCredentials: {
 *         credentialsParameter: "STRING_VALUE", // required
 *       },
 *       cpu: Number("int"),
 *       memory: Number("int"),
 *       memoryReservation: Number("int"),
 *       links: [
 *         "STRING_VALUE",
 *       ],
 *       portMappings: [
 *         {
 *           containerPort: Number("int"),
 *           hostPort: Number("int"),
 *           protocol: "tcp" || "udp",
 *           name: "STRING_VALUE",
 *           appProtocol: "http" || "http2" || "grpc",
 *           containerPortRange: "STRING_VALUE",
 *         },
 *       ],
 *       essential: true || false,
 *       entryPoint: [
 *         "STRING_VALUE",
 *       ],
 *       command: [
 *         "STRING_VALUE",
 *       ],
 *       environment: [
 *         {
 *           name: "STRING_VALUE",
 *           value: "STRING_VALUE",
 *         },
 *       ],
 *       environmentFiles: [
 *         {
 *           value: "STRING_VALUE", // required
 *           type: "s3", // required
 *         },
 *       ],
 *       mountPoints: [
 *         {
 *           sourceVolume: "STRING_VALUE",
 *           containerPath: "STRING_VALUE",
 *           readOnly: true || false,
 *         },
 *       ],
 *       volumesFrom: [
 *         {
 *           sourceContainer: "STRING_VALUE",
 *           readOnly: true || false,
 *         },
 *       ],
 *       linuxParameters: {
 *         capabilities: {
 *           add: [
 *             "STRING_VALUE",
 *           ],
 *           drop: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         devices: [
 *           {
 *             hostPath: "STRING_VALUE", // required
 *             containerPath: "STRING_VALUE",
 *             permissions: [
 *               "read" || "write" || "mknod",
 *             ],
 *           },
 *         ],
 *         initProcessEnabled: true || false,
 *         sharedMemorySize: Number("int"),
 *         tmpfs: [
 *           {
 *             containerPath: "STRING_VALUE", // required
 *             size: Number("int"), // required
 *             mountOptions: [
 *               "<StringList>",
 *             ],
 *           },
 *         ],
 *         maxSwap: Number("int"),
 *         swappiness: Number("int"),
 *       },
 *       secrets: [
 *         {
 *           name: "STRING_VALUE", // required
 *           valueFrom: "STRING_VALUE", // required
 *         },
 *       ],
 *       dependsOn: [
 *         {
 *           containerName: "STRING_VALUE", // required
 *           condition: "START" || "COMPLETE" || "SUCCESS" || "HEALTHY", // required
 *         },
 *       ],
 *       startTimeout: Number("int"),
 *       stopTimeout: Number("int"),
 *       hostname: "STRING_VALUE",
 *       user: "STRING_VALUE",
 *       workingDirectory: "STRING_VALUE",
 *       disableNetworking: true || false,
 *       privileged: true || false,
 *       readonlyRootFilesystem: true || false,
 *       dnsServers: [
 *         "<StringList>",
 *       ],
 *       dnsSearchDomains: [
 *         "<StringList>",
 *       ],
 *       extraHosts: [
 *         {
 *           hostname: "STRING_VALUE", // required
 *           ipAddress: "STRING_VALUE", // required
 *         },
 *       ],
 *       dockerSecurityOptions: [
 *         "<StringList>",
 *       ],
 *       interactive: true || false,
 *       pseudoTerminal: true || false,
 *       dockerLabels: {
 *         "<keys>": "STRING_VALUE",
 *       },
 *       ulimits: [
 *         {
 *           name: "core" || "cpu" || "data" || "fsize" || "locks" || "memlock" || "msgqueue" || "nice" || "nofile" || "nproc" || "rss" || "rtprio" || "rttime" || "sigpending" || "stack", // required
 *           softLimit: Number("int"), // required
 *           hardLimit: Number("int"), // required
 *         },
 *       ],
 *       logConfiguration: {
 *         logDriver: "json-file" || "syslog" || "journald" || "gelf" || "fluentd" || "awslogs" || "splunk" || "awsfirelens", // required
 *         options: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         secretOptions: [
 *           {
 *             name: "STRING_VALUE", // required
 *             valueFrom: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *       healthCheck: {
 *         command: [ // required
 *           "<StringList>",
 *         ],
 *         interval: Number("int"),
 *         timeout: Number("int"),
 *         retries: Number("int"),
 *         startPeriod: Number("int"),
 *       },
 *       systemControls: [
 *         {
 *           namespace: "STRING_VALUE",
 *           value: "STRING_VALUE",
 *         },
 *       ],
 *       resourceRequirements: [
 *         {
 *           value: "STRING_VALUE", // required
 *           type: "GPU" || "InferenceAccelerator", // required
 *         },
 *       ],
 *       firelensConfiguration: {
 *         type: "fluentd" || "fluentbit", // required
 *         options: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     },
 *   ],
 *   volumes: [
 *     {
 *       name: "STRING_VALUE",
 *       host: {
 *         sourcePath: "STRING_VALUE",
 *       },
 *       dockerVolumeConfiguration: {
 *         scope: "task" || "shared",
 *         autoprovision: true || false,
 *         driver: "STRING_VALUE",
 *         driverOpts: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         labels: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *       efsVolumeConfiguration: {
 *         fileSystemId: "STRING_VALUE", // required
 *         rootDirectory: "STRING_VALUE",
 *         transitEncryption: "ENABLED" || "DISABLED",
 *         transitEncryptionPort: Number("int"),
 *         authorizationConfig: {
 *           accessPointId: "STRING_VALUE",
 *           iam: "ENABLED" || "DISABLED",
 *         },
 *       },
 *       fsxWindowsFileServerVolumeConfiguration: {
 *         fileSystemId: "STRING_VALUE", // required
 *         rootDirectory: "STRING_VALUE", // required
 *         authorizationConfig: {
 *           credentialsParameter: "STRING_VALUE", // required
 *           domain: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *   ],
 *   placementConstraints: [
 *     {
 *       type: "memberOf",
 *       expression: "STRING_VALUE",
 *     },
 *   ],
 *   requiresCompatibilities: [
 *     "EC2" || "FARGATE" || "EXTERNAL",
 *   ],
 *   cpu: "STRING_VALUE",
 *   memory: "STRING_VALUE",
 *   tags: [
 *     {
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   pidMode: "host" || "task",
 *   ipcMode: "host" || "task" || "none",
 *   proxyConfiguration: {
 *     type: "APPMESH",
 *     containerName: "STRING_VALUE", // required
 *     properties: [
 *       {
 *         name: "STRING_VALUE",
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   inferenceAccelerators: [
 *     {
 *       deviceName: "STRING_VALUE", // required
 *       deviceType: "STRING_VALUE", // required
 *     },
 *   ],
 *   ephemeralStorage: {
 *     sizeInGiB: Number("int"), // required
 *   },
 *   runtimePlatform: {
 *     cpuArchitecture: "X86_64" || "ARM64",
 *     operatingSystemFamily: "WINDOWS_SERVER_2019_FULL" || "WINDOWS_SERVER_2019_CORE" || "WINDOWS_SERVER_2016_FULL" || "WINDOWS_SERVER_2004_CORE" || "WINDOWS_SERVER_2022_CORE" || "WINDOWS_SERVER_2022_FULL" || "WINDOWS_SERVER_20H2_CORE" || "LINUX",
 *   },
 * };
 * const command = new RegisterTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param RegisterTaskDefinitionCommandInput - {@link RegisterTaskDefinitionCommandInput}
 * @returns {@link RegisterTaskDefinitionCommandOutput}
 * @see {@link RegisterTaskDefinitionCommandInput} for command's `input` shape.
 * @see {@link RegisterTaskDefinitionCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
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
 *
 * @example To register a task definition
 * ```javascript
 * // This example registers a task definition to the specified family.
 * const input = {
 *   "containerDefinitions": [
 *     {
 *       "name": "sleep",
 *       "command": [
 *         "sleep",
 *         "360"
 *       ],
 *       "cpu": 10,
 *       "essential": true,
 *       "image": "busybox",
 *       "memory": 10
 *     }
 *   ],
 *   "family": "sleep360",
 *   "taskRoleArn": "",
 *   "volumes": []
 * };
 * const command = new RegisterTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "taskDefinition": {
 *     "containerDefinitions": [
 *       {
 *         "name": "sleep",
 *         "command": [
 *           "sleep",
 *           "360"
 *         ],
 *         "cpu": 10,
 *         "environment": [],
 *         "essential": true,
 *         "image": "busybox",
 *         "memory": 10,
 *         "mountPoints": [],
 *         "portMappings": [],
 *         "volumesFrom": []
 *       }
 *     ],
 *     "family": "sleep360",
 *     "revision": 1,
 *     "taskDefinitionArn": "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/sleep360:19",
 *     "volumes": []
 *   }
 * }
 * *\/
 * // example id: to-register-a-task-definition-1470764550877
 * ```
 *
 */
export class RegisterTaskDefinitionCommand extends $Command<
  RegisterTaskDefinitionCommandInput,
  RegisterTaskDefinitionCommandOutput,
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
  constructor(readonly input: RegisterTaskDefinitionCommandInput) {
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
  ): Handler<RegisterTaskDefinitionCommandInput, RegisterTaskDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterTaskDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "RegisterTaskDefinitionCommand";
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
  private serialize(input: RegisterTaskDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterTaskDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterTaskDefinitionCommandOutput> {
    return deserializeAws_json1_1RegisterTaskDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
