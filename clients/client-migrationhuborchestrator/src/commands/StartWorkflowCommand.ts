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
import { StartMigrationWorkflowRequest, StartMigrationWorkflowResponse } from "../models/models_0";
import { de_StartWorkflowCommand, se_StartWorkflowCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Start a migration workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, StartWorkflowCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, StartWorkflowCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
export class StartWorkflowCommand extends $Command
  .classBuilder<
    StartWorkflowCommandInput,
    StartWorkflowCommandOutput,
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
  .s("AWSMigrationHubOrchestrator", "StartWorkflow", {})
  .n("MigrationHubOrchestratorClient", "StartWorkflowCommand")
  .f(void 0, void 0)
  .ser(se_StartWorkflowCommand)
  .de(de_StartWorkflowCommand)
  .build() {
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
