// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  IoT1ClickDevicesServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickDevicesServiceClient";
import { UnclaimDeviceRequest, UnclaimDeviceResponse } from "../models/models_0";
import { de_UnclaimDeviceCommand, se_UnclaimDeviceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UnclaimDeviceCommand}.
 */
export interface UnclaimDeviceCommandInput extends UnclaimDeviceRequest {}
/**
 * @public
 *
 * The output of {@link UnclaimDeviceCommand}.
 */
export interface UnclaimDeviceCommandOutput extends UnclaimDeviceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Disassociates a device from your AWS account using its device ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, UnclaimDeviceCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, UnclaimDeviceCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const input = { // UnclaimDeviceRequest
 *   DeviceId: "STRING_VALUE", // required
 * };
 * const command = new UnclaimDeviceCommand(input);
 * const response = await client.send(command);
 * // { // UnclaimDeviceResponse
 * //   State: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UnclaimDeviceCommandInput - {@link UnclaimDeviceCommandInput}
 * @returns {@link UnclaimDeviceCommandOutput}
 * @see {@link UnclaimDeviceCommandInput} for command's `input` shape.
 * @see {@link UnclaimDeviceCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for IoT1ClickDevicesServiceClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * @throws {@link IoT1ClickDevicesServiceServiceException}
 * <p>Base exception class for all service exceptions from IoT1ClickDevicesService service.</p>
 *
 */
export class UnclaimDeviceCommand extends $Command<
  UnclaimDeviceCommandInput,
  UnclaimDeviceCommandOutput,
  IoT1ClickDevicesServiceClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: UnclaimDeviceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoT1ClickDevicesServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UnclaimDeviceCommandInput, UnclaimDeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UnclaimDeviceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoT1ClickDevicesServiceClient";
    const commandName = "UnclaimDeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UnclaimDeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UnclaimDeviceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnclaimDeviceCommandOutput> {
    return de_UnclaimDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
