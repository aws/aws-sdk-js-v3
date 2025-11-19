// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListMonitoringAlertHistoryRequest, ListMonitoringAlertHistoryResponse } from "../models/models_3";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListMonitoringAlertHistory } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMonitoringAlertHistoryCommand}.
 */
export interface ListMonitoringAlertHistoryCommandInput extends ListMonitoringAlertHistoryRequest {}
/**
 * @public
 *
 * The output of {@link ListMonitoringAlertHistoryCommand}.
 */
export interface ListMonitoringAlertHistoryCommandOutput extends ListMonitoringAlertHistoryResponse, __MetadataBearer {}

/**
 * <p>Gets a list of past alerts in a model monitoring schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListMonitoringAlertHistoryCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListMonitoringAlertHistoryCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListMonitoringAlertHistoryRequest
 *   MonitoringScheduleName: "STRING_VALUE",
 *   MonitoringAlertName: "STRING_VALUE",
 *   SortBy: "CreationTime" || "Status",
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   StatusEquals: "InAlert" || "OK",
 * };
 * const command = new ListMonitoringAlertHistoryCommand(input);
 * const response = await client.send(command);
 * // { // ListMonitoringAlertHistoryResponse
 * //   MonitoringAlertHistory: [ // MonitoringAlertHistoryList
 * //     { // MonitoringAlertHistorySummary
 * //       MonitoringScheduleName: "STRING_VALUE", // required
 * //       MonitoringAlertName: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       AlertStatus: "InAlert" || "OK", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMonitoringAlertHistoryCommandInput - {@link ListMonitoringAlertHistoryCommandInput}
 * @returns {@link ListMonitoringAlertHistoryCommandOutput}
 * @see {@link ListMonitoringAlertHistoryCommandInput} for command's `input` shape.
 * @see {@link ListMonitoringAlertHistoryCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListMonitoringAlertHistoryCommand extends $Command
  .classBuilder<
    ListMonitoringAlertHistoryCommandInput,
    ListMonitoringAlertHistoryCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "ListMonitoringAlertHistory", {})
  .n("SageMakerClient", "ListMonitoringAlertHistoryCommand")
  .sc(ListMonitoringAlertHistory)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMonitoringAlertHistoryRequest;
      output: ListMonitoringAlertHistoryResponse;
    };
    sdk: {
      input: ListMonitoringAlertHistoryCommandInput;
      output: ListMonitoringAlertHistoryCommandOutput;
    };
  };
}
