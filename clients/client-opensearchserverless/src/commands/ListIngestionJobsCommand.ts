// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListIngestionJobsRequest, ListIngestionJobsResponse } from "../models/models_0";
import { ListIngestionJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListIngestionJobsCommand}.
 */
export interface ListIngestionJobsCommandInput extends ListIngestionJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListIngestionJobsCommand}.
 */
export interface ListIngestionJobsCommandOutput extends ListIngestionJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of ingestion jobs in a collection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, ListIngestionJobsCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, ListIngestionJobsCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * // import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
 * const config = {}; // type is OpenSearchServerlessClientConfig
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // ListIngestionJobsRequest
 *   collectionId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListIngestionJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListIngestionJobsResponse
 * //   ingestionJobSummaries: [ // IngestionJobSummaries
 * //     { // IngestionJobSummary
 * //       ingestionJobId: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       ingestionJobName: "STRING_VALUE",
 * //       indexName: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIngestionJobsCommandInput - {@link ListIngestionJobsCommandInput}
 * @returns {@link ListIngestionJobsCommandOutput}
 * @see {@link ListIngestionJobsCommandInput} for command's `input` shape.
 * @see {@link ListIngestionJobsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Thrown when an error internal to the service occurs while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Thrown when accessing or deleting a resource that does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Thrown when the HTTP request contains invalid input or is missing required input.</p>
 *
 * @throws {@link OpenSearchServerlessServiceException}
 * <p>Base exception class for all service exceptions from OpenSearchServerless service.</p>
 *
 *
 * @public
 */
export class ListIngestionJobsCommand extends command<ListIngestionJobsCommandInput, ListIngestionJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListIngestionJobs",
  ListIngestionJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIngestionJobsRequest;
      output: ListIngestionJobsResponse;
    };
    sdk: {
      input: ListIngestionJobsCommandInput;
      output: ListIngestionJobsCommandOutput;
    };
  };
}
