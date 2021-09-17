import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateInAppTemplateRequest, UpdateInAppTemplateResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateInAppTemplateCommand,
  serializeAws_restJson1UpdateInAppTemplateCommand,
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

export interface UpdateInAppTemplateCommandInput extends UpdateInAppTemplateRequest {}
export interface UpdateInAppTemplateCommandOutput extends UpdateInAppTemplateResponse, __MetadataBearer {}

/**
 * <p>Updates an existing message template for messages sent through the in-app message channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateInAppTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateInAppTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateInAppTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInAppTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateInAppTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateInAppTemplateCommand extends $Command<
  UpdateInAppTemplateCommandInput,
  UpdateInAppTemplateCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateInAppTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateInAppTemplateCommandInput, UpdateInAppTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "UpdateInAppTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateInAppTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateInAppTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateInAppTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateInAppTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateInAppTemplateCommandOutput> {
    return deserializeAws_restJson1UpdateInAppTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
