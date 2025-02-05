// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetPipelineStateInput, GetPipelineStateOutput } from "../models/models_0";
import { de_GetPipelineStateCommand, se_GetPipelineStateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPipelineStateCommand}.
 */
export interface GetPipelineStateCommandInput extends GetPipelineStateInput {}
/**
 * @public
 *
 * The output of {@link GetPipelineStateCommand}.
 */
export interface GetPipelineStateCommandOutput extends GetPipelineStateOutput, __MetadataBearer {}

/**
 * <p>Returns information about the state of a pipeline, including the stages and
 *             actions.</p>
 *          <note>
 *             <p>Values returned in the <code>revisionId</code> and <code>revisionUrl</code>
 *                 fields indicate the source revision information, such as the commit ID, for the
 *                 current state.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, GetPipelineStateCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, GetPipelineStateCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CodePipelineClient(config);
 * const input = { // GetPipelineStateInput
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetPipelineStateCommand(input);
 * const response = await client.send(command);
 * // { // GetPipelineStateOutput
 * //   pipelineName: "STRING_VALUE",
 * //   pipelineVersion: Number("int"),
 * //   stageStates: [ // StageStateList
 * //     { // StageState
 * //       stageName: "STRING_VALUE",
 * //       inboundExecution: { // StageExecution
 * //         pipelineExecutionId: "STRING_VALUE", // required
 * //         status: "Cancelled" || "InProgress" || "Failed" || "Stopped" || "Stopping" || "Succeeded" || "Skipped", // required
 * //         type: "STANDARD" || "ROLLBACK",
 * //       },
 * //       inboundExecutions: [ // StageExecutionList
 * //         {
 * //           pipelineExecutionId: "STRING_VALUE", // required
 * //           status: "Cancelled" || "InProgress" || "Failed" || "Stopped" || "Stopping" || "Succeeded" || "Skipped", // required
 * //           type: "STANDARD" || "ROLLBACK",
 * //         },
 * //       ],
 * //       inboundTransitionState: { // TransitionState
 * //         enabled: true || false,
 * //         lastChangedBy: "STRING_VALUE",
 * //         lastChangedAt: new Date("TIMESTAMP"),
 * //         disabledReason: "STRING_VALUE",
 * //       },
 * //       actionStates: [ // ActionStateList
 * //         { // ActionState
 * //           actionName: "STRING_VALUE",
 * //           currentRevision: { // ActionRevision
 * //             revisionId: "STRING_VALUE", // required
 * //             revisionChangeId: "STRING_VALUE", // required
 * //             created: new Date("TIMESTAMP"), // required
 * //           },
 * //           latestExecution: { // ActionExecution
 * //             actionExecutionId: "STRING_VALUE",
 * //             status: "InProgress" || "Abandoned" || "Succeeded" || "Failed",
 * //             summary: "STRING_VALUE",
 * //             lastStatusChange: new Date("TIMESTAMP"),
 * //             token: "STRING_VALUE",
 * //             lastUpdatedBy: "STRING_VALUE",
 * //             externalExecutionId: "STRING_VALUE",
 * //             externalExecutionUrl: "STRING_VALUE",
 * //             percentComplete: Number("int"),
 * //             errorDetails: { // ErrorDetails
 * //               code: "STRING_VALUE",
 * //               message: "STRING_VALUE",
 * //             },
 * //             logStreamARN: "STRING_VALUE",
 * //           },
 * //           entityUrl: "STRING_VALUE",
 * //           revisionUrl: "STRING_VALUE",
 * //         },
 * //       ],
 * //       latestExecution: {
 * //         pipelineExecutionId: "STRING_VALUE", // required
 * //         status: "Cancelled" || "InProgress" || "Failed" || "Stopped" || "Stopping" || "Succeeded" || "Skipped", // required
 * //         type: "STANDARD" || "ROLLBACK",
 * //       },
 * //       beforeEntryConditionState: { // StageConditionState
 * //         latestExecution: { // StageConditionsExecution
 * //           status: "InProgress" || "Failed" || "Errored" || "Succeeded" || "Cancelled" || "Abandoned" || "Overridden",
 * //           summary: "STRING_VALUE",
 * //         },
 * //         conditionStates: [ // ConditionStateList
 * //           { // ConditionState
 * //             latestExecution: { // ConditionExecution
 * //               status: "InProgress" || "Failed" || "Errored" || "Succeeded" || "Cancelled" || "Abandoned" || "Overridden",
 * //               summary: "STRING_VALUE",
 * //               lastStatusChange: new Date("TIMESTAMP"),
 * //             },
 * //             ruleStates: [ // RuleStateList
 * //               { // RuleState
 * //                 ruleName: "STRING_VALUE",
 * //                 currentRevision: { // RuleRevision
 * //                   revisionId: "STRING_VALUE", // required
 * //                   revisionChangeId: "STRING_VALUE", // required
 * //                   created: new Date("TIMESTAMP"), // required
 * //                 },
 * //                 latestExecution: { // RuleExecution
 * //                   ruleExecutionId: "STRING_VALUE",
 * //                   status: "InProgress" || "Abandoned" || "Succeeded" || "Failed",
 * //                   summary: "STRING_VALUE",
 * //                   lastStatusChange: new Date("TIMESTAMP"),
 * //                   token: "STRING_VALUE",
 * //                   lastUpdatedBy: "STRING_VALUE",
 * //                   externalExecutionId: "STRING_VALUE",
 * //                   externalExecutionUrl: "STRING_VALUE",
 * //                   errorDetails: {
 * //                     code: "STRING_VALUE",
 * //                     message: "STRING_VALUE",
 * //                   },
 * //                 },
 * //                 entityUrl: "STRING_VALUE",
 * //                 revisionUrl: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       onSuccessConditionState: {
 * //         latestExecution: {
 * //           status: "InProgress" || "Failed" || "Errored" || "Succeeded" || "Cancelled" || "Abandoned" || "Overridden",
 * //           summary: "STRING_VALUE",
 * //         },
 * //         conditionStates: [
 * //           {
 * //             latestExecution: {
 * //               status: "InProgress" || "Failed" || "Errored" || "Succeeded" || "Cancelled" || "Abandoned" || "Overridden",
 * //               summary: "STRING_VALUE",
 * //               lastStatusChange: new Date("TIMESTAMP"),
 * //             },
 * //             ruleStates: [
 * //               {
 * //                 ruleName: "STRING_VALUE",
 * //                 currentRevision: {
 * //                   revisionId: "STRING_VALUE", // required
 * //                   revisionChangeId: "STRING_VALUE", // required
 * //                   created: new Date("TIMESTAMP"), // required
 * //                 },
 * //                 latestExecution: {
 * //                   ruleExecutionId: "STRING_VALUE",
 * //                   status: "InProgress" || "Abandoned" || "Succeeded" || "Failed",
 * //                   summary: "STRING_VALUE",
 * //                   lastStatusChange: new Date("TIMESTAMP"),
 * //                   token: "STRING_VALUE",
 * //                   lastUpdatedBy: "STRING_VALUE",
 * //                   externalExecutionId: "STRING_VALUE",
 * //                   externalExecutionUrl: "STRING_VALUE",
 * //                   errorDetails: {
 * //                     code: "STRING_VALUE",
 * //                     message: "STRING_VALUE",
 * //                   },
 * //                 },
 * //                 entityUrl: "STRING_VALUE",
 * //                 revisionUrl: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       onFailureConditionState: {
 * //         latestExecution: {
 * //           status: "InProgress" || "Failed" || "Errored" || "Succeeded" || "Cancelled" || "Abandoned" || "Overridden",
 * //           summary: "STRING_VALUE",
 * //         },
 * //         conditionStates: [
 * //           {
 * //             latestExecution: {
 * //               status: "InProgress" || "Failed" || "Errored" || "Succeeded" || "Cancelled" || "Abandoned" || "Overridden",
 * //               summary: "STRING_VALUE",
 * //               lastStatusChange: new Date("TIMESTAMP"),
 * //             },
 * //             ruleStates: [
 * //               {
 * //                 ruleName: "STRING_VALUE",
 * //                 currentRevision: {
 * //                   revisionId: "STRING_VALUE", // required
 * //                   revisionChangeId: "STRING_VALUE", // required
 * //                   created: new Date("TIMESTAMP"), // required
 * //                 },
 * //                 latestExecution: {
 * //                   ruleExecutionId: "STRING_VALUE",
 * //                   status: "InProgress" || "Abandoned" || "Succeeded" || "Failed",
 * //                   summary: "STRING_VALUE",
 * //                   lastStatusChange: new Date("TIMESTAMP"),
 * //                   token: "STRING_VALUE",
 * //                   lastUpdatedBy: "STRING_VALUE",
 * //                   externalExecutionId: "STRING_VALUE",
 * //                   externalExecutionUrl: "STRING_VALUE",
 * //                   errorDetails: {
 * //                     code: "STRING_VALUE",
 * //                     message: "STRING_VALUE",
 * //                   },
 * //                 },
 * //                 entityUrl: "STRING_VALUE",
 * //                 revisionUrl: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       retryStageMetadata: { // RetryStageMetadata
 * //         autoStageRetryAttempt: Number("int"),
 * //         manualStageRetryAttempt: Number("int"),
 * //         latestRetryTrigger: "AutomatedStageRetry" || "ManualStageRetry",
 * //       },
 * //     },
 * //   ],
 * //   created: new Date("TIMESTAMP"),
 * //   updated: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetPipelineStateCommandInput - {@link GetPipelineStateCommandInput}
 * @returns {@link GetPipelineStateCommandOutput}
 * @see {@link GetPipelineStateCommandInput} for command's `input` shape.
 * @see {@link GetPipelineStateCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *  <p>The pipeline was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 * @public
 */
export class GetPipelineStateCommand extends $Command
  .classBuilder<
    GetPipelineStateCommandInput,
    GetPipelineStateCommandOutput,
    CodePipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodePipelineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodePipeline_20150709", "GetPipelineState", {})
  .n("CodePipelineClient", "GetPipelineStateCommand")
  .f(void 0, void 0)
  .ser(se_GetPipelineStateCommand)
  .de(de_GetPipelineStateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPipelineStateInput;
      output: GetPipelineStateOutput;
    };
    sdk: {
      input: GetPipelineStateCommandInput;
      output: GetPipelineStateCommandOutput;
    };
  };
}
