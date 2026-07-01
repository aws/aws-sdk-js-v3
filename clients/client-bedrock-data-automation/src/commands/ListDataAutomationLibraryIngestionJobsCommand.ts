// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListDataAutomationLibraryIngestionJobsRequest,
  ListDataAutomationLibraryIngestionJobsResponse,
} from "../models/models_0";
import { ListDataAutomationLibraryIngestionJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDataAutomationLibraryIngestionJobsCommand}.
 */
export interface ListDataAutomationLibraryIngestionJobsCommandInput extends ListDataAutomationLibraryIngestionJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataAutomationLibraryIngestionJobsCommand}.
 */
export interface ListDataAutomationLibraryIngestionJobsCommandOutput extends ListDataAutomationLibraryIngestionJobsResponse, __MetadataBearer {}

/**
 * Lists all data automation library ingestion jobs
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationClient, ListDataAutomationLibraryIngestionJobsCommand } from "@aws-sdk/client-bedrock-data-automation"; // ES Modules import
 * // const { BedrockDataAutomationClient, ListDataAutomationLibraryIngestionJobsCommand } = require("@aws-sdk/client-bedrock-data-automation"); // CommonJS import
 * // import type { BedrockDataAutomationClientConfig } from "@aws-sdk/client-bedrock-data-automation";
 * const config = {}; // type is BedrockDataAutomationClientConfig
 * const client = new BedrockDataAutomationClient(config);
 * const input = { // ListDataAutomationLibraryIngestionJobsRequest
 *   libraryArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDataAutomationLibraryIngestionJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataAutomationLibraryIngestionJobsResponse
 * //   jobs: [ // DataAutomationLibraryIngestionJobSummaries
 * //     { // DataAutomationLibraryIngestionJobSummary
 * //       jobArn: "STRING_VALUE", // required
 * //       jobStatus: "IN_PROGRESS" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "FAILED", // required
 * //       entityType: "VOCABULARY", // required
 * //       operationType: "UPSERT" || "DELETE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       completionTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataAutomationLibraryIngestionJobsCommandInput - {@link ListDataAutomationLibraryIngestionJobsCommandInput}
 * @returns {@link ListDataAutomationLibraryIngestionJobsCommandOutput}
 * @see {@link ListDataAutomationLibraryIngestionJobsCommandInput} for command's `input` shape.
 * @see {@link ListDataAutomationLibraryIngestionJobsCommandOutput} for command's `response` shape.
 * @see {@link BedrockDataAutomationClientResolvedConfig | config} for BedrockDataAutomationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ThrottlingException} (client fault)
 *  This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *  This exception is thrown when the request's input validation fails
 *
 * @throws {@link BedrockDataAutomationServiceException}
 * <p>Base exception class for all service exceptions from BedrockDataAutomation service.</p>
 *
 *
 * @public
 */
export class ListDataAutomationLibraryIngestionJobsCommand extends command<ListDataAutomationLibraryIngestionJobsCommandInput, ListDataAutomationLibraryIngestionJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListDataAutomationLibraryIngestionJobs",
  ListDataAutomationLibraryIngestionJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataAutomationLibraryIngestionJobsRequest;
      output: ListDataAutomationLibraryIngestionJobsResponse;
    };
    sdk: {
      input: ListDataAutomationLibraryIngestionJobsCommandInput;
      output: ListDataAutomationLibraryIngestionJobsCommandOutput;
    };
  };
}
