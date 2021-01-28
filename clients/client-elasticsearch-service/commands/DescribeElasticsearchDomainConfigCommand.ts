import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import {
  DescribeElasticsearchDomainConfigRequest,
  DescribeElasticsearchDomainConfigResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeElasticsearchDomainConfigCommand,
  serializeAws_restJson1DescribeElasticsearchDomainConfigCommand,
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

export type DescribeElasticsearchDomainConfigCommandInput = DescribeElasticsearchDomainConfigRequest;
export type DescribeElasticsearchDomainConfigCommandOutput = DescribeElasticsearchDomainConfigResponse &
  __MetadataBearer;

/**
 * <p>Provides cluster configuration information about the specified Elasticsearch domain, such as the state, creation date, update version, and update date for cluster options.</p>
 */
export class DescribeElasticsearchDomainConfigCommand extends $Command<
  DescribeElasticsearchDomainConfigCommandInput,
  DescribeElasticsearchDomainConfigCommandOutput,
  ElasticsearchServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeElasticsearchDomainConfigCommandInput) {
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
  ): Handler<DescribeElasticsearchDomainConfigCommandInput, DescribeElasticsearchDomainConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "DescribeElasticsearchDomainConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeElasticsearchDomainConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeElasticsearchDomainConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeElasticsearchDomainConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeElasticsearchDomainConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeElasticsearchDomainConfigCommandOutput> {
    return deserializeAws_restJson1DescribeElasticsearchDomainConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
