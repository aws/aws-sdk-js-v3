import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { StartServerRequest } from "../models/models_0";
import {
  deserializeAws_json1_1StartServerCommand,
  serializeAws_json1_1StartServerCommand,
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

export type StartServerCommandInput = StartServerRequest;
export type StartServerCommandOutput = __MetadataBearer;

/**
 * <p>Changes the state of a file transfer protocol-enabled server from <code>OFFLINE</code> to
 *         <code>ONLINE</code>. It has no impact on a server that is already <code>ONLINE</code>. An
 *         <code>ONLINE</code> server can accept and process file transfer jobs.</p>
 *
 *          <p>The state of <code>STARTING</code> indicates that the server is in an intermediate state,
 *       either not fully able to respond, or not fully online. The values of <code>START_FAILED</code>
 *       can indicate an error condition.</p>
 *
 *          <p>No response is returned from this call.</p>
 */
export class StartServerCommand extends $Command<
  StartServerCommandInput,
  StartServerCommandOutput,
  TransferClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartServerCommandInput) {
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
  ): Handler<StartServerCommandInput, StartServerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "StartServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartServerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartServerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartServerCommandOutput> {
    return deserializeAws_json1_1StartServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
