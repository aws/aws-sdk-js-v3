// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListInsightsMetricDataRequest, ListInsightsMetricDataResponse } from "../models/models_0";
import { ListInsightsMetricData$ } from "../schemas/schemas_0";

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
 *          <p>To use <code>ListInsightsMetricData</code> operation, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>If <code>ListInsightsMetricData</code> is invoked with <code>TrailName</code> parameter, access to the <code>ListInsightsMetricData</code> API operation is linked to the <code>cloudtrail:LookupEvents</code> action and <code>cloudtrail:ListInsightsData</code>. To use this operation,
 *          you must have permissions to perform the <code>cloudtrail:LookupEvents</code> and <code>cloudtrail:ListInsightsData</code> action on the specific trail.</p>
 *             </li>
 *             <li>
 *                <p>If <code>ListInsightsMetricData</code> is invoked without <code>TrailName</code> parameter, access to the <code>ListInsightsMetricData</code> API operation is linked to the <code>cloudtrail:LookupEvents</code> action only. To use this operation,
 *          you must have permissions to perform the <code>cloudtrail:LookupEvents</code> action.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, ListInsightsMetricDataCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, ListInsightsMetricDataCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // ListInsightsMetricDataRequest
 *   TrailName: "STRING_VALUE",
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
 * //   TrailARN: "STRING_VALUE",
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
 * @throws {@link InvalidTrailNameException} (client fault)
 *  <p>This exception is thrown when the provided trail name is not valid. Trail names must
 *          meet the following requirements:</p>
 *          <ul>
 *             <li>
 *                <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores
 *                (_), or dashes (-)</p>
 *             </li>
 *             <li>
 *                <p>Start with a letter or number, and end with a letter or number</p>
 *             </li>
 *             <li>
 *                <p>Be between 3 and 128 characters</p>
 *             </li>
 *             <li>
 *                <p>Have no adjacent periods, underscores or dashes. Names like
 *                   <code>my-_namespace</code> and <code>my--namespace</code> are not valid.</p>
 *             </li>
 *             <li>
 *                <p>Not be in IP address format (for example, 192.168.5.4)</p>
 *             </li>
 *          </ul>
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudTrail_20131101", "ListInsightsMetricData", {})
  .n("CloudTrailClient", "ListInsightsMetricDataCommand")
  .sc(ListInsightsMetricData$)
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
