// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMigrationWorkflowRequest, DeleteMigrationWorkflowResponse } from "../models/models_0";
import { DeleteWorkflow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteWorkflowCommand}.
 */
export interface DeleteWorkflowCommandInput extends DeleteMigrationWorkflowRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkflowCommand}.
 */
export interface DeleteWorkflowCommandOutput extends DeleteMigrationWorkflowResponse, __MetadataBearer {}

/**
 * Delete a migration workflow. You must pause a running workflow in Migration Hub Orchestrator console to delete it.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, DeleteWorkflowCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, DeleteWorkflowCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * // import type { MigrationHubOrchestratorClientConfig } from "@aws-sdk/client-migrationhuborchestrator";
 * const config = {}; // type is MigrationHubOrchestratorClientConfig
 * const client = new MigrationHubOrchestratorClient(config);
 * const input = { // DeleteMigrationWorkflowRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMigrationWorkflowResponse
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteWorkflowCommandInput - {@link DeleteWorkflowCommandInput}
 * @returns {@link DeleteWorkflowCommandOutput}
 * @see {@link DeleteWorkflowCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkflowCommandOutput} for command's `response` shape.
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
export class DeleteWorkflowCommand extends command<DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput>(
  _ep0,
  _mw0,
  "DeleteWorkflow",
  DeleteWorkflow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMigrationWorkflowRequest;
      output: DeleteMigrationWorkflowResponse;
    };
    sdk: {
      input: DeleteWorkflowCommandInput;
      output: DeleteWorkflowCommandOutput;
    };
  };
}
