import {
  CloudSearchDomainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudSearchDomainClient";
import { SuggestRequest, SuggestResponse } from "../models/models_0";
import {
  deserializeAws_restJson1SuggestCommand,
  serializeAws_restJson1SuggestCommand,
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

export type SuggestCommandInput = SuggestRequest;
export type SuggestCommandOutput = SuggestResponse & __MetadataBearer;

/**
 * <p>Retrieves autocomplete suggestions for a partial query string. You can use suggestions enable you to display likely matches before users finish typing. In Amazon CloudSearch, suggestions are based on the contents of a particular text field. When you request suggestions, Amazon CloudSearch finds all of the documents whose values in the suggester field start with the specified query string. The beginning of the field must match the query string to be considered a match.</p>
 *       <p>For more information about configuring suggesters and retrieving suggestions, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html">Getting Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 *
 *       <p>The endpoint for submitting <code>Suggest</code> requests is domain-specific and requires the <code>--endpoint-url</code> option. You submit suggest requests to a domain's search endpoint. To get the search endpoint for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. The endpoints are also available on the domain dashboard in the Amazon CloudSearch console.</p>
 */
export class SuggestCommand extends $Command<
  SuggestCommandInput,
  SuggestCommandOutput,
  CloudSearchDomainClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SuggestCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchDomainClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SuggestCommandInput, SuggestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchDomainClient";
    const commandName = "SuggestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SuggestRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SuggestResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SuggestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SuggestCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SuggestCommandOutput> {
    return deserializeAws_restJson1SuggestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
