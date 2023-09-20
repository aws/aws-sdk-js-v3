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

import { UpdateVTLDeviceTypeInput, UpdateVTLDeviceTypeOutput } from "../models/models_0";
import { de_UpdateVTLDeviceTypeCommand, se_UpdateVTLDeviceTypeCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateVTLDeviceTypeCommand}.
 */
export interface UpdateVTLDeviceTypeCommandInput extends UpdateVTLDeviceTypeInput {}
/**
 * @public
 *
 * The output of {@link UpdateVTLDeviceTypeCommand}.
 */
export interface UpdateVTLDeviceTypeCommandOutput extends UpdateVTLDeviceTypeOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates the type of medium changer in a tape gateway. When you activate a tape gateway,
 *          you select a medium changer type for the tape gateway. This operation enables you to select
 *          a different type of medium changer after a tape gateway is activated. This operation is
 *          only supported in the tape gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateVTLDeviceTypeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateVTLDeviceTypeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // UpdateVTLDeviceTypeInput
 *   VTLDeviceARN: "STRING_VALUE", // required
 *   DeviceType: "STRING_VALUE", // required
 * };
 * const command = new UpdateVTLDeviceTypeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVTLDeviceTypeOutput
 * //   VTLDeviceARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateVTLDeviceTypeCommandInput - {@link UpdateVTLDeviceTypeCommandInput}
 * @returns {@link UpdateVTLDeviceTypeCommandOutput}
 * @see {@link UpdateVTLDeviceTypeCommandInput} for command's `input` shape.
 * @see {@link UpdateVTLDeviceTypeCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 * @example To update a VTL device type
 * ```javascript
 * // Updates the type of medium changer in a gateway-VTL after a gateway-VTL is activated.
 * const input = {
 *   "DeviceType": "Medium Changer",
 *   "VTLDeviceARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/device/AMZN_SGW-1FAD4876_MEDIACHANGER_00001"
 * };
 * const command = new UpdateVTLDeviceTypeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "VTLDeviceARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/device/AMZN_SGW-1FAD4876_MEDIACHANGER_00001"
 * }
 * *\/
 * // example id: to-update-a-vtl-device-type-1472153012967
 * ```
 *
 */
export class UpdateVTLDeviceTypeCommand extends $Command<
  UpdateVTLDeviceTypeCommandInput,
  UpdateVTLDeviceTypeCommandOutput,
  StorageGatewayClientResolvedConfig
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
  constructor(readonly input: UpdateVTLDeviceTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateVTLDeviceTypeCommandInput, UpdateVTLDeviceTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateVTLDeviceTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "UpdateVTLDeviceTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StorageGateway_20130630",
        operation: "UpdateVTLDeviceType",
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
  private serialize(input: UpdateVTLDeviceTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateVTLDeviceTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateVTLDeviceTypeCommandOutput> {
    return de_UpdateVTLDeviceTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
