// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListOrganizationRecommendationAccountsRequest,
  ListOrganizationRecommendationAccountsResponse,
  ListOrganizationRecommendationAccountsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_ListOrganizationRecommendationAccountsCommand,
  se_ListOrganizationRecommendationAccountsCommand,
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
 * The input for {@link ListOrganizationRecommendationAccountsCommand}.
 */
export interface ListOrganizationRecommendationAccountsCommandInput
  extends ListOrganizationRecommendationAccountsRequest {}
/**
 * @public
 *
 * The output of {@link ListOrganizationRecommendationAccountsCommand}.
 */
export interface ListOrganizationRecommendationAccountsCommandOutput
  extends ListOrganizationRecommendationAccountsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the accounts that own the resources for an organization aggregate recommendation. This API only
 *             supports prioritized recommendations.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TrustedAdvisorClient, ListOrganizationRecommendationAccountsCommand } from "@aws-sdk/client-trustedadvisor"; // ES Modules import
 * // const { TrustedAdvisorClient, ListOrganizationRecommendationAccountsCommand } = require("@aws-sdk/client-trustedadvisor"); // CommonJS import
 * const client = new TrustedAdvisorClient(config);
 * const input = { // ListOrganizationRecommendationAccountsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   organizationRecommendationIdentifier: "STRING_VALUE", // required
 *   affectedAccountId: "STRING_VALUE",
 * };
 * const command = new ListOrganizationRecommendationAccountsCommand(input);
 * const response = await client.send(command);
 * // { // ListOrganizationRecommendationAccountsResponse
 * //   nextToken: "STRING_VALUE",
 * //   accountRecommendationLifecycleSummaries: [ // AccountRecommendationLifecycleSummaryList // required
 * //     { // AccountRecommendationLifecycleSummary
 * //       accountId: "STRING_VALUE",
 * //       accountRecommendationArn: "STRING_VALUE",
 * //       lifecycleStage: "in_progress" || "pending_response" || "dismissed" || "resolved",
 * //       updatedOnBehalfOf: "STRING_VALUE",
 * //       updatedOnBehalfOfJobTitle: "STRING_VALUE",
 * //       updateReason: "STRING_VALUE",
 * //       updateReasonCode: "non_critical_account" || "temporary_account" || "valid_business_case" || "other_methods_available" || "low_priority" || "not_applicable" || "other",
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListOrganizationRecommendationAccountsCommandInput - {@link ListOrganizationRecommendationAccountsCommandInput}
 * @returns {@link ListOrganizationRecommendationAccountsCommandOutput}
 * @see {@link ListOrganizationRecommendationAccountsCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationRecommendationAccountsCommandOutput} for command's `response` shape.
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
 * @example List all Accounts for an AWS Organization's Recommendation
 * ```javascript
 * //
 * const input = {
 *   organizationRecommendationIdentifier: "arn:aws:trustedadvisor:::organization-recommendation/9534ec9b-bf3a-44e8-8213-2ed68b39d9d5"
 * };
 * const command = new ListOrganizationRecommendationAccountsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   accountRecommendationLifecycleSummaries: [
 *     {
 *       accountId: "000000000000",
 *       accountRecommendationArn: "arn:aws:trustedadvisor::000000000000:recommendation/9534ec9b-bf3a-44e8-8213-2ed68b39d9d5",
 *       lastUpdatedAt: "2023-01-17T18:25:44.552Z",
 *       lifecycleStage: "resolved",
 *       updateReason: "Resolved issue",
 *       updateReasonCode: "valid_business_case"
 *     }
 *   ],
 *   nextToken: "<REDACTED>"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListOrganizationRecommendationAccountsCommand extends $Command
  .classBuilder<
    ListOrganizationRecommendationAccountsCommandInput,
    ListOrganizationRecommendationAccountsCommandOutput,
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
  .s("TrustedAdvisor", "ListOrganizationRecommendationAccounts", {})
  .n("TrustedAdvisorClient", "ListOrganizationRecommendationAccountsCommand")
  .f(void 0, ListOrganizationRecommendationAccountsResponseFilterSensitiveLog)
  .ser(se_ListOrganizationRecommendationAccountsCommand)
  .de(de_ListOrganizationRecommendationAccountsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOrganizationRecommendationAccountsRequest;
      output: ListOrganizationRecommendationAccountsResponse;
    };
    sdk: {
      input: ListOrganizationRecommendationAccountsCommandInput;
      output: ListOrganizationRecommendationAccountsCommandOutput;
    };
  };
}
