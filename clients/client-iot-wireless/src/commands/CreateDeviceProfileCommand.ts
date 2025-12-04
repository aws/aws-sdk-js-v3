// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import type { CreateDeviceProfileRequest, CreateDeviceProfileResponse } from "../models/models_0";
import { CreateDeviceProfile } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDeviceProfileCommand}.
 */
export interface CreateDeviceProfileCommandInput extends CreateDeviceProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateDeviceProfileCommand}.
 */
export interface CreateDeviceProfileCommandOutput extends CreateDeviceProfileResponse, __MetadataBearer {}

/**
 * <p>Creates a new device profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, CreateDeviceProfileCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, CreateDeviceProfileCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // CreateDeviceProfileRequest
 *   Name: "STRING_VALUE",
 *   LoRaWAN: { // LoRaWANDeviceProfile
 *     SupportsClassB: true || false,
 *     ClassBTimeout: Number("int"),
 *     PingSlotPeriod: Number("int"),
 *     PingSlotDr: Number("int"),
 *     PingSlotFreq: Number("int"),
 *     SupportsClassC: true || false,
 *     ClassCTimeout: Number("int"),
 *     MacVersion: "STRING_VALUE",
 *     RegParamsRevision: "STRING_VALUE",
 *     RxDelay1: Number("int"),
 *     RxDrOffset1: Number("int"),
 *     RxDataRate2: Number("int"),
 *     RxFreq2: Number("int"),
 *     FactoryPresetFreqsList: [ // FactoryPresetFreqsList
 *       Number("int"),
 *     ],
 *     MaxEirp: Number("int"),
 *     MaxDutyCycle: Number("int"),
 *     RfRegion: "STRING_VALUE",
 *     SupportsJoin: true || false,
 *     Supports32BitFCnt: true || false,
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientRequestToken: "STRING_VALUE",
 *   Sidewalk: {},
 * };
 * const command = new CreateDeviceProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateDeviceProfileResponse
 * //   Arn: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDeviceProfileCommandInput - {@link CreateDeviceProfileCommandInput}
 * @returns {@link CreateDeviceProfileCommandOutput}
 * @see {@link CreateDeviceProfileCommandInput} for command's `input` shape.
 * @see {@link CreateDeviceProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Adding, updating, or deleting the resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
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
export class CreateDeviceProfileCommand extends $Command
  .classBuilder<
    CreateDeviceProfileCommandInput,
    CreateDeviceProfileCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "CreateDeviceProfile", {})
  .n("IoTWirelessClient", "CreateDeviceProfileCommand")
  .sc(CreateDeviceProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDeviceProfileRequest;
      output: CreateDeviceProfileResponse;
    };
    sdk: {
      input: CreateDeviceProfileCommandInput;
      output: CreateDeviceProfileCommandOutput;
    };
  };
}
