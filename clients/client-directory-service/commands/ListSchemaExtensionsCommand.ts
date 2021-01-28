import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { ListSchemaExtensionsRequest, ListSchemaExtensionsResult } from "../models/models_0";
import {
  deserializeAws_json1_1ListSchemaExtensionsCommand,
  serializeAws_json1_1ListSchemaExtensionsCommand,
} from "../protocols/Aws_json1_1";
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

export type ListSchemaExtensionsCommandInput = ListSchemaExtensionsRequest;
export type ListSchemaExtensionsCommandOutput = ListSchemaExtensionsResult & __MetadataBearer;

/**
 * <p>Lists all schema extensions applied to a Microsoft AD Directory.</p>
 */
export class ListSchemaExtensionsCommand extends $Command<
  ListSchemaExtensionsCommandInput,
  ListSchemaExtensionsCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSchemaExtensionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSchemaExtensionsCommandInput, ListSchemaExtensionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "ListSchemaExtensionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSchemaExtensionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSchemaExtensionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSchemaExtensionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListSchemaExtensionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSchemaExtensionsCommandOutput> {
    return deserializeAws_json1_1ListSchemaExtensionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
