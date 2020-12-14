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
 * <p>Uses FlexMatch to create a game match for a group of players based on custom matchmaking
 *             rules. If you're also using GameLift hosting, a new game session is started for the
 *             matched players. Each matchmaking request identifies one or more players to find a match
 *             for, and specifies the type of match to build, including the team configuration and the
 *             rules for an acceptable match. When a matchmaking request identifies a group of players
 *             who want to play together, FlexMatch finds additional players to fill the match. Match
 *             type, rules, and other features are defined in a <code>MatchmakingConfiguration</code>. </p>
 *         <p>To start matchmaking, provide a unique ticket ID, specify a matchmaking configuration,
 *             and include the players to be matched. For each player, you must also include the player
 *             attribute values that are required by the matchmaking configuration (in the rule set).
 *             If successful, a matchmaking ticket is returned with status set to <code>QUEUED</code>. </p>
 *         <p>Track the status of the ticket to respond as needed. If you're also using GameLift
 *             hosting, a successfully completed ticket contains game session connection information.
 *             Ticket status updates are tracked using event notification through Amazon Simple Notification Service (SNS), which is
 *             defined in the matchmaking configuration.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html">
 *             Add FlexMatch to a Game Client</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html">
 *             Set Up FlexMatch Event Notification</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-tasks.html">
 *             FlexMatch Integration Roadmap</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/gamelift-match.html">
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
