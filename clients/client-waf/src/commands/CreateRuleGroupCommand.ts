// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateRuleGroupRequest, CreateRuleGroupResponse } from "../models/models_0";
import { CreateRuleGroup$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRuleGroupCommand}.
 */
export interface CreateRuleGroupCommandInput extends CreateRuleGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateRuleGroupCommand}.
 */
export interface CreateRuleGroupCommandOutput extends CreateRuleGroupResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Creates a <code>RuleGroup</code>. A rule group is a collection of predefined rules that you add to a web ACL. You use <a>UpdateRuleGroup</a> to add rules to the rule group.</p>
 * 	        <p>Rule groups are subject to the following limits:</p>
 * 	        <ul>
 *             <li>
 *                <p>Three rule groups per account. You can request an increase to this limit by contacting customer support.</p>
 *             </li>
 *             <li>
 *                <p>One rule group per web ACL.</p>
 *             </li>
 *             <li>
 *                <p>Ten rules per rule group.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
 *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, CreateRuleGroupCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, CreateRuleGroupCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * // import type { WAFClientConfig } from "@aws-sdk/client-waf";
 * const config = {}; // type is WAFClientConfig
 * const client = new WAFClient(config);
 * const input = { // CreateRuleGroupRequest
 *   Name: "STRING_VALUE", // required
 *   MetricName: "STRING_VALUE", // required
 *   ChangeToken: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateRuleGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateRuleGroupResponse
 * //   RuleGroup: { // RuleGroup
 * //     RuleGroupId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE",
 * //     MetricName: "STRING_VALUE",
 * //   },
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateRuleGroupCommandInput - {@link CreateRuleGroupCommandInput}
 * @returns {@link CreateRuleGroupCommandOutput}
 * @see {@link CreateRuleGroupCommandInput} for command's `input` shape.
 * @see {@link CreateRuleGroupCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class CreateRuleGroupCommand extends $Command
  .classBuilder<
    CreateRuleGroupCommandInput,
    CreateRuleGroupCommandOutput,
    WAFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_20150824", "CreateRuleGroup", {})
  .n("WAFClient", "CreateRuleGroupCommand")
  .sc(CreateRuleGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRuleGroupRequest;
      output: CreateRuleGroupResponse;
    };
    sdk: {
      input: CreateRuleGroupCommandInput;
      output: CreateRuleGroupCommandOutput;
    };
  };
}
