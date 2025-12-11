// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  MigrationHubOrchestratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubOrchestratorClient";
import type { DeleteMigrationWorkflowRequest, DeleteMigrationWorkflowResponse } from "../models/models_0";
import { DeleteWorkflow } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Delete a migration workflow. You must pause a running workflow in Migration Hub Orchestrator console to
 *             delete it.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource is not available.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link MigrationHubOrchestratorServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubOrchestrator service.</p>
 *
 *
 * @public
 */
export class DeleteWorkflowCommand extends $Command
  .classBuilder<
    DeleteWorkflowCommandInput,
    DeleteWorkflowCommandOutput,
    MigrationHubOrchestratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubOrchestratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMigrationHubOrchestrator", "DeleteWorkflow", {})
  .n("MigrationHubOrchestratorClient", "DeleteWorkflowCommand")
  .sc(DeleteWorkflow)
  .build() {
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
