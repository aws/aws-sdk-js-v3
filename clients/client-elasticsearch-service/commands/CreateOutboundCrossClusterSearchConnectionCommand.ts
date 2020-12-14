import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import {
  CreateOutboundCrossClusterSearchConnectionRequest,
  CreateOutboundCrossClusterSearchConnectionResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommand,
  serializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommand,
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

export type CreateOutboundCrossClusterSearchConnectionCommandInput = CreateOutboundCrossClusterSearchConnectionRequest;
export type CreateOutboundCrossClusterSearchConnectionCommandOutput = CreateOutboundCrossClusterSearchConnectionResponse &
  __MetadataBearer;

/**
 * <p>Creates a new cross-cluster search connection from a source domain to a destination domain.</p>
 */
export class CreateOutboundCrossClusterSearchConnectionCommand extends $Command<
  CreateOutboundCrossClusterSearchConnectionCommandInput,
  CreateOutboundCrossClusterSearchConnectionCommandOutput,
  ElasticsearchServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateOutboundCrossClusterSearchConnectionCommandInput) {
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
    CreateOutboundCrossClusterSearchConnectionCommandInput,
    CreateOutboundCrossClusterSearchConnectionCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "CreateOutboundCrossClusterSearchConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateOutboundCrossClusterSearchConnectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateOutboundCrossClusterSearchConnectionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateOutboundCrossClusterSearchConnectionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateOutboundCrossClusterSearchConnectionCommandOutput> {
    return deserializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
