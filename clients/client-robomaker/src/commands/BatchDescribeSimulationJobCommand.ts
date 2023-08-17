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

import { BatchDescribeSimulationJobRequest, BatchDescribeSimulationJobResponse } from "../models/models_0";
import { de_BatchDescribeSimulationJobCommand, se_BatchDescribeSimulationJobCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchDescribeSimulationJobCommand}.
 */
export interface BatchDescribeSimulationJobCommandInput extends BatchDescribeSimulationJobRequest {}
/**
 * @public
 *
 * The output of {@link BatchDescribeSimulationJobCommand}.
 */
export interface BatchDescribeSimulationJobCommandOutput extends BatchDescribeSimulationJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more simulation jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, BatchDescribeSimulationJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, BatchDescribeSimulationJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // BatchDescribeSimulationJobRequest
 *   jobs: [ // Arns // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDescribeSimulationJobCommand(input);
 * const response = await client.send(command);
 * // { // BatchDescribeSimulationJobResponse
 * //   jobs: [ // SimulationJobs
 * //     { // SimulationJob
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       lastStartedAt: new Date("TIMESTAMP"),
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       failureBehavior: "STRING_VALUE",
 * //       failureCode: "STRING_VALUE",
 * //       failureReason: "STRING_VALUE",
 * //       clientRequestToken: "STRING_VALUE",
 * //       outputLocation: { // OutputLocation
 * //         s3Bucket: "STRING_VALUE",
 * //         s3Prefix: "STRING_VALUE",
 * //       },
 * //       loggingConfig: { // LoggingConfig
 * //         recordAllRosTopics: true || false,
 * //       },
 * //       maxJobDurationInSeconds: Number("long"),
 * //       simulationTimeMillis: Number("long"),
 * //       iamRole: "STRING_VALUE",
 * //       robotApplications: [ // RobotApplicationConfigs
 * //         { // RobotApplicationConfig
 * //           application: "STRING_VALUE", // required
 * //           applicationVersion: "STRING_VALUE",
 * //           launchConfig: { // LaunchConfig
 * //             packageName: "STRING_VALUE",
 * //             launchFile: "STRING_VALUE",
 * //             environmentVariables: { // EnvironmentVariableMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             portForwardingConfig: { // PortForwardingConfig
 * //               portMappings: [ // PortMappingList
 * //                 { // PortMapping
 * //                   jobPort: Number("int"), // required
 * //                   applicationPort: Number("int"), // required
 * //                   enableOnPublicIp: true || false,
 * //                 },
 * //               ],
 * //             },
 * //             streamUI: true || false,
 * //             command: [ // CommandList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           uploadConfigurations: [ // UploadConfigurations
 * //             { // UploadConfiguration
 * //               name: "STRING_VALUE", // required
 * //               path: "STRING_VALUE", // required
 * //               uploadBehavior: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           useDefaultUploadConfigurations: true || false,
 * //           tools: [ // Tools
 * //             { // Tool
 * //               streamUI: true || false,
 * //               name: "STRING_VALUE", // required
 * //               command: "STRING_VALUE", // required
 * //               streamOutputToCloudWatch: true || false,
 * //               exitBehavior: "STRING_VALUE",
 * //             },
 * //           ],
 * //           useDefaultTools: true || false,
 * //         },
 * //       ],
 * //       simulationApplications: [ // SimulationApplicationConfigs
 * //         { // SimulationApplicationConfig
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
 * //               uploadBehavior: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           worldConfigs: [ // WorldConfigs
 * //             { // WorldConfig
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
 * //               exitBehavior: "STRING_VALUE",
 * //             },
 * //           ],
 * //           useDefaultTools: true || false,
 * //         },
 * //       ],
 * //       dataSources: [ // DataSources
 * //         { // DataSource
 * //           name: "STRING_VALUE",
 * //           s3Bucket: "STRING_VALUE",
 * //           s3Keys: [ // S3KeyOutputs
 * //             { // S3KeyOutput
 * //               s3Key: "STRING_VALUE",
 * //               etag: "STRING_VALUE",
 * //             },
 * //           ],
 * //           type: "STRING_VALUE",
 * //           destination: "STRING_VALUE",
 * //         },
 * //       ],
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       vpcConfig: { // VPCConfigResponse
 * //         subnets: [ // Subnets
 * //           "STRING_VALUE",
 * //         ],
 * //         securityGroups: [ // SecurityGroups
 * //           "STRING_VALUE",
 * //         ],
 * //         vpcId: "STRING_VALUE",
 * //         assignPublicIp: true || false,
 * //       },
 * //       networkInterface: { // NetworkInterface
 * //         networkInterfaceId: "STRING_VALUE",
 * //         privateIpAddress: "STRING_VALUE",
 * //         publicIpAddress: "STRING_VALUE",
 * //       },
 * //       compute: { // ComputeResponse
 * //         simulationUnitLimit: Number("int"),
 * //         computeType: "STRING_VALUE",
 * //         gpuUnitLimit: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   unprocessedJobs: [ // Arns
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDescribeSimulationJobCommandInput - {@link BatchDescribeSimulationJobCommandInput}
 * @returns {@link BatchDescribeSimulationJobCommandOutput}
 * @see {@link BatchDescribeSimulationJobCommandInput} for command's `input` shape.
 * @see {@link BatchDescribeSimulationJobCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 */
export class BatchDescribeSimulationJobCommand extends $Command<
  BatchDescribeSimulationJobCommandInput,
  BatchDescribeSimulationJobCommandOutput,
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
  constructor(readonly input: BatchDescribeSimulationJobCommandInput) {
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
  ): Handler<BatchDescribeSimulationJobCommandInput, BatchDescribeSimulationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDescribeSimulationJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "BatchDescribeSimulationJobCommand";
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
  private serialize(input: BatchDescribeSimulationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchDescribeSimulationJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDescribeSimulationJobCommandOutput> {
    return de_BatchDescribeSimulationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
