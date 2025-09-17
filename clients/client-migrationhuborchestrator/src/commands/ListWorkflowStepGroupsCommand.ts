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
import { ListWorkflowStepGroupsRequest, ListWorkflowStepGroupsResponse } from "../models/models_0";
import { de_ListWorkflowStepGroupsCommand, se_ListWorkflowStepGroupsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorkflowStepGroupsCommand}.
 */
export interface ListWorkflowStepGroupsCommandInput extends ListWorkflowStepGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkflowStepGroupsCommand}.
 */
export interface ListWorkflowStepGroupsCommandOutput extends ListWorkflowStepGroupsResponse, __MetadataBearer {}

/**
 * <p>List the step groups in a migration workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, ListWorkflowStepGroupsCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, ListWorkflowStepGroupsCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * // import type { MigrationHubOrchestratorClientConfig } from "@aws-sdk/client-migrationhuborchestrator";
 * const config = {}; // type is MigrationHubOrchestratorClientConfig
 * const client = new MigrationHubOrchestratorClient(config);
 * const input = { // ListWorkflowStepGroupsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   workflowId: "STRING_VALUE", // required
 * };
 * const command = new ListWorkflowStepGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkflowStepGroupsResponse
 * //   nextToken: "STRING_VALUE",
 * //   workflowStepGroupsSummary: [ // WorkflowStepGroupsSummaryList // required
 * //     { // WorkflowStepGroupSummary
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       owner: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       previous: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       next: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWorkflowStepGroupsCommandInput - {@link ListWorkflowStepGroupsCommandInput}
 * @returns {@link ListWorkflowStepGroupsCommandOutput}
 * @see {@link ListWorkflowStepGroupsCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowStepGroupsCommandOutput} for command's `response` shape.
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
export class ListWorkflowStepGroupsCommand extends $Command
  .classBuilder<
    ListWorkflowStepGroupsCommandInput,
    ListWorkflowStepGroupsCommandOutput,
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
  .s("AWSMigrationHubOrchestrator", "ListWorkflowStepGroups", {})
  .n("MigrationHubOrchestratorClient", "ListWorkflowStepGroupsCommand")
  .f(void 0, void 0)
  .ser(se_ListWorkflowStepGroupsCommand)
  .de(de_ListWorkflowStepGroupsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkflowStepGroupsRequest;
      output: ListWorkflowStepGroupsResponse;
    };
    sdk: {
      input: ListWorkflowStepGroupsCommandInput;
      output: ListWorkflowStepGroupsCommandOutput;
    };
  };
}
