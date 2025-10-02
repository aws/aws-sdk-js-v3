// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetByteMatchSetRequest, GetByteMatchSetResponse } from "../models/models_0";
import { de_GetByteMatchSetCommand, se_GetByteMatchSetCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetByteMatchSetCommand}.
 */
export interface GetByteMatchSetCommandInput extends GetByteMatchSetRequest {}
/**
 * @public
 *
 * The output of {@link GetByteMatchSetCommand}.
 */
export interface GetByteMatchSetCommandOutput extends GetByteMatchSetResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Returns the <a>ByteMatchSet</a> specified by <code>ByteMatchSetId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, GetByteMatchSetCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, GetByteMatchSetCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * // import type { WAFClientConfig } from "@aws-sdk/client-waf";
 * const config = {}; // type is WAFClientConfig
 * const client = new WAFClient(config);
 * const input = { // GetByteMatchSetRequest
 *   ByteMatchSetId: "STRING_VALUE", // required
 * };
 * const command = new GetByteMatchSetCommand(input);
 * const response = await client.send(command);
 * // { // GetByteMatchSetResponse
 * //   ByteMatchSet: { // ByteMatchSet
 * //     ByteMatchSetId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE",
 * //     ByteMatchTuples: [ // ByteMatchTuples // required
 * //       { // ByteMatchTuple
 * //         FieldToMatch: { // FieldToMatch
 * //           Type: "URI" || "QUERY_STRING" || "HEADER" || "METHOD" || "BODY" || "SINGLE_QUERY_ARG" || "ALL_QUERY_ARGS", // required
 * //           Data: "STRING_VALUE",
 * //         },
 * //         TargetString: new Uint8Array(), // required
 * //         TextTransformation: "NONE" || "COMPRESS_WHITE_SPACE" || "HTML_ENTITY_DECODE" || "LOWERCASE" || "CMD_LINE" || "URL_DECODE", // required
 * //         PositionalConstraint: "EXACTLY" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CONTAINS_WORD", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetByteMatchSetCommandInput - {@link GetByteMatchSetCommandInput}
 * @returns {@link GetByteMatchSetCommandOutput}
 * @see {@link GetByteMatchSetCommandInput} for command's `input` shape.
 * @see {@link GetByteMatchSetCommandOutput} for command's `response` shape.
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
 * @example To get a byte match set
 * ```javascript
 * // The following example returns the details of a byte match set with the ID exampleIDs3t-46da-4fdb-b8d5-abc321j569j5.
 * const input = {
 *   ByteMatchSetId: "exampleIDs3t-46da-4fdb-b8d5-abc321j569j5"
 * };
 * const command = new GetByteMatchSetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ByteMatchSet: {
 *     ByteMatchSetId: "exampleIDs3t-46da-4fdb-b8d5-abc321j569j5",
 *     ByteMatchTuples: [
 *       {
 *         FieldToMatch: {
 *           Data: "referer",
 *           Type: "HEADER"
 *         },
 *         PositionalConstraint: "CONTAINS",
 *         TargetString: "badrefer1",
 *         TextTransformation: "NONE"
 *       }
 *     ],
 *     Name: "ByteMatchNameExample"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetByteMatchSetCommand extends $Command
  .classBuilder<
    GetByteMatchSetCommandInput,
    GetByteMatchSetCommandOutput,
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
  .s("AWSWAF_20150824", "GetByteMatchSet", {})
  .n("WAFClient", "GetByteMatchSetCommand")
  .f(void 0, void 0)
  .ser(se_GetByteMatchSetCommand)
  .de(de_GetByteMatchSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetByteMatchSetRequest;
      output: GetByteMatchSetResponse;
    };
    sdk: {
      input: GetByteMatchSetCommandInput;
      output: GetByteMatchSetCommandOutput;
    };
  };
}
