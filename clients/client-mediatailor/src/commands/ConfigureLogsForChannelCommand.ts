// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ConfigureLogsForChannelRequest, ConfigureLogsForChannelResponse } from "../models/models_0";
import { ConfigureLogsForChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export class ConfigureLogsForChannelCommand extends command<ConfigureLogsForChannelCommandInput, ConfigureLogsForChannelCommandOutput>(
  _ep0,
  _mw0,
  "ConfigureLogsForChannel",
  ConfigureLogsForChannel$
) {
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
