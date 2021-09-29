import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { UpdateSipMediaApplicationCallRequest, UpdateSipMediaApplicationCallResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateSipMediaApplicationCallCommand,
  serializeAws_restJson1UpdateSipMediaApplicationCallCommand,
} from "../protocols/Aws_restJson1";
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

export interface UpdateSipMediaApplicationCallCommandInput extends UpdateSipMediaApplicationCallRequest {}
export interface UpdateSipMediaApplicationCallCommandOutput
  extends UpdateSipMediaApplicationCallResponse,
    __MetadataBearer {}

/**
 * <p>Allows you to trigger a Lambda function at any time while a call is active, and replace the current actions with new actions returned by the invocation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateSipMediaApplicationCallCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdateSipMediaApplicationCallCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UpdateSipMediaApplicationCallCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSipMediaApplicationCallCommandInput} for command's `input` shape.
 * @see {@link UpdateSipMediaApplicationCallCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateSipMediaApplicationCallCommand extends $Command<
  UpdateSipMediaApplicationCallCommandInput,
  UpdateSipMediaApplicationCallCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateSipMediaApplicationCallCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSipMediaApplicationCallCommandInput, UpdateSipMediaApplicationCallCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "UpdateSipMediaApplicationCallCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSipMediaApplicationCallRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateSipMediaApplicationCallResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateSipMediaApplicationCallCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateSipMediaApplicationCallCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateSipMediaApplicationCallCommandOutput> {
    return deserializeAws_restJson1UpdateSipMediaApplicationCallCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
