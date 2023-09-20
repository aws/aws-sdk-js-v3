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

import { DescribeDeploymentJobRequest, DescribeDeploymentJobResponse } from "../models/models_0";
import { de_DescribeDeploymentJobCommand, se_DescribeDeploymentJobCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDeploymentJobCommand}.
 */
export interface DescribeDeploymentJobCommandInput extends DescribeDeploymentJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDeploymentJobCommand}.
 */
export interface DescribeDeploymentJobCommandOutput extends DescribeDeploymentJobResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Describes a deployment job.</p>
 *          <important>
 *             <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeDeploymentJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeDeploymentJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // DescribeDeploymentJobRequest
 *   job: "STRING_VALUE", // required
 * };
 * const command = new DescribeDeploymentJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDeploymentJobResponse
 * //   arn: "STRING_VALUE",
 * //   fleet: "STRING_VALUE",
 * //   status: "Pending" || "Preparing" || "InProgress" || "Failed" || "Succeeded" || "Canceled",
 * //   deploymentConfig: { // DeploymentConfig
 * //     concurrentDeploymentPercentage: Number("int"),
 * //     failureThresholdPercentage: Number("int"),
 * //     robotDeploymentTimeoutInSeconds: Number("long"),
 * //     downloadConditionFile: { // S3Object
 * //       bucket: "STRING_VALUE", // required
 * //       key: "STRING_VALUE", // required
 * //       etag: "STRING_VALUE",
 * //     },
 * //   },
 * //   deploymentApplicationConfigs: [ // DeploymentApplicationConfigs
 * //     { // DeploymentApplicationConfig
 * //       application: "STRING_VALUE", // required
 * //       applicationVersion: "STRING_VALUE", // required
 * //       launchConfig: { // DeploymentLaunchConfig
 * //         packageName: "STRING_VALUE", // required
 * //         preLaunchFile: "STRING_VALUE",
 * //         launchFile: "STRING_VALUE", // required
 * //         postLaunchFile: "STRING_VALUE",
 * //         environmentVariables: { // EnvironmentVariableMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   failureReason: "STRING_VALUE",
 * //   failureCode: "ResourceNotFound" || "EnvironmentSetupError" || "EtagMismatch" || "FailureThresholdBreached" || "RobotDeploymentAborted" || "RobotDeploymentNoResponse" || "RobotAgentConnectionTimeout" || "GreengrassDeploymentFailed" || "InvalidGreengrassGroup" || "MissingRobotArchitecture" || "MissingRobotApplicationArchitecture" || "MissingRobotDeploymentResource" || "GreengrassGroupVersionDoesNotExist" || "LambdaDeleted" || "ExtractingBundleFailure" || "PreLaunchFileFailure" || "PostLaunchFileFailure" || "BadPermissionError" || "DownloadConditionFailed" || "BadLambdaAssociated" || "InternalServerError" || "RobotApplicationDoesNotExist" || "DeploymentFleetDoesNotExist" || "FleetDeploymentTimeout",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   robotDeploymentSummary: [ // RobotDeploymentSummary
 * //     { // RobotDeployment
 * //       arn: "STRING_VALUE",
 * //       deploymentStartTime: new Date("TIMESTAMP"),
 * //       deploymentFinishTime: new Date("TIMESTAMP"),
 * //       status: "Available" || "Registered" || "PendingNewDeployment" || "Deploying" || "Failed" || "InSync" || "NoResponse",
 * //       progressDetail: { // ProgressDetail
 * //         currentProgress: "Validating" || "DownloadingExtracting" || "ExecutingDownloadCondition" || "ExecutingPreLaunch" || "Launching" || "ExecutingPostLaunch" || "Finished",
 * //         percentDone: Number("float"),
 * //         estimatedTimeRemainingSeconds: Number("int"),
 * //         targetResource: "STRING_VALUE",
 * //       },
 * //       failureReason: "STRING_VALUE",
 * //       failureCode: "ResourceNotFound" || "EnvironmentSetupError" || "EtagMismatch" || "FailureThresholdBreached" || "RobotDeploymentAborted" || "RobotDeploymentNoResponse" || "RobotAgentConnectionTimeout" || "GreengrassDeploymentFailed" || "InvalidGreengrassGroup" || "MissingRobotArchitecture" || "MissingRobotApplicationArchitecture" || "MissingRobotDeploymentResource" || "GreengrassGroupVersionDoesNotExist" || "LambdaDeleted" || "ExtractingBundleFailure" || "PreLaunchFileFailure" || "PostLaunchFileFailure" || "BadPermissionError" || "DownloadConditionFailed" || "BadLambdaAssociated" || "InternalServerError" || "RobotApplicationDoesNotExist" || "DeploymentFleetDoesNotExist" || "FleetDeploymentTimeout",
 * //     },
 * //   ],
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDeploymentJobCommandInput - {@link DescribeDeploymentJobCommandInput}
 * @returns {@link DescribeDeploymentJobCommandOutput}
 * @see {@link DescribeDeploymentJobCommandInput} for command's `input` shape.
 * @see {@link DescribeDeploymentJobCommandOutput} for command's `response` shape.
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
export class DescribeDeploymentJobCommand extends $Command<
  DescribeDeploymentJobCommandInput,
  DescribeDeploymentJobCommandOutput,
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
  constructor(readonly input: DescribeDeploymentJobCommandInput) {
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
  ): Handler<DescribeDeploymentJobCommandInput, DescribeDeploymentJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDeploymentJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "DescribeDeploymentJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "robomaker",
        operation: "DescribeDeploymentJob",
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
  private serialize(input: DescribeDeploymentJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDeploymentJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDeploymentJobCommandOutput> {
    return de_DescribeDeploymentJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
