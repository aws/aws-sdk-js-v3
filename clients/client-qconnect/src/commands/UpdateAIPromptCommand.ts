// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAIPromptRequest, UpdateAIPromptResponse } from "../models/models_0";
import { UpdateAIPrompt$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates an AI Prompt.
 *
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
 *   inferenceConfiguration: { // AIPromptInferenceConfiguration
 *     temperature: Number("float"),
 *     topP: Number("float"),
 *     topK: Number("int"),
 *     maxTokensToSample: Number("int"),
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
 * //     inferenceConfiguration: { // AIPromptInferenceConfiguration
 * //       temperature: Number("float"),
 * //       topP: Number("float"),
 * //       topK: Number("int"),
 * //       maxTokensToSample: Number("int"),
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource. For example, if you're using a `Create` API (such as `CreateAssistant`) that accepts name, a conflicting resource (usually with the same name) is being created or mutated.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link QConnectServiceException}
 *
 * Base exception class for all service exceptions from QConnect service.
 *
 * @public
 */
export class UpdateAIPromptCommand extends command<UpdateAIPromptCommandInput, UpdateAIPromptCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAIPrompt",
  UpdateAIPrompt$
) {
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
