// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListMonitoringSchedulesRequest, ListMonitoringSchedulesResponse } from "../models/models_4";
import { de_ListMonitoringSchedulesCommand, se_ListMonitoringSchedulesCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMonitoringSchedulesCommand}.
 */
export interface ListMonitoringSchedulesCommandInput extends ListMonitoringSchedulesRequest {}
/**
 * @public
 *
 * The output of {@link ListMonitoringSchedulesCommand}.
 */
export interface ListMonitoringSchedulesCommandOutput extends ListMonitoringSchedulesResponse, __MetadataBearer {}

/**
 * <p>Returns list of all monitoring schedules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListMonitoringSchedulesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListMonitoringSchedulesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListMonitoringSchedulesRequest
 *   EndpointName: "STRING_VALUE",
 *   SortBy: "Name" || "CreationTime" || "Status",
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NameContains: "STRING_VALUE",
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   LastModifiedTimeBefore: new Date("TIMESTAMP"),
 *   LastModifiedTimeAfter: new Date("TIMESTAMP"),
 *   StatusEquals: "Pending" || "Failed" || "Scheduled" || "Stopped",
 *   MonitoringJobDefinitionName: "STRING_VALUE",
 *   MonitoringTypeEquals: "DataQuality" || "ModelQuality" || "ModelBias" || "ModelExplainability",
 * };
 * const command = new ListMonitoringSchedulesCommand(input);
 * const response = await client.send(command);
 * // { // ListMonitoringSchedulesResponse
 * //   MonitoringScheduleSummaries: [ // MonitoringScheduleSummaryList // required
 * //     { // MonitoringScheduleSummary
 * //       MonitoringScheduleName: "STRING_VALUE", // required
 * //       MonitoringScheduleArn: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       MonitoringScheduleStatus: "Pending" || "Failed" || "Scheduled" || "Stopped", // required
 * //       EndpointName: "STRING_VALUE",
 * //       MonitoringJobDefinitionName: "STRING_VALUE",
 * //       MonitoringType: "DataQuality" || "ModelQuality" || "ModelBias" || "ModelExplainability",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMonitoringSchedulesCommandInput - {@link ListMonitoringSchedulesCommandInput}
 * @returns {@link ListMonitoringSchedulesCommandOutput}
 * @see {@link ListMonitoringSchedulesCommandInput} for command's `input` shape.
 * @see {@link ListMonitoringSchedulesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListMonitoringSchedulesCommand extends $Command
  .classBuilder<
    ListMonitoringSchedulesCommandInput,
    ListMonitoringSchedulesCommandOutput,
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
  .s("SageMaker", "ListMonitoringSchedules", {})
  .n("SageMakerClient", "ListMonitoringSchedulesCommand")
  .f(void 0, void 0)
  .ser(se_ListMonitoringSchedulesCommand)
  .de(de_ListMonitoringSchedulesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMonitoringSchedulesRequest;
      output: ListMonitoringSchedulesResponse;
    };
    sdk: {
      input: ListMonitoringSchedulesCommandInput;
      output: ListMonitoringSchedulesCommandOutput;
    };
  };
}
