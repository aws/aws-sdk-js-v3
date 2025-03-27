// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { StopChannelRequest, StopChannelResponse } from "../models/models_0";
import { de_StopChannelCommand, se_StopChannelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopChannelCommand}.
 */
export interface StopChannelCommandInput extends StopChannelRequest {}
/**
 * @public
 *
 * The output of {@link StopChannelCommand}.
 */
export interface StopChannelCommandOutput extends StopChannelResponse, __MetadataBearer {}

/**
 * <p>Stops a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, StopChannelCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, StopChannelCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // StopChannelRequest
 *   ChannelName: "STRING_VALUE", // required
 * };
 * const command = new StopChannelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopChannelCommandInput - {@link StopChannelCommandInput}
 * @returns {@link StopChannelCommandOutput}
 * @see {@link StopChannelCommandInput} for command's `input` shape.
 * @see {@link StopChannelCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class StopChannelCommand extends $Command
  .classBuilder<
    StopChannelCommandInput,
    StopChannelCommandOutput,
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
  .s("MediaTailor", "StopChannel", {})
  .n("MediaTailorClient", "StopChannelCommand")
  .f(void 0, void 0)
  .ser(se_StopChannelCommand)
  .de(de_StopChannelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopChannelRequest;
      output: {};
    };
    sdk: {
      input: StopChannelCommandInput;
      output: StopChannelCommandOutput;
    };
  };
}
