// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdatePipelineInput, UpdatePipelineOutput } from "../models/models_0";
import { de_UpdatePipelineCommand, se_UpdatePipelineCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePipelineCommand}.
 */
export interface UpdatePipelineCommandInput extends UpdatePipelineInput {}
/**
 * @public
 *
 * The output of {@link UpdatePipelineCommand}.
 */
export interface UpdatePipelineCommandOutput extends UpdatePipelineOutput, __MetadataBearer {}

/**
 * <p>Updates a specified pipeline with edits or changes to its structure. Use a JSON
 *             file with the pipeline structure and <code>UpdatePipeline</code> to provide the full
 *             structure of the pipeline. Updating the pipeline increases the version number of the
 *             pipeline by 1.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, UpdatePipelineCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, UpdatePipelineCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CodePipelineClient(config);
 * const input = { // UpdatePipelineInput
 *   pipeline: { // PipelineDeclaration
 *     name: "STRING_VALUE", // required
 *     roleArn: "STRING_VALUE", // required
 *     artifactStore: { // ArtifactStore
 *       type: "S3", // required
 *       location: "STRING_VALUE", // required
 *       encryptionKey: { // EncryptionKey
 *         id: "STRING_VALUE", // required
 *         type: "KMS", // required
 *       },
 *     },
 *     artifactStores: { // ArtifactStoreMap
 *       "<keys>": {
 *         type: "S3", // required
 *         location: "STRING_VALUE", // required
 *         encryptionKey: {
 *           id: "STRING_VALUE", // required
 *           type: "KMS", // required
 *         },
 *       },
 *     },
 *     stages: [ // PipelineStageDeclarationList // required
 *       { // StageDeclaration
 *         name: "STRING_VALUE", // required
 *         blockers: [ // StageBlockerDeclarationList
 *           { // BlockerDeclaration
 *             name: "STRING_VALUE", // required
 *             type: "Schedule", // required
 *           },
 *         ],
 *         actions: [ // StageActionDeclarationList // required
 *           { // ActionDeclaration
 *             name: "STRING_VALUE", // required
 *             actionTypeId: { // ActionTypeId
 *               category: "Source" || "Build" || "Deploy" || "Test" || "Invoke" || "Approval" || "Compute", // required
 *               owner: "AWS" || "ThirdParty" || "Custom", // required
 *               provider: "STRING_VALUE", // required
 *               version: "STRING_VALUE", // required
 *             },
 *             runOrder: Number("int"),
 *             configuration: { // ActionConfigurationMap
 *               "<keys>": "STRING_VALUE",
 *             },
 *             commands: [ // CommandList
 *               "STRING_VALUE",
 *             ],
 *             outputArtifacts: [ // OutputArtifactList
 *               { // OutputArtifact
 *                 name: "STRING_VALUE", // required
 *                 files: [ // FilePathList
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             ],
 *             inputArtifacts: [ // InputArtifactList
 *               { // InputArtifact
 *                 name: "STRING_VALUE", // required
 *               },
 *             ],
 *             outputVariables: [ // OutputVariableList
 *               "STRING_VALUE",
 *             ],
 *             roleArn: "STRING_VALUE",
 *             region: "STRING_VALUE",
 *             namespace: "STRING_VALUE",
 *             timeoutInMinutes: Number("int"),
 *           },
 *         ],
 *         onFailure: { // FailureConditions
 *           result: "ROLLBACK" || "FAIL" || "RETRY" || "SKIP",
 *           retryConfiguration: { // RetryConfiguration
 *             retryMode: "FAILED_ACTIONS" || "ALL_ACTIONS",
 *           },
 *           conditions: [ // ConditionList
 *             { // Condition
 *               result: "ROLLBACK" || "FAIL" || "RETRY" || "SKIP",
 *               rules: [ // RuleDeclarationList
 *                 { // RuleDeclaration
 *                   name: "STRING_VALUE", // required
 *                   ruleTypeId: { // RuleTypeId
 *                     category: "Rule", // required
 *                     owner: "AWS",
 *                     provider: "STRING_VALUE", // required
 *                     version: "STRING_VALUE",
 *                   },
 *                   configuration: { // RuleConfigurationMap
 *                     "<keys>": "STRING_VALUE",
 *                   },
 *                   commands: [
 *                     "STRING_VALUE",
 *                   ],
 *                   inputArtifacts: [
 *                     {
 *                       name: "STRING_VALUE", // required
 *                     },
 *                   ],
 *                   roleArn: "STRING_VALUE",
 *                   region: "STRING_VALUE",
 *                   timeoutInMinutes: Number("int"),
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *         onSuccess: { // SuccessConditions
 *           conditions: [ // required
 *             {
 *               result: "ROLLBACK" || "FAIL" || "RETRY" || "SKIP",
 *               rules: [
 *                 {
 *                   name: "STRING_VALUE", // required
 *                   ruleTypeId: {
 *                     category: "Rule", // required
 *                     owner: "AWS",
 *                     provider: "STRING_VALUE", // required
 *                     version: "STRING_VALUE",
 *                   },
 *                   configuration: {
 *                     "<keys>": "STRING_VALUE",
 *                   },
 *                   commands: [
 *                     "STRING_VALUE",
 *                   ],
 *                   inputArtifacts: [
 *                     {
 *                       name: "STRING_VALUE", // required
 *                     },
 *                   ],
 *                   roleArn: "STRING_VALUE",
 *                   region: "STRING_VALUE",
 *                   timeoutInMinutes: Number("int"),
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *         beforeEntry: { // BeforeEntryConditions
 *           conditions: [ // required
 *             {
 *               result: "ROLLBACK" || "FAIL" || "RETRY" || "SKIP",
 *               rules: [
 *                 {
 *                   name: "STRING_VALUE", // required
 *                   ruleTypeId: {
 *                     category: "Rule", // required
 *                     owner: "AWS",
 *                     provider: "STRING_VALUE", // required
 *                     version: "STRING_VALUE",
 *                   },
 *                   configuration: {
 *                     "<keys>": "STRING_VALUE",
 *                   },
 *                   commands: [
 *                     "STRING_VALUE",
 *                   ],
 *                   inputArtifacts: [
 *                     {
 *                       name: "STRING_VALUE", // required
 *                     },
 *                   ],
 *                   roleArn: "STRING_VALUE",
 *                   region: "STRING_VALUE",
 *                   timeoutInMinutes: Number("int"),
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *       },
 *     ],
 *     version: Number("int"),
 *     executionMode: "QUEUED" || "SUPERSEDED" || "PARALLEL",
 *     pipelineType: "V1" || "V2",
 *     variables: [ // PipelineVariableDeclarationList
 *       { // PipelineVariableDeclaration
 *         name: "STRING_VALUE", // required
 *         defaultValue: "STRING_VALUE",
 *         description: "STRING_VALUE",
 *       },
 *     ],
 *     triggers: [ // PipelineTriggerDeclarationList
 *       { // PipelineTriggerDeclaration
 *         providerType: "CodeStarSourceConnection", // required
 *         gitConfiguration: { // GitConfiguration
 *           sourceActionName: "STRING_VALUE", // required
 *           push: [ // GitPushFilterList
 *             { // GitPushFilter
 *               tags: { // GitTagFilterCriteria
 *                 includes: [ // GitTagPatternList
 *                   "STRING_VALUE",
 *                 ],
 *                 excludes: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               branches: { // GitBranchFilterCriteria
 *                 includes: [ // GitBranchPatternList
 *                   "STRING_VALUE",
 *                 ],
 *                 excludes: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               filePaths: { // GitFilePathFilterCriteria
 *                 includes: [ // GitFilePathPatternList
 *                   "STRING_VALUE",
 *                 ],
 *                 excludes: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             },
 *           ],
 *           pullRequest: [ // GitPullRequestFilterList
 *             { // GitPullRequestFilter
 *               events: [ // GitPullRequestEventTypeList
 *                 "OPEN" || "UPDATED" || "CLOSED",
 *               ],
 *               branches: {
 *                 includes: [
 *                   "STRING_VALUE",
 *                 ],
 *                 excludes: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               filePaths: {
 *                 includes: [
 *                   "STRING_VALUE",
 *                 ],
 *                 excludes: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             },
 *           ],
 *         },
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdatePipelineCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePipelineOutput
 * //   pipeline: { // PipelineDeclaration
 * //     name: "STRING_VALUE", // required
 * //     roleArn: "STRING_VALUE", // required
 * //     artifactStore: { // ArtifactStore
 * //       type: "S3", // required
 * //       location: "STRING_VALUE", // required
 * //       encryptionKey: { // EncryptionKey
 * //         id: "STRING_VALUE", // required
 * //         type: "KMS", // required
 * //       },
 * //     },
 * //     artifactStores: { // ArtifactStoreMap
 * //       "<keys>": {
 * //         type: "S3", // required
 * //         location: "STRING_VALUE", // required
 * //         encryptionKey: {
 * //           id: "STRING_VALUE", // required
 * //           type: "KMS", // required
 * //         },
 * //       },
 * //     },
 * //     stages: [ // PipelineStageDeclarationList // required
 * //       { // StageDeclaration
 * //         name: "STRING_VALUE", // required
 * //         blockers: [ // StageBlockerDeclarationList
 * //           { // BlockerDeclaration
 * //             name: "STRING_VALUE", // required
 * //             type: "Schedule", // required
 * //           },
 * //         ],
 * //         actions: [ // StageActionDeclarationList // required
 * //           { // ActionDeclaration
 * //             name: "STRING_VALUE", // required
 * //             actionTypeId: { // ActionTypeId
 * //               category: "Source" || "Build" || "Deploy" || "Test" || "Invoke" || "Approval" || "Compute", // required
 * //               owner: "AWS" || "ThirdParty" || "Custom", // required
 * //               provider: "STRING_VALUE", // required
 * //               version: "STRING_VALUE", // required
 * //             },
 * //             runOrder: Number("int"),
 * //             configuration: { // ActionConfigurationMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             commands: [ // CommandList
 * //               "STRING_VALUE",
 * //             ],
 * //             outputArtifacts: [ // OutputArtifactList
 * //               { // OutputArtifact
 * //                 name: "STRING_VALUE", // required
 * //                 files: [ // FilePathList
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             ],
 * //             inputArtifacts: [ // InputArtifactList
 * //               { // InputArtifact
 * //                 name: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //             outputVariables: [ // OutputVariableList
 * //               "STRING_VALUE",
 * //             ],
 * //             roleArn: "STRING_VALUE",
 * //             region: "STRING_VALUE",
 * //             namespace: "STRING_VALUE",
 * //             timeoutInMinutes: Number("int"),
 * //           },
 * //         ],
 * //         onFailure: { // FailureConditions
 * //           result: "ROLLBACK" || "FAIL" || "RETRY" || "SKIP",
 * //           retryConfiguration: { // RetryConfiguration
 * //             retryMode: "FAILED_ACTIONS" || "ALL_ACTIONS",
 * //           },
 * //           conditions: [ // ConditionList
 * //             { // Condition
 * //               result: "ROLLBACK" || "FAIL" || "RETRY" || "SKIP",
 * //               rules: [ // RuleDeclarationList
 * //                 { // RuleDeclaration
 * //                   name: "STRING_VALUE", // required
 * //                   ruleTypeId: { // RuleTypeId
 * //                     category: "Rule", // required
 * //                     owner: "AWS",
 * //                     provider: "STRING_VALUE", // required
 * //                     version: "STRING_VALUE",
 * //                   },
 * //                   configuration: { // RuleConfigurationMap
 * //                     "<keys>": "STRING_VALUE",
 * //                   },
 * //                   commands: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   inputArtifacts: [
 * //                     {
 * //                       name: "STRING_VALUE", // required
 * //                     },
 * //                   ],
 * //                   roleArn: "STRING_VALUE",
 * //                   region: "STRING_VALUE",
 * //                   timeoutInMinutes: Number("int"),
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //         onSuccess: { // SuccessConditions
 * //           conditions: [ // required
 * //             {
 * //               result: "ROLLBACK" || "FAIL" || "RETRY" || "SKIP",
 * //               rules: [
 * //                 {
 * //                   name: "STRING_VALUE", // required
 * //                   ruleTypeId: {
 * //                     category: "Rule", // required
 * //                     owner: "AWS",
 * //                     provider: "STRING_VALUE", // required
 * //                     version: "STRING_VALUE",
 * //                   },
 * //                   configuration: {
 * //                     "<keys>": "STRING_VALUE",
 * //                   },
 * //                   commands: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   inputArtifacts: [
 * //                     {
 * //                       name: "STRING_VALUE", // required
 * //                     },
 * //                   ],
 * //                   roleArn: "STRING_VALUE",
 * //                   region: "STRING_VALUE",
 * //                   timeoutInMinutes: Number("int"),
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //         beforeEntry: { // BeforeEntryConditions
 * //           conditions: [ // required
 * //             {
 * //               result: "ROLLBACK" || "FAIL" || "RETRY" || "SKIP",
 * //               rules: [
 * //                 {
 * //                   name: "STRING_VALUE", // required
 * //                   ruleTypeId: {
 * //                     category: "Rule", // required
 * //                     owner: "AWS",
 * //                     provider: "STRING_VALUE", // required
 * //                     version: "STRING_VALUE",
 * //                   },
 * //                   configuration: {
 * //                     "<keys>": "STRING_VALUE",
 * //                   },
 * //                   commands: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   inputArtifacts: [
 * //                     {
 * //                       name: "STRING_VALUE", // required
 * //                     },
 * //                   ],
 * //                   roleArn: "STRING_VALUE",
 * //                   region: "STRING_VALUE",
 * //                   timeoutInMinutes: Number("int"),
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //     version: Number("int"),
 * //     executionMode: "QUEUED" || "SUPERSEDED" || "PARALLEL",
 * //     pipelineType: "V1" || "V2",
 * //     variables: [ // PipelineVariableDeclarationList
 * //       { // PipelineVariableDeclaration
 * //         name: "STRING_VALUE", // required
 * //         defaultValue: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //       },
 * //     ],
 * //     triggers: [ // PipelineTriggerDeclarationList
 * //       { // PipelineTriggerDeclaration
 * //         providerType: "CodeStarSourceConnection", // required
 * //         gitConfiguration: { // GitConfiguration
 * //           sourceActionName: "STRING_VALUE", // required
 * //           push: [ // GitPushFilterList
 * //             { // GitPushFilter
 * //               tags: { // GitTagFilterCriteria
 * //                 includes: [ // GitTagPatternList
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 excludes: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               branches: { // GitBranchFilterCriteria
 * //                 includes: [ // GitBranchPatternList
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 excludes: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               filePaths: { // GitFilePathFilterCriteria
 * //                 includes: [ // GitFilePathPatternList
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 excludes: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             },
 * //           ],
 * //           pullRequest: [ // GitPullRequestFilterList
 * //             { // GitPullRequestFilter
 * //               events: [ // GitPullRequestEventTypeList
 * //                 "OPEN" || "UPDATED" || "CLOSED",
 * //               ],
 * //               branches: {
 * //                 includes: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 excludes: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               filePaths: {
 * //                 includes: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 excludes: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdatePipelineCommandInput - {@link UpdatePipelineCommandInput}
 * @returns {@link UpdatePipelineCommandOutput}
 * @see {@link UpdatePipelineCommandInput} for command's `input` shape.
 * @see {@link UpdatePipelineCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link InvalidActionDeclarationException} (client fault)
 *  <p>The action declaration was specified in an invalid format.</p>
 *
 * @throws {@link InvalidBlockerDeclarationException} (client fault)
 *  <p>Reserved for future use.</p>
 *
 * @throws {@link InvalidStageDeclarationException} (client fault)
 *  <p>The stage declaration was specified in an invalid format.</p>
 *
 * @throws {@link InvalidStructureException} (client fault)
 *  <p>The structure was specified in an invalid format.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The number of pipelines associated with the Amazon Web Services account has exceeded
 *             the limit allowed for the account.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 * @public
 */
export class UpdatePipelineCommand extends $Command
  .classBuilder<
    UpdatePipelineCommandInput,
    UpdatePipelineCommandOutput,
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
  .s("CodePipeline_20150709", "UpdatePipeline", {})
  .n("CodePipelineClient", "UpdatePipelineCommand")
  .f(void 0, void 0)
  .ser(se_UpdatePipelineCommand)
  .de(de_UpdatePipelineCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePipelineInput;
      output: UpdatePipelineOutput;
    };
    sdk: {
      input: UpdatePipelineCommandInput;
      output: UpdatePipelineCommandOutput;
    };
  };
}
