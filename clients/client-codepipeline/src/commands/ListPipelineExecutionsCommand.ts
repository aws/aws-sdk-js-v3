// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListPipelineExecutionsInput, ListPipelineExecutionsOutput } from "../models/models_0";
import { de_ListPipelineExecutionsCommand, se_ListPipelineExecutionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPipelineExecutionsCommand}.
 */
export interface ListPipelineExecutionsCommandInput extends ListPipelineExecutionsInput {}
/**
 * @public
 *
 * The output of {@link ListPipelineExecutionsCommand}.
 */
export interface ListPipelineExecutionsCommandOutput extends ListPipelineExecutionsOutput, __MetadataBearer {}

/**
 * <p>Gets a summary of the most recent executions for a pipeline.</p>
 *          <note>
 *             <p>When applying the filter for pipeline executions that have succeeded in the stage,
 *                 the operation returns all executions in the current pipeline version beginning on
 *                 February 1, 2024.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, ListPipelineExecutionsCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, ListPipelineExecutionsCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
 * const client = new CodePipelineClient(config);
 * const input = { // ListPipelineExecutionsInput
 *   pipelineName: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   filter: { // PipelineExecutionFilter
 *     succeededInStage: { // SucceededInStageFilter
 *       stageName: "STRING_VALUE",
 *     },
 *   },
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListPipelineExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListPipelineExecutionsOutput
 * //   pipelineExecutionSummaries: [ // PipelineExecutionSummaryList
 * //     { // PipelineExecutionSummary
 * //       pipelineExecutionId: "STRING_VALUE",
 * //       status: "Cancelled" || "InProgress" || "Stopped" || "Stopping" || "Succeeded" || "Superseded" || "Failed",
 * //       statusSummary: "STRING_VALUE",
 * //       startTime: new Date("TIMESTAMP"),
 * //       lastUpdateTime: new Date("TIMESTAMP"),
 * //       sourceRevisions: [ // SourceRevisionList
 * //         { // SourceRevision
 * //           actionName: "STRING_VALUE", // required
 * //           revisionId: "STRING_VALUE",
 * //           revisionSummary: "STRING_VALUE",
 * //           revisionUrl: "STRING_VALUE",
 * //         },
 * //       ],
 * //       trigger: { // ExecutionTrigger
 * //         triggerType: "CreatePipeline" || "StartPipelineExecution" || "PollForSourceChanges" || "Webhook" || "CloudWatchEvent" || "PutActionRevision" || "WebhookV2" || "ManualRollback" || "AutomatedRollback",
 * //         triggerDetail: "STRING_VALUE",
 * //       },
 * //       stopTrigger: { // StopExecutionTrigger
 * //         reason: "STRING_VALUE",
 * //       },
 * //       executionMode: "QUEUED" || "SUPERSEDED" || "PARALLEL",
 * //       executionType: "STANDARD" || "ROLLBACK",
 * //       rollbackMetadata: { // PipelineRollbackMetadata
 * //         rollbackTargetPipelineExecutionId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPipelineExecutionsCommandInput - {@link ListPipelineExecutionsCommandInput}
 * @returns {@link ListPipelineExecutionsCommandOutput}
 * @see {@link ListPipelineExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListPipelineExecutionsCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The next token was specified in an invalid format. Make sure that the next token
 *             you provide is the token returned by a previous call.</p>
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
 *
 * @public
 */
export class ListPipelineExecutionsCommand extends $Command
  .classBuilder<
    ListPipelineExecutionsCommandInput,
    ListPipelineExecutionsCommandOutput,
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
  .s("CodePipeline_20150709", "ListPipelineExecutions", {})
  .n("CodePipelineClient", "ListPipelineExecutionsCommand")
  .f(void 0, void 0)
  .ser(se_ListPipelineExecutionsCommand)
  .de(de_ListPipelineExecutionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPipelineExecutionsInput;
      output: ListPipelineExecutionsOutput;
    };
    sdk: {
      input: ListPipelineExecutionsCommandInput;
      output: ListPipelineExecutionsCommandOutput;
    };
  };
}
