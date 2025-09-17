// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { SearchAssociatedTranscriptsRequest, SearchAssociatedTranscriptsResponse } from "../models/models_1";
import {
  de_SearchAssociatedTranscriptsCommand,
  se_SearchAssociatedTranscriptsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchAssociatedTranscriptsCommand}.
 */
export interface SearchAssociatedTranscriptsCommandInput extends SearchAssociatedTranscriptsRequest {}
/**
 * @public
 *
 * The output of {@link SearchAssociatedTranscriptsCommand}.
 */
export interface SearchAssociatedTranscriptsCommandOutput
  extends SearchAssociatedTranscriptsResponse,
    __MetadataBearer {}

/**
 * <p>Search for associated transcripts that meet the specified
 *          criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, SearchAssociatedTranscriptsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, SearchAssociatedTranscriptsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // SearchAssociatedTranscriptsRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   botRecommendationId: "STRING_VALUE", // required
 *   searchOrder: "Ascending" || "Descending",
 *   filters: [ // AssociatedTranscriptFilters // required
 *     { // AssociatedTranscriptFilter
 *       name: "IntentId" || "SlotTypeId", // required
 *       values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextIndex: Number("int"),
 * };
 * const command = new SearchAssociatedTranscriptsCommand(input);
 * const response = await client.send(command);
 * // { // SearchAssociatedTranscriptsResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   botRecommendationId: "STRING_VALUE",
 * //   nextIndex: Number("int"),
 * //   associatedTranscripts: [ // AssociatedTranscriptList
 * //     { // AssociatedTranscript
 * //       transcript: "STRING_VALUE",
 * //     },
 * //   ],
 * //   totalResults: Number("int"),
 * // };
 *
 * ```
 *
 * @param SearchAssociatedTranscriptsCommandInput - {@link SearchAssociatedTranscriptsCommandInput}
 * @returns {@link SearchAssociatedTranscriptsCommandOutput}
 * @see {@link SearchAssociatedTranscriptsCommandInput} for command's `input` shape.
 * @see {@link SearchAssociatedTranscriptsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class SearchAssociatedTranscriptsCommand extends $Command
  .classBuilder<
    SearchAssociatedTranscriptsCommandInput,
    SearchAssociatedTranscriptsCommandOutput,
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
  .s("LexModelBuildingServiceV2", "SearchAssociatedTranscripts", {})
  .n("LexModelsV2Client", "SearchAssociatedTranscriptsCommand")
  .f(void 0, void 0)
  .ser(se_SearchAssociatedTranscriptsCommand)
  .de(de_SearchAssociatedTranscriptsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchAssociatedTranscriptsRequest;
      output: SearchAssociatedTranscriptsResponse;
    };
    sdk: {
      input: SearchAssociatedTranscriptsCommandInput;
      output: SearchAssociatedTranscriptsCommandOutput;
    };
  };
}
