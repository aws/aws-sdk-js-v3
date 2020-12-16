import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { SearchContactsRequest, SearchContactsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SearchContactsCommand,
  serializeAws_json1_1SearchContactsCommand,
} from "../protocols/Aws_json1_1";
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

export type SearchContactsCommandInput = SearchContactsRequest;
export type SearchContactsCommandOutput = SearchContactsResponse & __MetadataBearer;

/**
 * <p>Searches contacts and lists the ones that meet a set of filter and sort
 *          criteria.</p>
 */
export class SearchContactsCommand extends $Command<
  SearchContactsCommandInput,
  SearchContactsCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SearchContactsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchContactsCommandInput, SearchContactsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "SearchContactsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchContactsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SearchContactsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchContactsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SearchContactsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchContactsCommandOutput> {
    return deserializeAws_json1_1SearchContactsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
