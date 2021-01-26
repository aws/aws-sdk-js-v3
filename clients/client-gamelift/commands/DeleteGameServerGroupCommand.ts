import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteGameServerGroupInput, DeleteGameServerGroupOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteGameServerGroupCommand,
  serializeAws_json1_1DeleteGameServerGroupCommand,
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

export type DeleteGameServerGroupCommandInput = DeleteGameServerGroupInput;
export type DeleteGameServerGroupCommandOutput = DeleteGameServerGroupOutput & __MetadataBearer;

/**
 * <p>
 *             <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Terminates a game server group and permanently deletes the game server group record.
 *             You have several options for how these resources are impacted when deleting the game
 *             server group. Depending on the type of delete operation selected, this operation might
 *             affect these resources:</p>
 *             <ul>
 *             <li>
 *                <p>The game server group</p>
 *             </li>
 *             <li>
 *                <p>The corresponding Auto Scaling group</p>
 *             </li>
 *             <li>
 *                <p>All game servers that are currently running in the group</p>
 *             </li>
 *          </ul>
 *         <p>To delete a game server group, identify the game server group to delete and specify
 *             the type of delete operation to initiate. Game server groups can only be deleted if they
 *             are in <code>ACTIVE</code> or <code>ERROR</code> status.</p>
 *         <p>If the delete request is successful, a series of operations are kicked off. The game
 *             server group status is changed to <code>DELETE_SCHEDULED</code>, which prevents new game
 *             servers from being registered and stops automatic scaling activity. Once all game
 *             servers in the game server group are deregistered, GameLift FleetIQ can begin deleting resources.
 *             If any of the delete operations fail, the game server group is placed in
 *                 <code>ERROR</code> status.</p>
 *         <p>GameLift FleetIQ emits delete events to Amazon CloudWatch.</p>
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
 *                   <a>CreateGameServerGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListGameServerGroups</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeGameServerGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateGameServerGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteGameServerGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ResumeGameServerGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>SuspendGameServerGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeGameServerInstances</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class DeleteGameServerGroupCommand extends $Command<
  DeleteGameServerGroupCommandInput,
  DeleteGameServerGroupCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteGameServerGroupCommandInput) {
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
  ): Handler<DeleteGameServerGroupCommandInput, DeleteGameServerGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DeleteGameServerGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteGameServerGroupInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteGameServerGroupOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteGameServerGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteGameServerGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteGameServerGroupCommandOutput> {
    return deserializeAws_json1_1DeleteGameServerGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
