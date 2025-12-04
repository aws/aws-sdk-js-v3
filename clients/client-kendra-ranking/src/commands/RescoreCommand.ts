// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KendraRankingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraRankingClient";
import type { RescoreRequest, RescoreResult } from "../models/models_0";
import { Rescore } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RescoreCommand}.
 */
export interface RescoreCommandInput extends RescoreRequest {}
/**
 * @public
 *
 * The output of {@link RescoreCommand}.
 */
export interface RescoreCommandOutput extends RescoreResult, __MetadataBearer {}

/**
 * <p>Rescores or re-ranks search results from a search service
 *             such as OpenSearch (self managed). You use the semantic search
 *             capabilities of Amazon Kendra Intelligent Ranking to
 *             improve the search service's results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraRankingClient, RescoreCommand } from "@aws-sdk/client-kendra-ranking"; // ES Modules import
 * // const { KendraRankingClient, RescoreCommand } = require("@aws-sdk/client-kendra-ranking"); // CommonJS import
 * // import type { KendraRankingClientConfig } from "@aws-sdk/client-kendra-ranking";
 * const config = {}; // type is KendraRankingClientConfig
 * const client = new KendraRankingClient(config);
 * const input = { // RescoreRequest
 *   RescoreExecutionPlanId: "STRING_VALUE", // required
 *   SearchQuery: "STRING_VALUE", // required
 *   Documents: [ // DocumentList // required
 *     { // Document
 *       Id: "STRING_VALUE", // required
 *       GroupId: "STRING_VALUE",
 *       Title: "STRING_VALUE",
 *       Body: "STRING_VALUE",
 *       TokenizedTitle: [ // TitleTokensList
 *         "STRING_VALUE",
 *       ],
 *       TokenizedBody: [ // BodyTokensList
 *         "STRING_VALUE",
 *       ],
 *       OriginalScore: Number("float"), // required
 *     },
 *   ],
 * };
 * const command = new RescoreCommand(input);
 * const response = await client.send(command);
 * // { // RescoreResult
 * //   RescoreId: "STRING_VALUE",
 * //   ResultItems: [ // RescoreResultItemList
 * //     { // RescoreResultItem
 * //       DocumentId: "STRING_VALUE",
 * //       Score: Number("float"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param RescoreCommandInput - {@link RescoreCommandInput}
 * @returns {@link RescoreCommandOutput}
 * @see {@link RescoreCommandInput} for command's `input` shape.
 * @see {@link RescoreCommandOutput} for command's `response` shape.
 * @see {@link KendraRankingClientResolvedConfig | config} for KendraRankingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don’t have sufficient access to perform this action.
 *             Please ensure you have the required permission policies
 *             and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred with the request. Please fix any
 *             inconsistencies with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for
 *             your Amazon Kendra Intelligent Ranking service.
 *             Please wait a few minutes and try again, or contact
 *             <a href="http://aws.amazon.com/contact-us/">Support</a>
 *             for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn't exist. Please
 *             check you have provided the correct resource and try
 *             again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.
 *             Please reduce the number of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by
 *             the Amazon Kendra Intelligent Ranking service.
 *             Please provide the correct input and try again.</p>
 *
 * @throws {@link KendraRankingServiceException}
 * <p>Base exception class for all service exceptions from KendraRanking service.</p>
 *
 *
 * @public
 */
export class RescoreCommand extends $Command
  .classBuilder<
    RescoreCommandInput,
    RescoreCommandOutput,
    KendraRankingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KendraRankingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSKendraRerankingFrontendService", "Rescore", {})
  .n("KendraRankingClient", "RescoreCommand")
  .sc(Rescore)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RescoreRequest;
      output: RescoreResult;
    };
    sdk: {
      input: RescoreCommandInput;
      output: RescoreCommandOutput;
    };
  };
}
