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

import { ListDeploymentJobsRequest, ListDeploymentJobsResponse } from "../models/models_0";
import { de_ListDeploymentJobsCommand, se_ListDeploymentJobsCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDeploymentJobsCommand}.
 */
export interface ListDeploymentJobsCommandInput extends ListDeploymentJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListDeploymentJobsCommand}.
 */
export interface ListDeploymentJobsCommandOutput extends ListDeploymentJobsResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve specific deployment jobs.</p>
 *          <important>
 *             <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListDeploymentJobsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListDeploymentJobsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // ListDeploymentJobsRequest
 *   filters: [ // Filters
 *     { // Filter
 *       name: "STRING_VALUE",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDeploymentJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListDeploymentJobsResponse
 * //   deploymentJobs: [ // DeploymentJobs
 * //     { // DeploymentJob
 * //       arn: "STRING_VALUE",
 * //       fleet: "STRING_VALUE",
 * //       status: "Pending" || "Preparing" || "InProgress" || "Failed" || "Succeeded" || "Canceled",
 * //       deploymentApplicationConfigs: [ // DeploymentApplicationConfigs
 * //         { // DeploymentApplicationConfig
 * //           application: "STRING_VALUE", // required
 * //           applicationVersion: "STRING_VALUE", // required
 * //           launchConfig: { // DeploymentLaunchConfig
 * //             packageName: "STRING_VALUE", // required
 * //             preLaunchFile: "STRING_VALUE",
 * //             launchFile: "STRING_VALUE", // required
 * //             postLaunchFile: "STRING_VALUE",
 * //             environmentVariables: { // EnvironmentVariableMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       deploymentConfig: { // DeploymentConfig
 * //         concurrentDeploymentPercentage: Number("int"),
 * //         failureThresholdPercentage: Number("int"),
 * //         robotDeploymentTimeoutInSeconds: Number("long"),
 * //         downloadConditionFile: { // S3Object
 * //           bucket: "STRING_VALUE", // required
 * //           key: "STRING_VALUE", // required
 * //           etag: "STRING_VALUE",
 * //         },
 * //       },
 * //       failureReason: "STRING_VALUE",
 * //       failureCode: "ResourceNotFound" || "EnvironmentSetupError" || "EtagMismatch" || "FailureThresholdBreached" || "RobotDeploymentAborted" || "RobotDeploymentNoResponse" || "RobotAgentConnectionTimeout" || "GreengrassDeploymentFailed" || "InvalidGreengrassGroup" || "MissingRobotArchitecture" || "MissingRobotApplicationArchitecture" || "MissingRobotDeploymentResource" || "GreengrassGroupVersionDoesNotExist" || "LambdaDeleted" || "ExtractingBundleFailure" || "PreLaunchFileFailure" || "PostLaunchFileFailure" || "BadPermissionError" || "DownloadConditionFailed" || "BadLambdaAssociated" || "InternalServerError" || "RobotApplicationDoesNotExist" || "DeploymentFleetDoesNotExist" || "FleetDeploymentTimeout",
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeploymentJobsCommandInput - {@link ListDeploymentJobsCommandInput}
 * @returns {@link ListDeploymentJobsCommandOutput}
 * @see {@link ListDeploymentJobsCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentJobsCommandOutput} for command's `response` shape.
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
export class ListDeploymentJobsCommand extends $Command<
  ListDeploymentJobsCommandInput,
  ListDeploymentJobsCommandOutput,
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
  constructor(readonly input: ListDeploymentJobsCommandInput) {
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
  ): Handler<ListDeploymentJobsCommandInput, ListDeploymentJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDeploymentJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "ListDeploymentJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "robomaker",
        operation: "ListDeploymentJobs",
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
  private serialize(input: ListDeploymentJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDeploymentJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDeploymentJobsCommandOutput> {
    return de_ListDeploymentJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
