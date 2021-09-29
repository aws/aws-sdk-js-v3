import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { DeregisterStreamConsumerInput } from "../models/models_0";
import {
  deserializeAws_json1_1DeregisterStreamConsumerCommand,
  serializeAws_json1_1DeregisterStreamConsumerCommand,
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

export interface DeregisterStreamConsumerCommandInput extends DeregisterStreamConsumerInput {}
export interface DeregisterStreamConsumerCommandOutput extends __MetadataBearer {}

/**
 * <p>To deregister a consumer, provide its ARN. Alternatively, you can provide the ARN of
 *             the data stream and the name you gave the consumer when you registered it. You may also
 *             provide all three parameters, as long as they don't conflict with each other. If you
 *             don't know the name or ARN of the consumer that you want to deregister, you can use the
 *                 <a>ListStreamConsumers</a> operation to get a list of the descriptions of
 *             all the consumers that are currently registered with a given data stream. The
 *             description of a consumer contains its name and ARN.</p>
 *         <p>This operation has a limit of five transactions per second per stream.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, DeregisterStreamConsumerCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, DeregisterStreamConsumerCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const command = new DeregisterStreamConsumerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterStreamConsumerCommandInput} for command's `input` shape.
 * @see {@link DeregisterStreamConsumerCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeregisterStreamConsumerCommand extends $Command<
  DeregisterStreamConsumerCommandInput,
  DeregisterStreamConsumerCommandOutput,
  KinesisClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeregisterStreamConsumerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeregisterStreamConsumerCommandInput, DeregisterStreamConsumerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "DeregisterStreamConsumerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterStreamConsumerInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeregisterStreamConsumerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeregisterStreamConsumerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeregisterStreamConsumerCommandOutput> {
    return deserializeAws_json1_1DeregisterStreamConsumerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
