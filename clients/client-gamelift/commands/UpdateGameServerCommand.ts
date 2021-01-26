import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateGameServerInput, UpdateGameServerOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateGameServerCommand,
  serializeAws_json1_1UpdateGameServerCommand,
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

export type UpdateGameServerCommandInput = UpdateGameServerInput;
export type UpdateGameServerCommandOutput = UpdateGameServerOutput & __MetadataBearer;

/**
 * <p>
 *             <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Updates information about a registered game server to help GameLift FleetIQ to track game server
 *             availability. This operation is called by a game server process that is running on an
 *             instance in a game server group. </p>
 *         <p>Use this operation to update the following types of game server information. You can
 *             make all three types of updates in the same request:</p>
 *         <ul>
 *             <li>
 *                <p>To update the game server's utilization status, identify the game server and game server group
 *                     and specify the current utilization status. Use this status to identify when
 *                     game servers are currently hosting games and when they are available to be
 *                     claimed.</p>
 *             </li>
 *             <li>
 *                <p>To report health status, identify the game server and game server group and set health check
 *                     to <code>HEALTHY</code>. If a game server does not report health status for a
 *                     certain length of time, the game server is no longer considered healthy. As a
 *                     result, it will be eventually deregistered from the game server group to avoid
 *                     affecting utilization metrics. The best practice is to report health every 60
 *                     seconds.</p>
 *             </li>
 *             <li>
 *                <p>To change game server metadata, provide updated game server data.</p>
 *             </li>
 *          </ul>
 *         <p>Once a game server is successfully updated, the relevant statuses and timestamps are updated.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">GameLift FleetIQ Guide</a>
 *         </p>
 *         <p>
 *             <b>Related operations</b>
 *          </p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>RegisterGameServer</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListGameServers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ClaimGameServer</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeGameServer</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateGameServer</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeregisterGameServer</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class UpdateGameServerCommand extends $Command<
  UpdateGameServerCommandInput,
  UpdateGameServerCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateGameServerCommandInput) {
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
  ): Handler<UpdateGameServerCommandInput, UpdateGameServerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "UpdateGameServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateGameServerInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateGameServerOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateGameServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateGameServerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateGameServerCommandOutput> {
    return deserializeAws_json1_1UpdateGameServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
