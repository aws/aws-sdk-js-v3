import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListResourceDefinitionVersionsRequest, ListResourceDefinitionVersionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListResourceDefinitionVersionsCommand,
  serializeAws_restJson1ListResourceDefinitionVersionsCommand,
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

export type ListResourceDefinitionVersionsCommandInput = ListResourceDefinitionVersionsRequest;
export type ListResourceDefinitionVersionsCommandOutput = ListResourceDefinitionVersionsResponse & __MetadataBearer;

/**
 * Lists the versions of a resource definition.
 */
export class ListResourceDefinitionVersionsCommand extends $Command<
  ListResourceDefinitionVersionsCommandInput,
  ListResourceDefinitionVersionsCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListResourceDefinitionVersionsCommandInput) {
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
  ): Handler<ListResourceDefinitionVersionsCommandInput, ListResourceDefinitionVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "ListResourceDefinitionVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListResourceDefinitionVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListResourceDefinitionVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListResourceDefinitionVersionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListResourceDefinitionVersionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListResourceDefinitionVersionsCommandOutput> {
    return deserializeAws_restJson1ListResourceDefinitionVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
