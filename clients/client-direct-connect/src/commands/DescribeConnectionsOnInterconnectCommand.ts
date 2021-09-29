import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { Connections, DescribeConnectionsOnInterconnectRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeConnectionsOnInterconnectCommand,
  serializeAws_json1_1DescribeConnectionsOnInterconnectCommand,
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

export interface DescribeConnectionsOnInterconnectCommandInput extends DescribeConnectionsOnInterconnectRequest {}
export interface DescribeConnectionsOnInterconnectCommandOutput extends Connections, __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>Deprecated. Use <a>DescribeHostedConnections</a> instead.</p>
 *          <p>Lists the connections that have been provisioned on the specified interconnect.</p>
 *          <note>
 *             <p>Intended for use by Direct Connect Partners only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeConnectionsOnInterconnectCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeConnectionsOnInterconnectCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeConnectionsOnInterconnectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConnectionsOnInterconnectCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectionsOnInterconnectCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeConnectionsOnInterconnectCommand extends $Command<
  DescribeConnectionsOnInterconnectCommandInput,
  DescribeConnectionsOnInterconnectCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeConnectionsOnInterconnectCommandInput) {
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
  ): Handler<DescribeConnectionsOnInterconnectCommandInput, DescribeConnectionsOnInterconnectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DescribeConnectionsOnInterconnectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeConnectionsOnInterconnectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Connections.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeConnectionsOnInterconnectCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeConnectionsOnInterconnectCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConnectionsOnInterconnectCommandOutput> {
    return deserializeAws_json1_1DescribeConnectionsOnInterconnectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
