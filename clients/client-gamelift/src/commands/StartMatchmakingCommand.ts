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
  StartMatchmakingInput,
  StartMatchmakingInputFilterSensitiveLog,
  StartMatchmakingOutput,
  StartMatchmakingOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartMatchmakingCommand,
  serializeAws_json1_1StartMatchmakingCommand,
} from "../protocols/Aws_json1_1";

export interface StartMatchmakingCommandInput extends StartMatchmakingInput {}
export interface StartMatchmakingCommandOutput extends StartMatchmakingOutput, __MetadataBearer {}

/**
 * <p>Uses FlexMatch to create a game match for a group of players based on custom matchmaking
 *             rules. With games that use GameLift managed hosting, this operation also triggers GameLift
 *             to find hosting resources and start a new game session for the new match. Each
 *             matchmaking request includes information on one or more players and specifies the
 *             FlexMatch matchmaker to use. When a request is for multiple players, FlexMatch attempts to
 *             build a match that includes all players in the request, placing them in the same team
 *             and finding additional players as needed to fill the match. </p>
 *         <p>To start matchmaking, provide a unique ticket ID, specify a matchmaking configuration,
 *             and include the players to be matched. You must also include any player attributes that
 *             are required by the matchmaking configuration's rule set. If successful, a matchmaking
 *             ticket is returned with status set to <code>QUEUED</code>. </p>
 *         <p>Track matchmaking events to respond as needed and acquire game session connection
 *             information for successfully completed matches. Ticket status updates are tracked using
 *             event notification through Amazon Simple Notification Service, which is defined in the matchmaking
 *             configuration.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html">
 *                 Add FlexMatch to a game client</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Set Up FlexMatch event
 *                 notification</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/gamelift-match.html">
 *                 How GameLift FlexMatch works</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, StartMatchmakingCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, StartMatchmakingCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new StartMatchmakingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMatchmakingCommandInput} for command's `input` shape.
 * @see {@link StartMatchmakingCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class StartMatchmakingCommand extends $Command<
  StartMatchmakingCommandInput,
  StartMatchmakingCommandOutput,
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

  constructor(readonly input: StartMatchmakingCommandInput) {
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
  ): Handler<StartMatchmakingCommandInput, StartMatchmakingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartMatchmakingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "StartMatchmakingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartMatchmakingInputFilterSensitiveLog,
      outputFilterSensitiveLog: StartMatchmakingOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartMatchmakingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartMatchmakingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartMatchmakingCommandOutput> {
    return deserializeAws_json1_1StartMatchmakingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
