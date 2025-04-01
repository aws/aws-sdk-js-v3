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
import { GetWorkflowStepGroupRequest, GetWorkflowStepGroupResponse } from "../models/models_0";
import { de_GetWorkflowStepGroupCommand, se_GetWorkflowStepGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWorkflowStepGroupCommand}.
 */
export interface GetWorkflowStepGroupCommandInput extends GetWorkflowStepGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkflowStepGroupCommand}.
 */
export interface GetWorkflowStepGroupCommandOutput extends GetWorkflowStepGroupResponse, __MetadataBearer {}

/**
 * <p>Get the step group of a migration workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, GetWorkflowStepGroupCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, GetWorkflowStepGroupCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * const client = new MigrationHubOrchestratorClient(config);
 * const input = { // GetWorkflowStepGroupRequest
 *   id: "STRING_VALUE", // required
 *   workflowId: "STRING_VALUE", // required
 * };
 * const command = new GetWorkflowStepGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkflowStepGroupResponse
 * //   id: "STRING_VALUE",
 * //   workflowId: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   owner: "STRING_VALUE",
 * //   creationTime: new Date("TIMESTAMP"),
 * //   lastModifiedTime: new Date("TIMESTAMP"),
 * //   endTime: new Date("TIMESTAMP"),
 * //   tools: [ // ToolsList
 * //     { // Tool
 * //       name: "STRING_VALUE",
 * //       url: "STRING_VALUE",
 * //     },
 * //   ],
 * //   previous: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   next: [
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetWorkflowStepGroupCommandInput - {@link GetWorkflowStepGroupCommandInput}
 * @returns {@link GetWorkflowStepGroupCommandOutput}
 * @see {@link GetWorkflowStepGroupCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowStepGroupCommandOutput} for command's `response` shape.
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
export class GetWorkflowStepGroupCommand extends $Command
  .classBuilder<
    GetWorkflowStepGroupCommandInput,
    GetWorkflowStepGroupCommandOutput,
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
  .s("AWSMigrationHubOrchestrator", "GetWorkflowStepGroup", {})
  .n("MigrationHubOrchestratorClient", "GetWorkflowStepGroupCommand")
  .f(void 0, void 0)
  .ser(se_GetWorkflowStepGroupCommand)
  .de(de_GetWorkflowStepGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorkflowStepGroupRequest;
      output: GetWorkflowStepGroupResponse;
    };
    sdk: {
      input: GetWorkflowStepGroupCommandInput;
      output: GetWorkflowStepGroupCommandOutput;
    };
  };
}
