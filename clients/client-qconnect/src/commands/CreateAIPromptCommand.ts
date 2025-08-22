// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateAIPromptRequest,
  CreateAIPromptRequestFilterSensitiveLog,
  CreateAIPromptResponse,
  CreateAIPromptResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateAIPromptCommand, se_CreateAIPromptCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAIPromptCommand}.
 */
export interface CreateAIPromptCommandInput extends CreateAIPromptRequest {}
/**
 * @public
 *
 * The output of {@link CreateAIPromptCommand}.
 */
export interface CreateAIPromptCommandOutput extends CreateAIPromptResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Q in Connect AI Prompt.</p> <note> <p>For more information on supported models, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-ai-prompts.html#cli-create-aiprompt">Supported models for system and custom prompts</a>.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, CreateAIPromptCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, CreateAIPromptCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * const client = new QConnectClient(config);
 * const input = { // CreateAIPromptRequest
 *   clientToken: "STRING_VALUE",
 *   assistantId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   type: "STRING_VALUE", // required
 *   templateConfiguration: { // AIPromptTemplateConfiguration Union: only one key present
 *     textFullAIPromptEditTemplateConfiguration: { // TextFullAIPromptEditTemplateConfiguration
 *       text: "STRING_VALUE", // required
 *     },
 *   },
 *   visibilityStatus: "STRING_VALUE", // required
 *   templateType: "STRING_VALUE", // required
 *   modelId: "STRING_VALUE", // required
 *   apiFormat: "STRING_VALUE", // required
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   description: "STRING_VALUE",
 * };
 * const command = new CreateAIPromptCommand(input);
 * const response = await client.send(command);
 * // { // CreateAIPromptResponse
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
 * @param CreateAIPromptCommandInput - {@link CreateAIPromptCommandInput}
 * @returns {@link CreateAIPromptCommandOutput}
 * @see {@link CreateAIPromptCommandInput} for command's `input` shape.
 * @see {@link CreateAIPromptCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You've exceeded your service quota. To perform the requested action, remove some of the relevant resources, or use service quotas to request a service quota increase.</p>
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
export class CreateAIPromptCommand extends $Command
  .classBuilder<
    CreateAIPromptCommandInput,
    CreateAIPromptCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "CreateAIPrompt", {})
  .n("QConnectClient", "CreateAIPromptCommand")
  .f(CreateAIPromptRequestFilterSensitiveLog, CreateAIPromptResponseFilterSensitiveLog)
  .ser(se_CreateAIPromptCommand)
  .de(de_CreateAIPromptCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAIPromptRequest;
      output: CreateAIPromptResponse;
    };
    sdk: {
      input: CreateAIPromptCommandInput;
      output: CreateAIPromptCommandOutput;
    };
  };
}
