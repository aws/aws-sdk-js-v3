// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAppComponentRecommendationsRequest, ListAppComponentRecommendationsResponse } from "../models/models_0";
import {
  de_ListAppComponentRecommendationsCommand,
  se_ListAppComponentRecommendationsCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAppComponentRecommendationsCommand}.
 */
export interface ListAppComponentRecommendationsCommandInput extends ListAppComponentRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppComponentRecommendationsCommand}.
 */
export interface ListAppComponentRecommendationsCommandOutput
  extends ListAppComponentRecommendationsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the recommendations for an Resilience Hub Application Component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListAppComponentRecommendationsCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListAppComponentRecommendationsCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // ListAppComponentRecommendationsRequest
 *   assessmentArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAppComponentRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppComponentRecommendationsResponse
 * //   componentRecommendations: [ // ComponentRecommendationList // required
 * //     { // ComponentRecommendation
 * //       appComponentName: "STRING_VALUE", // required
 * //       recommendationStatus: "STRING_VALUE", // required
 * //       configRecommendations: [ // ConfigRecommendationList // required
 * //         { // ConfigRecommendation
 * //           cost: { // Cost
 * //             amount: Number("double"), // required
 * //             currency: "STRING_VALUE", // required
 * //             frequency: "STRING_VALUE", // required
 * //           },
 * //           appComponentName: "STRING_VALUE",
 * //           compliance: { // AssessmentCompliance
 * //             "<keys>": { // DisruptionCompliance
 * //               achievableRtoInSecs: Number("int"),
 * //               currentRtoInSecs: Number("int"),
 * //               rtoReferenceId: "STRING_VALUE",
 * //               rtoDescription: "STRING_VALUE",
 * //               currentRpoInSecs: Number("int"),
 * //               rpoReferenceId: "STRING_VALUE",
 * //               rpoDescription: "STRING_VALUE",
 * //               complianceStatus: "STRING_VALUE", // required
 * //               achievableRpoInSecs: Number("int"),
 * //               message: "STRING_VALUE",
 * //             },
 * //           },
 * //           recommendationCompliance: { // RecommendationCompliance
 * //             "<keys>": { // RecommendationDisruptionCompliance
 * //               expectedComplianceStatus: "STRING_VALUE", // required
 * //               expectedRtoInSecs: Number("int"),
 * //               expectedRtoDescription: "STRING_VALUE",
 * //               expectedRpoInSecs: Number("int"),
 * //               expectedRpoDescription: "STRING_VALUE",
 * //             },
 * //           },
 * //           optimizationType: "STRING_VALUE", // required
 * //           name: "STRING_VALUE", // required
 * //           description: "STRING_VALUE",
 * //           suggestedChanges: [ // SuggestedChangesList
 * //             "STRING_VALUE",
 * //           ],
 * //           haArchitecture: "STRING_VALUE",
 * //           referenceId: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppComponentRecommendationsCommandInput - {@link ListAppComponentRecommendationsCommandInput}
 * @returns {@link ListAppComponentRecommendationsCommandOutput}
 * @see {@link ListAppComponentRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ListAppComponentRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 * @public
 */
export class ListAppComponentRecommendationsCommand extends $Command
  .classBuilder<
    ListAppComponentRecommendationsCommandInput,
    ListAppComponentRecommendationsCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsResilienceHub", "ListAppComponentRecommendations", {})
  .n("ResiliencehubClient", "ListAppComponentRecommendationsCommand")
  .f(void 0, void 0)
  .ser(se_ListAppComponentRecommendationsCommand)
  .de(de_ListAppComponentRecommendationsCommand)
  .build() {}
