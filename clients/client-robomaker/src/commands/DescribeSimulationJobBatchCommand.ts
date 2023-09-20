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

import { DescribeSimulationJobBatchRequest, DescribeSimulationJobBatchResponse } from "../models/models_0";
import { de_DescribeSimulationJobBatchCommand, se_DescribeSimulationJobBatchCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSimulationJobBatchCommand}.
 */
export interface DescribeSimulationJobBatchCommandInput extends DescribeSimulationJobBatchRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSimulationJobBatchCommand}.
 */
export interface DescribeSimulationJobBatchCommandOutput extends DescribeSimulationJobBatchResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a simulation job batch.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeSimulationJobBatchCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeSimulationJobBatchCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // DescribeSimulationJobBatchRequest
 *   batch: "STRING_VALUE", // required
 * };
 * const command = new DescribeSimulationJobBatchCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSimulationJobBatchResponse
 * //   arn: "STRING_VALUE",
 * //   status: "Pending" || "InProgress" || "Failed" || "Completed" || "Canceled" || "Canceling" || "Completing" || "TimingOut" || "TimedOut",
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * //   createdAt: new Date("TIMESTAMP"),
 * //   clientRequestToken: "STRING_VALUE",
 * //   batchPolicy: { // BatchPolicy
 * //     timeoutInSeconds: Number("long"),
 * //     maxConcurrency: Number("int"),
 * //   },
 * //   failureCode: "InternalServiceError",
 * //   failureReason: "STRING_VALUE",
 * //   failedRequests: [ // FailedCreateSimulationJobRequests
 * //     { // FailedCreateSimulationJobRequest
 * //       request: { // SimulationJobRequest
 * //         outputLocation: { // OutputLocation
 * //           s3Bucket: "STRING_VALUE",
 * //           s3Prefix: "STRING_VALUE",
 * //         },
 * //         loggingConfig: { // LoggingConfig
 * //           recordAllRosTopics: true || false,
 * //         },
 * //         maxJobDurationInSeconds: Number("long"), // required
 * //         iamRole: "STRING_VALUE",
 * //         failureBehavior: "Fail" || "Continue",
 * //         useDefaultApplications: true || false,
 * //         robotApplications: [ // RobotApplicationConfigs
 * //           { // RobotApplicationConfig
 * //             application: "STRING_VALUE", // required
 * //             applicationVersion: "STRING_VALUE",
 * //             launchConfig: { // LaunchConfig
 * //               packageName: "STRING_VALUE",
 * //               launchFile: "STRING_VALUE",
 * //               environmentVariables: { // EnvironmentVariableMap
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //               portForwardingConfig: { // PortForwardingConfig
 * //                 portMappings: [ // PortMappingList
 * //                   { // PortMapping
 * //                     jobPort: Number("int"), // required
 * //                     applicationPort: Number("int"), // required
 * //                     enableOnPublicIp: true || false,
 * //                   },
 * //                 ],
 * //               },
 * //               streamUI: true || false,
 * //               command: [ // CommandList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             uploadConfigurations: [ // UploadConfigurations
 * //               { // UploadConfiguration
 * //                 name: "STRING_VALUE", // required
 * //                 path: "STRING_VALUE", // required
 * //                 uploadBehavior: "UPLOAD_ON_TERMINATE" || "UPLOAD_ROLLING_AUTO_REMOVE", // required
 * //               },
 * //             ],
 * //             useDefaultUploadConfigurations: true || false,
 * //             tools: [ // Tools
 * //               { // Tool
 * //                 streamUI: true || false,
 * //                 name: "STRING_VALUE", // required
 * //                 command: "STRING_VALUE", // required
 * //                 streamOutputToCloudWatch: true || false,
 * //                 exitBehavior: "FAIL" || "RESTART",
 * //               },
 * //             ],
 * //             useDefaultTools: true || false,
 * //           },
 * //         ],
 * //         simulationApplications: [ // SimulationApplicationConfigs
 * //           { // SimulationApplicationConfig
 * //             application: "STRING_VALUE", // required
 * //             applicationVersion: "STRING_VALUE",
 * //             launchConfig: {
 * //               packageName: "STRING_VALUE",
 * //               launchFile: "STRING_VALUE",
 * //               environmentVariables: {
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //               portForwardingConfig: {
 * //                 portMappings: [
 * //                   {
 * //                     jobPort: Number("int"), // required
 * //                     applicationPort: Number("int"), // required
 * //                     enableOnPublicIp: true || false,
 * //                   },
 * //                 ],
 * //               },
 * //               streamUI: true || false,
 * //               command: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             uploadConfigurations: [
 * //               {
 * //                 name: "STRING_VALUE", // required
 * //                 path: "STRING_VALUE", // required
 * //                 uploadBehavior: "UPLOAD_ON_TERMINATE" || "UPLOAD_ROLLING_AUTO_REMOVE", // required
 * //               },
 * //             ],
 * //             worldConfigs: [ // WorldConfigs
 * //               { // WorldConfig
 * //                 world: "STRING_VALUE",
 * //               },
 * //             ],
 * //             useDefaultUploadConfigurations: true || false,
 * //             tools: [
 * //               {
 * //                 streamUI: true || false,
 * //                 name: "STRING_VALUE", // required
 * //                 command: "STRING_VALUE", // required
 * //                 streamOutputToCloudWatch: true || false,
 * //                 exitBehavior: "FAIL" || "RESTART",
 * //               },
 * //             ],
 * //             useDefaultTools: true || false,
 * //           },
 * //         ],
 * //         dataSources: [ // DataSourceConfigs
 * //           { // DataSourceConfig
 * //             name: "STRING_VALUE", // required
 * //             s3Bucket: "STRING_VALUE", // required
 * //             s3Keys: [ // S3KeysOrPrefixes // required
 * //               "STRING_VALUE",
 * //             ],
 * //             type: "Prefix" || "Archive" || "File",
 * //             destination: "STRING_VALUE",
 * //           },
 * //         ],
 * //         vpcConfig: { // VPCConfig
 * //           subnets: [ // Subnets // required
 * //             "STRING_VALUE",
 * //           ],
 * //           securityGroups: [ // SecurityGroups
 * //             "STRING_VALUE",
 * //           ],
 * //           assignPublicIp: true || false,
 * //         },
 * //         compute: { // Compute
 * //           simulationUnitLimit: Number("int"),
 * //           computeType: "CPU" || "GPU_AND_CPU",
 * //           gpuUnitLimit: Number("int"),
 * //         },
 * //         tags: { // TagMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       failureReason: "STRING_VALUE",
 * //       failureCode: "InternalServiceError" || "RobotApplicationCrash" || "SimulationApplicationCrash" || "RobotApplicationHealthCheckFailure" || "SimulationApplicationHealthCheckFailure" || "BadPermissionsRobotApplication" || "BadPermissionsSimulationApplication" || "BadPermissionsS3Object" || "BadPermissionsS3Output" || "BadPermissionsCloudwatchLogs" || "SubnetIpLimitExceeded" || "ENILimitExceeded" || "BadPermissionsUserCredentials" || "InvalidBundleRobotApplication" || "InvalidBundleSimulationApplication" || "InvalidS3Resource" || "ThrottlingError" || "LimitExceeded" || "MismatchedEtag" || "RobotApplicationVersionMismatchedEtag" || "SimulationApplicationVersionMismatchedEtag" || "ResourceNotFound" || "RequestThrottled" || "BatchTimedOut" || "BatchCanceled" || "InvalidInput" || "WrongRegionS3Bucket" || "WrongRegionS3Output" || "WrongRegionRobotApplication" || "WrongRegionSimulationApplication" || "UploadContentMismatchError",
 * //       failedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   pendingRequests: [ // CreateSimulationJobRequests
 * //     {
 * //       outputLocation: {
 * //         s3Bucket: "STRING_VALUE",
 * //         s3Prefix: "STRING_VALUE",
 * //       },
 * //       loggingConfig: {
 * //         recordAllRosTopics: true || false,
 * //       },
 * //       maxJobDurationInSeconds: Number("long"), // required
 * //       iamRole: "STRING_VALUE",
 * //       failureBehavior: "Fail" || "Continue",
 * //       useDefaultApplications: true || false,
 * //       robotApplications: [
 * //         {
 * //           application: "STRING_VALUE", // required
 * //           applicationVersion: "STRING_VALUE",
 * //           launchConfig: {
 * //             packageName: "STRING_VALUE",
 * //             launchFile: "STRING_VALUE",
 * //             environmentVariables: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             portForwardingConfig: {
 * //               portMappings: [
 * //                 {
 * //                   jobPort: Number("int"), // required
 * //                   applicationPort: Number("int"), // required
 * //                   enableOnPublicIp: true || false,
 * //                 },
 * //               ],
 * //             },
 * //             streamUI: true || false,
 * //             command: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           uploadConfigurations: [
 * //             {
 * //               name: "STRING_VALUE", // required
 * //               path: "STRING_VALUE", // required
 * //               uploadBehavior: "UPLOAD_ON_TERMINATE" || "UPLOAD_ROLLING_AUTO_REMOVE", // required
 * //             },
 * //           ],
 * //           useDefaultUploadConfigurations: true || false,
 * //           tools: [
 * //             {
 * //               streamUI: true || false,
 * //               name: "STRING_VALUE", // required
 * //               command: "STRING_VALUE", // required
 * //               streamOutputToCloudWatch: true || false,
 * //               exitBehavior: "FAIL" || "RESTART",
 * //             },
 * //           ],
 * //           useDefaultTools: true || false,
 * //         },
 * //       ],
 * //       simulationApplications: [
 * //         {
 * //           application: "STRING_VALUE", // required
 * //           applicationVersion: "STRING_VALUE",
 * //           launchConfig: {
 * //             packageName: "STRING_VALUE",
 * //             launchFile: "STRING_VALUE",
 * //             environmentVariables: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             portForwardingConfig: {
 * //               portMappings: [
 * //                 {
 * //                   jobPort: Number("int"), // required
 * //                   applicationPort: Number("int"), // required
 * //                   enableOnPublicIp: true || false,
 * //                 },
 * //               ],
 * //             },
 * //             streamUI: true || false,
 * //             command: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           uploadConfigurations: [
 * //             {
 * //               name: "STRING_VALUE", // required
 * //               path: "STRING_VALUE", // required
 * //               uploadBehavior: "UPLOAD_ON_TERMINATE" || "UPLOAD_ROLLING_AUTO_REMOVE", // required
 * //             },
 * //           ],
 * //           worldConfigs: [
 * //             {
 * //               world: "STRING_VALUE",
 * //             },
 * //           ],
 * //           useDefaultUploadConfigurations: true || false,
 * //           tools: [
 * //             {
 * //               streamUI: true || false,
 * //               name: "STRING_VALUE", // required
 * //               command: "STRING_VALUE", // required
 * //               streamOutputToCloudWatch: true || false,
 * //               exitBehavior: "FAIL" || "RESTART",
 * //             },
 * //           ],
 * //           useDefaultTools: true || false,
 * //         },
 * //       ],
 * //       dataSources: [
 * //         {
 * //           name: "STRING_VALUE", // required
 * //           s3Bucket: "STRING_VALUE", // required
 * //           s3Keys: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           type: "Prefix" || "Archive" || "File",
 * //           destination: "STRING_VALUE",
 * //         },
 * //       ],
 * //       vpcConfig: {
 * //         subnets: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         securityGroups: [
 * //           "STRING_VALUE",
 * //         ],
 * //         assignPublicIp: true || false,
 * //       },
 * //       compute: {
 * //         simulationUnitLimit: Number("int"),
 * //         computeType: "CPU" || "GPU_AND_CPU",
 * //         gpuUnitLimit: Number("int"),
 * //       },
 * //       tags: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   createdRequests: [ // SimulationJobSummaries
 * //     { // SimulationJobSummary
 * //       arn: "STRING_VALUE",
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       name: "STRING_VALUE",
 * //       status: "Pending" || "Preparing" || "Running" || "Restarting" || "Completed" || "Failed" || "RunningFailed" || "Terminating" || "Terminated" || "Canceled",
 * //       simulationApplicationNames: [ // SimulationApplicationNames
 * //         "STRING_VALUE",
 * //       ],
 * //       robotApplicationNames: [ // RobotApplicationNames
 * //         "STRING_VALUE",
 * //       ],
 * //       dataSourceNames: [ // DataSourceNames
 * //         "STRING_VALUE",
 * //       ],
 * //       computeType: "CPU" || "GPU_AND_CPU",
 * //     },
 * //   ],
 * //   tags: "<TagMap>",
 * // };
 *
 * ```
 *
 * @param DescribeSimulationJobBatchCommandInput - {@link DescribeSimulationJobBatchCommandInput}
 * @returns {@link DescribeSimulationJobBatchCommandOutput}
 * @see {@link DescribeSimulationJobBatchCommandInput} for command's `input` shape.
 * @see {@link DescribeSimulationJobBatchCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 */
export class DescribeSimulationJobBatchCommand extends $Command<
  DescribeSimulationJobBatchCommandInput,
  DescribeSimulationJobBatchCommandOutput,
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
  constructor(readonly input: DescribeSimulationJobBatchCommandInput) {
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
  ): Handler<DescribeSimulationJobBatchCommandInput, DescribeSimulationJobBatchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSimulationJobBatchCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "DescribeSimulationJobBatchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "robomaker",
        operation: "DescribeSimulationJobBatch",
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
  private serialize(input: DescribeSimulationJobBatchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSimulationJobBatchCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSimulationJobBatchCommandOutput> {
    return de_DescribeSimulationJobBatchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
