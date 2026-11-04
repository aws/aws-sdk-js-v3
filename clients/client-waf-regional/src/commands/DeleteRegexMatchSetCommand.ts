// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRegexMatchSetRequest, DeleteRegexMatchSetResponse } from "../models/models_0";
import { DeleteRegexMatchSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRegexMatchSetCommand}.
 */
export interface DeleteRegexMatchSetCommandInput extends DeleteRegexMatchSetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRegexMatchSetCommand}.
 */
export interface DeleteRegexMatchSetCommandOutput extends DeleteRegexMatchSetResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Permanently deletes a RegexMatchSet. You can't delete a `RegexMatchSet` if it's still used in any `Rules` or if it still includes any `RegexMatchTuples` objects (any filters).
 *
 *
 *
 * If you just want to remove a `RegexMatchSet` from a `Rule`, use UpdateRule.
 *
 *
 *
 * To permanently delete a `RegexMatchSet`, perform the following steps:
 *
 * 1. Update the `RegexMatchSet` to remove filters, if any. For more information, see UpdateRegexMatchSet.
 * 2. Use GetChangeToken to get the change token that you provide in the `ChangeToken` parameter of a `DeleteRegexMatchSet` request.
 * 3. Submit a `DeleteRegexMatchSet` request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, DeleteRegexMatchSetCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, DeleteRegexMatchSetCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // DeleteRegexMatchSetRequest
 *   RegexMatchSetId: "STRING_VALUE", // required
 *   ChangeToken: "STRING_VALUE", // required
 * };
 * const command = new DeleteRegexMatchSetCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRegexMatchSetResponse
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteRegexMatchSetCommandInput - {@link DeleteRegexMatchSetCommandInput}
 * @returns {@link DeleteRegexMatchSetCommandOutput}
 * @see {@link DeleteRegexMatchSetCommandInput} for command's `input` shape.
 * @see {@link DeleteRegexMatchSetCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *
 * The operation failed because of a system problem, even though the request was valid. Retry your request.
 *
 * @throws {@link WAFInvalidAccountException} (client fault)
 *
 * The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.
 *
 * @throws {@link WAFNonEmptyEntityException} (client fault)
 *
 * The operation failed because you tried to delete an object that isn't empty. For example:
 *
 * - You tried to delete a `WebACL` that still contains one or more `Rule` objects.
 * - You tried to delete a `Rule` that still contains one or more `ByteMatchSet` objects or other predicates.
 * - You tried to delete a `ByteMatchSet` that contains one or more `ByteMatchTuple` objects.
 * - You tried to delete an `IPSet` that references one or more IP addresses.
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *
 * The operation failed because the referenced object doesn't exist.
 *
 * @throws {@link WAFReferencedItemException} (client fault)
 *
 * The operation failed because you tried to delete an object that is still in use. For example:
 *
 * - You tried to delete a `ByteMatchSet` that is still referenced by a `Rule`.
 * - You tried to delete a `Rule` that is still referenced by a `WebACL`.
 *
 * @throws {@link WAFStaleDataException} (client fault)
 *
 * The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.
 *
 * @throws {@link WAFRegionalServiceException}
 *
 * Base exception class for all service exceptions from WAFRegional service.
 *
 * @public
 */
export class DeleteRegexMatchSetCommand extends command<DeleteRegexMatchSetCommandInput, DeleteRegexMatchSetCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRegexMatchSet",
  DeleteRegexMatchSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRegexMatchSetRequest;
      output: DeleteRegexMatchSetResponse;
    };
    sdk: {
      input: DeleteRegexMatchSetCommandInput;
      output: DeleteRegexMatchSetCommandOutput;
    };
  };
}
