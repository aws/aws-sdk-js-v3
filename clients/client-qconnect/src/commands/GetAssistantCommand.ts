// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetAssistantRequest, GetAssistantResponse } from "../models/models_0";
import type { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";
import { GetAssistant } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAssistantCommand}.
 */
export interface GetAssistantCommandInput extends GetAssistantRequest {}
/**
 * @public
 *
 * The output of {@link GetAssistantCommand}.
 */
export interface GetAssistantCommandOutput extends GetAssistantResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about an assistant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, GetAssistantCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, GetAssistantCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // GetAssistantRequest
 *   assistantId: "STRING_VALUE", // required
 * };
 * const command = new GetAssistantCommand(input);
 * const response = await client.send(command);
 * // { // GetAssistantResponse
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
 * @param GetAssistantCommandInput - {@link GetAssistantCommandInput}
 * @returns {@link GetAssistantCommandOutput}
 * @see {@link GetAssistantCommandInput} for command's `input` shape.
 * @see {@link GetAssistantCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
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
export class GetAssistantCommand extends $Command
  .classBuilder<
    GetAssistantCommandInput,
    GetAssistantCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "GetAssistant", {})
  .n("QConnectClient", "GetAssistantCommand")
  .sc(GetAssistant)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAssistantRequest;
      output: GetAssistantResponse;
    };
    sdk: {
      input: GetAssistantCommandInput;
      output: GetAssistantCommandOutput;
    };
  };
}
