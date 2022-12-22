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
  CreatePlayerSessionInput,
  CreatePlayerSessionInputFilterSensitiveLog,
  CreatePlayerSessionOutput,
  CreatePlayerSessionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreatePlayerSessionCommand,
  serializeAws_json1_1CreatePlayerSessionCommand,
} from "../protocols/Aws_json1_1";

export interface CreatePlayerSessionCommandInput extends CreatePlayerSessionInput {}
export interface CreatePlayerSessionCommandOutput extends CreatePlayerSessionOutput, __MetadataBearer {}

/**
 * <p>Reserves an open player slot in a game session for a player. New player sessions can
 *             be created in any game session with an open slot that is in <code>ACTIVE</code> status
 *             and has a player creation policy of <code>ACCEPT_ALL</code>. You can add a group of
 *             players to a game session with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSessions.html">CreatePlayerSessions</a> . </p>
 *         <p>To create a player session, specify a game session ID, player ID, and optionally a set
 *             of player data. </p>
 *         <p>If successful, a slot is reserved in the game session for the player and a new
 *                 <code>PlayerSessions</code> object is returned with a player session ID. The player
 *             references the player session ID when sending a connection request to the game session,
 *             and the game server can use it to validate the player reservation with the GameLift
 *             service. Player sessions cannot be updated. </p>
 *         <p>The maximum number of players per game session is 200. It is not adjustable. </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreatePlayerSessionCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreatePlayerSessionCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new CreatePlayerSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePlayerSessionCommandInput} for command's `input` shape.
 * @see {@link CreatePlayerSessionCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class CreatePlayerSessionCommand extends $Command<
  CreatePlayerSessionCommandInput,
  CreatePlayerSessionCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePlayerSessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreatePlayerSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePlayerSessionInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreatePlayerSessionOutputFilterSensitiveLog,
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
