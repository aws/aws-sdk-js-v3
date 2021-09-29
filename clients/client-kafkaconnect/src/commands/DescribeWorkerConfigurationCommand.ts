import { KafkaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaConnectClient";
import { DescribeWorkerConfigurationRequest, DescribeWorkerConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeWorkerConfigurationCommand,
  serializeAws_restJson1DescribeWorkerConfigurationCommand,
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

export interface DescribeWorkerConfigurationCommandInput extends DescribeWorkerConfigurationRequest {}
export interface DescribeWorkerConfigurationCommandOutput
  extends DescribeWorkerConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about a worker configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, DescribeWorkerConfigurationCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, DescribeWorkerConfigurationCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * const client = new KafkaConnectClient(config);
 * const command = new DescribeWorkerConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWorkerConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkerConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KafkaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeWorkerConfigurationCommand extends $Command<
  DescribeWorkerConfigurationCommandInput,
  DescribeWorkerConfigurationCommandOutput,
  KafkaConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeWorkerConfigurationCommandInput) {
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
  ): Handler<DescribeWorkerConfigurationCommandInput, DescribeWorkerConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaConnectClient";
    const commandName = "DescribeWorkerConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeWorkerConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeWorkerConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeWorkerConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeWorkerConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeWorkerConfigurationCommandOutput> {
    return deserializeAws_restJson1DescribeWorkerConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
