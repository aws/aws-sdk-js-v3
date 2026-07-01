// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAssistantAIAgentRequest, UpdateAssistantAIAgentResponse } from "../models/models_0";
import { UpdateAssistantAIAgent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAssistantAIAgentCommand}.
 */
export interface UpdateAssistantAIAgentCommandInput extends UpdateAssistantAIAgentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAssistantAIAgentCommand}.
 */
export interface UpdateAssistantAIAgentCommandOutput extends UpdateAssistantAIAgentResponse, __MetadataBearer {}

/**
 * <p>Updates the AI Agent that is set for use by default on an Amazon Q in Connect Assistant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, UpdateAssistantAIAgentCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, UpdateAssistantAIAgentCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // UpdateAssistantAIAgentRequest
 *   assistantId: "STRING_VALUE", // required
 *   aiAgentType: "STRING_VALUE", // required
 *   configuration: { // AIAgentConfigurationData
 *     aiAgentId: "STRING_VALUE", // required
 *   },
 *   orchestratorUseCase: "STRING_VALUE",
 * };
 * const command = new UpdateAssistantAIAgentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAssistantAIAgentResponse
 * //   assistant: { // AssistantData
 * //     assistantId: "STRING_VALUE", // required
 * //     assistantArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     type: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     serverSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 * //       kmsKeyId: "STRING_VALUE",
 * //     },
 * //     integrationConfiguration: { // AssistantIntegrationConfiguration
 * //       topicIntegrationArn: "STRING_VALUE",
 * //     },
 * //     capabilityConfiguration: { // AssistantCapabilityConfiguration
 * //       type: "STRING_VALUE",
 * //     },
 * //     aiAgentConfiguration: { // AIAgentConfigurationMap
 * //       "<keys>": { // AIAgentConfigurationData
 * //         aiAgentId: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     orchestratorConfigurationList: [ // OrchestratorConfigurationList
 * //       { // OrchestratorConfigurationEntry
 * //         aiAgentId: "STRING_VALUE",
 * //         orchestratorUseCase: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAssistantAIAgentCommandInput - {@link UpdateAssistantAIAgentCommandInput}
 * @returns {@link UpdateAssistantAIAgentCommandOutput}
 * @see {@link UpdateAssistantAIAgentCommandInput} for command's `input` shape.
 * @see {@link UpdateAssistantAIAgentCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 *
 * @public
 */
export class UpdateAssistantAIAgentCommand extends command<UpdateAssistantAIAgentCommandInput, UpdateAssistantAIAgentCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAssistantAIAgent",
  UpdateAssistantAIAgent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAssistantAIAgentRequest;
      output: UpdateAssistantAIAgentResponse;
    };
    sdk: {
      input: UpdateAssistantAIAgentCommandInput;
      output: UpdateAssistantAIAgentCommandOutput;
    };
  };
}
