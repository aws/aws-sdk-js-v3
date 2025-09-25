// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { CreateExperimentTemplateRequest, CreateExperimentTemplateResponse } from "../models/models_0";
import { CreateExperimentTemplate } from "../schemas/schemas_1_Experiment";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateExperimentTemplateCommand}.
 */
export interface CreateExperimentTemplateCommandInput extends CreateExperimentTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateExperimentTemplateCommand}.
 */
export interface CreateExperimentTemplateCommandOutput extends CreateExperimentTemplateResponse, __MetadataBearer {}

/**
 * <p>Creates an experiment template. </p>
 *          <p>An experiment template includes the following components:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Targets</b>: A target can be a specific resource in
 *                your Amazon Web Services environment, or one or more resources that match criteria that you
 *                specify, for example, resources that have specific tags.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Actions</b>: The actions to carry out on the
 *                target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Stop conditions</b>: If a stop condition is
 *                triggered while an experiment is running, the experiment is automatically
 *                stopped. You can define a stop condition as a CloudWatch alarm.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/experiment-templates.html">experiment templates</a>
 *          in the <i>Fault Injection Service User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, CreateExperimentTemplateCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, CreateExperimentTemplateCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * // import type { FisClientConfig } from "@aws-sdk/client-fis";
 * const config = {}; // type is FisClientConfig
 * const client = new FisClient(config);
 * const input = { // CreateExperimentTemplateRequest
 *   clientToken: "STRING_VALUE", // required
 *   description: "STRING_VALUE", // required
 *   stopConditions: [ // CreateExperimentTemplateStopConditionInputList // required
 *     { // CreateExperimentTemplateStopConditionInput
 *       source: "STRING_VALUE", // required
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   targets: { // CreateExperimentTemplateTargetInputMap
 *     "<keys>": { // CreateExperimentTemplateTargetInput
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
 *   actions: { // CreateExperimentTemplateActionInputMap // required
 *     "<keys>": { // CreateExperimentTemplateActionInput
 *       actionId: "STRING_VALUE", // required
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
 *   roleArn: "STRING_VALUE", // required
 *   tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   logConfiguration: { // CreateExperimentTemplateLogConfigurationInput
 *     cloudWatchLogsConfiguration: { // ExperimentTemplateCloudWatchLogsLogConfigurationInput
 *       logGroupArn: "STRING_VALUE", // required
 *     },
 *     s3Configuration: { // ExperimentTemplateS3LogConfigurationInput
 *       bucketName: "STRING_VALUE", // required
 *       prefix: "STRING_VALUE",
 *     },
 *     logSchemaVersion: Number("int"), // required
 *   },
 *   experimentOptions: { // CreateExperimentTemplateExperimentOptionsInput
 *     accountTargeting: "single-account" || "multi-account",
 *     emptyTargetResolutionMode: "fail" || "skip",
 *   },
 *   experimentReportConfiguration: { // CreateExperimentTemplateReportConfigurationInput
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
 * const command = new CreateExperimentTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateExperimentTemplateResponse
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
 * @param CreateExperimentTemplateCommandInput - {@link CreateExperimentTemplateCommandInput}
 * @returns {@link CreateExperimentTemplateCommandOutput}
 * @see {@link CreateExperimentTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateExperimentTemplateCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class CreateExperimentTemplateCommand extends $Command
  .classBuilder<
    CreateExperimentTemplateCommandInput,
    CreateExperimentTemplateCommandOutput,
    FisClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FisClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FaultInjectionSimulator", "CreateExperimentTemplate", {})
  .n("FisClient", "CreateExperimentTemplateCommand")
  .sc(CreateExperimentTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateExperimentTemplateRequest;
      output: CreateExperimentTemplateResponse;
    };
    sdk: {
      input: CreateExperimentTemplateCommandInput;
      output: CreateExperimentTemplateCommandOutput;
    };
  };
}
