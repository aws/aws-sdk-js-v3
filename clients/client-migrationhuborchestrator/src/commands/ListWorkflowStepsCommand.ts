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
import { ListWorkflowStepsRequest, ListWorkflowStepsResponse } from "../models/models_0";
import { de_ListWorkflowStepsCommand, se_ListWorkflowStepsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorkflowStepsCommand}.
 */
export interface ListWorkflowStepsCommandInput extends ListWorkflowStepsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkflowStepsCommand}.
 */
export interface ListWorkflowStepsCommandOutput extends ListWorkflowStepsResponse, __MetadataBearer {}

/**
 * <p>List the steps in a workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, ListWorkflowStepsCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, ListWorkflowStepsCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * // import type { MigrationHubOrchestratorClientConfig } from "@aws-sdk/client-migrationhuborchestrator";
 * const config = {}; // type is MigrationHubOrchestratorClientConfig
 * const client = new MigrationHubOrchestratorClient(config);
 * const input = { // ListWorkflowStepsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   workflowId: "STRING_VALUE", // required
 *   stepGroupId: "STRING_VALUE", // required
 * };
 * const command = new ListWorkflowStepsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkflowStepsResponse
 * //   nextToken: "STRING_VALUE",
 * //   workflowStepsSummary: [ // WorkflowStepsSummaryList // required
 * //     { // WorkflowStepSummary
 * //       stepId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       stepActionType: "STRING_VALUE",
 * //       owner: "STRING_VALUE",
 * //       previous: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       next: [
 * //         "STRING_VALUE",
 * //       ],
 * //       status: "STRING_VALUE",
 * //       statusMessage: "STRING_VALUE",
 * //       noOfSrvCompleted: Number("int"),
 * //       noOfSrvFailed: Number("int"),
 * //       totalNoOfSrv: Number("int"),
 * //       description: "STRING_VALUE",
 * //       scriptLocation: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWorkflowStepsCommandInput - {@link ListWorkflowStepsCommandInput}
 * @returns {@link ListWorkflowStepsCommandOutput}
 * @see {@link ListWorkflowStepsCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowStepsCommandOutput} for command's `response` shape.
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
export class ListWorkflowStepsCommand extends $Command
  .classBuilder<
    ListWorkflowStepsCommandInput,
    ListWorkflowStepsCommandOutput,
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
  .s("AWSMigrationHubOrchestrator", "ListWorkflowSteps", {})
  .n("MigrationHubOrchestratorClient", "ListWorkflowStepsCommand")
  .f(void 0, void 0)
  .ser(se_ListWorkflowStepsCommand)
  .de(de_ListWorkflowStepsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkflowStepsRequest;
      output: ListWorkflowStepsResponse;
    };
    sdk: {
      input: ListWorkflowStepsCommandInput;
      output: ListWorkflowStepsCommandOutput;
    };
  };
}
