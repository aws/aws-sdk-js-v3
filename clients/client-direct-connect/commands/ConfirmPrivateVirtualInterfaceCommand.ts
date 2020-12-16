import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { ConfirmPrivateVirtualInterfaceRequest, ConfirmPrivateVirtualInterfaceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand,
  serializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand,
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

export type ConfirmPrivateVirtualInterfaceCommandInput = ConfirmPrivateVirtualInterfaceRequest;
export type ConfirmPrivateVirtualInterfaceCommandOutput = ConfirmPrivateVirtualInterfaceResponse & __MetadataBearer;

/**
 * <p>Accepts ownership of a private virtual interface created by another AWS account.</p>
 *          <p>After the virtual interface owner makes this call, the virtual interface is
 *       created and attached to the specified virtual private gateway or Direct Connect gateway, and is
 *       made available to handle traffic.</p>
 */
export class ConfirmPrivateVirtualInterfaceCommand extends $Command<
  ConfirmPrivateVirtualInterfaceCommandInput,
  ConfirmPrivateVirtualInterfaceCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ConfirmPrivateVirtualInterfaceCommandInput) {
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
  ): Handler<ConfirmPrivateVirtualInterfaceCommandInput, ConfirmPrivateVirtualInterfaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "ConfirmPrivateVirtualInterfaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ConfirmPrivateVirtualInterfaceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ConfirmPrivateVirtualInterfaceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ConfirmPrivateVirtualInterfaceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ConfirmPrivateVirtualInterfaceCommandOutput> {
    return deserializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
