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
  StartBulkAssociateWirelessDeviceWithMulticastGroupRequest,
  StartBulkAssociateWirelessDeviceWithMulticastGroupRequestFilterSensitiveLog,
  StartBulkAssociateWirelessDeviceWithMulticastGroupResponse,
  StartBulkAssociateWirelessDeviceWithMulticastGroupResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1StartBulkAssociateWirelessDeviceWithMulticastGroupCommand,
  serializeAws_restJson1StartBulkAssociateWirelessDeviceWithMulticastGroupCommand,
} from "../protocols/Aws_restJson1";

export interface StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput
  extends StartBulkAssociateWirelessDeviceWithMulticastGroupRequest {}
export interface StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput
  extends StartBulkAssociateWirelessDeviceWithMulticastGroupResponse,
    __MetadataBearer {}

/**
 * <p>Starts a bulk association of all qualifying wireless devices with a multicast group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, StartBulkAssociateWirelessDeviceWithMulticastGroupCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, StartBulkAssociateWirelessDeviceWithMulticastGroupCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new StartBulkAssociateWirelessDeviceWithMulticastGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput} for command's `input` shape.
 * @see {@link StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 */
export class StartBulkAssociateWirelessDeviceWithMulticastGroupCommand extends $Command<
  StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput,
  StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput,
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

  constructor(readonly input: StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput) {
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
    StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput,
    StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        StartBulkAssociateWirelessDeviceWithMulticastGroupCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "StartBulkAssociateWirelessDeviceWithMulticastGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartBulkAssociateWirelessDeviceWithMulticastGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartBulkAssociateWirelessDeviceWithMulticastGroupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1StartBulkAssociateWirelessDeviceWithMulticastGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput> {
    return deserializeAws_restJson1StartBulkAssociateWirelessDeviceWithMulticastGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
