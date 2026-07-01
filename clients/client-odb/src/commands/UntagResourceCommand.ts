// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UntagResourceRequest, UntagResourceResponse } from "../models/models_0";
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
export interface UntagResourceCommandOutput extends UntagResourceResponse, __MetadataBearer {}

/**
 * <p>Removes tags from the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, UntagResourceCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, UntagResourceCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // UntagResourceRequest
 *   resourceArn: "STRING_VALUE", // required
 *   tagKeys: [ // TagKeys // required
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
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.</p>
 *
 * @throws {@link OdbServiceException}
 * <p>Base exception class for all service exceptions from Odb service.</p>
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
