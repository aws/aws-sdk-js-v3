// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListOrganizationRecommendationResourcesRequest,
  ListOrganizationRecommendationResourcesResponse,
} from "../models/models_0";
import {
  de_ListOrganizationRecommendationResourcesCommand,
  se_ListOrganizationRecommendationResourcesCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TrustedAdvisorClientResolvedConfig } from "../TrustedAdvisorClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOrganizationRecommendationResourcesCommand}.
 */
export interface ListOrganizationRecommendationResourcesCommandInput
  extends ListOrganizationRecommendationResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListOrganizationRecommendationResourcesCommand}.
 */
export interface ListOrganizationRecommendationResourcesCommandOutput
  extends ListOrganizationRecommendationResourcesResponse,
    __MetadataBearer {}

/**
 * <p>List Resources of a Recommendation within an Organization. This API only supports prioritized
 *             recommendations.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TrustedAdvisorClient, ListOrganizationRecommendationResourcesCommand } from "@aws-sdk/client-trustedadvisor"; // ES Modules import
 * // const { TrustedAdvisorClient, ListOrganizationRecommendationResourcesCommand } = require("@aws-sdk/client-trustedadvisor"); // CommonJS import
 * const client = new TrustedAdvisorClient(config);
 * const input = { // ListOrganizationRecommendationResourcesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   status: "ok" || "warning" || "error",
 *   exclusionStatus: "excluded" || "included",
 *   regionCode: "STRING_VALUE",
 *   organizationRecommendationIdentifier: "STRING_VALUE", // required
 *   affectedAccountId: "STRING_VALUE",
 * };
 * const command = new ListOrganizationRecommendationResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListOrganizationRecommendationResourcesResponse
 * //   nextToken: "STRING_VALUE",
 * //   organizationRecommendationResourceSummaries: [ // OrganizationRecommendationResourceSummaryList // required
 * //     { // OrganizationRecommendationResourceSummary
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
 * //       accountId: "STRING_VALUE",
 * //       recommendationArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListOrganizationRecommendationResourcesCommandInput - {@link ListOrganizationRecommendationResourcesCommandInput}
 * @returns {@link ListOrganizationRecommendationResourcesCommandOutput}
 * @see {@link ListOrganizationRecommendationResourcesCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationRecommendationResourcesCommandOutput} for command's `response` shape.
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
 * @example List all Resources for an AWS Organization's Recommendation
 * ```javascript
 * //
 * const input = {
 *   organizationRecommendationIdentifier: "arn:aws:trustedadvisor:::organization-recommendation/5a694939-2e54-45a2-ae72-730598fa89d0"
 * };
 * const command = new ListOrganizationRecommendationResourcesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nextToken: "<REDACTED>",
 *   organizationRecommendationResourceSummaries: [
 *     {
 *       arn: "arn:aws:trustedadvisor::000000000000:recommendation-resource/5a694939-2e54-45a2-ae72-730598fa89d0/bb38affc0ce0681d9a6cd13f30238ba03a8f63dfe7a379dc403c619119d86af",
 *       awsResourceId: "database-1-instance-1",
 *       exclusionStatus: "excluded",
 *       id: "bb38affc0ce0681d9a6cd13f302383ba03a8f63dfe7a379dc403c619119d86af",
 *       lastUpdatedAt: "2023-11-01T15:09:51.891Z",
 *       metadata: {
 *         0: "14",
 *         1: "208.79999999999998",
 *         2: "database-1-instance-1",
 *         3: "db.r5.large",
 *         4: "false",
 *         5: "us-west-2",
 *         6: "arn:aws:rds:us-west-2:000000000000:db:database-1-instance-1",
 *         7: "1"
 *       },
 *       recommendationArn: "arn:aws:trustedadvisor:::organization-recommendation/5a694939-2e54-45a2-ae72-730598fa89d0",
 *       regionCode: "us-west-2",
 *       status: "warning"
 *     },
 *     {
 *       arn: "arn:aws:trustedadvisor::000000000000:recommendation-resource/5a694939-2e54-45a2-ae72-730598fa89d0/51fded4d7a3278818df9cfe344ff5762cec46c095a6763d1ba1ba53bd0e1b0e6",
 *       awsResourceId: "database-1",
 *       exclusionStatus: "excluded",
 *       id: "51fded4d7a3278818df9cfe344ff5762cec46c095a6763d1ba1ba53bd0e1b0e6",
 *       lastUpdatedAt: "2023-11-01T15:09:51.891Z",
 *       metadata: {
 *         0: "14",
 *         1: "31.679999999999996",
 *         2: "database-1",
 *         3: "db.t3.small",
 *         4: "false",
 *         5: "us-west-2",
 *         6: "arn:aws:rds:us-west-2:000000000000:db:database-1",
 *         7: "20"
 *       },
 *       recommendationArn: "arn:aws:trustedadvisor:::organization-recommendation/5a694939-2e54-45a2-ae72-730598fa89d0",
 *       regionCode: "us-west-2",
 *       status: "warning"
 *     },
 *     {
 *       arn: "arn:aws:trustedadvisor::000000000000:recommendation-resource/5a694939-2e54-45a2-ae72-730598fa89d0/f4d01bd20f4cd5372062aafc8786c489e48f0ead7cdab121463bf9f89e40a36b",
 *       awsResourceId: "database-2-instance-1-us-west-2a",
 *       exclusionStatus: "included",
 *       id: "f4d01bd20f4cd5372062aafc8786c489e48f0ead7cdab121463bf9f89e40a36b",
 *       lastUpdatedAt: "2023-11-01T15:09:51.891Z",
 *       metadata: {
 *         0: "14",
 *         1: "187.20000000000002",
 *         2: "database-2-instance-1-us-west-2a",
 *         3: "db.r6g.large",
 *         4: "true",
 *         5: "us-west-2",
 *         6: "arn:aws:rds:us-west-2:000000000000:db:database-2-instance-1-us-west-2a",
 *         7: "1"
 *       },
 *       recommendationArn: "arn:aws:trustedadvisor:::organization-recommendation/5a694939-2e54-45a2-ae72-730598fa89d0",
 *       regionCode: "us-west-2",
 *       status: "warning"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListOrganizationRecommendationResourcesCommand extends $Command
  .classBuilder<
    ListOrganizationRecommendationResourcesCommandInput,
    ListOrganizationRecommendationResourcesCommandOutput,
    TrustedAdvisorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TrustedAdvisorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TrustedAdvisor", "ListOrganizationRecommendationResources", {})
  .n("TrustedAdvisorClient", "ListOrganizationRecommendationResourcesCommand")
  .f(void 0, void 0)
  .ser(se_ListOrganizationRecommendationResourcesCommand)
  .de(de_ListOrganizationRecommendationResourcesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOrganizationRecommendationResourcesRequest;
      output: ListOrganizationRecommendationResourcesResponse;
    };
    sdk: {
      input: ListOrganizationRecommendationResourcesCommandInput;
      output: ListOrganizationRecommendationResourcesCommandOutput;
    };
  };
}
