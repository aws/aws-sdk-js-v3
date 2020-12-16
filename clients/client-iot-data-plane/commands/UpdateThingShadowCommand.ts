import { IoTDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTDataPlaneClient";
import { UpdateThingShadowRequest, UpdateThingShadowResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateThingShadowCommand,
  serializeAws_restJson1UpdateThingShadowCommand,
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

export type UpdateThingShadowCommandInput = UpdateThingShadowRequest;
export type UpdateThingShadowCommandOutput = UpdateThingShadowResponse & __MetadataBearer;

/**
 * <p>Updates the shadow for the specified thing.</p>
 *          <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_UpdateThingShadow.html">UpdateThingShadow</a> in the
 *         AWS IoT Developer Guide.</p>
 */
export class UpdateThingShadowCommand extends $Command<
  UpdateThingShadowCommandInput,
  UpdateThingShadowCommandOutput,
  IoTDataPlaneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateThingShadowCommandInput) {
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
  ): Handler<UpdateThingShadowCommandInput, UpdateThingShadowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTDataPlaneClient";
    const commandName = "UpdateThingShadowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateThingShadowRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateThingShadowResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateThingShadowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateThingShadowCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateThingShadowCommandOutput> {
    return deserializeAws_restJson1UpdateThingShadowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
