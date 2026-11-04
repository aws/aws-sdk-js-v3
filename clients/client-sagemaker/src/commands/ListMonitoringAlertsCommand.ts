// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMonitoringAlertsRequest, ListMonitoringAlertsResponse } from "../models/models_4";
import { ListMonitoringAlerts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMonitoringAlertsCommand}.
 */
export interface ListMonitoringAlertsCommandInput extends ListMonitoringAlertsRequest {}
/**
 * @public
 *
 * The output of {@link ListMonitoringAlertsCommand}.
 */
export interface ListMonitoringAlertsCommandOutput extends ListMonitoringAlertsResponse, __MetadataBearer {}

/**
 * Gets the alerts for a single monitoring schedule.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListMonitoringAlertsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListMonitoringAlertsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListMonitoringAlertsRequest
 *   MonitoringScheduleName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMonitoringAlertsCommand(input);
 * const response = await client.send(command);
 * // { // ListMonitoringAlertsResponse
 * //   MonitoringAlertSummaries: [ // MonitoringAlertSummaryList
 * //     { // MonitoringAlertSummary
 * //       MonitoringAlertName: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       AlertStatus: "InAlert" || "OK", // required
 * //       DatapointsToAlert: Number("int"), // required
 * //       EvaluationPeriod: Number("int"), // required
 * //       Actions: { // MonitoringAlertActions
 * //         ModelDashboardIndicator: { // ModelDashboardIndicatorAction
 * //           Enabled: true || false,
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMonitoringAlertsCommandInput - {@link ListMonitoringAlertsCommandInput}
 * @returns {@link ListMonitoringAlertsCommandOutput}
 * @see {@link ListMonitoringAlertsCommandInput} for command's `input` shape.
 * @see {@link ListMonitoringAlertsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *
 * Resource being access is not found.
 *
 * @throws {@link SageMakerServiceException}
 *
 * Base exception class for all service exceptions from SageMaker service.
 *
 * @public
 */
export class ListMonitoringAlertsCommand extends command<ListMonitoringAlertsCommandInput, ListMonitoringAlertsCommandOutput>(
  _ep0,
  _mw0,
  "ListMonitoringAlerts",
  ListMonitoringAlerts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMonitoringAlertsRequest;
      output: ListMonitoringAlertsResponse;
    };
    sdk: {
      input: ListMonitoringAlertsCommandInput;
      output: ListMonitoringAlertsCommandOutput;
    };
  };
}
