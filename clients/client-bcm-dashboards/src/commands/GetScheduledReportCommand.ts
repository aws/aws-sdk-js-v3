// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BCMDashboardsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BCMDashboardsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetScheduledReportRequest, GetScheduledReportResponse } from "../models/models_0";
import { GetScheduledReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetScheduledReportCommand}.
 */
export interface GetScheduledReportCommandInput extends GetScheduledReportRequest {}
/**
 * @public
 *
 * The output of {@link GetScheduledReportCommand}.
 */
export interface GetScheduledReportCommandOutput extends GetScheduledReportResponse, __MetadataBearer {}

/**
 * <p>Retrieves the configuration and metadata of a specified scheduled report.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMDashboardsClient, GetScheduledReportCommand } from "@aws-sdk/client-bcm-dashboards"; // ES Modules import
 * // const { BCMDashboardsClient, GetScheduledReportCommand } = require("@aws-sdk/client-bcm-dashboards"); // CommonJS import
 * // import type { BCMDashboardsClientConfig } from "@aws-sdk/client-bcm-dashboards";
 * const config = {}; // type is BCMDashboardsClientConfig
 * const client = new BCMDashboardsClient(config);
 * const input = { // GetScheduledReportRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetScheduledReportCommand(input);
 * const response = await client.send(command);
 * // { // GetScheduledReportResponse
 * //   scheduledReport: { // ScheduledReport
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE", // required
 * //     dashboardArn: "STRING_VALUE", // required
 * //     scheduledReportExecutionRoleArn: "STRING_VALUE", // required
 * //     scheduleConfig: { // ScheduleConfig
 * //       scheduleExpression: "STRING_VALUE",
 * //       scheduleExpressionTimeZone: "STRING_VALUE",
 * //       schedulePeriod: { // SchedulePeriod
 * //         startTime: new Date("TIMESTAMP"),
 * //         endTime: new Date("TIMESTAMP"),
 * //       },
 * //       state: "ENABLED" || "DISABLED",
 * //     },
 * //     description: "STRING_VALUE",
 * //     widgetIds: [ // WidgetIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     widgetDateRangeOverride: { // DateTimeRange
 * //       startTime: { // DateTimeValue
 * //         type: "ABSOLUTE" || "RELATIVE", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //       endTime: {
 * //         type: "ABSOLUTE" || "RELATIVE", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     lastExecutionAt: new Date("TIMESTAMP"),
 * //     healthStatus: { // HealthStatus
 * //       statusCode: "HEALTHY" || "UNHEALTHY", // required
 * //       lastRefreshedAt: new Date("TIMESTAMP"),
 * //       statusReasons: [ // StatusReasonList
 * //         "DATA_SOURCE_ACCESS_DENIED" || "EXECUTION_ROLE_ASSUME_FAILED" || "EXECUTION_ROLE_INSUFFICIENT_PERMISSIONS" || "DASHBOARD_NOT_FOUND" || "DASHBOARD_ACCESS_DENIED" || "INTERNAL_FAILURE" || "WIDGET_ID_NOT_FOUND",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetScheduledReportCommandInput - {@link GetScheduledReportCommandInput}
 * @returns {@link GetScheduledReportCommandOutput}
 * @see {@link GetScheduledReportCommandInput} for command's `input` shape.
 * @see {@link GetScheduledReportCommandOutput} for command's `response` shape.
 * @see {@link BCMDashboardsClientResolvedConfig | config} for BCMDashboardsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. Verify your IAM permissions and any resource policies.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred while processing the request. Retry your request. If the problem persists, contact Amazon Web Services Support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource (dashboard, policy, or widget) was not found. Verify the ARN and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Reduce the frequency of requests and use exponential backoff.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters do not satisfy the requirements. Check the error message for specific validation details.</p>
 *
 * @throws {@link BCMDashboardsServiceException}
 * <p>Base exception class for all service exceptions from BCMDashboards service.</p>
 *
 *
 * @public
 */
export class GetScheduledReportCommand extends $Command
  .classBuilder<
    GetScheduledReportCommandInput,
    GetScheduledReportCommandOutput,
    BCMDashboardsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMDashboardsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBCMDashboardsService", "GetScheduledReport", {})
  .n("BCMDashboardsClient", "GetScheduledReportCommand")
  .sc(GetScheduledReport$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetScheduledReportRequest;
      output: GetScheduledReportResponse;
    };
    sdk: {
      input: GetScheduledReportCommandInput;
      output: GetScheduledReportCommandOutput;
    };
  };
}
