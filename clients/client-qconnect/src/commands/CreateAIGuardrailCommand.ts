// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateAIGuardrailRequest, CreateAIGuardrailResponse } from "../models/models_0";
import type { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";
import { CreateAIGuardrail } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAIGuardrailCommand}.
 */
export interface CreateAIGuardrailCommandInput extends CreateAIGuardrailRequest {}
/**
 * @public
 *
 * The output of {@link CreateAIGuardrailCommand}.
 */
export interface CreateAIGuardrailCommandOutput extends CreateAIGuardrailResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Q in Connect AI Guardrail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, CreateAIGuardrailCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, CreateAIGuardrailCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // CreateAIGuardrailRequest
 *   clientToken: "STRING_VALUE",
 *   assistantId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   blockedInputMessaging: "STRING_VALUE", // required
 *   blockedOutputsMessaging: "STRING_VALUE", // required
 *   visibilityStatus: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   topicPolicyConfig: { // AIGuardrailTopicPolicyConfig
 *     topicsConfig: [ // GuardrailTopicsConfig // required
 *       { // GuardrailTopicConfig
 *         name: "STRING_VALUE", // required
 *         definition: "STRING_VALUE", // required
 *         examples: [ // GuardrailTopicExamples
 *           "STRING_VALUE",
 *         ],
 *         type: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   contentPolicyConfig: { // AIGuardrailContentPolicyConfig
 *     filtersConfig: [ // GuardrailContentFiltersConfig // required
 *       { // GuardrailContentFilterConfig
 *         type: "STRING_VALUE", // required
 *         inputStrength: "STRING_VALUE", // required
 *         outputStrength: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   wordPolicyConfig: { // AIGuardrailWordPolicyConfig
 *     wordsConfig: [ // GuardrailWordsConfig
 *       { // GuardrailWordConfig
 *         text: "STRING_VALUE", // required
 *       },
 *     ],
 *     managedWordListsConfig: [ // GuardrailManagedWordListsConfig
 *       { // GuardrailManagedWordsConfig
 *         type: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   sensitiveInformationPolicyConfig: { // AIGuardrailSensitiveInformationPolicyConfig
 *     piiEntitiesConfig: [ // GuardrailPiiEntitiesConfig
 *       { // GuardrailPiiEntityConfig
 *         type: "STRING_VALUE", // required
 *         action: "STRING_VALUE", // required
 *       },
 *     ],
 *     regexesConfig: [ // GuardrailRegexesConfig
 *       { // GuardrailRegexConfig
 *         name: "STRING_VALUE", // required
 *         description: "STRING_VALUE",
 *         pattern: "STRING_VALUE", // required
 *         action: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   contextualGroundingPolicyConfig: { // AIGuardrailContextualGroundingPolicyConfig
 *     filtersConfig: [ // GuardrailContextualGroundingFiltersConfig // required
 *       { // GuardrailContextualGroundingFilterConfig
 *         type: "STRING_VALUE", // required
 *         threshold: Number("double"), // required
 *       },
 *     ],
 *   },
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAIGuardrailCommand(input);
 * const response = await client.send(command);
 * // { // CreateAIGuardrailResponse
 * //   aiGuardrail: { // AIGuardrailData
 * //     assistantId: "STRING_VALUE", // required
 * //     assistantArn: "STRING_VALUE", // required
 * //     aiGuardrailArn: "STRING_VALUE", // required
 * //     aiGuardrailId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     visibilityStatus: "STRING_VALUE", // required
 * //     blockedInputMessaging: "STRING_VALUE", // required
 * //     blockedOutputsMessaging: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     topicPolicyConfig: { // AIGuardrailTopicPolicyConfig
 * //       topicsConfig: [ // GuardrailTopicsConfig // required
 * //         { // GuardrailTopicConfig
 * //           name: "STRING_VALUE", // required
 * //           definition: "STRING_VALUE", // required
 * //           examples: [ // GuardrailTopicExamples
 * //             "STRING_VALUE",
 * //           ],
 * //           type: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     contentPolicyConfig: { // AIGuardrailContentPolicyConfig
 * //       filtersConfig: [ // GuardrailContentFiltersConfig // required
 * //         { // GuardrailContentFilterConfig
 * //           type: "STRING_VALUE", // required
 * //           inputStrength: "STRING_VALUE", // required
 * //           outputStrength: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     wordPolicyConfig: { // AIGuardrailWordPolicyConfig
 * //       wordsConfig: [ // GuardrailWordsConfig
 * //         { // GuardrailWordConfig
 * //           text: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       managedWordListsConfig: [ // GuardrailManagedWordListsConfig
 * //         { // GuardrailManagedWordsConfig
 * //           type: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     sensitiveInformationPolicyConfig: { // AIGuardrailSensitiveInformationPolicyConfig
 * //       piiEntitiesConfig: [ // GuardrailPiiEntitiesConfig
 * //         { // GuardrailPiiEntityConfig
 * //           type: "STRING_VALUE", // required
 * //           action: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       regexesConfig: [ // GuardrailRegexesConfig
 * //         { // GuardrailRegexConfig
 * //           name: "STRING_VALUE", // required
 * //           description: "STRING_VALUE",
 * //           pattern: "STRING_VALUE", // required
 * //           action: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     contextualGroundingPolicyConfig: { // AIGuardrailContextualGroundingPolicyConfig
 * //       filtersConfig: [ // GuardrailContextualGroundingFiltersConfig // required
 * //         { // GuardrailContextualGroundingFilterConfig
 * //           type: "STRING_VALUE", // required
 * //           threshold: Number("double"), // required
 * //         },
 * //       ],
 * //     },
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     status: "STRING_VALUE",
 * //     modifiedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAIGuardrailCommandInput - {@link CreateAIGuardrailCommandInput}
 * @returns {@link CreateAIGuardrailCommandOutput}
 * @see {@link CreateAIGuardrailCommandInput} for command's `input` shape.
 * @see {@link CreateAIGuardrailCommandOutput} for command's `response` shape.
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
export class CreateAIGuardrailCommand extends $Command
  .classBuilder<
    CreateAIGuardrailCommandInput,
    CreateAIGuardrailCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "CreateAIGuardrail", {})
  .n("QConnectClient", "CreateAIGuardrailCommand")
  .sc(CreateAIGuardrail)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAIGuardrailRequest;
      output: CreateAIGuardrailResponse;
    };
    sdk: {
      input: CreateAIGuardrailCommandInput;
      output: CreateAIGuardrailCommandOutput;
    };
  };
}
