// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetWorkflowStepGroupRequest, GetWorkflowStepGroupResponse } from "../models/models_0";
import { GetWorkflowStepGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Get the step group of a migration workflow.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, GetWorkflowStepGroupCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, GetWorkflowStepGroupCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * // import type { MigrationHubOrchestratorClientConfig } from "@aws-sdk/client-migrationhuborchestrator";
 * const config = {}; // type is MigrationHubOrchestratorClientConfig
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
export class GetWorkflowStepGroupCommand extends command<GetWorkflowStepGroupCommandInput, GetWorkflowStepGroupCommandOutput>(
  _ep0,
  _mw0,
  "GetWorkflowStepGroup",
  GetWorkflowStepGroup$
) {
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
