// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListIngestionStreamsRequest, ListIngestionStreamsResponse } from "../models/models_0";
import { ListIngestionStreams$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListIngestionStreamsCommand}.
 */
export interface ListIngestionStreamsCommandInput extends ListIngestionStreamsRequest {}
/**
 * @public
 *
 * The output of {@link ListIngestionStreamsCommand}.
 */
export interface ListIngestionStreamsCommandOutput extends ListIngestionStreamsResponse, __MetadataBearer {}

/**
 * Returns a list of ingestion streams in a collection.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, ListIngestionStreamsCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, ListIngestionStreamsCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * // import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
 * const config = {}; // type is OpenSearchServerlessClientConfig
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // ListIngestionStreamsRequest
 *   collectionId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListIngestionStreamsCommand(input);
 * const response = await client.send(command);
 * // { // ListIngestionStreamsResponse
 * //   ingestionStreamSummaries: [ // IngestionStreamSummaries
 * //     { // IngestionStreamSummary
 * //       ingestionStreamId: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       ingestionStreamName: "STRING_VALUE",
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
 * @param ListIngestionStreamsCommandInput - {@link ListIngestionStreamsCommandInput}
 * @returns {@link ListIngestionStreamsCommandOutput}
 * @see {@link ListIngestionStreamsCommandInput} for command's `input` shape.
 * @see {@link ListIngestionStreamsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Thrown when an error internal to the service occurs while processing a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Thrown when accessing or deleting a resource that does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Thrown when the HTTP request contains invalid input or is missing required input.
 *
 * @throws {@link OpenSearchServerlessServiceException}
 *
 * Base exception class for all service exceptions from OpenSearchServerless service.
 *
 * @public
 */
export class ListIngestionStreamsCommand extends command<ListIngestionStreamsCommandInput, ListIngestionStreamsCommandOutput>(
  _ep0,
  _mw0,
  "ListIngestionStreams",
  ListIngestionStreams$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIngestionStreamsRequest;
      output: ListIngestionStreamsResponse;
    };
    sdk: {
      input: ListIngestionStreamsCommandInput;
      output: ListIngestionStreamsCommandOutput;
    };
  };
}
