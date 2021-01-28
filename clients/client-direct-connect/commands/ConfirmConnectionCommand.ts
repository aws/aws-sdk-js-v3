import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { ConfirmConnectionRequest, ConfirmConnectionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ConfirmConnectionCommand,
  serializeAws_json1_1ConfirmConnectionCommand,
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

export type ConfirmConnectionCommandInput = ConfirmConnectionRequest;
export type ConfirmConnectionCommandOutput = ConfirmConnectionResponse & __MetadataBearer;

/**
 * <p>Confirms the creation of the specified hosted connection on an interconnect.</p>
 *          <p>Upon creation, the hosted connection is initially in the <code>Ordering</code> state, and
 *       remains in this state until the owner confirms creation of the hosted connection.</p>
 */
export class ConfirmConnectionCommand extends $Command<
  ConfirmConnectionCommandInput,
  ConfirmConnectionCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ConfirmConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ConfirmConnectionCommandInput, ConfirmConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "ConfirmConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ConfirmConnectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ConfirmConnectionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ConfirmConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ConfirmConnectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ConfirmConnectionCommandOutput> {
    return deserializeAws_json1_1ConfirmConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
