// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import type { ListSlotsRequest, ListSlotsResponse } from "../models/models_1";
import { ListSlots } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSlotsCommand}.
 */
export interface ListSlotsCommandInput extends ListSlotsRequest {}
/**
 * @public
 *
 * The output of {@link ListSlotsCommand}.
 */
export interface ListSlotsCommandOutput extends ListSlotsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of slots that match the specified criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListSlotsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListSlotsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // ListSlotsRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   intentId: "STRING_VALUE", // required
 *   sortBy: { // SlotSortBy
 *     attribute: "SlotName" || "LastUpdatedDateTime", // required
 *     order: "Ascending" || "Descending", // required
 *   },
 *   filters: [ // SlotFilters
 *     { // SlotFilter
 *       name: "SlotName", // required
 *       values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       operator: "CO" || "EQ", // required
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSlotsCommand(input);
 * const response = await client.send(command);
 * // { // ListSlotsResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   intentId: "STRING_VALUE",
 * //   slotSummaries: [ // SlotSummaryList
 * //     { // SlotSummary
 * //       slotId: "STRING_VALUE",
 * //       slotName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       slotConstraint: "Required" || "Optional",
 * //       slotTypeId: "STRING_VALUE",
 * //       valueElicitationPromptSpecification: { // PromptSpecification
 * //         messageGroups: [ // MessageGroupsList // required
 * //           { // MessageGroup
 * //             message: { // Message
 * //               plainTextMessage: { // PlainTextMessage
 * //                 value: "STRING_VALUE", // required
 * //               },
 * //               customPayload: { // CustomPayload
 * //                 value: "STRING_VALUE", // required
 * //               },
 * //               ssmlMessage: { // SSMLMessage
 * //                 value: "STRING_VALUE", // required
 * //               },
 * //               imageResponseCard: { // ImageResponseCard
 * //                 title: "STRING_VALUE", // required
 * //                 subtitle: "STRING_VALUE",
 * //                 imageUrl: "STRING_VALUE",
 * //                 buttons: [ // ButtonsList
 * //                   { // Button
 * //                     text: "STRING_VALUE", // required
 * //                     value: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //               },
 * //             },
 * //             variations: [ // MessageVariationsList
 * //               {
 * //                 plainTextMessage: {
 * //                   value: "STRING_VALUE", // required
 * //                 },
 * //                 customPayload: {
 * //                   value: "STRING_VALUE", // required
 * //                 },
 * //                 ssmlMessage: {
 * //                   value: "STRING_VALUE", // required
 * //                 },
 * //                 imageResponseCard: {
 * //                   title: "STRING_VALUE", // required
 * //                   subtitle: "STRING_VALUE",
 * //                   imageUrl: "STRING_VALUE",
 * //                   buttons: [
 * //                     {
 * //                       text: "STRING_VALUE", // required
 * //                       value: "STRING_VALUE", // required
 * //                     },
 * //                   ],
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         maxRetries: Number("int"), // required
 * //         allowInterrupt: true || false,
 * //         messageSelectionStrategy: "Random" || "Ordered",
 * //         promptAttemptsSpecification: { // PromptAttemptsSpecificationMap
 * //           "<keys>": { // PromptAttemptSpecification
 * //             allowInterrupt: true || false,
 * //             allowedInputTypes: { // AllowedInputTypes
 * //               allowAudioInput: true || false, // required
 * //               allowDTMFInput: true || false, // required
 * //             },
 * //             audioAndDTMFInputSpecification: { // AudioAndDTMFInputSpecification
 * //               startTimeoutMs: Number("int"), // required
 * //               audioSpecification: { // AudioSpecification
 * //                 maxLengthMs: Number("int"), // required
 * //                 endTimeoutMs: Number("int"), // required
 * //               },
 * //               dtmfSpecification: { // DTMFSpecification
 * //                 maxLength: Number("int"), // required
 * //                 endTimeoutMs: Number("int"), // required
 * //                 deletionCharacter: "STRING_VALUE", // required
 * //                 endCharacter: "STRING_VALUE", // required
 * //               },
 * //             },
 * //             textInputSpecification: { // TextInputSpecification
 * //               startTimeoutMs: Number("int"), // required
 * //             },
 * //           },
 * //         },
 * //       },
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSlotsCommandInput - {@link ListSlotsCommandInput}
 * @returns {@link ListSlotsCommandOutput}
 * @see {@link ListSlotsCommandInput} for command's `input` shape.
 * @see {@link ListSlotsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
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
export class ListSlotsCommand extends $Command
  .classBuilder<
    ListSlotsCommandInput,
    ListSlotsCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "ListSlots", {})
  .n("LexModelsV2Client", "ListSlotsCommand")
  .sc(ListSlots)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSlotsRequest;
      output: ListSlotsResponse;
    };
    sdk: {
      input: ListSlotsCommandInput;
      output: ListSlotsCommandOutput;
    };
  };
}
