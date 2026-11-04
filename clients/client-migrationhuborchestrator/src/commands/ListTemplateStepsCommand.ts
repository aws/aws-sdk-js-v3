// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTemplateStepsRequest, ListTemplateStepsResponse } from "../models/models_0";
import { ListTemplateSteps$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTemplateStepsCommand}.
 */
export interface ListTemplateStepsCommandInput extends ListTemplateStepsRequest {}
/**
 * @public
 *
 * The output of {@link ListTemplateStepsCommand}.
 */
export interface ListTemplateStepsCommandOutput extends ListTemplateStepsResponse, __MetadataBearer {}

/**
 * List the steps in a template.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, ListTemplateStepsCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, ListTemplateStepsCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * // import type { MigrationHubOrchestratorClientConfig } from "@aws-sdk/client-migrationhuborchestrator";
 * const config = {}; // type is MigrationHubOrchestratorClientConfig
 * const client = new MigrationHubOrchestratorClient(config);
 * const input = { // ListTemplateStepsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   templateId: "STRING_VALUE", // required
 *   stepGroupId: "STRING_VALUE", // required
 * };
 * const command = new ListTemplateStepsCommand(input);
 * const response = await client.send(command);
 * // { // ListTemplateStepsResponse
 * //   nextToken: "STRING_VALUE",
 * //   templateStepSummaryList: [ // TemplateStepSummaryList
 * //     { // TemplateStepSummary
 * //       id: "STRING_VALUE",
 * //       stepGroupId: "STRING_VALUE",
 * //       templateId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       stepActionType: "STRING_VALUE",
 * //       targetType: "STRING_VALUE",
 * //       owner: "STRING_VALUE",
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
 * @param ListTemplateStepsCommandInput - {@link ListTemplateStepsCommandInput}
 * @returns {@link ListTemplateStepsCommandOutput}
 * @see {@link ListTemplateStepsCommandInput} for command's `input` shape.
 * @see {@link ListTemplateStepsCommandOutput} for command's `response` shape.
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
export class ListTemplateStepsCommand extends command<ListTemplateStepsCommandInput, ListTemplateStepsCommandOutput>(
  _ep0,
  _mw0,
  "ListTemplateSteps",
  ListTemplateSteps$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTemplateStepsRequest;
      output: ListTemplateStepsResponse;
    };
    sdk: {
      input: ListTemplateStepsCommandInput;
      output: ListTemplateStepsCommandOutput;
    };
  };
}
