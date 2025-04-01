// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetRecommendationsRequest,
  GetRecommendationsResponse,
  GetRecommendationsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetRecommendationsCommand, se_GetRecommendationsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRecommendationsCommand}.
 */
export interface GetRecommendationsCommandInput extends GetRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link GetRecommendationsCommand}.
 */
export interface GetRecommendationsCommandOutput extends GetRecommendationsResponse, __MetadataBearer {}

/**
 * <p>Retrieves recommendations for the specified session. To avoid retrieving the same
 *       recommendations in subsequent calls, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_NotifyRecommendationsReceived.html">NotifyRecommendationsReceived</a>. This API supports long-polling behavior with the
 *         <code>waitTimeSeconds</code> parameter. Short poll is the default behavior and only returns
 *       recommendations already available. To perform a manual query against an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_QueryAssistant.html">QueryAssistant</a>.</p>
 *
 * @deprecated GetRecommendations API will be discontinued starting June 1, 2024. To receive generative responses after March 1, 2024 you will need to create a new Assistant in the Connect console and integrate the Amazon Q in Connect JavaScript library (amazon-q-connectjs) into your applications.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, GetRecommendationsCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, GetRecommendationsCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * const client = new WisdomClient(config);
 * const input = { // GetRecommendationsRequest
 *   assistantId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   waitTimeSeconds: Number("int"),
 * };
 * const command = new GetRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // GetRecommendationsResponse
 * //   recommendations: [ // RecommendationList // required
 * //     { // RecommendationData
 * //       recommendationId: "STRING_VALUE", // required
 * //       document: { // Document
 * //         contentReference: { // ContentReference
 * //           knowledgeBaseArn: "STRING_VALUE",
 * //           knowledgeBaseId: "STRING_VALUE",
 * //           contentArn: "STRING_VALUE",
 * //           contentId: "STRING_VALUE",
 * //         },
 * //         title: { // DocumentText
 * //           text: "STRING_VALUE",
 * //           highlights: [ // Highlights
 * //             { // Highlight
 * //               beginOffsetInclusive: Number("int"),
 * //               endOffsetExclusive: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //         excerpt: {
 * //           text: "STRING_VALUE",
 * //           highlights: [
 * //             {
 * //               beginOffsetInclusive: Number("int"),
 * //               endOffsetExclusive: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       relevanceScore: Number("double"),
 * //       relevanceLevel: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //     },
 * //   ],
 * //   triggers: [ // RecommendationTriggerList
 * //     { // RecommendationTrigger
 * //       id: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //       source: "STRING_VALUE", // required
 * //       data: { // RecommendationTriggerData Union: only one key present
 * //         query: { // QueryRecommendationTriggerData
 * //           text: "STRING_VALUE",
 * //         },
 * //       },
 * //       recommendationIds: [ // RecommendationIdList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetRecommendationsCommandInput - {@link GetRecommendationsCommandInput}
 * @returns {@link GetRecommendationsCommandOutput}
 * @see {@link GetRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link WisdomServiceException}
 * <p>Base exception class for all service exceptions from Wisdom service.</p>
 *
 *
 * @public
 */
export class GetRecommendationsCommand extends $Command
  .classBuilder<
    GetRecommendationsCommandInput,
    GetRecommendationsCommandOutput,
    WisdomClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WisdomClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "GetRecommendations", {})
  .n("WisdomClient", "GetRecommendationsCommand")
  .f(void 0, GetRecommendationsResponseFilterSensitiveLog)
  .ser(se_GetRecommendationsCommand)
  .de(de_GetRecommendationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRecommendationsRequest;
      output: GetRecommendationsResponse;
    };
    sdk: {
      input: GetRecommendationsCommandInput;
      output: GetRecommendationsCommandOutput;
    };
  };
}
