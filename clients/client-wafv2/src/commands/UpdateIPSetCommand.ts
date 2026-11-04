// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateIPSetRequest, UpdateIPSetResponse } from "../models/models_0";
import { UpdateIPSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateIPSetCommand}.
 */
export interface UpdateIPSetCommandInput extends UpdateIPSetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIPSetCommand}.
 */
export interface UpdateIPSetCommandOutput extends UpdateIPSetResponse, __MetadataBearer {}

/**
 * Updates the specified IPSet.
 *
 * > **Note:**
 * >
 * > This operation completely replaces the mutable specifications that you already have for the IP set with the ones that you provide to this call.
 * >
 * > To modify an IP set, do the following:
 * >
 * > 1. Retrieve it by calling GetIPSet
 * > 2. Update its settings as needed
 * > 3. Provide the complete IP set specification to this call
 *
 * **Temporary inconsistencies during updates**
 *
 * When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes.
 *
 * The following are examples of the temporary inconsistencies that you might notice during change propagation:
 *
 * - After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable.
 * - After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another.
 * - After you change a rule action setting, you might see the old action in some places and the new action in others.
 * - After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, UpdateIPSetCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, UpdateIPSetCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // UpdateIPSetRequest
 *   Name: "STRING_VALUE", // required
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   Id: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Addresses: [ // IPAddresses // required
 *     "STRING_VALUE",
 *   ],
 *   LockToken: "STRING_VALUE", // required
 * };
 * const command = new UpdateIPSetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIPSetResponse
 * //   NextLockToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateIPSetCommandInput - {@link UpdateIPSetCommandInput}
 * @returns {@link UpdateIPSetCommandOutput}
 * @see {@link UpdateIPSetCommandInput} for command's `input` shape.
 * @see {@link UpdateIPSetCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFDuplicateItemException} (client fault)
 *
 * WAF couldn’t perform the operation because the resource that you tried to save is a duplicate of an existing one.
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
 * @throws {@link WAFLimitsExceededException} (client fault)
 *
 * WAF couldn’t perform the operation because you exceeded your resource limit. For example, the maximum number of `WebACL` objects that you can create for an Amazon Web Services account. For more information, see [WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *WAF Developer Guide*.
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
export class UpdateIPSetCommand extends command<UpdateIPSetCommandInput, UpdateIPSetCommandOutput>(
  _ep0,
  _mw0,
  "UpdateIPSet",
  UpdateIPSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIPSetRequest;
      output: UpdateIPSetResponse;
    };
    sdk: {
      input: UpdateIPSetCommandInput;
      output: UpdateIPSetCommandOutput;
    };
  };
}
