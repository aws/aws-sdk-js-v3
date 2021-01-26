import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import {
  RejectInboundCrossClusterSearchConnectionRequest,
  RejectInboundCrossClusterSearchConnectionResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommand,
  serializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommand,
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

export type RejectInboundCrossClusterSearchConnectionCommandInput = RejectInboundCrossClusterSearchConnectionRequest;
export type RejectInboundCrossClusterSearchConnectionCommandOutput = RejectInboundCrossClusterSearchConnectionResponse &
  __MetadataBearer;

/**
 * <p>Allows the destination domain owner to reject an inbound cross-cluster search connection request.</p>
 */
export class RejectInboundCrossClusterSearchConnectionCommand extends $Command<
  RejectInboundCrossClusterSearchConnectionCommandInput,
  RejectInboundCrossClusterSearchConnectionCommandOutput,
  ElasticsearchServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RejectInboundCrossClusterSearchConnectionCommandInput) {
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
    RejectInboundCrossClusterSearchConnectionCommandInput,
    RejectInboundCrossClusterSearchConnectionCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "RejectInboundCrossClusterSearchConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RejectInboundCrossClusterSearchConnectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RejectInboundCrossClusterSearchConnectionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RejectInboundCrossClusterSearchConnectionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RejectInboundCrossClusterSearchConnectionCommandOutput> {
    return deserializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
