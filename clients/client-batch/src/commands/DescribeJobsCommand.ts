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

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { DescribeJobsRequest, DescribeJobsResponse } from "../models/models_0";
import { de_DescribeJobsCommand, se_DescribeJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeJobsCommand}.
 */
export interface DescribeJobsCommandInput extends DescribeJobsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeJobsCommand}.
 */
export interface DescribeJobsCommandOutput extends DescribeJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a list of Batch jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DescribeJobsCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DescribeJobsCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const input = { // DescribeJobsRequest
 *   jobs: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeJobsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJobsResponse
 * //   jobs: [ // JobDetailList
 * //     { // JobDetail
 * //       jobArn: "STRING_VALUE",
 * //       jobName: "STRING_VALUE", // required
 * //       jobId: "STRING_VALUE", // required
 * //       jobQueue: "STRING_VALUE", // required
 * //       status: "SUBMITTED" || "PENDING" || "RUNNABLE" || "STARTING" || "RUNNING" || "SUCCEEDED" || "FAILED", // required
 * //       shareIdentifier: "STRING_VALUE",
 * //       schedulingPriority: Number("int"),
 * //       attempts: [ // AttemptDetails
 * //         { // AttemptDetail
 * //           container: { // AttemptContainerDetail
 * //             containerInstanceArn: "STRING_VALUE",
 * //             taskArn: "STRING_VALUE",
 * //             exitCode: Number("int"),
 * //             reason: "STRING_VALUE",
 * //             logStreamName: "STRING_VALUE",
 * //             networkInterfaces: [ // NetworkInterfaceList
 * //               { // NetworkInterface
 * //                 attachmentId: "STRING_VALUE",
 * //                 ipv6Address: "STRING_VALUE",
 * //                 privateIpv4Address: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //           startedAt: Number("long"),
 * //           stoppedAt: Number("long"),
 * //           statusReason: "STRING_VALUE",
 * //         },
 * //       ],
 * //       statusReason: "STRING_VALUE",
 * //       createdAt: Number("long"),
 * //       retryStrategy: { // RetryStrategy
 * //         attempts: Number("int"),
 * //         evaluateOnExit: [ // EvaluateOnExitList
 * //           { // EvaluateOnExit
 * //             onStatusReason: "STRING_VALUE",
 * //             onReason: "STRING_VALUE",
 * //             onExitCode: "STRING_VALUE",
 * //             action: "RETRY" || "EXIT", // required
 * //           },
 * //         ],
 * //       },
 * //       startedAt: Number("long"), // required
 * //       stoppedAt: Number("long"),
 * //       dependsOn: [ // JobDependencyList
 * //         { // JobDependency
 * //           jobId: "STRING_VALUE",
 * //           type: "N_TO_N" || "SEQUENTIAL",
 * //         },
 * //       ],
 * //       jobDefinition: "STRING_VALUE", // required
 * //       parameters: { // ParametersMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       container: { // ContainerDetail
 * //         image: "STRING_VALUE",
 * //         vcpus: Number("int"),
 * //         memory: Number("int"),
 * //         command: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //         jobRoleArn: "STRING_VALUE",
 * //         executionRoleArn: "STRING_VALUE",
 * //         volumes: [ // Volumes
 * //           { // Volume
 * //             host: { // Host
 * //               sourcePath: "STRING_VALUE",
 * //             },
 * //             name: "STRING_VALUE",
 * //             efsVolumeConfiguration: { // EFSVolumeConfiguration
 * //               fileSystemId: "STRING_VALUE", // required
 * //               rootDirectory: "STRING_VALUE",
 * //               transitEncryption: "ENABLED" || "DISABLED",
 * //               transitEncryptionPort: Number("int"),
 * //               authorizationConfig: { // EFSAuthorizationConfig
 * //                 accessPointId: "STRING_VALUE",
 * //                 iam: "ENABLED" || "DISABLED",
 * //               },
 * //             },
 * //           },
 * //         ],
 * //         environment: [ // EnvironmentVariables
 * //           { // KeyValuePair
 * //             name: "STRING_VALUE",
 * //             value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         mountPoints: [ // MountPoints
 * //           { // MountPoint
 * //             containerPath: "STRING_VALUE",
 * //             readOnly: true || false,
 * //             sourceVolume: "STRING_VALUE",
 * //           },
 * //         ],
 * //         readonlyRootFilesystem: true || false,
 * //         ulimits: [ // Ulimits
 * //           { // Ulimit
 * //             hardLimit: Number("int"), // required
 * //             name: "STRING_VALUE", // required
 * //             softLimit: Number("int"), // required
 * //           },
 * //         ],
 * //         privileged: true || false,
 * //         user: "STRING_VALUE",
 * //         exitCode: Number("int"),
 * //         reason: "STRING_VALUE",
 * //         containerInstanceArn: "STRING_VALUE",
 * //         taskArn: "STRING_VALUE",
 * //         logStreamName: "STRING_VALUE",
 * //         instanceType: "STRING_VALUE",
 * //         networkInterfaces: [
 * //           {
 * //             attachmentId: "STRING_VALUE",
 * //             ipv6Address: "STRING_VALUE",
 * //             privateIpv4Address: "STRING_VALUE",
 * //           },
 * //         ],
 * //         resourceRequirements: [ // ResourceRequirements
 * //           { // ResourceRequirement
 * //             value: "STRING_VALUE", // required
 * //             type: "GPU" || "VCPU" || "MEMORY", // required
 * //           },
 * //         ],
 * //         linuxParameters: { // LinuxParameters
 * //           devices: [ // DevicesList
 * //             { // Device
 * //               hostPath: "STRING_VALUE", // required
 * //               containerPath: "STRING_VALUE",
 * //               permissions: [ // DeviceCgroupPermissions
 * //                 "READ" || "WRITE" || "MKNOD",
 * //               ],
 * //             },
 * //           ],
 * //           initProcessEnabled: true || false,
 * //           sharedMemorySize: Number("int"),
 * //           tmpfs: [ // TmpfsList
 * //             { // Tmpfs
 * //               containerPath: "STRING_VALUE", // required
 * //               size: Number("int"), // required
 * //               mountOptions: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //           maxSwap: Number("int"),
 * //           swappiness: Number("int"),
 * //         },
 * //         logConfiguration: { // LogConfiguration
 * //           logDriver: "json-file" || "syslog" || "journald" || "gelf" || "fluentd" || "awslogs" || "splunk", // required
 * //           options: { // LogConfigurationOptionsMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           secretOptions: [ // SecretList
 * //             { // Secret
 * //               name: "STRING_VALUE", // required
 * //               valueFrom: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //         secrets: [
 * //           {
 * //             name: "STRING_VALUE", // required
 * //             valueFrom: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         networkConfiguration: { // NetworkConfiguration
 * //           assignPublicIp: "ENABLED" || "DISABLED",
 * //         },
 * //         fargatePlatformConfiguration: { // FargatePlatformConfiguration
 * //           platformVersion: "STRING_VALUE",
 * //         },
 * //         ephemeralStorage: { // EphemeralStorage
 * //           sizeInGiB: Number("int"), // required
 * //         },
 * //         runtimePlatform: { // RuntimePlatform
 * //           operatingSystemFamily: "STRING_VALUE",
 * //           cpuArchitecture: "STRING_VALUE",
 * //         },
 * //       },
 * //       nodeDetails: { // NodeDetails
 * //         nodeIndex: Number("int"),
 * //         isMainNode: true || false,
 * //       },
 * //       nodeProperties: { // NodeProperties
 * //         numNodes: Number("int"), // required
 * //         mainNode: Number("int"), // required
 * //         nodeRangeProperties: [ // NodeRangeProperties // required
 * //           { // NodeRangeProperty
 * //             targetNodes: "STRING_VALUE", // required
 * //             container: { // ContainerProperties
 * //               image: "STRING_VALUE",
 * //               vcpus: Number("int"),
 * //               memory: Number("int"),
 * //               command: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               jobRoleArn: "STRING_VALUE",
 * //               executionRoleArn: "STRING_VALUE",
 * //               volumes: [
 * //                 {
 * //                   host: {
 * //                     sourcePath: "STRING_VALUE",
 * //                   },
 * //                   name: "STRING_VALUE",
 * //                   efsVolumeConfiguration: {
 * //                     fileSystemId: "STRING_VALUE", // required
 * //                     rootDirectory: "STRING_VALUE",
 * //                     transitEncryption: "ENABLED" || "DISABLED",
 * //                     transitEncryptionPort: Number("int"),
 * //                     authorizationConfig: {
 * //                       accessPointId: "STRING_VALUE",
 * //                       iam: "ENABLED" || "DISABLED",
 * //                     },
 * //                   },
 * //                 },
 * //               ],
 * //               environment: [
 * //                 {
 * //                   name: "STRING_VALUE",
 * //                   value: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               mountPoints: [
 * //                 {
 * //                   containerPath: "STRING_VALUE",
 * //                   readOnly: true || false,
 * //                   sourceVolume: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               readonlyRootFilesystem: true || false,
 * //               privileged: true || false,
 * //               ulimits: [
 * //                 {
 * //                   hardLimit: Number("int"), // required
 * //                   name: "STRING_VALUE", // required
 * //                   softLimit: Number("int"), // required
 * //                 },
 * //               ],
 * //               user: "STRING_VALUE",
 * //               instanceType: "STRING_VALUE",
 * //               resourceRequirements: [
 * //                 {
 * //                   value: "STRING_VALUE", // required
 * //                   type: "GPU" || "VCPU" || "MEMORY", // required
 * //                 },
 * //               ],
 * //               linuxParameters: {
 * //                 devices: [
 * //                   {
 * //                     hostPath: "STRING_VALUE", // required
 * //                     containerPath: "STRING_VALUE",
 * //                     permissions: [
 * //                       "READ" || "WRITE" || "MKNOD",
 * //                     ],
 * //                   },
 * //                 ],
 * //                 initProcessEnabled: true || false,
 * //                 sharedMemorySize: Number("int"),
 * //                 tmpfs: [
 * //                   {
 * //                     containerPath: "STRING_VALUE", // required
 * //                     size: Number("int"), // required
 * //                     mountOptions: "<StringList>",
 * //                   },
 * //                 ],
 * //                 maxSwap: Number("int"),
 * //                 swappiness: Number("int"),
 * //               },
 * //               logConfiguration: {
 * //                 logDriver: "json-file" || "syslog" || "journald" || "gelf" || "fluentd" || "awslogs" || "splunk", // required
 * //                 options: {
 * //                   "<keys>": "STRING_VALUE",
 * //                 },
 * //                 secretOptions: "<SecretList>",
 * //               },
 * //               secrets: "<SecretList>",
 * //               networkConfiguration: {
 * //                 assignPublicIp: "ENABLED" || "DISABLED",
 * //               },
 * //               fargatePlatformConfiguration: {
 * //                 platformVersion: "STRING_VALUE",
 * //               },
 * //               ephemeralStorage: {
 * //                 sizeInGiB: Number("int"), // required
 * //               },
 * //               runtimePlatform: {
 * //                 operatingSystemFamily: "STRING_VALUE",
 * //                 cpuArchitecture: "STRING_VALUE",
 * //               },
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       arrayProperties: { // ArrayPropertiesDetail
 * //         statusSummary: { // ArrayJobStatusSummary
 * //           "<keys>": Number("int"),
 * //         },
 * //         size: Number("int"),
 * //         index: Number("int"),
 * //       },
 * //       timeout: { // JobTimeout
 * //         attemptDurationSeconds: Number("int"),
 * //       },
 * //       tags: { // TagrisTagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       propagateTags: true || false,
 * //       platformCapabilities: [ // PlatformCapabilityList
 * //         "EC2" || "FARGATE",
 * //       ],
 * //       eksProperties: { // EksPropertiesDetail
 * //         podProperties: { // EksPodPropertiesDetail
 * //           serviceAccountName: "STRING_VALUE",
 * //           hostNetwork: true || false,
 * //           dnsPolicy: "STRING_VALUE",
 * //           containers: [ // EksContainerDetails
 * //             { // EksContainerDetail
 * //               name: "STRING_VALUE",
 * //               image: "STRING_VALUE",
 * //               imagePullPolicy: "STRING_VALUE",
 * //               command: "<StringList>",
 * //               args: "<StringList>",
 * //               env: [ // EksContainerEnvironmentVariables
 * //                 { // EksContainerEnvironmentVariable
 * //                   name: "STRING_VALUE", // required
 * //                   value: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               resources: { // EksContainerResourceRequirements
 * //                 limits: { // EksLimits
 * //                   "<keys>": "STRING_VALUE",
 * //                 },
 * //                 requests: { // EksRequests
 * //                   "<keys>": "STRING_VALUE",
 * //                 },
 * //               },
 * //               exitCode: Number("int"),
 * //               reason: "STRING_VALUE",
 * //               volumeMounts: [ // EksContainerVolumeMounts
 * //                 { // EksContainerVolumeMount
 * //                   name: "STRING_VALUE",
 * //                   mountPath: "STRING_VALUE",
 * //                   readOnly: true || false,
 * //                 },
 * //               ],
 * //               securityContext: { // EksContainerSecurityContext
 * //                 runAsUser: Number("long"),
 * //                 runAsGroup: Number("long"),
 * //                 privileged: true || false,
 * //                 readOnlyRootFilesystem: true || false,
 * //                 runAsNonRoot: true || false,
 * //               },
 * //             },
 * //           ],
 * //           volumes: [ // EksVolumes
 * //             { // EksVolume
 * //               name: "STRING_VALUE", // required
 * //               hostPath: { // EksHostPath
 * //                 path: "STRING_VALUE",
 * //               },
 * //               emptyDir: { // EksEmptyDir
 * //                 medium: "STRING_VALUE",
 * //                 sizeLimit: "STRING_VALUE",
 * //               },
 * //               secret: { // EksSecret
 * //                 secretName: "STRING_VALUE", // required
 * //                 optional: true || false,
 * //               },
 * //             },
 * //           ],
 * //           podName: "STRING_VALUE",
 * //           nodeName: "STRING_VALUE",
 * //           metadata: { // EksMetadata
 * //             labels: { // EksLabelsMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //       },
 * //       eksAttempts: [ // EksAttemptDetails
 * //         { // EksAttemptDetail
 * //           containers: [ // EksAttemptContainerDetails
 * //             { // EksAttemptContainerDetail
 * //               exitCode: Number("int"),
 * //               reason: "STRING_VALUE",
 * //             },
 * //           ],
 * //           podName: "STRING_VALUE",
 * //           nodeName: "STRING_VALUE",
 * //           startedAt: Number("long"),
 * //           stoppedAt: Number("long"),
 * //           statusReason: "STRING_VALUE",
 * //         },
 * //       ],
 * //       isCancelled: true || false,
 * //       isTerminated: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeJobsCommandInput - {@link DescribeJobsCommandInput}
 * @returns {@link DescribeJobsCommandOutput}
 * @see {@link DescribeJobsCommandInput} for command's `input` shape.
 * @see {@link DescribeJobsCommandOutput} for command's `response` shape.
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
 * @example To describe a specific job
 * ```javascript
 * // This example describes a job with the specified job ID.
 * const input = {
 *   "jobs": [
 *     "24fa2d7a-64c4-49d2-8b47-f8da4fbde8e9"
 *   ]
 * };
 * const command = new DescribeJobsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "jobs": [
 *     {
 *       "container": {
 *         "command": [
 *           "sleep",
 *           "60"
 *         ],
 *         "containerInstanceArn": "arn:aws:ecs:us-east-1:012345678910:container-instance/5406d7cd-58bd-4b8f-9936-48d7c6b1526c",
 *         "environment": [],
 *         "exitCode": 0,
 *         "image": "busybox",
 *         "memory": 128,
 *         "mountPoints": [],
 *         "ulimits": [],
 *         "vcpus": 1,
 *         "volumes": []
 *       },
 *       "createdAt": 1480460782010,
 *       "dependsOn": [],
 *       "jobDefinition": "sleep60",
 *       "jobId": "24fa2d7a-64c4-49d2-8b47-f8da4fbde8e9",
 *       "jobName": "example",
 *       "jobQueue": "arn:aws:batch:us-east-1:012345678910:job-queue/HighPriority",
 *       "parameters": {},
 *       "startedAt": 1480460816500,
 *       "status": "SUCCEEDED",
 *       "stoppedAt": 1480460880699
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-a-specific-job-1481154090490
 * ```
 *
 */
export class DescribeJobsCommand extends $Command<
  DescribeJobsCommandInput,
  DescribeJobsCommandOutput,
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
  constructor(readonly input: DescribeJobsCommandInput) {
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
  ): Handler<DescribeJobsCommandInput, DescribeJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeJobsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "DescribeJobsCommand";
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
  private serialize(input: DescribeJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeJobsCommandOutput> {
    return de_DescribeJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
