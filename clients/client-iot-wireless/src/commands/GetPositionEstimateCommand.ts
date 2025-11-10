// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetPositionEstimateRequest, GetPositionEstimateResponse } from "../models/models_0";
import { GetPositionEstimate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPositionEstimateCommand}.
 */
export interface GetPositionEstimateCommandInput extends GetPositionEstimateRequest {}
/**
 * @public
 */
export type GetPositionEstimateCommandOutputType = Omit<GetPositionEstimateResponse, "GeoJsonPayload"> & {
  GeoJsonPayload?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetPositionEstimateCommand}.
 */
export interface GetPositionEstimateCommandOutput extends GetPositionEstimateCommandOutputType, __MetadataBearer {}

/**
 * <p>Get estimated position information as a payload in GeoJSON format. The payload
 *             measurement data is resolved using solvers that are provided by third-party
 *             vendors.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetPositionEstimateCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetPositionEstimateCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // GetPositionEstimateRequest
 *   WiFiAccessPoints: [ // WiFiAccessPoints
 *     { // WiFiAccessPoint
 *       MacAddress: "STRING_VALUE", // required
 *       Rss: Number("int"), // required
 *     },
 *   ],
 *   CellTowers: { // CellTowers
 *     Gsm: [ // GsmList
 *       { // GsmObj
 *         Mcc: Number("int"), // required
 *         Mnc: Number("int"), // required
 *         Lac: Number("int"), // required
 *         GeranCid: Number("int"), // required
 *         GsmLocalId: { // GsmLocalId
 *           Bsic: Number("int"), // required
 *           Bcch: Number("int"), // required
 *         },
 *         GsmTimingAdvance: Number("int"),
 *         RxLevel: Number("int"),
 *         GsmNmr: [ // GsmNmrList
 *           { // GsmNmrObj
 *             Bsic: Number("int"), // required
 *             Bcch: Number("int"), // required
 *             RxLevel: Number("int"),
 *             GlobalIdentity: { // GlobalIdentity
 *               Lac: Number("int"), // required
 *               GeranCid: Number("int"), // required
 *             },
 *           },
 *         ],
 *       },
 *     ],
 *     Wcdma: [ // WcdmaList
 *       { // WcdmaObj
 *         Mcc: Number("int"), // required
 *         Mnc: Number("int"), // required
 *         Lac: Number("int"),
 *         UtranCid: Number("int"), // required
 *         WcdmaLocalId: { // WcdmaLocalId
 *           Uarfcndl: Number("int"), // required
 *           Psc: Number("int"), // required
 *         },
 *         Rscp: Number("int"),
 *         PathLoss: Number("int"),
 *         WcdmaNmr: [ // WcdmaNmrList
 *           { // WcdmaNmrObj
 *             Uarfcndl: Number("int"), // required
 *             Psc: Number("int"), // required
 *             UtranCid: Number("int"), // required
 *             Rscp: Number("int"),
 *             PathLoss: Number("int"),
 *           },
 *         ],
 *       },
 *     ],
 *     Tdscdma: [ // TdscdmaList
 *       { // TdscdmaObj
 *         Mcc: Number("int"), // required
 *         Mnc: Number("int"), // required
 *         Lac: Number("int"),
 *         UtranCid: Number("int"), // required
 *         TdscdmaLocalId: { // TdscdmaLocalId
 *           Uarfcn: Number("int"), // required
 *           CellParams: Number("int"), // required
 *         },
 *         TdscdmaTimingAdvance: Number("int"),
 *         Rscp: Number("int"),
 *         PathLoss: Number("int"),
 *         TdscdmaNmr: [ // TdscdmaNmrList
 *           { // TdscdmaNmrObj
 *             Uarfcn: Number("int"), // required
 *             CellParams: Number("int"), // required
 *             UtranCid: Number("int"),
 *             Rscp: Number("int"),
 *             PathLoss: Number("int"),
 *           },
 *         ],
 *       },
 *     ],
 *     Lte: [ // LteList
 *       { // LteObj
 *         Mcc: Number("int"), // required
 *         Mnc: Number("int"), // required
 *         EutranCid: Number("int"), // required
 *         Tac: Number("int"),
 *         LteLocalId: { // LteLocalId
 *           Pci: Number("int"), // required
 *           Earfcn: Number("int"), // required
 *         },
 *         LteTimingAdvance: Number("int"),
 *         Rsrp: Number("int"),
 *         Rsrq: Number("float"),
 *         NrCapable: true || false,
 *         LteNmr: [ // LteNmrList
 *           { // LteNmrObj
 *             Pci: Number("int"), // required
 *             Earfcn: Number("int"), // required
 *             EutranCid: Number("int"),
 *             Rsrp: Number("int"),
 *             Rsrq: Number("float"),
 *           },
 *         ],
 *       },
 *     ],
 *     Cdma: [ // CdmaList
 *       { // CdmaObj
 *         SystemId: Number("int"), // required
 *         NetworkId: Number("int"), // required
 *         BaseStationId: Number("int"), // required
 *         RegistrationZone: Number("int"),
 *         CdmaLocalId: { // CdmaLocalId
 *           PnOffset: Number("int"), // required
 *           CdmaChannel: Number("int"), // required
 *         },
 *         PilotPower: Number("int"),
 *         BaseLat: Number("float"),
 *         BaseLng: Number("float"),
 *         CdmaNmr: [ // CdmaNmrList
 *           { // CdmaNmrObj
 *             PnOffset: Number("int"), // required
 *             CdmaChannel: Number("int"), // required
 *             PilotPower: Number("int"),
 *             BaseStationId: Number("int"),
 *           },
 *         ],
 *       },
 *     ],
 *   },
 *   Ip: { // Ip
 *     IpAddress: "STRING_VALUE", // required
 *   },
 *   Gnss: { // Gnss
 *     Payload: "STRING_VALUE", // required
 *     CaptureTime: Number("float"),
 *     CaptureTimeAccuracy: Number("float"),
 *     AssistPosition: [ // AssistPosition
 *       Number("float"),
 *     ],
 *     AssistAltitude: Number("float"),
 *     Use2DSolver: true || false,
 *   },
 *   Timestamp: new Date("TIMESTAMP"),
 * };
 * const command = new GetPositionEstimateCommand(input);
 * const response = await client.send(command);
 * // { // GetPositionEstimateResponse
 * //   GeoJsonPayload: new Uint8Array(),
 * // };
 *
 * ```
 *
 * @param GetPositionEstimateCommandInput - {@link GetPositionEstimateCommandInput}
 * @returns {@link GetPositionEstimateCommandOutput}
 * @see {@link GetPositionEstimateCommandInput} for command's `input` shape.
 * @see {@link GetPositionEstimateCommandOutput} for command's `response` shape.
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
export class GetPositionEstimateCommand extends $Command
  .classBuilder<
    GetPositionEstimateCommandInput,
    GetPositionEstimateCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "GetPositionEstimate", {})
  .n("IoTWirelessClient", "GetPositionEstimateCommand")
  .sc(GetPositionEstimate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPositionEstimateRequest;
      output: GetPositionEstimateResponse;
    };
    sdk: {
      input: GetPositionEstimateCommandInput;
      output: GetPositionEstimateCommandOutput;
    };
  };
}
