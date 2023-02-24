// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  ResetResourceLogLevelRequest,
  ResetResourceLogLevelRequestFilterSensitiveLog,
  ResetResourceLogLevelResponse,
  ResetResourceLogLevelResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ResetResourceLogLevelCommand,
  serializeAws_restJson1ResetResourceLogLevelCommand,
} from "../protocols/Aws_restJson1";

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
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 */
export class ResetResourceLogLevelCommand extends $Command<
  ResetResourceLogLevelCommandInput,
  ResetResourceLogLevelCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ResetResourceLogLevelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "ResetResourceLogLevelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResetResourceLogLevelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ResetResourceLogLevelResponseFilterSensitiveLog,
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
