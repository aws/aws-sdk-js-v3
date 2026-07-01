// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutChannelPolicyRequest, PutChannelPolicyResponse } from "../models/models_0";
import { PutChannelPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
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
 *
 * @public
 */
export class PutChannelPolicyCommand extends command<PutChannelPolicyCommandInput, PutChannelPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutChannelPolicy",
  PutChannelPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutChannelPolicyRequest;
      output: {};
    };
    sdk: {
      input: PutChannelPolicyCommandInput;
      output: PutChannelPolicyCommandOutput;
    };
  };
}
