// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAPIKeyRequest, DeleteAPIKeyResponse } from "../models/models_0";
import { DeleteAPIKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the specified API key.
 *
 * After you delete a key, it can take up to 24 hours for WAF to disallow use of the key in all regions.
 *
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
 *
 * Your request is valid, but WAF couldn’t perform the operation because of a system problem. Retry your request.
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *
 * The operation isn't valid.
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *
 * The operation failed because WAF didn't recognize a parameter in the request. For example:
 *
 * - You specified a parameter name or value that isn't valid.
 * - Your nested statement isn't valid. You might have tried to nest a statement that can’t be nested.
 * - You tried to update a `WebACL` with a `DefaultAction` that isn't among the types available at DefaultAction.
 * - Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL can't be associated.
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *
 * WAF couldn’t perform the operation because your resource doesn't exist. If you've just created a resource that you're using in this operation, you might just need to wait a few minutes. It can take from a few seconds to a number of minutes for changes to propagate.
 *
 * @throws {@link WAFOptimisticLockException} (client fault)
 *
 * WAF couldn’t save your changes because you tried to update or delete a resource that has changed since you last retrieved it. Get the resource again, make any changes you need to make to the new copy, and retry your operation.
 *
 * @throws {@link WAFV2ServiceException}
 *
 * Base exception class for all service exceptions from WAFV2 service.
 *
 * @public
 */
export class DeleteAPIKeyCommand extends command<DeleteAPIKeyCommandInput, DeleteAPIKeyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAPIKey",
  DeleteAPIKey$
) {
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
