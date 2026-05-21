// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteDatasetRequest, DeleteDatasetResponse } from "../models/models_0";
import { DeleteDataset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDatasetCommand}.
 */
export interface DeleteDatasetCommandInput extends DeleteDatasetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDatasetCommand}.
 */
export interface DeleteDatasetCommandOutput extends DeleteDatasetResponse, __MetadataBearer {}

/**
 * Deletes a dataset version or an entire dataset (all versions + name claim). Asynchronous 202.
 *
 * **State transitions:**
 * - If `datasetVersion` is absent (full delete): status transitions to DELETING immediately.
 * - If `datasetVersion` is provided (version-specific delete): status transitions to UPDATING.
 *
 * **State guard (full delete):** Returns ConflictException (DATASET_NOT_READY) if the
 * dataset status is in \{CREATING, UPDATING\}. Deletion is allowed from ACTIVE, CREATE_FAILED,
 * UPDATE_FAILED, and DELETE_FAILED states.
 *
 * **State guard (version-specific delete):** Returns ConflictException (DATASET_NOT_READY) if
 * the dataset status is not in \{ACTIVE, CREATE_FAILED, UPDATE_FAILED\}.
 *
 * Fails with ConflictException (REFERENCED_BY_EVAL_JOB) if referenced by an active
 * evaluation job (full delete only).
 *
 * If the delete workflow fails after retries, status is set to DELETE_FAILED (full delete)
 * or UPDATE_FAILED (version-specific delete).
 * Calling DeleteDataset on a DELETE_FAILED dataset re-triggers the delete workflow
 * (idempotent retry path).
 *
 * **Version parameter:**
 * - If `datasetVersion` is absent: deletes ALL versions and the Dataset record itself.
 * - If `datasetVersion` is provided: deletes only that specific DatasetVersion.
 *   Returns ResourceNotFoundException if the specified version does not exist.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, DeleteDatasetCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, DeleteDatasetCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // DeleteDatasetRequest
 *   datasetId: "STRING_VALUE", // required
 *   datasetVersion: "STRING_VALUE",
 * };
 * const command = new DeleteDatasetCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDatasetResponse
 * //   datasetArn: "STRING_VALUE", // required
 * //   datasetId: "STRING_VALUE", // required
 * //   status: "CREATING" || "UPDATING" || "DELETING" || "ACTIVE" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED", // required
 * //   datasetVersion: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DeleteDatasetCommandInput - {@link DeleteDatasetCommandInput}
 * @returns {@link DeleteDatasetCommandOutput}
 * @see {@link DeleteDatasetCommandInput} for command's `input` shape.
 * @see {@link DeleteDatasetCommandOutput} for command's `response` shape.
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
export class DeleteDatasetCommand extends $Command
  .classBuilder<
    DeleteDatasetCommandInput,
    DeleteDatasetCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "DeleteDataset", {})
  .n("BedrockAgentCoreControlClient", "DeleteDatasetCommand")
  .sc(DeleteDataset$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDatasetRequest;
      output: DeleteDatasetResponse;
    };
    sdk: {
      input: DeleteDatasetCommandInput;
      output: DeleteDatasetCommandOutput;
    };
  };
}
