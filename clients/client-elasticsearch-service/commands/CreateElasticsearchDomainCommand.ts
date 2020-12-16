import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import { CreateElasticsearchDomainRequest, CreateElasticsearchDomainResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateElasticsearchDomainCommand,
  serializeAws_restJson1CreateElasticsearchDomainCommand,
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

export type CreateElasticsearchDomainCommandInput = CreateElasticsearchDomainRequest;
export type CreateElasticsearchDomainCommandOutput = CreateElasticsearchDomainResponse & __MetadataBearer;

/**
 * <p>Creates a new Elasticsearch domain. For more information,
 *           see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains" target="_blank">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>.</p>
 */
export class CreateElasticsearchDomainCommand extends $Command<
  CreateElasticsearchDomainCommandInput,
  CreateElasticsearchDomainCommandOutput,
  ElasticsearchServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateElasticsearchDomainCommandInput) {
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
  ): Handler<CreateElasticsearchDomainCommandInput, CreateElasticsearchDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "CreateElasticsearchDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateElasticsearchDomainRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateElasticsearchDomainResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateElasticsearchDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateElasticsearchDomainCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateElasticsearchDomainCommandOutput> {
    return deserializeAws_restJson1CreateElasticsearchDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
