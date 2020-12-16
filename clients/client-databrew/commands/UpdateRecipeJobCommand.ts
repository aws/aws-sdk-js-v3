import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { UpdateRecipeJobRequest, UpdateRecipeJobResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateRecipeJobCommand,
  serializeAws_restJson1UpdateRecipeJobCommand,
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

export type UpdateRecipeJobCommandInput = UpdateRecipeJobRequest;
export type UpdateRecipeJobCommandOutput = UpdateRecipeJobResponse & __MetadataBearer;

/**
 * <p>Modifies the definition of an existing AWS Glue DataBrew recipe job in the current AWS
 *             account.</p>
 */
export class UpdateRecipeJobCommand extends $Command<
  UpdateRecipeJobCommandInput,
  UpdateRecipeJobCommandOutput,
  DataBrewClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateRecipeJobCommandInput) {
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
  ): Handler<UpdateRecipeJobCommandInput, UpdateRecipeJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "UpdateRecipeJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRecipeJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateRecipeJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRecipeJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateRecipeJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRecipeJobCommandOutput> {
    return deserializeAws_restJson1UpdateRecipeJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
