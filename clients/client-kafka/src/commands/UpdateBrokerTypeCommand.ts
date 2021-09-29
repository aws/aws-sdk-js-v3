import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { UpdateBrokerTypeRequest, UpdateBrokerTypeResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateBrokerTypeCommand,
  serializeAws_restJson1UpdateBrokerTypeCommand,
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

export interface UpdateBrokerTypeCommandInput extends UpdateBrokerTypeRequest {}
export interface UpdateBrokerTypeCommandOutput extends UpdateBrokerTypeResponse, __MetadataBearer {}

/**
 * <p>Updates EC2 instance type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateBrokerTypeCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateBrokerTypeCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new UpdateBrokerTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBrokerTypeCommandInput} for command's `input` shape.
 * @see {@link UpdateBrokerTypeCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateBrokerTypeCommand extends $Command<
  UpdateBrokerTypeCommandInput,
  UpdateBrokerTypeCommandOutput,
  KafkaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateBrokerTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateBrokerTypeCommandInput, UpdateBrokerTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "UpdateBrokerTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateBrokerTypeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateBrokerTypeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateBrokerTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateBrokerTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateBrokerTypeCommandOutput> {
    return deserializeAws_restJson1UpdateBrokerTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
