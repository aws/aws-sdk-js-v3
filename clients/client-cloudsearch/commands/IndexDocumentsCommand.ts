import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { IndexDocumentsRequest, IndexDocumentsResponse } from "../models/models_0";
import {
  deserializeAws_queryIndexDocumentsCommand,
  serializeAws_queryIndexDocumentsCommand,
} from "../protocols/Aws_query";
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

export type IndexDocumentsCommandInput = IndexDocumentsRequest;
export type IndexDocumentsCommandOutput = IndexDocumentsResponse & __MetadataBearer;

/**
 * <p>Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is  <code>RequiresIndexDocuments</code>.</p>
 */
export class IndexDocumentsCommand extends $Command<
  IndexDocumentsCommandInput,
  IndexDocumentsCommandOutput,
  CloudSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: IndexDocumentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<IndexDocumentsCommandInput, IndexDocumentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "IndexDocumentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: IndexDocumentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: IndexDocumentsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: IndexDocumentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryIndexDocumentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<IndexDocumentsCommandOutput> {
    return deserializeAws_queryIndexDocumentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
