// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAIGuardrailRequest, UpdateAIGuardrailResponse } from "../models/models_0";
import { UpdateAIGuardrail$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAIGuardrailCommand}.
 */
export interface UpdateAIGuardrailCommandInput extends UpdateAIGuardrailRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAIGuardrailCommand}.
 */
export interface UpdateAIGuardrailCommandOutput extends UpdateAIGuardrailResponse, __MetadataBearer {}

/**
 * Updates an AI Guardrail.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, UpdateAIGuardrailCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, UpdateAIGuardrailCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // UpdateAIGuardrailRequest
 *   clientToken: "STRING_VALUE",
 *   assistantId: "STRING_VALUE", // required
 *   aiGuardrailId: "STRING_VALUE", // required
 *   visibilityStatus: "STRING_VALUE", // required
 *   blockedInputMessaging: "STRING_VALUE", // required
 *   blockedOutputsMessaging: "STRING_VALUE", // required
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
 * };
 * const command = new UpdateAIGuardrailCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAIGuardrailResponse
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
 * @param UpdateAIGuardrailCommandInput - {@link UpdateAIGuardrailCommandInput}
 * @returns {@link UpdateAIGuardrailCommandOutput}
 * @see {@link UpdateAIGuardrailCommandInput} for command's `input` shape.
 * @see {@link UpdateAIGuardrailCommandOutput} for command's `response` shape.
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
export class UpdateAIGuardrailCommand extends command<UpdateAIGuardrailCommandInput, UpdateAIGuardrailCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAIGuardrail",
  UpdateAIGuardrail$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAIGuardrailRequest;
      output: UpdateAIGuardrailResponse;
    };
    sdk: {
      input: UpdateAIGuardrailCommandInput;
      output: UpdateAIGuardrailCommandOutput;
    };
  };
}
