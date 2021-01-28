import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { DeleteRecipeVersionRequest, DeleteRecipeVersionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteRecipeVersionCommand,
  serializeAws_restJson1DeleteRecipeVersionCommand,
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

export type DeleteRecipeVersionCommandInput = DeleteRecipeVersionRequest;
export type DeleteRecipeVersionCommandOutput = DeleteRecipeVersionResponse & __MetadataBearer;

/**
 * <p>Deletes a single version of an AWS Glue DataBrew recipe.</p>
 */
export class DeleteRecipeVersionCommand extends $Command<
  DeleteRecipeVersionCommandInput,
  DeleteRecipeVersionCommandOutput,
  DataBrewClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteRecipeVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataBrewClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteRecipeVersionCommandInput, DeleteRecipeVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "DeleteRecipeVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRecipeVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteRecipeVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteRecipeVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteRecipeVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteRecipeVersionCommandOutput> {
    return deserializeAws_restJson1DeleteRecipeVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
