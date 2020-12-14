import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DeleteTemplateAliasRequest, DeleteTemplateAliasResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteTemplateAliasCommand,
  serializeAws_restJson1DeleteTemplateAliasCommand,
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

export type DeleteTemplateAliasCommandInput = DeleteTemplateAliasRequest;
export type DeleteTemplateAliasCommandOutput = DeleteTemplateAliasResponse & __MetadataBearer;

/**
 * <p>Deletes the item that the specified template alias points to. If you provide a specific
 * 			alias, you delete the version of the template that the alias points to.</p>
 */
export class DeleteTemplateAliasCommand extends $Command<
  DeleteTemplateAliasCommandInput,
  DeleteTemplateAliasCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTemplateAliasCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteTemplateAliasCommandInput, DeleteTemplateAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DeleteTemplateAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTemplateAliasRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteTemplateAliasResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTemplateAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteTemplateAliasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTemplateAliasCommandOutput> {
    return deserializeAws_restJson1DeleteTemplateAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
