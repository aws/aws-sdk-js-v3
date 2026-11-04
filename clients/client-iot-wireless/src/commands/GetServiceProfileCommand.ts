// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetServiceProfileRequest, GetServiceProfileResponse } from "../models/models_0";
import { GetServiceProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets information about a service profile.
 *
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
 *
 * User does not have permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because it exceeded the allowed API request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input did not meet the specified constraints.
 *
 * @throws {@link IoTWirelessServiceException}
 *
 * Base exception class for all service exceptions from IoTWireless service.
 *
 * @public
 */
export class GetServiceProfileCommand extends command<GetServiceProfileCommandInput, GetServiceProfileCommandOutput>(
  _ep0,
  _mw0,
  "GetServiceProfile",
  GetServiceProfile$
) {
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
