// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRegexPatternSetRequest, CreateRegexPatternSetResponse } from "../models/models_0";
import { CreateRegexPatternSet } from "../schemas/schemas_3_WebACL";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRegexPatternSetCommand}.
 */
export interface CreateRegexPatternSetCommandInput extends CreateRegexPatternSetRequest {}
/**
 * @public
 *
 * The output of {@link CreateRegexPatternSetCommand}.
 */
export interface CreateRegexPatternSetCommandOutput extends CreateRegexPatternSetResponse, __MetadataBearer {}

/**
 * <p>Creates a <a>RegexPatternSet</a>, which you reference in a <a>RegexPatternSetReferenceStatement</a>, to have WAF inspect a web request
 *          component for the specified patterns.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, CreateRegexPatternSetCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, CreateRegexPatternSetCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // CreateRegexPatternSetRequest
 *   Name: "STRING_VALUE", // required
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   Description: "STRING_VALUE",
 *   RegularExpressionList: [ // RegularExpressionList // required
 *     { // Regex
 *       RegexString: "STRING_VALUE",
 *     },
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateRegexPatternSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateRegexPatternSetResponse
 * //   Summary: { // RegexPatternSetSummary
 * //     Name: "STRING_VALUE",
 * //     Id: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     LockToken: "STRING_VALUE",
 * //     ARN: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRegexPatternSetCommandInput - {@link CreateRegexPatternSetCommandInput}
 * @returns {@link CreateRegexPatternSetCommandOutput}
 * @see {@link CreateRegexPatternSetCommandInput} for command's `input` shape.
 * @see {@link CreateRegexPatternSetCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFDuplicateItemException} (client fault)
 *  <p>WAF couldn’t perform the operation because the resource that you tried to save is
 *          a duplicate of an existing one.</p>
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>Your request is valid, but WAF couldn’t perform the operation because of a system
 *          problem. Retry your request. </p>
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *  <p>The operation isn't valid. </p>
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *  <p>The operation failed because WAF didn't recognize a parameter in the request. For
 *          example: </p>
 *          <ul>
 *             <li>
 *                <p>You specified a parameter name or value that isn't valid.</p>
 *             </li>
 *             <li>
 *                <p>Your nested statement isn't valid. You might have tried to nest a statement that
 *                can’t be nested. </p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>WebACL</code> with a <code>DefaultAction</code> that
 *                isn't among the types available at <a>DefaultAction</a>.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                with which a web ACL can't be associated.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link WAFLimitsExceededException} (client fault)
 *  <p>WAF couldn’t perform the operation because you exceeded your resource limit. For
 *          example, the maximum number of <code>WebACL</code> objects that you can create for an Amazon Web Services
 *          account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the
 *             <i>WAF Developer Guide</i>.</p>
 *
 * @throws {@link WAFOptimisticLockException} (client fault)
 *  <p>WAF couldn’t save your changes because you tried to update or delete a resource
 *          that has changed since you last retrieved it. Get the resource again, make any changes you
 *          need to make to the new copy, and retry your operation. </p>
 *
 * @throws {@link WAFTagOperationException} (client fault)
 *  <p>An error occurred during the tagging operation. Retry your request.</p>
 *
 * @throws {@link WAFTagOperationInternalErrorException} (server fault)
 *  <p>WAF couldn’t perform your tagging operation because of an internal error. Retry
 *          your request.</p>
 *
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 *
 * @public
 */
export class CreateRegexPatternSetCommand extends $Command
  .classBuilder<
    CreateRegexPatternSetCommandInput,
    CreateRegexPatternSetCommandOutput,
    WAFV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_20190729", "CreateRegexPatternSet", {})
  .n("WAFV2Client", "CreateRegexPatternSetCommand")
  .sc(CreateRegexPatternSet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRegexPatternSetRequest;
      output: CreateRegexPatternSetResponse;
    };
    sdk: {
      input: CreateRegexPatternSetCommandInput;
      output: CreateRegexPatternSetCommandOutput;
    };
  };
}
