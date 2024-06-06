// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { PutChannelPolicyRequest, PutChannelPolicyResponse } from "../models/models_0";
import { de_PutChannelPolicyCommand, se_PutChannelPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutChannelPolicyCommand}.
 */
export interface PutChannelPolicyCommandInput extends PutChannelPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutChannelPolicyCommand}.
 */
export interface PutChannelPolicyCommandOutput extends PutChannelPolicyResponse, __MetadataBearer {}

/**
 * <p>Creates an IAM policy for the channel. IAM policies are used to control access to your channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, PutChannelPolicyCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, PutChannelPolicyCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // PutChannelPolicyRequest
 *   ChannelName: "STRING_VALUE", // required
 *   Policy: "STRING_VALUE", // required
 * };
 * const command = new PutChannelPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutChannelPolicyCommandInput - {@link PutChannelPolicyCommandInput}
 * @returns {@link PutChannelPolicyCommandOutput}
 * @see {@link PutChannelPolicyCommandInput} for command's `input` shape.
 * @see {@link PutChannelPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 * @public
 */
export class PutChannelPolicyCommand extends $Command
  .classBuilder<
    PutChannelPolicyCommandInput,
    PutChannelPolicyCommandOutput,
    MediaTailorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MediaTailorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaTailor", "PutChannelPolicy", {})
  .n("MediaTailorClient", "PutChannelPolicyCommand")
  .f(void 0, void 0)
  .ser(se_PutChannelPolicyCommand)
  .de(de_PutChannelPolicyCommand)
  .build() {}
