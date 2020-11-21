import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { StartMatchmakingInput, StartMatchmakingOutput } from "../models/models_0";
import {
  deserializeAws_json1_1StartMatchmakingCommand,
  serializeAws_json1_1StartMatchmakingCommand,
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

export type StartMatchmakingCommandInput = StartMatchmakingInput;
export type StartMatchmakingCommandOutput = StartMatchmakingOutput & __MetadataBearer;

/**
 * <p>Uses FlexMatch to create a game match for a group of players based on custom
 *             matchmaking rules, and starts a new game for the matched players. Each matchmaking
 *             request specifies the type of match to build (team configuration, rules for an
 *             acceptable match, etc.). The request also specifies the players to find a match for and
 *             where to host the new game session for optimal performance. A matchmaking request might
 *             start with a single player or a group of players who want to play together. FlexMatch
 *             finds additional players as needed to fill the match. Match type, rules, and the queue
 *             used to place a new game session are defined in a <code>MatchmakingConfiguration</code>.
 * </p>
 *         <p>To start matchmaking, provide a unique ticket ID, specify a matchmaking configuration,
 *             and include the players to be matched. You must also include a set of player attributes
 *             relevant for the matchmaking configuration. If successful, a matchmaking ticket is
 *             returned with status set to <code>QUEUED</code>. </p>
 *         <p>Track the status of the ticket to respond as needed and acquire game session
 *             connection information for successfully completed matches. Ticket status updates are
 *             tracked using event notification through Amazon Simple Notification Service (SNS), which is defined in the matchmaking
 *             configuration.</p>
 *         <p>
 *             <b>Processing a matchmaking request</b> -- FlexMatch
 *             handles a matchmaking request as follows: </p>
 *         <ol>
 *             <li>
 *                 <p>Your client code submits a <code>StartMatchmaking</code> request for one or
 *                     more players and tracks the status of the request ticket. </p>
 *             </li>
 *             <li>
 *                 <p>FlexMatch uses this ticket and others in process to build an acceptable
 *                     match. When a potential match is identified, all tickets in the proposed match
 *                     are advanced to the next status. </p>
 *             </li>
 *             <li>
 *                 <p>If the match requires player acceptance (set in the matchmaking
 *                     configuration), the tickets move into status <code>REQUIRES_ACCEPTANCE</code>.
 *                     This status triggers your client code to solicit acceptance from all players in
 *                     every ticket involved in the match, and then call <a>AcceptMatch</a>
 *                     for each player. If any player rejects or fails to accept the match before a
 *                     specified timeout, the proposed match is dropped (see <code>AcceptMatch</code>
 *                     for more details).</p>
 *             </li>
 *             <li>
 *                 <p>Once a match is proposed and accepted, the matchmaking tickets move into
 *                     status <code>PLACING</code>. FlexMatch locates resources for a new game session
 *                     using the game session queue (set in the matchmaking configuration) and creates
 *                     the game session based on the match data. </p>
 *             </li>
 *             <li>
 *                 <p>When the match is successfully placed, the matchmaking tickets move into
 *                     <code>COMPLETED</code> status. Connection information (including game
 *                     session endpoint and player session) is added to the matchmaking tickets.
 *                     Matched players can use the connection information to join the game. </p>
 *             </li>
 *          </ol>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-client.html">
 *             Add FlexMatch to a Game Client</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-notification.html">
 *             Set Up FlexMatch Event Notification</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-tasks.html">
 *             FlexMatch Integration Roadmap</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-match.html">
 *             How GameLift FlexMatch Works</a>
 *          </p>
 *         <p>
 *             <b>Related operations</b>
 *          </p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>StartMatchmaking</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeMatchmaking</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StopMatchmaking</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>AcceptMatch</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartMatchBackfill</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class StartMatchmakingCommand extends $Command<
  StartMatchmakingCommandInput,
  StartMatchmakingCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartMatchmakingCommandInput) {
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
  ): Handler<StartMatchmakingCommandInput, StartMatchmakingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "StartMatchmakingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartMatchmakingInput.filterSensitiveLog,
      outputFilterSensitiveLog: StartMatchmakingOutput.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartMatchmakingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartMatchmakingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartMatchmakingCommandOutput> {
    return deserializeAws_json1_1StartMatchmakingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
