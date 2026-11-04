// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCachePolicyRequest } from "../models/models_0";
import { DeleteCachePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCachePolicyCommand}.
 */
export interface DeleteCachePolicyCommandInput extends DeleteCachePolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCachePolicyCommand}.
 */
export interface DeleteCachePolicyCommandOutput extends __MetadataBearer {}

/**
 * Deletes a cache policy.
 *
 * You cannot delete a cache policy if it's attached to a cache behavior. First update your distributions to remove the cache policy from all cache behaviors, then delete the cache policy.
 *
 * To delete a cache policy, you must provide the policy's identifier and version. To get these values, you can use `ListCachePolicies` or `GetCachePolicy`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteCachePolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteCachePolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteCachePolicyRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new DeleteCachePolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCachePolicyCommandInput - {@link DeleteCachePolicyCommandInput}
 * @returns {@link DeleteCachePolicyCommandOutput}
 * @see {@link DeleteCachePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteCachePolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link CachePolicyInUse} (client fault)
 *
 * Cannot delete the cache policy because it is attached to one or more cache behaviors.
 *
 * @throws {@link IllegalDelete} (client fault)
 *
 * Deletion is not allowed for this entity.
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *
 * The `If-Match` version is missing or not valid.
 *
 * @throws {@link NoSuchCachePolicy} (client fault)
 *
 * The cache policy does not exist.
 *
 * @throws {@link PreconditionFailed} (client fault)
 *
 * The precondition in one or more of the request fields evaluated to `false`.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class DeleteCachePolicyCommand extends command<DeleteCachePolicyCommandInput, DeleteCachePolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCachePolicy",
  DeleteCachePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCachePolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteCachePolicyCommandInput;
      output: DeleteCachePolicyCommandOutput;
    };
  };
}
