// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import {
  ConfigureLogsForPlaybackConfigurationRequest,
  ConfigureLogsForPlaybackConfigurationResponse,
} from "../models/models_0";
import {
  de_ConfigureLogsForPlaybackConfigurationCommand,
  se_ConfigureLogsForPlaybackConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ConfigureLogsForPlaybackConfigurationCommand}.
 */
export interface ConfigureLogsForPlaybackConfigurationCommandInput
  extends ConfigureLogsForPlaybackConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link ConfigureLogsForPlaybackConfigurationCommand}.
 */
export interface ConfigureLogsForPlaybackConfigurationCommandOutput
  extends ConfigureLogsForPlaybackConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Defines where AWS Elemental MediaTailor sends logs for the playback configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, ConfigureLogsForPlaybackConfigurationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, ConfigureLogsForPlaybackConfigurationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // ConfigureLogsForPlaybackConfigurationRequest
 *   PercentEnabled: Number("int"), // required
 *   PlaybackConfigurationName: "STRING_VALUE", // required
 *   EnabledLoggingStrategies: [ // __listOfLoggingStrategies
 *     "VENDED_LOGS" || "LEGACY_CLOUDWATCH",
 *   ],
 * };
 * const command = new ConfigureLogsForPlaybackConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // ConfigureLogsForPlaybackConfigurationResponse
 * //   PercentEnabled: Number("int"), // required
 * //   PlaybackConfigurationName: "STRING_VALUE",
 * //   EnabledLoggingStrategies: [ // __listOfLoggingStrategies
 * //     "VENDED_LOGS" || "LEGACY_CLOUDWATCH",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ConfigureLogsForPlaybackConfigurationCommandInput - {@link ConfigureLogsForPlaybackConfigurationCommandInput}
 * @returns {@link ConfigureLogsForPlaybackConfigurationCommandOutput}
 * @see {@link ConfigureLogsForPlaybackConfigurationCommandInput} for command's `input` shape.
 * @see {@link ConfigureLogsForPlaybackConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 * @public
 */
export class ConfigureLogsForPlaybackConfigurationCommand extends $Command
  .classBuilder<
    ConfigureLogsForPlaybackConfigurationCommandInput,
    ConfigureLogsForPlaybackConfigurationCommandOutput,
    MediaTailorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaTailorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaTailor", "ConfigureLogsForPlaybackConfiguration", {})
  .n("MediaTailorClient", "ConfigureLogsForPlaybackConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_ConfigureLogsForPlaybackConfigurationCommand)
  .de(de_ConfigureLogsForPlaybackConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConfigureLogsForPlaybackConfigurationRequest;
      output: ConfigureLogsForPlaybackConfigurationResponse;
    };
    sdk: {
      input: ConfigureLogsForPlaybackConfigurationCommandInput;
      output: ConfigureLogsForPlaybackConfigurationCommandOutput;
    };
  };
}
