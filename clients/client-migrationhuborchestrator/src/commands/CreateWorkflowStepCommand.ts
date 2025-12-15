// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  MigrationHubOrchestratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubOrchestratorClient";
import type { CreateWorkflowStepRequest, CreateWorkflowStepResponse } from "../models/models_0";
import { CreateWorkflowStep$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkflowStepCommand}.
 */
export interface CreateWorkflowStepCommandInput extends CreateWorkflowStepRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkflowStepCommand}.
 */
export interface CreateWorkflowStepCommandOutput extends CreateWorkflowStepResponse, __MetadataBearer {}

/**
 * <p>Create a step in the migration workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, CreateWorkflowStepCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, CreateWorkflowStepCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * // import type { MigrationHubOrchestratorClientConfig } from "@aws-sdk/client-migrationhuborchestrator";
 * const config = {}; // type is MigrationHubOrchestratorClientConfig
 * const client = new MigrationHubOrchestratorClient(config);
 * const input = { // CreateWorkflowStepRequest
 *   name: "STRING_VALUE", // required
 *   stepGroupId: "STRING_VALUE", // required
 *   workflowId: "STRING_VALUE", // required
 *   stepActionType: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
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
 * };
 * const command = new CreateWorkflowStepCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkflowStepResponse
 * //   id: "STRING_VALUE",
 * //   stepGroupId: "STRING_VALUE",
 * //   workflowId: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateWorkflowStepCommandInput - {@link CreateWorkflowStepCommandInput}
 * @returns {@link CreateWorkflowStepCommandOutput}
 * @see {@link CreateWorkflowStepCommandInput} for command's `input` shape.
 * @see {@link CreateWorkflowStepCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubOrchestratorClientResolvedConfig | config} for MigrationHubOrchestratorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
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
export class CreateWorkflowStepCommand extends $Command
  .classBuilder<
    CreateWorkflowStepCommandInput,
    CreateWorkflowStepCommandOutput,
    MigrationHubOrchestratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubOrchestratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMigrationHubOrchestrator", "CreateWorkflowStep", {})
  .n("MigrationHubOrchestratorClient", "CreateWorkflowStepCommand")
  .sc(CreateWorkflowStep$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorkflowStepRequest;
      output: CreateWorkflowStepResponse;
    };
    sdk: {
      input: CreateWorkflowStepCommandInput;
      output: CreateWorkflowStepCommandOutput;
    };
  };
}
