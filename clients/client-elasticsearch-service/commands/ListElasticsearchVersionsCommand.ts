import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import { ListElasticsearchVersionsRequest, ListElasticsearchVersionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListElasticsearchVersionsCommand,
  serializeAws_restJson1ListElasticsearchVersionsCommand,
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

export type ListElasticsearchVersionsCommandInput = ListElasticsearchVersionsRequest;
export type ListElasticsearchVersionsCommandOutput = ListElasticsearchVersionsResponse & __MetadataBearer;

/**
 * <p>List all supported Elasticsearch versions</p>
 */
export class ListElasticsearchVersionsCommand extends $Command<
  ListElasticsearchVersionsCommandInput,
  ListElasticsearchVersionsCommandOutput,
  ElasticsearchServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListElasticsearchVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticsearchServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListElasticsearchVersionsCommandInput, ListElasticsearchVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "ListElasticsearchVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListElasticsearchVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListElasticsearchVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListElasticsearchVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListElasticsearchVersionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListElasticsearchVersionsCommandOutput> {
    return deserializeAws_restJson1ListElasticsearchVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
