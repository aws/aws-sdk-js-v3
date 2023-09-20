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

import { CreateSimulationJobRequest, CreateSimulationJobResponse } from "../models/models_0";
import { de_CreateSimulationJobCommand, se_CreateSimulationJobCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSimulationJobCommand}.
 */
export interface CreateSimulationJobCommandInput extends CreateSimulationJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateSimulationJobCommand}.
 */
export interface CreateSimulationJobCommandOutput extends CreateSimulationJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a simulation job.</p>
 *          <note>
 *             <p>After 90 days, simulation jobs expire and will be deleted. They will no longer be
 *             accessible. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateSimulationJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateSimulationJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // CreateSimulationJobRequest
 *   clientRequestToken: "STRING_VALUE",
 *   outputLocation: { // OutputLocation
 *     s3Bucket: "STRING_VALUE",
 *     s3Prefix: "STRING_VALUE",
 *   },
 *   loggingConfig: { // LoggingConfig
 *     recordAllRosTopics: true || false,
 *   },
 *   maxJobDurationInSeconds: Number("long"), // required
 *   iamRole: "STRING_VALUE", // required
 *   failureBehavior: "Fail" || "Continue",
 *   robotApplications: [ // RobotApplicationConfigs
 *     { // RobotApplicationConfig
 *       application: "STRING_VALUE", // required
 *       applicationVersion: "STRING_VALUE",
 *       launchConfig: { // LaunchConfig
 *         packageName: "STRING_VALUE",
 *         launchFile: "STRING_VALUE",
 *         environmentVariables: { // EnvironmentVariableMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *         portForwardingConfig: { // PortForwardingConfig
 *           portMappings: [ // PortMappingList
 *             { // PortMapping
 *               jobPort: Number("int"), // required
 *               applicationPort: Number("int"), // required
 *               enableOnPublicIp: true || false,
 *             },
 *           ],
 *         },
 *         streamUI: true || false,
 *         command: [ // CommandList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       uploadConfigurations: [ // UploadConfigurations
 *         { // UploadConfiguration
 *           name: "STRING_VALUE", // required
 *           path: "STRING_VALUE", // required
 *           uploadBehavior: "UPLOAD_ON_TERMINATE" || "UPLOAD_ROLLING_AUTO_REMOVE", // required
 *         },
 *       ],
 *       useDefaultUploadConfigurations: true || false,
 *       tools: [ // Tools
 *         { // Tool
 *           streamUI: true || false,
 *           name: "STRING_VALUE", // required
 *           command: "STRING_VALUE", // required
 *           streamOutputToCloudWatch: true || false,
 *           exitBehavior: "FAIL" || "RESTART",
 *         },
 *       ],
 *       useDefaultTools: true || false,
 *     },
 *   ],
 *   simulationApplications: [ // SimulationApplicationConfigs
 *     { // SimulationApplicationConfig
 *       application: "STRING_VALUE", // required
 *       applicationVersion: "STRING_VALUE",
 *       launchConfig: {
 *         packageName: "STRING_VALUE",
 *         launchFile: "STRING_VALUE",
 *         environmentVariables: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         portForwardingConfig: {
 *           portMappings: [
 *             {
 *               jobPort: Number("int"), // required
 *               applicationPort: Number("int"), // required
 *               enableOnPublicIp: true || false,
 *             },
 *           ],
 *         },
 *         streamUI: true || false,
 *         command: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *       uploadConfigurations: [
 *         {
 *           name: "STRING_VALUE", // required
 *           path: "STRING_VALUE", // required
 *           uploadBehavior: "UPLOAD_ON_TERMINATE" || "UPLOAD_ROLLING_AUTO_REMOVE", // required
 *         },
 *       ],
 *       worldConfigs: [ // WorldConfigs
 *         { // WorldConfig
 *           world: "STRING_VALUE",
 *         },
 *       ],
 *       useDefaultUploadConfigurations: true || false,
 *       tools: [
 *         {
 *           streamUI: true || false,
 *           name: "STRING_VALUE", // required
 *           command: "STRING_VALUE", // required
 *           streamOutputToCloudWatch: true || false,
 *           exitBehavior: "FAIL" || "RESTART",
 *         },
 *       ],
 *       useDefaultTools: true || false,
 *     },
 *   ],
 *   dataSources: [ // DataSourceConfigs
 *     { // DataSourceConfig
 *       name: "STRING_VALUE", // required
 *       s3Bucket: "STRING_VALUE", // required
 *       s3Keys: [ // S3KeysOrPrefixes // required
 *         "STRING_VALUE",
 *       ],
 *       type: "Prefix" || "Archive" || "File",
 *       destination: "STRING_VALUE",
 *     },
 *   ],
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   vpcConfig: { // VPCConfig
 *     subnets: [ // Subnets // required
 *       "STRING_VALUE",
 *     ],
 *     securityGroups: [ // SecurityGroups
 *       "STRING_VALUE",
 *     ],
 *     assignPublicIp: true || false,
 *   },
 *   compute: { // Compute
 *     simulationUnitLimit: Number("int"),
 *     computeType: "CPU" || "GPU_AND_CPU",
 *     gpuUnitLimit: Number("int"),
 *   },
 * };
 * const command = new CreateSimulationJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateSimulationJobResponse
 * //   arn: "STRING_VALUE",
 * //   status: "Pending" || "Preparing" || "Running" || "Restarting" || "Completed" || "Failed" || "RunningFailed" || "Terminating" || "Terminated" || "Canceled",
 * //   lastStartedAt: new Date("TIMESTAMP"),
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * //   failureBehavior: "Fail" || "Continue",
 * //   failureCode: "InternalServiceError" || "RobotApplicationCrash" || "SimulationApplicationCrash" || "RobotApplicationHealthCheckFailure" || "SimulationApplicationHealthCheckFailure" || "BadPermissionsRobotApplication" || "BadPermissionsSimulationApplication" || "BadPermissionsS3Object" || "BadPermissionsS3Output" || "BadPermissionsCloudwatchLogs" || "SubnetIpLimitExceeded" || "ENILimitExceeded" || "BadPermissionsUserCredentials" || "InvalidBundleRobotApplication" || "InvalidBundleSimulationApplication" || "InvalidS3Resource" || "ThrottlingError" || "LimitExceeded" || "MismatchedEtag" || "RobotApplicationVersionMismatchedEtag" || "SimulationApplicationVersionMismatchedEtag" || "ResourceNotFound" || "RequestThrottled" || "BatchTimedOut" || "BatchCanceled" || "InvalidInput" || "WrongRegionS3Bucket" || "WrongRegionS3Output" || "WrongRegionRobotApplication" || "WrongRegionSimulationApplication" || "UploadContentMismatchError",
 * //   clientRequestToken: "STRING_VALUE",
 * //   outputLocation: { // OutputLocation
 * //     s3Bucket: "STRING_VALUE",
 * //     s3Prefix: "STRING_VALUE",
 * //   },
 * //   loggingConfig: { // LoggingConfig
 * //     recordAllRosTopics: true || false,
 * //   },
 * //   maxJobDurationInSeconds: Number("long"),
 * //   simulationTimeMillis: Number("long"),
 * //   iamRole: "STRING_VALUE",
 * //   robotApplications: [ // RobotApplicationConfigs
 * //     { // RobotApplicationConfig
 * //       application: "STRING_VALUE", // required
 * //       applicationVersion: "STRING_VALUE",
 * //       launchConfig: { // LaunchConfig
 * //         packageName: "STRING_VALUE",
 * //         launchFile: "STRING_VALUE",
 * //         environmentVariables: { // EnvironmentVariableMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         portForwardingConfig: { // PortForwardingConfig
 * //           portMappings: [ // PortMappingList
 * //             { // PortMapping
 * //               jobPort: Number("int"), // required
 * //               applicationPort: Number("int"), // required
 * //               enableOnPublicIp: true || false,
 * //             },
 * //           ],
 * //         },
 * //         streamUI: true || false,
 * //         command: [ // CommandList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       uploadConfigurations: [ // UploadConfigurations
 * //         { // UploadConfiguration
 * //           name: "STRING_VALUE", // required
 * //           path: "STRING_VALUE", // required
 * //           uploadBehavior: "UPLOAD_ON_TERMINATE" || "UPLOAD_ROLLING_AUTO_REMOVE", // required
 * //         },
 * //       ],
 * //       useDefaultUploadConfigurations: true || false,
 * //       tools: [ // Tools
 * //         { // Tool
 * //           streamUI: true || false,
 * //           name: "STRING_VALUE", // required
 * //           command: "STRING_VALUE", // required
 * //           streamOutputToCloudWatch: true || false,
 * //           exitBehavior: "FAIL" || "RESTART",
 * //         },
 * //       ],
 * //       useDefaultTools: true || false,
 * //     },
 * //   ],
 * //   simulationApplications: [ // SimulationApplicationConfigs
 * //     { // SimulationApplicationConfig
 * //       application: "STRING_VALUE", // required
 * //       applicationVersion: "STRING_VALUE",
 * //       launchConfig: {
 * //         packageName: "STRING_VALUE",
 * //         launchFile: "STRING_VALUE",
 * //         environmentVariables: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         portForwardingConfig: {
 * //           portMappings: [
 * //             {
 * //               jobPort: Number("int"), // required
 * //               applicationPort: Number("int"), // required
 * //               enableOnPublicIp: true || false,
 * //             },
 * //           ],
 * //         },
 * //         streamUI: true || false,
 * //         command: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       uploadConfigurations: [
 * //         {
 * //           name: "STRING_VALUE", // required
 * //           path: "STRING_VALUE", // required
 * //           uploadBehavior: "UPLOAD_ON_TERMINATE" || "UPLOAD_ROLLING_AUTO_REMOVE", // required
 * //         },
 * //       ],
 * //       worldConfigs: [ // WorldConfigs
 * //         { // WorldConfig
 * //           world: "STRING_VALUE",
 * //         },
 * //       ],
 * //       useDefaultUploadConfigurations: true || false,
 * //       tools: [
 * //         {
 * //           streamUI: true || false,
 * //           name: "STRING_VALUE", // required
 * //           command: "STRING_VALUE", // required
 * //           streamOutputToCloudWatch: true || false,
 * //           exitBehavior: "FAIL" || "RESTART",
 * //         },
 * //       ],
 * //       useDefaultTools: true || false,
 * //     },
 * //   ],
 * //   dataSources: [ // DataSources
 * //     { // DataSource
 * //       name: "STRING_VALUE",
 * //       s3Bucket: "STRING_VALUE",
 * //       s3Keys: [ // S3KeyOutputs
 * //         { // S3KeyOutput
 * //           s3Key: "STRING_VALUE",
 * //           etag: "STRING_VALUE",
 * //         },
 * //       ],
 * //       type: "Prefix" || "Archive" || "File",
 * //       destination: "STRING_VALUE",
 * //     },
 * //   ],
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   vpcConfig: { // VPCConfigResponse
 * //     subnets: [ // Subnets
 * //       "STRING_VALUE",
 * //     ],
 * //     securityGroups: [ // SecurityGroups
 * //       "STRING_VALUE",
 * //     ],
 * //     vpcId: "STRING_VALUE",
 * //     assignPublicIp: true || false,
 * //   },
 * //   compute: { // ComputeResponse
 * //     simulationUnitLimit: Number("int"),
 * //     computeType: "CPU" || "GPU_AND_CPU",
 * //     gpuUnitLimit: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSimulationJobCommandInput - {@link CreateSimulationJobCommandInput}
 * @returns {@link CreateSimulationJobCommandOutput}
 * @see {@link CreateSimulationJobCommandInput} for command's `input` shape.
 * @see {@link CreateSimulationJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The request uses the same client token as a previous, but non-identical request. Do not
 *          reuse a client token with different requests, unless the requests are identical. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *          stream requests exceeds the maximum number allowed. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed due to a temporary failure of the server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 */
export class CreateSimulationJobCommand extends $Command<
  CreateSimulationJobCommandInput,
  CreateSimulationJobCommandOutput,
  RoboMakerClientResolvedConfig
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
  constructor(readonly input: CreateSimulationJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSimulationJobCommandInput, CreateSimulationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSimulationJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "CreateSimulationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "robomaker",
        operation: "CreateSimulationJob",
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
  private serialize(input: CreateSimulationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSimulationJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSimulationJobCommandOutput> {
    return de_CreateSimulationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
