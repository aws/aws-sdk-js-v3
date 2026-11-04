// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExecuteScheduledReportRequest, ExecuteScheduledReportResponse } from "../models/models_0";
import { ExecuteScheduledReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Triggers an immediate execution of a scheduled report, outside of its regular schedule. The scheduled report must be in `ENABLED` state. Calling this operation on a `DISABLED` scheduled report returns a `ValidationException`.
 *
 * > **Note:** If a `clientToken` is provided, the service uses it for idempotency. Requests with the same client token will not trigger a new execution within the same minute.
 *
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
 *
 * You do not have sufficient permissions to perform this action. Verify your IAM permissions and any resource policies.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the resource. For example, attempting to create a resource that already exists or is being created.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error occurred while processing the request. Retry your request. If the problem persists, contact Amazon Web Services Support.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource (dashboard, policy, or widget) was not found. Verify the ARN and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling. Reduce the frequency of requests and use exponential backoff.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input parameters do not satisfy the requirements. Check the error message for specific validation details.
 *
 * @throws {@link BCMDashboardsServiceException}
 *
 * Base exception class for all service exceptions from BCMDashboards service.
 *
 * @public
 */
export class ExecuteScheduledReportCommand extends command<ExecuteScheduledReportCommandInput, ExecuteScheduledReportCommandOutput>(
  _ep0,
  _mw0,
  "ExecuteScheduledReport",
  ExecuteScheduledReport$
) {
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
