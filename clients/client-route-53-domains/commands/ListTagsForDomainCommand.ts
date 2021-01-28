import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { ListTagsForDomainRequest, ListTagsForDomainResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListTagsForDomainCommand,
  serializeAws_json1_1ListTagsForDomainCommand,
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

export type ListTagsForDomainCommandInput = ListTagsForDomainRequest;
export type ListTagsForDomainCommandOutput = ListTagsForDomainResponse & __MetadataBearer;

/**
 * <p>This operation returns all of the tags that are associated with the specified domain.</p>
 * 		       <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
 */
export class ListTagsForDomainCommand extends $Command<
  ListTagsForDomainCommandInput,
  ListTagsForDomainCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTagsForDomainCommandInput) {
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
  ): Handler<ListTagsForDomainCommandInput, ListTagsForDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "ListTagsForDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTagsForDomainRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTagsForDomainResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTagsForDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTagsForDomainCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTagsForDomainCommandOutput> {
    return deserializeAws_json1_1ListTagsForDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
