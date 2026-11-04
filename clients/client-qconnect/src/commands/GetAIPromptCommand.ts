// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAIPromptRequest, GetAIPromptResponse } from "../models/models_0";
import { GetAIPrompt$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAIPromptCommand}.
 */
export interface GetAIPromptCommandInput extends GetAIPromptRequest {}
/**
 * @public
 *
 * The output of {@link GetAIPromptCommand}.
 */
export interface GetAIPromptCommandOutput extends GetAIPromptResponse, __MetadataBearer {}

/**
 * Gets and Amazon Q in Connect AI Prompt.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, GetAIPromptCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, GetAIPromptCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // GetAIPromptRequest
 *   assistantId: "STRING_VALUE", // required
 *   aiPromptId: "STRING_VALUE", // required
 * };
 * const command = new GetAIPromptCommand(input);
 * const response = await client.send(command);
 * // { // GetAIPromptResponse
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
 * //   versionNumber: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetAIPromptCommandInput - {@link GetAIPromptCommandInput}
 * @returns {@link GetAIPromptCommandOutput}
 * @see {@link GetAIPromptCommandInput} for command's `input` shape.
 * @see {@link GetAIPromptCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
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
export class GetAIPromptCommand extends command<GetAIPromptCommandInput, GetAIPromptCommandOutput>(
  _ep0,
  _mw0,
  "GetAIPrompt",
  GetAIPrompt$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAIPromptRequest;
      output: GetAIPromptResponse;
    };
    sdk: {
      input: GetAIPromptCommandInput;
      output: GetAIPromptCommandOutput;
    };
  };
}
