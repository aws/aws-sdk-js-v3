// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import type { UpdateExperimentTemplateRequest, UpdateExperimentTemplateResponse } from "../models/models_0";
import { UpdateExperimentTemplate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateExperimentTemplateCommand}.
 */
export interface UpdateExperimentTemplateCommandInput extends UpdateExperimentTemplateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateExperimentTemplateCommand}.
 */
export interface UpdateExperimentTemplateCommandOutput extends UpdateExperimentTemplateResponse, __MetadataBearer {}

/**
 * <p>Updates the specified experiment template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, UpdateExperimentTemplateCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, UpdateExperimentTemplateCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * // import type { FisClientConfig } from "@aws-sdk/client-fis";
 * const config = {}; // type is FisClientConfig
 * const client = new FisClient(config);
 * const input = { // UpdateExperimentTemplateRequest
 *   id: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   stopConditions: [ // UpdateExperimentTemplateStopConditionInputList
 *     { // UpdateExperimentTemplateStopConditionInput
 *       source: "STRING_VALUE", // required
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   targets: { // UpdateExperimentTemplateTargetInputMap
 *     "<keys>": { // UpdateExperimentTemplateTargetInput
 *       resourceType: "STRING_VALUE", // required
 *       resourceArns: [ // ResourceArnList
 *         "STRING_VALUE",
 *       ],
 *       resourceTags: { // TagMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       filters: [ // ExperimentTemplateTargetFilterInputList
 *         { // ExperimentTemplateTargetInputFilter
 *           path: "STRING_VALUE", // required
 *           values: [ // ExperimentTemplateTargetFilterValues // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       selectionMode: "STRING_VALUE", // required
 *       parameters: { // ExperimentTemplateTargetParameterMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   },
 *   actions: { // UpdateExperimentTemplateActionInputMap
 *     "<keys>": { // UpdateExperimentTemplateActionInputItem
 *       actionId: "STRING_VALUE",
 *       description: "STRING_VALUE",
 *       parameters: { // ExperimentTemplateActionParameterMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       targets: { // ExperimentTemplateActionTargetMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       startAfter: [ // ExperimentTemplateActionStartAfterList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   roleArn: "STRING_VALUE",
 *   logConfiguration: { // UpdateExperimentTemplateLogConfigurationInput
 *     cloudWatchLogsConfiguration: { // ExperimentTemplateCloudWatchLogsLogConfigurationInput
 *       logGroupArn: "STRING_VALUE", // required
 *     },
 *     s3Configuration: { // ExperimentTemplateS3LogConfigurationInput
 *       bucketName: "STRING_VALUE", // required
 *       prefix: "STRING_VALUE",
 *     },
 *     logSchemaVersion: Number("int"),
 *   },
 *   experimentOptions: { // UpdateExperimentTemplateExperimentOptionsInput
 *     emptyTargetResolutionMode: "fail" || "skip",
 *   },
 *   experimentReportConfiguration: { // UpdateExperimentTemplateReportConfigurationInput
 *     outputs: { // ExperimentTemplateReportConfigurationOutputsInput
 *       s3Configuration: { // ReportConfigurationS3OutputInput
 *         bucketName: "STRING_VALUE",
 *         prefix: "STRING_VALUE",
 *       },
 *     },
 *     dataSources: { // ExperimentTemplateReportConfigurationDataSourcesInput
 *       cloudWatchDashboards: [ // ReportConfigurationCloudWatchDashboardInputList
 *         { // ReportConfigurationCloudWatchDashboardInput
 *           dashboardIdentifier: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *     preExperimentDuration: "STRING_VALUE",
 *     postExperimentDuration: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateExperimentTemplateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateExperimentTemplateResponse
 * //   experimentTemplate: { // ExperimentTemplate
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     targets: { // ExperimentTemplateTargetMap
 * //       "<keys>": { // ExperimentTemplateTarget
 * //         resourceType: "STRING_VALUE",
 * //         resourceArns: [ // ResourceArnList
 * //           "STRING_VALUE",
 * //         ],
 * //         resourceTags: { // TagMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         filters: [ // ExperimentTemplateTargetFilterList
 * //           { // ExperimentTemplateTargetFilter
 * //             path: "STRING_VALUE",
 * //             values: [ // ExperimentTemplateTargetFilterValues
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //         selectionMode: "STRING_VALUE",
 * //         parameters: { // ExperimentTemplateTargetParameterMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     actions: { // ExperimentTemplateActionMap
 * //       "<keys>": { // ExperimentTemplateAction
 * //         actionId: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         parameters: { // ExperimentTemplateActionParameterMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         targets: { // ExperimentTemplateActionTargetMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         startAfter: [ // ExperimentTemplateActionStartAfterList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     stopConditions: [ // ExperimentTemplateStopConditionList
 * //       { // ExperimentTemplateStopCondition
 * //         source: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     creationTime: new Date("TIMESTAMP"),
 * //     lastUpdateTime: new Date("TIMESTAMP"),
 * //     roleArn: "STRING_VALUE",
 * //     tags: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     logConfiguration: { // ExperimentTemplateLogConfiguration
 * //       cloudWatchLogsConfiguration: { // ExperimentTemplateCloudWatchLogsLogConfiguration
 * //         logGroupArn: "STRING_VALUE",
 * //       },
 * //       s3Configuration: { // ExperimentTemplateS3LogConfiguration
 * //         bucketName: "STRING_VALUE",
 * //         prefix: "STRING_VALUE",
 * //       },
 * //       logSchemaVersion: Number("int"),
 * //     },
 * //     experimentOptions: { // ExperimentTemplateExperimentOptions
 * //       accountTargeting: "single-account" || "multi-account",
 * //       emptyTargetResolutionMode: "fail" || "skip",
 * //     },
 * //     targetAccountConfigurationsCount: Number("long"),
 * //     experimentReportConfiguration: { // ExperimentTemplateReportConfiguration
 * //       outputs: { // ExperimentTemplateReportConfigurationOutputs
 * //         s3Configuration: { // ReportConfigurationS3Output
 * //           bucketName: "STRING_VALUE",
 * //           prefix: "STRING_VALUE",
 * //         },
 * //       },
 * //       dataSources: { // ExperimentTemplateReportConfigurationDataSources
 * //         cloudWatchDashboards: [ // ExperimentTemplateReportConfigurationCloudWatchDashboardList
 * //           { // ExperimentTemplateReportConfigurationCloudWatchDashboard
 * //             dashboardIdentifier: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       preExperimentDuration: "STRING_VALUE",
 * //       postExperimentDuration: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateExperimentTemplateCommandInput - {@link UpdateExperimentTemplateCommandInput}
 * @returns {@link UpdateExperimentTemplateCommandOutput}
 * @see {@link UpdateExperimentTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateExperimentTemplateCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for FisClient's `config` shape.
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
 *
 * @public
 */
export class UpdateExperimentTemplateCommand extends $Command
  .classBuilder<
    UpdateExperimentTemplateCommandInput,
    UpdateExperimentTemplateCommandOutput,
    FisClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FisClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FaultInjectionSimulator", "UpdateExperimentTemplate", {})
  .n("FisClient", "UpdateExperimentTemplateCommand")
  .sc(UpdateExperimentTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateExperimentTemplateRequest;
      output: UpdateExperimentTemplateResponse;
    };
    sdk: {
      input: UpdateExperimentTemplateCommandInput;
      output: UpdateExperimentTemplateCommandOutput;
    };
  };
}
