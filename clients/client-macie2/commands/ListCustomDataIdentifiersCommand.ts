import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { ListCustomDataIdentifiersRequest, ListCustomDataIdentifiersResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListCustomDataIdentifiersCommand,
  serializeAws_restJson1ListCustomDataIdentifiersCommand,
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

export type ListCustomDataIdentifiersCommandInput = ListCustomDataIdentifiersRequest;
export type ListCustomDataIdentifiersCommandOutput = ListCustomDataIdentifiersResponse & __MetadataBearer;

/**
 * <p>Retrieves a subset of information about all the custom data identifiers for an account.</p>
 */
export class ListCustomDataIdentifiersCommand extends $Command<
  ListCustomDataIdentifiersCommandInput,
  ListCustomDataIdentifiersCommandOutput,
  Macie2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCustomDataIdentifiersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCustomDataIdentifiersCommandInput, ListCustomDataIdentifiersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "ListCustomDataIdentifiersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCustomDataIdentifiersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCustomDataIdentifiersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCustomDataIdentifiersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListCustomDataIdentifiersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCustomDataIdentifiersCommandOutput> {
    return deserializeAws_restJson1ListCustomDataIdentifiersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
