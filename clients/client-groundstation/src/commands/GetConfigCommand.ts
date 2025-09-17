// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { GetConfigRequest, GetConfigResponse } from "../models/models_0";
import { de_GetConfigCommand, se_GetConfigCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConfigCommand}.
 */
export interface GetConfigCommandInput extends GetConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetConfigCommand}.
 */
export interface GetConfigCommandOutput extends GetConfigResponse, __MetadataBearer {}

/**
 * <p>Returns <code>Config</code> information.</p>
 *          <p>Only one <code>Config</code> response can be returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, GetConfigCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, GetConfigCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // GetConfigRequest
 *   configId: "STRING_VALUE", // required
 *   configType: "antenna-downlink" || "antenna-downlink-demod-decode" || "tracking" || "dataflow-endpoint" || "antenna-uplink" || "uplink-echo" || "s3-recording", // required
 * };
 * const command = new GetConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetConfigResponse
 * //   configId: "STRING_VALUE", // required
 * //   configArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   configType: "antenna-downlink" || "antenna-downlink-demod-decode" || "tracking" || "dataflow-endpoint" || "antenna-uplink" || "uplink-echo" || "s3-recording",
 * //   configData: { // ConfigTypeData Union: only one key present
 * //     antennaDownlinkConfig: { // AntennaDownlinkConfig
 * //       spectrumConfig: { // SpectrumConfig
 * //         centerFrequency: { // Frequency
 * //           value: Number("double"), // required
 * //           units: "GHz" || "MHz" || "kHz", // required
 * //         },
 * //         bandwidth: { // FrequencyBandwidth
 * //           value: Number("double"), // required
 * //           units: "GHz" || "MHz" || "kHz", // required
 * //         },
 * //         polarization: "RIGHT_HAND" || "LEFT_HAND" || "NONE",
 * //       },
 * //     },
 * //     trackingConfig: { // TrackingConfig
 * //       autotrack: "REQUIRED" || "PREFERRED" || "REMOVED", // required
 * //     },
 * //     dataflowEndpointConfig: { // DataflowEndpointConfig
 * //       dataflowEndpointName: "STRING_VALUE", // required
 * //       dataflowEndpointRegion: "STRING_VALUE",
 * //     },
 * //     antennaDownlinkDemodDecodeConfig: { // AntennaDownlinkDemodDecodeConfig
 * //       spectrumConfig: {
 * //         centerFrequency: {
 * //           value: Number("double"), // required
 * //           units: "GHz" || "MHz" || "kHz", // required
 * //         },
 * //         bandwidth: {
 * //           value: Number("double"), // required
 * //           units: "GHz" || "MHz" || "kHz", // required
 * //         },
 * //         polarization: "RIGHT_HAND" || "LEFT_HAND" || "NONE",
 * //       },
 * //       demodulationConfig: { // DemodulationConfig
 * //         unvalidatedJSON: "STRING_VALUE", // required
 * //       },
 * //       decodeConfig: { // DecodeConfig
 * //         unvalidatedJSON: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     antennaUplinkConfig: { // AntennaUplinkConfig
 * //       transmitDisabled: true || false,
 * //       spectrumConfig: { // UplinkSpectrumConfig
 * //         centerFrequency: {
 * //           value: Number("double"), // required
 * //           units: "GHz" || "MHz" || "kHz", // required
 * //         },
 * //         polarization: "RIGHT_HAND" || "LEFT_HAND" || "NONE",
 * //       },
 * //       targetEirp: { // Eirp
 * //         value: Number("double"), // required
 * //         units: "dBW", // required
 * //       },
 * //     },
 * //     uplinkEchoConfig: { // UplinkEchoConfig
 * //       enabled: true || false, // required
 * //       antennaUplinkConfigArn: "STRING_VALUE", // required
 * //     },
 * //     s3RecordingConfig: { // S3RecordingConfig
 * //       bucketArn: "STRING_VALUE", // required
 * //       roleArn: "STRING_VALUE", // required
 * //       prefix: "STRING_VALUE",
 * //     },
 * //   },
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetConfigCommandInput - {@link GetConfigCommandInput}
 * @returns {@link GetConfigCommandOutput}
 * @see {@link GetConfigCommandInput} for command's `input` shape.
 * @see {@link GetConfigCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link GroundStationServiceException}
 * <p>Base exception class for all service exceptions from GroundStation service.</p>
 *
 *
 * @public
 */
export class GetConfigCommand extends $Command
  .classBuilder<
    GetConfigCommandInput,
    GetConfigCommandOutput,
    GroundStationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GroundStationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GroundStation", "GetConfig", {})
  .n("GroundStationClient", "GetConfigCommand")
  .f(void 0, void 0)
  .ser(se_GetConfigCommand)
  .de(de_GetConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConfigRequest;
      output: GetConfigResponse;
    };
    sdk: {
      input: GetConfigCommandInput;
      output: GetConfigCommandOutput;
    };
  };
}
