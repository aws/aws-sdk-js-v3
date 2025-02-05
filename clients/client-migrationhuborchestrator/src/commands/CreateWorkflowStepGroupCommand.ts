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
import { CreateWorkflowStepGroupRequest, CreateWorkflowStepGroupResponse } from "../models/models_0";
import { de_CreateWorkflowStepGroupCommand, se_CreateWorkflowStepGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkflowStepGroupCommand}.
 */
export interface CreateWorkflowStepGroupCommandInput extends CreateWorkflowStepGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkflowStepGroupCommand}.
 */
export interface CreateWorkflowStepGroupCommandOutput extends CreateWorkflowStepGroupResponse, __MetadataBearer {}

/**
 * <p>Create a step group in a migration workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, CreateWorkflowStepGroupCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, CreateWorkflowStepGroupCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MigrationHubOrchestratorClient(config);
 * const input = { // CreateWorkflowStepGroupRequest
 *   workflowId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   next: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   previous: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateWorkflowStepGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkflowStepGroupResponse
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
 * //   creationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateWorkflowStepGroupCommandInput - {@link CreateWorkflowStepGroupCommandInput}
 * @returns {@link CreateWorkflowStepGroupCommandOutput}
 * @see {@link CreateWorkflowStepGroupCommandInput} for command's `input` shape.
 * @see {@link CreateWorkflowStepGroupCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateWorkflowStepGroupCommand extends $Command
  .classBuilder<
    CreateWorkflowStepGroupCommandInput,
    CreateWorkflowStepGroupCommandOutput,
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
  .s("AWSMigrationHubOrchestrator", "CreateWorkflowStepGroup", {})
  .n("MigrationHubOrchestratorClient", "CreateWorkflowStepGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateWorkflowStepGroupCommand)
  .de(de_CreateWorkflowStepGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorkflowStepGroupRequest;
      output: CreateWorkflowStepGroupResponse;
    };
    sdk: {
      input: CreateWorkflowStepGroupCommandInput;
      output: CreateWorkflowStepGroupCommandOutput;
    };
  };
}
