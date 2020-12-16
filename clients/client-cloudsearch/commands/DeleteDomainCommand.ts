import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DeleteDomainRequest, DeleteDomainResponse } from "../models/models_0";
import { deserializeAws_queryDeleteDomainCommand, serializeAws_queryDeleteDomainCommand } from "../protocols/Aws_query";
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

export type DeleteDomainCommandInput = DeleteDomainRequest;
export type DeleteDomainCommandOutput = DeleteDomainResponse & __MetadataBearer;

/**
 * <p>Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information,
 *       see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/deleting-domains.html" target="_blank">Deleting a Search  Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
 */
export class DeleteDomainCommand extends $Command<
  DeleteDomainCommandInput,
  DeleteDomainCommandOutput,
  CloudSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDomainCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDomainCommandInput, DeleteDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DeleteDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDomainRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDomainResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteDomainCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDomainCommandOutput> {
    return deserializeAws_queryDeleteDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
