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
 * <p>Reserves an open player slot in an active game session. Before a
 *         player can be added, a game session must have an <code>ACTIVE</code> status, have a
 *         creation policy of <code>ALLOW_ALL</code>, and have an open player slot. To add a group
 *         of players to a game session, use <a>CreatePlayerSessions</a>. When the player
 *         connects to the game server and references a player session ID, the game server contacts the
 *         Amazon GameLift service to validate the player reservation and accept the player.</p>
 *          <p>To create a player session, specify a game session ID, player ID, and optionally a
 *         string of player data. If successful, a slot is reserved in the game session for the player
 *         and a new <a>PlayerSession</a> object is returned. Player sessions cannot be
 *         updated. </p>
 *          <p>
 *             <i>Available in Amazon GameLift Local.</i>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreatePlayerSession</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreatePlayerSessions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribePlayerSessions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Game session placements</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <a>StartGameSessionPlacement</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeGameSessionPlacement</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>StopGameSessionPlacement</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
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
