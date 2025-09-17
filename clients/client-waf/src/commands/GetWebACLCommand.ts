// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetWebACLRequest, GetWebACLResponse } from "../models/models_0";
import { de_GetWebACLCommand, se_GetWebACLCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWebACLCommand}.
 */
export interface GetWebACLCommandInput extends GetWebACLRequest {}
/**
 * @public
 *
 * The output of {@link GetWebACLCommand}.
 */
export interface GetWebACLCommandOutput extends GetWebACLResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Returns the <a>WebACL</a> that is specified by <code>WebACLId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, GetWebACLCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, GetWebACLCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * // import type { WAFClientConfig } from "@aws-sdk/client-waf";
 * const config = {}; // type is WAFClientConfig
 * const client = new WAFClient(config);
 * const input = { // GetWebACLRequest
 *   WebACLId: "STRING_VALUE", // required
 * };
 * const command = new GetWebACLCommand(input);
 * const response = await client.send(command);
 * // { // GetWebACLResponse
 * //   WebACL: { // WebACL
 * //     WebACLId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE",
 * //     MetricName: "STRING_VALUE",
 * //     DefaultAction: { // WafAction
 * //       Type: "BLOCK" || "ALLOW" || "COUNT", // required
 * //     },
 * //     Rules: [ // ActivatedRules // required
 * //       { // ActivatedRule
 * //         Priority: Number("int"), // required
 * //         RuleId: "STRING_VALUE", // required
 * //         Action: {
 * //           Type: "BLOCK" || "ALLOW" || "COUNT", // required
 * //         },
 * //         OverrideAction: { // WafOverrideAction
 * //           Type: "NONE" || "COUNT", // required
 * //         },
 * //         Type: "REGULAR" || "RATE_BASED" || "GROUP",
 * //         ExcludedRules: [ // ExcludedRules
 * //           { // ExcludedRule
 * //             RuleId: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     WebACLArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWebACLCommandInput - {@link GetWebACLCommandInput}
 * @returns {@link GetWebACLCommandOutput}
 * @see {@link GetWebACLCommandInput} for command's `input` shape.
 * @see {@link GetWebACLCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFInvalidAccountException} (client fault)
 *  <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>The operation failed because the referenced object doesn't exist.</p>
 *
 * @throws {@link WAFServiceException}
 * <p>Base exception class for all service exceptions from WAF service.</p>
 *
 *
 * @example To get a web ACL
 * ```javascript
 * // The following example returns the details of a web ACL with the ID createwebacl-1472061481310.
 * const input = {
 *   WebACLId: "createwebacl-1472061481310"
 * };
 * const command = new GetWebACLCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   WebACL: {
 *     DefaultAction: {
 *       Type: "ALLOW"
 *     },
 *     MetricName: "CreateExample",
 *     Name: "CreateExample",
 *     Rules: [
 *       {
 *         Action: {
 *           Type: "ALLOW"
 *         },
 *         Priority: 1,
 *         RuleId: "WAFRule-1-Example"
 *       }
 *     ],
 *     WebACLId: "createwebacl-1472061481310"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetWebACLCommand extends $Command
  .classBuilder<
    GetWebACLCommandInput,
    GetWebACLCommandOutput,
    WAFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWAF_20150824", "GetWebACL", {})
  .n("WAFClient", "GetWebACLCommand")
  .f(void 0, void 0)
  .ser(se_GetWebACLCommand)
  .de(de_GetWebACLCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWebACLRequest;
      output: GetWebACLResponse;
    };
    sdk: {
      input: GetWebACLCommandInput;
      output: GetWebACLCommandOutput;
    };
  };
}
