import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { SuspendGameServerGroupInput, SuspendGameServerGroupOutput } from "../models/models_0";
import {
  deserializeAws_json1_1SuspendGameServerGroupCommand,
  serializeAws_json1_1SuspendGameServerGroupCommand,
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

export type SuspendGameServerGroupCommandInput = SuspendGameServerGroupInput;
export type SuspendGameServerGroupCommandOutput = SuspendGameServerGroupOutput & __MetadataBearer;

/**
 * <p>
 *             <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Temporarily stops activity on a game server group without terminating instances or the
 *             game server group. You can restart activity by calling <a>ResumeGameServerGroup</a>. You can suspend the following activity:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <b>Instance type replacement</b> - This activity
 *                     evaluates the current game hosting viability of all Spot instance types that are
 *                     defined for the game server group. It updates the Auto Scaling group to remove
 *                     nonviable Spot Instance types, which have a higher chance of game server
 *                     interruptions. It then balances capacity across the remaining viable Spot
 *                     Instance types. When this activity is suspended, the Auto Scaling group
 *                     continues with its current balance, regardless of viability. Instance
 *                     protection, utilization metrics, and capacity scaling activities continue to be
 *                     active. </p>
 *             </li>
 *          </ul>
 *         <p>To suspend activity, specify a game server group ARN and the type of activity to be
 *             suspended. If successful, a <a>GameServerGroup</a> object is returned showing
 *             that the activity is listed in <code>SuspendedActions</code>.</p>
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
export class SuspendGameServerGroupCommand extends $Command<
  SuspendGameServerGroupCommandInput,
  SuspendGameServerGroupCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SuspendGameServerGroupCommandInput) {
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
  ): Handler<SuspendGameServerGroupCommandInput, SuspendGameServerGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "SuspendGameServerGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SuspendGameServerGroupInput.filterSensitiveLog,
      outputFilterSensitiveLog: SuspendGameServerGroupOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SuspendGameServerGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SuspendGameServerGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SuspendGameServerGroupCommandOutput> {
    return deserializeAws_json1_1SuspendGameServerGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
