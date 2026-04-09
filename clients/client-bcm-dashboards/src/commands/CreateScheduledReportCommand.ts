// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BCMDashboardsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BCMDashboardsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateScheduledReportRequest, CreateScheduledReportResponse } from "../models/models_0";
import { CreateScheduledReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateScheduledReportCommand}.
 */
export interface CreateScheduledReportCommandInput extends CreateScheduledReportRequest {}
/**
 * @public
 *
 * The output of {@link CreateScheduledReportCommand}.
 */
export interface CreateScheduledReportCommandOutput extends CreateScheduledReportResponse, __MetadataBearer {}

/**
 * <p>Creates a new scheduled report for a dashboard. A scheduled report automatically generates and delivers dashboard snapshots on a recurring schedule. Reports are delivered within 15 minutes of the scheduled delivery time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMDashboardsClient, CreateScheduledReportCommand } from "@aws-sdk/client-bcm-dashboards"; // ES Modules import
 * // const { BCMDashboardsClient, CreateScheduledReportCommand } = require("@aws-sdk/client-bcm-dashboards"); // CommonJS import
 * // import type { BCMDashboardsClientConfig } from "@aws-sdk/client-bcm-dashboards";
 * const config = {}; // type is BCMDashboardsClientConfig
 * const client = new BCMDashboardsClient(config);
 * const input = { // CreateScheduledReportRequest
 *   scheduledReport: { // ScheduledReportInput
 *     name: "STRING_VALUE", // required
 *     dashboardArn: "STRING_VALUE", // required
 *     scheduledReportExecutionRoleArn: "STRING_VALUE", // required
 *     scheduleConfig: { // ScheduleConfig
 *       scheduleExpression: "STRING_VALUE",
 *       scheduleExpressionTimeZone: "STRING_VALUE",
 *       schedulePeriod: { // SchedulePeriod
 *         startTime: new Date("TIMESTAMP"),
 *         endTime: new Date("TIMESTAMP"),
 *       },
 *       state: "ENABLED" || "DISABLED",
 *     },
 *     description: "STRING_VALUE",
 *     widgetIds: [ // WidgetIdList
 *       "STRING_VALUE",
 *     ],
 *     widgetDateRangeOverride: { // DateTimeRange
 *       startTime: { // DateTimeValue
 *         type: "ABSOLUTE" || "RELATIVE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *       endTime: {
 *         type: "ABSOLUTE" || "RELATIVE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 *   resourceTags: [ // ResourceTagList
 *     { // ResourceTag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateScheduledReportCommand(input);
 * const response = await client.send(command);
 * // { // CreateScheduledReportResponse
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateScheduledReportCommandInput - {@link CreateScheduledReportCommandInput}
 * @returns {@link CreateScheduledReportCommandOutput}
 * @see {@link CreateScheduledReportCommandInput} for command's `input` shape.
 * @see {@link CreateScheduledReportCommandOutput} for command's `response` shape.
 * @see {@link BCMDashboardsClientResolvedConfig | config} for BCMDashboardsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. Verify your IAM permissions and any resource policies.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource. For example, attempting to create a resource that already exists or is being created.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred while processing the request. Retry your request. If the problem persists, contact Amazon Web Services Support.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed a service quota. Review the service quotas for Amazon Web Services Billing and Cost Management Dashboards and retry your request.</p>
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
export class CreateScheduledReportCommand extends $Command
  .classBuilder<
    CreateScheduledReportCommandInput,
    CreateScheduledReportCommandOutput,
    BCMDashboardsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMDashboardsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBCMDashboardsService", "CreateScheduledReport", {})
  .n("BCMDashboardsClient", "CreateScheduledReportCommand")
  .sc(CreateScheduledReport$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateScheduledReportRequest;
      output: CreateScheduledReportResponse;
    };
    sdk: {
      input: CreateScheduledReportCommandInput;
      output: CreateScheduledReportCommandOutput;
    };
  };
}
