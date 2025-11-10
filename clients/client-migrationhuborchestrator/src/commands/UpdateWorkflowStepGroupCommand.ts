// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MigrationHubOrchestratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubOrchestratorClient";
import { UpdateWorkflowStepGroupRequest, UpdateWorkflowStepGroupResponse } from "../models/models_0";
import { UpdateWorkflowStepGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkflowStepGroupCommand}.
 */
export interface UpdateWorkflowStepGroupCommandInput extends UpdateWorkflowStepGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkflowStepGroupCommand}.
 */
export interface UpdateWorkflowStepGroupCommandOutput extends UpdateWorkflowStepGroupResponse, __MetadataBearer {}

/**
 * <p>Update the step group in a migration workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, UpdateWorkflowStepGroupCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, UpdateWorkflowStepGroupCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * // import type { MigrationHubOrchestratorClientConfig } from "@aws-sdk/client-migrationhuborchestrator";
 * const config = {}; // type is MigrationHubOrchestratorClientConfig
 * const client = new MigrationHubOrchestratorClient(config);
 * const input = { // UpdateWorkflowStepGroupRequest
 *   workflowId: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   next: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   previous: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateWorkflowStepGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWorkflowStepGroupResponse
 * //   workflowId: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   tools: [ // ToolsList
 * //     { // Tool
 * //       name: "STRING_VALUE",
 * //       url: "STRING_VALUE",
 * //     },
 * //   ],
 * //   next: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   previous: [
 * //     "STRING_VALUE",
 * //   ],
 * //   lastModifiedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateWorkflowStepGroupCommandInput - {@link UpdateWorkflowStepGroupCommandInput}
 * @returns {@link UpdateWorkflowStepGroupCommandOutput}
 * @see {@link UpdateWorkflowStepGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkflowStepGroupCommandOutput} for command's `response` shape.
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
export class UpdateWorkflowStepGroupCommand extends $Command
  .classBuilder<
    UpdateWorkflowStepGroupCommandInput,
    UpdateWorkflowStepGroupCommandOutput,
    MigrationHubOrchestratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubOrchestratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMigrationHubOrchestrator", "UpdateWorkflowStepGroup", {})
  .n("MigrationHubOrchestratorClient", "UpdateWorkflowStepGroupCommand")
  .sc(UpdateWorkflowStepGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkflowStepGroupRequest;
      output: UpdateWorkflowStepGroupResponse;
    };
    sdk: {
      input: UpdateWorkflowStepGroupCommandInput;
      output: UpdateWorkflowStepGroupCommandOutput;
    };
  };
}
