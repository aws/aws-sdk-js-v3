import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { AcceptMatchInput, AcceptMatchOutput } from "../models/models_0";
import {
  deserializeAws_json1_1AcceptMatchCommand,
  serializeAws_json1_1AcceptMatchCommand,
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

export type AcceptMatchCommandInput = AcceptMatchInput;
export type AcceptMatchCommandOutput = AcceptMatchOutput & __MetadataBearer;

/**
 * <p>Registers a player's acceptance or rejection of a proposed FlexMatch match. A
 *             matchmaking configuration may require player acceptance; if so, then matches built with
 *             that configuration cannot be completed unless all players accept the proposed match
 *             within a specified time limit. </p>
 *         <p>When FlexMatch builds a match, all the matchmaking tickets involved in the proposed
 *             match are placed into status <code>REQUIRES_ACCEPTANCE</code>. This is a trigger for
 *             your game to get acceptance from all players in the ticket. Acceptances are only valid
 *             for tickets when they are in this status; all other acceptances result in an
 *             error.</p>
 *         <p>To register acceptance, specify the ticket ID, a response, and one or more players.
 *             Once all players have registered acceptance, the matchmaking tickets advance to status
 *             <code>PLACING</code>, where a new game session is created for the match. </p>
 *         <p>If any player rejects the match, or if acceptances are not received before a specified
 *             timeout, the proposed match is dropped. The matchmaking tickets are then handled in one
 *             of two ways: For tickets where one or more players rejected the match, the ticket status
 *             is returned to <code>SEARCHING</code> to find a new match. For tickets where one or more
 *             players failed to respond, the ticket status is set to <code>CANCELLED</code>, and
 *             processing is terminated. A new matchmaking request for these players can be submitted
 *             as needed. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html">
 *                 Add FlexMatch to a Game Client</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html"> FlexMatch Events Reference</a>
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
export class AcceptMatchCommand extends $Command<
  AcceptMatchCommandInput,
  AcceptMatchCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AcceptMatchCommandInput) {
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
  ): Handler<AcceptMatchCommandInput, AcceptMatchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "AcceptMatchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptMatchInput.filterSensitiveLog,
      outputFilterSensitiveLog: AcceptMatchOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcceptMatchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AcceptMatchCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AcceptMatchCommandOutput> {
    return deserializeAws_json1_1AcceptMatchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
