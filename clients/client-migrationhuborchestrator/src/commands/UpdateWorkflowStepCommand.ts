// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateWorkflowStepRequest, UpdateWorkflowStepResponse } from "../models/models_0";
import { UpdateWorkflowStep$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateWorkflowStepCommand}.
 */
export interface UpdateWorkflowStepCommandInput extends UpdateWorkflowStepRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkflowStepCommand}.
 */
export interface UpdateWorkflowStepCommandOutput extends UpdateWorkflowStepResponse, __MetadataBearer {}

/**
 * Update a step in a migration workflow.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, UpdateWorkflowStepCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, UpdateWorkflowStepCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * // import type { MigrationHubOrchestratorClientConfig } from "@aws-sdk/client-migrationhuborchestrator";
 * const config = {}; // type is MigrationHubOrchestratorClientConfig
 * const client = new MigrationHubOrchestratorClient(config);
 * const input = { // UpdateWorkflowStepRequest
 *   id: "STRING_VALUE", // required
 *   stepGroupId: "STRING_VALUE", // required
 *   workflowId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   stepActionType: "STRING_VALUE",
 *   workflowStepAutomationConfiguration: { // WorkflowStepAutomationConfiguration
 *     scriptLocationS3Bucket: "STRING_VALUE",
 *     scriptLocationS3Key: { // PlatformScriptKey
 *       linux: "STRING_VALUE",
 *       windows: "STRING_VALUE",
 *     },
 *     command: { // PlatformCommand
 *       linux: "STRING_VALUE",
 *       windows: "STRING_VALUE",
 *     },
 *     runEnvironment: "STRING_VALUE",
 *     targetType: "STRING_VALUE",
 *   },
 *   stepTarget: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   outputs: [ // WorkflowStepOutputList
 *     { // WorkflowStepOutput
 *       name: "STRING_VALUE",
 *       dataType: "STRING_VALUE",
 *       required: true || false,
 *       value: { // WorkflowStepOutputUnion Union: only one key present
 *         integerValue: Number("int"),
 *         stringValue: "STRING_VALUE",
 *         listOfStringValue: [ // MaxStringList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   ],
 *   previous: [
 *     "STRING_VALUE",
 *   ],
 *   next: [
 *     "STRING_VALUE",
 *   ],
 *   status: "STRING_VALUE",
 * };
 * const command = new UpdateWorkflowStepCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWorkflowStepResponse
 * //   id: "STRING_VALUE",
 * //   stepGroupId: "STRING_VALUE",
 * //   workflowId: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateWorkflowStepCommandInput - {@link UpdateWorkflowStepCommandInput}
 * @returns {@link UpdateWorkflowStepCommandOutput}
 * @see {@link UpdateWorkflowStepCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkflowStepCommandOutput} for command's `response` shape.
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
export class UpdateWorkflowStepCommand extends command<UpdateWorkflowStepCommandInput, UpdateWorkflowStepCommandOutput>(
  _ep0,
  _mw0,
  "UpdateWorkflowStep",
  UpdateWorkflowStep$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkflowStepRequest;
      output: UpdateWorkflowStepResponse;
    };
    sdk: {
      input: UpdateWorkflowStepCommandInput;
      output: UpdateWorkflowStepCommandOutput;
    };
  };
}
