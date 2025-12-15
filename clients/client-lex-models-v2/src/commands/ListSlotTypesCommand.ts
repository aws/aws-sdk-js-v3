// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import type { ListSlotTypesRequest, ListSlotTypesResponse } from "../models/models_1";
import { ListSlotTypes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSlotTypesCommand}.
 */
export interface ListSlotTypesCommandInput extends ListSlotTypesRequest {}
/**
 * @public
 *
 * The output of {@link ListSlotTypesCommand}.
 */
export interface ListSlotTypesCommandOutput extends ListSlotTypesResponse, __MetadataBearer {}

/**
 * <p>Gets a list of slot types that match the specified criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListSlotTypesCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListSlotTypesCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // ListSlotTypesRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   sortBy: { // SlotTypeSortBy
 *     attribute: "SlotTypeName" || "LastUpdatedDateTime", // required
 *     order: "Ascending" || "Descending", // required
 *   },
 *   filters: [ // SlotTypeFilters
 *     { // SlotTypeFilter
 *       name: "SlotTypeName" || "ExternalSourceType", // required
 *       values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       operator: "CO" || "EQ", // required
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSlotTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListSlotTypesResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   slotTypeSummaries: [ // SlotTypeSummaryList
 * //     { // SlotTypeSummary
 * //       slotTypeId: "STRING_VALUE",
 * //       slotTypeName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       parentSlotTypeSignature: "STRING_VALUE",
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       slotTypeCategory: "Custom" || "Extended" || "ExternalGrammar" || "Composite",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSlotTypesCommandInput - {@link ListSlotTypesCommandInput}
 * @returns {@link ListSlotTypesCommandOutput}
 * @see {@link ListSlotTypesCommandInput} for command's `input` shape.
 * @see {@link ListSlotTypesCommandOutput} for command's `response` shape.
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
export class ListSlotTypesCommand extends $Command
  .classBuilder<
    ListSlotTypesCommandInput,
    ListSlotTypesCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "ListSlotTypes", {})
  .n("LexModelsV2Client", "ListSlotTypesCommand")
  .sc(ListSlotTypes$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSlotTypesRequest;
      output: ListSlotTypesResponse;
    };
    sdk: {
      input: ListSlotTypesCommandInput;
      output: ListSlotTypesCommandOutput;
    };
  };
}
