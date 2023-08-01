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
import { DescribeInputDeviceRequest, DescribeInputDeviceResponse } from "../models/models_1";
import { de_DescribeInputDeviceCommand, se_DescribeInputDeviceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeInputDeviceCommand}.
 */
export interface DescribeInputDeviceCommandInput extends DescribeInputDeviceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInputDeviceCommand}.
 */
export interface DescribeInputDeviceCommandOutput extends DescribeInputDeviceResponse, __MetadataBearer {}

/**
 * @public
 * Gets the details for the input device
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeInputDeviceCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeInputDeviceCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // DescribeInputDeviceRequest
 *   InputDeviceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeInputDeviceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInputDeviceResponse
 * //   Arn: "STRING_VALUE",
 * //   ConnectionState: "DISCONNECTED" || "CONNECTED",
 * //   DeviceSettingsSyncState: "SYNCED" || "SYNCING",
 * //   DeviceUpdateStatus: "UP_TO_DATE" || "NOT_UP_TO_DATE" || "UPDATING",
 * //   HdDeviceSettings: { // InputDeviceHdSettings
 * //     ActiveInput: "HDMI" || "SDI",
 * //     ConfiguredInput: "AUTO" || "HDMI" || "SDI",
 * //     DeviceState: "IDLE" || "STREAMING",
 * //     Framerate: Number("double"),
 * //     Height: Number("int"),
 * //     MaxBitrate: Number("int"),
 * //     ScanType: "INTERLACED" || "PROGRESSIVE",
 * //     Width: Number("int"),
 * //     LatencyMs: Number("int"),
 * //   },
 * //   Id: "STRING_VALUE",
 * //   MacAddress: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   NetworkSettings: { // InputDeviceNetworkSettings
 * //     DnsAddresses: [ // __listOf__string
 * //       "STRING_VALUE",
 * //     ],
 * //     Gateway: "STRING_VALUE",
 * //     IpAddress: "STRING_VALUE",
 * //     IpScheme: "STATIC" || "DHCP",
 * //     SubnetMask: "STRING_VALUE",
 * //   },
 * //   SerialNumber: "STRING_VALUE",
 * //   Type: "HD" || "UHD",
 * //   UhdDeviceSettings: { // InputDeviceUhdSettings
 * //     ActiveInput: "HDMI" || "SDI",
 * //     ConfiguredInput: "AUTO" || "HDMI" || "SDI",
 * //     DeviceState: "IDLE" || "STREAMING",
 * //     Framerate: Number("double"),
 * //     Height: Number("int"),
 * //     MaxBitrate: Number("int"),
 * //     ScanType: "INTERLACED" || "PROGRESSIVE",
 * //     Width: Number("int"),
 * //     LatencyMs: Number("int"),
 * //   },
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   AvailabilityZone: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInputDeviceCommandInput - {@link DescribeInputDeviceCommandInput}
 * @returns {@link DescribeInputDeviceCommandOutput}
 * @see {@link DescribeInputDeviceCommandInput} for command's `input` shape.
 * @see {@link DescribeInputDeviceCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  Placeholder documentation for NotFoundException
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 */
export class DescribeInputDeviceCommand extends $Command<
  DescribeInputDeviceCommandInput,
  DescribeInputDeviceCommandOutput,
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
  constructor(readonly input: DescribeInputDeviceCommandInput) {
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
  ): Handler<DescribeInputDeviceCommandInput, DescribeInputDeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInputDeviceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "DescribeInputDeviceCommand";
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
  private serialize(input: DescribeInputDeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeInputDeviceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeInputDeviceCommandOutput> {
    return de_DescribeInputDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
