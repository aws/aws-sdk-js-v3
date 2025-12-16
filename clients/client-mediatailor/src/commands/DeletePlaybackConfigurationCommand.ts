// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import type { DeletePlaybackConfigurationRequest, DeletePlaybackConfigurationResponse } from "../models/models_0";
import { DeletePlaybackConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePlaybackConfigurationCommand}.
 */
export interface DeletePlaybackConfigurationCommandInput extends DeletePlaybackConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeletePlaybackConfigurationCommand}.
 */
export interface DeletePlaybackConfigurationCommandOutput
  extends DeletePlaybackConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a playback configuration. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DeletePlaybackConfigurationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DeletePlaybackConfigurationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
 * const client = new MediaTailorClient(config);
 * const input = { // DeletePlaybackConfigurationRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeletePlaybackConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePlaybackConfigurationCommandInput - {@link DeletePlaybackConfigurationCommandInput}
 * @returns {@link DeletePlaybackConfigurationCommandOutput}
 * @see {@link DeletePlaybackConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeletePlaybackConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class DeletePlaybackConfigurationCommand extends $Command
  .classBuilder<
    DeletePlaybackConfigurationCommandInput,
    DeletePlaybackConfigurationCommandOutput,
    MediaTailorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaTailorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaTailor", "DeletePlaybackConfiguration", {})
  .n("MediaTailorClient", "DeletePlaybackConfigurationCommand")
  .sc(DeletePlaybackConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePlaybackConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeletePlaybackConfigurationCommandInput;
      output: DeletePlaybackConfigurationCommandOutput;
    };
  };
}
