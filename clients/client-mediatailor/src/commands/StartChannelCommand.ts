// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { StartChannelRequest, StartChannelResponse } from "../models/models_0";
import { de_StartChannelCommand, se_StartChannelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartChannelCommand}.
 */
export interface StartChannelCommandInput extends StartChannelRequest {}
/**
 * @public
 *
 * The output of {@link StartChannelCommand}.
 */
export interface StartChannelCommandOutput extends StartChannelResponse, __MetadataBearer {}

/**
 * <p>Starts a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, StartChannelCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, StartChannelCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // StartChannelRequest
 *   ChannelName: "STRING_VALUE", // required
 * };
 * const command = new StartChannelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartChannelCommandInput - {@link StartChannelCommandInput}
 * @returns {@link StartChannelCommandOutput}
 * @see {@link StartChannelCommandInput} for command's `input` shape.
 * @see {@link StartChannelCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class StartChannelCommand extends $Command
  .classBuilder<
    StartChannelCommandInput,
    StartChannelCommandOutput,
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
  .s("MediaTailor", "StartChannel", {})
  .n("MediaTailorClient", "StartChannelCommand")
  .f(void 0, void 0)
  .ser(se_StartChannelCommand)
  .de(de_StartChannelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartChannelRequest;
      output: {};
    };
    sdk: {
      input: StartChannelCommandInput;
      output: StartChannelCommandOutput;
    };
  };
}
