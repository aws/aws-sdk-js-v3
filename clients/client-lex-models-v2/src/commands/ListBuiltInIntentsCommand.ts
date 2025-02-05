// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListBuiltInIntentsRequest, ListBuiltInIntentsResponse } from "../models/models_1";
import { de_ListBuiltInIntentsCommand, se_ListBuiltInIntentsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBuiltInIntentsCommand}.
 */
export interface ListBuiltInIntentsCommandInput extends ListBuiltInIntentsRequest {}
/**
 * @public
 *
 * The output of {@link ListBuiltInIntentsCommand}.
 */
export interface ListBuiltInIntentsCommandOutput extends ListBuiltInIntentsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of built-in intents provided by Amazon Lex that you can use
 *          in your bot. </p>
 *          <p>To use a built-in intent as a the base for your own intent, include
 *          the built-in intent signature in the <code>parentIntentSignature</code>
 *          parameter when you call the <code>CreateIntent</code> operation. For
 *          more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateIntent.html">CreateIntent</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListBuiltInIntentsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListBuiltInIntentsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LexModelsV2Client(config);
 * const input = { // ListBuiltInIntentsRequest
 *   localeId: "STRING_VALUE", // required
 *   sortBy: { // BuiltInIntentSortBy
 *     attribute: "IntentSignature", // required
 *     order: "Ascending" || "Descending", // required
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListBuiltInIntentsCommand(input);
 * const response = await client.send(command);
 * // { // ListBuiltInIntentsResponse
 * //   builtInIntentSummaries: [ // BuiltInIntentSummaryList
 * //     { // BuiltInIntentSummary
 * //       intentSignature: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBuiltInIntentsCommandInput - {@link ListBuiltInIntentsCommandInput}
 * @returns {@link ListBuiltInIntentsCommandOutput}
 * @see {@link ListBuiltInIntentsCommandInput} for command's `input` shape.
 * @see {@link ListBuiltInIntentsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListBuiltInIntentsCommand extends $Command
  .classBuilder<
    ListBuiltInIntentsCommandInput,
    ListBuiltInIntentsCommandOutput,
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
  .s("LexModelBuildingServiceV2", "ListBuiltInIntents", {})
  .n("LexModelsV2Client", "ListBuiltInIntentsCommand")
  .f(void 0, void 0)
  .ser(se_ListBuiltInIntentsCommand)
  .de(de_ListBuiltInIntentsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBuiltInIntentsRequest;
      output: ListBuiltInIntentsResponse;
    };
    sdk: {
      input: ListBuiltInIntentsCommandInput;
      output: ListBuiltInIntentsCommandOutput;
    };
  };
}
