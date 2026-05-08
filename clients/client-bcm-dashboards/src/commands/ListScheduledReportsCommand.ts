// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BCMDashboardsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BCMDashboardsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListScheduledReportsRequest, ListScheduledReportsResponse } from "../models/models_0";
import { ListScheduledReports$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListScheduledReportsCommand}.
 */
export interface ListScheduledReportsCommandInput extends ListScheduledReportsRequest {}
/**
 * @public
 *
 * The output of {@link ListScheduledReportsCommand}.
 */
export interface ListScheduledReportsCommandOutput extends ListScheduledReportsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of scheduled reports in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMDashboardsClient, ListScheduledReportsCommand } from "@aws-sdk/client-bcm-dashboards"; // ES Modules import
 * // const { BCMDashboardsClient, ListScheduledReportsCommand } = require("@aws-sdk/client-bcm-dashboards"); // CommonJS import
 * // import type { BCMDashboardsClientConfig } from "@aws-sdk/client-bcm-dashboards";
 * const config = {}; // type is BCMDashboardsClientConfig
 * const client = new BCMDashboardsClient(config);
 * const input = { // ListScheduledReportsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListScheduledReportsCommand(input);
 * const response = await client.send(command);
 * // { // ListScheduledReportsResponse
 * //   scheduledReports: [ // ScheduledReportSummaryList // required
 * //     { // ScheduledReportSummary
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       dashboardArn: "STRING_VALUE", // required
 * //       scheduleExpression: "STRING_VALUE", // required
 * //       state: "ENABLED" || "DISABLED", // required
 * //       healthStatus: { // HealthStatus
 * //         statusCode: "HEALTHY" || "UNHEALTHY", // required
 * //         lastRefreshedAt: new Date("TIMESTAMP"),
 * //         statusReasons: [ // StatusReasonList
 * //           "DATA_SOURCE_ACCESS_DENIED" || "EXECUTION_ROLE_ASSUME_FAILED" || "EXECUTION_ROLE_INSUFFICIENT_PERMISSIONS" || "DASHBOARD_NOT_FOUND" || "DASHBOARD_ACCESS_DENIED" || "INTERNAL_FAILURE" || "WIDGET_ID_NOT_FOUND",
 * //         ],
 * //       },
 * //       scheduleExpressionTimeZone: "STRING_VALUE",
 * //       widgetIds: [ // WidgetIdList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListScheduledReportsCommandInput - {@link ListScheduledReportsCommandInput}
 * @returns {@link ListScheduledReportsCommandOutput}
 * @see {@link ListScheduledReportsCommandInput} for command's `input` shape.
 * @see {@link ListScheduledReportsCommandOutput} for command's `response` shape.
 * @see {@link BCMDashboardsClientResolvedConfig | config} for BCMDashboardsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. Verify your IAM permissions and any resource policies.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred while processing the request. Retry your request. If the problem persists, contact Amazon Web Services Support.</p>
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
export class ListScheduledReportsCommand extends $Command
  .classBuilder<
    ListScheduledReportsCommandInput,
    ListScheduledReportsCommandOutput,
    BCMDashboardsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMDashboardsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBCMDashboardsService", "ListScheduledReports", {})
  .n("BCMDashboardsClient", "ListScheduledReportsCommand")
  .sc(ListScheduledReports$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListScheduledReportsRequest;
      output: ListScheduledReportsResponse;
    };
    sdk: {
      input: ListScheduledReportsCommandInput;
      output: ListScheduledReportsCommandOutput;
    };
  };
}
