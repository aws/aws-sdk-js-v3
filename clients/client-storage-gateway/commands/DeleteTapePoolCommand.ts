import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DeleteTapePoolInput, DeleteTapePoolOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteTapePoolCommand,
  serializeAws_json1_1DeleteTapePoolCommand,
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

export type DeleteTapePoolCommandInput = DeleteTapePoolInput;
export type DeleteTapePoolCommandOutput = DeleteTapePoolOutput & __MetadataBearer;

/**
 * <p>Delete a custom tape pool. A custom tape pool can only be deleted if there are no tapes
 *          in the pool and if there are no automatic tape creation policies that reference the custom
 *          tape pool.</p>
 */
export class DeleteTapePoolCommand extends $Command<
  DeleteTapePoolCommandInput,
  DeleteTapePoolCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTapePoolCommandInput) {
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
  ): Handler<DeleteTapePoolCommandInput, DeleteTapePoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DeleteTapePoolCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTapePoolInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteTapePoolOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTapePoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteTapePoolCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTapePoolCommandOutput> {
    return deserializeAws_json1_1DeleteTapePoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
