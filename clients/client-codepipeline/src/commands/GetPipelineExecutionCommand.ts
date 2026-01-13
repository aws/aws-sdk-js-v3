// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetPipelineExecutionInput, GetPipelineExecutionOutput } from "../models/models_0";
import { GetPipelineExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPipelineExecutionCommand}.
 */
export interface GetPipelineExecutionCommandInput extends GetPipelineExecutionInput {}
/**
 * @public
 *
 * The output of {@link GetPipelineExecutionCommand}.
 */
export interface GetPipelineExecutionCommandOutput extends GetPipelineExecutionOutput, __MetadataBearer {}

/**
 * <p>Returns information about an execution of a pipeline, including details about
 *             artifacts, the pipeline execution ID, and the name, version, and status of the
 *             pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, GetPipelineExecutionCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, GetPipelineExecutionCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
 * const client = new CodePipelineClient(config);
 * const input = { // GetPipelineExecutionInput
 *   pipelineName: "STRING_VALUE", // required
 *   pipelineExecutionId: "STRING_VALUE", // required
 * };
 * const command = new GetPipelineExecutionCommand(input);
 * const response = await client.send(command);
 * // { // GetPipelineExecutionOutput
 * //   pipelineExecution: { // PipelineExecution
 * //     pipelineName: "STRING_VALUE",
 * //     pipelineVersion: Number("int"),
 * //     pipelineExecutionId: "STRING_VALUE",
 * //     status: "Cancelled" || "InProgress" || "Stopped" || "Stopping" || "Succeeded" || "Superseded" || "Failed",
 * //     statusSummary: "STRING_VALUE",
 * //     artifactRevisions: [ // ArtifactRevisionList
 * //       { // ArtifactRevision
 * //         name: "STRING_VALUE",
 * //         revisionId: "STRING_VALUE",
 * //         revisionChangeIdentifier: "STRING_VALUE",
 * //         revisionSummary: "STRING_VALUE",
 * //         created: new Date("TIMESTAMP"),
 * //         revisionUrl: "STRING_VALUE",
 * //       },
 * //     ],
 * //     variables: [ // ResolvedPipelineVariableList
 * //       { // ResolvedPipelineVariable
 * //         name: "STRING_VALUE",
 * //         resolvedValue: "STRING_VALUE",
 * //       },
 * //     ],
 * //     trigger: { // ExecutionTrigger
 * //       triggerType: "CreatePipeline" || "StartPipelineExecution" || "PollForSourceChanges" || "Webhook" || "CloudWatchEvent" || "PutActionRevision" || "WebhookV2" || "ManualRollback" || "AutomatedRollback",
 * //       triggerDetail: "STRING_VALUE",
 * //     },
 * //     executionMode: "QUEUED" || "SUPERSEDED" || "PARALLEL",
 * //     executionType: "STANDARD" || "ROLLBACK",
 * //     rollbackMetadata: { // PipelineRollbackMetadata
 * //       rollbackTargetPipelineExecutionId: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPipelineExecutionCommandInput - {@link GetPipelineExecutionCommandInput}
 * @returns {@link GetPipelineExecutionCommandOutput}
 * @see {@link GetPipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link GetPipelineExecutionCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
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
 *
 * @public
 */
export class GetPipelineExecutionCommand extends $Command
  .classBuilder<
    GetPipelineExecutionCommandInput,
    GetPipelineExecutionCommandOutput,
    CodePipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodePipelineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodePipeline_20150709", "GetPipelineExecution", {})
  .n("CodePipelineClient", "GetPipelineExecutionCommand")
  .sc(GetPipelineExecution$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPipelineExecutionInput;
      output: GetPipelineExecutionOutput;
    };
    sdk: {
      input: GetPipelineExecutionCommandInput;
      output: GetPipelineExecutionCommandOutput;
    };
  };
}
