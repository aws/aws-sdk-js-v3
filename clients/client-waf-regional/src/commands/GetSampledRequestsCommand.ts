// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetSampledRequestsRequest, GetSampledRequestsResponse } from "../models/models_0";
import { GetSampledRequests } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSampledRequestsCommand}.
 */
export interface GetSampledRequestsCommandInput extends GetSampledRequestsRequest {}
/**
 * @public
 *
 * The output of {@link GetSampledRequestsCommand}.
 */
export interface GetSampledRequestsCommandOutput extends GetSampledRequestsResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Gets detailed information about a specified number of requests--a sample--that AWS WAF randomly selects from among the first 5,000 requests that your AWS resource received during a time range that you choose. You can specify a sample size of up to 500 requests, and you can specify any time range in the previous three hours.</p>
 * 		       <p>
 *             <code>GetSampledRequests</code> returns a time range, which is usually the time range that you specified. However, if your resource
 * 			(such as a CloudFront distribution) received 5,000 requests before the specified time range elapsed, <code>GetSampledRequests</code>
 * 			returns an updated time range. This new time range indicates the actual period during which AWS WAF selected the requests in the sample.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, GetSampledRequestsCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, GetSampledRequestsCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // GetSampledRequestsRequest
 *   WebAclId: "STRING_VALUE", // required
 *   RuleId: "STRING_VALUE", // required
 *   TimeWindow: { // TimeWindow
 *     StartTime: new Date("TIMESTAMP"), // required
 *     EndTime: new Date("TIMESTAMP"), // required
 *   },
 *   MaxItems: Number("long"), // required
 * };
 * const command = new GetSampledRequestsCommand(input);
 * const response = await client.send(command);
 * // { // GetSampledRequestsResponse
 * //   SampledRequests: [ // SampledHTTPRequests
 * //     { // SampledHTTPRequest
 * //       Request: { // HTTPRequest
 * //         ClientIP: "STRING_VALUE",
 * //         Country: "STRING_VALUE",
 * //         URI: "STRING_VALUE",
 * //         Method: "STRING_VALUE",
 * //         HTTPVersion: "STRING_VALUE",
 * //         Headers: [ // HTTPHeaders
 * //           { // HTTPHeader
 * //             Name: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       Weight: Number("long"), // required
 * //       Timestamp: new Date("TIMESTAMP"),
 * //       Action: "STRING_VALUE",
 * //       RuleWithinRuleGroup: "STRING_VALUE",
 * //     },
 * //   ],
 * //   PopulationSize: Number("long"),
 * //   TimeWindow: { // TimeWindow
 * //     StartTime: new Date("TIMESTAMP"), // required
 * //     EndTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSampledRequestsCommandInput - {@link GetSampledRequestsCommandInput}
 * @returns {@link GetSampledRequestsCommandOutput}
 * @see {@link GetSampledRequestsCommandInput} for command's `input` shape.
 * @see {@link GetSampledRequestsCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>The operation failed because the referenced object doesn't exist.</p>
 *
 * @throws {@link WAFRegionalServiceException}
 * <p>Base exception class for all service exceptions from WAFRegional service.</p>
 *
 *
 * @public
 */
export class GetSampledRequestsCommand extends $Command
  .classBuilder<
    GetSampledRequestsCommandInput,
    GetSampledRequestsCommandOutput,
    WAFRegionalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFRegionalClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_Regional_20161128", "GetSampledRequests", {})
  .n("WAFRegionalClient", "GetSampledRequestsCommand")
  .sc(GetSampledRequests)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSampledRequestsRequest;
      output: GetSampledRequestsResponse;
    };
    sdk: {
      input: GetSampledRequestsCommandInput;
      output: GetSampledRequestsCommandOutput;
    };
  };
}
