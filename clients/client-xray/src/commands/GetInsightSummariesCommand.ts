// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetInsightSummariesRequest, GetInsightSummariesResult } from "../models/models_0";
import { GetInsightSummaries } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInsightSummariesCommand}.
 */
export interface GetInsightSummariesCommandInput extends GetInsightSummariesRequest {}
/**
 * @public
 *
 * The output of {@link GetInsightSummariesCommand}.
 */
export interface GetInsightSummariesCommandOutput extends GetInsightSummariesResult, __MetadataBearer {}

/**
 * <p>Retrieves the summaries of all insights in the specified group matching the provided filter values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetInsightSummariesCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetInsightSummariesCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * // import type { XRayClientConfig } from "@aws-sdk/client-xray";
 * const config = {}; // type is XRayClientConfig
 * const client = new XRayClient(config);
 * const input = { // GetInsightSummariesRequest
 *   States: [ // InsightStateList
 *     "ACTIVE" || "CLOSED",
 *   ],
 *   GroupARN: "STRING_VALUE",
 *   GroupName: "STRING_VALUE",
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetInsightSummariesCommand(input);
 * const response = await client.send(command);
 * // { // GetInsightSummariesResult
 * //   InsightSummaries: [ // InsightSummaryList
 * //     { // InsightSummary
 * //       InsightId: "STRING_VALUE",
 * //       GroupARN: "STRING_VALUE",
 * //       GroupName: "STRING_VALUE",
 * //       RootCauseServiceId: { // ServiceId
 * //         Name: "STRING_VALUE",
 * //         Names: [ // ServiceNames
 * //           "STRING_VALUE",
 * //         ],
 * //         AccountId: "STRING_VALUE",
 * //         Type: "STRING_VALUE",
 * //       },
 * //       Categories: [ // InsightCategoryList
 * //         "FAULT",
 * //       ],
 * //       State: "ACTIVE" || "CLOSED",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       Summary: "STRING_VALUE",
 * //       ClientRequestImpactStatistics: { // RequestImpactStatistics
 * //         FaultCount: Number("long"),
 * //         OkCount: Number("long"),
 * //         TotalCount: Number("long"),
 * //       },
 * //       RootCauseServiceRequestImpactStatistics: {
 * //         FaultCount: Number("long"),
 * //         OkCount: Number("long"),
 * //         TotalCount: Number("long"),
 * //       },
 * //       TopAnomalousServices: [ // AnomalousServiceList
 * //         { // AnomalousService
 * //           ServiceId: {
 * //             Name: "STRING_VALUE",
 * //             Names: [
 * //               "STRING_VALUE",
 * //             ],
 * //             AccountId: "STRING_VALUE",
 * //             Type: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       LastUpdateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetInsightSummariesCommandInput - {@link GetInsightSummariesCommandInput}
 * @returns {@link GetInsightSummariesCommandOutput}
 * @see {@link GetInsightSummariesCommandInput} for command's `input` shape.
 * @see {@link GetInsightSummariesCommandOutput} for command's `response` shape.
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
export class GetInsightSummariesCommand extends $Command
  .classBuilder<
    GetInsightSummariesCommandInput,
    GetInsightSummariesCommandOutput,
    XRayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSXRay", "GetInsightSummaries", {})
  .n("XRayClient", "GetInsightSummariesCommand")
  .sc(GetInsightSummaries)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInsightSummariesRequest;
      output: GetInsightSummariesResult;
    };
    sdk: {
      input: GetInsightSummariesCommandInput;
      output: GetInsightSummariesCommandOutput;
    };
  };
}
