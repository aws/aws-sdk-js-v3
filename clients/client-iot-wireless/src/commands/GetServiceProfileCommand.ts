// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetServiceProfileRequest, GetServiceProfileResponse } from "../models/models_0";
import { GetServiceProfile } from "../schemas/schemas_2_Wireless";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetServiceProfileCommand}.
 */
export interface GetServiceProfileCommandInput extends GetServiceProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetServiceProfileCommand}.
 */
export interface GetServiceProfileCommandOutput extends GetServiceProfileResponse, __MetadataBearer {}

/**
 * <p>Gets information about a service profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetServiceProfileCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetServiceProfileCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // GetServiceProfileRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetServiceProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceProfileResponse
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   LoRaWAN: { // LoRaWANGetServiceProfileInfo
 * //     UlRate: Number("int"),
 * //     UlBucketSize: Number("int"),
 * //     UlRatePolicy: "STRING_VALUE",
 * //     DlRate: Number("int"),
 * //     DlBucketSize: Number("int"),
 * //     DlRatePolicy: "STRING_VALUE",
 * //     AddGwMetadata: true || false,
 * //     DevStatusReqFreq: Number("int"),
 * //     ReportDevStatusBattery: true || false,
 * //     ReportDevStatusMargin: true || false,
 * //     DrMin: Number("int"),
 * //     DrMax: Number("int"),
 * //     ChannelMask: "STRING_VALUE",
 * //     PrAllowed: true || false,
 * //     HrAllowed: true || false,
 * //     RaAllowed: true || false,
 * //     NwkGeoLoc: true || false,
 * //     TargetPer: Number("int"),
 * //     MinGwDiversity: Number("int"),
 * //     TxPowerIndexMin: Number("int"),
 * //     TxPowerIndexMax: Number("int"),
 * //     NbTransMin: Number("int"),
 * //     NbTransMax: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetServiceProfileCommandInput - {@link GetServiceProfileCommandInput}
 * @returns {@link GetServiceProfileCommandOutput}
 * @see {@link GetServiceProfileCommandInput} for command's `input` shape.
 * @see {@link GetServiceProfileCommandOutput} for command's `response` shape.
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
export class GetServiceProfileCommand extends $Command
  .classBuilder<
    GetServiceProfileCommandInput,
    GetServiceProfileCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "GetServiceProfile", {})
  .n("IoTWirelessClient", "GetServiceProfileCommand")
  .sc(GetServiceProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetServiceProfileRequest;
      output: GetServiceProfileResponse;
    };
    sdk: {
      input: GetServiceProfileCommandInput;
      output: GetServiceProfileCommandOutput;
    };
  };
}
