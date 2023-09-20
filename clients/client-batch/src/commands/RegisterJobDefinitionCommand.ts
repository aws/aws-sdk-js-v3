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

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { RegisterJobDefinitionRequest, RegisterJobDefinitionResponse } from "../models/models_0";
import { de_RegisterJobDefinitionCommand, se_RegisterJobDefinitionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RegisterJobDefinitionCommand}.
 */
export interface RegisterJobDefinitionCommandInput extends RegisterJobDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link RegisterJobDefinitionCommand}.
 */
export interface RegisterJobDefinitionCommandOutput extends RegisterJobDefinitionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Registers an Batch job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, RegisterJobDefinitionCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, RegisterJobDefinitionCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const input = { // RegisterJobDefinitionRequest
 *   jobDefinitionName: "STRING_VALUE", // required
 *   type: "container" || "multinode", // required
 *   parameters: { // ParametersMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   schedulingPriority: Number("int"),
 *   containerProperties: { // ContainerProperties
 *     image: "STRING_VALUE",
 *     vcpus: Number("int"),
 *     memory: Number("int"),
 *     command: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *     jobRoleArn: "STRING_VALUE",
 *     executionRoleArn: "STRING_VALUE",
 *     volumes: [ // Volumes
 *       { // Volume
 *         host: { // Host
 *           sourcePath: "STRING_VALUE",
 *         },
 *         name: "STRING_VALUE",
 *         efsVolumeConfiguration: { // EFSVolumeConfiguration
 *           fileSystemId: "STRING_VALUE", // required
 *           rootDirectory: "STRING_VALUE",
 *           transitEncryption: "ENABLED" || "DISABLED",
 *           transitEncryptionPort: Number("int"),
 *           authorizationConfig: { // EFSAuthorizationConfig
 *             accessPointId: "STRING_VALUE",
 *             iam: "ENABLED" || "DISABLED",
 *           },
 *         },
 *       },
 *     ],
 *     environment: [ // EnvironmentVariables
 *       { // KeyValuePair
 *         name: "STRING_VALUE",
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *     mountPoints: [ // MountPoints
 *       { // MountPoint
 *         containerPath: "STRING_VALUE",
 *         readOnly: true || false,
 *         sourceVolume: "STRING_VALUE",
 *       },
 *     ],
 *     readonlyRootFilesystem: true || false,
 *     privileged: true || false,
 *     ulimits: [ // Ulimits
 *       { // Ulimit
 *         hardLimit: Number("int"), // required
 *         name: "STRING_VALUE", // required
 *         softLimit: Number("int"), // required
 *       },
 *     ],
 *     user: "STRING_VALUE",
 *     instanceType: "STRING_VALUE",
 *     resourceRequirements: [ // ResourceRequirements
 *       { // ResourceRequirement
 *         value: "STRING_VALUE", // required
 *         type: "GPU" || "VCPU" || "MEMORY", // required
 *       },
 *     ],
 *     linuxParameters: { // LinuxParameters
 *       devices: [ // DevicesList
 *         { // Device
 *           hostPath: "STRING_VALUE", // required
 *           containerPath: "STRING_VALUE",
 *           permissions: [ // DeviceCgroupPermissions
 *             "READ" || "WRITE" || "MKNOD",
 *           ],
 *         },
 *       ],
 *       initProcessEnabled: true || false,
 *       sharedMemorySize: Number("int"),
 *       tmpfs: [ // TmpfsList
 *         { // Tmpfs
 *           containerPath: "STRING_VALUE", // required
 *           size: Number("int"), // required
 *           mountOptions: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       maxSwap: Number("int"),
 *       swappiness: Number("int"),
 *     },
 *     logConfiguration: { // LogConfiguration
 *       logDriver: "json-file" || "syslog" || "journald" || "gelf" || "fluentd" || "awslogs" || "splunk", // required
 *       options: { // LogConfigurationOptionsMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       secretOptions: [ // SecretList
 *         { // Secret
 *           name: "STRING_VALUE", // required
 *           valueFrom: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     secrets: [
 *       {
 *         name: "STRING_VALUE", // required
 *         valueFrom: "STRING_VALUE", // required
 *       },
 *     ],
 *     networkConfiguration: { // NetworkConfiguration
 *       assignPublicIp: "ENABLED" || "DISABLED",
 *     },
 *     fargatePlatformConfiguration: { // FargatePlatformConfiguration
 *       platformVersion: "STRING_VALUE",
 *     },
 *     ephemeralStorage: { // EphemeralStorage
 *       sizeInGiB: Number("int"), // required
 *     },
 *     runtimePlatform: { // RuntimePlatform
 *       operatingSystemFamily: "STRING_VALUE",
 *       cpuArchitecture: "STRING_VALUE",
 *     },
 *   },
 *   nodeProperties: { // NodeProperties
 *     numNodes: Number("int"), // required
 *     mainNode: Number("int"), // required
 *     nodeRangeProperties: [ // NodeRangeProperties // required
 *       { // NodeRangeProperty
 *         targetNodes: "STRING_VALUE", // required
 *         container: {
 *           image: "STRING_VALUE",
 *           vcpus: Number("int"),
 *           memory: Number("int"),
 *           command: [
 *             "STRING_VALUE",
 *           ],
 *           jobRoleArn: "STRING_VALUE",
 *           executionRoleArn: "STRING_VALUE",
 *           volumes: [
 *             {
 *               host: {
 *                 sourcePath: "STRING_VALUE",
 *               },
 *               name: "STRING_VALUE",
 *               efsVolumeConfiguration: {
 *                 fileSystemId: "STRING_VALUE", // required
 *                 rootDirectory: "STRING_VALUE",
 *                 transitEncryption: "ENABLED" || "DISABLED",
 *                 transitEncryptionPort: Number("int"),
 *                 authorizationConfig: {
 *                   accessPointId: "STRING_VALUE",
 *                   iam: "ENABLED" || "DISABLED",
 *                 },
 *               },
 *             },
 *           ],
 *           environment: [
 *             {
 *               name: "STRING_VALUE",
 *               value: "STRING_VALUE",
 *             },
 *           ],
 *           mountPoints: [
 *             {
 *               containerPath: "STRING_VALUE",
 *               readOnly: true || false,
 *               sourceVolume: "STRING_VALUE",
 *             },
 *           ],
 *           readonlyRootFilesystem: true || false,
 *           privileged: true || false,
 *           ulimits: [
 *             {
 *               hardLimit: Number("int"), // required
 *               name: "STRING_VALUE", // required
 *               softLimit: Number("int"), // required
 *             },
 *           ],
 *           user: "STRING_VALUE",
 *           instanceType: "STRING_VALUE",
 *           resourceRequirements: [
 *             {
 *               value: "STRING_VALUE", // required
 *               type: "GPU" || "VCPU" || "MEMORY", // required
 *             },
 *           ],
 *           linuxParameters: {
 *             devices: [
 *               {
 *                 hostPath: "STRING_VALUE", // required
 *                 containerPath: "STRING_VALUE",
 *                 permissions: [
 *                   "READ" || "WRITE" || "MKNOD",
 *                 ],
 *               },
 *             ],
 *             initProcessEnabled: true || false,
 *             sharedMemorySize: Number("int"),
 *             tmpfs: [
 *               {
 *                 containerPath: "STRING_VALUE", // required
 *                 size: Number("int"), // required
 *                 mountOptions: "<StringList>",
 *               },
 *             ],
 *             maxSwap: Number("int"),
 *             swappiness: Number("int"),
 *           },
 *           logConfiguration: {
 *             logDriver: "json-file" || "syslog" || "journald" || "gelf" || "fluentd" || "awslogs" || "splunk", // required
 *             options: {
 *               "<keys>": "STRING_VALUE",
 *             },
 *             secretOptions: "<SecretList>",
 *           },
 *           secrets: "<SecretList>",
 *           networkConfiguration: {
 *             assignPublicIp: "ENABLED" || "DISABLED",
 *           },
 *           fargatePlatformConfiguration: {
 *             platformVersion: "STRING_VALUE",
 *           },
 *           ephemeralStorage: {
 *             sizeInGiB: Number("int"), // required
 *           },
 *           runtimePlatform: {
 *             operatingSystemFamily: "STRING_VALUE",
 *             cpuArchitecture: "STRING_VALUE",
 *           },
 *         },
 *       },
 *     ],
 *   },
 *   retryStrategy: { // RetryStrategy
 *     attempts: Number("int"),
 *     evaluateOnExit: [ // EvaluateOnExitList
 *       { // EvaluateOnExit
 *         onStatusReason: "STRING_VALUE",
 *         onReason: "STRING_VALUE",
 *         onExitCode: "STRING_VALUE",
 *         action: "RETRY" || "EXIT", // required
 *       },
 *     ],
 *   },
 *   propagateTags: true || false,
 *   timeout: { // JobTimeout
 *     attemptDurationSeconds: Number("int"),
 *   },
 *   tags: { // TagrisTagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   platformCapabilities: [ // PlatformCapabilityList
 *     "EC2" || "FARGATE",
 *   ],
 *   eksProperties: { // EksProperties
 *     podProperties: { // EksPodProperties
 *       serviceAccountName: "STRING_VALUE",
 *       hostNetwork: true || false,
 *       dnsPolicy: "STRING_VALUE",
 *       containers: [ // EksContainers
 *         { // EksContainer
 *           name: "STRING_VALUE",
 *           image: "STRING_VALUE", // required
 *           imagePullPolicy: "STRING_VALUE",
 *           command: "<StringList>",
 *           args: "<StringList>",
 *           env: [ // EksContainerEnvironmentVariables
 *             { // EksContainerEnvironmentVariable
 *               name: "STRING_VALUE", // required
 *               value: "STRING_VALUE",
 *             },
 *           ],
 *           resources: { // EksContainerResourceRequirements
 *             limits: { // EksLimits
 *               "<keys>": "STRING_VALUE",
 *             },
 *             requests: { // EksRequests
 *               "<keys>": "STRING_VALUE",
 *             },
 *           },
 *           volumeMounts: [ // EksContainerVolumeMounts
 *             { // EksContainerVolumeMount
 *               name: "STRING_VALUE",
 *               mountPath: "STRING_VALUE",
 *               readOnly: true || false,
 *             },
 *           ],
 *           securityContext: { // EksContainerSecurityContext
 *             runAsUser: Number("long"),
 *             runAsGroup: Number("long"),
 *             privileged: true || false,
 *             readOnlyRootFilesystem: true || false,
 *             runAsNonRoot: true || false,
 *           },
 *         },
 *       ],
 *       volumes: [ // EksVolumes
 *         { // EksVolume
 *           name: "STRING_VALUE", // required
 *           hostPath: { // EksHostPath
 *             path: "STRING_VALUE",
 *           },
 *           emptyDir: { // EksEmptyDir
 *             medium: "STRING_VALUE",
 *             sizeLimit: "STRING_VALUE",
 *           },
 *           secret: { // EksSecret
 *             secretName: "STRING_VALUE", // required
 *             optional: true || false,
 *           },
 *         },
 *       ],
 *       metadata: { // EksMetadata
 *         labels: { // EksLabelsMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new RegisterJobDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // RegisterJobDefinitionResponse
 * //   jobDefinitionName: "STRING_VALUE", // required
 * //   jobDefinitionArn: "STRING_VALUE", // required
 * //   revision: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param RegisterJobDefinitionCommandInput - {@link RegisterJobDefinitionCommandInput}
 * @returns {@link RegisterJobDefinitionCommandOutput}
 * @see {@link RegisterJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link RegisterJobDefinitionCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link BatchServiceException}
 * <p>Base exception class for all service exceptions from Batch service.</p>
 *
 * @example To register a job definition
 * ```javascript
 * // This example registers a job definition for a simple container job.
 * const input = {
 *   "type": "container",
 *   "containerProperties": {
 *     "command": [
 *       "sleep",
 *       "10"
 *     ],
 *     "image": "busybox",
 *     "resourceRequirements": [
 *       {
 *         "type": "MEMORY",
 *         "value": "128"
 *       },
 *       {
 *         "type": "VCPU",
 *         "value": "1"
 *       }
 *     ]
 *   },
 *   "jobDefinitionName": "sleep10"
 * };
 * const command = new RegisterJobDefinitionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "jobDefinitionArn": "arn:aws:batch:us-east-1:012345678910:job-definition/sleep10:1",
 *   "jobDefinitionName": "sleep10",
 *   "revision": 1
 * }
 * *\/
 * // example id: to-register-a-job-definition-1481154325325
 * ```
 *
 * @example RegisterJobDefinition with tags
 * ```javascript
 * // This demonstrates calling the RegisterJobDefinition action, including tags.
 * const input = {
 *   "type": "container",
 *   "containerProperties": {
 *     "command": [
 *       "sleep",
 *       "30"
 *     ],
 *     "image": "busybox",
 *     "resourceRequirements": [
 *       {
 *         "type": "MEMORY",
 *         "value": "128"
 *       },
 *       {
 *         "type": "VCPU",
 *         "value": "1"
 *       }
 *     ]
 *   },
 *   "jobDefinitionName": "sleep30",
 *   "tags": {
 *     "Department": "Engineering",
 *     "User": "JaneDoe"
 *   }
 * };
 * const command = new RegisterJobDefinitionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "jobDefinitionArn": "arn:aws:batch:us-east-1:012345678910:job-definition/sleep30:1",
 *   "jobDefinitionName": "sleep30",
 *   "revision": 1
 * }
 * *\/
 * // example id: registerjobdefinition-with-tags-1591290509028
 * ```
 *
 */
export class RegisterJobDefinitionCommand extends $Command<
  RegisterJobDefinitionCommandInput,
  RegisterJobDefinitionCommandOutput,
  BatchClientResolvedConfig
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
  constructor(readonly input: RegisterJobDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterJobDefinitionCommandInput, RegisterJobDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterJobDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "RegisterJobDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSBatchV20160810",
        operation: "RegisterJobDefinition",
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
  private serialize(input: RegisterJobDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RegisterJobDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterJobDefinitionCommandOutput> {
    return de_RegisterJobDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
