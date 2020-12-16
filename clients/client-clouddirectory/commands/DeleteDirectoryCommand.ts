import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { DeleteDirectoryRequest, DeleteDirectoryResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteDirectoryCommand,
  serializeAws_restJson1DeleteDirectoryCommand,
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

export type DeleteDirectoryCommandInput = DeleteDirectoryRequest;
export type DeleteDirectoryCommandOutput = DeleteDirectoryResponse & __MetadataBearer;

/**
 * <p>Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme
 *         caution
 *         when deleting directories.</p>
 */
export class DeleteDirectoryCommand extends $Command<
  DeleteDirectoryCommandInput,
  DeleteDirectoryCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDirectoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDirectoryCommandInput, DeleteDirectoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "DeleteDirectoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDirectoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDirectoryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDirectoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteDirectoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDirectoryCommandOutput> {
    return deserializeAws_restJson1DeleteDirectoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
