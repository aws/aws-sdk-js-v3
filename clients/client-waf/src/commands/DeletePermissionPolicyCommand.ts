// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePermissionPolicyRequest, DeletePermissionPolicyResponse } from "../models/models_0";
import { de_DeletePermissionPolicyCommand, se_DeletePermissionPolicyCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Permanently deletes an IAM policy from the specified RuleGroup.</p>
 *          <p>The user making the request must be the owner of the RuleGroup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, DeletePermissionPolicyCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, DeletePermissionPolicyCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
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
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>The operation failed because the referenced object doesn't exist.</p>
 *
 * @throws {@link WAFStaleDataException} (client fault)
 *  <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
 *
 * @throws {@link WAFServiceException}
 * <p>Base exception class for all service exceptions from WAF service.</p>
 *
 * @public
 */
export class DeletePermissionPolicyCommand extends $Command
  .classBuilder<
    DeletePermissionPolicyCommandInput,
    DeletePermissionPolicyCommandOutput,
    WAFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WAFClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWAF_20150824", "DeletePermissionPolicy", {})
  .n("WAFClient", "DeletePermissionPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeletePermissionPolicyCommand)
  .de(de_DeletePermissionPolicyCommand)
  .build() {}
