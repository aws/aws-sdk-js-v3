import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { GetTemplateRequest, GetTemplateResponse } from "../models/models_0";
import { deserializeAws_queryGetTemplateCommand, serializeAws_queryGetTemplateCommand } from "../protocols/Aws_query";
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

export type GetTemplateCommandInput = GetTemplateRequest;
export type GetTemplateCommandOutput = GetTemplateResponse & __MetadataBearer;

/**
 * <p>Displays the template object (which includes the Subject line, HTML part and text
 *             part) for the template you specify.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 */
export class GetTemplateCommand extends $Command<
  GetTemplateCommandInput,
  GetTemplateCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTemplateCommandInput, GetTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "GetTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTemplateCommandOutput> {
    return deserializeAws_queryGetTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
