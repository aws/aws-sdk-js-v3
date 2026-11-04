// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateManagedRuleSetVersionExpiryDateRequest,
  UpdateManagedRuleSetVersionExpiryDateResponse,
} from "../models/models_0";
import { UpdateManagedRuleSetVersionExpiryDate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateManagedRuleSetVersionExpiryDateCommand}.
 */
export interface UpdateManagedRuleSetVersionExpiryDateCommandInput extends UpdateManagedRuleSetVersionExpiryDateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateManagedRuleSetVersionExpiryDateCommand}.
 */
export interface UpdateManagedRuleSetVersionExpiryDateCommandOutput extends UpdateManagedRuleSetVersionExpiryDateResponse, __MetadataBearer {}

/**
 * Updates the expiration information for your managed rule set. Use this to initiate the expiration of a managed rule group version. After you initiate expiration for a version, WAF excludes it from the response to ListAvailableManagedRuleGroupVersions for the managed rule group.
 *
 * > **Note:**
 * >
 * > This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers.
 * >
 * > Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are `ListManagedRuleSets`, `GetManagedRuleSet`, `PutManagedRuleSetVersions`, and `UpdateManagedRuleSetVersionExpiryDate`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, UpdateManagedRuleSetVersionExpiryDateCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, UpdateManagedRuleSetVersionExpiryDateCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // UpdateManagedRuleSetVersionExpiryDateRequest
 *   Name: "STRING_VALUE", // required
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   Id: "STRING_VALUE", // required
 *   LockToken: "STRING_VALUE", // required
 *   VersionToExpire: "STRING_VALUE", // required
 *   ExpiryTimestamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new UpdateManagedRuleSetVersionExpiryDateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateManagedRuleSetVersionExpiryDateResponse
 * //   ExpiringVersion: "STRING_VALUE",
 * //   ExpiryTimestamp: new Date("TIMESTAMP"),
 * //   NextLockToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateManagedRuleSetVersionExpiryDateCommandInput - {@link UpdateManagedRuleSetVersionExpiryDateCommandInput}
 * @returns {@link UpdateManagedRuleSetVersionExpiryDateCommandOutput}
 * @see {@link UpdateManagedRuleSetVersionExpiryDateCommandInput} for command's `input` shape.
 * @see {@link UpdateManagedRuleSetVersionExpiryDateCommandOutput} for command's `response` shape.
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
export class UpdateManagedRuleSetVersionExpiryDateCommand extends command<UpdateManagedRuleSetVersionExpiryDateCommandInput, UpdateManagedRuleSetVersionExpiryDateCommandOutput>(
  _ep0,
  _mw0,
  "UpdateManagedRuleSetVersionExpiryDate",
  UpdateManagedRuleSetVersionExpiryDate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateManagedRuleSetVersionExpiryDateRequest;
      output: UpdateManagedRuleSetVersionExpiryDateResponse;
    };
    sdk: {
      input: UpdateManagedRuleSetVersionExpiryDateCommandInput;
      output: UpdateManagedRuleSetVersionExpiryDateCommandOutput;
    };
  };
}
