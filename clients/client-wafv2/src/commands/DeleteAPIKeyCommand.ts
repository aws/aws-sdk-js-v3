// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAPIKeyRequest, DeleteAPIKeyResponse } from "../models/models_0";
import { DeleteAPIKey } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAPIKeyCommand}.
 */
export interface DeleteAPIKeyCommandInput extends DeleteAPIKeyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAPIKeyCommand}.
 */
export interface DeleteAPIKeyCommandOutput extends DeleteAPIKeyResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified API key. </p>
 *          <p>After you delete a key, it can take up to 24 hours for WAF to disallow use of the key in all regions. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, DeleteAPIKeyCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, DeleteAPIKeyCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // DeleteAPIKeyRequest
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   APIKey: "STRING_VALUE", // required
 * };
 * const command = new DeleteAPIKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAPIKeyCommandInput - {@link DeleteAPIKeyCommandInput}
 * @returns {@link DeleteAPIKeyCommandOutput}
 * @see {@link DeleteAPIKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteAPIKeyCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>Your request is valid, but WAF couldn’t perform the operation because of a system
 *          problem. Retry your request. </p>
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *  <p>The operation isn't valid. </p>
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *  <p>The operation failed because WAF didn't recognize a parameter in the request. For
 *          example: </p>
 *          <ul>
 *             <li>
 *                <p>You specified a parameter name or value that isn't valid.</p>
 *             </li>
 *             <li>
 *                <p>Your nested statement isn't valid. You might have tried to nest a statement that
 *                can’t be nested. </p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>WebACL</code> with a <code>DefaultAction</code> that
 *                isn't among the types available at <a>DefaultAction</a>.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                with which a web ACL can't be associated.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>WAF couldn’t perform the operation because your resource doesn't exist.
 *        If you've just created a resource that you're using in this operation, you might
 *        just need to wait a few minutes. It can take from a few seconds to a number of minutes
 *        for changes to propagate. </p>
 *
 * @throws {@link WAFOptimisticLockException} (client fault)
 *  <p>WAF couldn’t save your changes because you tried to update or delete a resource
 *          that has changed since you last retrieved it. Get the resource again, make any changes you
 *          need to make to the new copy, and retry your operation. </p>
 *
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 *
 * @public
 */
export class DeleteAPIKeyCommand extends $Command
  .classBuilder<
    DeleteAPIKeyCommandInput,
    DeleteAPIKeyCommandOutput,
    WAFV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_20190729", "DeleteAPIKey", {})
  .n("WAFV2Client", "DeleteAPIKeyCommand")
  .sc(DeleteAPIKey)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAPIKeyRequest;
      output: {};
    };
    sdk: {
      input: DeleteAPIKeyCommandInput;
      output: DeleteAPIKeyCommandOutput;
    };
  };
}
