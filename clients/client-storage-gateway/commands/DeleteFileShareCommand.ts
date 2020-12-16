import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DeleteFileShareInput, DeleteFileShareOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteFileShareCommand,
  serializeAws_json1_1DeleteFileShareCommand,
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

export type DeleteFileShareCommandInput = DeleteFileShareInput;
export type DeleteFileShareCommandOutput = DeleteFileShareOutput & __MetadataBearer;

/**
 * <p>Deletes a file share from a file gateway. This operation is only supported for file
 *          gateways.</p>
 */
export class DeleteFileShareCommand extends $Command<
  DeleteFileShareCommandInput,
  DeleteFileShareCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFileShareCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFileShareCommandInput, DeleteFileShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DeleteFileShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFileShareInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteFileShareOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFileShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteFileShareCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFileShareCommandOutput> {
    return deserializeAws_json1_1DeleteFileShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
