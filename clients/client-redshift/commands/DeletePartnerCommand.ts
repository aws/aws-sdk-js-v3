import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { PartnerIntegrationInputMessage, PartnerIntegrationOutputMessage } from "../models/models_0";
import {
  deserializeAws_queryDeletePartnerCommand,
  serializeAws_queryDeletePartnerCommand,
} from "../protocols/Aws_query";
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

export interface DeletePartnerCommandInput extends PartnerIntegrationInputMessage {}
export interface DeletePartnerCommandOutput extends PartnerIntegrationOutputMessage, __MetadataBearer {}

/**
 * <p>Deletes a partner integration from a cluster. Data can still flow to the cluster until the integration is deleted at the partner's website.</p>
 */
export class DeletePartnerCommand extends $Command<
  DeletePartnerCommandInput,
  DeletePartnerCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePartnerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePartnerCommandInput, DeletePartnerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DeletePartnerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PartnerIntegrationInputMessage.filterSensitiveLog,
      outputFilterSensitiveLog: PartnerIntegrationOutputMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePartnerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeletePartnerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePartnerCommandOutput> {
    return deserializeAws_queryDeletePartnerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
