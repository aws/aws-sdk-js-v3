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

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { ListInputDevicesRequest, ListInputDevicesResponse } from "../models/models_1";
import { de_ListInputDevicesCommand, se_ListInputDevicesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListInputDevicesCommand}.
 */
export interface ListInputDevicesCommandInput extends ListInputDevicesRequest {}
/**
 * @public
 *
 * The output of {@link ListInputDevicesCommand}.
 */
export interface ListInputDevicesCommandOutput extends ListInputDevicesResponse, __MetadataBearer {}

/**
 * @public
 * List input devices
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListInputDevicesCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListInputDevicesCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // ListInputDevicesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListInputDevicesCommand(input);
 * const response = await client.send(command);
 * // { // ListInputDevicesResponse
 * //   InputDevices: [ // __listOfInputDeviceSummary
 * //     { // InputDeviceSummary
 * //       Arn: "STRING_VALUE",
 * //       ConnectionState: "DISCONNECTED" || "CONNECTED",
 * //       DeviceSettingsSyncState: "SYNCED" || "SYNCING",
 * //       DeviceUpdateStatus: "UP_TO_DATE" || "NOT_UP_TO_DATE" || "UPDATING",
 * //       HdDeviceSettings: { // InputDeviceHdSettings
 * //         ActiveInput: "HDMI" || "SDI",
 * //         ConfiguredInput: "AUTO" || "HDMI" || "SDI",
 * //         DeviceState: "IDLE" || "STREAMING",
 * //         Framerate: Number("double"),
 * //         Height: Number("int"),
 * //         MaxBitrate: Number("int"),
 * //         ScanType: "INTERLACED" || "PROGRESSIVE",
 * //         Width: Number("int"),
 * //         LatencyMs: Number("int"),
 * //       },
 * //       Id: "STRING_VALUE",
 * //       MacAddress: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       NetworkSettings: { // InputDeviceNetworkSettings
 * //         DnsAddresses: [ // __listOf__string
 * //           "STRING_VALUE",
 * //         ],
 * //         Gateway: "STRING_VALUE",
 * //         IpAddress: "STRING_VALUE",
 * //         IpScheme: "STATIC" || "DHCP",
 * //         SubnetMask: "STRING_VALUE",
 * //       },
 * //       SerialNumber: "STRING_VALUE",
 * //       Type: "HD" || "UHD",
 * //       UhdDeviceSettings: { // InputDeviceUhdSettings
 * //         ActiveInput: "HDMI" || "SDI",
 * //         ConfiguredInput: "AUTO" || "HDMI" || "SDI",
 * //         DeviceState: "IDLE" || "STREAMING",
 * //         Framerate: Number("double"),
 * //         Height: Number("int"),
 * //         MaxBitrate: Number("int"),
 * //         ScanType: "INTERLACED" || "PROGRESSIVE",
 * //         Width: Number("int"),
 * //         LatencyMs: Number("int"),
 * //       },
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInputDevicesCommandInput - {@link ListInputDevicesCommandInput}
 * @returns {@link ListInputDevicesCommandOutput}
 * @see {@link ListInputDevicesCommandInput} for command's `input` shape.
 * @see {@link ListInputDevicesCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Placeholder documentation for ForbiddenException
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  Placeholder documentation for GatewayTimeoutException
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Placeholder documentation for InternalServerErrorException
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 */
export class ListInputDevicesCommand extends $Command<
  ListInputDevicesCommandInput,
  ListInputDevicesCommandOutput,
  MediaLiveClientResolvedConfig
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
  constructor(readonly input: ListInputDevicesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListInputDevicesCommandInput, ListInputDevicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListInputDevicesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "ListInputDevicesCommand";
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
  private serialize(input: ListInputDevicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListInputDevicesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInputDevicesCommandOutput> {
    return de_ListInputDevicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
