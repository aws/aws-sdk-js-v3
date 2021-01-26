import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DeleteThemeAliasRequest, DeleteThemeAliasResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteThemeAliasCommand,
  serializeAws_restJson1DeleteThemeAliasCommand,
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

export type DeleteThemeAliasCommandInput = DeleteThemeAliasRequest;
export type DeleteThemeAliasCommandOutput = DeleteThemeAliasResponse & __MetadataBearer;

/**
 * <p>Deletes the version of the theme that the specified theme alias points to.
 * 			If you provide a specific alias, you delete the version of the theme
 * 			that the alias points to.</p>
 */
export class DeleteThemeAliasCommand extends $Command<
  DeleteThemeAliasCommandInput,
  DeleteThemeAliasCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteThemeAliasCommandInput) {
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
  ): Handler<DeleteThemeAliasCommandInput, DeleteThemeAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DeleteThemeAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteThemeAliasRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteThemeAliasResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteThemeAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteThemeAliasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteThemeAliasCommandOutput> {
    return deserializeAws_restJson1DeleteThemeAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
