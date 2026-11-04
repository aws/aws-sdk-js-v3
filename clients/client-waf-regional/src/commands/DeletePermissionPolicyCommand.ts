// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePermissionPolicyRequest, DeletePermissionPolicyResponse } from "../models/models_0";
import { DeletePermissionPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePermissionPolicyCommand}.
 */
export interface DeletePermissionPolicyCommandInput extends DeletePermissionPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeletePermissionPolicyCommand}.
 */
export interface DeletePermissionPolicyCommandOutput extends DeletePermissionPolicyResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Permanently deletes an IAM policy from the specified RuleGroup.
 *
 * The user making the request must be the owner of the RuleGroup.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, DeletePermissionPolicyCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, DeletePermissionPolicyCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // DeletePermissionPolicyRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new DeletePermissionPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePermissionPolicyCommandInput - {@link DeletePermissionPolicyCommandInput}
 * @returns {@link DeletePermissionPolicyCommandOutput}
 * @see {@link DeletePermissionPolicyCommandInput} for command's `input` shape.
 * @see {@link DeletePermissionPolicyCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *
 * The operation failed because of a system problem, even though the request was valid. Retry your request.
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *
 * The operation failed because the referenced object doesn't exist.
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
export class DeletePermissionPolicyCommand extends command<DeletePermissionPolicyCommandInput, DeletePermissionPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeletePermissionPolicy",
  DeletePermissionPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePermissionPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeletePermissionPolicyCommandInput;
      output: DeletePermissionPolicyCommandOutput;
    };
  };
}
