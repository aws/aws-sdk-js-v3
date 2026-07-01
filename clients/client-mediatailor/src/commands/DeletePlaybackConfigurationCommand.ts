// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePlaybackConfigurationRequest, DeletePlaybackConfigurationResponse } from "../models/models_0";
import { DeletePlaybackConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DeletePlaybackConfigurationCommandOutput extends DeletePlaybackConfigurationResponse, __MetadataBearer {}

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
export class DeletePlaybackConfigurationCommand extends command<DeletePlaybackConfigurationCommandInput, DeletePlaybackConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeletePlaybackConfiguration",
  DeletePlaybackConfiguration$
) {
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
