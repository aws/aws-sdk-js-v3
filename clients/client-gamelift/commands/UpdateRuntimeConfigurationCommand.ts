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

export type UpdateRuntimeConfigurationCommandInput = UpdateRuntimeConfigurationInput;
export type UpdateRuntimeConfigurationCommandOutput = UpdateRuntimeConfigurationOutput & __MetadataBearer;

/**
 * <p>Updates the current runtime configuration for the specified fleet, which tells Amazon GameLift
 *             how to launch server processes on instances in the fleet. You can update a fleet's
 *             runtime configuration at any time after the fleet is created; it does not need to be in
 *             an <code>ACTIVE</code> status.</p>
 *         <p>To update runtime configuration, specify the fleet ID and provide a
 *                 <code>RuntimeConfiguration</code> object with an updated set of server process
 *             configurations.</p>
 *         <p>Each instance in a Amazon GameLift fleet checks regularly for an updated runtime configuration
 *             and changes how it launches server processes to comply with the latest version. Existing
 *             server processes are not affected by the update; runtime configuration changes are
 *             applied gradually as existing processes shut down and new processes are launched during
 *             Amazon GameLift's normal process recycling activity.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift Fleets</a>
 *          </p>
 *         <p>
 *             <b>Related operations</b>
 *          </p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateFleet</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListFleets</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteFleet</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeFleetAttributes</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Update fleets:</p>
 *                         <ul>
 *                   <li>
 *                      <p>
 *                         <a>UpdateFleetAttributes</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>UpdateFleetCapacity</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>UpdateFleetPortSettings</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>UpdateRuntimeConfiguration</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartFleetActions</a> or <a>StopFleetActions</a>
 *                </p>
 *             </li>
 *          </ul>
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
