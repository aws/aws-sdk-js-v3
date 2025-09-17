// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateAIGuardrailRequest,
  UpdateAIGuardrailRequestFilterSensitiveLog,
  UpdateAIGuardrailResponse,
  UpdateAIGuardrailResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateAIGuardrailCommand, se_UpdateAIGuardrailCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates an AI Guardrail.</p>
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
export class UpdateAIGuardrailCommand extends $Command
  .classBuilder<
    UpdateAIGuardrailCommandInput,
    UpdateAIGuardrailCommandOutput,
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
  .s("WisdomService", "UpdateAIGuardrail", {})
  .n("QConnectClient", "UpdateAIGuardrailCommand")
  .f(UpdateAIGuardrailRequestFilterSensitiveLog, UpdateAIGuardrailResponseFilterSensitiveLog)
  .ser(se_UpdateAIGuardrailCommand)
  .de(de_UpdateAIGuardrailCommand)
  .build() {
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
