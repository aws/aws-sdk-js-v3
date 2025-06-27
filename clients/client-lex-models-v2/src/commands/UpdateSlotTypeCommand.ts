// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { UpdateSlotTypeRequest, UpdateSlotTypeResponse } from "../models/models_1";
import { de_UpdateSlotTypeCommand, se_UpdateSlotTypeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSlotTypeCommand}.
 */
export interface UpdateSlotTypeCommandInput extends UpdateSlotTypeRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSlotTypeCommand}.
 */
export interface UpdateSlotTypeCommandOutput extends UpdateSlotTypeResponse, __MetadataBearer {}

/**
 * <p>Updates the configuration of an existing slot type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, UpdateSlotTypeCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, UpdateSlotTypeCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // UpdateSlotTypeRequest
 *   slotTypeId: "STRING_VALUE", // required
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
 * const command = new UpdateSlotTypeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSlotTypeResponse
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
 * //   lastUpdatedDateTime: new Date("TIMESTAMP"),
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
 * @param UpdateSlotTypeCommandInput - {@link UpdateSlotTypeCommandInput}
 * @returns {@link UpdateSlotTypeCommandOutput}
 * @see {@link UpdateSlotTypeCommandInput} for command's `input` shape.
 * @see {@link UpdateSlotTypeCommandOutput} for command's `response` shape.
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
export class UpdateSlotTypeCommand extends $Command
  .classBuilder<
    UpdateSlotTypeCommandInput,
    UpdateSlotTypeCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LexModelBuildingServiceV2", "UpdateSlotType", {})
  .n("LexModelsV2Client", "UpdateSlotTypeCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSlotTypeCommand)
  .de(de_UpdateSlotTypeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSlotTypeRequest;
      output: UpdateSlotTypeResponse;
    };
    sdk: {
      input: UpdateSlotTypeCommandInput;
      output: UpdateSlotTypeCommandOutput;
    };
  };
}
