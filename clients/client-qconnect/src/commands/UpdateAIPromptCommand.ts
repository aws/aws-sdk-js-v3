// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateAIPromptRequest, UpdateAIPromptResponse } from "../models/models_0";
import type { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";
import { UpdateAIPrompt } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAIPromptCommand}.
 */
export interface UpdateAIPromptCommandInput extends UpdateAIPromptRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAIPromptCommand}.
 */
export interface UpdateAIPromptCommandOutput extends UpdateAIPromptResponse, __MetadataBearer {}

/**
 * <p>Updates an AI Prompt.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, UpdateAIPromptCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, UpdateAIPromptCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // UpdateAIPromptRequest
 *   clientToken: "STRING_VALUE",
 *   assistantId: "STRING_VALUE", // required
 *   aiPromptId: "STRING_VALUE", // required
 *   visibilityStatus: "STRING_VALUE", // required
 *   templateConfiguration: { // AIPromptTemplateConfiguration Union: only one key present
 *     textFullAIPromptEditTemplateConfiguration: { // TextFullAIPromptEditTemplateConfiguration
 *       text: "STRING_VALUE", // required
 *     },
 *   },
 *   description: "STRING_VALUE",
 *   modelId: "STRING_VALUE",
 *   inferenceConfiguration: { // AIPromptInferenceConfiguration Union: only one key present
 *     textAIPromptInferenceConfiguration: { // TextAIPromptInferenceConfiguration
 *       temperature: Number("float"),
 *       topP: Number("float"),
 *       topK: Number("int"),
 *       maxTokensToSample: Number("int"),
 *     },
 *   },
 * };
 * const command = new UpdateAIPromptCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAIPromptResponse
 * //   aiPrompt: { // AIPromptData
 * //     assistantId: "STRING_VALUE", // required
 * //     assistantArn: "STRING_VALUE", // required
 * //     aiPromptId: "STRING_VALUE", // required
 * //     aiPromptArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     type: "STRING_VALUE", // required
 * //     templateType: "STRING_VALUE", // required
 * //     modelId: "STRING_VALUE", // required
 * //     apiFormat: "STRING_VALUE", // required
 * //     templateConfiguration: { // AIPromptTemplateConfiguration Union: only one key present
 * //       textFullAIPromptEditTemplateConfiguration: { // TextFullAIPromptEditTemplateConfiguration
 * //         text: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     inferenceConfiguration: { // AIPromptInferenceConfiguration Union: only one key present
 * //       textAIPromptInferenceConfiguration: { // TextAIPromptInferenceConfiguration
 * //         temperature: Number("float"),
 * //         topP: Number("float"),
 * //         topK: Number("int"),
 * //         maxTokensToSample: Number("int"),
 * //       },
 * //     },
 * //     modifiedTime: new Date("TIMESTAMP"),
 * //     description: "STRING_VALUE",
 * //     visibilityStatus: "STRING_VALUE", // required
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     origin: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAIPromptCommandInput - {@link UpdateAIPromptCommandInput}
 * @returns {@link UpdateAIPromptCommandOutput}
 * @see {@link UpdateAIPromptCommandInput} for command's `input` shape.
 * @see {@link UpdateAIPromptCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the resource. For example, if you're using a <code>Create</code> API (such as <code>CreateAssistant</code>) that accepts name, a conflicting resource (usually with the same name) is being created or mutated.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
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
export class UpdateAIPromptCommand extends $Command
  .classBuilder<
    UpdateAIPromptCommandInput,
    UpdateAIPromptCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "UpdateAIPrompt", {})
  .n("QConnectClient", "UpdateAIPromptCommand")
  .sc(UpdateAIPrompt)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAIPromptRequest;
      output: UpdateAIPromptResponse;
    };
    sdk: {
      input: UpdateAIPromptCommandInput;
      output: UpdateAIPromptCommandOutput;
    };
  };
}
