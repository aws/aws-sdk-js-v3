// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import type {
  DeleteBotAnalyzerRecommendationRequest,
  DeleteBotAnalyzerRecommendationResponse,
} from "../models/models_0";
import { DeleteBotAnalyzerRecommendation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBotAnalyzerRecommendationCommand}.
 */
export interface DeleteBotAnalyzerRecommendationCommandInput extends DeleteBotAnalyzerRecommendationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBotAnalyzerRecommendationCommand}.
 */
export interface DeleteBotAnalyzerRecommendationCommandOutput extends DeleteBotAnalyzerRecommendationResponse, __MetadataBearer {}

/**
 * <p>Permanently deletes the recommendations and analysis results for a specific bot analysis request. This operation is provided for GDPR compliance and cannot be undone.</p>
 *          <p>After deletion, the analysis results cannot be retrieved. The analysis request ID will still appear in the history list, but attempting to describe the recommendations will return a <code>ResourceNotFoundException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteBotAnalyzerRecommendationCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteBotAnalyzerRecommendationCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // DeleteBotAnalyzerRecommendationRequest
 *   botId: "STRING_VALUE", // required
 *   botAnalyzerRequestId: "STRING_VALUE", // required
 * };
 * const command = new DeleteBotAnalyzerRecommendationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBotAnalyzerRecommendationCommandInput - {@link DeleteBotAnalyzerRecommendationCommandInput}
 * @returns {@link DeleteBotAnalyzerRecommendationCommandOutput}
 * @see {@link DeleteBotAnalyzerRecommendationCommandInput} for command's `input` shape.
 * @see {@link DeleteBotAnalyzerRecommendationCommandOutput} for command's `response` shape.
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
export class DeleteBotAnalyzerRecommendationCommand extends $Command
  .classBuilder<
    DeleteBotAnalyzerRecommendationCommandInput,
    DeleteBotAnalyzerRecommendationCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "DeleteBotAnalyzerRecommendation", {})
  .n("LexModelsV2Client", "DeleteBotAnalyzerRecommendationCommand")
  .sc(DeleteBotAnalyzerRecommendation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBotAnalyzerRecommendationRequest;
      output: {};
    };
    sdk: {
      input: DeleteBotAnalyzerRecommendationCommandInput;
      output: DeleteBotAnalyzerRecommendationCommandOutput;
    };
  };
}
