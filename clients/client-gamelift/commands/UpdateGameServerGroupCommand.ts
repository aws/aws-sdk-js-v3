import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateGameServerGroupInput, UpdateGameServerGroupOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateGameServerGroupCommand,
  serializeAws_json1_1UpdateGameServerGroupCommand,
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

export type UpdateGameServerGroupCommandInput = UpdateGameServerGroupInput;
export type UpdateGameServerGroupCommandOutput = UpdateGameServerGroupOutput & __MetadataBearer;

/**
 * <p>
 *             <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Updates GameLift FleetIQ-specific properties for a game server group. Many Auto Scaling group
 *             properties are updated on the Auto Scaling group directly, including the launch
 *             template, Auto Scaling policies, and maximum/minimum/desired instance counts.</p>
 *         <p>To update the game server group, specify the game server group ID and provide the
 *             updated values. Before applying the updates, the new values are validated to ensure that
 *             GameLift FleetIQ can continue to perform instance balancing activity. If successful, a <a>GameServerGroup</a> object is returned.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">GameLift FleetIQ Guide</a>
 *         </p>
 *
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
export class UpdateGameServerGroupCommand extends $Command<
  UpdateGameServerGroupCommandInput,
  UpdateGameServerGroupCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateGameServerGroupCommandInput) {
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
  ): Handler<UpdateGameServerGroupCommandInput, UpdateGameServerGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "UpdateGameServerGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateGameServerGroupInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateGameServerGroupOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateGameServerGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateGameServerGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateGameServerGroupCommandOutput> {
    return deserializeAws_json1_1UpdateGameServerGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
