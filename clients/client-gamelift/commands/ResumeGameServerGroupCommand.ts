import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { ResumeGameServerGroupInput, ResumeGameServerGroupOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ResumeGameServerGroupCommand,
  serializeAws_json1_1ResumeGameServerGroupCommand,
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

export type ResumeGameServerGroupCommandInput = ResumeGameServerGroupInput;
export type ResumeGameServerGroupCommandOutput = ResumeGameServerGroupOutput & __MetadataBearer;

/**
 * <p>
 *             <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Reinstates activity on a game server group after it has been suspended. A game server
 *             group might be suspended by the<a>SuspendGameServerGroup</a> operation, or it
 *             might be suspended involuntarily due to a configuration problem. In the second case, you
 *             can manually resume activity on the group once the configuration problem has been
 *             resolved. Refer to the game server group status and status reason for more information
 *             on why group activity is suspended.</p>
 *         <p>To resume activity, specify a game server group ARN and the type of activity to be
 *             resumed. If successful, a <a>GameServerGroup</a> object is returned showing
 *             that the resumed activity is no longer listed in <code>SuspendedActions</code>. </p>
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
export class ResumeGameServerGroupCommand extends $Command<
  ResumeGameServerGroupCommandInput,
  ResumeGameServerGroupCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResumeGameServerGroupCommandInput) {
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
  ): Handler<ResumeGameServerGroupCommandInput, ResumeGameServerGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "ResumeGameServerGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResumeGameServerGroupInput.filterSensitiveLog,
      outputFilterSensitiveLog: ResumeGameServerGroupOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResumeGameServerGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ResumeGameServerGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResumeGameServerGroupCommandOutput> {
    return deserializeAws_json1_1ResumeGameServerGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
