import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { CancelRetrievalInput, CancelRetrievalOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CancelRetrievalCommand,
  serializeAws_json1_1CancelRetrievalCommand,
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

export type CancelRetrievalCommandInput = CancelRetrievalInput;
export type CancelRetrievalCommandOutput = CancelRetrievalOutput & __MetadataBearer;

/**
 * <p>Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after
 *          the retrieval process is initiated. The virtual tape is returned to the VTS. This operation
 *          is only supported in the tape gateway type.</p>
 */
export class CancelRetrievalCommand extends $Command<
  CancelRetrievalCommandInput,
  CancelRetrievalCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelRetrievalCommandInput) {
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
  ): Handler<CancelRetrievalCommandInput, CancelRetrievalCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "CancelRetrievalCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelRetrievalInput.filterSensitiveLog,
      outputFilterSensitiveLog: CancelRetrievalOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelRetrievalCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CancelRetrievalCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelRetrievalCommandOutput> {
    return deserializeAws_json1_1CancelRetrievalCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
