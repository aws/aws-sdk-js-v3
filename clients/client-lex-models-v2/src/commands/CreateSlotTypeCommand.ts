// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { CreateSlotTypeRequest, CreateSlotTypeResponse } from "../models/models_0";
import { CreateSlotType } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSlotTypeCommand}.
 */
export interface CreateSlotTypeCommandInput extends CreateSlotTypeRequest {}
/**
 * @public
 *
 * The output of {@link CreateSlotTypeCommand}.
 */
export interface CreateSlotTypeCommandOutput extends CreateSlotTypeResponse, __MetadataBearer {}

/**
 * <p>Creates a custom slot type</p>
 *          <p> To create a custom slot type, specify a name for the slot type and
 *          a set of enumeration values, the values that a slot of this type can
 *          assume. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateSlotTypeCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateSlotTypeCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // CreateSlotTypeRequest
 *   slotTypeName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   slotTypeValues: [ // SlotTypeValues
 *     { // SlotTypeValue
 *       sampleValue: { // SampleValue
 *         value: "STRING_VALUE", // required
 *       },
 *       synonyms: [ // SynonymList
 *         {
 *           value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   ],
 *   valueSelectionSetting: { // SlotValueSelectionSetting
 *     resolutionStrategy: "OriginalValue" || "TopResolution" || "Concatenation", // required
 *     regexFilter: { // SlotValueRegexFilter
 *       pattern: "STRING_VALUE", // required
 *     },
 *     advancedRecognitionSetting: { // AdvancedRecognitionSetting
 *       audioRecognitionStrategy: "UseSlotValuesAsCustomVocabulary",
 *     },
 *   },
 *   parentSlotTypeSignature: "STRING_VALUE",
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   externalSourceSetting: { // ExternalSourceSetting
 *     grammarSlotTypeSetting: { // GrammarSlotTypeSetting
 *       source: { // GrammarSlotTypeSource
 *         s3BucketName: "STRING_VALUE", // required
 *         s3ObjectKey: "STRING_VALUE", // required
 *         kmsKeyArn: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   compositeSlotTypeSetting: { // CompositeSlotTypeSetting
 *     subSlots: [ // SubSlotTypeList
 *       { // SubSlotTypeComposition
 *         name: "STRING_VALUE", // required
 *         slotTypeId: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateSlotTypeCommand(input);
 * const response = await client.send(command);
 * // { // CreateSlotTypeResponse
 * //   slotTypeId: "STRING_VALUE",
 * //   slotTypeName: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   slotTypeValues: [ // SlotTypeValues
 * //     { // SlotTypeValue
 * //       sampleValue: { // SampleValue
 * //         value: "STRING_VALUE", // required
 * //       },
 * //       synonyms: [ // SynonymList
 * //         {
 * //           value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   valueSelectionSetting: { // SlotValueSelectionSetting
 * //     resolutionStrategy: "OriginalValue" || "TopResolution" || "Concatenation", // required
 * //     regexFilter: { // SlotValueRegexFilter
 * //       pattern: "STRING_VALUE", // required
 * //     },
 * //     advancedRecognitionSetting: { // AdvancedRecognitionSetting
 * //       audioRecognitionStrategy: "UseSlotValuesAsCustomVocabulary",
 * //     },
 * //   },
 * //   parentSlotTypeSignature: "STRING_VALUE",
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   externalSourceSetting: { // ExternalSourceSetting
 * //     grammarSlotTypeSetting: { // GrammarSlotTypeSetting
 * //       source: { // GrammarSlotTypeSource
 * //         s3BucketName: "STRING_VALUE", // required
 * //         s3ObjectKey: "STRING_VALUE", // required
 * //         kmsKeyArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   compositeSlotTypeSetting: { // CompositeSlotTypeSetting
 * //     subSlots: [ // SubSlotTypeList
 * //       { // SubSlotTypeComposition
 * //         name: "STRING_VALUE", // required
 * //         slotTypeId: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSlotTypeCommandInput - {@link CreateSlotTypeCommandInput}
 * @returns {@link CreateSlotTypeCommandOutput}
 * @see {@link CreateSlotTypeCommandInput} for command's `input` shape.
 * @see {@link CreateSlotTypeCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The action that you tried to perform couldn't be completed because
 *          the resource is in a conflicting state. For example, deleting a bot
 *          that is in the CREATING state. Try your request again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>Your request couldn't be completed because one or more request
 *          fields aren't valid. Check the fields in your request and try
 *          again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 *
 * @public
 */
export class CreateSlotTypeCommand extends $Command
  .classBuilder<
    CreateSlotTypeCommandInput,
    CreateSlotTypeCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "CreateSlotType", {})
  .n("LexModelsV2Client", "CreateSlotTypeCommand")
  .sc(CreateSlotType)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSlotTypeRequest;
      output: CreateSlotTypeResponse;
    };
    sdk: {
      input: CreateSlotTypeCommandInput;
      output: CreateSlotTypeCommandOutput;
    };
  };
}
