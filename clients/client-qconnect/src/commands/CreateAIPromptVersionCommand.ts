// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAIPromptVersionRequest, CreateAIPromptVersionResponse } from "../models/models_0";
import { CreateAIPromptVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAIPromptVersionCommand}.
 */
export interface CreateAIPromptVersionCommandInput extends CreateAIPromptVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateAIPromptVersionCommand}.
 */
export interface CreateAIPromptVersionCommandOutput extends CreateAIPromptVersionResponse, __MetadataBearer {}

/**
 * Creates an Amazon Q in Connect AI Prompt version.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, CreateAIPromptVersionCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, CreateAIPromptVersionCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // CreateAIPromptVersionRequest
 *   assistantId: "STRING_VALUE", // required
 *   aiPromptId: "STRING_VALUE", // required
 *   modifiedTime: new Date("TIMESTAMP"),
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateAIPromptVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateAIPromptVersionResponse
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
 * @param CreateAIPromptVersionCommandInput - {@link CreateAIPromptVersionCommandInput}
 * @returns {@link CreateAIPromptVersionCommandOutput}
 * @see {@link CreateAIPromptVersionCommandInput} for command's `input` shape.
 * @see {@link CreateAIPromptVersionCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You've exceeded your service quota. To perform the requested action, remove some of the relevant resources, or use service quotas to request a service quota increase.
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
export class CreateAIPromptVersionCommand extends command<CreateAIPromptVersionCommandInput, CreateAIPromptVersionCommandOutput>(
  _ep0,
  _mw0,
  "CreateAIPromptVersion",
  CreateAIPromptVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAIPromptVersionRequest;
      output: CreateAIPromptVersionResponse;
    };
    sdk: {
      input: CreateAIPromptVersionCommandInput;
      output: CreateAIPromptVersionCommandOutput;
    };
  };
}
