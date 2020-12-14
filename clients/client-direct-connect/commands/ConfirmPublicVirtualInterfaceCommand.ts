import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { ConfirmPublicVirtualInterfaceRequest, ConfirmPublicVirtualInterfaceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ConfirmPublicVirtualInterfaceCommand,
  serializeAws_json1_1ConfirmPublicVirtualInterfaceCommand,
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

export type ConfirmPublicVirtualInterfaceCommandInput = ConfirmPublicVirtualInterfaceRequest;
export type ConfirmPublicVirtualInterfaceCommandOutput = ConfirmPublicVirtualInterfaceResponse & __MetadataBearer;

/**
 * <p>Accepts ownership of a public virtual interface created by another AWS account.</p>
 *          <p>After the virtual interface owner makes this call, the specified virtual interface is
 *       created and made available to handle traffic.</p>
 */
export class ConfirmPublicVirtualInterfaceCommand extends $Command<
  ConfirmPublicVirtualInterfaceCommandInput,
  ConfirmPublicVirtualInterfaceCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ConfirmPublicVirtualInterfaceCommandInput) {
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
  ): Handler<ConfirmPublicVirtualInterfaceCommandInput, ConfirmPublicVirtualInterfaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "ConfirmPublicVirtualInterfaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ConfirmPublicVirtualInterfaceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ConfirmPublicVirtualInterfaceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ConfirmPublicVirtualInterfaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ConfirmPublicVirtualInterfaceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ConfirmPublicVirtualInterfaceCommandOutput> {
    return deserializeAws_json1_1ConfirmPublicVirtualInterfaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
