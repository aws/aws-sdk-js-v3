import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateGameSessionInput, UpdateGameSessionOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateGameSessionCommand,
  serializeAws_json1_1UpdateGameSessionCommand,
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

export type UpdateGameSessionCommandInput = UpdateGameSessionInput;
export type UpdateGameSessionCommandOutput = UpdateGameSessionOutput & __MetadataBearer;

/**
 * <p>Updates game session properties. This includes the session name, maximum player
 *             count, protection policy, which controls whether or not an active game session can be
 *             terminated during a scale-down event, and the player session creation policy, which
 *             controls whether or not new players can join the session. To update a game session,
 *             specify the game session ID and the values you want to change. If successful, an updated
 *                 <a>GameSession</a> object is returned. </p>
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
export class UpdateGameSessionCommand extends $Command<
  UpdateGameSessionCommandInput,
  UpdateGameSessionCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateGameSessionCommandInput) {
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
  ): Handler<UpdateGameSessionCommandInput, UpdateGameSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "UpdateGameSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateGameSessionInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateGameSessionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateGameSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateGameSessionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateGameSessionCommandOutput> {
    return deserializeAws_json1_1UpdateGameSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
