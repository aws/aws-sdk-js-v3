import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreatePlayerSessionInput, CreatePlayerSessionOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreatePlayerSessionCommand,
  serializeAws_json1_1CreatePlayerSessionCommand,
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

export type CreatePlayerSessionCommandInput = CreatePlayerSessionInput;
export type CreatePlayerSessionCommandOutput = CreatePlayerSessionOutput & __MetadataBearer;

/**
 * <p>Reserves an open player slot in a game session for a player. New player sessions can be
 *             created in any game session with an open slot that is in <code>ACTIVE</code> status and
 *             has a player creation policy of <code>ACCEPT_ALL</code>. You can add a group of players
 *             to a game session with <a>CreatePlayerSessions</a>. </p>
 *          <p>To create a player session, specify a game session ID, player ID, and optionally a set of
 *             player data. </p>
 *         <p>If successful, a slot is reserved in the game session for the player and a new <a>PlayerSession</a> object is returned with a player session ID. The player
 *             references the player session ID when sending a connection request to the game session,
 *             and the game server can use it to validate the player reservation with the GameLift service. Player
 *             sessions cannot be updated. </p>
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
export class CreatePlayerSessionCommand extends $Command<
  CreatePlayerSessionCommandInput,
  CreatePlayerSessionCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePlayerSessionCommandInput) {
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
  ): Handler<CreatePlayerSessionCommandInput, CreatePlayerSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreatePlayerSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePlayerSessionInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePlayerSessionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePlayerSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreatePlayerSessionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePlayerSessionCommandOutput> {
    return deserializeAws_json1_1CreatePlayerSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
