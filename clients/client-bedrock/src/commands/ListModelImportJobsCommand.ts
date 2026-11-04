// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListModelImportJobsRequest, ListModelImportJobsResponse } from "../models/models_1";
import { ListModelImportJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListModelImportJobsCommand}.
 */
export interface ListModelImportJobsCommandInput extends ListModelImportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListModelImportJobsCommand}.
 */
export interface ListModelImportJobsCommandOutput extends ListModelImportJobsResponse, __MetadataBearer {}

/**
 * Returns a list of import jobs you've submitted. You can filter the results to return based on one or more criteria. For more information, see [Import a customized model](https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-import-model.html) in the [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, ListModelImportJobsCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, ListModelImportJobsCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // ListModelImportJobsRequest
 *   creationTimeAfter: new Date("TIMESTAMP"),
 *   creationTimeBefore: new Date("TIMESTAMP"),
 *   statusEquals: "InProgress" || "Completed" || "Failed",
 *   nameContains: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   sortBy: "CreationTime",
 *   sortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListModelImportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListModelImportJobsResponse
 * //   nextToken: "STRING_VALUE",
 * //   modelImportJobSummaries: [ // ModelImportJobSummaries
 * //     { // ModelImportJobSummary
 * //       jobArn: "STRING_VALUE", // required
 * //       jobName: "STRING_VALUE", // required
 * //       status: "InProgress" || "Completed" || "Failed", // required
 * //       lastModifiedTime: new Date("TIMESTAMP"),
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       endTime: new Date("TIMESTAMP"),
 * //       importedModelArn: "STRING_VALUE",
 * //       importedModelName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListModelImportJobsCommandInput - {@link ListModelImportJobsCommandInput}
 * @returns {@link ListModelImportJobsCommandOutput}
 * @see {@link ListModelImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListModelImportJobsCommandOutput} for command's `response` shape.
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
export class ListModelImportJobsCommand extends command<ListModelImportJobsCommandInput, ListModelImportJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListModelImportJobs",
  ListModelImportJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListModelImportJobsRequest;
      output: ListModelImportJobsResponse;
    };
    sdk: {
      input: ListModelImportJobsCommandInput;
      output: ListModelImportJobsCommandOutput;
    };
  };
}
