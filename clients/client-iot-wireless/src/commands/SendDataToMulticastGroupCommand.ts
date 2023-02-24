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
  SendDataToMulticastGroupRequest,
  SendDataToMulticastGroupRequestFilterSensitiveLog,
  SendDataToMulticastGroupResponse,
  SendDataToMulticastGroupResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1SendDataToMulticastGroupCommand,
  serializeAws_restJson1SendDataToMulticastGroupCommand,
} from "../protocols/Aws_restJson1";

export interface SendDataToMulticastGroupCommandInput extends SendDataToMulticastGroupRequest {}
export interface SendDataToMulticastGroupCommandOutput extends SendDataToMulticastGroupResponse, __MetadataBearer {}

/**
 * <p>Sends the specified data to a multicast group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, SendDataToMulticastGroupCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, SendDataToMulticastGroupCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new SendDataToMulticastGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendDataToMulticastGroupCommandInput} for command's `input` shape.
 * @see {@link SendDataToMulticastGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 */
export class SendDataToMulticastGroupCommand extends $Command<
  SendDataToMulticastGroupCommandInput,
  SendDataToMulticastGroupCommandOutput,
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

  constructor(readonly input: SendDataToMulticastGroupCommandInput) {
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
  ): Handler<SendDataToMulticastGroupCommandInput, SendDataToMulticastGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendDataToMulticastGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "SendDataToMulticastGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendDataToMulticastGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SendDataToMulticastGroupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendDataToMulticastGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SendDataToMulticastGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendDataToMulticastGroupCommandOutput> {
    return deserializeAws_restJson1SendDataToMulticastGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
