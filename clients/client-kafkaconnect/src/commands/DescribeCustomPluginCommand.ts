import { KafkaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaConnectClient";
import { DescribeCustomPluginRequest, DescribeCustomPluginResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeCustomPluginCommand,
  serializeAws_restJson1DescribeCustomPluginCommand,
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

export interface DescribeCustomPluginCommandInput extends DescribeCustomPluginRequest {}
export interface DescribeCustomPluginCommandOutput extends DescribeCustomPluginResponse, __MetadataBearer {}

/**
 * <p>A summary description of the custom plugin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, DescribeCustomPluginCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, DescribeCustomPluginCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * const client = new KafkaConnectClient(config);
 * const command = new DescribeCustomPluginCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCustomPluginCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomPluginCommandOutput} for command's `response` shape.
 * @see {@link KafkaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeCustomPluginCommand extends $Command<
  DescribeCustomPluginCommandInput,
  DescribeCustomPluginCommandOutput,
  KafkaConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCustomPluginCommandInput) {
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
  ): Handler<DescribeCustomPluginCommandInput, DescribeCustomPluginCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaConnectClient";
    const commandName = "DescribeCustomPluginCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCustomPluginRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCustomPluginResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCustomPluginCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeCustomPluginCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCustomPluginCommandOutput> {
    return deserializeAws_restJson1DescribeCustomPluginCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
