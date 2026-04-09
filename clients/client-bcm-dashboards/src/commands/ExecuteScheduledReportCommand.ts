// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BCMDashboardsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BCMDashboardsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ExecuteScheduledReportRequest, ExecuteScheduledReportResponse } from "../models/models_0";
import { ExecuteScheduledReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExecuteScheduledReportCommand}.
 */
export interface ExecuteScheduledReportCommandInput extends ExecuteScheduledReportRequest {}
/**
 * @public
 *
 * The output of {@link ExecuteScheduledReportCommand}.
 */
export interface ExecuteScheduledReportCommandOutput extends ExecuteScheduledReportResponse, __MetadataBearer {}

/**
 * <p>Triggers an immediate execution of a scheduled report, outside of its regular schedule. The scheduled report must be in <code>ENABLED</code> state. Calling this operation on a <code>DISABLED</code> scheduled report returns a <code>ValidationException</code>.</p> <note> <p>If a <code>clientToken</code> is provided, the service uses it for idempotency. Requests with the same client token will not trigger a new execution within the same minute.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMDashboardsClient, ExecuteScheduledReportCommand } from "@aws-sdk/client-bcm-dashboards"; // ES Modules import
 * // const { BCMDashboardsClient, ExecuteScheduledReportCommand } = require("@aws-sdk/client-bcm-dashboards"); // CommonJS import
 * // import type { BCMDashboardsClientConfig } from "@aws-sdk/client-bcm-dashboards";
 * const config = {}; // type is BCMDashboardsClientConfig
 * const client = new BCMDashboardsClient(config);
 * const input = { // ExecuteScheduledReportRequest
 *   arn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   dryRun: true || false,
 * };
 * const command = new ExecuteScheduledReportCommand(input);
 * const response = await client.send(command);
 * // { // ExecuteScheduledReportResponse
 * //   healthStatus: { // HealthStatus
 * //     statusCode: "HEALTHY" || "UNHEALTHY", // required
 * //     lastRefreshedAt: new Date("TIMESTAMP"),
 * //     statusReasons: [ // StatusReasonList
 * //       "DATA_SOURCE_ACCESS_DENIED" || "EXECUTION_ROLE_ASSUME_FAILED" || "EXECUTION_ROLE_INSUFFICIENT_PERMISSIONS" || "DASHBOARD_NOT_FOUND" || "DASHBOARD_ACCESS_DENIED" || "INTERNAL_FAILURE" || "WIDGET_ID_NOT_FOUND",
 * //     ],
 * //   },
 * //   executionTriggered: true || false,
 * // };
 *
 * ```
 *
 * @param ExecuteScheduledReportCommandInput - {@link ExecuteScheduledReportCommandInput}
 * @returns {@link ExecuteScheduledReportCommandOutput}
 * @see {@link ExecuteScheduledReportCommandInput} for command's `input` shape.
 * @see {@link ExecuteScheduledReportCommandOutput} for command's `response` shape.
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
export class ExecuteScheduledReportCommand extends $Command
  .classBuilder<
    ExecuteScheduledReportCommandInput,
    ExecuteScheduledReportCommandOutput,
    BCMDashboardsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMDashboardsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBCMDashboardsService", "ExecuteScheduledReport", {})
  .n("BCMDashboardsClient", "ExecuteScheduledReportCommand")
  .sc(ExecuteScheduledReport$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExecuteScheduledReportRequest;
      output: ExecuteScheduledReportResponse;
    };
    sdk: {
      input: ExecuteScheduledReportCommandInput;
      output: ExecuteScheduledReportCommandOutput;
    };
  };
}
