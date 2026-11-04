// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopChannelRequest, StopChannelResponse } from "../models/models_0";
import { StopChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Stops a channel. For information about MediaTailor channels, see [Working with channels](https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html) in the *MediaTailor User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, StopChannelCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, StopChannelCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
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
 *
 * Base exception class for all service exceptions from MediaTailor service.
 *
 * @public
 */
export class StopChannelCommand extends command<StopChannelCommandInput, StopChannelCommandOutput>(
  _ep0,
  _mw0,
  "StopChannel",
  StopChannel$
) {
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
