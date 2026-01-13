// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetSamplingStatisticSummariesRequest, GetSamplingStatisticSummariesResult } from "../models/models_0";
import { GetSamplingStatisticSummaries$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSamplingStatisticSummariesCommand}.
 */
export interface GetSamplingStatisticSummariesCommandInput extends GetSamplingStatisticSummariesRequest {}
/**
 * @public
 *
 * The output of {@link GetSamplingStatisticSummariesCommand}.
 */
export interface GetSamplingStatisticSummariesCommandOutput extends GetSamplingStatisticSummariesResult, __MetadataBearer {}

/**
 * <p>Retrieves information about recent sampling results for all sampling rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetSamplingStatisticSummariesCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetSamplingStatisticSummariesCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * // import type { XRayClientConfig } from "@aws-sdk/client-xray";
 * const config = {}; // type is XRayClientConfig
 * const client = new XRayClient(config);
 * const input = { // GetSamplingStatisticSummariesRequest
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetSamplingStatisticSummariesCommand(input);
 * const response = await client.send(command);
 * // { // GetSamplingStatisticSummariesResult
 * //   SamplingStatisticSummaries: [ // SamplingStatisticSummaryList
 * //     { // SamplingStatisticSummary
 * //       RuleName: "STRING_VALUE",
 * //       Timestamp: new Date("TIMESTAMP"),
 * //       RequestCount: Number("int"),
 * //       BorrowCount: Number("int"),
 * //       SampledCount: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSamplingStatisticSummariesCommandInput - {@link GetSamplingStatisticSummariesCommandInput}
 * @returns {@link GetSamplingStatisticSummariesCommandOutput}
 * @see {@link GetSamplingStatisticSummariesCommandInput} for command's `input` shape.
 * @see {@link GetSamplingStatisticSummariesCommandOutput} for command's `response` shape.
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
export class GetSamplingStatisticSummariesCommand extends $Command
  .classBuilder<
    GetSamplingStatisticSummariesCommandInput,
    GetSamplingStatisticSummariesCommandOutput,
    XRayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSXRay", "GetSamplingStatisticSummaries", {})
  .n("XRayClient", "GetSamplingStatisticSummariesCommand")
  .sc(GetSamplingStatisticSummaries$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSamplingStatisticSummariesRequest;
      output: GetSamplingStatisticSummariesResult;
    };
    sdk: {
      input: GetSamplingStatisticSummariesCommandInput;
      output: GetSamplingStatisticSummariesCommandOutput;
    };
  };
}
