// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListSessionAnalyticsDataRequest, ListSessionAnalyticsDataResponse } from "../models/models_1";
import { ListSessionAnalyticsData } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSessionAnalyticsDataCommand}.
 */
export interface ListSessionAnalyticsDataCommandInput extends ListSessionAnalyticsDataRequest {}
/**
 * @public
 *
 * The output of {@link ListSessionAnalyticsDataCommand}.
 */
export interface ListSessionAnalyticsDataCommandOutput extends ListSessionAnalyticsDataResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of metadata for individual user sessions with your bot. The <code>startDateTime</code> and <code>endDateTime</code> fields are required. These fields define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways:</p>
 *          <ul>
 *             <li>
 *                <p>Use the <code>filters</code> field to filter the results and the <code>sortBy</code> field to specify the values by which to sort the results.</p>
 *             </li>
 *             <li>
 *                <p>Use the <code>maxResults</code> field to limit the number of results to return in a single response and the <code>nextToken</code> field to return the next batch of results if the response does not return the full set of results.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListSessionAnalyticsDataCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListSessionAnalyticsDataCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // ListSessionAnalyticsDataRequest
 *   botId: "STRING_VALUE", // required
 *   startDateTime: new Date("TIMESTAMP"), // required
 *   endDateTime: new Date("TIMESTAMP"), // required
 *   sortBy: { // SessionDataSortBy
 *     name: "ConversationStartTime" || "NumberOfTurns" || "Duration", // required
 *     order: "Ascending" || "Descending", // required
 *   },
 *   filters: [ // AnalyticsSessionFilters
 *     { // AnalyticsSessionFilter
 *       name: "BotAliasId" || "BotVersion" || "LocaleId" || "Modality" || "Channel" || "Duration" || "ConversationEndState" || "SessionId" || "OriginatingRequestId" || "IntentPath", // required
 *       operator: "EQ" || "GT" || "LT", // required
 *       values: [ // AnalyticsFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSessionAnalyticsDataCommand(input);
 * const response = await client.send(command);
 * // { // ListSessionAnalyticsDataResponse
 * //   botId: "STRING_VALUE",
 * //   nextToken: "STRING_VALUE",
 * //   sessions: [ // SessionSpecifications
 * //     { // SessionSpecification
 * //       botAliasId: "STRING_VALUE",
 * //       botVersion: "STRING_VALUE",
 * //       localeId: "STRING_VALUE",
 * //       channel: "STRING_VALUE",
 * //       sessionId: "STRING_VALUE",
 * //       conversationStartTime: new Date("TIMESTAMP"),
 * //       conversationEndTime: new Date("TIMESTAMP"),
 * //       conversationDurationSeconds: Number("long"),
 * //       conversationEndState: "Success" || "Failure" || "Dropped",
 * //       mode: "Speech" || "Text" || "DTMF" || "MultiMode",
 * //       numberOfTurns: Number("long"),
 * //       invokedIntentSamples: [ // InvokedIntentSamples
 * //         { // InvokedIntentSample
 * //           intentName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       originatingRequestId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSessionAnalyticsDataCommandInput - {@link ListSessionAnalyticsDataCommandInput}
 * @returns {@link ListSessionAnalyticsDataCommandOutput}
 * @see {@link ListSessionAnalyticsDataCommandInput} for command's `input` shape.
 * @see {@link ListSessionAnalyticsDataCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
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
export class ListSessionAnalyticsDataCommand extends $Command
  .classBuilder<
    ListSessionAnalyticsDataCommandInput,
    ListSessionAnalyticsDataCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "ListSessionAnalyticsData", {})
  .n("LexModelsV2Client", "ListSessionAnalyticsDataCommand")
  .sc(ListSessionAnalyticsData)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSessionAnalyticsDataRequest;
      output: ListSessionAnalyticsDataResponse;
    };
    sdk: {
      input: ListSessionAnalyticsDataCommandInput;
      output: ListSessionAnalyticsDataCommandOutput;
    };
  };
}
