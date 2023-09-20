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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  IoT1ClickDevicesServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickDevicesServiceClient";
import { InvokeDeviceMethodRequest, InvokeDeviceMethodResponse } from "../models/models_0";
import { de_InvokeDeviceMethodCommand, se_InvokeDeviceMethodCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link InvokeDeviceMethodCommand}.
 */
export interface InvokeDeviceMethodCommandInput extends InvokeDeviceMethodRequest {}
/**
 * @public
 *
 * The output of {@link InvokeDeviceMethodCommand}.
 */
export interface InvokeDeviceMethodCommandOutput extends InvokeDeviceMethodResponse, __MetadataBearer {}

/**
 * @public
 * <p>Given a device ID, issues a request to invoke a named device method (with possible
 *  parameters). See the "Example POST" code snippet below.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, InvokeDeviceMethodCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, InvokeDeviceMethodCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const input = { // InvokeDeviceMethodRequest
 *   DeviceId: "STRING_VALUE", // required
 *   DeviceMethod: { // DeviceMethod
 *     DeviceType: "STRING_VALUE",
 *     MethodName: "STRING_VALUE",
 *   },
 *   DeviceMethodParameters: "STRING_VALUE",
 * };
 * const command = new InvokeDeviceMethodCommand(input);
 * const response = await client.send(command);
 * // { // InvokeDeviceMethodResponse
 * //   DeviceMethodResponse: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param InvokeDeviceMethodCommandInput - {@link InvokeDeviceMethodCommandInput}
 * @returns {@link InvokeDeviceMethodCommandOutput}
 * @see {@link InvokeDeviceMethodCommandInput} for command's `input` shape.
 * @see {@link InvokeDeviceMethodCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for IoT1ClickDevicesServiceClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *
 * @throws {@link RangeNotSatisfiableException} (client fault)
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * @throws {@link IoT1ClickDevicesServiceServiceException}
 * <p>Base exception class for all service exceptions from IoT1ClickDevicesService service.</p>
 *
 */
export class InvokeDeviceMethodCommand extends $Command<
  InvokeDeviceMethodCommandInput,
  InvokeDeviceMethodCommandOutput,
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
  constructor(readonly input: InvokeDeviceMethodCommandInput) {
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
  ): Handler<InvokeDeviceMethodCommandInput, InvokeDeviceMethodCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, InvokeDeviceMethodCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoT1ClickDevicesServiceClient";
    const commandName = "InvokeDeviceMethodCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IoT1ClickDevicesService",
        operation: "InvokeDeviceMethod",
      },
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
  private serialize(input: InvokeDeviceMethodCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_InvokeDeviceMethodCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InvokeDeviceMethodCommandOutput> {
    return de_InvokeDeviceMethodCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
