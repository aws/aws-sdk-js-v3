// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRecommendationsForResourceRequest, ListRecommendationsForResourceResponse } from "../models/models_0";
import { ListRecommendationsForResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRecommendationsForResourceCommand}.
 */
export interface ListRecommendationsForResourceCommandInput extends ListRecommendationsForResourceRequest {}
/**
 * @public
 *
 * The output of {@link ListRecommendationsForResourceCommand}.
 */
export interface ListRecommendationsForResourceCommandOutput extends ListRecommendationsForResourceResponse, __MetadataBearer {}

/**
 * <p>List all Trusted Advisor recommendations for a given AWS resource ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TrustedAdvisorClient, ListRecommendationsForResourceCommand } from "@aws-sdk/client-trustedadvisor"; // ES Modules import
 * // const { TrustedAdvisorClient, ListRecommendationsForResourceCommand } = require("@aws-sdk/client-trustedadvisor"); // CommonJS import
 * // import type { TrustedAdvisorClientConfig } from "@aws-sdk/client-trustedadvisor";
 * const config = {}; // type is TrustedAdvisorClientConfig
 * const client = new TrustedAdvisorClient(config);
 * const input = { // ListRecommendationsForResourceRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   awsResourceArn: "STRING_VALUE", // required
 *   pillar: "cost_optimizing" || "performance" || "security" || "service_limits" || "fault_tolerance" || "operational_excellence",
 *   status: "ok" || "warning" || "error",
 *   checkArn: "STRING_VALUE",
 *   language: "en" || "ja" || "zh" || "fr" || "de" || "ko" || "zh_TW" || "it" || "es" || "pt_BR" || "id",
 * };
 * const command = new ListRecommendationsForResourceCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommendationsForResourceResponse
 * //   nextToken: "STRING_VALUE",
 * //   recommendationForResourceSummaries: [ // RecommendationForResourceSummaryList // required
 * //     { // RecommendationForResourceSummary
 * //       checkArn: "STRING_VALUE", // required
 * //       recommendationArn: "STRING_VALUE", // required
 * //       awsResourceArn: "STRING_VALUE", // required
 * //       status: "ok" || "warning" || "error", // required
 * //       lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //       exclusionStatus: "excluded" || "included", // required
 * //       metadata: { // StringMap // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       pillars: [ // RecommendationPillarList // required
 * //         "cost_optimizing" || "performance" || "security" || "service_limits" || "fault_tolerance" || "operational_excellence",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRecommendationsForResourceCommandInput - {@link ListRecommendationsForResourceCommandInput}
 * @returns {@link ListRecommendationsForResourceCommandOutput}
 * @see {@link ListRecommendationsForResourceCommandInput} for command's `input` shape.
 * @see {@link ListRecommendationsForResourceCommandOutput} for command's `response` shape.
 * @see {@link TrustedAdvisorClientResolvedConfig | config} for TrustedAdvisorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Exception that access has been denied due to insufficient access</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Exception to notify that an unexpected internal error occurred during processing of the request</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Exception to notify that requests are being throttled</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Exception that the request failed to satisfy service constraints</p>
 *
 * @throws {@link TrustedAdvisorServiceException}
 * <p>Base exception class for all service exceptions from TrustedAdvisor service.</p>
 *
 *
 * @example List all Trusted Advisor Recommendations for an AWS Resource
 * ```javascript
 * //
 * const input = {
 *   awsResourceArn: "arn:aws:ec2:us-east-1:000000000000:instance/i-0abcd1234efgh5678"
 * };
 * const command = new ListRecommendationsForResourceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nextToken: "<REDACTED>",
 *   recommendationForResourceSummaries: [
 *     {
 *       awsResourceArn: "arn:aws:ec2:us-east-1:000000000000:instance/i-0abcd1234efgh5678",
 *       checkArn: "arn:aws:trustedadvisor:::check/Qch7DwouX1",
 *       exclusionStatus: "included",
 *       lastUpdatedAt: "2026-05-21T15:09:51.891Z",
 *       metadata: {
 *         Region: "us-east-1",
 *         Resource: "i-0abcd1234efgh5678",
 *         Status: "Yellow"
 *       },
 *       pillars: [
 *         "cost_optimizing"
 *       ],
 *       recommendationArn: "arn:aws:trustedadvisor::000000000000:recommendation/55fa4d2e-bbb7-491a-833b-5773e9589578",
 *       status: "warning"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListRecommendationsForResourceCommand extends command<ListRecommendationsForResourceCommandInput, ListRecommendationsForResourceCommandOutput>(
  _ep0,
  _mw0,
  "ListRecommendationsForResource",
  ListRecommendationsForResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecommendationsForResourceRequest;
      output: ListRecommendationsForResourceResponse;
    };
    sdk: {
      input: ListRecommendationsForResourceCommandInput;
      output: ListRecommendationsForResourceCommandOutput;
    };
  };
}
