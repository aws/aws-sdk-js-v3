// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetPipelineInput, GetPipelineOutput } from "../models/models_0";
import { de_GetPipelineCommand, se_GetPipelineCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPipelineCommand}.
 */
export interface GetPipelineCommandInput extends GetPipelineInput {}
/**
 * @public
 *
 * The output of {@link GetPipelineCommand}.
 */
export interface GetPipelineCommandOutput extends GetPipelineOutput, __MetadataBearer {}

/**
 * <p>Returns the metadata, structure, stages, and actions of a pipeline. Can be used to
 *             return the entire structure of a pipeline in JSON format, which can then be modified and
 *             used to update the pipeline structure with <a>UpdatePipeline</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, GetPipelineCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, GetPipelineCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // GetPipelineInput
 *   name: "STRING_VALUE", // required
 *   version: Number("int"),
 * };
 * const command = new GetPipelineCommand(input);
 * const response = await client.send(command);
 * // { // GetPipelineOutput
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
 * //             environmentVariables: [ // EnvironmentVariableList
 * //               { // EnvironmentVariable
 * //                 name: "STRING_VALUE", // required
 * //                 value: "STRING_VALUE", // required
 * //               },
 * //             ],
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
 * //   metadata: { // PipelineMetadata
 * //     pipelineArn: "STRING_VALUE",
 * //     created: new Date("TIMESTAMP"),
 * //     updated: new Date("TIMESTAMP"),
 * //     pollingDisabledAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPipelineCommandInput - {@link GetPipelineCommandInput}
 * @returns {@link GetPipelineCommandOutput}
 * @see {@link GetPipelineCommandInput} for command's `input` shape.
 * @see {@link GetPipelineCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *  <p>The pipeline was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link PipelineVersionNotFoundException} (client fault)
 *  <p>The pipeline version was specified in an invalid format or cannot be
 *             found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 * @public
 */
export class GetPipelineCommand extends $Command
  .classBuilder<
    GetPipelineCommandInput,
    GetPipelineCommandOutput,
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
  .s("CodePipeline_20150709", "GetPipeline", {})
  .n("CodePipelineClient", "GetPipelineCommand")
  .f(void 0, void 0)
  .ser(se_GetPipelineCommand)
  .de(de_GetPipelineCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPipelineInput;
      output: GetPipelineOutput;
    };
    sdk: {
      input: GetPipelineCommandInput;
      output: GetPipelineCommandOutput;
    };
  };
}
