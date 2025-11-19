// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCachePolicyRequest } from "../models/models_0";
import { DeleteCachePolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a cache policy.</p> <p>You cannot delete a cache policy if it's attached to a cache behavior. First update your distributions to remove the cache policy from all cache behaviors, then delete the cache policy.</p> <p>To delete a cache policy, you must provide the policy's identifier and version. To get these values, you can use <code>ListCachePolicies</code> or <code>GetCachePolicy</code>.</p>
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
 *  <p>Access denied.</p>
 *
 * @throws {@link CachePolicyInUse} (client fault)
 *  <p>Cannot delete the cache policy because it is attached to one or more cache behaviors.</p>
 *
 * @throws {@link IllegalDelete} (client fault)
 *  <p>Deletion is not allowed for this entity.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link NoSuchCachePolicy} (client fault)
 *  <p>The cache policy does not exist.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to <code>false</code>.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class DeleteCachePolicyCommand extends $Command
  .classBuilder<
    DeleteCachePolicyCommandInput,
    DeleteCachePolicyCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "DeleteCachePolicy", {})
  .n("CloudFrontClient", "DeleteCachePolicyCommand")
  .sc(DeleteCachePolicy)
  .build() {
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
