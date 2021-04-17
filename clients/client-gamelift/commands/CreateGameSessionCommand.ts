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

export interface CreateGameSessionCommandInput extends CreateGameSessionInput {}
export interface CreateGameSessionCommandOutput extends CreateGameSessionOutput, __MetadataBearer {}

/**
 * <p>Creates a multiplayer game session for players in a specific fleet location. This
 *             operation prompts an available server process to start a game session and retrieves
 *             connection information for the new game session. As an alternative, consider using the
 *             GameLift game session placement feature with </p>
 *         <p>with <a>StartGameSessionPlacement</a>, which uses FleetIQ algorithms and
 *             queues to optimize the placement process.</p>
 *         <p>When creating a game session, you specify exactly where you want to place it and
 *             provide a set of game session configuration settings. The fleet must be in
 *                 <code>ACTIVE</code> status before a game session can be created in it. </p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To create a game session on an instance in a fleet's home Region, provide a
 *                     fleet or alias ID along with your game session configuration. </p>
 *             </li>
 *             <li>
 *                 <p>To create a game session on an instance in a fleet's remote location, provide
 *                     a fleet or alias ID and a location name, along with your game session
 *                     configuration. </p>
 *             </li>
 *          </ul>
 *         <p>If successful, a workflow is initiated to start a new game session. A
 *                 <code>GameSession</code> object is returned containing the game session
 *             configuration and status. When the status is <code>ACTIVE</code>, game session
 *             connection information is provided and player sessions can be created for the game
 *             session. By default, newly created game sessions are open to new players. You can
 *             restrict new player access by using <a>UpdateGameSession</a> to change the
 *             game session's player session creation policy.</p>
 *         <p>Game session logs are retained for all active game sessions for 14 days. To access the
 *             logs, call <a>GetGameSessionLogUrl</a> to download the log files.</p>
 *         <p>
 *             <i>Available in GameLift Local.</i>
 *          </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a game session</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateGameSession</a> |
 *                     <a>DescribeGameSessions</a> |
 *                     <a>DescribeGameSessionDetails</a> |
 *                     <a>SearchGameSessions</a> |
 *                     <a>UpdateGameSession</a> |
 *                     <a>GetGameSessionLogUrl</a> |
 *                     <a>StartGameSessionPlacement</a> |
 *                     <a>DescribeGameSessionPlacement</a> |
 *                     <a>StopGameSessionPlacement</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
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
