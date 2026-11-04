// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListResourcesForWebACLRequest, ListResourcesForWebACLResponse } from "../models/models_0";
import { ListResourcesForWebACL$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListResourcesForWebACLCommand}.
 */
export interface ListResourcesForWebACLCommandInput extends ListResourcesForWebACLRequest {}
/**
 * @public
 *
 * The output of {@link ListResourcesForWebACLCommand}.
 */
export interface ListResourcesForWebACLCommandOutput extends ListResourcesForWebACLResponse, __MetadataBearer {}

/**
 * Retrieves an array of the Amazon Resource Names (ARNs) for the resources that are associated with the specified web ACL.
 *
 * For Amazon CloudFront, don't use this call. Instead, use the CloudFront call `ListDistributionsByWebACLId`. For information, see [ListDistributionsByWebACLId](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByWebACLId.html) in the *Amazon CloudFront API Reference*.
 *
 * **Required permissions for customer-managed IAM policies**
 *
 * This call requires permissions that are specific to the protected resource type. For details, see [Permissions for ListResourcesForWebACL](https://docs.aws.amazon.com/waf/latest/developerguide/security_iam_service-with-iam.html#security_iam_action-ListResourcesForWebACL) in the *WAF Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListResourcesForWebACLCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, ListResourcesForWebACLCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // ListResourcesForWebACLRequest
 *   WebACLArn: "STRING_VALUE", // required
 *   ResourceType: "APPLICATION_LOAD_BALANCER" || "API_GATEWAY" || "APPSYNC" || "COGNITO_USER_POOL" || "APP_RUNNER_SERVICE" || "VERIFIED_ACCESS_INSTANCE" || "AMPLIFY" || "AGENTCORE_GATEWAY",
 * };
 * const command = new ListResourcesForWebACLCommand(input);
 * const response = await client.send(command);
 * // { // ListResourcesForWebACLResponse
 * //   ResourceArns: [ // ResourceArns
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListResourcesForWebACLCommandInput - {@link ListResourcesForWebACLCommandInput}
 * @returns {@link ListResourcesForWebACLCommandOutput}
 * @see {@link ListResourcesForWebACLCommandInput} for command's `input` shape.
 * @see {@link ListResourcesForWebACLCommandOutput} for command's `response` shape.
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
 * @throws {@link WAFV2ServiceException}
 *
 * Base exception class for all service exceptions from WAFV2 service.
 *
 * @public
 */
export class ListResourcesForWebACLCommand extends command<ListResourcesForWebACLCommandInput, ListResourcesForWebACLCommandOutput>(
  _ep0,
  _mw0,
  "ListResourcesForWebACL",
  ListResourcesForWebACL$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourcesForWebACLRequest;
      output: ListResourcesForWebACLResponse;
    };
    sdk: {
      input: ListResourcesForWebACLCommandInput;
      output: ListResourcesForWebACLCommandOutput;
    };
  };
}
