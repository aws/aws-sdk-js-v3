import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { ClaimGameServerInput, ClaimGameServerOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ClaimGameServerCommand,
  serializeAws_json1_1ClaimGameServerCommand,
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

export type ClaimGameServerCommandInput = ClaimGameServerInput;
export type ClaimGameServerCommandOutput = ClaimGameServerOutput & __MetadataBearer;

/**
 * <p>
 *             <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Locates an available game server and temporarily reserves it to host gameplay and
 *             players. This operation is called from a game client or client service (such as a
 *             matchmaker) to request hosting resources for a new game session. In response, GameLift FleetIQ
 *             locates an available game server, places it in <code>CLAIMED</code> status for 60
 *             seconds, and returns connection information that players can use to connect to the game
 *             server. </p>
 *         <p>To claim a game server, identify a game server group. You can also specify a game
 *             server ID, although this approach bypasses GameLift FleetIQ placement optimization. Optionally,
 *             include game data to pass to the game server at the start of a game session, such as a
 *             game map or player information. </p>
 *         <p>When a game server is successfully claimed, connection information is returned. A
 *             claimed game server's utilization status remains <code>AVAILABLE</code> while the claim
 *             status is set to <code>CLAIMED</code> for up to 60 seconds. This time period gives the
 *             game server time to update its status to <code>UTILIZED</code> (using <a>UpdateGameServer</a>) once players join. If the game server's status is not
 *             updated within 60 seconds, the game server reverts to unclaimed status and is available
 *             to be claimed by another request. The claim time period is a fixed value and is not
 *             configurable.</p>
 *         <p>If you try to claim a specific game server, this request will fail in the following
 *             cases:</p>
 *         <ul>
 *             <li>
 *                <p>If the game server utilization status is <code>UTILIZED</code>.</p>
 *             </li>
 *             <li>
 *                <p>If the game server claim status is <code>CLAIMED</code>.</p>
 *             </li>
 *          </ul>
 *         <note>
 *             <p>When claiming a specific game server, this request will succeed even if the game
 *                 server is running on an instance in <code>DRAINING</code> status. To avoid this,
 *                 first check the instance status by calling <a>DescribeGameServerInstances</a>.</p>
 *         </note>
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
export class ClaimGameServerCommand extends $Command<
  ClaimGameServerCommandInput,
  ClaimGameServerCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ClaimGameServerCommandInput) {
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
  ): Handler<ClaimGameServerCommandInput, ClaimGameServerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "ClaimGameServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ClaimGameServerInput.filterSensitiveLog,
      outputFilterSensitiveLog: ClaimGameServerOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ClaimGameServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ClaimGameServerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ClaimGameServerCommandOutput> {
    return deserializeAws_json1_1ClaimGameServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
