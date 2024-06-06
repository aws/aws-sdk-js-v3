// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ConfigIdResponse, UpdateConfigRequest } from "../models/models_0";
import { de_UpdateConfigCommand, se_UpdateConfigCommand } from "../protocols/Aws_restJson1";

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
 * <p>Updates the <code>Config</code> used when scheduling contacts.</p>
 *          <p>Updating a <code>Config</code> will not update the execution parameters
 *          for existing future contacts scheduled with this <code>Config</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, UpdateConfigCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, UpdateConfigCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const input = { // UpdateConfigRequest
 *   configId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   configType: "STRING_VALUE", // required
 *   configData: { // ConfigTypeData Union: only one key present
 *     antennaDownlinkConfig: { // AntennaDownlinkConfig
 *       spectrumConfig: { // SpectrumConfig
 *         centerFrequency: { // Frequency
 *           value: Number("double"), // required
 *           units: "STRING_VALUE", // required
 *         },
 *         bandwidth: { // FrequencyBandwidth
 *           value: Number("double"), // required
 *           units: "STRING_VALUE", // required
 *         },
 *         polarization: "STRING_VALUE",
 *       },
 *     },
 *     trackingConfig: { // TrackingConfig
 *       autotrack: "STRING_VALUE", // required
 *     },
 *     dataflowEndpointConfig: { // DataflowEndpointConfig
 *       dataflowEndpointName: "STRING_VALUE", // required
 *       dataflowEndpointRegion: "STRING_VALUE",
 *     },
 *     antennaDownlinkDemodDecodeConfig: { // AntennaDownlinkDemodDecodeConfig
 *       spectrumConfig: {
 *         centerFrequency: {
 *           value: Number("double"), // required
 *           units: "STRING_VALUE", // required
 *         },
 *         bandwidth: {
 *           value: Number("double"), // required
 *           units: "STRING_VALUE", // required
 *         },
 *         polarization: "STRING_VALUE",
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
 *           units: "STRING_VALUE", // required
 *         },
 *         polarization: "STRING_VALUE",
 *       },
 *       targetEirp: { // Eirp
 *         value: Number("double"), // required
 *         units: "STRING_VALUE", // required
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
 * //   configType: "STRING_VALUE",
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GroundStationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GroundStation", "UpdateConfig", {})
  .n("GroundStationClient", "UpdateConfigCommand")
  .f(void 0, void 0)
  .ser(se_UpdateConfigCommand)
  .de(de_UpdateConfigCommand)
  .build() {}
