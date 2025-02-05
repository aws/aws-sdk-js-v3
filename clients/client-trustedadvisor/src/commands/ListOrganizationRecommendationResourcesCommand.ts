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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
