// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListMonitoringExecutionsRequest, ListMonitoringExecutionsResponse } from "../models/models_4";
import { de_ListMonitoringExecutionsCommand, se_ListMonitoringExecutionsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMonitoringExecutionsCommand}.
 */
export interface ListMonitoringExecutionsCommandInput extends ListMonitoringExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListMonitoringExecutionsCommand}.
 */
export interface ListMonitoringExecutionsCommandOutput extends ListMonitoringExecutionsResponse, __MetadataBearer {}

/**
 * <p>Returns list of all monitoring job executions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListMonitoringExecutionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListMonitoringExecutionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListMonitoringExecutionsRequest
 *   MonitoringScheduleName: "STRING_VALUE",
 *   EndpointName: "STRING_VALUE",
 *   SortBy: "CreationTime" || "ScheduledTime" || "Status",
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ScheduledTimeBefore: new Date("TIMESTAMP"),
 *   ScheduledTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   LastModifiedTimeBefore: new Date("TIMESTAMP"),
 *   LastModifiedTimeAfter: new Date("TIMESTAMP"),
 *   StatusEquals: "Pending" || "Completed" || "CompletedWithViolations" || "InProgress" || "Failed" || "Stopping" || "Stopped",
 *   MonitoringJobDefinitionName: "STRING_VALUE",
 *   MonitoringTypeEquals: "DataQuality" || "ModelQuality" || "ModelBias" || "ModelExplainability",
 * };
 * const command = new ListMonitoringExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListMonitoringExecutionsResponse
 * //   MonitoringExecutionSummaries: [ // MonitoringExecutionSummaryList // required
 * //     { // MonitoringExecutionSummary
 * //       MonitoringScheduleName: "STRING_VALUE", // required
 * //       ScheduledTime: new Date("TIMESTAMP"), // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       MonitoringExecutionStatus: "Pending" || "Completed" || "CompletedWithViolations" || "InProgress" || "Failed" || "Stopping" || "Stopped", // required
 * //       ProcessingJobArn: "STRING_VALUE",
 * //       EndpointName: "STRING_VALUE",
 * //       FailureReason: "STRING_VALUE",
 * //       MonitoringJobDefinitionName: "STRING_VALUE",
 * //       MonitoringType: "DataQuality" || "ModelQuality" || "ModelBias" || "ModelExplainability",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMonitoringExecutionsCommandInput - {@link ListMonitoringExecutionsCommandInput}
 * @returns {@link ListMonitoringExecutionsCommandOutput}
 * @see {@link ListMonitoringExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListMonitoringExecutionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListMonitoringExecutionsCommand extends $Command
  .classBuilder<
    ListMonitoringExecutionsCommandInput,
    ListMonitoringExecutionsCommandOutput,
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
  .s("SageMaker", "ListMonitoringExecutions", {})
  .n("SageMakerClient", "ListMonitoringExecutionsCommand")
  .f(void 0, void 0)
  .ser(se_ListMonitoringExecutionsCommand)
  .de(de_ListMonitoringExecutionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMonitoringExecutionsRequest;
      output: ListMonitoringExecutionsResponse;
    };
    sdk: {
      input: ListMonitoringExecutionsCommandInput;
      output: ListMonitoringExecutionsCommandOutput;
    };
  };
}
