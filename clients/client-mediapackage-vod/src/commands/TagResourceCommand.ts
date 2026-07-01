// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TagResourceRequest } from "../models/models_0";
import { TagResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TagResourceCommand}.
 */
export interface TagResourceCommandInput extends TagResourceRequest {}
/**
 * @public
 *
 * The output of {@link TagResourceCommand}.
 */
export interface TagResourceCommandOutput extends __MetadataBearer {}

/**
 * Adds tags to the specified resource. You can specify one or more tags to add.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, TagResourceCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, TagResourceCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * // import type { MediaPackageVodClientConfig } from "@aws-sdk/client-mediapackage-vod";
 * const config = {}; // type is MediaPackageVodClientConfig
 * const client = new MediaPackageVodClient(config);
 * const input = { // TagResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   Tags: { // __mapOf__string // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TagResourceCommandInput - {@link TagResourceCommandInput}
 * @returns {@link TagResourceCommandOutput}
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for MediaPackageVodClient's `config` shape.
 *
 * @throws {@link MediaPackageVodServiceException}
 * <p>Base exception class for all service exceptions from MediaPackageVod service.</p>
 *
 *
 * @public
 */
export class TagResourceCommand extends command<TagResourceCommandInput, TagResourceCommandOutput>(
  _ep0,
  _mw0,
  "TagResource",
  TagResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TagResourceRequest;
      output: {};
    };
    sdk: {
      input: TagResourceCommandInput;
      output: TagResourceCommandOutput;
    };
  };
}
