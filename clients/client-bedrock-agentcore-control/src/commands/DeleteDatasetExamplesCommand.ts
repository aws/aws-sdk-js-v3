// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDatasetExamplesRequest, DeleteDatasetExamplesResponse } from "../models/models_0";
import { DeleteDatasetExamples$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDatasetExamplesCommand}.
 */
export interface DeleteDatasetExamplesCommandInput extends DeleteDatasetExamplesRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDatasetExamplesCommand}.
 */
export interface DeleteDatasetExamplesCommandOutput extends DeleteDatasetExamplesResponse, __MetadataBearer {}

/**
 * <p> Deletes specific examples by ID from DRAFT. All example IDs are validated before any deletes occur. If any ID does not exist in DRAFT, the entire batch is rejected (all-or-nothing semantics). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, DeleteDatasetExamplesCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, DeleteDatasetExamplesCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // DeleteDatasetExamplesRequest
 *   datasetId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   exampleIds: [ // ExampleIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteDatasetExamplesCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDatasetExamplesResponse
 * //   datasetArn: "STRING_VALUE", // required
 * //   datasetId: "STRING_VALUE", // required
 * //   status: "CREATING" || "UPDATING" || "DELETING" || "ACTIVE" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED", // required
 * //   deletedCount: Number("long"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DeleteDatasetExamplesCommandInput - {@link DeleteDatasetExamplesCommandInput}
 * @returns {@link DeleteDatasetExamplesCommandOutput}
 * @see {@link DeleteDatasetExamplesCommandInput} for command's `input` shape.
 * @see {@link DeleteDatasetExamplesCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when there is a conflict performing an operation</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception is thrown when the number of requests exceeds the limit</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class DeleteDatasetExamplesCommand extends command<DeleteDatasetExamplesCommandInput, DeleteDatasetExamplesCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDatasetExamples",
  DeleteDatasetExamples$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDatasetExamplesRequest;
      output: DeleteDatasetExamplesResponse;
    };
    sdk: {
      input: DeleteDatasetExamplesCommandInput;
      output: DeleteDatasetExamplesCommandOutput;
    };
  };
}
