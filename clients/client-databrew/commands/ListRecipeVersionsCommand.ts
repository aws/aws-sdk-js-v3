import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { ListRecipeVersionsRequest, ListRecipeVersionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListRecipeVersionsCommand,
  serializeAws_restJson1ListRecipeVersionsCommand,
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

export type ListRecipeVersionsCommandInput = ListRecipeVersionsRequest;
export type ListRecipeVersionsCommandOutput = ListRecipeVersionsResponse & __MetadataBearer;

/**
 * <p>Lists all of the versions of a particular AWS Glue DataBrew recipe in the current AWS
 *             account.</p>
 */
export class ListRecipeVersionsCommand extends $Command<
  ListRecipeVersionsCommandInput,
  ListRecipeVersionsCommandOutput,
  DataBrewClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRecipeVersionsCommandInput) {
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
  ): Handler<ListRecipeVersionsCommandInput, ListRecipeVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "ListRecipeVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRecipeVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRecipeVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRecipeVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRecipeVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRecipeVersionsCommandOutput> {
    return deserializeAws_restJson1ListRecipeVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
