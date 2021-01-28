import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateGameSessionInput, CreateGameSessionOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateGameSessionCommand,
  serializeAws_json1_1CreateGameSessionCommand,
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

export type CreateGameSessionCommandInput = CreateGameSessionInput;
export type CreateGameSessionCommandOutput = CreateGameSessionOutput & __MetadataBearer;

/**
 * <p>Creates a multiplayer game session for players. This operation creates a game session
 *             record and assigns an available server process in the specified fleet to host the game
 *             session. A fleet must have an <code>ACTIVE</code> status before a game session can be
 *             created in it.</p>
 *         <p>To create a game session, specify either fleet ID or alias ID and indicate a
 *             maximum number of players to allow in the game session. You can also provide a name and
 *             game-specific properties for this game session. If successful, a <a>GameSession</a> object is returned containing the game session properties
 *             and other settings you specified.</p>
 *         <p>
 *             <b>Idempotency tokens.</b> You can add a token that
 *             uniquely identifies game session requests. This is useful for ensuring that game session
 *             requests are idempotent. Multiple requests with the same idempotency token are processed
 *             only once; subsequent requests return the original result. All response values are the
 *             same with the exception of game session status, which may change.</p>
 *         <p>
 *             <b>Resource creation limits.</b> If you are creating a
 *             game session on a fleet with a resource creation limit policy in force, then you must
 *             specify a creator ID. Without this ID, Amazon GameLift has no way to evaluate the policy for this
 *             new game session request.</p>
 *         <p>
 *             <b>Player acceptance policy.</b> By default, newly created
 *             game sessions are open to new players. You can restrict new player access by using <a>UpdateGameSession</a> to change the game session's player session creation
 *             policy.</p>
 *         <p>
 *             <b>Game session logs.</b> Logs are retained for all
 *             active game sessions for 14 days. To access the logs, call <a>GetGameSessionLogUrl</a> to download the log files.</p>
 *         <p>
 *             <i>Available in Amazon GameLift Local.</i>
 *          </p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateGameSession</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeGameSessions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeGameSessionDetails</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>SearchGameSessions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateGameSession</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetGameSessionLogUrl</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Game session placements</p>
 *                         <ul>
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
export class CreateGameSessionCommand extends $Command<
  CreateGameSessionCommandInput,
  CreateGameSessionCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateGameSessionCommandInput) {
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
  ): Handler<CreateGameSessionCommandInput, CreateGameSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreateGameSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateGameSessionInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateGameSessionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateGameSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateGameSessionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGameSessionCommandOutput> {
    return deserializeAws_json1_1CreateGameSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
