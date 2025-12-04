// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteOriginRequestPolicyRequest } from "../models/models_0";
import { DeleteOriginRequestPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteOriginRequestPolicyCommand}.
 */
export interface DeleteOriginRequestPolicyCommandInput extends DeleteOriginRequestPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOriginRequestPolicyCommand}.
 */
export interface DeleteOriginRequestPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an origin request policy.</p> <p>You cannot delete an origin request policy if it's attached to any cache behaviors. First update your distributions to remove the origin request policy from all cache behaviors, then delete the origin request policy.</p> <p>To delete an origin request policy, you must provide the policy's identifier and version. To get the identifier, you can use <code>ListOriginRequestPolicies</code> or <code>GetOriginRequestPolicy</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteOriginRequestPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteOriginRequestPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteOriginRequestPolicyRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new DeleteOriginRequestPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOriginRequestPolicyCommandInput - {@link DeleteOriginRequestPolicyCommandInput}
 * @returns {@link DeleteOriginRequestPolicyCommandOutput}
 * @see {@link DeleteOriginRequestPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteOriginRequestPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link IllegalDelete} (client fault)
 *  <p>Deletion is not allowed for this entity.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link NoSuchOriginRequestPolicy} (client fault)
 *  <p>The origin request policy does not exist.</p>
 *
 * @throws {@link OriginRequestPolicyInUse} (client fault)
 *  <p>Cannot delete the origin request policy because it is attached to one or more cache behaviors.</p>
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
export class DeleteOriginRequestPolicyCommand extends $Command
  .classBuilder<
    DeleteOriginRequestPolicyCommandInput,
    DeleteOriginRequestPolicyCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "DeleteOriginRequestPolicy", {})
  .n("CloudFrontClient", "DeleteOriginRequestPolicyCommand")
  .sc(DeleteOriginRequestPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOriginRequestPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteOriginRequestPolicyCommandInput;
      output: DeleteOriginRequestPolicyCommandOutput;
    };
  };
}
