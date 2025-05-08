// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteResponseHeadersPolicyRequest } from "../models/models_1";
import { de_DeleteResponseHeadersPolicyCommand, se_DeleteResponseHeadersPolicyCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteResponseHeadersPolicyCommand}.
 */
export interface DeleteResponseHeadersPolicyCommandInput extends DeleteResponseHeadersPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteResponseHeadersPolicyCommand}.
 */
export interface DeleteResponseHeadersPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a response headers policy.</p> <p>You cannot delete a response headers policy if it's attached to a cache behavior. First update your distributions to remove the response headers policy from all cache behaviors, then delete the response headers policy.</p> <p>To delete a response headers policy, you must provide the policy's identifier and version. To get these values, you can use <code>ListResponseHeadersPolicies</code> or <code>GetResponseHeadersPolicy</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteResponseHeadersPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteResponseHeadersPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteResponseHeadersPolicyRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new DeleteResponseHeadersPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteResponseHeadersPolicyCommandInput - {@link DeleteResponseHeadersPolicyCommandInput}
 * @returns {@link DeleteResponseHeadersPolicyCommandOutput}
 * @see {@link DeleteResponseHeadersPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteResponseHeadersPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link NoSuchResponseHeadersPolicy} (client fault)
 *  <p>The response headers policy does not exist.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to <code>false</code>.</p>
 *
 * @throws {@link ResponseHeadersPolicyInUse} (client fault)
 *  <p>Cannot delete the response headers policy because it is attached to one or more cache behaviors in a CloudFront distribution.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class DeleteResponseHeadersPolicyCommand extends $Command
  .classBuilder<
    DeleteResponseHeadersPolicyCommandInput,
    DeleteResponseHeadersPolicyCommandOutput,
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
  .s("Cloudfront2020_05_31", "DeleteResponseHeadersPolicy", {})
  .n("CloudFrontClient", "DeleteResponseHeadersPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteResponseHeadersPolicyCommand)
  .de(de_DeleteResponseHeadersPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteResponseHeadersPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteResponseHeadersPolicyCommandInput;
      output: DeleteResponseHeadersPolicyCommandOutput;
    };
  };
}
