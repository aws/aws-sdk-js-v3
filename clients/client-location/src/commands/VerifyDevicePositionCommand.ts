// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  VerifyDevicePositionRequest,
  VerifyDevicePositionRequestFilterSensitiveLog,
  VerifyDevicePositionResponse,
  VerifyDevicePositionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_VerifyDevicePositionCommand, se_VerifyDevicePositionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link VerifyDevicePositionCommand}.
 */
export interface VerifyDevicePositionCommandInput extends VerifyDevicePositionRequest {}
/**
 * @public
 *
 * The output of {@link VerifyDevicePositionCommand}.
 */
export interface VerifyDevicePositionCommandOutput extends VerifyDevicePositionResponse, __MetadataBearer {}

/**
 * <p>Verifies the integrity of the device's position by determining if it was reported behind a proxy, and by comparing it to an inferred position estimated based on the device's state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, VerifyDevicePositionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, VerifyDevicePositionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // VerifyDevicePositionRequest
 *   TrackerName: "STRING_VALUE", // required
 *   DeviceState: { // DeviceState
 *     DeviceId: "STRING_VALUE", // required
 *     SampleTime: new Date("TIMESTAMP"), // required
 *     Position: [ // Position // required
 *       Number("double"),
 *     ],
 *     Accuracy: { // PositionalAccuracy
 *       Horizontal: Number("double"), // required
 *     },
 *     Ipv4Address: "STRING_VALUE",
 *     WiFiAccessPoints: [ // WiFiAccessPointList
 *       { // WiFiAccessPoint
 *         MacAddress: "STRING_VALUE", // required
 *         Rss: Number("int"), // required
 *       },
 *     ],
 *     CellSignals: { // CellSignals
 *       LteCellDetails: [ // LteCellDetailsList // required
 *         { // LteCellDetails
 *           CellId: Number("int"), // required
 *           Mcc: Number("int"), // required
 *           Mnc: Number("int"), // required
 *           LocalId: { // LteLocalId
 *             Earfcn: Number("int"), // required
 *             Pci: Number("int"), // required
 *           },
 *           NetworkMeasurements: [ // LteNetworkMeasurementsList
 *             { // LteNetworkMeasurements
 *               Earfcn: Number("int"), // required
 *               CellId: Number("int"), // required
 *               Pci: Number("int"), // required
 *               Rsrp: Number("int"),
 *               Rsrq: Number("float"),
 *             },
 *           ],
 *           TimingAdvance: Number("int"),
 *           NrCapable: true || false,
 *           Rsrp: Number("int"),
 *           Rsrq: Number("float"),
 *           Tac: Number("int"),
 *         },
 *       ],
 *     },
 *   },
 *   DistanceUnit: "STRING_VALUE",
 * };
 * const command = new VerifyDevicePositionCommand(input);
 * const response = await client.send(command);
 * // { // VerifyDevicePositionResponse
 * //   InferredState: { // InferredState
 * //     Position: [ // Position
 * //       Number("double"),
 * //     ],
 * //     Accuracy: { // PositionalAccuracy
 * //       Horizontal: Number("double"), // required
 * //     },
 * //     DeviationDistance: Number("double"),
 * //     ProxyDetected: true || false, // required
 * //   },
 * //   DeviceId: "STRING_VALUE", // required
 * //   SampleTime: new Date("TIMESTAMP"), // required
 * //   ReceivedTime: new Date("TIMESTAMP"), // required
 * //   DistanceUnit: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param VerifyDevicePositionCommandInput - {@link VerifyDevicePositionCommandInput}
 * @returns {@link VerifyDevicePositionCommandOutput}
 * @see {@link VerifyDevicePositionCommandInput} for command's `input` shape.
 * @see {@link VerifyDevicePositionCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource that you've entered was not found in your AWS account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 *
 * @public
 */
export class VerifyDevicePositionCommand extends $Command
  .classBuilder<
    VerifyDevicePositionCommandInput,
    VerifyDevicePositionCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LocationService", "VerifyDevicePosition", {})
  .n("LocationClient", "VerifyDevicePositionCommand")
  .f(VerifyDevicePositionRequestFilterSensitiveLog, VerifyDevicePositionResponseFilterSensitiveLog)
  .ser(se_VerifyDevicePositionCommand)
  .de(de_VerifyDevicePositionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: VerifyDevicePositionRequest;
      output: VerifyDevicePositionResponse;
    };
    sdk: {
      input: VerifyDevicePositionCommandInput;
      output: VerifyDevicePositionCommandOutput;
    };
  };
}
