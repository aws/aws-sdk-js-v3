// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteWorkflowStepRequest, DeleteWorkflowStepResponse } from "../models/models_0";
import { DeleteWorkflowStep$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteWorkflowStepCommand}.
 */
export interface DeleteWorkflowStepCommandInput extends DeleteWorkflowStepRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkflowStepCommand}.
 */
export interface DeleteWorkflowStepCommandOutput extends DeleteWorkflowStepResponse, __MetadataBearer {}

/**
 * Delete a step in a migration workflow. Pause the workflow to delete a running step.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, DeleteWorkflowStepCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, DeleteWorkflowStepCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * // import type { MigrationHubOrchestratorClientConfig } from "@aws-sdk/client-migrationhuborchestrator";
 * const config = {}; // type is MigrationHubOrchestratorClientConfig
 * const client = new MigrationHubOrchestratorClient(config);
 * const input = { // DeleteWorkflowStepRequest
 *   id: "STRING_VALUE", // required
 *   stepGroupId: "STRING_VALUE", // required
 *   workflowId: "STRING_VALUE", // required
 * };
 * const command = new DeleteWorkflowStepCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWorkflowStepCommandInput - {@link DeleteWorkflowStepCommandInput}
 * @returns {@link DeleteWorkflowStepCommandOutput}
 * @see {@link DeleteWorkflowStepCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkflowStepCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubOrchestratorClientResolvedConfig | config} for MigrationHubOrchestratorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error has occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource is not available.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link MigrationHubOrchestratorServiceException}
 *
 * Base exception class for all service exceptions from MigrationHubOrchestrator service.
 *
 * @public
 */
export class DeleteWorkflowStepCommand extends command<DeleteWorkflowStepCommandInput, DeleteWorkflowStepCommandOutput>(
  _ep0,
  _mw0,
  "DeleteWorkflowStep",
  DeleteWorkflowStep$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWorkflowStepRequest;
      output: {};
    };
    sdk: {
      input: DeleteWorkflowStepCommandInput;
      output: DeleteWorkflowStepCommandOutput;
    };
  };
}
