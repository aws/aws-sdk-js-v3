// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetIndexingRulesRequest, GetIndexingRulesResult } from "../models/models_0";
import { GetIndexingRules } from "../schemas/schemas_8_Get";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIndexingRulesCommand}.
 */
export interface GetIndexingRulesCommandInput extends GetIndexingRulesRequest {}
/**
 * @public
 *
 * The output of {@link GetIndexingRulesCommand}.
 */
export interface GetIndexingRulesCommandOutput extends GetIndexingRulesResult, __MetadataBearer {}

/**
 * <p>
 * Retrieves all indexing rules.</p>
 *          <p>Indexing rules are used to determine the server-side sampling rate for spans ingested through the CloudWatchLogs destination and indexed by X-Ray. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Transaction-Search.html">Transaction Search</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetIndexingRulesCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetIndexingRulesCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * // import type { XRayClientConfig } from "@aws-sdk/client-xray";
 * const config = {}; // type is XRayClientConfig
 * const client = new XRayClient(config);
 * const input = { // GetIndexingRulesRequest
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetIndexingRulesCommand(input);
 * const response = await client.send(command);
 * // { // GetIndexingRulesResult
 * //   IndexingRules: [ // IndexingRuleList
 * //     { // IndexingRule
 * //       Name: "STRING_VALUE",
 * //       ModifiedAt: new Date("TIMESTAMP"),
 * //       Rule: { // IndexingRuleValue Union: only one key present
 * //         Probabilistic: { // ProbabilisticRuleValue
 * //           DesiredSamplingPercentage: Number("double"), // required
 * //           ActualSamplingPercentage: Number("double"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIndexingRulesCommandInput - {@link GetIndexingRulesCommandInput}
 * @returns {@link GetIndexingRulesCommandOutput}
 * @see {@link GetIndexingRulesCommandInput} for command's `input` shape.
 * @see {@link GetIndexingRulesCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request exceeds the maximum number of requests per second.</p>
 *
 * @throws {@link XRayServiceException}
 * <p>Base exception class for all service exceptions from XRay service.</p>
 *
 *
 * @public
 */
export class GetIndexingRulesCommand extends $Command
  .classBuilder<
    GetIndexingRulesCommandInput,
    GetIndexingRulesCommandOutput,
    XRayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSXRay", "GetIndexingRules", {})
  .n("XRayClient", "GetIndexingRulesCommand")
  .sc(GetIndexingRules)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIndexingRulesRequest;
      output: GetIndexingRulesResult;
    };
    sdk: {
      input: GetIndexingRulesCommandInput;
      output: GetIndexingRulesCommandOutput;
    };
  };
}
