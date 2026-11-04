// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteByteMatchSetRequest, DeleteByteMatchSetResponse } from "../models/models_0";
import { DeleteByteMatchSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteByteMatchSetCommand}.
 */
export interface DeleteByteMatchSetCommandInput extends DeleteByteMatchSetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteByteMatchSetCommand}.
 */
export interface DeleteByteMatchSetCommandOutput extends DeleteByteMatchSetResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Permanently deletes a ByteMatchSet. You can't delete a `ByteMatchSet` if it's still used in any `Rules` or if it still includes any ByteMatchTuple objects (any filters).
 *
 *
 *
 * If you just want to remove a `ByteMatchSet` from a `Rule`, use UpdateRule.
 *
 *
 *
 * To permanently delete a `ByteMatchSet`, perform the following steps:
 *
 * 1. Update the `ByteMatchSet` to remove filters, if any. For more information, see UpdateByteMatchSet.
 * 2. Use GetChangeToken to get the change token that you provide in the `ChangeToken` parameter of a `DeleteByteMatchSet` request.
 * 3. Submit a `DeleteByteMatchSet` request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, DeleteByteMatchSetCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, DeleteByteMatchSetCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * // import type { WAFClientConfig } from "@aws-sdk/client-waf";
 * const config = {}; // type is WAFClientConfig
 * const client = new WAFClient(config);
 * const input = { // DeleteByteMatchSetRequest
 *   ByteMatchSetId: "STRING_VALUE", // required
 *   ChangeToken: "STRING_VALUE", // required
 * };
 * const command = new DeleteByteMatchSetCommand(input);
 * const response = await client.send(command);
 * // { // DeleteByteMatchSetResponse
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteByteMatchSetCommandInput - {@link DeleteByteMatchSetCommandInput}
 * @returns {@link DeleteByteMatchSetCommandOutput}
 * @see {@link DeleteByteMatchSetCommandInput} for command's `input` shape.
 * @see {@link DeleteByteMatchSetCommandOutput} for command's `response` shape.
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
 * @example To delete a byte match set
 * ```javascript
 * // The following example deletes a byte match set with the ID exampleIDs3t-46da-4fdb-b8d5-abc321j569j5.
 * const input = {
 *   ByteMatchSetId: "exampleIDs3t-46da-4fdb-b8d5-abc321j569j5",
 *   ChangeToken: "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
 * };
 * const command = new DeleteByteMatchSetCommand(input);
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
export class DeleteByteMatchSetCommand extends command<DeleteByteMatchSetCommandInput, DeleteByteMatchSetCommandOutput>(
  _ep0,
  _mw0,
  "DeleteByteMatchSet",
  DeleteByteMatchSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteByteMatchSetRequest;
      output: DeleteByteMatchSetResponse;
    };
    sdk: {
      input: DeleteByteMatchSetCommandInput;
      output: DeleteByteMatchSetCommandOutput;
    };
  };
}
