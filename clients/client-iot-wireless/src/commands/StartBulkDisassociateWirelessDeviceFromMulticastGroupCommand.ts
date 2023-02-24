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
  StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest,
  StartBulkDisassociateWirelessDeviceFromMulticastGroupRequestFilterSensitiveLog,
  StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse,
  StartBulkDisassociateWirelessDeviceFromMulticastGroupResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand,
  serializeAws_restJson1StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand,
} from "../protocols/Aws_restJson1";

export interface StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput
  extends StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest {}
export interface StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput
  extends StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse,
    __MetadataBearer {}

/**
 * <p>Starts a bulk disassociatin of all qualifying wireless devices from a multicast group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput} for command's `input` shape.
 * @see {@link StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 */
export class StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand extends $Command<
  StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput,
  StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput,
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

  constructor(readonly input: StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput) {
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
  ): Handler<
    StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput,
    StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartBulkDisassociateWirelessDeviceFromMulticastGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartBulkDisassociateWirelessDeviceFromMulticastGroupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput> {
    return deserializeAws_restJson1StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
