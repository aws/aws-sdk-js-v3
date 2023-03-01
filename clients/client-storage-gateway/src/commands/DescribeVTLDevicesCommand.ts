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

import {
  DescribeVTLDevicesInput,
  DescribeVTLDevicesInputFilterSensitiveLog,
  DescribeVTLDevicesOutput,
  DescribeVTLDevicesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeVTLDevicesCommand,
  serializeAws_json1_1DescribeVTLDevicesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * The input for {@link DescribeVTLDevicesCommand}.
 */
export interface DescribeVTLDevicesCommandInput extends DescribeVTLDevicesInput {}
/**
 * The output of {@link DescribeVTLDevicesCommand}.
 */
export interface DescribeVTLDevicesCommandOutput extends DescribeVTLDevicesOutput, __MetadataBearer {}

/**
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
 * const command = new DescribeVTLDevicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVTLDevicesCommandInput} for command's `input` shape.
 * @see {@link DescribeVTLDevicesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
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
      inputFilterSensitiveLog: DescribeVTLDevicesInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeVTLDevicesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeVTLDevicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeVTLDevicesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeVTLDevicesCommandOutput> {
    return deserializeAws_json1_1DescribeVTLDevicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
