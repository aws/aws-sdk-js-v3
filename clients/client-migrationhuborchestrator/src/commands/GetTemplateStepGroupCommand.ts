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
import { GetTemplateStepGroupRequest, GetTemplateStepGroupResponse } from "../models/models_0";
import { GetTemplateStepGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTemplateStepGroupCommand}.
 */
export interface GetTemplateStepGroupCommandInput extends GetTemplateStepGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetTemplateStepGroupCommand}.
 */
export interface GetTemplateStepGroupCommandOutput extends GetTemplateStepGroupResponse, __MetadataBearer {}

/**
 * <p>Get a step group in a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, GetTemplateStepGroupCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, GetTemplateStepGroupCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * // import type { MigrationHubOrchestratorClientConfig } from "@aws-sdk/client-migrationhuborchestrator";
 * const config = {}; // type is MigrationHubOrchestratorClientConfig
 * const client = new MigrationHubOrchestratorClient(config);
 * const input = { // GetTemplateStepGroupRequest
 *   templateId: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetTemplateStepGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetTemplateStepGroupResponse
 * //   templateId: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   creationTime: new Date("TIMESTAMP"),
 * //   lastModifiedTime: new Date("TIMESTAMP"),
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
 * @param GetTemplateStepGroupCommandInput - {@link GetTemplateStepGroupCommandInput}
 * @returns {@link GetTemplateStepGroupCommandOutput}
 * @see {@link GetTemplateStepGroupCommandInput} for command's `input` shape.
 * @see {@link GetTemplateStepGroupCommandOutput} for command's `response` shape.
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
export class GetTemplateStepGroupCommand extends $Command
  .classBuilder<
    GetTemplateStepGroupCommandInput,
    GetTemplateStepGroupCommandOutput,
    MigrationHubOrchestratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubOrchestratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMigrationHubOrchestrator", "GetTemplateStepGroup", {})
  .n("MigrationHubOrchestratorClient", "GetTemplateStepGroupCommand")
  .sc(GetTemplateStepGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTemplateStepGroupRequest;
      output: GetTemplateStepGroupResponse;
    };
    sdk: {
      input: GetTemplateStepGroupCommandInput;
      output: GetTemplateStepGroupCommandOutput;
    };
  };
}
