// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BCMDashboardsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BCMDashboardsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateScheduledReportRequest, UpdateScheduledReportResponse } from "../models/models_0";
import { UpdateScheduledReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateScheduledReportCommand}.
 */
export interface UpdateScheduledReportCommandInput extends UpdateScheduledReportRequest {}
/**
 * @public
 *
 * The output of {@link UpdateScheduledReportCommand}.
 */
export interface UpdateScheduledReportCommandOutput extends UpdateScheduledReportResponse, __MetadataBearer {}

/**
 * <p>Updates an existing scheduled report's properties, including its name, description, schedule configuration, and widget settings. Only the parameters included in the request are updated; all other properties remain unchanged.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMDashboardsClient, UpdateScheduledReportCommand } from "@aws-sdk/client-bcm-dashboards"; // ES Modules import
 * // const { BCMDashboardsClient, UpdateScheduledReportCommand } = require("@aws-sdk/client-bcm-dashboards"); // CommonJS import
 * // import type { BCMDashboardsClientConfig } from "@aws-sdk/client-bcm-dashboards";
 * const config = {}; // type is BCMDashboardsClientConfig
 * const client = new BCMDashboardsClient(config);
 * const input = { // UpdateScheduledReportRequest
 *   arn: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   dashboardArn: "STRING_VALUE",
 *   scheduledReportExecutionRoleArn: "STRING_VALUE",
 *   scheduleConfig: { // ScheduleConfig
 *     scheduleExpression: "STRING_VALUE",
 *     scheduleExpressionTimeZone: "STRING_VALUE",
 *     schedulePeriod: { // SchedulePeriod
 *       startTime: new Date("TIMESTAMP"),
 *       endTime: new Date("TIMESTAMP"),
 *     },
 *     state: "ENABLED" || "DISABLED",
 *   },
 *   widgetIds: [ // WidgetIdList
 *     "STRING_VALUE",
 *   ],
 *   widgetDateRangeOverride: { // DateTimeRange
 *     startTime: { // DateTimeValue
 *       type: "ABSOLUTE" || "RELATIVE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *     endTime: {
 *       type: "ABSOLUTE" || "RELATIVE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   },
 *   clearWidgetIds: true || false,
 *   clearWidgetDateRangeOverride: true || false,
 * };
 * const command = new UpdateScheduledReportCommand(input);
 * const response = await client.send(command);
 * // { // UpdateScheduledReportResponse
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateScheduledReportCommandInput - {@link UpdateScheduledReportCommandInput}
 * @returns {@link UpdateScheduledReportCommandOutput}
 * @see {@link UpdateScheduledReportCommandInput} for command's `input` shape.
 * @see {@link UpdateScheduledReportCommandOutput} for command's `response` shape.
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
export class UpdateScheduledReportCommand extends $Command
  .classBuilder<
    UpdateScheduledReportCommandInput,
    UpdateScheduledReportCommandOutput,
    BCMDashboardsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMDashboardsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBCMDashboardsService", "UpdateScheduledReport", {})
  .n("BCMDashboardsClient", "UpdateScheduledReportCommand")
  .sc(UpdateScheduledReport$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateScheduledReportRequest;
      output: UpdateScheduledReportResponse;
    };
    sdk: {
      input: UpdateScheduledReportCommandInput;
      output: UpdateScheduledReportCommandOutput;
    };
  };
}
