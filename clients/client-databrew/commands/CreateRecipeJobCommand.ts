import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { CreateRecipeJobRequest, CreateRecipeJobResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateRecipeJobCommand,
  serializeAws_restJson1CreateRecipeJobCommand,
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

export type CreateRecipeJobCommandInput = CreateRecipeJobRequest;
export type CreateRecipeJobCommandOutput = CreateRecipeJobResponse & __MetadataBearer;

/**
 * <p>Creates a new job for an existing AWS Glue DataBrew recipe in the current AWS account.
 *             You can create a standalone job using either a project, or a combination of a recipe and
 *             a dataset.</p>
 */
export class CreateRecipeJobCommand extends $Command<
  CreateRecipeJobCommandInput,
  CreateRecipeJobCommandOutput,
  DataBrewClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateRecipeJobCommandInput) {
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
  ): Handler<CreateRecipeJobCommandInput, CreateRecipeJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "CreateRecipeJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRecipeJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateRecipeJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRecipeJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateRecipeJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRecipeJobCommandOutput> {
    return deserializeAws_restJson1CreateRecipeJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
