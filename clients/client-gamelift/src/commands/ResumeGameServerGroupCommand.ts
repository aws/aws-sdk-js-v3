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
  ResumeGameServerGroupInput,
  ResumeGameServerGroupInputFilterSensitiveLog,
  ResumeGameServerGroupOutput,
  ResumeGameServerGroupOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ResumeGameServerGroupCommand,
  serializeAws_json1_1ResumeGameServerGroupCommand,
} from "../protocols/Aws_json1_1";

export interface ResumeGameServerGroupCommandInput extends ResumeGameServerGroupInput {}
export interface ResumeGameServerGroupCommandOutput extends ResumeGameServerGroupOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This operation is used with the GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *          <p>Reinstates activity on a game
 *             server group after it has been suspended. A game server group might be suspended by the
 *                 <a href="gamelift/latest/apireference/API_SuspendGameServerGroup.html">SuspendGameServerGroup</a> operation, or it might be suspended involuntarily
 *             due to a configuration problem. In the second case, you can manually resume activity on
 *             the group once the configuration problem has been resolved. Refer to the game server
 *             group status and status reason for more information on why group activity is
 *             suspended.</p>
 *         <p>To resume activity, specify a game server group ARN and the type of activity to be
 *             resumed. If successful, a <code>GameServerGroup</code> object is returned showing that
 *             the resumed activity is no longer listed in <code>SuspendedActions</code>. </p>
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
 * import { GameLiftClient, ResumeGameServerGroupCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ResumeGameServerGroupCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new ResumeGameServerGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResumeGameServerGroupCommandInput} for command's `input` shape.
 * @see {@link ResumeGameServerGroupCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class ResumeGameServerGroupCommand extends $Command<
  ResumeGameServerGroupCommandInput,
  ResumeGameServerGroupCommandOutput,
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

  constructor(readonly input: ResumeGameServerGroupCommandInput) {
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
  ): Handler<ResumeGameServerGroupCommandInput, ResumeGameServerGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ResumeGameServerGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "ResumeGameServerGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResumeGameServerGroupInputFilterSensitiveLog,
      outputFilterSensitiveLog: ResumeGameServerGroupOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResumeGameServerGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ResumeGameServerGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResumeGameServerGroupCommandOutput> {
    return deserializeAws_json1_1ResumeGameServerGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
