// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSqlInjectionMatchSetRequest, GetSqlInjectionMatchSetResponse } from "../models/models_0";
import { de_GetSqlInjectionMatchSetCommand, se_GetSqlInjectionMatchSetCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSqlInjectionMatchSetCommand}.
 */
export interface GetSqlInjectionMatchSetCommandInput extends GetSqlInjectionMatchSetRequest {}
/**
 * @public
 *
 * The output of {@link GetSqlInjectionMatchSetCommand}.
 */
export interface GetSqlInjectionMatchSetCommandOutput extends GetSqlInjectionMatchSetResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Returns the <a>SqlInjectionMatchSet</a> that is specified by <code>SqlInjectionMatchSetId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, GetSqlInjectionMatchSetCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, GetSqlInjectionMatchSetCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const input = { // GetSqlInjectionMatchSetRequest
 *   SqlInjectionMatchSetId: "STRING_VALUE", // required
 * };
 * const command = new GetSqlInjectionMatchSetCommand(input);
 * const response = await client.send(command);
 * // { // GetSqlInjectionMatchSetResponse
 * //   SqlInjectionMatchSet: { // SqlInjectionMatchSet
 * //     SqlInjectionMatchSetId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE",
 * //     SqlInjectionMatchTuples: [ // SqlInjectionMatchTuples // required
 * //       { // SqlInjectionMatchTuple
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
 * @param GetSqlInjectionMatchSetCommandInput - {@link GetSqlInjectionMatchSetCommandInput}
 * @returns {@link GetSqlInjectionMatchSetCommandOutput}
 * @see {@link GetSqlInjectionMatchSetCommandInput} for command's `input` shape.
 * @see {@link GetSqlInjectionMatchSetCommandOutput} for command's `response` shape.
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
 * @example To get a SQL injection match set
 * ```javascript
 * // The following example returns the details of a SQL injection match set with the ID example1ds3t-46da-4fdb-b8d5-abc321j569j5.
 * const input = {
 *   SqlInjectionMatchSetId: "example1ds3t-46da-4fdb-b8d5-abc321j569j5"
 * };
 * const command = new GetSqlInjectionMatchSetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SqlInjectionMatchSet: {
 *     Name: "MySQLInjectionMatchSet",
 *     SqlInjectionMatchSetId: "example1ds3t-46da-4fdb-b8d5-abc321j569j5",
 *     SqlInjectionMatchTuples: [
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
export class GetSqlInjectionMatchSetCommand extends $Command
  .classBuilder<
    GetSqlInjectionMatchSetCommandInput,
    GetSqlInjectionMatchSetCommandOutput,
    WAFRegionalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFRegionalClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWAF_Regional_20161128", "GetSqlInjectionMatchSet", {})
  .n("WAFRegionalClient", "GetSqlInjectionMatchSetCommand")
  .f(void 0, void 0)
  .ser(se_GetSqlInjectionMatchSetCommand)
  .de(de_GetSqlInjectionMatchSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSqlInjectionMatchSetRequest;
      output: GetSqlInjectionMatchSetResponse;
    };
    sdk: {
      input: GetSqlInjectionMatchSetCommandInput;
      output: GetSqlInjectionMatchSetCommandOutput;
    };
  };
}
