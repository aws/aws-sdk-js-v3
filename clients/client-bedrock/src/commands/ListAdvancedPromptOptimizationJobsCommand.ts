// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListAdvancedPromptOptimizationJobsRequest,
  ListAdvancedPromptOptimizationJobsResponse,
} from "../models/models_0";
import { ListAdvancedPromptOptimizationJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAdvancedPromptOptimizationJobsCommand}.
 */
export interface ListAdvancedPromptOptimizationJobsCommandInput extends ListAdvancedPromptOptimizationJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListAdvancedPromptOptimizationJobsCommand}.
 */
export interface ListAdvancedPromptOptimizationJobsCommandOutput extends ListAdvancedPromptOptimizationJobsResponse, __MetadataBearer {}

/**
 * Lists the advanced prompt optimization jobs in your account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, ListAdvancedPromptOptimizationJobsCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, ListAdvancedPromptOptimizationJobsCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // ListAdvancedPromptOptimizationJobsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   sortBy: "CreationTime",
 *   sortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListAdvancedPromptOptimizationJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListAdvancedPromptOptimizationJobsResponse
 * //   jobSummaries: [ // AdvancedPromptOptimizationJobSummaries
 * //     { // AdvancedPromptOptimizationJobSummary
 * //       jobArn: "STRING_VALUE", // required
 * //       jobName: "STRING_VALUE", // required
 * //       jobStatus: "InProgress" || "Completed" || "Failed" || "PartiallyCompleted" || "Stopping" || "Stopped" || "Deleting", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       lastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAdvancedPromptOptimizationJobsCommandInput - {@link ListAdvancedPromptOptimizationJobsCommandInput}
 * @returns {@link ListAdvancedPromptOptimizationJobsCommandOutput}
 * @see {@link ListAdvancedPromptOptimizationJobsCommandInput} for command's `input` shape.
 * @see {@link ListAdvancedPromptOptimizationJobsCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockServiceException}
 *
 * Base exception class for all service exceptions from Bedrock service.
 *
 * @public
 */
export class ListAdvancedPromptOptimizationJobsCommand extends command<ListAdvancedPromptOptimizationJobsCommandInput, ListAdvancedPromptOptimizationJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListAdvancedPromptOptimizationJobs",
  ListAdvancedPromptOptimizationJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAdvancedPromptOptimizationJobsRequest;
      output: ListAdvancedPromptOptimizationJobsResponse;
    };
    sdk: {
      input: ListAdvancedPromptOptimizationJobsCommandInput;
      output: ListAdvancedPromptOptimizationJobsCommandOutput;
    };
  };
}
