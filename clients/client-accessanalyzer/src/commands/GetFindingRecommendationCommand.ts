// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetFindingRecommendationRequest, GetFindingRecommendationResponse } from "../models/models_0";
import { de_GetFindingRecommendationCommand, se_GetFindingRecommendationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFindingRecommendationCommand}.
 */
export interface GetFindingRecommendationCommandInput extends GetFindingRecommendationRequest {}
/**
 * @public
 *
 * The output of {@link GetFindingRecommendationCommand}.
 */
export interface GetFindingRecommendationCommandOutput extends GetFindingRecommendationResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a finding recommendation for the specified analyzer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, GetFindingRecommendationCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, GetFindingRecommendationCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const input = { // GetFindingRecommendationRequest
 *   analyzerArn: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetFindingRecommendationCommand(input);
 * const response = await client.send(command);
 * // { // GetFindingRecommendationResponse
 * //   startedAt: new Date("TIMESTAMP"), // required
 * //   completedAt: new Date("TIMESTAMP"),
 * //   nextToken: "STRING_VALUE",
 * //   error: { // RecommendationError
 * //     code: "STRING_VALUE", // required
 * //     message: "STRING_VALUE", // required
 * //   },
 * //   resourceArn: "STRING_VALUE", // required
 * //   recommendedSteps: [ // RecommendedStepList
 * //     { // RecommendedStep Union: only one key present
 * //       unusedPermissionsRecommendedStep: { // UnusedPermissionsRecommendedStep
 * //         policyUpdatedAt: new Date("TIMESTAMP"),
 * //         recommendedAction: "STRING_VALUE", // required
 * //         recommendedPolicy: "STRING_VALUE",
 * //         existingPolicyId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   recommendationType: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetFindingRecommendationCommandInput - {@link GetFindingRecommendationCommandInput}
 * @returns {@link GetFindingRecommendationCommandOutput}
 * @see {@link GetFindingRecommendationCommandInput} for command's `input` shape.
 * @see {@link GetFindingRecommendationCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
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
 */
export class GetFindingRecommendationCommand extends $Command
  .classBuilder<
    GetFindingRecommendationCommandInput,
    GetFindingRecommendationCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AccessAnalyzer", "GetFindingRecommendation", {})
  .n("AccessAnalyzerClient", "GetFindingRecommendationCommand")
  .f(void 0, void 0)
  .ser(se_GetFindingRecommendationCommand)
  .de(de_GetFindingRecommendationCommand)
  .build() {}
