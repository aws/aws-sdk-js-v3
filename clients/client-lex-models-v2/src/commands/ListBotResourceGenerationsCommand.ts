// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListBotResourceGenerationsRequest, ListBotResourceGenerationsResponse } from "../models/models_1";
import { ListBotResourceGenerations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBotResourceGenerationsCommand}.
 */
export interface ListBotResourceGenerationsCommandInput extends ListBotResourceGenerationsRequest {}
/**
 * @public
 *
 * The output of {@link ListBotResourceGenerationsCommand}.
 */
export interface ListBotResourceGenerationsCommandOutput extends ListBotResourceGenerationsResponse, __MetadataBearer {}

/**
 * <p>Lists the generation requests made for a bot locale.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListBotResourceGenerationsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListBotResourceGenerationsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // ListBotResourceGenerationsRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   sortBy: { // GenerationSortBy
 *     attribute: "creationStartTime" || "lastUpdatedTime", // required
 *     order: "Ascending" || "Descending", // required
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListBotResourceGenerationsCommand(input);
 * const response = await client.send(command);
 * // { // ListBotResourceGenerationsResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   generationSummaries: [ // GenerationSummaryList
 * //     { // GenerationSummary
 * //       generationId: "STRING_VALUE",
 * //       generationStatus: "Failed" || "Complete" || "InProgress",
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBotResourceGenerationsCommandInput - {@link ListBotResourceGenerationsCommandInput}
 * @returns {@link ListBotResourceGenerationsCommandOutput}
 * @see {@link ListBotResourceGenerationsCommandInput} for command's `input` shape.
 * @see {@link ListBotResourceGenerationsCommandOutput} for command's `response` shape.
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
export class ListBotResourceGenerationsCommand extends $Command
  .classBuilder<
    ListBotResourceGenerationsCommandInput,
    ListBotResourceGenerationsCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "ListBotResourceGenerations", {})
  .n("LexModelsV2Client", "ListBotResourceGenerationsCommand")
  .sc(ListBotResourceGenerations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBotResourceGenerationsRequest;
      output: ListBotResourceGenerationsResponse;
    };
    sdk: {
      input: ListBotResourceGenerationsCommandInput;
      output: ListBotResourceGenerationsCommandOutput;
    };
  };
}
