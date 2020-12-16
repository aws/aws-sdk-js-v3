import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { StopMatchmakingInput, StopMatchmakingOutput } from "../models/models_0";
import {
  deserializeAws_json1_1StopMatchmakingCommand,
  serializeAws_json1_1StopMatchmakingCommand,
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

export type StopMatchmakingCommandInput = StopMatchmakingInput;
export type StopMatchmakingCommandOutput = StopMatchmakingOutput & __MetadataBearer;

/**
 * <p>Cancels a matchmaking ticket or match backfill ticket that is currently being
 *             processed. To stop the matchmaking operation, specify the ticket ID. If successful, work
 *             on the ticket is stopped, and the ticket status is changed to
 *             <code>CANCELLED</code>.</p>
 *         <p>This call is also used to turn off automatic backfill for an individual game session.
 *             This is for game sessions that are created with a matchmaking configuration that has
 *             automatic backfill enabled. The ticket ID is included in the <code>MatchmakerData</code>
 *             of an updated game session object, which is provided to the game server.</p>
 *         <note>
 *             <p>If the operation is successful, the service sends back an empty JSON struct with the HTTP 200 response
 *         (not an empty HTTP body).</p>
 *          </note>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html">
 *                 Add FlexMatch to a Game Client</a>
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
export class StopMatchmakingCommand extends $Command<
  StopMatchmakingCommandInput,
  StopMatchmakingCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopMatchmakingCommandInput) {
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
  ): Handler<StopMatchmakingCommandInput, StopMatchmakingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "StopMatchmakingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopMatchmakingInput.filterSensitiveLog,
      outputFilterSensitiveLog: StopMatchmakingOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopMatchmakingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopMatchmakingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopMatchmakingCommandOutput> {
    return deserializeAws_json1_1StopMatchmakingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
