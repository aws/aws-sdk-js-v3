// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  CreateGameSessionInput,
  CreateGameSessionInputFilterSensitiveLog,
  CreateGameSessionOutput,
  CreateGameSessionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateGameSessionCommand,
  serializeAws_json1_1CreateGameSessionCommand,
} from "../protocols/Aws_json1_1";

export interface CreateGameSessionCommandInput extends CreateGameSessionInput {}
export interface CreateGameSessionCommandOutput extends CreateGameSessionOutput, __MetadataBearer {}

/**
 * <p>Creates a multiplayer game session for players in a specific fleet location. This
 *             operation prompts an available server process to start a game session and retrieves
 *             connection information for the new game session. As an alternative, consider using the
 *             GameLift game session placement feature with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> , which uses FleetIQ algorithms and queues to
 *             optimize the placement process.</p>
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
 *             restrict new player access by using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSession.html">UpdateGameSession</a> to change the game session's player session creation
 *             policy.</p>
 *         <p>Game session logs are retained for all active game sessions for 14 days. To access the
 *             logs, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetGameSessionLogUrl.html">GetGameSessionLogUrl</a> to download the log files.</p>
 *         <p>
 *             <i>Available in Amazon GameLift Local.</i>
 *          </p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a game session</a>
 *          </p>
 *          <p>
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateGameSessionCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateGameSessionCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new CreateGameSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGameSessionCommandInput} for command's `input` shape.
 * @see {@link CreateGameSessionCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class CreateGameSessionCommand extends $Command<
  CreateGameSessionCommandInput,
  CreateGameSessionCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateGameSessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreateGameSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateGameSessionInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateGameSessionOutputFilterSensitiveLog,
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
