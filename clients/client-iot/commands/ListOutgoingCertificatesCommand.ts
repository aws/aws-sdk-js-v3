import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListOutgoingCertificatesRequest, ListOutgoingCertificatesResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListOutgoingCertificatesCommand,
  serializeAws_restJson1ListOutgoingCertificatesCommand,
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

export type ListOutgoingCertificatesCommandInput = ListOutgoingCertificatesRequest;
export type ListOutgoingCertificatesCommandOutput = ListOutgoingCertificatesResponse & __MetadataBearer;

/**
 * <p>Lists certificates that are being transferred but not yet accepted.</p>
 */
export class ListOutgoingCertificatesCommand extends $Command<
  ListOutgoingCertificatesCommandInput,
  ListOutgoingCertificatesCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListOutgoingCertificatesCommandInput) {
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
  ): Handler<ListOutgoingCertificatesCommandInput, ListOutgoingCertificatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListOutgoingCertificatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListOutgoingCertificatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListOutgoingCertificatesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListOutgoingCertificatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListOutgoingCertificatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOutgoingCertificatesCommandOutput> {
    return deserializeAws_restJson1ListOutgoingCertificatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
