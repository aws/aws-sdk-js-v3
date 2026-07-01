// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UntagResourceRequest } from "../models/models_0";
import { UntagResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UntagResourceCommand}.
 */
export interface UntagResourceCommandInput extends UntagResourceRequest {}
/**
 * @public
 *
 * The output of {@link UntagResourceCommand}.
 */
export interface UntagResourceCommandOutput extends __MetadataBearer {}

/**
 * Removes tags from the specified resource. You can specify one or more tags to remove.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, UntagResourceCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, UntagResourceCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * // import type { MediaPackageVodClientConfig } from "@aws-sdk/client-mediapackage-vod";
 * const config = {}; // type is MediaPackageVodClientConfig
 * const client = new MediaPackageVodClient(config);
 * const input = { // UntagResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   TagKeys: [ // __listOf__string // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UntagResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UntagResourceCommandInput - {@link UntagResourceCommandInput}
 * @returns {@link UntagResourceCommandOutput}
 * @see {@link UntagResourceCommandInput} for command's `input` shape.
 * @see {@link UntagResourceCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for MediaPackageVodClient's `config` shape.
 *
 * @throws {@link MediaPackageVodServiceException}
 * <p>Base exception class for all service exceptions from MediaPackageVod service.</p>
 *
 *
 * @public
 */
export class UntagResourceCommand extends command<UntagResourceCommandInput, UntagResourceCommandOutput>(
  _ep0,
  _mw0,
  "UntagResource",
  UntagResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UntagResourceRequest;
      output: {};
    };
    sdk: {
      input: UntagResourceCommandInput;
      output: UntagResourceCommandOutput;
    };
  };
}
