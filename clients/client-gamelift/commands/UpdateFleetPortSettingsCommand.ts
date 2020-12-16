import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateFleetPortSettingsInput, UpdateFleetPortSettingsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateFleetPortSettingsCommand,
  serializeAws_json1_1UpdateFleetPortSettingsCommand,
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

export type UpdateFleetPortSettingsCommandInput = UpdateFleetPortSettingsInput;
export type UpdateFleetPortSettingsCommandOutput = UpdateFleetPortSettingsOutput & __MetadataBearer;

/**
 * <p>Updates port settings for a fleet. To update settings, specify the fleet ID to be
 *             updated and list the permissions you want to update. List the permissions you want to
 *             add in <code>InboundPermissionAuthorizations</code>, and permissions you want to remove
 *             in <code>InboundPermissionRevocations</code>. Permissions to be removed must match
 *             existing fleet permissions. If successful, the fleet ID for the updated fleet is
 *             returned.</p>
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
export class UpdateFleetPortSettingsCommand extends $Command<
  UpdateFleetPortSettingsCommandInput,
  UpdateFleetPortSettingsCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateFleetPortSettingsCommandInput) {
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
  ): Handler<UpdateFleetPortSettingsCommandInput, UpdateFleetPortSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "UpdateFleetPortSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFleetPortSettingsInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFleetPortSettingsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFleetPortSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateFleetPortSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFleetPortSettingsCommandOutput> {
    return deserializeAws_json1_1UpdateFleetPortSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
