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

import { DescribeVTLDevicesInput, DescribeVTLDevicesOutput } from "../models/models_0";
import { de_DescribeVTLDevicesCommand, se_DescribeVTLDevicesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeVTLDevicesCommand}.
 */
export interface DescribeVTLDevicesCommandInput extends DescribeVTLDevicesInput {}
/**
 * @public
 *
 * The output of {@link DescribeVTLDevicesCommand}.
 */
export interface DescribeVTLDevicesCommandOutput extends DescribeVTLDevicesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a description of virtual tape library (VTL) devices for the specified tape
 *          gateway. In the response, Storage Gateway returns VTL device information.</p>
 *
 *          <p>This operation is only supported in the tape gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeVTLDevicesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeVTLDevicesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeVTLDevicesInput
 *   GatewayARN: "STRING_VALUE", // required
 *   VTLDeviceARNs: [ // VTLDeviceARNs
 *     "STRING_VALUE",
 *   ],
 *   Marker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeVTLDevicesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVTLDevicesOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   VTLDevices: [ // VTLDevices
 * //     { // VTLDevice
 * //       VTLDeviceARN: "STRING_VALUE",
 * //       VTLDeviceType: "STRING_VALUE",
 * //       VTLDeviceVendor: "STRING_VALUE",
 * //       VTLDeviceProductIdentifier: "STRING_VALUE",
 * //       DeviceiSCSIAttributes: { // DeviceiSCSIAttributes
 * //         TargetARN: "STRING_VALUE",
 * //         NetworkInterfaceId: "STRING_VALUE",
 * //         NetworkInterfacePort: Number("int"),
 * //         ChapEnabled: true || false,
 * //       },
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVTLDevicesCommandInput - {@link DescribeVTLDevicesCommandInput}
 * @returns {@link DescribeVTLDevicesCommandOutput}
 * @see {@link DescribeVTLDevicesCommandInput} for command's `input` shape.
 * @see {@link DescribeVTLDevicesCommandOutput} for command's `response` shape.
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
 * @example To describe virtual tape library (VTL) devices of a single gateway
 * ```javascript
 * // Returns a description of virtual tape library (VTL) devices for the specified gateway.
 * const input = {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B",
 *   "Limit": 123,
 *   "Marker": "1",
 *   "VTLDeviceARNs": []
 * };
 * const command = new DescribeVTLDevicesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B",
 *   "Marker": "1",
 *   "VTLDevices": [
 *     {
 *       "DeviceiSCSIAttributes": {
 *         "ChapEnabled": false,
 *         "NetworkInterfaceId": "10.243.43.207",
 *         "NetworkInterfacePort": 3260,
 *         "TargetARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:sgw-1fad4876-mediachanger"
 *       },
 *       "VTLDeviceARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/device/AMZN_SGW-1FAD4876_MEDIACHANGER_00001",
 *       "VTLDeviceProductIdentifier": "L700",
 *       "VTLDeviceType": "Medium Changer",
 *       "VTLDeviceVendor": "STK"
 *     },
 *     {
 *       "DeviceiSCSIAttributes": {
 *         "ChapEnabled": false,
 *         "NetworkInterfaceId": "10.243.43.209",
 *         "NetworkInterfacePort": 3260,
 *         "TargetARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:sgw-1fad4876-tapedrive-01"
 *       },
 *       "VTLDeviceARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/device/AMZN_SGW-1FAD4876_TAPEDRIVE_00001",
 *       "VTLDeviceProductIdentifier": "ULT3580-TD5",
 *       "VTLDeviceType": "Tape Drive",
 *       "VTLDeviceVendor": "IBM"
 *     },
 *     {
 *       "DeviceiSCSIAttributes": {
 *         "ChapEnabled": false,
 *         "NetworkInterfaceId": "10.243.43.209",
 *         "NetworkInterfacePort": 3260,
 *         "TargetARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:sgw-1fad4876-tapedrive-02"
 *       },
 *       "VTLDeviceARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/device/AMZN_SGW-1FAD4876_TAPEDRIVE_00002",
 *       "VTLDeviceProductIdentifier": "ULT3580-TD5",
 *       "VTLDeviceType": "Tape Drive",
 *       "VTLDeviceVendor": "IBM"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-virtual-tape-library-vtl-devices-of-a-single-gateway-1471906071410
 * ```
 *
 */
export class DescribeVTLDevicesCommand extends $Command<
  DescribeVTLDevicesCommandInput,
  DescribeVTLDevicesCommandOutput,
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
  constructor(readonly input: DescribeVTLDevicesCommandInput) {
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
  ): Handler<DescribeVTLDevicesCommandInput, DescribeVTLDevicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVTLDevicesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeVTLDevicesCommand";
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
  private serialize(input: DescribeVTLDevicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeVTLDevicesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeVTLDevicesCommandOutput> {
    return de_DescribeVTLDevicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
