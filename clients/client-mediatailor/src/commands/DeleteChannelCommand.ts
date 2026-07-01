// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteChannelRequest, DeleteChannelResponse } from "../models/models_0";
import { DeleteChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteChannelCommand}.
 */
export interface DeleteChannelCommandInput extends DeleteChannelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteChannelCommand}.
 */
export interface DeleteChannelCommandOutput extends DeleteChannelResponse, __MetadataBearer {}

/**
 * <p>Deletes a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DeleteChannelCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DeleteChannelCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
 * const client = new MediaTailorClient(config);
 * const input = { // DeleteChannelRequest
 *   ChannelName: "STRING_VALUE", // required
 * };
 * const command = new DeleteChannelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteChannelCommandInput - {@link DeleteChannelCommandInput}
 * @returns {@link DeleteChannelCommandOutput}
 * @see {@link DeleteChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteChannelCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class DeleteChannelCommand extends command<DeleteChannelCommandInput, DeleteChannelCommandOutput>(
  _ep0,
  _mw0,
  "DeleteChannel",
  DeleteChannel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteChannelRequest;
      output: {};
    };
    sdk: {
      input: DeleteChannelCommandInput;
      output: DeleteChannelCommandOutput;
    };
  };
}
