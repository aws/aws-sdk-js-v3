// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSqlInjectionMatchSetRequest, DeleteSqlInjectionMatchSetResponse } from "../models/models_0";
import { DeleteSqlInjectionMatchSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSqlInjectionMatchSetCommand}.
 */
export interface DeleteSqlInjectionMatchSetCommandInput extends DeleteSqlInjectionMatchSetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSqlInjectionMatchSetCommand}.
 */
export interface DeleteSqlInjectionMatchSetCommandOutput extends DeleteSqlInjectionMatchSetResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Permanently deletes a SqlInjectionMatchSet. You can't delete a `SqlInjectionMatchSet` if it's still used in any `Rules` or if it still contains any SqlInjectionMatchTuple objects.
 *
 * If you just want to remove a `SqlInjectionMatchSet` from a `Rule`, use UpdateRule.
 *
 * To permanently delete a `SqlInjectionMatchSet` from AWS WAF, perform the following steps:
 *
 * 1. Update the `SqlInjectionMatchSet` to remove filters, if any. For more information, see UpdateSqlInjectionMatchSet.
 * 2. Use GetChangeToken to get the change token that you provide in the `ChangeToken` parameter of a `DeleteSqlInjectionMatchSet` request.
 * 3. Submit a `DeleteSqlInjectionMatchSet` request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, DeleteSqlInjectionMatchSetCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, DeleteSqlInjectionMatchSetCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * // import type { WAFClientConfig } from "@aws-sdk/client-waf";
 * const config = {}; // type is WAFClientConfig
 * const client = new WAFClient(config);
 * const input = { // DeleteSqlInjectionMatchSetRequest
 *   SqlInjectionMatchSetId: "STRING_VALUE", // required
 *   ChangeToken: "STRING_VALUE", // required
 * };
 * const command = new DeleteSqlInjectionMatchSetCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSqlInjectionMatchSetResponse
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteSqlInjectionMatchSetCommandInput - {@link DeleteSqlInjectionMatchSetCommandInput}
 * @returns {@link DeleteSqlInjectionMatchSetCommandOutput}
 * @see {@link DeleteSqlInjectionMatchSetCommandInput} for command's `input` shape.
 * @see {@link DeleteSqlInjectionMatchSetCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
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
 * @throws {@link WAFServiceException}
 *
 * Base exception class for all service exceptions from WAF service.
 *
 * @example To delete a SQL injection match set
 * ```javascript
 * // The following example deletes a SQL injection match set  with the ID example1ds3t-46da-4fdb-b8d5-abc321j569j5.
 * const input = {
 *   ChangeToken: "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
 *   SqlInjectionMatchSetId: "example1ds3t-46da-4fdb-b8d5-abc321j569j5"
 * };
 * const command = new DeleteSqlInjectionMatchSetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ChangeToken: "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteSqlInjectionMatchSetCommand extends command<DeleteSqlInjectionMatchSetCommandInput, DeleteSqlInjectionMatchSetCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSqlInjectionMatchSet",
  DeleteSqlInjectionMatchSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSqlInjectionMatchSetRequest;
      output: DeleteSqlInjectionMatchSetResponse;
    };
    sdk: {
      input: DeleteSqlInjectionMatchSetCommandInput;
      output: DeleteSqlInjectionMatchSetCommandOutput;
    };
  };
}
