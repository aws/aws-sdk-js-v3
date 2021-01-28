import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { CreatePrivateVirtualInterfaceRequest, VirtualInterface } from "../models/models_0";
import {
  deserializeAws_json1_1CreatePrivateVirtualInterfaceCommand,
  serializeAws_json1_1CreatePrivateVirtualInterfaceCommand,
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

export type CreatePrivateVirtualInterfaceCommandInput = CreatePrivateVirtualInterfaceRequest;
export type CreatePrivateVirtualInterfaceCommandOutput = VirtualInterface & __MetadataBearer;

/**
 * <p>Creates a private virtual interface. A virtual interface is the VLAN that transports AWS Direct Connect traffic.
 *       A private virtual interface can be connected to either a Direct Connect gateway or a Virtual Private Gateway (VGW).
 *       Connecting the private virtual interface to a Direct Connect gateway enables the possibility for connecting to multiple
 *       VPCs, including VPCs in different AWS Regions. Connecting the private virtual interface to a VGW only
 *       provides access to a single VPC within the same Region.</p>
 *          <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to
 *       the underlying physical connection if it wasn't updated to support jumbo frames. Updating
 *       the connection disrupts network connectivity for all virtual interfaces associated with
 *       the connection for up to 30 seconds. To check whether your connection supports jumbo
 *       frames, call <a>DescribeConnections</a>. To check whether your virtual
 *       interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
 */
export class CreatePrivateVirtualInterfaceCommand extends $Command<
  CreatePrivateVirtualInterfaceCommandInput,
  CreatePrivateVirtualInterfaceCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePrivateVirtualInterfaceCommandInput) {
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
  ): Handler<CreatePrivateVirtualInterfaceCommandInput, CreatePrivateVirtualInterfaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "CreatePrivateVirtualInterfaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePrivateVirtualInterfaceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: VirtualInterface.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePrivateVirtualInterfaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreatePrivateVirtualInterfaceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreatePrivateVirtualInterfaceCommandOutput> {
    return deserializeAws_json1_1CreatePrivateVirtualInterfaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
