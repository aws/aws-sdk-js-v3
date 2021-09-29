import { KafkaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaConnectClient";
import { UpdateConnectorRequest, UpdateConnectorResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateConnectorCommand,
  serializeAws_restJson1UpdateConnectorCommand,
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

export interface UpdateConnectorCommandInput extends UpdateConnectorRequest {}
export interface UpdateConnectorCommandOutput extends UpdateConnectorResponse, __MetadataBearer {}

/**
 * <p>Updates the specified connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, UpdateConnectorCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, UpdateConnectorCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * const client = new KafkaConnectClient(config);
 * const command = new UpdateConnectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConnectorCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectorCommandOutput} for command's `response` shape.
 * @see {@link KafkaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateConnectorCommand extends $Command<
  UpdateConnectorCommandInput,
  UpdateConnectorCommandOutput,
  KafkaConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateConnectorCommandInput) {
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
  ): Handler<UpdateConnectorCommandInput, UpdateConnectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaConnectClient";
    const commandName = "UpdateConnectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateConnectorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateConnectorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateConnectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateConnectorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateConnectorCommandOutput> {
    return deserializeAws_restJson1UpdateConnectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
