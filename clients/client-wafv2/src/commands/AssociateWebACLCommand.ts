// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateWebACLRequest, AssociateWebACLResponse } from "../models/models_0";
import { AssociateWebACL$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateWebACLCommand}.
 */
export interface AssociateWebACLCommandInput extends AssociateWebACLRequest {}
/**
 * @public
 *
 * The output of {@link AssociateWebACLCommand}.
 */
export interface AssociateWebACLCommandOutput extends AssociateWebACLResponse, __MetadataBearer {}

/**
 * Associates a web ACL with a resource, to protect the resource.
 *
 * Use this for all resource types except for Amazon CloudFront distributions. For Amazon CloudFront, call `UpdateDistribution` for the distribution and provide the Amazon Resource Name (ARN) of the web ACL in the web ACL ID. For information, see [UpdateDistribution](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html) in the *Amazon CloudFront Developer Guide*.
 *
 * **Required permissions for customer-managed IAM policies**
 *
 * This call requires permissions that are specific to the protected resource type. For details, see [Permissions for AssociateWebACL](https://docs.aws.amazon.com/waf/latest/developerguide/security_iam_service-with-iam.html#security_iam_action-AssociateWebACL) in the *WAF Developer Guide*.
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
 * import { WAFV2Client, AssociateWebACLCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, AssociateWebACLCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // AssociateWebACLRequest
 *   WebACLArn: "STRING_VALUE", // required
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateWebACLCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateWebACLCommandInput - {@link AssociateWebACLCommandInput}
 * @returns {@link AssociateWebACLCommandOutput}
 * @see {@link AssociateWebACLCommandInput} for command's `input` shape.
 * @see {@link AssociateWebACLCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFFeatureNotIncludedInPricingPlanException} (client fault)
 *
 * The operation failed because the specified WAF feature isn't supported by the CloudFront pricing plan associated with the web ACL.
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
 * @throws {@link WAFUnavailableEntityException} (client fault)
 *
 * WAF couldn’t retrieve a resource that you specified for this operation. If you've just created a resource that you're using in this operation, you might just need to wait a few minutes. It can take from a few seconds to a number of minutes for changes to propagate. Verify the resource specifications in your request parameters and then retry the operation.
 *
 * @throws {@link WAFV2ServiceException}
 *
 * Base exception class for all service exceptions from WAFV2 service.
 *
 * @public
 */
export class AssociateWebACLCommand extends command<AssociateWebACLCommandInput, AssociateWebACLCommandOutput>(
  _ep0,
  _mw0,
  "AssociateWebACL",
  AssociateWebACL$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateWebACLRequest;
      output: {};
    };
    sdk: {
      input: AssociateWebACLCommandInput;
      output: AssociateWebACLCommandOutput;
    };
  };
}
