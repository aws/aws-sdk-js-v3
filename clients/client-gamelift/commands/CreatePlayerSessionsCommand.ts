import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreatePlayerSessionsInput, CreatePlayerSessionsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreatePlayerSessionsCommand,
  serializeAws_json1_1CreatePlayerSessionsCommand,
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

export type CreatePlayerSessionsCommandInput = CreatePlayerSessionsInput;
export type CreatePlayerSessionsCommandOutput = CreatePlayerSessionsOutput & __MetadataBearer;

/**
 * <p>Reserves open slots in a game session for a group of players. New player sessions can be
 *             created in any game session with an open slot that is in <code>ACTIVE</code> status and
 *             has a player creation policy of <code>ACCEPT_ALL</code>.  To add a single player to a
 *             game session, use <a>CreatePlayerSession</a>. </p>
 *          <p>To create player sessions, specify a game session ID and a list of player IDs. Optionally,
 *             provide a set of player data for each player ID. </p>
 *         <p>If successful, a slot is reserved in the game session for each player, and new <a>PlayerSession</a> objects are returned with player session IDs. Each player
 *             references their player session ID when sending a connection request to the game
 *             session, and the game server can use it to validate the player reservation with the
 *             GameLift service. Player sessions cannot be updated.</p>
 *          <p>
 *             <i>Available in Amazon GameLift Local.</i>
 *          </p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreatePlayerSession</a> |
 *                     <a>CreatePlayerSessions</a> |
 *                     <a>DescribePlayerSessions</a> |
 *                     <a>StartGameSessionPlacement</a> |
 *                     <a>DescribeGameSessionPlacement</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 */
export class CreatePlayerSessionsCommand extends $Command<
  CreatePlayerSessionsCommandInput,
  CreatePlayerSessionsCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePlayerSessionsCommandInput) {
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
  ): Handler<CreatePlayerSessionsCommandInput, CreatePlayerSessionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreatePlayerSessionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePlayerSessionsInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePlayerSessionsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePlayerSessionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreatePlayerSessionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePlayerSessionsCommandOutput> {
    return deserializeAws_json1_1CreatePlayerSessionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
