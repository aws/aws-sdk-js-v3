// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ConfigIdResponse, CreateConfigRequest } from "../models/models_0";
import { de_CreateConfigCommand, se_CreateConfigCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConfigCommand}.
 */
export interface CreateConfigCommandInput extends CreateConfigRequest {}
/**
 * @public
 *
 * The output of {@link CreateConfigCommand}.
 */
export interface CreateConfigCommandOutput extends ConfigIdResponse, __MetadataBearer {}

/**
 * <p>Creates a <code>Config</code> with the specified <code>configData</code> parameters.</p> <p>Only one type of <code>configData</code> can be specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, CreateConfigCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, CreateConfigCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // CreateConfigRequest
 *   name: "STRING_VALUE", // required
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
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateConfigCommand(input);
 * const response = await client.send(command);
 * // { // ConfigIdResponse
 * //   configId: "STRING_VALUE",
 * //   configType: "antenna-downlink" || "antenna-downlink-demod-decode" || "tracking" || "dataflow-endpoint" || "antenna-uplink" || "uplink-echo" || "s3-recording",
 * //   configArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateConfigCommandInput - {@link CreateConfigCommandInput}
 * @returns {@link CreateConfigCommandOutput}
 * @see {@link CreateConfigCommandInput} for command's `input` shape.
 * @see {@link CreateConfigCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Account limits for this resource have been exceeded.</p>
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
export class CreateConfigCommand extends $Command
  .classBuilder<
    CreateConfigCommandInput,
    CreateConfigCommandOutput,
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
  .s("GroundStation", "CreateConfig", {})
  .n("GroundStationClient", "CreateConfigCommand")
  .f(void 0, void 0)
  .ser(se_CreateConfigCommand)
  .de(de_CreateConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConfigRequest;
      output: ConfigIdResponse;
    };
    sdk: {
      input: CreateConfigCommandInput;
      output: CreateConfigCommandOutput;
    };
  };
}
