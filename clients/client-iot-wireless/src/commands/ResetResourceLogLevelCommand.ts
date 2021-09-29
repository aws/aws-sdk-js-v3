import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { ResetResourceLogLevelRequest, ResetResourceLogLevelResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ResetResourceLogLevelCommand,
  serializeAws_restJson1ResetResourceLogLevelCommand,
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

export interface ResetResourceLogLevelCommandInput extends ResetResourceLogLevelRequest {}
export interface ResetResourceLogLevelCommandOutput extends ResetResourceLogLevelResponse, __MetadataBearer {}

/**
 * <p>Removes the log-level override, if any, for a specific resource-ID and resource-type. It can be used for
 *             a wireless device or a wireless gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ResetResourceLogLevelCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ResetResourceLogLevelCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new ResetResourceLogLevelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetResourceLogLevelCommandInput} for command's `input` shape.
 * @see {@link ResetResourceLogLevelCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ResetResourceLogLevelCommand extends $Command<
  ResetResourceLogLevelCommandInput,
  ResetResourceLogLevelCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResetResourceLogLevelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResetResourceLogLevelCommandInput, ResetResourceLogLevelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "ResetResourceLogLevelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResetResourceLogLevelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ResetResourceLogLevelResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResetResourceLogLevelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ResetResourceLogLevelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResetResourceLogLevelCommandOutput> {
    return deserializeAws_restJson1ResetResourceLogLevelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
