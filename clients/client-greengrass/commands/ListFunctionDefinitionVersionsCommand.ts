import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListFunctionDefinitionVersionsRequest, ListFunctionDefinitionVersionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListFunctionDefinitionVersionsCommand,
  serializeAws_restJson1ListFunctionDefinitionVersionsCommand,
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

export type ListFunctionDefinitionVersionsCommandInput = ListFunctionDefinitionVersionsRequest;
export type ListFunctionDefinitionVersionsCommandOutput = ListFunctionDefinitionVersionsResponse & __MetadataBearer;

/**
 * Lists the versions of a Lambda function definition.
 */
export class ListFunctionDefinitionVersionsCommand extends $Command<
  ListFunctionDefinitionVersionsCommandInput,
  ListFunctionDefinitionVersionsCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFunctionDefinitionVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFunctionDefinitionVersionsCommandInput, ListFunctionDefinitionVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "ListFunctionDefinitionVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFunctionDefinitionVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFunctionDefinitionVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListFunctionDefinitionVersionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListFunctionDefinitionVersionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListFunctionDefinitionVersionsCommandOutput> {
    return deserializeAws_restJson1ListFunctionDefinitionVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
