// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListWorkflowStepGroupsRequest, ListWorkflowStepGroupsResponse } from "../models/models_0";
import { ListWorkflowStepGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * List the step groups in a migration workflow.
 *
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
export class ListWorkflowStepGroupsCommand extends command<ListWorkflowStepGroupsCommandInput, ListWorkflowStepGroupsCommandOutput>(
  _ep0,
  _mw0,
  "ListWorkflowStepGroups",
  ListWorkflowStepGroups$
) {
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
