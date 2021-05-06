import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateRuntimeConfigurationInput, UpdateRuntimeConfigurationOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateRuntimeConfigurationCommand,
  serializeAws_json1_1UpdateRuntimeConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface UpdateRuntimeConfigurationCommandInput extends UpdateRuntimeConfigurationInput {}
export interface UpdateRuntimeConfigurationCommandOutput extends UpdateRuntimeConfigurationOutput, __MetadataBearer {}

/**
 * <p>Updates the current runtime configuration for the specified fleet, which tells GameLift
 *             how to launch server processes on all instances in the fleet. You can update a fleet's
 *             runtime configuration at any time after the fleet is created; it does not need to be in
 *                 <code>ACTIVE</code> status.</p>
 *         <p>To update runtime configuration, specify the fleet ID and provide a
 *                 <code>RuntimeConfiguration</code> with an updated set of server process
 *             configurations.</p>
 *         <p>If successful, the fleet's runtime configuration settings are updated. Each instance
 *             in the fleet regularly checks for and retrieves updated runtime configurations.
 *             Instances immediately begin complying with the new configuration by launching new server
 *             processes or not replacing existing processes when they shut down. Updating a fleet's
 *             runtime configuration never affects existing server processes.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift fleets</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateFleetLocations</a> |
 *                     <a>UpdateFleetAttributes</a> |
 *                     <a>UpdateFleetCapacity</a> |
 *                     <a>UpdateFleetPortSettings</a> |
 *                     <a>UpdateRuntimeConfiguration</a> |
 *                     <a>StopFleetActions</a> |
 *                     <a>StartFleetActions</a> |
 *                     <a>PutScalingPolicy</a> |
 *                     <a>DeleteFleet</a> |
 *                     <a>DeleteFleetLocations</a> |
 *                     <a>DeleteScalingPolicy</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, UpdateRuntimeConfigurationCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateRuntimeConfigurationCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new UpdateRuntimeConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRuntimeConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateRuntimeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateRuntimeConfigurationCommand extends $Command<
  UpdateRuntimeConfigurationCommandInput,
  UpdateRuntimeConfigurationCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateRuntimeConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRuntimeConfigurationCommandInput, UpdateRuntimeConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "UpdateRuntimeConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRuntimeConfigurationInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateRuntimeConfigurationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRuntimeConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateRuntimeConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateRuntimeConfigurationCommandOutput> {
    return deserializeAws_json1_1UpdateRuntimeConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
