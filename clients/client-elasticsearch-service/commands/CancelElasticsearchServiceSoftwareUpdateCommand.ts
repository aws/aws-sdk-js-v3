import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import {
  CancelElasticsearchServiceSoftwareUpdateRequest,
  CancelElasticsearchServiceSoftwareUpdateResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand,
  serializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand,
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

export type CancelElasticsearchServiceSoftwareUpdateCommandInput = CancelElasticsearchServiceSoftwareUpdateRequest;
export type CancelElasticsearchServiceSoftwareUpdateCommandOutput = CancelElasticsearchServiceSoftwareUpdateResponse &
  __MetadataBearer;

/**
 * <p>Cancels a scheduled service software update for an Amazon ES domain. You can only perform this operation before the <code>AutomatedUpdateDate</code> and when the <code>UpdateStatus</code> is in the <code>PENDING_UPDATE</code> state.</p>
 */
export class CancelElasticsearchServiceSoftwareUpdateCommand extends $Command<
  CancelElasticsearchServiceSoftwareUpdateCommandInput,
  CancelElasticsearchServiceSoftwareUpdateCommandOutput,
  ElasticsearchServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelElasticsearchServiceSoftwareUpdateCommandInput) {
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
    CancelElasticsearchServiceSoftwareUpdateCommandInput,
    CancelElasticsearchServiceSoftwareUpdateCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "CancelElasticsearchServiceSoftwareUpdateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelElasticsearchServiceSoftwareUpdateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelElasticsearchServiceSoftwareUpdateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CancelElasticsearchServiceSoftwareUpdateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelElasticsearchServiceSoftwareUpdateCommandOutput> {
    return deserializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
