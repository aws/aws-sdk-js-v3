import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { SearchAvailablePhoneNumbersRequest, SearchAvailablePhoneNumbersResponse } from "../models/models_1";
import {
  deserializeAws_restJson1SearchAvailablePhoneNumbersCommand,
  serializeAws_restJson1SearchAvailablePhoneNumbersCommand,
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

export type SearchAvailablePhoneNumbersCommandInput = SearchAvailablePhoneNumbersRequest;
export type SearchAvailablePhoneNumbersCommandOutput = SearchAvailablePhoneNumbersResponse & __MetadataBearer;

/**
 * <p>Searches phone numbers that can be ordered.</p>
 */
export class SearchAvailablePhoneNumbersCommand extends $Command<
  SearchAvailablePhoneNumbersCommandInput,
  SearchAvailablePhoneNumbersCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SearchAvailablePhoneNumbersCommandInput) {
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
  ): Handler<SearchAvailablePhoneNumbersCommandInput, SearchAvailablePhoneNumbersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "SearchAvailablePhoneNumbersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchAvailablePhoneNumbersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SearchAvailablePhoneNumbersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchAvailablePhoneNumbersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SearchAvailablePhoneNumbersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SearchAvailablePhoneNumbersCommandOutput> {
    return deserializeAws_restJson1SearchAvailablePhoneNumbersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
