import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { ListGraphqlApisRequest, ListGraphqlApisResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListGraphqlApisCommand,
  serializeAws_restJson1ListGraphqlApisCommand,
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

export type ListGraphqlApisCommandInput = ListGraphqlApisRequest;
export type ListGraphqlApisCommandOutput = ListGraphqlApisResponse & __MetadataBearer;

/**
 * <p>Lists your GraphQL APIs.</p>
 */
export class ListGraphqlApisCommand extends $Command<
  ListGraphqlApisCommandInput,
  ListGraphqlApisCommandOutput,
  AppSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListGraphqlApisCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGraphqlApisCommandInput, ListGraphqlApisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "ListGraphqlApisCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListGraphqlApisRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListGraphqlApisResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGraphqlApisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListGraphqlApisCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGraphqlApisCommandOutput> {
    return deserializeAws_restJson1ListGraphqlApisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
