import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import {
  DeleteInboundCrossClusterSearchConnectionRequest,
  DeleteInboundCrossClusterSearchConnectionResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommand,
  serializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommand,
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

export type DeleteInboundCrossClusterSearchConnectionCommandInput = DeleteInboundCrossClusterSearchConnectionRequest;
export type DeleteInboundCrossClusterSearchConnectionCommandOutput = DeleteInboundCrossClusterSearchConnectionResponse &
  __MetadataBearer;

/**
 * <p>Allows the destination domain owner to delete an existing inbound cross-cluster search connection.</p>
 */
export class DeleteInboundCrossClusterSearchConnectionCommand extends $Command<
  DeleteInboundCrossClusterSearchConnectionCommandInput,
  DeleteInboundCrossClusterSearchConnectionCommandOutput,
  ElasticsearchServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteInboundCrossClusterSearchConnectionCommandInput) {
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
    DeleteInboundCrossClusterSearchConnectionCommandInput,
    DeleteInboundCrossClusterSearchConnectionCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "DeleteInboundCrossClusterSearchConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteInboundCrossClusterSearchConnectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteInboundCrossClusterSearchConnectionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteInboundCrossClusterSearchConnectionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteInboundCrossClusterSearchConnectionCommandOutput> {
    return deserializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
