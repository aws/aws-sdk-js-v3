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
import { GetTemplateStepRequest, GetTemplateStepResponse } from "../models/models_0";
import { GetTemplateStep } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTemplateStepCommand}.
 */
export interface GetTemplateStepCommandInput extends GetTemplateStepRequest {}
/**
 * @public
 *
 * The output of {@link GetTemplateStepCommand}.
 */
export interface GetTemplateStepCommandOutput extends GetTemplateStepResponse, __MetadataBearer {}

/**
 * <p>Get a specific step in a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, GetTemplateStepCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, GetTemplateStepCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * // import type { MigrationHubOrchestratorClientConfig } from "@aws-sdk/client-migrationhuborchestrator";
 * const config = {}; // type is MigrationHubOrchestratorClientConfig
 * const client = new MigrationHubOrchestratorClient(config);
 * const input = { // GetTemplateStepRequest
 *   id: "STRING_VALUE", // required
 *   templateId: "STRING_VALUE", // required
 *   stepGroupId: "STRING_VALUE", // required
 * };
 * const command = new GetTemplateStepCommand(input);
 * const response = await client.send(command);
 * // { // GetTemplateStepResponse
 * //   id: "STRING_VALUE",
 * //   stepGroupId: "STRING_VALUE",
 * //   templateId: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   stepActionType: "STRING_VALUE",
 * //   creationTime: "STRING_VALUE",
 * //   previous: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   next: [
 * //     "STRING_VALUE",
 * //   ],
 * //   outputs: [ // StepOutputList
 * //     { // StepOutput
 * //       name: "STRING_VALUE",
 * //       dataType: "STRING_VALUE",
 * //       required: true || false,
 * //     },
 * //   ],
 * //   stepAutomationConfiguration: { // StepAutomationConfiguration
 * //     scriptLocationS3Bucket: "STRING_VALUE",
 * //     scriptLocationS3Key: { // PlatformScriptKey
 * //       linux: "STRING_VALUE",
 * //       windows: "STRING_VALUE",
 * //     },
 * //     command: { // PlatformCommand
 * //       linux: "STRING_VALUE",
 * //       windows: "STRING_VALUE",
 * //     },
 * //     runEnvironment: "STRING_VALUE",
 * //     targetType: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTemplateStepCommandInput - {@link GetTemplateStepCommandInput}
 * @returns {@link GetTemplateStepCommandOutput}
 * @see {@link GetTemplateStepCommandInput} for command's `input` shape.
 * @see {@link GetTemplateStepCommandOutput} for command's `response` shape.
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
export class GetTemplateStepCommand extends $Command
  .classBuilder<
    GetTemplateStepCommandInput,
    GetTemplateStepCommandOutput,
    MigrationHubOrchestratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubOrchestratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMigrationHubOrchestrator", "GetTemplateStep", {})
  .n("MigrationHubOrchestratorClient", "GetTemplateStepCommand")
  .sc(GetTemplateStep)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTemplateStepRequest;
      output: GetTemplateStepResponse;
    };
    sdk: {
      input: GetTemplateStepCommandInput;
      output: GetTemplateStepCommandOutput;
    };
  };
}
