import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { CreateInAppTemplateRequest, CreateInAppTemplateResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateInAppTemplateCommand,
  serializeAws_restJson1CreateInAppTemplateCommand,
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

export interface CreateInAppTemplateCommandInput extends CreateInAppTemplateRequest {}
export interface CreateInAppTemplateCommandOutput extends CreateInAppTemplateResponse, __MetadataBearer {}

/**
 * <p>Creates a new message template for messages using the in-app message channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateInAppTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateInAppTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new CreateInAppTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInAppTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateInAppTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateInAppTemplateCommand extends $Command<
  CreateInAppTemplateCommandInput,
  CreateInAppTemplateCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateInAppTemplateCommandInput) {
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
  ): Handler<CreateInAppTemplateCommandInput, CreateInAppTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "CreateInAppTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateInAppTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateInAppTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateInAppTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateInAppTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateInAppTemplateCommandOutput> {
    return deserializeAws_restJson1CreateInAppTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
