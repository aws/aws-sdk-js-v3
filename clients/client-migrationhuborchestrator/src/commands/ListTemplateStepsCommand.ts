// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MigrationHubOrchestratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubOrchestratorClient";
import { ListTemplateStepsRequest, ListTemplateStepsResponse } from "../models/models_0";
import { ListTemplateSteps } from "../schemas/schemas_2_Template";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>List the steps in a template.</p>
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
export class ListTemplateStepsCommand extends $Command
  .classBuilder<
    ListTemplateStepsCommandInput,
    ListTemplateStepsCommandOutput,
    MigrationHubOrchestratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubOrchestratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMigrationHubOrchestrator", "ListTemplateSteps", {})
  .n("MigrationHubOrchestratorClient", "ListTemplateStepsCommand")
  .sc(ListTemplateSteps)
  .build() {
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
