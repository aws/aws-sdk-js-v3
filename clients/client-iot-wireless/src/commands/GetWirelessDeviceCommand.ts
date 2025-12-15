// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import type { GetWirelessDeviceRequest, GetWirelessDeviceResponse } from "../models/models_0";
import { GetWirelessDevice$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWirelessDeviceCommand}.
 */
export interface GetWirelessDeviceCommandInput extends GetWirelessDeviceRequest {}
/**
 * @public
 *
 * The output of {@link GetWirelessDeviceCommand}.
 */
export interface GetWirelessDeviceCommandOutput extends GetWirelessDeviceResponse, __MetadataBearer {}

/**
 * <p>Gets information about a wireless device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetWirelessDeviceCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetWirelessDeviceCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // GetWirelessDeviceRequest
 *   Identifier: "STRING_VALUE", // required
 *   IdentifierType: "WirelessDeviceId" || "DevEui" || "ThingName" || "SidewalkManufacturingSn", // required
 * };
 * const command = new GetWirelessDeviceCommand(input);
 * const response = await client.send(command);
 * // { // GetWirelessDeviceResponse
 * //   Type: "Sidewalk" || "LoRaWAN",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   DestinationName: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   ThingName: "STRING_VALUE",
 * //   ThingArn: "STRING_VALUE",
 * //   LoRaWAN: { // LoRaWANDevice
 * //     DevEui: "STRING_VALUE",
 * //     DeviceProfileId: "STRING_VALUE",
 * //     ServiceProfileId: "STRING_VALUE",
 * //     OtaaV1_1: { // OtaaV1_1
 * //       AppKey: "STRING_VALUE",
 * //       NwkKey: "STRING_VALUE",
 * //       JoinEui: "STRING_VALUE",
 * //     },
 * //     OtaaV1_0_x: { // OtaaV1_0_x
 * //       AppKey: "STRING_VALUE",
 * //       AppEui: "STRING_VALUE",
 * //       JoinEui: "STRING_VALUE",
 * //       GenAppKey: "STRING_VALUE",
 * //     },
 * //     AbpV1_1: { // AbpV1_1
 * //       DevAddr: "STRING_VALUE",
 * //       SessionKeys: { // SessionKeysAbpV1_1
 * //         FNwkSIntKey: "STRING_VALUE",
 * //         SNwkSIntKey: "STRING_VALUE",
 * //         NwkSEncKey: "STRING_VALUE",
 * //         AppSKey: "STRING_VALUE",
 * //       },
 * //       FCntStart: Number("int"),
 * //     },
 * //     AbpV1_0_x: { // AbpV1_0_x
 * //       DevAddr: "STRING_VALUE",
 * //       SessionKeys: { // SessionKeysAbpV1_0_x
 * //         NwkSKey: "STRING_VALUE",
 * //         AppSKey: "STRING_VALUE",
 * //       },
 * //       FCntStart: Number("int"),
 * //     },
 * //     FPorts: { // FPorts
 * //       Fuota: Number("int"),
 * //       Multicast: Number("int"),
 * //       ClockSync: Number("int"),
 * //       Positioning: { // Positioning
 * //         ClockSync: Number("int"),
 * //         Stream: Number("int"),
 * //         Gnss: Number("int"),
 * //       },
 * //       Applications: [ // Applications
 * //         { // ApplicationConfig
 * //           FPort: Number("int"),
 * //           Type: "SemtechGeolocation",
 * //           DestinationName: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   Sidewalk: { // SidewalkDevice
 * //     AmazonId: "STRING_VALUE",
 * //     SidewalkId: "STRING_VALUE",
 * //     SidewalkManufacturingSn: "STRING_VALUE",
 * //     DeviceCertificates: [ // DeviceCertificateList
 * //       { // CertificateList
 * //         SigningAlg: "Ed25519" || "P256r1", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     PrivateKeys: [ // PrivateKeysList
 * //       {
 * //         SigningAlg: "Ed25519" || "P256r1", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     DeviceProfileId: "STRING_VALUE",
 * //     CertificateId: "STRING_VALUE",
 * //     Status: "PROVISIONED" || "REGISTERED" || "ACTIVATED" || "UNKNOWN",
 * //     Positioning: { // SidewalkPositioning
 * //       DestinationName: "STRING_VALUE",
 * //     },
 * //   },
 * //   Positioning: "Enabled" || "Disabled",
 * // };
 *
 * ```
 *
 * @param GetWirelessDeviceCommandInput - {@link GetWirelessDeviceCommandInput}
 * @returns {@link GetWirelessDeviceCommandOutput}
 * @see {@link GetWirelessDeviceCommandInput} for command's `input` shape.
 * @see {@link GetWirelessDeviceCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetWirelessDeviceCommand extends $Command
  .classBuilder<
    GetWirelessDeviceCommandInput,
    GetWirelessDeviceCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "GetWirelessDevice", {})
  .n("IoTWirelessClient", "GetWirelessDeviceCommand")
  .sc(GetWirelessDevice$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWirelessDeviceRequest;
      output: GetWirelessDeviceResponse;
    };
    sdk: {
      input: GetWirelessDeviceCommandInput;
      output: GetWirelessDeviceCommandOutput;
    };
  };
}
