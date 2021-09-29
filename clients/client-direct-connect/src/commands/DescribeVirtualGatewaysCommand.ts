import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { VirtualGateways } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeVirtualGatewaysCommand,
  serializeAws_json1_1DescribeVirtualGatewaysCommand,
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

export interface DescribeVirtualGatewaysCommandInput {}
export interface DescribeVirtualGatewaysCommandOutput extends VirtualGateways, __MetadataBearer {}

/**
 * <p>Lists the virtual private gateways owned by the account.</p>
 *          <p>You can create one or more Direct Connect private virtual interfaces linked to a virtual private gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeVirtualGatewaysCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeVirtualGatewaysCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeVirtualGatewaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVirtualGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeVirtualGatewaysCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeVirtualGatewaysCommand extends $Command<
  DescribeVirtualGatewaysCommandInput,
  DescribeVirtualGatewaysCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeVirtualGatewaysCommandInput) {
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
  ): Handler<DescribeVirtualGatewaysCommandInput, DescribeVirtualGatewaysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DescribeVirtualGatewaysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: VirtualGateways.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeVirtualGatewaysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeVirtualGatewaysCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeVirtualGatewaysCommandOutput> {
    return deserializeAws_json1_1DescribeVirtualGatewaysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
