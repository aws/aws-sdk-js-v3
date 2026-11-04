// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSizeConstraintSetRequest, DeleteSizeConstraintSetResponse } from "../models/models_0";
import { DeleteSizeConstraintSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSizeConstraintSetCommand}.
 */
export interface DeleteSizeConstraintSetCommandInput extends DeleteSizeConstraintSetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSizeConstraintSetCommand}.
 */
export interface DeleteSizeConstraintSetCommandOutput extends DeleteSizeConstraintSetResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Permanently deletes a SizeConstraintSet. You can't delete a `SizeConstraintSet` if it's still used in any `Rules` or if it still includes any SizeConstraint objects (any filters).
 *
 *
 *
 * If you just want to remove a `SizeConstraintSet` from a `Rule`, use UpdateRule.
 *
 *
 *
 * To permanently delete a `SizeConstraintSet`, perform the following steps:
 *
 * 1. Update the `SizeConstraintSet` to remove filters, if any. For more information, see UpdateSizeConstraintSet.
 * 2. Use GetChangeToken to get the change token that you provide in the `ChangeToken` parameter of a `DeleteSizeConstraintSet` request.
 * 3. Submit a `DeleteSizeConstraintSet` request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, DeleteSizeConstraintSetCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, DeleteSizeConstraintSetCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * // import type { WAFClientConfig } from "@aws-sdk/client-waf";
 * const config = {}; // type is WAFClientConfig
 * const client = new WAFClient(config);
 * const input = { // DeleteSizeConstraintSetRequest
 *   SizeConstraintSetId: "STRING_VALUE", // required
 *   ChangeToken: "STRING_VALUE", // required
 * };
 * const command = new DeleteSizeConstraintSetCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSizeConstraintSetResponse
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteSizeConstraintSetCommandInput - {@link DeleteSizeConstraintSetCommandInput}
 * @returns {@link DeleteSizeConstraintSetCommandOutput}
 * @see {@link DeleteSizeConstraintSetCommandInput} for command's `input` shape.
 * @see {@link DeleteSizeConstraintSetCommandOutput} for command's `response` shape.
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
 * @example To delete a size constraint set
 * ```javascript
 * // The following example deletes a size constraint set  with the ID example1ds3t-46da-4fdb-b8d5-abc321j569j5.
 * const input = {
 *   ChangeToken: "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
 *   SizeConstraintSetId: "example1ds3t-46da-4fdb-b8d5-abc321j569j5"
 * };
 * const command = new DeleteSizeConstraintSetCommand(input);
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
export class DeleteSizeConstraintSetCommand extends command<DeleteSizeConstraintSetCommandInput, DeleteSizeConstraintSetCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSizeConstraintSet",
  DeleteSizeConstraintSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSizeConstraintSetRequest;
      output: DeleteSizeConstraintSetResponse;
    };
    sdk: {
      input: DeleteSizeConstraintSetCommandInput;
      output: DeleteSizeConstraintSetCommandOutput;
    };
  };
}
