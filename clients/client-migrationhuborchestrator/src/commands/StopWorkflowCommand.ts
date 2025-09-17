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
import { StopMigrationWorkflowRequest, StopMigrationWorkflowResponse } from "../models/models_0";
import { de_StopWorkflowCommand, se_StopWorkflowCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Stop an ongoing migration workflow.</p>
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
export class StopWorkflowCommand extends $Command
  .classBuilder<
    StopWorkflowCommandInput,
    StopWorkflowCommandOutput,
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
  .s("AWSMigrationHubOrchestrator", "StopWorkflow", {})
  .n("MigrationHubOrchestratorClient", "StopWorkflowCommand")
  .f(void 0, void 0)
  .ser(se_StopWorkflowCommand)
  .de(de_StopWorkflowCommand)
  .build() {
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
