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
import { GetWorkflowStepRequest, GetWorkflowStepResponse } from "../models/models_0";
import { de_GetWorkflowStepCommand, se_GetWorkflowStepCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWorkflowStepCommand}.
 */
export interface GetWorkflowStepCommandInput extends GetWorkflowStepRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkflowStepCommand}.
 */
export interface GetWorkflowStepCommandOutput extends GetWorkflowStepResponse, __MetadataBearer {}

/**
 * <p>Get a step in the migration workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, GetWorkflowStepCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, GetWorkflowStepCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * const client = new MigrationHubOrchestratorClient(config);
 * const input = { // GetWorkflowStepRequest
 *   workflowId: "STRING_VALUE", // required
 *   stepGroupId: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetWorkflowStepCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkflowStepResponse
 * //   name: "STRING_VALUE",
 * //   stepGroupId: "STRING_VALUE",
 * //   workflowId: "STRING_VALUE",
 * //   stepId: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   stepActionType: "STRING_VALUE",
 * //   owner: "STRING_VALUE",
 * //   workflowStepAutomationConfiguration: { // WorkflowStepAutomationConfiguration
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
 * //   stepTarget: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   outputs: [ // WorkflowStepOutputList
 * //     { // WorkflowStepOutput
 * //       name: "STRING_VALUE",
 * //       dataType: "STRING_VALUE",
 * //       required: true || false,
 * //       value: { // WorkflowStepOutputUnion Union: only one key present
 * //         integerValue: Number("int"),
 * //         stringValue: "STRING_VALUE",
 * //         listOfStringValue: [ // MaxStringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   previous: [
 * //     "STRING_VALUE",
 * //   ],
 * //   next: [
 * //     "STRING_VALUE",
 * //   ],
 * //   status: "STRING_VALUE",
 * //   statusMessage: "STRING_VALUE",
 * //   scriptOutputLocation: "STRING_VALUE",
 * //   creationTime: new Date("TIMESTAMP"),
 * //   lastStartTime: new Date("TIMESTAMP"),
 * //   endTime: new Date("TIMESTAMP"),
 * //   noOfSrvCompleted: Number("int"),
 * //   noOfSrvFailed: Number("int"),
 * //   totalNoOfSrv: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetWorkflowStepCommandInput - {@link GetWorkflowStepCommandInput}
 * @returns {@link GetWorkflowStepCommandOutput}
 * @see {@link GetWorkflowStepCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowStepCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetWorkflowStepCommand extends $Command
  .classBuilder<
    GetWorkflowStepCommandInput,
    GetWorkflowStepCommandOutput,
    MigrationHubOrchestratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MigrationHubOrchestratorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSMigrationHubOrchestrator", "GetWorkflowStep", {})
  .n("MigrationHubOrchestratorClient", "GetWorkflowStepCommand")
  .f(void 0, void 0)
  .ser(se_GetWorkflowStepCommand)
  .de(de_GetWorkflowStepCommand)
  .build() {}
