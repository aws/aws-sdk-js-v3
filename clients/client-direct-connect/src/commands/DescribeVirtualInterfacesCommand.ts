// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import {
  DescribeVirtualInterfacesRequest,
  DescribeVirtualInterfacesRequestFilterSensitiveLog,
  VirtualInterfaces,
  VirtualInterfacesFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeVirtualInterfacesCommand,
  serializeAws_json1_1DescribeVirtualInterfacesCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeVirtualInterfacesCommandInput extends DescribeVirtualInterfacesRequest {}
export interface DescribeVirtualInterfacesCommandOutput extends VirtualInterfaces, __MetadataBearer {}

/**
 * <p>Displays all virtual interfaces for an Amazon Web Services account. Virtual interfaces deleted fewer
 *       than 15 minutes before you make the request are also returned. If you specify a
 *       connection ID, only the virtual interfaces associated with the connection are returned.
 *       If you specify a virtual interface ID, then only a single virtual interface is returned.</p>
 *          <p>A virtual interface (VLAN) transmits the traffic between the Direct Connect location and the customer network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeVirtualInterfacesCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeVirtualInterfacesCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeVirtualInterfacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVirtualInterfacesCommandInput} for command's `input` shape.
 * @see {@link DescribeVirtualInterfacesCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 */
export class DescribeVirtualInterfacesCommand extends $Command<
  DescribeVirtualInterfacesCommandInput,
  DescribeVirtualInterfacesCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVirtualInterfacesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DescribeVirtualInterfacesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVirtualInterfacesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: VirtualInterfacesFilterSensitiveLog,
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
