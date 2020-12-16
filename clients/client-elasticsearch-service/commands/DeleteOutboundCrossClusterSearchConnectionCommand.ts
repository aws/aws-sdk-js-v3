import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import {
  DeleteOutboundCrossClusterSearchConnectionRequest,
  DeleteOutboundCrossClusterSearchConnectionResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommand,
  serializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommand,
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

export type DeleteOutboundCrossClusterSearchConnectionCommandInput = DeleteOutboundCrossClusterSearchConnectionRequest;
export type DeleteOutboundCrossClusterSearchConnectionCommandOutput = DeleteOutboundCrossClusterSearchConnectionResponse &
  __MetadataBearer;

/**
 * <p>Allows the source domain owner to delete an existing outbound cross-cluster search connection.</p>
 */
export class DeleteOutboundCrossClusterSearchConnectionCommand extends $Command<
  DeleteOutboundCrossClusterSearchConnectionCommandInput,
  DeleteOutboundCrossClusterSearchConnectionCommandOutput,
  ElasticsearchServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteOutboundCrossClusterSearchConnectionCommandInput) {
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
    DeleteOutboundCrossClusterSearchConnectionCommandInput,
    DeleteOutboundCrossClusterSearchConnectionCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "DeleteOutboundCrossClusterSearchConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteOutboundCrossClusterSearchConnectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteOutboundCrossClusterSearchConnectionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteOutboundCrossClusterSearchConnectionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteOutboundCrossClusterSearchConnectionCommandOutput> {
    return deserializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
