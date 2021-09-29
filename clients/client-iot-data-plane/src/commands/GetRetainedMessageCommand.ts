import { IoTDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTDataPlaneClient";
import { GetRetainedMessageRequest, GetRetainedMessageResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetRetainedMessageCommand,
  serializeAws_restJson1GetRetainedMessageCommand,
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

export interface GetRetainedMessageCommandInput extends GetRetainedMessageRequest {}
export interface GetRetainedMessageCommandOutput extends GetRetainedMessageResponse, __MetadataBearer {}

/**
 * <p>Gets the details of a single retained message for the specified topic.</p>
 *          <p>This action returns the message payload of the retained message, which can
 *       incur messaging costs. To list only the topic names of the retained messages, call
 *       <a href="/iot/latest/developerguide/API_iotdata_ListRetainedMessages.html">ListRetainedMessages</a>.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleethubfordevicemanagement.html#awsiotfleethubfordevicemanagement-actions-as-permissions">GetRetainedMessage</a> action.</p>
 *          <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/#Messaging">IoT Core
 *       pricing - Messaging</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, GetRetainedMessageCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, GetRetainedMessageCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
 * const client = new IoTDataPlaneClient(config);
 * const command = new GetRetainedMessageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRetainedMessageCommandInput} for command's `input` shape.
 * @see {@link GetRetainedMessageCommandOutput} for command's `response` shape.
 * @see {@link IoTDataPlaneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetRetainedMessageCommand extends $Command<
  GetRetainedMessageCommandInput,
  GetRetainedMessageCommandOutput,
  IoTDataPlaneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRetainedMessageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTDataPlaneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRetainedMessageCommandInput, GetRetainedMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTDataPlaneClient";
    const commandName = "GetRetainedMessageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRetainedMessageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRetainedMessageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRetainedMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetRetainedMessageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRetainedMessageCommandOutput> {
    return deserializeAws_restJson1GetRetainedMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
