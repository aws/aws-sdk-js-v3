// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteIngestionStreamRequest, DeleteIngestionStreamResponse } from "../models/models_0";
import { DeleteIngestionStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteIngestionStreamCommand}.
 */
export interface DeleteIngestionStreamCommandInput extends DeleteIngestionStreamRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIngestionStreamCommand}.
 */
export interface DeleteIngestionStreamCommandOutput extends DeleteIngestionStreamResponse, __MetadataBearer {}

/**
 * Deletes an ingestion stream. Documents that were already indexed by the stream remain in the index.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, DeleteIngestionStreamCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, DeleteIngestionStreamCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * // import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
 * const config = {}; // type is OpenSearchServerlessClientConfig
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // DeleteIngestionStreamRequest
 *   collectionId: "STRING_VALUE", // required
 *   ingestionStreamId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteIngestionStreamCommand(input);
 * const response = await client.send(command);
 * // { // DeleteIngestionStreamResponse
 * //   ingestionStreamId: "STRING_VALUE",
 * //   collectionId: "STRING_VALUE",
 * //   ingestionStreamName: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteIngestionStreamCommandInput - {@link DeleteIngestionStreamCommandInput}
 * @returns {@link DeleteIngestionStreamCommandOutput}
 * @see {@link DeleteIngestionStreamCommandInput} for command's `input` shape.
 * @see {@link DeleteIngestionStreamCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * When creating a resource, thrown when a resource with the same name already exists or is being created. When deleting a resource, thrown when the resource is not in the ACTIVE, FAILED, or UPDATE_FAILED state.
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
export class DeleteIngestionStreamCommand extends command<DeleteIngestionStreamCommandInput, DeleteIngestionStreamCommandOutput>(
  _ep0,
  _mw0,
  "DeleteIngestionStream",
  DeleteIngestionStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIngestionStreamRequest;
      output: DeleteIngestionStreamResponse;
    };
    sdk: {
      input: DeleteIngestionStreamCommandInput;
      output: DeleteIngestionStreamCommandOutput;
    };
  };
}
