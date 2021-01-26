import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CancelResizeMessage, ResizeProgressMessage } from "../models/models_0";
import { deserializeAws_queryCancelResizeCommand, serializeAws_queryCancelResizeCommand } from "../protocols/Aws_query";
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

export type CancelResizeCommandInput = CancelResizeMessage;
export type CancelResizeCommandOutput = ResizeProgressMessage & __MetadataBearer;

/**
 * <p>Cancels a resize operation for a cluster.</p>
 */
export class CancelResizeCommand extends $Command<
  CancelResizeCommandInput,
  CancelResizeCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelResizeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelResizeCommandInput, CancelResizeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "CancelResizeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelResizeMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ResizeProgressMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelResizeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCancelResizeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelResizeCommandOutput> {
    return deserializeAws_queryCancelResizeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
