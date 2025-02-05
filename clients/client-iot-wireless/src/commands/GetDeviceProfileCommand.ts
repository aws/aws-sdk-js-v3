// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
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
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets information about a device profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetDeviceProfileCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetDeviceProfileCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 */
export class GetDeviceProfileCommand extends $Command
  .classBuilder<
    GetDeviceProfileCommandInput,
    GetDeviceProfileCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("iotwireless", "GetDeviceProfile", {})
  .n("IoTWirelessClient", "GetDeviceProfileCommand")
  .f(void 0, GetDeviceProfileResponseFilterSensitiveLog)
  .ser(se_GetDeviceProfileCommand)
  .de(de_GetDeviceProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeviceProfileRequest;
      output: GetDeviceProfileResponse;
    };
    sdk: {
      input: GetDeviceProfileCommandInput;
      output: GetDeviceProfileCommandOutput;
    };
  };
}
