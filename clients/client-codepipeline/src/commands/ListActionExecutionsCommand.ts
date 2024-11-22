// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListActionExecutionsInput, ListActionExecutionsOutput } from "../models/models_0";
import { de_ListActionExecutionsCommand, se_ListActionExecutionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListActionExecutionsCommand}.
 */
export interface ListActionExecutionsCommandInput extends ListActionExecutionsInput {}
/**
 * @public
 *
 * The output of {@link ListActionExecutionsCommand}.
 */
export interface ListActionExecutionsCommandOutput extends ListActionExecutionsOutput, __MetadataBearer {}

/**
 * <p>Lists the action executions that have occurred in a pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, ListActionExecutionsCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, ListActionExecutionsCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // ListActionExecutionsInput
 *   pipelineName: "STRING_VALUE", // required
 *   filter: { // ActionExecutionFilter
 *     pipelineExecutionId: "STRING_VALUE",
 *     latestInPipelineExecution: { // LatestInPipelineExecutionFilter
 *       pipelineExecutionId: "STRING_VALUE", // required
 *       startTimeRange: "Latest" || "All", // required
 *     },
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListActionExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListActionExecutionsOutput
 * //   actionExecutionDetails: [ // ActionExecutionDetailList
 * //     { // ActionExecutionDetail
 * //       pipelineExecutionId: "STRING_VALUE",
 * //       actionExecutionId: "STRING_VALUE",
 * //       pipelineVersion: Number("int"),
 * //       stageName: "STRING_VALUE",
 * //       actionName: "STRING_VALUE",
 * //       startTime: new Date("TIMESTAMP"),
 * //       lastUpdateTime: new Date("TIMESTAMP"),
 * //       updatedBy: "STRING_VALUE",
 * //       status: "InProgress" || "Abandoned" || "Succeeded" || "Failed",
 * //       input: { // ActionExecutionInput
 * //         actionTypeId: { // ActionTypeId
 * //           category: "Source" || "Build" || "Deploy" || "Test" || "Invoke" || "Approval" || "Compute", // required
 * //           owner: "AWS" || "ThirdParty" || "Custom", // required
 * //           provider: "STRING_VALUE", // required
 * //           version: "STRING_VALUE", // required
 * //         },
 * //         configuration: { // ActionConfigurationMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         resolvedConfiguration: { // ResolvedActionConfigurationMap
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
 * //         namespace: "STRING_VALUE",
 * //       },
 * //       output: { // ActionExecutionOutput
 * //         outputArtifacts: [
 * //           {
 * //             name: "STRING_VALUE",
 * //             s3location: {
 * //               bucket: "STRING_VALUE",
 * //               key: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         executionResult: { // ActionExecutionResult
 * //           externalExecutionId: "STRING_VALUE",
 * //           externalExecutionSummary: "STRING_VALUE",
 * //           externalExecutionUrl: "STRING_VALUE",
 * //           errorDetails: { // ErrorDetails
 * //             code: "STRING_VALUE",
 * //             message: "STRING_VALUE",
 * //           },
 * //           logStreamARN: "STRING_VALUE",
 * //         },
 * //         outputVariables: { // OutputVariablesMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListActionExecutionsCommandInput - {@link ListActionExecutionsCommandInput}
 * @returns {@link ListActionExecutionsCommandOutput}
 * @see {@link ListActionExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListActionExecutionsCommandOutput} for command's `response` shape.
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
export class ListActionExecutionsCommand extends $Command
  .classBuilder<
    ListActionExecutionsCommandInput,
    ListActionExecutionsCommandOutput,
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
  .s("CodePipeline_20150709", "ListActionExecutions", {})
  .n("CodePipelineClient", "ListActionExecutionsCommand")
  .f(void 0, void 0)
  .ser(se_ListActionExecutionsCommand)
  .de(de_ListActionExecutionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListActionExecutionsInput;
      output: ListActionExecutionsOutput;
    };
    sdk: {
      input: ListActionExecutionsCommandInput;
      output: ListActionExecutionsCommandOutput;
    };
  };
}
