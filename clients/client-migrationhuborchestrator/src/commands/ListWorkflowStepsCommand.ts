// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListWorkflowStepsRequest, ListWorkflowStepsResponse } from "../models/models_0";
import { ListWorkflowSteps$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * List the steps in a workflow.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error has occurred.
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
export class ListWorkflowStepsCommand extends command<ListWorkflowStepsCommandInput, ListWorkflowStepsCommandOutput>(
  _ep0,
  _mw0,
  "ListWorkflowSteps",
  ListWorkflowSteps$
) {
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
