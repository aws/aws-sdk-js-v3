// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteWorkflowStepGroupRequest, DeleteWorkflowStepGroupResponse } from "../models/models_0";
import { DeleteWorkflowStepGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteWorkflowStepGroupCommand}.
 */
export interface DeleteWorkflowStepGroupCommandInput extends DeleteWorkflowStepGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkflowStepGroupCommand}.
 */
export interface DeleteWorkflowStepGroupCommandOutput extends DeleteWorkflowStepGroupResponse, __MetadataBearer {}

/**
 * Delete a step group in a migration workflow.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, DeleteWorkflowStepGroupCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, DeleteWorkflowStepGroupCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * // import type { MigrationHubOrchestratorClientConfig } from "@aws-sdk/client-migrationhuborchestrator";
 * const config = {}; // type is MigrationHubOrchestratorClientConfig
 * const client = new MigrationHubOrchestratorClient(config);
 * const input = { // DeleteWorkflowStepGroupRequest
 *   workflowId: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteWorkflowStepGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWorkflowStepGroupCommandInput - {@link DeleteWorkflowStepGroupCommandInput}
 * @returns {@link DeleteWorkflowStepGroupCommandOutput}
 * @see {@link DeleteWorkflowStepGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkflowStepGroupCommandOutput} for command's `response` shape.
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
export class DeleteWorkflowStepGroupCommand extends command<DeleteWorkflowStepGroupCommandInput, DeleteWorkflowStepGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteWorkflowStepGroup",
  DeleteWorkflowStepGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWorkflowStepGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteWorkflowStepGroupCommandInput;
      output: DeleteWorkflowStepGroupCommandOutput;
    };
  };
}
