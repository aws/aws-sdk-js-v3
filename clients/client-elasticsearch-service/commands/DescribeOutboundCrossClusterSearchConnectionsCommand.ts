import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import {
  DescribeOutboundCrossClusterSearchConnectionsRequest,
  DescribeOutboundCrossClusterSearchConnectionsResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommand,
  serializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommand,
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

export type DescribeOutboundCrossClusterSearchConnectionsCommandInput = DescribeOutboundCrossClusterSearchConnectionsRequest;
export type DescribeOutboundCrossClusterSearchConnectionsCommandOutput = DescribeOutboundCrossClusterSearchConnectionsResponse &
  __MetadataBearer;

/**
 * <p>Lists all the outbound cross-cluster search connections for a source domain.</p>
 */
export class DescribeOutboundCrossClusterSearchConnectionsCommand extends $Command<
  DescribeOutboundCrossClusterSearchConnectionsCommandInput,
  DescribeOutboundCrossClusterSearchConnectionsCommandOutput,
  ElasticsearchServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeOutboundCrossClusterSearchConnectionsCommandInput) {
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
  ): Handler<
    DescribeOutboundCrossClusterSearchConnectionsCommandInput,
    DescribeOutboundCrossClusterSearchConnectionsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "DescribeOutboundCrossClusterSearchConnectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeOutboundCrossClusterSearchConnectionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeOutboundCrossClusterSearchConnectionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeOutboundCrossClusterSearchConnectionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeOutboundCrossClusterSearchConnectionsCommandOutput> {
    return deserializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
