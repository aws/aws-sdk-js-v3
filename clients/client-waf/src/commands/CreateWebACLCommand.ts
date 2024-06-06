// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateWebACLRequest, CreateWebACLResponse } from "../models/models_0";
import { de_CreateWebACLCommand, se_CreateWebACLCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWebACLCommand}.
 */
export interface CreateWebACLCommandInput extends CreateWebACLRequest {}
/**
 * @public
 *
 * The output of {@link CreateWebACLCommand}.
 */
export interface CreateWebACLCommandOutput extends CreateWebACLResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Creates a <code>WebACL</code>, which contains the <code>Rules</code> that identify the CloudFront web requests that you want to allow, block, or count.
 * 			AWS WAF evaluates <code>Rules</code> in order based on the value of <code>Priority</code> for each <code>Rule</code>.</p>
 * 		       <p>You also specify a default action, either <code>ALLOW</code> or <code>BLOCK</code>. If a web request doesn't match
 * 			any of the <code>Rules</code> in a <code>WebACL</code>, AWS WAF responds to the request with the default action. </p>
 * 		       <p>To create and configure a <code>WebACL</code>, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Create and update the <code>ByteMatchSet</code> objects and other predicates that you want to include in <code>Rules</code>.
 * 				For more information, see <a>CreateByteMatchSet</a>, <a>UpdateByteMatchSet</a>, <a>CreateIPSet</a>, <a>UpdateIPSet</a>,
 * 				<a>CreateSqlInjectionMatchSet</a>, and <a>UpdateSqlInjectionMatchSet</a>.</p>
 *             </li>
 *             <li>
 *                <p>Create and update the <code>Rules</code> that you want to include in the <code>WebACL</code>. For more information, see
 * 				<a>CreateRule</a> and <a>UpdateRule</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
 * 				<code>CreateWebACL</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>CreateWebACL</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
 * 				<a>UpdateWebACL</a> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <a>UpdateWebACL</a> request to specify the <code>Rules</code> that you want to include in the <code>WebACL</code>,
 * 				to specify the default action, and to associate the <code>WebACL</code> with a CloudFront distribution.</p>
 *             </li>
 *          </ol>
 * 		       <p>For more information about how to use the AWS WAF API, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, CreateWebACLCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, CreateWebACLCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const input = { // CreateWebACLRequest
 *   Name: "STRING_VALUE", // required
 *   MetricName: "STRING_VALUE", // required
 *   DefaultAction: { // WafAction
 *     Type: "BLOCK" || "ALLOW" || "COUNT", // required
 *   },
 *   ChangeToken: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateWebACLCommand(input);
 * const response = await client.send(command);
 * // { // CreateWebACLResponse
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
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateWebACLCommandInput - {@link CreateWebACLCommandInput}
 * @returns {@link CreateWebACLCommandOutput}
 * @see {@link CreateWebACLCommandInput} for command's `input` shape.
 * @see {@link CreateWebACLCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 * @throws {@link WAFBadRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link WAFDisallowedNameException} (client fault)
 *  <p>The name specified is invalid.</p>
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFInvalidAccountException} (client fault)
 *  <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *  <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p>
 * 			      <ul>
 *             <li>
 *                <p>You specified an invalid parameter name.</p>
 *             </li>
 *             <li>
 *                <p>You specified an invalid value.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>)
 * 					using an action other than <code>INSERT</code> or <code>DELETE</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code>
 *                   <code>Type</code> other than
 * 					<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p>
 *             </li>
 *             <li>
 * 		 	           <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p>
 * 		          </li>
 *             <li>
 *                <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code>
 *                   <code>Type</code> other than
 * 					<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code>
 *                   <code>Type</code> other than
 * 					HEADER, METHOD, QUERY_STRING, URI, or BODY.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code>
 * 					but no value for <code>Data</code>.</p>
 *             </li>
 *             <li>
 * 			   		       <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p>
 * 			   	     </li>
 *          </ul>
 *
 * @throws {@link WAFLimitsExceededException} (client fault)
 *  <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create
 * 			for an AWS account. For more information, see
 * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
 *
 * @throws {@link WAFStaleDataException} (client fault)
 *  <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
 *
 * @throws {@link WAFTagOperationException} (client fault)
 *  <p></p>
 *
 * @throws {@link WAFTagOperationInternalErrorException} (server fault)
 *  <p></p>
 *
 * @throws {@link WAFServiceException}
 * <p>Base exception class for all service exceptions from WAF service.</p>
 *
 * @public
 * @example To create a web ACL
 * ```javascript
 * // The following example creates a web ACL named CreateExample.
 * const input = {
 *   "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
 *   "DefaultAction": {
 *     "Type": "ALLOW"
 *   },
 *   "MetricName": "CreateExample",
 *   "Name": "CreateExample"
 * };
 * const command = new CreateWebACLCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
 *   "WebACL": {
 *     "DefaultAction": {
 *       "Type": "ALLOW"
 *     },
 *     "MetricName": "CreateExample",
 *     "Name": "CreateExample",
 *     "Rules": [
 *       {
 *         "Action": {
 *           "Type": "ALLOW"
 *         },
 *         "Priority": 1,
 *         "RuleId": "WAFRule-1-Example"
 *       }
 *     ],
 *     "WebACLId": "example-46da-4444-5555-example"
 *   }
 * }
 * *\/
 * // example id: createwebacl-1472061481310
 * ```
 *
 */
export class CreateWebACLCommand extends $Command
  .classBuilder<
    CreateWebACLCommandInput,
    CreateWebACLCommandOutput,
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
  .s("AWSWAF_20150824", "CreateWebACL", {})
  .n("WAFClient", "CreateWebACLCommand")
  .f(void 0, void 0)
  .ser(se_CreateWebACLCommand)
  .de(de_CreateWebACLCommand)
  .build() {}
