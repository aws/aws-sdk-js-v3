// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { GetChannelPolicyRequest, GetChannelPolicyResponse } from "../models/models_0";
import { GetChannelPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetChannelPolicyCommand}.
 */
export interface GetChannelPolicyCommandInput extends GetChannelPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetChannelPolicyCommand}.
 */
export interface GetChannelPolicyCommandOutput extends GetChannelPolicyResponse, __MetadataBearer {}

/**
 * <p>Returns the channel's IAM policy. IAM policies are used to control access to your channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, GetChannelPolicyCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, GetChannelPolicyCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
 * const client = new MediaTailorClient(config);
 * const input = { // GetChannelPolicyRequest
 *   ChannelName: "STRING_VALUE", // required
 * };
 * const command = new GetChannelPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetChannelPolicyResponse
 * //   Policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetChannelPolicyCommandInput - {@link GetChannelPolicyCommandInput}
 * @returns {@link GetChannelPolicyCommandOutput}
 * @see {@link GetChannelPolicyCommandInput} for command's `input` shape.
 * @see {@link GetChannelPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class GetChannelPolicyCommand extends $Command
  .classBuilder<
    GetChannelPolicyCommandInput,
    GetChannelPolicyCommandOutput,
    MediaTailorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaTailorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaTailor", "GetChannelPolicy", {})
  .n("MediaTailorClient", "GetChannelPolicyCommand")
  .sc(GetChannelPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetChannelPolicyRequest;
      output: GetChannelPolicyResponse;
    };
    sdk: {
      input: GetChannelPolicyCommandInput;
      output: GetChannelPolicyCommandOutput;
    };
  };
}
