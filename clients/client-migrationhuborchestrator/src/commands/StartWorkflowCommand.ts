// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartMigrationWorkflowRequest, StartMigrationWorkflowResponse } from "../models/models_0";
import { StartWorkflow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartWorkflowCommand}.
 */
export interface StartWorkflowCommandInput extends StartMigrationWorkflowRequest {}
/**
 * @public
 *
 * The output of {@link StartWorkflowCommand}.
 */
export interface StartWorkflowCommandOutput extends StartMigrationWorkflowResponse, __MetadataBearer {}

/**
 * Start a migration workflow.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, StartWorkflowCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, StartWorkflowCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * // import type { MigrationHubOrchestratorClientConfig } from "@aws-sdk/client-migrationhuborchestrator";
 * const config = {}; // type is MigrationHubOrchestratorClientConfig
 * const client = new MigrationHubOrchestratorClient(config);
 * const input = { // StartMigrationWorkflowRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new StartWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // StartMigrationWorkflowResponse
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   statusMessage: "STRING_VALUE",
 * //   lastStartTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StartWorkflowCommandInput - {@link StartWorkflowCommandInput}
 * @returns {@link StartWorkflowCommandOutput}
 * @see {@link StartWorkflowCommandInput} for command's `input` shape.
 * @see {@link StartWorkflowCommandOutput} for command's `response` shape.
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
export class StartWorkflowCommand extends command<StartWorkflowCommandInput, StartWorkflowCommandOutput>(
  _ep0,
  _mw0,
  "StartWorkflow",
  StartWorkflow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMigrationWorkflowRequest;
      output: StartMigrationWorkflowResponse;
    };
    sdk: {
      input: StartWorkflowCommandInput;
      output: StartWorkflowCommandOutput;
    };
  };
}
