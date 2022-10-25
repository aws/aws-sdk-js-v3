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

import { GameSparksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameSparksClient";
import {
  DisconnectPlayerRequest,
  DisconnectPlayerRequestFilterSensitiveLog,
  DisconnectPlayerResult,
  DisconnectPlayerResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisconnectPlayerCommand,
  serializeAws_restJson1DisconnectPlayerCommand,
} from "../protocols/Aws_restJson1";

export interface DisconnectPlayerCommandInput extends DisconnectPlayerRequest {}
export interface DisconnectPlayerCommandOutput extends DisconnectPlayerResult, __MetadataBearer {}

/**
 * <p>Disconnects a player from the game runtime.</p>
 *          <p>
 *       If a player has multiple connections, this operation attempts to close all of them.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameSparksClient, DisconnectPlayerCommand } from "@aws-sdk/client-gamesparks"; // ES Modules import
 * // const { GameSparksClient, DisconnectPlayerCommand } = require("@aws-sdk/client-gamesparks"); // CommonJS import
 * const client = new GameSparksClient(config);
 * const command = new DisconnectPlayerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisconnectPlayerCommandInput} for command's `input` shape.
 * @see {@link DisconnectPlayerCommandOutput} for command's `response` shape.
 * @see {@link GameSparksClientResolvedConfig | config} for GameSparksClient's `config` shape.
 *
 */
export class DisconnectPlayerCommand extends $Command<
  DisconnectPlayerCommandInput,
  DisconnectPlayerCommandOutput,
  GameSparksClientResolvedConfig
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

  constructor(readonly input: DisconnectPlayerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameSparksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisconnectPlayerCommandInput, DisconnectPlayerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisconnectPlayerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameSparksClient";
    const commandName = "DisconnectPlayerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisconnectPlayerRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisconnectPlayerResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisconnectPlayerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisconnectPlayerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisconnectPlayerCommandOutput> {
    return deserializeAws_restJson1DisconnectPlayerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
