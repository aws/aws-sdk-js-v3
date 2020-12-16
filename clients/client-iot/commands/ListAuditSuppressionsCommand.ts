import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListAuditSuppressionsRequest, ListAuditSuppressionsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListAuditSuppressionsCommand,
  serializeAws_restJson1ListAuditSuppressionsCommand,
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

export type ListAuditSuppressionsCommandInput = ListAuditSuppressionsRequest;
export type ListAuditSuppressionsCommandOutput = ListAuditSuppressionsResponse & __MetadataBearer;

/**
 * <p>
 *       Lists your Device Defender audit listings.
 *     </p>
 */
export class ListAuditSuppressionsCommand extends $Command<
  ListAuditSuppressionsCommandInput,
  ListAuditSuppressionsCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAuditSuppressionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAuditSuppressionsCommandInput, ListAuditSuppressionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListAuditSuppressionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAuditSuppressionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAuditSuppressionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAuditSuppressionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAuditSuppressionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAuditSuppressionsCommandOutput> {
    return deserializeAws_restJson1ListAuditSuppressionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
