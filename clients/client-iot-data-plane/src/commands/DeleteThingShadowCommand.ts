import { IoTDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTDataPlaneClient";
import { DeleteThingShadowRequest, DeleteThingShadowResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteThingShadowCommand,
  serializeAws_restJson1DeleteThingShadowCommand,
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

export interface DeleteThingShadowCommandInput extends DeleteThingShadowRequest {}
export interface DeleteThingShadowCommandOutput extends DeleteThingShadowResponse, __MetadataBearer {}

/**
 * <p>Deletes the shadow for the specified thing.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThingShadow</a> action.</p>
 *          <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_DeleteThingShadow.html">DeleteThingShadow</a> in the IoT Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, DeleteThingShadowCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, DeleteThingShadowCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
 * const client = new IoTDataPlaneClient(config);
 * const command = new DeleteThingShadowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteThingShadowCommandInput} for command's `input` shape.
 * @see {@link DeleteThingShadowCommandOutput} for command's `response` shape.
 * @see {@link IoTDataPlaneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteThingShadowCommand extends $Command<
  DeleteThingShadowCommandInput,
  DeleteThingShadowCommandOutput,
  IoTDataPlaneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteThingShadowCommandInput) {
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
  ): Handler<DeleteThingShadowCommandInput, DeleteThingShadowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTDataPlaneClient";
    const commandName = "DeleteThingShadowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteThingShadowRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteThingShadowResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteThingShadowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteThingShadowCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteThingShadowCommandOutput> {
    return deserializeAws_restJson1DeleteThingShadowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
