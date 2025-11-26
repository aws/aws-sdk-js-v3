// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateIPSetRequest, CreateIPSetResponse } from "../models/models_0";
import { CreateIPSet } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateIPSetCommand}.
 */
export interface CreateIPSetCommandInput extends CreateIPSetRequest {}
/**
 * @public
 *
 * The output of {@link CreateIPSetCommand}.
 */
export interface CreateIPSetCommandOutput extends CreateIPSetResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Creates an <a>IPSet</a>, which you use to specify which web requests
 *          that
 *          you want to allow or block based on the IP addresses that the requests
 *          originate from. For example, if you're receiving a lot of requests from one or more
 *          individual IP addresses or one or more ranges of IP addresses and you want to block the
 *          requests, you can create an <code>IPSet</code> that contains those IP addresses and then
 *          configure AWS WAF to block the requests. </p>
 * 		       <p>To create and configure an <code>IPSet</code>, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
 * 				<code>CreateIPSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>CreateIPSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
 * 				<a>UpdateIPSet</a> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <code>UpdateIPSet</code> request to specify the IP addresses that you want AWS WAF to watch for.</p>
 *             </li>
 *          </ol>
 * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
 * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, CreateIPSetCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, CreateIPSetCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // CreateIPSetRequest
 *   Name: "STRING_VALUE", // required
 *   ChangeToken: "STRING_VALUE", // required
 * };
 * const command = new CreateIPSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateIPSetResponse
 * //   IPSet: { // IPSet
 * //     IPSetId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE",
 * //     IPSetDescriptors: [ // IPSetDescriptors // required
 * //       { // IPSetDescriptor
 * //         Type: "IPV4" || "IPV6", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateIPSetCommandInput - {@link CreateIPSetCommandInput}
 * @returns {@link CreateIPSetCommandOutput}
 * @see {@link CreateIPSetCommandInput} for command's `input` shape.
 * @see {@link CreateIPSetCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
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
 * @throws {@link WAFRegionalServiceException}
 * <p>Base exception class for all service exceptions from WAFRegional service.</p>
 *
 *
 * @example To create an IP set
 * ```javascript
 * // The following example creates an IP match set named MyIPSetFriendlyName.
 * const input = {
 *   ChangeToken: "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
 *   Name: "MyIPSetFriendlyName"
 * };
 * const command = new CreateIPSetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ChangeToken: "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
 *   IPSet: {
 *     IPSetDescriptors: [
 *       {
 *         Type: "IPV4",
 *         Value: "192.0.2.44/32"
 *       }
 *     ],
 *     IPSetId: "example1ds3t-46da-4fdb-b8d5-abc321j569j5",
 *     Name: "MyIPSetFriendlyName"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateIPSetCommand extends $Command
  .classBuilder<
    CreateIPSetCommandInput,
    CreateIPSetCommandOutput,
    WAFRegionalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFRegionalClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_Regional_20161128", "CreateIPSet", {})
  .n("WAFRegionalClient", "CreateIPSetCommand")
  .sc(CreateIPSet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIPSetRequest;
      output: CreateIPSetResponse;
    };
    sdk: {
      input: CreateIPSetCommandInput;
      output: CreateIPSetCommandOutput;
    };
  };
}
