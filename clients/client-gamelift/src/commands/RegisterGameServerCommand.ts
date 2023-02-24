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
  RegisterGameServerInput,
  RegisterGameServerInputFilterSensitiveLog,
  RegisterGameServerOutput,
  RegisterGameServerOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RegisterGameServerCommand,
  serializeAws_json1_1RegisterGameServerCommand,
} from "../protocols/Aws_json1_1";

export interface RegisterGameServerCommandInput extends RegisterGameServerInput {}
export interface RegisterGameServerCommandOutput extends RegisterGameServerOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This operation is used with the GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *          <p>Creates a new game server
 *             resource and notifies GameLift FleetIQ that the game server is ready to host gameplay and players.
 *             This operation is called by a game server process that is running on an instance in a
 *             game server group. Registering game servers enables GameLift FleetIQ to track available game
 *             servers and enables game clients and services to claim a game server for a new game
 *             session. </p>
 *         <p>To register a game server, identify the game server group and instance where the game
 *             server is running, and provide a unique identifier for the game server. You can also
 *             include connection and game server data.</p>
 *         <p>Once a game server is successfully registered, it is put in status
 *                 <code>AVAILABLE</code>. A request to register a game server may fail if the instance
 *             it is running on is in the process of shutting down as part of instance balancing or
 *             scale-down activity. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">GameLift FleetIQ
 *                 Guide</a>
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, RegisterGameServerCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, RegisterGameServerCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new RegisterGameServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterGameServerCommandInput} for command's `input` shape.
 * @see {@link RegisterGameServerCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class RegisterGameServerCommand extends $Command<
  RegisterGameServerCommandInput,
  RegisterGameServerCommandOutput,
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

  constructor(readonly input: RegisterGameServerCommandInput) {
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
  ): Handler<RegisterGameServerCommandInput, RegisterGameServerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterGameServerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "RegisterGameServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterGameServerInputFilterSensitiveLog,
      outputFilterSensitiveLog: RegisterGameServerOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterGameServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterGameServerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterGameServerCommandOutput> {
    return deserializeAws_json1_1RegisterGameServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
