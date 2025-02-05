// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GenerateFindingRecommendationRequest } from "../models/models_0";
import {
  de_GenerateFindingRecommendationCommand,
  se_GenerateFindingRecommendationCommand,
} from "../protocols/Aws_restJson1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 * @example Successfully started generating finding recommendation
 * ```javascript
 * //
 * const input = {
 *   "analyzerArn": "arn:aws:access-analyzer:us-east-1:111122223333:analyzer/a",
 *   "id": "finding-id"
 * };
 * const command = new GenerateFindingRecommendationCommand(input);
 * await client.send(command);
 * // example id: example-1
 * ```
 *
 * @example Failed field validation for id value
 * ```javascript
 * //
 * const input = {
 *   "analyzerArn": "arn:aws:access-analyzer:us-east-1:111122223333:analyzer/a",
 *   "id": "!"
 * };
 * const command = new GenerateFindingRecommendationCommand(input);
 * await client.send(command);
 * // example id: example-2
 * ```
 *
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AccessAnalyzer", "GenerateFindingRecommendation", {})
  .n("AccessAnalyzerClient", "GenerateFindingRecommendationCommand")
  .f(void 0, void 0)
  .ser(se_GenerateFindingRecommendationCommand)
  .de(de_GenerateFindingRecommendationCommand)
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
