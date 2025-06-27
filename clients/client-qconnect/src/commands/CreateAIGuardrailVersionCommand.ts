// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateAIGuardrailVersionRequest,
  CreateAIGuardrailVersionResponse,
  CreateAIGuardrailVersionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateAIGuardrailVersionCommand, se_CreateAIGuardrailVersionCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAIGuardrailVersionCommand}.
 */
export interface CreateAIGuardrailVersionCommandInput extends CreateAIGuardrailVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateAIGuardrailVersionCommand}.
 */
export interface CreateAIGuardrailVersionCommandOutput extends CreateAIGuardrailVersionResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Q in Connect AI Guardrail version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, CreateAIGuardrailVersionCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, CreateAIGuardrailVersionCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * const client = new QConnectClient(config);
 * const input = { // CreateAIGuardrailVersionRequest
 *   assistantId: "STRING_VALUE", // required
 *   aiGuardrailId: "STRING_VALUE", // required
 *   modifiedTime: new Date("TIMESTAMP"),
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateAIGuardrailVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateAIGuardrailVersionResponse
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
 * //   versionNumber: Number("long"),
 * // };
 *
 * ```
 *
 * @param CreateAIGuardrailVersionCommandInput - {@link CreateAIGuardrailVersionCommandInput}
 * @returns {@link CreateAIGuardrailVersionCommandOutput}
 * @see {@link CreateAIGuardrailVersionCommandInput} for command's `input` shape.
 * @see {@link CreateAIGuardrailVersionCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *       resource. For example, if you're using a <code>Create</code> API (such as
 *         <code>CreateAssistant</code>) that accepts name, a conflicting resource (usually with the
 *       same name) is being created or mutated.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You've exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use service quotas to request a service quota increase.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
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
export class CreateAIGuardrailVersionCommand extends $Command
  .classBuilder<
    CreateAIGuardrailVersionCommandInput,
    CreateAIGuardrailVersionCommandOutput,
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
  .s("WisdomService", "CreateAIGuardrailVersion", {})
  .n("QConnectClient", "CreateAIGuardrailVersionCommand")
  .f(void 0, CreateAIGuardrailVersionResponseFilterSensitiveLog)
  .ser(se_CreateAIGuardrailVersionCommand)
  .de(de_CreateAIGuardrailVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAIGuardrailVersionRequest;
      output: CreateAIGuardrailVersionResponse;
    };
    sdk: {
      input: CreateAIGuardrailVersionCommandInput;
      output: CreateAIGuardrailVersionCommandOutput;
    };
  };
}
