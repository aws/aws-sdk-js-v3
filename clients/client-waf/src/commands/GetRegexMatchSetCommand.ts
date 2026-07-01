// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRegexMatchSetRequest, GetRegexMatchSetResponse } from "../models/models_0";
import { GetRegexMatchSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRegexMatchSetCommand}.
 */
export interface GetRegexMatchSetCommandInput extends GetRegexMatchSetRequest {}
/**
 * @public
 *
 * The output of {@link GetRegexMatchSetCommand}.
 */
export interface GetRegexMatchSetCommandOutput extends GetRegexMatchSetResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Returns the <a>RegexMatchSet</a> specified by <code>RegexMatchSetId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, GetRegexMatchSetCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, GetRegexMatchSetCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * // import type { WAFClientConfig } from "@aws-sdk/client-waf";
 * const config = {}; // type is WAFClientConfig
 * const client = new WAFClient(config);
 * const input = { // GetRegexMatchSetRequest
 *   RegexMatchSetId: "STRING_VALUE", // required
 * };
 * const command = new GetRegexMatchSetCommand(input);
 * const response = await client.send(command);
 * // { // GetRegexMatchSetResponse
 * //   RegexMatchSet: { // RegexMatchSet
 * //     RegexMatchSetId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     RegexMatchTuples: [ // RegexMatchTuples
 * //       { // RegexMatchTuple
 * //         FieldToMatch: { // FieldToMatch
 * //           Type: "URI" || "QUERY_STRING" || "HEADER" || "METHOD" || "BODY" || "SINGLE_QUERY_ARG" || "ALL_QUERY_ARGS", // required
 * //           Data: "STRING_VALUE",
 * //         },
 * //         TextTransformation: "NONE" || "COMPRESS_WHITE_SPACE" || "HTML_ENTITY_DECODE" || "LOWERCASE" || "CMD_LINE" || "URL_DECODE", // required
 * //         RegexPatternSetId: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRegexMatchSetCommandInput - {@link GetRegexMatchSetCommandInput}
 * @returns {@link GetRegexMatchSetCommandOutput}
 * @see {@link GetRegexMatchSetCommandInput} for command's `input` shape.
 * @see {@link GetRegexMatchSetCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetRegexMatchSetCommand extends command<GetRegexMatchSetCommandInput, GetRegexMatchSetCommandOutput>(
  _ep0,
  _mw0,
  "GetRegexMatchSet",
  GetRegexMatchSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRegexMatchSetRequest;
      output: GetRegexMatchSetResponse;
    };
    sdk: {
      input: GetRegexMatchSetCommandInput;
      output: GetRegexMatchSetCommandOutput;
    };
  };
}
