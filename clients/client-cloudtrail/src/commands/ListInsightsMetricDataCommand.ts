// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListInsightsMetricDataRequest, ListInsightsMetricDataResponse } from "../models/models_0";
import { ListInsightsMetricData$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns Insights metrics data for trails that have enabled Insights. The request must include the `EventSource`, `EventName`, and `InsightType` parameters.
 *
 * If the `InsightType` is set to `ApiErrorRateInsight`, the request must also include the `ErrorCode` parameter.
 *
 * The following are the available time periods for `ListInsightsMetricData`. Each cutoff is inclusive.
 *
 * - Data points with a period of 60 seconds (1-minute) are available for 15 days.
 * - Data points with a period of 300 seconds (5-minute) are available for 63 days.
 * - Data points with a period of 3600 seconds (1 hour) are available for 90 days.
 *
 * To use `ListInsightsMetricData` operation, you must have the following permissions:
 *
 * - If `ListInsightsMetricData` is invoked with `TrailName` parameter, access to the `ListInsightsMetricData` API operation is linked to the `cloudtrail:LookupEvents` action and `cloudtrail:ListInsightsData`. To use this operation, you must have permissions to perform the `cloudtrail:LookupEvents` and `cloudtrail:ListInsightsData` action on the specific trail.
 * - If `ListInsightsMetricData` is invoked without `TrailName` parameter, access to the `ListInsightsMetricData` API operation is linked to the `cloudtrail:LookupEvents` action only. To use this operation, you must have permissions to perform the `cloudtrail:LookupEvents` action.
 *
 * > **Note:** For data event Insights on organization trails, only the management account and delegated administrator accounts can call `ListInsightsMetricData`. For these callers, the API returns Insights metrics only for the caller's own account. Member accounts cannot call this API on organization trails.
 *
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
 *
 * The request includes a parameter that is not valid.
 *
 * @throws {@link InvalidTrailNameException} (client fault)
 *
 * This exception is thrown when the provided trail name is not valid. Trail names must meet the following requirements:
 *
 * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)
 * - Start with a letter or number, and end with a letter or number
 * - Be between 3 and 128 characters
 * - Have no adjacent periods, underscores or dashes. Names like `my-_namespace` and `my--namespace` are not valid.
 * - Not be in IP address format (for example, 192.168.5.4)
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * This exception is thrown when the requested operation is not permitted.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * This exception is thrown when the requested operation is not supported.
 *
 * @throws {@link CloudTrailServiceException}
 *
 * Base exception class for all service exceptions from CloudTrail service.
 *
 * @public
 */
export class ListInsightsMetricDataCommand extends command<ListInsightsMetricDataCommandInput, ListInsightsMetricDataCommandOutput>(
  _ep0,
  _mw0,
  "ListInsightsMetricData",
  ListInsightsMetricData$
) {
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
