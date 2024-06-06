// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { BatchDeleteCustomVocabularyItemRequest, BatchDeleteCustomVocabularyItemResponse } from "../models/models_0";
import {
  de_BatchDeleteCustomVocabularyItemCommand,
  se_BatchDeleteCustomVocabularyItemCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteCustomVocabularyItemCommand}.
 */
export interface BatchDeleteCustomVocabularyItemCommandInput extends BatchDeleteCustomVocabularyItemRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteCustomVocabularyItemCommand}.
 */
export interface BatchDeleteCustomVocabularyItemCommandOutput
  extends BatchDeleteCustomVocabularyItemResponse,
    __MetadataBearer {}

/**
 * <p>Delete a batch of custom vocabulary items for a given bot locale's
 *          custom vocabulary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, BatchDeleteCustomVocabularyItemCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, BatchDeleteCustomVocabularyItemCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // BatchDeleteCustomVocabularyItemRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   customVocabularyItemList: [ // DeleteCustomVocabularyItemsList // required
 *     { // CustomVocabularyEntryId
 *       itemId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchDeleteCustomVocabularyItemCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteCustomVocabularyItemResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   errors: [ // FailedCustomVocabularyItems
 * //     { // FailedCustomVocabularyItem
 * //       itemId: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //       errorCode: "DUPLICATE_INPUT" || "RESOURCE_DOES_NOT_EXIST" || "RESOURCE_ALREADY_EXISTS" || "INTERNAL_SERVER_FAILURE",
 * //     },
 * //   ],
 * //   resources: [ // CustomVocabularyItems
 * //     { // CustomVocabularyItem
 * //       itemId: "STRING_VALUE", // required
 * //       phrase: "STRING_VALUE", // required
 * //       weight: Number("int"),
 * //       displayAs: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteCustomVocabularyItemCommandInput - {@link BatchDeleteCustomVocabularyItemCommandInput}
 * @returns {@link BatchDeleteCustomVocabularyItemCommandOutput}
 * @see {@link BatchDeleteCustomVocabularyItemCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteCustomVocabularyItemCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
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
 * @public
 */
export class BatchDeleteCustomVocabularyItemCommand extends $Command
  .classBuilder<
    BatchDeleteCustomVocabularyItemCommandInput,
    BatchDeleteCustomVocabularyItemCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LexModelBuildingServiceV2", "BatchDeleteCustomVocabularyItem", {})
  .n("LexModelsV2Client", "BatchDeleteCustomVocabularyItemCommand")
  .f(void 0, void 0)
  .ser(se_BatchDeleteCustomVocabularyItemCommand)
  .de(de_BatchDeleteCustomVocabularyItemCommand)
  .build() {}
