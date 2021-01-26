import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { StartFleetActionsInput, StartFleetActionsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1StartFleetActionsCommand,
  serializeAws_json1_1StartFleetActionsCommand,
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

export type StartFleetActionsCommandInput = StartFleetActionsInput;
export type StartFleetActionsCommandOutput = StartFleetActionsOutput & __MetadataBearer;

/**
 * <p>Resumes activity on a fleet that was suspended with <a>StopFleetActions</a>. Currently, this operation is used to restart a fleet's
 *             auto-scaling activity. </p>
 *         <p>To start fleet actions, specify the fleet ID and the type of actions to restart. When
 *             auto-scaling fleet actions are restarted, Amazon GameLift once again initiates scaling events
 *             as triggered by the fleet's scaling policies. If actions on the fleet were never
 *             stopped, this operation will have no effect. You can view a fleet's stopped actions
 *             using <a>DescribeFleetAttributes</a>.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift Fleets</a>
 *          </p>
 *         <p>
 *             <b>Related operations</b>
 *          </p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateFleet</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListFleets</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteFleet</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeFleetAttributes</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateFleetAttributes</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartFleetActions</a> or <a>StopFleetActions</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class StartFleetActionsCommand extends $Command<
  StartFleetActionsCommandInput,
  StartFleetActionsCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "StartFleetActionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartFleetActionsInput.filterSensitiveLog,
      outputFilterSensitiveLog: StartFleetActionsOutput.filterSensitiveLog,
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
