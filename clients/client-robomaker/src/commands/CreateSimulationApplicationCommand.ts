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

import { CreateSimulationApplicationRequest, CreateSimulationApplicationResponse } from "../models/models_0";
import {
  de_CreateSimulationApplicationCommand,
  se_CreateSimulationApplicationCommand,
} from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSimulationApplicationCommand}.
 */
export interface CreateSimulationApplicationCommandInput extends CreateSimulationApplicationRequest {}
/**
 * @public
 *
 * The output of {@link CreateSimulationApplicationCommand}.
 */
export interface CreateSimulationApplicationCommandOutput
  extends CreateSimulationApplicationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a simulation application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateSimulationApplicationCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateSimulationApplicationCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // CreateSimulationApplicationRequest
 *   name: "STRING_VALUE", // required
 *   sources: [ // SourceConfigs
 *     { // SourceConfig
 *       s3Bucket: "STRING_VALUE",
 *       s3Key: "STRING_VALUE",
 *       architecture: "X86_64" || "ARM64" || "ARMHF",
 *     },
 *   ],
 *   simulationSoftwareSuite: { // SimulationSoftwareSuite
 *     name: "Gazebo" || "RosbagPlay" || "SimulationRuntime",
 *     version: "STRING_VALUE",
 *   },
 *   robotSoftwareSuite: { // RobotSoftwareSuite
 *     name: "ROS" || "ROS2" || "General",
 *     version: "Kinetic" || "Melodic" || "Dashing" || "Foxy",
 *   },
 *   renderingEngine: { // RenderingEngine
 *     name: "OGRE",
 *     version: "STRING_VALUE",
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   environment: { // Environment
 *     uri: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSimulationApplicationCommand(input);
 * const response = await client.send(command);
 * // { // CreateSimulationApplicationResponse
 * //   arn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   version: "STRING_VALUE",
 * //   sources: [ // Sources
 * //     { // Source
 * //       s3Bucket: "STRING_VALUE",
 * //       s3Key: "STRING_VALUE",
 * //       etag: "STRING_VALUE",
 * //       architecture: "X86_64" || "ARM64" || "ARMHF",
 * //     },
 * //   ],
 * //   simulationSoftwareSuite: { // SimulationSoftwareSuite
 * //     name: "Gazebo" || "RosbagPlay" || "SimulationRuntime",
 * //     version: "STRING_VALUE",
 * //   },
 * //   robotSoftwareSuite: { // RobotSoftwareSuite
 * //     name: "ROS" || "ROS2" || "General",
 * //     version: "Kinetic" || "Melodic" || "Dashing" || "Foxy",
 * //   },
 * //   renderingEngine: { // RenderingEngine
 * //     name: "OGRE",
 * //     version: "STRING_VALUE",
 * //   },
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * //   revisionId: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   environment: { // Environment
 * //     uri: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSimulationApplicationCommandInput - {@link CreateSimulationApplicationCommandInput}
 * @returns {@link CreateSimulationApplicationCommandOutput}
 * @see {@link CreateSimulationApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateSimulationApplicationCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 */
export class CreateSimulationApplicationCommand extends $Command<
  CreateSimulationApplicationCommandInput,
  CreateSimulationApplicationCommandOutput,
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
  constructor(readonly input: CreateSimulationApplicationCommandInput) {
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
  ): Handler<CreateSimulationApplicationCommandInput, CreateSimulationApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSimulationApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "CreateSimulationApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "robomaker",
        operation: "CreateSimulationApplication",
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
  private serialize(input: CreateSimulationApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSimulationApplicationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateSimulationApplicationCommandOutput> {
    return de_CreateSimulationApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
