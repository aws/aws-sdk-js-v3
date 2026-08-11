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
 * <p>Removes tags from an account access manager resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountAccessClient, UntagResourceCommand } from "@aws-sdk/client-account-access"; // ES Modules import
 * // const { AccountAccessClient, UntagResourceCommand } = require("@aws-sdk/client-account-access"); // CommonJS import
 * // import type { AccountAccessClientConfig } from "@aws-sdk/client-account-access";
 * const config = {}; // type is AccountAccessClientConfig
 * const client = new AccountAccessClient(config);
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
 * @see {@link AccountAccessClientResolvedConfig | config} for AccountAccessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred. Try your request again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist. Verify that the resource identifier is correct and that the resource exists in the current Region.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Try your request again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by the service. Check your request parameters and retry the request.</p>
 *
 * @throws {@link AccountAccessServiceException}
 * <p>Base exception class for all service exceptions from AccountAccess service.</p>
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
