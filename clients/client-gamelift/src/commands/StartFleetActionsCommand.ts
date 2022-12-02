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
  StartFleetActionsInput,
  StartFleetActionsInputFilterSensitiveLog,
  StartFleetActionsOutput,
  StartFleetActionsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartFleetActionsCommand,
  serializeAws_json1_1StartFleetActionsCommand,
} from "../protocols/Aws_json1_1";

export interface StartFleetActionsCommandInput extends StartFleetActionsInput {}
export interface StartFleetActionsCommandOutput extends StartFleetActionsOutput, __MetadataBearer {}

/**
 * <p>Resumes certain types of activity on fleet instances that were suspended with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html">StopFleetActions</a>. For multi-location fleets, fleet actions are managed
 *             separately for each location. Currently, this operation is used to restart a fleet's
 *             auto-scaling activity.</p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To restart actions on instances in the fleet's home Region, provide a fleet ID
 *                     and the type of actions to resume. </p>
 *             </li>
 *             <li>
 *                 <p>To restart actions on instances in one of the fleet's remote locations,
 *                     provide a fleet ID, a location name, and the type of actions to resume. </p>
 *             </li>
 *          </ul>
 *         <p>If successful, GameLift once again initiates scaling events as triggered by the fleet's
 *             scaling policies. If actions on the fleet location were never stopped, this operation
 *             will have no effect.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift
 *                 fleets</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, StartFleetActionsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, StartFleetActionsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new StartFleetActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartFleetActionsCommandInput} for command's `input` shape.
 * @see {@link StartFleetActionsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class StartFleetActionsCommand extends $Command<
  StartFleetActionsCommandInput,
  StartFleetActionsCommandOutput,
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

  constructor(readonly input: StartFleetActionsCommandInput) {
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
  ): Handler<StartFleetActionsCommandInput, StartFleetActionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartFleetActionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "StartFleetActionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartFleetActionsInputFilterSensitiveLog,
      outputFilterSensitiveLog: StartFleetActionsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartFleetActionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartFleetActionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartFleetActionsCommandOutput> {
    return deserializeAws_json1_1StartFleetActionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
