// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { ConfigureLogsForChannelRequest, ConfigureLogsForChannelResponse } from "../models/models_0";
import { de_ConfigureLogsForChannelCommand, se_ConfigureLogsForChannelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ConfigureLogsForChannelCommand}.
 */
export interface ConfigureLogsForChannelCommandInput extends ConfigureLogsForChannelRequest {}
/**
 * @public
 *
 * The output of {@link ConfigureLogsForChannelCommand}.
 */
export interface ConfigureLogsForChannelCommandOutput extends ConfigureLogsForChannelResponse, __MetadataBearer {}

/**
 * <p>Configures Amazon CloudWatch log settings for a channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, ConfigureLogsForChannelCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, ConfigureLogsForChannelCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
 * const client = new MediaTailorClient(config);
 * const input = { // ConfigureLogsForChannelRequest
 *   ChannelName: "STRING_VALUE", // required
 *   LogTypes: [ // LogTypes // required
 *     "AS_RUN",
 *   ],
 * };
 * const command = new ConfigureLogsForChannelCommand(input);
 * const response = await client.send(command);
 * // { // ConfigureLogsForChannelResponse
 * //   ChannelName: "STRING_VALUE",
 * //   LogTypes: [ // LogTypes
 * //     "AS_RUN",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ConfigureLogsForChannelCommandInput - {@link ConfigureLogsForChannelCommandInput}
 * @returns {@link ConfigureLogsForChannelCommandOutput}
 * @see {@link ConfigureLogsForChannelCommandInput} for command's `input` shape.
 * @see {@link ConfigureLogsForChannelCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class ConfigureLogsForChannelCommand extends $Command
  .classBuilder<
    ConfigureLogsForChannelCommandInput,
    ConfigureLogsForChannelCommandOutput,
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
  .s("MediaTailor", "ConfigureLogsForChannel", {})
  .n("MediaTailorClient", "ConfigureLogsForChannelCommand")
  .f(void 0, void 0)
  .ser(se_ConfigureLogsForChannelCommand)
  .de(de_ConfigureLogsForChannelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConfigureLogsForChannelRequest;
      output: ConfigureLogsForChannelResponse;
    };
    sdk: {
      input: ConfigureLogsForChannelCommandInput;
      output: ConfigureLogsForChannelCommandOutput;
    };
  };
}
