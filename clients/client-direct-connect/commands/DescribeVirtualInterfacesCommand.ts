import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DescribeVirtualInterfacesRequest, VirtualInterfaces } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeVirtualInterfacesCommand,
  serializeAws_json1_1DescribeVirtualInterfacesCommand,
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

export type DescribeVirtualInterfacesCommandInput = DescribeVirtualInterfacesRequest;
export type DescribeVirtualInterfacesCommandOutput = VirtualInterfaces & __MetadataBearer;

/**
 * <p>Displays all virtual interfaces for an AWS account. Virtual interfaces deleted fewer
 *       than 15 minutes before you make the request are also returned. If you specify a
 *       connection ID, only the virtual interfaces associated with the connection are returned.
 *       If you specify a virtual interface ID, then only a single virtual interface is returned.</p>
 *          <p>A virtual interface (VLAN) transmits the traffic between the AWS Direct Connect location and the customer network.</p>
 */
export class DescribeVirtualInterfacesCommand extends $Command<
  DescribeVirtualInterfacesCommandInput,
  DescribeVirtualInterfacesCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeVirtualInterfacesCommandInput) {
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
  ): Handler<DescribeVirtualInterfacesCommandInput, DescribeVirtualInterfacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DescribeVirtualInterfacesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVirtualInterfacesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: VirtualInterfaces.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeVirtualInterfacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeVirtualInterfacesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVirtualInterfacesCommandOutput> {
    return deserializeAws_json1_1DescribeVirtualInterfacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
