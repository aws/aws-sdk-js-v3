// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListExportsRequest, ListExportsResponse } from "../models/models_1";
import { de_ListExportsCommand, se_ListExportsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListExportsCommand}.
 */
export interface ListExportsCommandInput extends ListExportsRequest {}
/**
 * @public
 *
 * The output of {@link ListExportsCommand}.
 */
export interface ListExportsCommandOutput extends ListExportsResponse, __MetadataBearer {}

/**
 * <p>Lists the exports for a bot, bot locale, or custom vocabulary.
 *          Exports are kept in the list for 7 days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListExportsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListExportsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LexModelsV2Client(config);
 * const input = { // ListExportsRequest
 *   botId: "STRING_VALUE",
 *   botVersion: "STRING_VALUE",
 *   sortBy: { // ExportSortBy
 *     attribute: "LastUpdatedDateTime", // required
 *     order: "Ascending" || "Descending", // required
 *   },
 *   filters: [ // ExportFilters
 *     { // ExportFilter
 *       name: "ExportResourceType", // required
 *       values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       operator: "CO" || "EQ", // required
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   localeId: "STRING_VALUE",
 * };
 * const command = new ListExportsCommand(input);
 * const response = await client.send(command);
 * // { // ListExportsResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   exportSummaries: [ // ExportSummaryList
 * //     { // ExportSummary
 * //       exportId: "STRING_VALUE",
 * //       resourceSpecification: { // ExportResourceSpecification
 * //         botExportSpecification: { // BotExportSpecification
 * //           botId: "STRING_VALUE", // required
 * //           botVersion: "STRING_VALUE", // required
 * //         },
 * //         botLocaleExportSpecification: { // BotLocaleExportSpecification
 * //           botId: "STRING_VALUE", // required
 * //           botVersion: "STRING_VALUE", // required
 * //           localeId: "STRING_VALUE", // required
 * //         },
 * //         customVocabularyExportSpecification: { // CustomVocabularyExportSpecification
 * //           botId: "STRING_VALUE", // required
 * //           botVersion: "STRING_VALUE", // required
 * //           localeId: "STRING_VALUE", // required
 * //         },
 * //         testSetExportSpecification: { // TestSetExportSpecification
 * //           testSetId: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       fileFormat: "LexJson" || "TSV" || "CSV",
 * //       exportStatus: "InProgress" || "Completed" || "Failed" || "Deleting",
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExportsCommandInput - {@link ListExportsCommandInput}
 * @returns {@link ListExportsCommandOutput}
 * @see {@link ListExportsCommandInput} for command's `input` shape.
 * @see {@link ListExportsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
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
export class ListExportsCommand extends $Command
  .classBuilder<
    ListExportsCommandInput,
    ListExportsCommandOutput,
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
  .s("LexModelBuildingServiceV2", "ListExports", {})
  .n("LexModelsV2Client", "ListExportsCommand")
  .f(void 0, void 0)
  .ser(se_ListExportsCommand)
  .de(de_ListExportsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExportsRequest;
      output: ListExportsResponse;
    };
    sdk: {
      input: ListExportsCommandInput;
      output: ListExportsCommandOutput;
    };
  };
}
