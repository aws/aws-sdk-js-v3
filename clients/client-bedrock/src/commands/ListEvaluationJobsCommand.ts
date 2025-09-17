// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListEvaluationJobsRequest, ListEvaluationJobsResponse } from "../models/models_0";
import { de_ListEvaluationJobsCommand, se_ListEvaluationJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEvaluationJobsCommand}.
 */
export interface ListEvaluationJobsCommandInput extends ListEvaluationJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListEvaluationJobsCommand}.
 */
export interface ListEvaluationJobsCommandOutput extends ListEvaluationJobsResponse, __MetadataBearer {}

/**
 * <p>Lists all existing evaluation jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, ListEvaluationJobsCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, ListEvaluationJobsCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // ListEvaluationJobsRequest
 *   creationTimeAfter: new Date("TIMESTAMP"),
 *   creationTimeBefore: new Date("TIMESTAMP"),
 *   statusEquals: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped" || "Deleting",
 *   applicationTypeEquals: "ModelEvaluation" || "RagEvaluation",
 *   nameContains: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   sortBy: "CreationTime",
 *   sortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListEvaluationJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListEvaluationJobsResponse
 * //   nextToken: "STRING_VALUE",
 * //   jobSummaries: [ // EvaluationSummaries
 * //     { // EvaluationSummary
 * //       jobArn: "STRING_VALUE", // required
 * //       jobName: "STRING_VALUE", // required
 * //       status: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped" || "Deleting", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       jobType: "Human" || "Automated", // required
 * //       evaluationTaskTypes: [ // EvaluationTaskTypes // required
 * //         "Summarization" || "Classification" || "QuestionAndAnswer" || "Generation" || "Custom",
 * //       ],
 * //       modelIdentifiers: [ // EvaluationBedrockModelIdentifiers
 * //         "STRING_VALUE",
 * //       ],
 * //       ragIdentifiers: [ // EvaluationBedrockKnowledgeBaseIdentifiers
 * //         "STRING_VALUE",
 * //       ],
 * //       evaluatorModelIdentifiers: [ // EvaluatorModelIdentifiers
 * //         "STRING_VALUE",
 * //       ],
 * //       customMetricsEvaluatorModelIdentifiers: [
 * //         "STRING_VALUE",
 * //       ],
 * //       inferenceConfigSummary: { // EvaluationInferenceConfigSummary
 * //         modelConfigSummary: { // EvaluationModelConfigSummary
 * //           bedrockModelIdentifiers: [
 * //             "STRING_VALUE",
 * //           ],
 * //           precomputedInferenceSourceIdentifiers: [ // EvaluationPrecomputedInferenceSourceIdentifiers
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         ragConfigSummary: { // EvaluationRagConfigSummary
 * //           bedrockKnowledgeBaseIdentifiers: [
 * //             "STRING_VALUE",
 * //           ],
 * //           precomputedRagSourceIdentifiers: [ // EvaluationPrecomputedRagSourceIdentifiers
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       applicationType: "ModelEvaluation" || "RagEvaluation",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListEvaluationJobsCommandInput - {@link ListEvaluationJobsCommandInput}
 * @returns {@link ListEvaluationJobsCommandOutput}
 * @see {@link ListEvaluationJobsCommandInput} for command's `input` shape.
 * @see {@link ListEvaluationJobsCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 *
 * @public
 */
export class ListEvaluationJobsCommand extends $Command
  .classBuilder<
    ListEvaluationJobsCommandInput,
    ListEvaluationJobsCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockControlPlaneService", "ListEvaluationJobs", {})
  .n("BedrockClient", "ListEvaluationJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListEvaluationJobsCommand)
  .de(de_ListEvaluationJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEvaluationJobsRequest;
      output: ListEvaluationJobsResponse;
    };
    sdk: {
      input: ListEvaluationJobsCommandInput;
      output: ListEvaluationJobsCommandOutput;
    };
  };
}
