// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import type { ListBuiltInSlotTypesRequest, ListBuiltInSlotTypesResponse } from "../models/models_1";
import { ListBuiltInSlotTypes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBuiltInSlotTypesCommand}.
 */
export interface ListBuiltInSlotTypesCommandInput extends ListBuiltInSlotTypesRequest {}
/**
 * @public
 *
 * The output of {@link ListBuiltInSlotTypesCommand}.
 */
export interface ListBuiltInSlotTypesCommandOutput extends ListBuiltInSlotTypesResponse, __MetadataBearer {}

/**
 * <p>Gets a list of built-in slot types that meet the specified
 *          criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListBuiltInSlotTypesCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListBuiltInSlotTypesCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // ListBuiltInSlotTypesRequest
 *   localeId: "STRING_VALUE", // required
 *   sortBy: { // BuiltInSlotTypeSortBy
 *     attribute: "SlotTypeSignature", // required
 *     order: "Ascending" || "Descending", // required
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListBuiltInSlotTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListBuiltInSlotTypesResponse
 * //   builtInSlotTypeSummaries: [ // BuiltInSlotTypeSummaryList
 * //     { // BuiltInSlotTypeSummary
 * //       slotTypeSignature: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBuiltInSlotTypesCommandInput - {@link ListBuiltInSlotTypesCommandInput}
 * @returns {@link ListBuiltInSlotTypesCommandOutput}
 * @see {@link ListBuiltInSlotTypesCommandInput} for command's `input` shape.
 * @see {@link ListBuiltInSlotTypesCommandOutput} for command's `response` shape.
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
export class ListBuiltInSlotTypesCommand extends $Command
  .classBuilder<
    ListBuiltInSlotTypesCommandInput,
    ListBuiltInSlotTypesCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "ListBuiltInSlotTypes", {})
  .n("LexModelsV2Client", "ListBuiltInSlotTypesCommand")
  .sc(ListBuiltInSlotTypes$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBuiltInSlotTypesRequest;
      output: ListBuiltInSlotTypesResponse;
    };
    sdk: {
      input: ListBuiltInSlotTypesCommandInput;
      output: ListBuiltInSlotTypesCommandOutput;
    };
  };
}
