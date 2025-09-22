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
import { RetryWorkflowStepRequest, RetryWorkflowStepResponse } from "../models/models_0";
import { RetryWorkflowStep } from "../schemas/schemas_7_Step";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retry a failed step in a migration workflow.</p>
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
 * @throws {@link MigrationHubOrchestratorServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubOrchestrator service.</p>
 *
 *
 * @public
 */
export class RetryWorkflowStepCommand extends $Command
  .classBuilder<
    RetryWorkflowStepCommandInput,
    RetryWorkflowStepCommandOutput,
    MigrationHubOrchestratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubOrchestratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMigrationHubOrchestrator", "RetryWorkflowStep", {})
  .n("MigrationHubOrchestratorClient", "RetryWorkflowStepCommand")
  .sc(RetryWorkflowStep)
  .build() {
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
