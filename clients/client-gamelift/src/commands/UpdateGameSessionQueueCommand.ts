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
  UpdateGameSessionQueueInput,
  UpdateGameSessionQueueInputFilterSensitiveLog,
  UpdateGameSessionQueueOutput,
  UpdateGameSessionQueueOutputFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1UpdateGameSessionQueueCommand,
  serializeAws_json1_1UpdateGameSessionQueueCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateGameSessionQueueCommandInput extends UpdateGameSessionQueueInput {}
export interface UpdateGameSessionQueueCommandOutput extends UpdateGameSessionQueueOutput, __MetadataBearer {}

/**
 * <p>Updates the configuration of a game session queue, which determines how the queue
 *             processes new game session requests. To update settings, specify the queue name to be
 *             updated and provide the new settings. When updating destinations, provide a complete
 *             list of destinations. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-intro.html">
 *                 Using Multi-Region Queues</a>
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, UpdateGameSessionQueueCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateGameSessionQueueCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new UpdateGameSessionQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGameSessionQueueCommandInput} for command's `input` shape.
 * @see {@link UpdateGameSessionQueueCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class UpdateGameSessionQueueCommand extends $Command<
  UpdateGameSessionQueueCommandInput,
  UpdateGameSessionQueueCommandOutput,
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

  constructor(readonly input: UpdateGameSessionQueueCommandInput) {
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
  ): Handler<UpdateGameSessionQueueCommandInput, UpdateGameSessionQueueCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateGameSessionQueueCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "UpdateGameSessionQueueCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateGameSessionQueueInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateGameSessionQueueOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateGameSessionQueueCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateGameSessionQueueCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateGameSessionQueueCommandOutput> {
    return deserializeAws_json1_1UpdateGameSessionQueueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
