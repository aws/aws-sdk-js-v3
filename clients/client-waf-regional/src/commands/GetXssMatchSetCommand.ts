// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetXssMatchSetRequest, GetXssMatchSetResponse } from "../models/models_0";
import { GetXssMatchSet$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetXssMatchSetCommand}.
 */
export interface GetXssMatchSetCommandInput extends GetXssMatchSetRequest {}
/**
 * @public
 *
 * The output of {@link GetXssMatchSetCommand}.
 */
export interface GetXssMatchSetCommandOutput extends GetXssMatchSetResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Returns the <a>XssMatchSet</a> that is specified by <code>XssMatchSetId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, GetXssMatchSetCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, GetXssMatchSetCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // GetXssMatchSetRequest
 *   XssMatchSetId: "STRING_VALUE", // required
 * };
 * const command = new GetXssMatchSetCommand(input);
 * const response = await client.send(command);
 * // { // GetXssMatchSetResponse
 * //   XssMatchSet: { // XssMatchSet
 * //     XssMatchSetId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE",
 * //     XssMatchTuples: [ // XssMatchTuples // required
 * //       { // XssMatchTuple
 * //         FieldToMatch: { // FieldToMatch
 * //           Type: "URI" || "QUERY_STRING" || "HEADER" || "METHOD" || "BODY" || "SINGLE_QUERY_ARG" || "ALL_QUERY_ARGS", // required
 * //           Data: "STRING_VALUE",
 * //         },
 * //         TextTransformation: "NONE" || "COMPRESS_WHITE_SPACE" || "HTML_ENTITY_DECODE" || "LOWERCASE" || "CMD_LINE" || "URL_DECODE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetXssMatchSetCommandInput - {@link GetXssMatchSetCommandInput}
 * @returns {@link GetXssMatchSetCommandOutput}
 * @see {@link GetXssMatchSetCommandInput} for command's `input` shape.
 * @see {@link GetXssMatchSetCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
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
 * @throws {@link WAFRegionalServiceException}
 * <p>Base exception class for all service exceptions from WAFRegional service.</p>
 *
 *
 * @example To get an XSS match set
 * ```javascript
 * // The following example returns the details of an XSS match set with the ID example1ds3t-46da-4fdb-b8d5-abc321j569j5.
 * const input = {
 *   XssMatchSetId: "example1ds3t-46da-4fdb-b8d5-abc321j569j5"
 * };
 * const command = new GetXssMatchSetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   XssMatchSet: {
 *     Name: "MySampleXssMatchSet",
 *     XssMatchSetId: "example1ds3t-46da-4fdb-b8d5-abc321j569j5",
 *     XssMatchTuples: [
 *       {
 *         FieldToMatch: {
 *           Type: "QUERY_STRING"
 *         },
 *         TextTransformation: "URL_DECODE"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetXssMatchSetCommand extends $Command
  .classBuilder<
    GetXssMatchSetCommandInput,
    GetXssMatchSetCommandOutput,
    WAFRegionalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFRegionalClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_Regional_20161128", "GetXssMatchSet", {})
  .n("WAFRegionalClient", "GetXssMatchSetCommand")
  .sc(GetXssMatchSet$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetXssMatchSetRequest;
      output: GetXssMatchSetResponse;
    };
    sdk: {
      input: GetXssMatchSetCommandInput;
      output: GetXssMatchSetCommandOutput;
    };
  };
}
