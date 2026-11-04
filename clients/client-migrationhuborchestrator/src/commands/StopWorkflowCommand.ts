// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopMigrationWorkflowRequest, StopMigrationWorkflowResponse } from "../models/models_0";
import { StopWorkflow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopWorkflowCommand}.
 */
export interface StopWorkflowCommandInput extends StopMigrationWorkflowRequest {}
/**
 * @public
 *
 * The output of {@link StopWorkflowCommand}.
 */
export interface StopWorkflowCommandOutput extends StopMigrationWorkflowResponse, __MetadataBearer {}

/**
 * Stop an ongoing migration workflow.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, StopWorkflowCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, StopWorkflowCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * // import type { MigrationHubOrchestratorClientConfig } from "@aws-sdk/client-migrationhuborchestrator";
 * const config = {}; // type is MigrationHubOrchestratorClientConfig
 * const client = new MigrationHubOrchestratorClient(config);
 * const input = { // StopMigrationWorkflowRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new StopWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // StopMigrationWorkflowResponse
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   statusMessage: "STRING_VALUE",
 * //   lastStopTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StopWorkflowCommandInput - {@link StopWorkflowCommandInput}
 * @returns {@link StopWorkflowCommandOutput}
 * @see {@link StopWorkflowCommandInput} for command's `input` shape.
 * @see {@link StopWorkflowCommandOutput} for command's `response` shape.
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
export class StopWorkflowCommand extends command<StopWorkflowCommandInput, StopWorkflowCommandOutput>(
  _ep0,
  _mw0,
  "StopWorkflow",
  StopWorkflow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopMigrationWorkflowRequest;
      output: StopMigrationWorkflowResponse;
    };
    sdk: {
      input: StopWorkflowCommandInput;
      output: StopWorkflowCommandOutput;
    };
  };
}
