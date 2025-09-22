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
import { ListTemplateStepGroupsRequest, ListTemplateStepGroupsResponse } from "../models/models_0";
import { ListTemplateStepGroups } from "../schemas/schemas_2_Template";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTemplateStepGroupsCommand}.
 */
export interface ListTemplateStepGroupsCommandInput extends ListTemplateStepGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListTemplateStepGroupsCommand}.
 */
export interface ListTemplateStepGroupsCommandOutput extends ListTemplateStepGroupsResponse, __MetadataBearer {}

/**
 * <p>List the step groups in a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, ListTemplateStepGroupsCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, ListTemplateStepGroupsCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * // import type { MigrationHubOrchestratorClientConfig } from "@aws-sdk/client-migrationhuborchestrator";
 * const config = {}; // type is MigrationHubOrchestratorClientConfig
 * const client = new MigrationHubOrchestratorClient(config);
 * const input = { // ListTemplateStepGroupsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   templateId: "STRING_VALUE", // required
 * };
 * const command = new ListTemplateStepGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListTemplateStepGroupsResponse
 * //   nextToken: "STRING_VALUE",
 * //   templateStepGroupSummary: [ // TemplateStepGroupSummaryList // required
 * //     { // TemplateStepGroupSummary
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
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
 * @param ListTemplateStepGroupsCommandInput - {@link ListTemplateStepGroupsCommandInput}
 * @returns {@link ListTemplateStepGroupsCommandOutput}
 * @see {@link ListTemplateStepGroupsCommandInput} for command's `input` shape.
 * @see {@link ListTemplateStepGroupsCommandOutput} for command's `response` shape.
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
 * @throws {@link MigrationHubOrchestratorServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubOrchestrator service.</p>
 *
 *
 * @public
 */
export class ListTemplateStepGroupsCommand extends $Command
  .classBuilder<
    ListTemplateStepGroupsCommandInput,
    ListTemplateStepGroupsCommandOutput,
    MigrationHubOrchestratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubOrchestratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMigrationHubOrchestrator", "ListTemplateStepGroups", {})
  .n("MigrationHubOrchestratorClient", "ListTemplateStepGroupsCommand")
  .sc(ListTemplateStepGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTemplateStepGroupsRequest;
      output: ListTemplateStepGroupsResponse;
    };
    sdk: {
      input: ListTemplateStepGroupsCommandInput;
      output: ListTemplateStepGroupsCommandOutput;
    };
  };
}
