import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { GetDomainSuggestionsRequest, GetDomainSuggestionsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetDomainSuggestionsCommand,
  serializeAws_json1_1GetDomainSuggestionsCommand,
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

export type GetDomainSuggestionsCommandInput = GetDomainSuggestionsRequest;
export type GetDomainSuggestionsCommandOutput = GetDomainSuggestionsResponse & __MetadataBearer;

/**
 * <p>The GetDomainSuggestions operation returns a list of suggested domain names.</p>
 */
export class GetDomainSuggestionsCommand extends $Command<
  GetDomainSuggestionsCommandInput,
  GetDomainSuggestionsCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDomainSuggestionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53DomainsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDomainSuggestionsCommandInput, GetDomainSuggestionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "GetDomainSuggestionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDomainSuggestionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDomainSuggestionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDomainSuggestionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDomainSuggestionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDomainSuggestionsCommandOutput> {
    return deserializeAws_json1_1GetDomainSuggestionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
