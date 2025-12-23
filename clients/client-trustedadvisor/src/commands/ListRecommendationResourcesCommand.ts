// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListRecommendationResourcesRequest, ListRecommendationResourcesResponse } from "../models/models_0";
import { ListRecommendationResources$ } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  TrustedAdvisorClientResolvedConfig,
} from "../TrustedAdvisorClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRecommendationResourcesCommand}.
 */
export interface ListRecommendationResourcesCommandInput extends ListRecommendationResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListRecommendationResourcesCommand}.
 */
export interface ListRecommendationResourcesCommandOutput extends ListRecommendationResourcesResponse, __MetadataBearer {}

/**
 * <p>List Resources of a Recommendation</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TrustedAdvisorClient, ListRecommendationResourcesCommand } from "@aws-sdk/client-trustedadvisor"; // ES Modules import
 * // const { TrustedAdvisorClient, ListRecommendationResourcesCommand } = require("@aws-sdk/client-trustedadvisor"); // CommonJS import
 * // import type { TrustedAdvisorClientConfig } from "@aws-sdk/client-trustedadvisor";
 * const config = {}; // type is TrustedAdvisorClientConfig
 * const client = new TrustedAdvisorClient(config);
 * const input = { // ListRecommendationResourcesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   status: "ok" || "warning" || "error",
 *   exclusionStatus: "excluded" || "included",
 *   regionCode: "STRING_VALUE",
 *   recommendationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new ListRecommendationResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommendationResourcesResponse
 * //   nextToken: "STRING_VALUE",
 * //   recommendationResourceSummaries: [ // RecommendationResourceSummaryList // required
 * //     { // RecommendationResourceSummary
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       awsResourceId: "STRING_VALUE", // required
 * //       regionCode: "STRING_VALUE", // required
 * //       status: "ok" || "warning" || "error", // required
 * //       metadata: { // StringMap // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //       exclusionStatus: "excluded" || "included",
 * //       recommendationArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRecommendationResourcesCommandInput - {@link ListRecommendationResourcesCommandInput}
 * @returns {@link ListRecommendationResourcesCommandOutput}
 * @see {@link ListRecommendationResourcesCommandInput} for command's `input` shape.
 * @see {@link ListRecommendationResourcesCommandOutput} for command's `response` shape.
 * @see {@link TrustedAdvisorClientResolvedConfig | config} for TrustedAdvisorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Exception that access has been denied due to insufficient access</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Exception to notify that an unexpected internal error occurred during processing of the request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception that the requested resource has not been found</p>
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
 * @example List all Resources for a Recommendation
 * ```javascript
 * //
 * const input = {
 *   recommendationIdentifier: "arn:aws:trustedadvisor::000000000000:recommendation/55fa4d2e-bbb7-491a-833b-5773e9589578"
 * };
 * const command = new ListRecommendationResourcesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nextToken: "<REDACTED>",
 *   recommendationResourceSummaries: [
 *     {
 *       arn: "arn:aws:trustedadvisor::000000000000:recommendation-resource/55fa4d2e-bbb7-491a-833b-5773e9589578/18959a1f1973cff8e706e9d9bde28bba36cd602a6b2cb86c8b61252835236010",
 *       awsResourceId: "webcms-dev-01",
 *       exclusionStatus: "excluded",
 *       id: "18959a1f1973cff8e706e9d9bde28bba36cd602a6b2cb86c8b61252835236010",
 *       lastUpdatedAt: "2023-11-01T15:09:51.891Z",
 *       metadata: {
 *         0: "14",
 *         1: "123.12000000000002",
 *         2: "webcms-dev-01",
 *         3: "db.m6i.large",
 *         4: "false",
 *         5: "us-east-1",
 *         6: "arn:aws:rds:us-east-1:000000000000:db:webcms-dev-01",
 *         7: "20"
 *       },
 *       recommendationArn: "arn:aws:trustedadvisor::000000000000:recommendation/55fa4d2e-bbb7-491a-833b-5773e9589578",
 *       regionCode: "us-east-1",
 *       status: "warning"
 *     },
 *     {
 *       arn: "arn:aws:trustedadvisor::000000000000:recommendation-resource/55fa4d2e-bbb7-491a-833b-5773e9589578/e6367ff500ac90db8e4adeb4892e39ee9c36bbf812dcbce4b9e4fefcec9eb63e",
 *       awsResourceId: "aws-dev-db-stack-instance-1",
 *       exclusionStatus: "included",
 *       id: "e6367ff500ac90db8e4adeb4892e39ee9c36bbf812dcbce4b9e4fefcec9eb63e",
 *       lastUpdatedAt: "2023-11-01T15:09:51.891Z",
 *       metadata: {
 *         0: "14",
 *         1: "29.52",
 *         2: "aws-dev-db-stack-instance-1",
 *         3: "db.t2.small",
 *         4: "false",
 *         5: "us-east-1",
 *         6: "arn:aws:rds:us-east-1:000000000000:db:aws-dev-db-stack-instance-1",
 *         7: "1"
 *       },
 *       recommendationArn: "arn:aws:trustedadvisor::000000000000:recommendation/55fa4d2e-bbb7-491a-833b-5773e9589578",
 *       regionCode: "us-east-1",
 *       status: "warning"
 *     },
 *     {
 *       arn: "arn:aws:trustedadvisor::000000000000:recommendation-resource/55fa4d2e-bbb7-491a-833b-5773e9589578/31aa78ba050a5015d2d38cca7f5f1ce88f70857c4e1c3ad03f8f9fd95dad7459",
 *       awsResourceId: "aws-awesome-apps-stack-db",
 *       exclusionStatus: "excluded",
 *       id: "31aa78ba050a5015d2d38cca7f5f1ce88f70857c4e1c3ad03f8f9fd95dad7459",
 *       lastUpdatedAt: "2023-11-01T15:09:51.891Z",
 *       metadata: {
 *         0: "14",
 *         1: "114.48000000000002",
 *         2: "aws-awesome-apps-stack-db",
 *         3: "db.m6g.large",
 *         4: "false",
 *         5: "us-east-1",
 *         6: "arn:aws:rds:us-east-1:000000000000:db:aws-awesome-apps-stack-db",
 *         7: "100"
 *       },
 *       recommendationArn: "arn:aws:trustedadvisor::000000000000:recommendation/55fa4d2e-bbb7-491a-833b-5773e9589578",
 *       regionCode: "us-east-1",
 *       status: "warning"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListRecommendationResourcesCommand extends $Command
  .classBuilder<
    ListRecommendationResourcesCommandInput,
    ListRecommendationResourcesCommandOutput,
    TrustedAdvisorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TrustedAdvisorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TrustedAdvisor", "ListRecommendationResources", {})
  .n("TrustedAdvisorClient", "ListRecommendationResourcesCommand")
  .sc(ListRecommendationResources$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecommendationResourcesRequest;
      output: ListRecommendationResourcesResponse;
    };
    sdk: {
      input: ListRecommendationResourcesCommandInput;
      output: ListRecommendationResourcesCommandOutput;
    };
  };
}
