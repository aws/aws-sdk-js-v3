// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateMigrationWorkflowRequest, UpdateMigrationWorkflowResponse } from "../models/models_0";
import { UpdateWorkflow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateWorkflowCommand}.
 */
export interface UpdateWorkflowCommandInput extends UpdateMigrationWorkflowRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkflowCommand}.
 */
export interface UpdateWorkflowCommandOutput extends UpdateMigrationWorkflowResponse, __MetadataBearer {}

/**
 * Update a migration workflow.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, UpdateWorkflowCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, UpdateWorkflowCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * // import type { MigrationHubOrchestratorClientConfig } from "@aws-sdk/client-migrationhuborchestrator";
 * const config = {}; // type is MigrationHubOrchestratorClientConfig
 * const client = new MigrationHubOrchestratorClient(config);
 * const input = { // UpdateMigrationWorkflowRequest
 *   id: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   inputParameters: { // StepInputParameters
 *     "<keys>": { // StepInput Union: only one key present
 *       integerValue: Number("int"),
 *       stringValue: "STRING_VALUE",
 *       listOfStringsValue: [ // StringList
 *         "STRING_VALUE",
 *       ],
 *       mapOfStringValue: { // StringMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   },
 *   stepTargets: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMigrationWorkflowResponse
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   templateId: "STRING_VALUE",
 * //   adsApplicationConfigurationId: "STRING_VALUE",
 * //   workflowInputs: { // StepInputParameters
 * //     "<keys>": { // StepInput Union: only one key present
 * //       integerValue: Number("int"),
 * //       stringValue: "STRING_VALUE",
 * //       listOfStringsValue: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       mapOfStringValue: { // StringMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   stepTargets: [
 * //     "STRING_VALUE",
 * //   ],
 * //   status: "STRING_VALUE",
 * //   creationTime: new Date("TIMESTAMP"),
 * //   lastModifiedTime: new Date("TIMESTAMP"),
 * //   tags: {
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateWorkflowCommandInput - {@link UpdateWorkflowCommandInput}
 * @returns {@link UpdateWorkflowCommandOutput}
 * @see {@link UpdateWorkflowCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkflowCommandOutput} for command's `response` shape.
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
export class UpdateWorkflowCommand extends command<UpdateWorkflowCommandInput, UpdateWorkflowCommandOutput>(
  _ep0,
  _mw0,
  "UpdateWorkflow",
  UpdateWorkflow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMigrationWorkflowRequest;
      output: UpdateMigrationWorkflowResponse;
    };
    sdk: {
      input: UpdateWorkflowCommandInput;
      output: UpdateWorkflowCommandOutput;
    };
  };
}
