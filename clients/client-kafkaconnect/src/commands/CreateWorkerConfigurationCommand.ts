import { KafkaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaConnectClient";
import { CreateWorkerConfigurationRequest, CreateWorkerConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateWorkerConfigurationCommand,
  serializeAws_restJson1CreateWorkerConfigurationCommand,
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

export interface CreateWorkerConfigurationCommandInput extends CreateWorkerConfigurationRequest {}
export interface CreateWorkerConfigurationCommandOutput extends CreateWorkerConfigurationResponse, __MetadataBearer {}

/**
 * <p>Creates a worker configuration using the specified properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, CreateWorkerConfigurationCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, CreateWorkerConfigurationCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * const client = new KafkaConnectClient(config);
 * const command = new CreateWorkerConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorkerConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateWorkerConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KafkaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateWorkerConfigurationCommand extends $Command<
  CreateWorkerConfigurationCommandInput,
  CreateWorkerConfigurationCommandOutput,
  KafkaConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateWorkerConfigurationCommandInput) {
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
  ): Handler<CreateWorkerConfigurationCommandInput, CreateWorkerConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaConnectClient";
    const commandName = "CreateWorkerConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateWorkerConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateWorkerConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateWorkerConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateWorkerConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateWorkerConfigurationCommandOutput> {
    return deserializeAws_restJson1CreateWorkerConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
