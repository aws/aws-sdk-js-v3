import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { StopServerRequest } from "../models/models_0";
import {
  deserializeAws_json1_1StopServerCommand,
  serializeAws_json1_1StopServerCommand,
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

export type StopServerCommandInput = StopServerRequest;
export type StopServerCommandOutput = __MetadataBearer;

/**
 * <p>Changes the state of a file transfer protocol-enabled server from <code>ONLINE</code> to
 *         <code>OFFLINE</code>. An <code>OFFLINE</code> server cannot accept and process file transfer
 *       jobs. Information tied to your server, such as server and user properties, are not affected by
 *       stopping your server.</p>
 *
 *          <note>
 *             <p>Stopping the server will not reduce or impact your file transfer protocol endpoint
 *         billing; you must delete the server to stop being billed.</p>
 *          </note>
 *
 *          <p>The state of <code>STOPPING</code> indicates that the server is in an intermediate state,
 *       either not fully able to respond, or not fully offline. The values of <code>STOP_FAILED</code>
 *       can indicate an error condition.</p>
 *
 *          <p>No response is returned from this call.</p>
 */
export class StopServerCommand extends $Command<
  StopServerCommandInput,
  StopServerCommandOutput,
  TransferClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopServerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TransferClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopServerCommandInput, StopServerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "StopServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopServerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopServerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopServerCommandOutput> {
    return deserializeAws_json1_1StopServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
