import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { CreateTransitVirtualInterfaceRequest, CreateTransitVirtualInterfaceResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateTransitVirtualInterfaceCommand,
  serializeAws_json1_1CreateTransitVirtualInterfaceCommand,
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

export type CreateTransitVirtualInterfaceCommandInput = CreateTransitVirtualInterfaceRequest;
export type CreateTransitVirtualInterfaceCommandOutput = CreateTransitVirtualInterfaceResult & __MetadataBearer;

/**
 * <p>Creates a transit virtual interface. A transit virtual interface should be used to access one or more transit gateways associated with Direct Connect gateways. A transit virtual interface enables the connection of multiple VPCs attached to a transit gateway to a Direct Connect gateway.</p>
 *          <important>
 *             <p>If you associate your transit gateway with one or more Direct Connect gateways, the Autonomous System Number (ASN) used by the transit gateway and the Direct Connect gateway must be different. For example, if you use the default ASN 64512 for both your the transit gateway and Direct Connect gateway, the association request fails.</p>
 *          </important>
 *          <p>Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause an update to
 *       the underlying physical connection if it wasn't updated to support jumbo frames. Updating
 *       the connection disrupts network connectivity for all virtual interfaces associated with
 *       the connection for up to 30 seconds. To check whether your connection supports jumbo
 *       frames, call <a>DescribeConnections</a>. To check whether your virtual
 *       interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
 */
export class CreateTransitVirtualInterfaceCommand extends $Command<
  CreateTransitVirtualInterfaceCommandInput,
  CreateTransitVirtualInterfaceCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTransitVirtualInterfaceCommandInput) {
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
  ): Handler<CreateTransitVirtualInterfaceCommandInput, CreateTransitVirtualInterfaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "CreateTransitVirtualInterfaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTransitVirtualInterfaceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTransitVirtualInterfaceResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTransitVirtualInterfaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateTransitVirtualInterfaceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTransitVirtualInterfaceCommandOutput> {
    return deserializeAws_json1_1CreateTransitVirtualInterfaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
