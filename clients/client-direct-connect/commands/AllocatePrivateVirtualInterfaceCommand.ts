import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { AllocatePrivateVirtualInterfaceRequest, VirtualInterface } from "../models/models_0";
import {
  deserializeAws_json1_1AllocatePrivateVirtualInterfaceCommand,
  serializeAws_json1_1AllocatePrivateVirtualInterfaceCommand,
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

export type AllocatePrivateVirtualInterfaceCommandInput = AllocatePrivateVirtualInterfaceRequest;
export type AllocatePrivateVirtualInterfaceCommandOutput = VirtualInterface & __MetadataBearer;

/**
 * <p>Provisions a private virtual interface to be owned by the specified AWS account.</p>
 *          <p>Virtual interfaces created using this action must be confirmed by the owner using <a>ConfirmPrivateVirtualInterface</a>.
 *       Until then, the virtual interface is in the <code>Confirming</code> state and is not available to handle traffic.</p>
 */
export class AllocatePrivateVirtualInterfaceCommand extends $Command<
  AllocatePrivateVirtualInterfaceCommandInput,
  AllocatePrivateVirtualInterfaceCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AllocatePrivateVirtualInterfaceCommandInput) {
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
  ): Handler<AllocatePrivateVirtualInterfaceCommandInput, AllocatePrivateVirtualInterfaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "AllocatePrivateVirtualInterfaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AllocatePrivateVirtualInterfaceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: VirtualInterface.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AllocatePrivateVirtualInterfaceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AllocatePrivateVirtualInterfaceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AllocatePrivateVirtualInterfaceCommandOutput> {
    return deserializeAws_json1_1AllocatePrivateVirtualInterfaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
