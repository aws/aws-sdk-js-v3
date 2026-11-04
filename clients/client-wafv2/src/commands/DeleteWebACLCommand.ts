// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteWebACLRequest, DeleteWebACLResponse } from "../models/models_0";
import { DeleteWebACL$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteWebACLCommand}.
 */
export interface DeleteWebACLCommandInput extends DeleteWebACLRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWebACLCommand}.
 */
export interface DeleteWebACLCommandOutput extends DeleteWebACLResponse, __MetadataBearer {}

/**
 * Deletes the specified WebACL.
 *
 * You can only use this if `ManagedByFirewallManager` is false in the web ACL.
 *
 * > **Note:**
 * >
 * > Before deleting any web ACL, first disassociate it from all resources.
 * >
 * > - To retrieve a list of the resources that are associated with a web ACL, use the following calls:
 * >
 * >   - For Amazon CloudFront distributions, use the CloudFront call `ListDistributionsByWebACLId`. For information, see [ListDistributionsByWebACLId](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByWebACLId.html) in the *Amazon CloudFront API Reference*.
 * >   - For all other resources, call ListResourcesForWebACL.
 * > - To disassociate a resource from a web ACL, use the following calls:
 * >
 * >   - For Amazon CloudFront distributions, provide an empty web ACL ID in the CloudFront call `UpdateDistribution`. For information, see [UpdateDistribution](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html) in the *Amazon CloudFront API Reference*.
 * >   - For all other resources, call DisassociateWebACL.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, DeleteWebACLCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, DeleteWebACLCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // DeleteWebACLRequest
 *   Name: "STRING_VALUE", // required
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   Id: "STRING_VALUE", // required
 *   LockToken: "STRING_VALUE", // required
 * };
 * const command = new DeleteWebACLCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWebACLCommandInput - {@link DeleteWebACLCommandInput}
 * @returns {@link DeleteWebACLCommandOutput}
 * @see {@link DeleteWebACLCommandInput} for command's `input` shape.
 * @see {@link DeleteWebACLCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFAssociatedItemException} (client fault)
 *
 * WAF couldn’t perform the operation because your resource is being used by another resource or it’s associated with another resource.
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
 * @throws {@link WAFTagOperationException} (client fault)
 *
 * An error occurred during the tagging operation. Retry your request.
 *
 * @throws {@link WAFTagOperationInternalErrorException} (server fault)
 *
 * WAF couldn’t perform your tagging operation because of an internal error. Retry your request.
 *
 * @throws {@link WAFV2ServiceException}
 *
 * Base exception class for all service exceptions from WAFV2 service.
 *
 * @public
 */
export class DeleteWebACLCommand extends command<DeleteWebACLCommandInput, DeleteWebACLCommandOutput>(
  _ep0,
  _mw0,
  "DeleteWebACL",
  DeleteWebACL$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWebACLRequest;
      output: {};
    };
    sdk: {
      input: DeleteWebACLCommandInput;
      output: DeleteWebACLCommandOutput;
    };
  };
}
