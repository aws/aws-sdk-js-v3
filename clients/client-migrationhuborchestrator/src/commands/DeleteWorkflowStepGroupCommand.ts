// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MigrationHubOrchestratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubOrchestratorClient";
import { DeleteWorkflowStepGroupRequest, DeleteWorkflowStepGroupResponse } from "../models/models_0";
import { de_DeleteWorkflowStepGroupCommand, se_DeleteWorkflowStepGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Delete a step group in a migration workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, DeleteWorkflowStepGroupCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, DeleteWorkflowStepGroupCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
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
 * @public
 */
export class DeleteWorkflowStepGroupCommand extends $Command
  .classBuilder<
    DeleteWorkflowStepGroupCommandInput,
    DeleteWorkflowStepGroupCommandOutput,
    MigrationHubOrchestratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MigrationHubOrchestratorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSMigrationHubOrchestrator", "DeleteWorkflowStepGroup", {})
  .n("MigrationHubOrchestratorClient", "DeleteWorkflowStepGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteWorkflowStepGroupCommand)
  .de(de_DeleteWorkflowStepGroupCommand)
  .build() {}
