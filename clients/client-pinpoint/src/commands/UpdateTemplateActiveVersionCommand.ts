import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateTemplateActiveVersionRequest, UpdateTemplateActiveVersionResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateTemplateActiveVersionCommand,
  serializeAws_restJson1UpdateTemplateActiveVersionCommand,
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

export interface UpdateTemplateActiveVersionCommandInput extends UpdateTemplateActiveVersionRequest {}
export interface UpdateTemplateActiveVersionCommandOutput
  extends UpdateTemplateActiveVersionResponse,
    __MetadataBearer {}

/**
 * <p>Changes the status of a specific version of a message template to <i>active</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateTemplateActiveVersionCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateTemplateActiveVersionCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateTemplateActiveVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTemplateActiveVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateTemplateActiveVersionCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateTemplateActiveVersionCommand extends $Command<
  UpdateTemplateActiveVersionCommandInput,
  UpdateTemplateActiveVersionCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateTemplateActiveVersionCommandInput) {
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
  ): Handler<UpdateTemplateActiveVersionCommandInput, UpdateTemplateActiveVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "UpdateTemplateActiveVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTemplateActiveVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateTemplateActiveVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateTemplateActiveVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateTemplateActiveVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateTemplateActiveVersionCommandOutput> {
    return deserializeAws_restJson1UpdateTemplateActiveVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
