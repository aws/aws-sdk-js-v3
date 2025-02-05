// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListMonitoringAlertsRequest, ListMonitoringAlertsResponse } from "../models/models_4";
import { de_ListMonitoringAlertsCommand, se_ListMonitoringAlertsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets the alerts for a single monitoring schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListMonitoringAlertsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListMonitoringAlertsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class ListMonitoringAlertsCommand extends $Command
  .classBuilder<
    ListMonitoringAlertsCommandInput,
    ListMonitoringAlertsCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "ListMonitoringAlerts", {})
  .n("SageMakerClient", "ListMonitoringAlertsCommand")
  .f(void 0, void 0)
  .ser(se_ListMonitoringAlertsCommand)
  .de(de_ListMonitoringAlertsCommand)
  .build() {
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
