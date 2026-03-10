// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import type {
  DescribeBotAnalyzerRecommendationRequest,
  DescribeBotAnalyzerRecommendationResponse,
} from "../models/models_0";
import { DescribeBotAnalyzerRecommendation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeBotAnalyzerRecommendationCommand}.
 */
export interface DescribeBotAnalyzerRecommendationCommandInput extends DescribeBotAnalyzerRecommendationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBotAnalyzerRecommendationCommand}.
 */
export interface DescribeBotAnalyzerRecommendationCommandOutput extends DescribeBotAnalyzerRecommendationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the analysis results and recommendations for bot optimization. The analysis must be in <code>Available</code> status before recommendations can be retrieved.</p>
 *          <p>Recommendations are returned with pagination support. Each recommendation includes the issue location, priority level, detailed description, and proposed fix.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeBotAnalyzerRecommendationCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeBotAnalyzerRecommendationCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // DescribeBotAnalyzerRecommendationRequest
 *   botId: "STRING_VALUE", // required
 *   botAnalyzerRequestId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeBotAnalyzerRecommendationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBotAnalyzerRecommendationResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   botAnalyzerStatus: "Processing" || "Available" || "Failed" || "Stopping" || "Stopped",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   botAnalyzerRecommendationList: [ // BotAnalyzerRecommendationList
 * //     { // BotAnalyzerRecommendation
 * //       issueLocation: { // IssueLocation
 * //         botLocale: "STRING_VALUE",
 * //         intentId: "STRING_VALUE",
 * //         slotId: "STRING_VALUE",
 * //       },
 * //       priority: "High" || "Medium" || "Low", // required
 * //       issueDescription: "STRING_VALUE", // required
 * //       proposedFix: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeBotAnalyzerRecommendationCommandInput - {@link DescribeBotAnalyzerRecommendationCommandInput}
 * @returns {@link DescribeBotAnalyzerRecommendationCommandOutput}
 * @see {@link DescribeBotAnalyzerRecommendationCommandInput} for command's `input` shape.
 * @see {@link DescribeBotAnalyzerRecommendationCommandOutput} for command's `response` shape.
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
export class DescribeBotAnalyzerRecommendationCommand extends $Command
  .classBuilder<
    DescribeBotAnalyzerRecommendationCommandInput,
    DescribeBotAnalyzerRecommendationCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "DescribeBotAnalyzerRecommendation", {})
  .n("LexModelsV2Client", "DescribeBotAnalyzerRecommendationCommand")
  .sc(DescribeBotAnalyzerRecommendation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBotAnalyzerRecommendationRequest;
      output: DescribeBotAnalyzerRecommendationResponse;
    };
    sdk: {
      input: DescribeBotAnalyzerRecommendationCommandInput;
      output: DescribeBotAnalyzerRecommendationCommandOutput;
    };
  };
}
