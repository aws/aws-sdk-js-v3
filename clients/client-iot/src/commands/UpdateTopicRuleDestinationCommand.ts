import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateTopicRuleDestinationRequest, UpdateTopicRuleDestinationResponse } from "../models/models_2";
import {
  deserializeAws_restJson1UpdateTopicRuleDestinationCommand,
  serializeAws_restJson1UpdateTopicRuleDestinationCommand,
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

export interface UpdateTopicRuleDestinationCommandInput extends UpdateTopicRuleDestinationRequest {}
export interface UpdateTopicRuleDestinationCommandOutput extends UpdateTopicRuleDestinationResponse, __MetadataBearer {}

/**
 * <p>Updates a topic rule destination. You use this to change the status, endpoint URL, or
 *          confirmation URL of the destination.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateTopicRuleDestination</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateTopicRuleDestinationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateTopicRuleDestinationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateTopicRuleDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTopicRuleDestinationCommandInput} for command's `input` shape.
 * @see {@link UpdateTopicRuleDestinationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateTopicRuleDestinationCommand extends $Command<
  UpdateTopicRuleDestinationCommandInput,
  UpdateTopicRuleDestinationCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateTopicRuleDestinationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTopicRuleDestinationCommandInput, UpdateTopicRuleDestinationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "UpdateTopicRuleDestinationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTopicRuleDestinationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateTopicRuleDestinationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateTopicRuleDestinationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateTopicRuleDestinationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateTopicRuleDestinationCommandOutput> {
    return deserializeAws_restJson1UpdateTopicRuleDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
