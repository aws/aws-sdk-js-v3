// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRateBasedRuleRequest, CreateRateBasedRuleResponse } from "../models/models_0";
import { de_CreateRateBasedRuleCommand, se_CreateRateBasedRuleCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRateBasedRuleCommand}.
 */
export interface CreateRateBasedRuleCommandInput extends CreateRateBasedRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateRateBasedRuleCommand}.
 */
export interface CreateRateBasedRuleCommandOutput extends CreateRateBasedRuleResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Creates a <a>RateBasedRule</a>. The <code>RateBasedRule</code> contains a
 *             <code>RateLimit</code>, which specifies the maximum number of requests that AWS WAF allows
 *                 from a specified IP address in a five-minute period.
 *                 The <code>RateBasedRule</code> also
 *          contains the <code>IPSet</code> objects, <code>ByteMatchSet</code> objects, and other
 *          predicates that identify the requests that you want to count or block if these requests
 *          exceed the <code>RateLimit</code>.</p>
 *          <p>If you add more than one predicate to a <code>RateBasedRule</code>, a request not
 *          only must exceed the <code>RateLimit</code>, but it also must match all the
 *          conditions to be counted or blocked. For example, suppose you add the following to a
 *             <code>RateBasedRule</code>:</p>
 *          <ul>
 *             <li>
 *                <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44/32</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>A <code>ByteMatchSet</code> that matches <code>BadBot</code> in the
 *                   <code>User-Agent</code> header</p>
 *             </li>
 *          </ul>
 *          <p>Further, you specify a <code>RateLimit</code> of 1,000.</p>
 *          <p>You then add the <code>RateBasedRule</code> to a <code>WebACL</code> and specify that
 *          you want to block requests that meet the conditions in the rule. For a request to be
 *          blocked, it must come from the IP address 192.0.2.44 <i>and</i> the
 *             <code>User-Agent</code> header in the request must contain the value
 *          <code>BadBot</code>. Further, requests that match these two conditions must be received at
 *          a rate of more than 1,000 requests every five minutes. If both conditions are met and the
 *          rate is exceeded, AWS WAF blocks the requests. If the rate drops below 1,000 for a
 *          five-minute period, AWS WAF no longer blocks the requests.</p>
 *
 * 		       <p>As a second example, suppose you want to limit requests to a particular page on your site. To do this, you could add the following to a
 *             <code>RateBasedRule</code>:</p>
 *
 *
 *          <ul>
 *             <li>
 *                <p>A <code>ByteMatchSet</code> with <code>FieldToMatch</code> of <code>URI</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>A <code>PositionalConstraint</code> of <code>STARTS_WITH</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>A <code>TargetString</code> of <code>login</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Further, you specify a <code>RateLimit</code> of 1,000.</p>
 *          <p>By adding this <code>RateBasedRule</code> to a <code>WebACL</code>, you could limit requests to your login page without affecting the rest of your site.</p>
 *
 *
 *          <p>To create and configure a <code>RateBasedRule</code>, perform the following
 *          steps:</p>
 *          <ol>
 *             <li>
 *                <p>Create and update the predicates that you want to include in the rule. For more
 *                information, see <a>CreateByteMatchSet</a>, <a>CreateIPSet</a>,
 *                and <a>CreateSqlInjectionMatchSet</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide
 *                in the <code>ChangeToken</code> parameter of a <code>CreateRule</code>
 *                request.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>CreateRateBasedRule</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the
 *                   <code>ChangeToken</code> parameter of an <a>UpdateRule</a>
 *                request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <code>UpdateRateBasedRule</code> request to specify the predicates
 *                that you want to include in the rule.</p>
 *             </li>
 *             <li>
 *                <p>Create and update a <code>WebACL</code> that contains the
 *                   <code>RateBasedRule</code>. For more information, see <a>CreateWebACL</a>.</p>
 *             </li>
 *          </ol>
 *          <p>For more information about how to use the AWS WAF API to allow or block HTTP requests,
 *          see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer
 *             Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, CreateRateBasedRuleCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, CreateRateBasedRuleCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const input = { // CreateRateBasedRuleRequest
 *   Name: "STRING_VALUE", // required
 *   MetricName: "STRING_VALUE", // required
 *   RateKey: "IP", // required
 *   RateLimit: Number("long"), // required
 *   ChangeToken: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateRateBasedRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateRateBasedRuleResponse
 * //   Rule: { // RateBasedRule
 * //     RuleId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE",
 * //     MetricName: "STRING_VALUE",
 * //     MatchPredicates: [ // Predicates // required
 * //       { // Predicate
 * //         Negated: true || false, // required
 * //         Type: "IPMatch" || "ByteMatch" || "SqlInjectionMatch" || "GeoMatch" || "SizeConstraint" || "XssMatch" || "RegexMatch", // required
 * //         DataId: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     RateKey: "IP", // required
 * //     RateLimit: Number("long"), // required
 * //   },
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateRateBasedRuleCommandInput - {@link CreateRateBasedRuleCommandInput}
 * @returns {@link CreateRateBasedRuleCommandOutput}
 * @see {@link CreateRateBasedRuleCommandInput} for command's `input` shape.
 * @see {@link CreateRateBasedRuleCommandOutput} for command's `response` shape.
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
 */
export class CreateRateBasedRuleCommand extends $Command
  .classBuilder<
    CreateRateBasedRuleCommandInput,
    CreateRateBasedRuleCommandOutput,
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
  .s("AWSWAF_20150824", "CreateRateBasedRule", {})
  .n("WAFClient", "CreateRateBasedRuleCommand")
  .f(void 0, void 0)
  .ser(se_CreateRateBasedRuleCommand)
  .de(de_CreateRateBasedRuleCommand)
  .build() {}
