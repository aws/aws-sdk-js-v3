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

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  GetDeviceProfileRequest,
  GetDeviceProfileResponse,
  GetDeviceProfileResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetDeviceProfileCommand, se_GetDeviceProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDeviceProfileCommand}.
 */
export interface GetDeviceProfileCommandInput extends GetDeviceProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetDeviceProfileCommand}.
 */
export interface GetDeviceProfileCommandOutput extends GetDeviceProfileResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a device profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetDeviceProfileCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetDeviceProfileCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // GetDeviceProfileRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetDeviceProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetDeviceProfileResponse
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   LoRaWAN: { // LoRaWANDeviceProfile
 * //     SupportsClassB: true || false,
 * //     ClassBTimeout: Number("int"),
 * //     PingSlotPeriod: Number("int"),
 * //     PingSlotDr: Number("int"),
 * //     PingSlotFreq: Number("int"),
 * //     SupportsClassC: true || false,
 * //     ClassCTimeout: Number("int"),
 * //     MacVersion: "STRING_VALUE",
 * //     RegParamsRevision: "STRING_VALUE",
 * //     RxDelay1: Number("int"),
 * //     RxDrOffset1: Number("int"),
 * //     RxDataRate2: Number("int"),
 * //     RxFreq2: Number("int"),
 * //     FactoryPresetFreqsList: [ // FactoryPresetFreqsList
 * //       Number("int"),
 * //     ],
 * //     MaxEirp: Number("int"),
 * //     MaxDutyCycle: Number("int"),
 * //     RfRegion: "STRING_VALUE",
 * //     SupportsJoin: true || false,
 * //     Supports32BitFCnt: true || false,
 * //   },
 * //   Sidewalk: { // SidewalkGetDeviceProfile
 * //     ApplicationServerPublicKey: "STRING_VALUE",
 * //     QualificationStatus: true || false,
 * //     DakCertificateMetadata: [ // DakCertificateMetadataList
 * //       { // DakCertificateMetadata
 * //         CertificateId: "STRING_VALUE", // required
 * //         MaxAllowedSignature: Number("int"),
 * //         FactorySupport: true || false,
 * //         ApId: "STRING_VALUE",
 * //         DeviceTypeId: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDeviceProfileCommandInput - {@link GetDeviceProfileCommandInput}
 * @returns {@link GetDeviceProfileCommandOutput}
 * @see {@link GetDeviceProfileCommandInput} for command's `input` shape.
 * @see {@link GetDeviceProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 */
export class GetDeviceProfileCommand extends $Command<
  GetDeviceProfileCommandInput,
  GetDeviceProfileCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: GetDeviceProfileCommandInput) {
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
  ): Handler<GetDeviceProfileCommandInput, GetDeviceProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDeviceProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "GetDeviceProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetDeviceProfileResponseFilterSensitiveLog,
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
  private serialize(input: GetDeviceProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDeviceProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDeviceProfileCommandOutput> {
    return de_GetDeviceProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
