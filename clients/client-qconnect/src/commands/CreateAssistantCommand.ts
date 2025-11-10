// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAssistantRequest, CreateAssistantResponse } from "../models/models_0";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";
import { CreateAssistant } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAssistantCommand}.
 */
export interface CreateAssistantCommandInput extends CreateAssistantRequest {}
/**
 * @public
 *
 * The output of {@link CreateAssistantCommand}.
 */
export interface CreateAssistantCommandOutput extends CreateAssistantResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Q in Connect assistant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, CreateAssistantCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, CreateAssistantCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // CreateAssistantRequest
 *   clientToken: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   type: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   serverSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 *     kmsKeyId: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAssistantCommand(input);
 * const response = await client.send(command);
 * // { // CreateAssistantResponse
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
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAssistantCommandInput - {@link CreateAssistantCommandInput}
 * @returns {@link CreateAssistantCommandOutput}
 * @see {@link CreateAssistantCommandInput} for command's `input` shape.
 * @see {@link CreateAssistantCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the resource. For example, if you're using a <code>Create</code> API (such as <code>CreateAssistant</code>) that accepts name, a conflicting resource (usually with the same name) is being created or mutated.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You've exceeded your service quota. To perform the requested action, remove some of the relevant resources, or use service quotas to request a service quota increase.</p>
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
export class CreateAssistantCommand extends $Command
  .classBuilder<
    CreateAssistantCommandInput,
    CreateAssistantCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "CreateAssistant", {})
  .n("QConnectClient", "CreateAssistantCommand")
  .sc(CreateAssistant)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAssistantRequest;
      output: CreateAssistantResponse;
    };
    sdk: {
      input: CreateAssistantCommandInput;
      output: CreateAssistantCommandOutput;
    };
  };
}
