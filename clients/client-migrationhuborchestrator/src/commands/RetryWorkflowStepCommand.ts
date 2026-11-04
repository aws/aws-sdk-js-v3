// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RetryWorkflowStepRequest, RetryWorkflowStepResponse } from "../models/models_0";
import { RetryWorkflowStep$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RetryWorkflowStepCommand}.
 */
export interface RetryWorkflowStepCommandInput extends RetryWorkflowStepRequest {}
/**
 * @public
 *
 * The output of {@link RetryWorkflowStepCommand}.
 */
export interface RetryWorkflowStepCommandOutput extends RetryWorkflowStepResponse, __MetadataBearer {}

/**
 * Retry a failed step in a migration workflow.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, RetryWorkflowStepCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, RetryWorkflowStepCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * // import type { MigrationHubOrchestratorClientConfig } from "@aws-sdk/client-migrationhuborchestrator";
 * const config = {}; // type is MigrationHubOrchestratorClientConfig
 * const client = new MigrationHubOrchestratorClient(config);
 * const input = { // RetryWorkflowStepRequest
 *   workflowId: "STRING_VALUE", // required
 *   stepGroupId: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 * };
 * const command = new RetryWorkflowStepCommand(input);
 * const response = await client.send(command);
 * // { // RetryWorkflowStepResponse
 * //   stepGroupId: "STRING_VALUE",
 * //   workflowId: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RetryWorkflowStepCommandInput - {@link RetryWorkflowStepCommandInput}
 * @returns {@link RetryWorkflowStepCommandOutput}
 * @see {@link RetryWorkflowStepCommandInput} for command's `input` shape.
 * @see {@link RetryWorkflowStepCommandOutput} for command's `response` shape.
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
 * @throws {@link MigrationHubOrchestratorServiceException}
 *
 * Base exception class for all service exceptions from MigrationHubOrchestrator service.
 *
 * @public
 */
export class RetryWorkflowStepCommand extends command<RetryWorkflowStepCommandInput, RetryWorkflowStepCommandOutput>(
  _ep0,
  _mw0,
  "RetryWorkflowStep",
  RetryWorkflowStep$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RetryWorkflowStepRequest;
      output: RetryWorkflowStepResponse;
    };
    sdk: {
      input: RetryWorkflowStepCommandInput;
      output: RetryWorkflowStepCommandOutput;
    };
  };
}
