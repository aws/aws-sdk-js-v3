import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import {
  DescribeInboundCrossClusterSearchConnectionsRequest,
  DescribeInboundCrossClusterSearchConnectionsResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommand,
  serializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommand,
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

export type DescribeInboundCrossClusterSearchConnectionsCommandInput = DescribeInboundCrossClusterSearchConnectionsRequest;
export type DescribeInboundCrossClusterSearchConnectionsCommandOutput = DescribeInboundCrossClusterSearchConnectionsResponse &
  __MetadataBearer;

/**
 * <p>Lists all the inbound cross-cluster search connections for a destination domain.</p>
 */
export class DescribeInboundCrossClusterSearchConnectionsCommand extends $Command<
  DescribeInboundCrossClusterSearchConnectionsCommandInput,
  DescribeInboundCrossClusterSearchConnectionsCommandOutput,
  ElasticsearchServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInboundCrossClusterSearchConnectionsCommandInput) {
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
    DescribeInboundCrossClusterSearchConnectionsCommandInput,
    DescribeInboundCrossClusterSearchConnectionsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "DescribeInboundCrossClusterSearchConnectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInboundCrossClusterSearchConnectionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeInboundCrossClusterSearchConnectionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeInboundCrossClusterSearchConnectionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInboundCrossClusterSearchConnectionsCommandOutput> {
    return deserializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
