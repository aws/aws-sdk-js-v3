// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import type { ConfigIdResponse, UpdateConfigRequest } from "../models/models_0";
import { UpdateConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConfigCommand}.
 */
export interface UpdateConfigCommandInput extends UpdateConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConfigCommand}.
 */
export interface UpdateConfigCommandOutput extends ConfigIdResponse, __MetadataBearer {}

/**
 * <p>Updates the <code>Config</code> used when scheduling contacts.</p> <p>Updating a <code>Config</code> will not update the execution parameters for existing future contacts scheduled with this <code>Config</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, UpdateConfigCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, UpdateConfigCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // UpdateConfigRequest
 *   configId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   configType: "antenna-downlink" || "antenna-downlink-demod-decode" || "tracking" || "dataflow-endpoint" || "antenna-uplink" || "uplink-echo" || "s3-recording", // required
 *   configData: { // ConfigTypeData Union: only one key present
 *     antennaDownlinkConfig: { // AntennaDownlinkConfig
 *       spectrumConfig: { // SpectrumConfig
 *         centerFrequency: { // Frequency
 *           value: Number("double"), // required
 *           units: "GHz" || "MHz" || "kHz", // required
 *         },
 *         bandwidth: { // FrequencyBandwidth
 *           value: Number("double"), // required
 *           units: "GHz" || "MHz" || "kHz", // required
 *         },
 *         polarization: "RIGHT_HAND" || "LEFT_HAND" || "NONE",
 *       },
 *     },
 *     trackingConfig: { // TrackingConfig
 *       autotrack: "REQUIRED" || "PREFERRED" || "REMOVED", // required
 *     },
 *     dataflowEndpointConfig: { // DataflowEndpointConfig
 *       dataflowEndpointName: "STRING_VALUE", // required
 *       dataflowEndpointRegion: "STRING_VALUE",
 *     },
 *     antennaDownlinkDemodDecodeConfig: { // AntennaDownlinkDemodDecodeConfig
 *       spectrumConfig: {
 *         centerFrequency: {
 *           value: Number("double"), // required
 *           units: "GHz" || "MHz" || "kHz", // required
 *         },
 *         bandwidth: {
 *           value: Number("double"), // required
 *           units: "GHz" || "MHz" || "kHz", // required
 *         },
 *         polarization: "RIGHT_HAND" || "LEFT_HAND" || "NONE",
 *       },
 *       demodulationConfig: { // DemodulationConfig
 *         unvalidatedJSON: "STRING_VALUE", // required
 *       },
 *       decodeConfig: { // DecodeConfig
 *         unvalidatedJSON: "STRING_VALUE", // required
 *       },
 *     },
 *     antennaUplinkConfig: { // AntennaUplinkConfig
 *       transmitDisabled: true || false,
 *       spectrumConfig: { // UplinkSpectrumConfig
 *         centerFrequency: {
 *           value: Number("double"), // required
 *           units: "GHz" || "MHz" || "kHz", // required
 *         },
 *         polarization: "RIGHT_HAND" || "LEFT_HAND" || "NONE",
 *       },
 *       targetEirp: { // Eirp
 *         value: Number("double"), // required
 *         units: "dBW", // required
 *       },
 *     },
 *     uplinkEchoConfig: { // UplinkEchoConfig
 *       enabled: true || false, // required
 *       antennaUplinkConfigArn: "STRING_VALUE", // required
 *     },
 *     s3RecordingConfig: { // S3RecordingConfig
 *       bucketArn: "STRING_VALUE", // required
 *       roleArn: "STRING_VALUE", // required
 *       prefix: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateConfigCommand(input);
 * const response = await client.send(command);
 * // { // ConfigIdResponse
 * //   configId: "STRING_VALUE",
 * //   configType: "antenna-downlink" || "antenna-downlink-demod-decode" || "tracking" || "dataflow-endpoint" || "antenna-uplink" || "uplink-echo" || "s3-recording",
 * //   configArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateConfigCommandInput - {@link UpdateConfigCommandInput}
 * @returns {@link UpdateConfigCommandOutput}
 * @see {@link UpdateConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigCommandOutput} for command's `response` shape.
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
export class UpdateConfigCommand extends $Command
  .classBuilder<
    UpdateConfigCommandInput,
    UpdateConfigCommandOutput,
    GroundStationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GroundStationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GroundStation", "UpdateConfig", {})
  .n("GroundStationClient", "UpdateConfigCommand")
  .sc(UpdateConfig$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConfigRequest;
      output: ConfigIdResponse;
    };
    sdk: {
      input: UpdateConfigCommandInput;
      output: UpdateConfigCommandOutput;
    };
  };
}
