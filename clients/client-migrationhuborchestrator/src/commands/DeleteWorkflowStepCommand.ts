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
import { DeleteWorkflowStepRequest, DeleteWorkflowStepResponse } from "../models/models_0";
import { de_DeleteWorkflowStepCommand, se_DeleteWorkflowStepCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Delete a step in a migration workflow. Pause the workflow to delete a running
 *             step.</p>
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
export class DeleteWorkflowStepCommand extends $Command
  .classBuilder<
    DeleteWorkflowStepCommandInput,
    DeleteWorkflowStepCommandOutput,
    MigrationHubOrchestratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubOrchestratorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSMigrationHubOrchestrator", "DeleteWorkflowStep", {})
  .n("MigrationHubOrchestratorClient", "DeleteWorkflowStepCommand")
  .f(void 0, void 0)
  .ser(se_DeleteWorkflowStepCommand)
  .de(de_DeleteWorkflowStepCommand)
  .build() {
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
