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
  StopGameSessionPlacementInput,
  StopGameSessionPlacementInputFilterSensitiveLog,
  StopGameSessionPlacementOutput,
  StopGameSessionPlacementOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StopGameSessionPlacementCommand,
  serializeAws_json1_1StopGameSessionPlacementCommand,
} from "../protocols/Aws_json1_1";

export interface StopGameSessionPlacementCommandInput extends StopGameSessionPlacementInput {}
export interface StopGameSessionPlacementCommandOutput extends StopGameSessionPlacementOutput, __MetadataBearer {}

/**
 * <p>Cancels a game session placement that is in <code>PENDING</code> status. To stop a
 *             placement, provide the placement ID values. If successful, the placement is moved to
 *                 <code>CANCELLED</code> status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, StopGameSessionPlacementCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, StopGameSessionPlacementCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new StopGameSessionPlacementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopGameSessionPlacementCommandInput} for command's `input` shape.
 * @see {@link StopGameSessionPlacementCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class StopGameSessionPlacementCommand extends $Command<
  StopGameSessionPlacementCommandInput,
  StopGameSessionPlacementCommandOutput,
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

  constructor(readonly input: StopGameSessionPlacementCommandInput) {
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
  ): Handler<StopGameSessionPlacementCommandInput, StopGameSessionPlacementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopGameSessionPlacementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "StopGameSessionPlacementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopGameSessionPlacementInputFilterSensitiveLog,
      outputFilterSensitiveLog: StopGameSessionPlacementOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopGameSessionPlacementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopGameSessionPlacementCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopGameSessionPlacementCommandOutput> {
    return deserializeAws_json1_1StopGameSessionPlacementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
