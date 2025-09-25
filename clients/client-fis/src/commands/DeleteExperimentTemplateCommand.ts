// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { DeleteExperimentTemplateRequest, DeleteExperimentTemplateResponse } from "../models/models_0";
import { DeleteExperimentTemplate } from "../schemas/schemas_1_Experiment";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteExperimentTemplateCommand}.
 */
export interface DeleteExperimentTemplateCommandInput extends DeleteExperimentTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteExperimentTemplateCommand}.
 */
export interface DeleteExperimentTemplateCommandOutput extends DeleteExperimentTemplateResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified experiment template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, DeleteExperimentTemplateCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, DeleteExperimentTemplateCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * // import type { FisClientConfig } from "@aws-sdk/client-fis";
 * const config = {}; // type is FisClientConfig
 * const client = new FisClient(config);
 * const input = { // DeleteExperimentTemplateRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteExperimentTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DeleteExperimentTemplateResponse
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
 * @param DeleteExperimentTemplateCommandInput - {@link DeleteExperimentTemplateCommandInput}
 * @returns {@link DeleteExperimentTemplateCommandOutput}
 * @see {@link DeleteExperimentTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteExperimentTemplateCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for FisClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
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
export class DeleteExperimentTemplateCommand extends $Command
  .classBuilder<
    DeleteExperimentTemplateCommandInput,
    DeleteExperimentTemplateCommandOutput,
    FisClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FisClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FaultInjectionSimulator", "DeleteExperimentTemplate", {})
  .n("FisClient", "DeleteExperimentTemplateCommand")
  .sc(DeleteExperimentTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteExperimentTemplateRequest;
      output: DeleteExperimentTemplateResponse;
    };
    sdk: {
      input: DeleteExperimentTemplateCommandInput;
      output: DeleteExperimentTemplateCommandOutput;
    };
  };
}
