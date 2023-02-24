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
  UpdateGameServerGroupInput,
  UpdateGameServerGroupInputFilterSensitiveLog,
  UpdateGameServerGroupOutput,
  UpdateGameServerGroupOutputFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1UpdateGameServerGroupCommand,
  serializeAws_json1_1UpdateGameServerGroupCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateGameServerGroupCommandInput extends UpdateGameServerGroupInput {}
export interface UpdateGameServerGroupCommandOutput extends UpdateGameServerGroupOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This operation is used with the GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *          <p>Updates GameLift FleetIQ-specific
 *             properties for a game server group. Many Auto Scaling group properties are updated on
 *             the Auto Scaling group directly, including the launch template, Auto Scaling policies,
 *             and maximum/minimum/desired instance counts.</p>
 *         <p>To update the game server group, specify the game server group ID and provide the
 *             updated values. Before applying the updates, the new values are validated to ensure that
 *             GameLift FleetIQ can continue to perform instance balancing activity. If successful, a
 *                 <code>GameServerGroup</code> object is returned.</p>
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
 * import { GameLiftClient, UpdateGameServerGroupCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateGameServerGroupCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new UpdateGameServerGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGameServerGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateGameServerGroupCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class UpdateGameServerGroupCommand extends $Command<
  UpdateGameServerGroupCommandInput,
  UpdateGameServerGroupCommandOutput,
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

  constructor(readonly input: UpdateGameServerGroupCommandInput) {
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
  ): Handler<UpdateGameServerGroupCommandInput, UpdateGameServerGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateGameServerGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "UpdateGameServerGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateGameServerGroupInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateGameServerGroupOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateGameServerGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateGameServerGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateGameServerGroupCommandOutput> {
    return deserializeAws_json1_1UpdateGameServerGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
