import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { UpdateVirtualInterfaceAttributesRequest, VirtualInterface } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateVirtualInterfaceAttributesCommand,
  serializeAws_json1_1UpdateVirtualInterfaceAttributesCommand,
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

export type UpdateVirtualInterfaceAttributesCommandInput = UpdateVirtualInterfaceAttributesRequest;
export type UpdateVirtualInterfaceAttributesCommandOutput = VirtualInterface & __MetadataBearer;

/**
 * <p>Updates the specified attributes of the specified virtual private interface.</p>
 *          <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to
 *       the underlying physical connection if it wasn't updated to support jumbo frames. Updating
 *       the connection disrupts network connectivity for all virtual interfaces associated with
 *       the connection for up to 30 seconds. To check whether your connection supports jumbo
 *       frames, call <a>DescribeConnections</a>. To check whether your virtual q
 *       interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
 */
export class UpdateVirtualInterfaceAttributesCommand extends $Command<
  UpdateVirtualInterfaceAttributesCommandInput,
  UpdateVirtualInterfaceAttributesCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateVirtualInterfaceAttributesCommandInput) {
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
  ): Handler<UpdateVirtualInterfaceAttributesCommandInput, UpdateVirtualInterfaceAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "UpdateVirtualInterfaceAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateVirtualInterfaceAttributesRequest.filterSensitiveLog,
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
    input: UpdateVirtualInterfaceAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateVirtualInterfaceAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateVirtualInterfaceAttributesCommandOutput> {
    return deserializeAws_json1_1UpdateVirtualInterfaceAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
