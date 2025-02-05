// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRuleExecutionsInput, ListRuleExecutionsOutput } from "../models/models_0";
import { de_ListRuleExecutionsCommand, se_ListRuleExecutionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRuleExecutionsCommand}.
 */
export interface ListRuleExecutionsCommandInput extends ListRuleExecutionsInput {}
/**
 * @public
 *
 * The output of {@link ListRuleExecutionsCommand}.
 */
export interface ListRuleExecutionsCommandOutput extends ListRuleExecutionsOutput, __MetadataBearer {}

/**
 * <p>Lists the rule executions that have occurred in a pipeline configured for conditions
 *             with rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, ListRuleExecutionsCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, ListRuleExecutionsCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CodePipelineClient(config);
 * const input = { // ListRuleExecutionsInput
 *   pipelineName: "STRING_VALUE", // required
 *   filter: { // RuleExecutionFilter
 *     pipelineExecutionId: "STRING_VALUE",
 *     latestInPipelineExecution: { // LatestInPipelineExecutionFilter
 *       pipelineExecutionId: "STRING_VALUE", // required
 *       startTimeRange: "Latest" || "All", // required
 *     },
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRuleExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListRuleExecutionsOutput
 * //   ruleExecutionDetails: [ // RuleExecutionDetailList
 * //     { // RuleExecutionDetail
 * //       pipelineExecutionId: "STRING_VALUE",
 * //       ruleExecutionId: "STRING_VALUE",
 * //       pipelineVersion: Number("int"),
 * //       stageName: "STRING_VALUE",
 * //       ruleName: "STRING_VALUE",
 * //       startTime: new Date("TIMESTAMP"),
 * //       lastUpdateTime: new Date("TIMESTAMP"),
 * //       updatedBy: "STRING_VALUE",
 * //       status: "InProgress" || "Abandoned" || "Succeeded" || "Failed",
 * //       input: { // RuleExecutionInput
 * //         ruleTypeId: { // RuleTypeId
 * //           category: "Rule", // required
 * //           owner: "AWS",
 * //           provider: "STRING_VALUE", // required
 * //           version: "STRING_VALUE",
 * //         },
 * //         configuration: { // RuleConfigurationMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         resolvedConfiguration: { // ResolvedRuleConfigurationMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         roleArn: "STRING_VALUE",
 * //         region: "STRING_VALUE",
 * //         inputArtifacts: [ // ArtifactDetailList
 * //           { // ArtifactDetail
 * //             name: "STRING_VALUE",
 * //             s3location: { // S3Location
 * //               bucket: "STRING_VALUE",
 * //               key: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       output: { // RuleExecutionOutput
 * //         executionResult: { // RuleExecutionResult
 * //           externalExecutionId: "STRING_VALUE",
 * //           externalExecutionSummary: "STRING_VALUE",
 * //           externalExecutionUrl: "STRING_VALUE",
 * //           errorDetails: { // ErrorDetails
 * //             code: "STRING_VALUE",
 * //             message: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRuleExecutionsCommandInput - {@link ListRuleExecutionsCommandInput}
 * @returns {@link ListRuleExecutionsCommandOutput}
 * @see {@link ListRuleExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListRuleExecutionsCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The next token was specified in an invalid format. Make sure that the next token
 *             you provide is the token returned by a previous call.</p>
 *
 * @throws {@link PipelineExecutionNotFoundException} (client fault)
 *  <p>The pipeline execution was specified in an invalid format or cannot be found, or an
 *             execution ID does not belong to the specified pipeline. </p>
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
export class ListRuleExecutionsCommand extends $Command
  .classBuilder<
    ListRuleExecutionsCommandInput,
    ListRuleExecutionsCommandOutput,
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
  .s("CodePipeline_20150709", "ListRuleExecutions", {})
  .n("CodePipelineClient", "ListRuleExecutionsCommand")
  .f(void 0, void 0)
  .ser(se_ListRuleExecutionsCommand)
  .de(de_ListRuleExecutionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRuleExecutionsInput;
      output: ListRuleExecutionsOutput;
    };
    sdk: {
      input: ListRuleExecutionsCommandInput;
      output: ListRuleExecutionsCommandOutput;
    };
  };
}
