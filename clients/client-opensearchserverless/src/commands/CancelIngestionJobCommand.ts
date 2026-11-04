// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelIngestionJobRequest, CancelIngestionJobResponse } from "../models/models_0";
import { CancelIngestionJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelIngestionJobCommand}.
 */
export interface CancelIngestionJobCommandInput extends CancelIngestionJobRequest {}
/**
 * @public
 *
 * The output of {@link CancelIngestionJobCommand}.
 */
export interface CancelIngestionJobCommandOutput extends CancelIngestionJobResponse, __MetadataBearer {}

/**
 * Cancels an in-progress ingestion job. Documents that were already indexed before the cancellation remain in the index.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, CancelIngestionJobCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, CancelIngestionJobCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * // import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
 * const config = {}; // type is OpenSearchServerlessClientConfig
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // CancelIngestionJobRequest
 *   collectionId: "STRING_VALUE", // required
 *   ingestionJobId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CancelIngestionJobCommand(input);
 * const response = await client.send(command);
 * // { // CancelIngestionJobResponse
 * //   ingestionJobId: "STRING_VALUE",
 * //   collectionId: "STRING_VALUE",
 * //   ingestionJobName: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelIngestionJobCommandInput - {@link CancelIngestionJobCommandInput}
 * @returns {@link CancelIngestionJobCommandOutput}
 * @see {@link CancelIngestionJobCommandInput} for command's `input` shape.
 * @see {@link CancelIngestionJobCommandOutput} for command's `response` shape.
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
export class CancelIngestionJobCommand extends command<CancelIngestionJobCommandInput, CancelIngestionJobCommandOutput>(
  _ep0,
  _mw0,
  "CancelIngestionJob",
  CancelIngestionJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelIngestionJobRequest;
      output: CancelIngestionJobResponse;
    };
    sdk: {
      input: CancelIngestionJobCommandInput;
      output: CancelIngestionJobCommandOutput;
    };
  };
}
