// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { DeleteChannelPolicyRequest, DeleteChannelPolicyResponse } from "../models/models_0";
import { DeleteChannelPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteChannelPolicyCommand}.
 */
export interface DeleteChannelPolicyCommandInput extends DeleteChannelPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteChannelPolicyCommand}.
 */
export interface DeleteChannelPolicyCommandOutput extends DeleteChannelPolicyResponse, __MetadataBearer {}

/**
 * <p>The channel policy to delete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DeleteChannelPolicyCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DeleteChannelPolicyCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
 * const client = new MediaTailorClient(config);
 * const input = { // DeleteChannelPolicyRequest
 *   ChannelName: "STRING_VALUE", // required
 * };
 * const command = new DeleteChannelPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteChannelPolicyCommandInput - {@link DeleteChannelPolicyCommandInput}
 * @returns {@link DeleteChannelPolicyCommandOutput}
 * @see {@link DeleteChannelPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteChannelPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class DeleteChannelPolicyCommand extends $Command
  .classBuilder<
    DeleteChannelPolicyCommandInput,
    DeleteChannelPolicyCommandOutput,
    MediaTailorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaTailorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaTailor", "DeleteChannelPolicy", {})
  .n("MediaTailorClient", "DeleteChannelPolicyCommand")
  .sc(DeleteChannelPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteChannelPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteChannelPolicyCommandInput;
      output: DeleteChannelPolicyCommandOutput;
    };
  };
}
