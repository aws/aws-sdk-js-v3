import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DeleteTapeArchiveInput, DeleteTapeArchiveOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteTapeArchiveCommand,
  serializeAws_json1_1DeleteTapeArchiveCommand,
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

export type DeleteTapeArchiveCommandInput = DeleteTapeArchiveInput;
export type DeleteTapeArchiveCommandOutput = DeleteTapeArchiveOutput & __MetadataBearer;

/**
 * <p>Deletes the specified virtual tape from the virtual tape shelf (VTS). This operation is
 *          only supported in the tape gateway type.</p>
 */
export class DeleteTapeArchiveCommand extends $Command<
  DeleteTapeArchiveCommandInput,
  DeleteTapeArchiveCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTapeArchiveCommandInput) {
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
  ): Handler<DeleteTapeArchiveCommandInput, DeleteTapeArchiveCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DeleteTapeArchiveCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTapeArchiveInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteTapeArchiveOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTapeArchiveCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteTapeArchiveCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTapeArchiveCommandOutput> {
    return deserializeAws_json1_1DeleteTapeArchiveCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
