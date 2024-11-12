// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { StartExperimentRequest, StartExperimentResponse } from "../models/models_0";
import { de_StartExperimentCommand, se_StartExperimentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartExperimentCommand}.
 */
export interface StartExperimentCommandInput extends StartExperimentRequest {}
/**
 * @public
 *
 * The output of {@link StartExperimentCommand}.
 */
export interface StartExperimentCommandOutput extends StartExperimentResponse, __MetadataBearer {}

/**
 * <p>Starts running an experiment from the specified experiment template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, StartExperimentCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, StartExperimentCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const input = { // StartExperimentRequest
 *   clientToken: "STRING_VALUE", // required
 *   experimentTemplateId: "STRING_VALUE", // required
 *   experimentOptions: { // StartExperimentExperimentOptionsInput
 *     actionsMode: "skip-all" || "run-all",
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartExperimentCommand(input);
 * const response = await client.send(command);
 * // { // StartExperimentResponse
 * //   experiment: { // Experiment
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     experimentTemplateId: "STRING_VALUE",
 * //     roleArn: "STRING_VALUE",
 * //     state: { // ExperimentState
 * //       status: "pending" || "initiating" || "running" || "completed" || "stopping" || "stopped" || "failed" || "cancelled",
 * //       reason: "STRING_VALUE",
 * //       error: { // ExperimentError
 * //         accountId: "STRING_VALUE",
 * //         code: "STRING_VALUE",
 * //         location: "STRING_VALUE",
 * //       },
 * //     },
 * //     targets: { // ExperimentTargetMap
 * //       "<keys>": { // ExperimentTarget
 * //         resourceType: "STRING_VALUE",
 * //         resourceArns: [ // ResourceArnList
 * //           "STRING_VALUE",
 * //         ],
 * //         resourceTags: { // TagMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         filters: [ // ExperimentTargetFilterList
 * //           { // ExperimentTargetFilter
 * //             path: "STRING_VALUE",
 * //             values: [ // ExperimentTargetFilterValues
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //         selectionMode: "STRING_VALUE",
 * //         parameters: { // ExperimentTargetParameterMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     actions: { // ExperimentActionMap
 * //       "<keys>": { // ExperimentAction
 * //         actionId: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         parameters: { // ExperimentActionParameterMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         targets: { // ExperimentActionTargetMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         startAfter: [ // ExperimentActionStartAfterList
 * //           "STRING_VALUE",
 * //         ],
 * //         state: { // ExperimentActionState
 * //           status: "pending" || "initiating" || "running" || "completed" || "cancelled" || "stopping" || "stopped" || "failed" || "skipped",
 * //           reason: "STRING_VALUE",
 * //         },
 * //         startTime: new Date("TIMESTAMP"),
 * //         endTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //     stopConditions: [ // ExperimentStopConditionList
 * //       { // ExperimentStopCondition
 * //         source: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     creationTime: new Date("TIMESTAMP"),
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //     tags: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     logConfiguration: { // ExperimentLogConfiguration
 * //       cloudWatchLogsConfiguration: { // ExperimentCloudWatchLogsLogConfiguration
 * //         logGroupArn: "STRING_VALUE",
 * //       },
 * //       s3Configuration: { // ExperimentS3LogConfiguration
 * //         bucketName: "STRING_VALUE",
 * //         prefix: "STRING_VALUE",
 * //       },
 * //       logSchemaVersion: Number("int"),
 * //     },
 * //     experimentOptions: { // ExperimentOptions
 * //       accountTargeting: "single-account" || "multi-account",
 * //       emptyTargetResolutionMode: "fail" || "skip",
 * //       actionsMode: "skip-all" || "run-all",
 * //     },
 * //     targetAccountConfigurationsCount: Number("long"),
 * //     experimentReportConfiguration: { // ExperimentReportConfiguration
 * //       outputs: { // ExperimentReportConfigurationOutputs
 * //         s3Configuration: { // ExperimentReportConfigurationOutputsS3Configuration
 * //           bucketName: "STRING_VALUE",
 * //           prefix: "STRING_VALUE",
 * //         },
 * //       },
 * //       dataSources: { // ExperimentReportConfigurationDataSources
 * //         cloudWatchDashboards: [ // ExperimentReportConfigurationCloudWatchDashboardList
 * //           { // ExperimentReportConfigurationCloudWatchDashboard
 * //             dashboardIdentifier: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       preExperimentDuration: "STRING_VALUE",
 * //       postExperimentDuration: "STRING_VALUE",
 * //     },
 * //     experimentReport: { // ExperimentReport
 * //       state: { // ExperimentReportState
 * //         status: "pending" || "running" || "completed" || "cancelled" || "failed",
 * //         reason: "STRING_VALUE",
 * //         error: { // ExperimentReportError
 * //           code: "STRING_VALUE",
 * //         },
 * //       },
 * //       s3Reports: [ // ExperimentReportS3ReportList
 * //         { // ExperimentReportS3Report
 * //           arn: "STRING_VALUE",
 * //           reportType: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartExperimentCommandInput - {@link StartExperimentCommandInput}
 * @returns {@link StartExperimentCommandOutput}
 * @see {@link StartExperimentCommandInput} for command's `input` shape.
 * @see {@link StartExperimentCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for FisClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of a conflict.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded your service quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is not valid, or fails to satisfy the constraints for the request.</p>
 *
 * @throws {@link FisServiceException}
 * <p>Base exception class for all service exceptions from Fis service.</p>
 *
 * @public
 */
export class StartExperimentCommand extends $Command
  .classBuilder<
    StartExperimentCommandInput,
    StartExperimentCommandOutput,
    FisClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FisClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FaultInjectionSimulator", "StartExperiment", {})
  .n("FisClient", "StartExperimentCommand")
  .f(void 0, void 0)
  .ser(se_StartExperimentCommand)
  .de(de_StartExperimentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartExperimentRequest;
      output: StartExperimentResponse;
    };
    sdk: {
      input: StartExperimentCommandInput;
      output: StartExperimentCommandOutput;
    };
  };
}
