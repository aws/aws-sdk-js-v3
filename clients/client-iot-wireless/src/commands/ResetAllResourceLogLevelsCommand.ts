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
  ResetAllResourceLogLevelsRequest,
  ResetAllResourceLogLevelsRequestFilterSensitiveLog,
  ResetAllResourceLogLevelsResponse,
  ResetAllResourceLogLevelsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ResetAllResourceLogLevelsCommand,
  serializeAws_restJson1ResetAllResourceLogLevelsCommand,
} from "../protocols/Aws_restJson1";

export interface ResetAllResourceLogLevelsCommandInput extends ResetAllResourceLogLevelsRequest {}
export interface ResetAllResourceLogLevelsCommandOutput extends ResetAllResourceLogLevelsResponse, __MetadataBearer {}

/**
 * <p>Removes the log-level overrides for all resources; both wireless devices and wireless gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ResetAllResourceLogLevelsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ResetAllResourceLogLevelsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new ResetAllResourceLogLevelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetAllResourceLogLevelsCommandInput} for command's `input` shape.
 * @see {@link ResetAllResourceLogLevelsCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 */
export class ResetAllResourceLogLevelsCommand extends $Command<
  ResetAllResourceLogLevelsCommandInput,
  ResetAllResourceLogLevelsCommandOutput,
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

  constructor(readonly input: ResetAllResourceLogLevelsCommandInput) {
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
  ): Handler<ResetAllResourceLogLevelsCommandInput, ResetAllResourceLogLevelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ResetAllResourceLogLevelsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "ResetAllResourceLogLevelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResetAllResourceLogLevelsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ResetAllResourceLogLevelsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResetAllResourceLogLevelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ResetAllResourceLogLevelsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ResetAllResourceLogLevelsCommandOutput> {
    return deserializeAws_restJson1ResetAllResourceLogLevelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
