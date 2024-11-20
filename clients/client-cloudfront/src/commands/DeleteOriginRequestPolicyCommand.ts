// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteOriginRequestPolicyRequest } from "../models/models_1";
import { de_DeleteOriginRequestPolicyCommand, se_DeleteOriginRequestPolicyCommand } from "../protocols/Aws_restXml";

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
 * <p>Deletes an origin request policy.</p>
 *          <p>You cannot delete an origin request policy if it's attached to any cache behaviors.
 * 			First update your distributions to remove the origin request policy from all cache
 * 			behaviors, then delete the origin request policy.</p>
 *          <p>To delete an origin request policy, you must provide the policy's identifier and
 * 			version. To get the identifier, you can use <code>ListOriginRequestPolicies</code> or
 * 				<code>GetOriginRequestPolicy</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteOriginRequestPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteOriginRequestPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
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
 *  <p>Cannot delete the origin request policy because it is attached to one or more cache
 * 			behaviors.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to
 * 			<code>false</code>.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "DeleteOriginRequestPolicy", {})
  .n("CloudFrontClient", "DeleteOriginRequestPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteOriginRequestPolicyCommand)
  .de(de_DeleteOriginRequestPolicyCommand)
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
