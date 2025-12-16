// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetPermissionPolicyRequest, GetPermissionPolicyResponse } from "../models/models_0";
import { GetPermissionPolicy$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPermissionPolicyCommand}.
 */
export interface GetPermissionPolicyCommandInput extends GetPermissionPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetPermissionPolicyCommand}.
 */
export interface GetPermissionPolicyCommandOutput extends GetPermissionPolicyResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Returns the IAM policy attached to the RuleGroup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, GetPermissionPolicyCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, GetPermissionPolicyCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // GetPermissionPolicyRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new GetPermissionPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetPermissionPolicyResponse
 * //   Policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPermissionPolicyCommandInput - {@link GetPermissionPolicyCommandInput}
 * @returns {@link GetPermissionPolicyCommandOutput}
 * @see {@link GetPermissionPolicyCommandInput} for command's `input` shape.
 * @see {@link GetPermissionPolicyCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>The operation failed because the referenced object doesn't exist.</p>
 *
 * @throws {@link WAFRegionalServiceException}
 * <p>Base exception class for all service exceptions from WAFRegional service.</p>
 *
 *
 * @public
 */
export class GetPermissionPolicyCommand extends $Command
  .classBuilder<
    GetPermissionPolicyCommandInput,
    GetPermissionPolicyCommandOutput,
    WAFRegionalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFRegionalClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_Regional_20161128", "GetPermissionPolicy", {})
  .n("WAFRegionalClient", "GetPermissionPolicyCommand")
  .sc(GetPermissionPolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPermissionPolicyRequest;
      output: GetPermissionPolicyResponse;
    };
    sdk: {
      input: GetPermissionPolicyCommandInput;
      output: GetPermissionPolicyCommandOutput;
    };
  };
}
