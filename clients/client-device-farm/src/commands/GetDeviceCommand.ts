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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetDeviceRequest, GetDeviceResult } from "../models/models_0";
import { de_GetDeviceCommand, se_GetDeviceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDeviceCommand}.
 */
export interface GetDeviceCommandInput extends GetDeviceRequest {}
/**
 * @public
 *
 * The output of {@link GetDeviceCommand}.
 */
export interface GetDeviceCommandOutput extends GetDeviceResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a unique device type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetDeviceCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetDeviceCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // GetDeviceRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetDeviceCommand(input);
 * const response = await client.send(command);
 * // { // GetDeviceResult
 * //   device: { // Device
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     manufacturer: "STRING_VALUE",
 * //     model: "STRING_VALUE",
 * //     modelId: "STRING_VALUE",
 * //     formFactor: "PHONE" || "TABLET",
 * //     platform: "ANDROID" || "IOS",
 * //     os: "STRING_VALUE",
 * //     cpu: { // CPU
 * //       frequency: "STRING_VALUE",
 * //       architecture: "STRING_VALUE",
 * //       clock: Number("double"),
 * //     },
 * //     resolution: { // Resolution
 * //       width: Number("int"),
 * //       height: Number("int"),
 * //     },
 * //     heapSize: Number("long"),
 * //     memory: Number("long"),
 * //     image: "STRING_VALUE",
 * //     carrier: "STRING_VALUE",
 * //     radio: "STRING_VALUE",
 * //     remoteAccessEnabled: true || false,
 * //     remoteDebugEnabled: true || false,
 * //     fleetType: "STRING_VALUE",
 * //     fleetName: "STRING_VALUE",
 * //     instances: [ // DeviceInstances
 * //       { // DeviceInstance
 * //         arn: "STRING_VALUE",
 * //         deviceArn: "STRING_VALUE",
 * //         labels: [ // InstanceLabels
 * //           "STRING_VALUE",
 * //         ],
 * //         status: "IN_USE" || "PREPARING" || "AVAILABLE" || "NOT_AVAILABLE",
 * //         udid: "STRING_VALUE",
 * //         instanceProfile: { // InstanceProfile
 * //           arn: "STRING_VALUE",
 * //           packageCleanup: true || false,
 * //           excludeAppPackagesFromCleanup: [ // PackageIds
 * //             "STRING_VALUE",
 * //           ],
 * //           rebootAfterUse: true || false,
 * //           name: "STRING_VALUE",
 * //           description: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     availability: "TEMPORARY_NOT_AVAILABLE" || "BUSY" || "AVAILABLE" || "HIGHLY_AVAILABLE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDeviceCommandInput - {@link GetDeviceCommandInput}
 * @returns {@link GetDeviceCommandOutput}
 * @see {@link GetDeviceCommandInput} for command's `input` shape.
 * @see {@link GetDeviceCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link ServiceAccountException} (client fault)
 *  <p>There was a problem with the service account.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 * @example To get information about a device
 * ```javascript
 * // The following example returns information about a specific device.
 * const input = {
 *   "arn": "arn:aws:devicefarm:us-west-2::device:123EXAMPLE"
 * };
 * const command = new GetDeviceCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "device": {
 *     "name": "LG G2 (Sprint)",
 *     "arn": "arn:aws:devicefarm:us-west-2::device:A0E6E6E1059E45918208DF75B2B7EF6C",
 *     "cpu": {
 *       "architecture": "armeabi-v7a",
 *       "clock": 2265.6,
 *       "frequency": "MHz"
 *     },
 *     "formFactor": "PHONE",
 *     "heapSize": 256000000,
 *     "image": "75B2B7EF6C12345EXAMPLE",
 *     "manufacturer": "LG",
 *     "memory": 16000000000,
 *     "model": "G2 (Sprint)",
 *     "os": "4.2.2",
 *     "platform": "ANDROID",
 *     "resolution": {
 *       "height": 1920,
 *       "width": 1080
 *     }
 *   }
 * }
 * *\/
 * // example id: getdevice-example-1470870602173
 * ```
 *
 */
export class GetDeviceCommand extends $Command<
  GetDeviceCommandInput,
  GetDeviceCommandOutput,
  DeviceFarmClientResolvedConfig
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
  constructor(readonly input: GetDeviceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDeviceCommandInput, GetDeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetDeviceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "GetDeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DeviceFarm_20150623",
        operation: "GetDevice",
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
  private serialize(input: GetDeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDeviceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDeviceCommandOutput> {
    return de_GetDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
