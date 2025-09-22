// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { GetUtterancesViewRequest, GetUtterancesViewResponse } from "../models/models_0";
import { GetUtterancesView } from "../schemas/schemas_2_GetUtterancesView";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetUtterancesViewCommand}.
 */
export interface GetUtterancesViewCommandInput extends GetUtterancesViewRequest {}
/**
 * @public
 *
 * The output of {@link GetUtterancesViewCommand}.
 */
export interface GetUtterancesViewCommandOutput extends GetUtterancesViewResponse, __MetadataBearer {}

/**
 * <p>Use the <code>GetUtterancesView</code> operation to get information
 *       about the utterances that your users have made to your bot. You can use
 *       this list to tune the utterances that your bot responds to.</p>
 *          <p>For example, say that you have created a bot to order flowers.
 *       After your users have used your bot for a while, use the
 *         <code>GetUtterancesView</code> operation to see the requests that they
 *       have made and whether they have been successful. You might find that the
 *       utterance "I want flowers" is not being recognized. You could add this
 *       utterance to the <code>OrderFlowers</code> intent so that your bot
 *       recognizes that utterance.</p>
 *          <p>After you publish a new version of a bot, you can get information
 *       about the old version and the new so that you can compare the performance
 *       across the two versions. </p>
 *          <p>Utterance statistics are generated once a day. Data is available
 *       for the last 15 days. You can request information for up to 5 versions of
 *       your bot in each request. Amazon Lex returns the most frequent utterances
 *       received by the bot in the last 15 days. The response contains information
 *       about a maximum of 100 utterances for each version.</p>
 *          <p>If you set <code>childDirected</code> field to true when you
 *       created your bot, if you are using slot obfuscation with one or more
 *       slots, or if you opted out of participating in improving Amazon Lex, utterances
 *       are not available.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetUtterancesView</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetUtterancesViewCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetUtterancesViewCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // import type { LexModelBuildingServiceClientConfig } from "@aws-sdk/client-lex-model-building-service";
 * const config = {}; // type is LexModelBuildingServiceClientConfig
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // GetUtterancesViewRequest
 *   botName: "STRING_VALUE", // required
 *   botVersions: [ // BotVersions // required
 *     "STRING_VALUE",
 *   ],
 *   statusType: "Detected" || "Missed", // required
 * };
 * const command = new GetUtterancesViewCommand(input);
 * const response = await client.send(command);
 * // { // GetUtterancesViewResponse
 * //   botName: "STRING_VALUE",
 * //   utterances: [ // ListsOfUtterances
 * //     { // UtteranceList
 * //       botVersion: "STRING_VALUE",
 * //       utterances: [ // ListOfUtterance
 * //         { // UtteranceData
 * //           utteranceString: "STRING_VALUE",
 * //           count: Number("int"),
 * //           distinctUsers: Number("int"),
 * //           firstUtteredDate: new Date("TIMESTAMP"),
 * //           lastUtteredDate: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetUtterancesViewCommandInput - {@link GetUtterancesViewCommandInput}
 * @returns {@link GetUtterancesViewCommandOutput}
 * @see {@link GetUtterancesViewCommandInput} for command's `input` shape.
 * @see {@link GetUtterancesViewCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or
 *       a required field is missing. Check the field values, and try
 *       again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal Amazon Lex error occurred. Try your request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a limit. Try your request again.</p>
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 * <p>Base exception class for all service exceptions from LexModelBuildingService service.</p>
 *
 *
 * @public
 */
export class GetUtterancesViewCommand extends $Command
  .classBuilder<
    GetUtterancesViewCommandInput,
    GetUtterancesViewCommandOutput,
    LexModelBuildingServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelBuildingServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepSenseModelBuildingService", "GetUtterancesView", {})
  .n("LexModelBuildingServiceClient", "GetUtterancesViewCommand")
  .sc(GetUtterancesView)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUtterancesViewRequest;
      output: GetUtterancesViewResponse;
    };
    sdk: {
      input: GetUtterancesViewCommandInput;
      output: GetUtterancesViewCommandOutput;
    };
  };
}
