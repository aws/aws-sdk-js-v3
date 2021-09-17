import { KafkaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaConnectClient";
import { DescribeConnectorRequest, DescribeConnectorResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeConnectorCommand,
  serializeAws_restJson1DescribeConnectorCommand,
} from "../protocols/Aws_restJson1";
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

export interface DescribeConnectorCommandInput extends DescribeConnectorRequest {}
export interface DescribeConnectorCommandOutput extends DescribeConnectorResponse, __MetadataBearer {}

/**
 * <p>Returns summary information about the connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, DescribeConnectorCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, DescribeConnectorCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * const client = new KafkaConnectClient(config);
 * const command = new DescribeConnectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConnectorCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectorCommandOutput} for command's `response` shape.
 * @see {@link KafkaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeConnectorCommand extends $Command<
  DescribeConnectorCommandInput,
  DescribeConnectorCommandOutput,
  KafkaConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeConnectorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConnectorCommandInput, DescribeConnectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaConnectClient";
    const commandName = "DescribeConnectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeConnectorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeConnectorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeConnectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeConnectorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeConnectorCommandOutput> {
    return deserializeAws_restJson1DescribeConnectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
