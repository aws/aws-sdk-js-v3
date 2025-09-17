// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListInsightsMetricDataRequest, ListInsightsMetricDataResponse } from "../models/models_0";
import { de_ListInsightsMetricDataCommand, se_ListInsightsMetricDataCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInsightsMetricDataCommand}.
 */
export interface ListInsightsMetricDataCommandInput extends ListInsightsMetricDataRequest {}
/**
 * @public
 *
 * The output of {@link ListInsightsMetricDataCommand}.
 */
export interface ListInsightsMetricDataCommandOutput extends ListInsightsMetricDataResponse, __MetadataBearer {}

/**
 * <p>Returns Insights metrics data for trails that have enabled Insights. The request must include the <code>EventSource</code>,
 *          <code>EventName</code>, and <code>InsightType</code> parameters.</p>
 *          <p>If the <code>InsightType</code> is set to <code>ApiErrorRateInsight</code>, the request must also include the <code>ErrorCode</code> parameter.</p>
 *          <p>The following are the available time periods for <code>ListInsightsMetricData</code>. Each cutoff is inclusive.</p>
 *          <ul>
 *             <li>
 *                <p>Data points with a period of 60 seconds (1-minute) are available for 15 days.</p>
 *             </li>
 *             <li>
 *                <p>Data points with a period of 300 seconds (5-minute) are available for 63 days.</p>
 *             </li>
 *             <li>
 *                <p>Data points with a period of 3600 seconds (1 hour) are available for 90 days.</p>
 *             </li>
 *          </ul>
 *          <p>Access to the <code>ListInsightsMetricData</code> API operation is linked to the <code>cloudtrail:LookupEvents</code> action. To use this operation,
 *          you must have permissions to perform the <code>cloudtrail:LookupEvents</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, ListInsightsMetricDataCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, ListInsightsMetricDataCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // ListInsightsMetricDataRequest
 *   EventSource: "STRING_VALUE", // required
 *   EventName: "STRING_VALUE", // required
 *   InsightType: "ApiCallRateInsight" || "ApiErrorRateInsight", // required
 *   ErrorCode: "STRING_VALUE",
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   Period: Number("int"),
 *   DataType: "FillWithZeros" || "NonZeroData",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListInsightsMetricDataCommand(input);
 * const response = await client.send(command);
 * // { // ListInsightsMetricDataResponse
 * //   EventSource: "STRING_VALUE",
 * //   EventName: "STRING_VALUE",
 * //   InsightType: "ApiCallRateInsight" || "ApiErrorRateInsight",
 * //   ErrorCode: "STRING_VALUE",
 * //   Timestamps: [ // Timestamps
 * //     new Date("TIMESTAMP"),
 * //   ],
 * //   Values: [ // InsightsMetricValues
 * //     Number("double"),
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInsightsMetricDataCommandInput - {@link ListInsightsMetricDataCommandInput}
 * @returns {@link ListInsightsMetricDataCommandOutput}
 * @see {@link ListInsightsMetricDataCommandInput} for command's `input` shape.
 * @see {@link ListInsightsMetricDataCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The request includes a parameter that is not valid.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 *
 * @public
 */
export class ListInsightsMetricDataCommand extends $Command
  .classBuilder<
    ListInsightsMetricDataCommandInput,
    ListInsightsMetricDataCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudTrail_20131101", "ListInsightsMetricData", {})
  .n("CloudTrailClient", "ListInsightsMetricDataCommand")
  .f(void 0, void 0)
  .ser(se_ListInsightsMetricDataCommand)
  .de(de_ListInsightsMetricDataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInsightsMetricDataRequest;
      output: ListInsightsMetricDataResponse;
    };
    sdk: {
      input: ListInsightsMetricDataCommandInput;
      output: ListInsightsMetricDataCommandOutput;
    };
  };
}
