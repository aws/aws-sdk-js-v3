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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListDevicesRequest, ListDevicesResult } from "../models/models_0";
import { de_ListDevicesCommand, se_ListDevicesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDevicesCommand}.
 */
export interface ListDevicesCommandInput extends ListDevicesRequest {}
/**
 * @public
 *
 * The output of {@link ListDevicesCommand}.
 */
export interface ListDevicesCommandOutput extends ListDevicesResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about unique device types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListDevicesCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListDevicesCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // ListDevicesRequest
 *   arn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   filters: [ // DeviceFilters
 *     { // DeviceFilter
 *       attribute: "ARN" || "PLATFORM" || "OS_VERSION" || "MODEL" || "AVAILABILITY" || "FORM_FACTOR" || "MANUFACTURER" || "REMOTE_ACCESS_ENABLED" || "REMOTE_DEBUG_ENABLED" || "INSTANCE_ARN" || "INSTANCE_LABELS" || "FLEET_TYPE", // required
 *       operator: "EQUALS" || "LESS_THAN" || "LESS_THAN_OR_EQUALS" || "GREATER_THAN" || "GREATER_THAN_OR_EQUALS" || "IN" || "NOT_IN" || "CONTAINS", // required
 *       values: [ // DeviceFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListDevicesCommand(input);
 * const response = await client.send(command);
 * // { // ListDevicesResult
 * //   devices: [ // Devices
 * //     { // Device
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       manufacturer: "STRING_VALUE",
 * //       model: "STRING_VALUE",
 * //       modelId: "STRING_VALUE",
 * //       formFactor: "PHONE" || "TABLET",
 * //       platform: "ANDROID" || "IOS",
 * //       os: "STRING_VALUE",
 * //       cpu: { // CPU
 * //         frequency: "STRING_VALUE",
 * //         architecture: "STRING_VALUE",
 * //         clock: Number("double"),
 * //       },
 * //       resolution: { // Resolution
 * //         width: Number("int"),
 * //         height: Number("int"),
 * //       },
 * //       heapSize: Number("long"),
 * //       memory: Number("long"),
 * //       image: "STRING_VALUE",
 * //       carrier: "STRING_VALUE",
 * //       radio: "STRING_VALUE",
 * //       remoteAccessEnabled: true || false,
 * //       remoteDebugEnabled: true || false,
 * //       fleetType: "STRING_VALUE",
 * //       fleetName: "STRING_VALUE",
 * //       instances: [ // DeviceInstances
 * //         { // DeviceInstance
 * //           arn: "STRING_VALUE",
 * //           deviceArn: "STRING_VALUE",
 * //           labels: [ // InstanceLabels
 * //             "STRING_VALUE",
 * //           ],
 * //           status: "IN_USE" || "PREPARING" || "AVAILABLE" || "NOT_AVAILABLE",
 * //           udid: "STRING_VALUE",
 * //           instanceProfile: { // InstanceProfile
 * //             arn: "STRING_VALUE",
 * //             packageCleanup: true || false,
 * //             excludeAppPackagesFromCleanup: [ // PackageIds
 * //               "STRING_VALUE",
 * //             ],
 * //             rebootAfterUse: true || false,
 * //             name: "STRING_VALUE",
 * //             description: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       availability: "TEMPORARY_NOT_AVAILABLE" || "BUSY" || "AVAILABLE" || "HIGHLY_AVAILABLE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDevicesCommandInput - {@link ListDevicesCommandInput}
 * @returns {@link ListDevicesCommandOutput}
 * @see {@link ListDevicesCommandInput} for command's `input` shape.
 * @see {@link ListDevicesCommandOutput} for command's `response` shape.
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
 * @example To get information about devices
 * ```javascript
 * // The following example returns information about the available devices in a specific project.
 * const input = {
 *   "arn": "arn:aws:devicefarm:us-west-2:123456789101:project:EXAMPLE-GUID-123-456"
 * };
 * const command = new ListDevicesCommand(input);
 * await client.send(command);
 * // example id: to-get-information-about-devices-1471641699344
 * ```
 *
 */
export class ListDevicesCommand extends $Command<
  ListDevicesCommandInput,
  ListDevicesCommandOutput,
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
  constructor(readonly input: ListDevicesCommandInput) {
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
  ): Handler<ListDevicesCommandInput, ListDevicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListDevicesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ListDevicesCommand";
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
  private serialize(input: ListDevicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDevicesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDevicesCommandOutput> {
    return de_ListDevicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
