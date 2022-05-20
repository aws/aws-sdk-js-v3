// smithy-typescript generated code
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
import { GetExtensionRequest, GetExtensionResult } from "../models/models_0";
import {
  deserializeAws_restJson1GetExtensionCommand,
  serializeAws_restJson1GetExtensionCommand,
} from "../protocols/Aws_restJson1";

export interface GetExtensionCommandInput extends GetExtensionRequest {}
export interface GetExtensionCommandOutput extends GetExtensionResult, __MetadataBearer {}

/**
 * <p>Gets details about a specified extension.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameSparksClient, GetExtensionCommand } from "@aws-sdk/client-gamesparks"; // ES Modules import
 * // const { GameSparksClient, GetExtensionCommand } = require("@aws-sdk/client-gamesparks"); // CommonJS import
 * const client = new GameSparksClient(config);
 * const command = new GetExtensionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetExtensionCommandInput} for command's `input` shape.
 * @see {@link GetExtensionCommandOutput} for command's `response` shape.
 * @see {@link GameSparksClientResolvedConfig | config} for GameSparksClient's `config` shape.
 *
 */
export class GetExtensionCommand extends $Command<
  GetExtensionCommandInput,
  GetExtensionCommandOutput,
  GameSparksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetExtensionCommandInput) {
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
  ): Handler<GetExtensionCommandInput, GetExtensionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameSparksClient";
    const commandName = "GetExtensionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetExtensionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetExtensionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetExtensionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetExtensionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetExtensionCommandOutput> {
    return deserializeAws_restJson1GetExtensionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
