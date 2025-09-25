// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GenerateFindingRecommendationRequest } from "../models/models_0";
import { GenerateFindingRecommendation } from "../schemas/schemas_14_GenerateFindingRecommendation";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GenerateFindingRecommendationCommand}.
 */
export interface GenerateFindingRecommendationCommandInput extends GenerateFindingRecommendationRequest {}
/**
 * @public
 *
 * The output of {@link GenerateFindingRecommendationCommand}.
 */
export interface GenerateFindingRecommendationCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates a recommendation for an unused permissions finding.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, GenerateFindingRecommendationCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, GenerateFindingRecommendationCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // GenerateFindingRecommendationRequest
 *   analyzerArn: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GenerateFindingRecommendationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param GenerateFindingRecommendationCommandInput - {@link GenerateFindingRecommendationCommandInput}
 * @returns {@link GenerateFindingRecommendationCommandOutput}
 * @see {@link GenerateFindingRecommendationCommandInput} for command's `input` shape.
 * @see {@link GenerateFindingRecommendationCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Throttling limit exceeded error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link AccessAnalyzerServiceException}
 * <p>Base exception class for all service exceptions from AccessAnalyzer service.</p>
 *
 *
 * @example Successfully started generating finding recommendation
 * ```javascript
 * //
 * const input = {
 *   analyzerArn: "arn:aws:access-analyzer:us-east-1:111122223333:analyzer/a",
 *   id: "finding-id"
 * };
 * const command = new GenerateFindingRecommendationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @example Failed field validation for id value
 * ```javascript
 * //
 * const input = {
 *   analyzerArn: "arn:aws:access-analyzer:us-east-1:111122223333:analyzer/a",
 *   id: "!"
 * };
 * const command = new GenerateFindingRecommendationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class GenerateFindingRecommendationCommand extends $Command
  .classBuilder<
    GenerateFindingRecommendationCommandInput,
    GenerateFindingRecommendationCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AccessAnalyzer", "GenerateFindingRecommendation", {})
  .n("AccessAnalyzerClient", "GenerateFindingRecommendationCommand")
  .sc(GenerateFindingRecommendation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GenerateFindingRecommendationRequest;
      output: {};
    };
    sdk: {
      input: GenerateFindingRecommendationCommandInput;
      output: GenerateFindingRecommendationCommandOutput;
    };
  };
}
