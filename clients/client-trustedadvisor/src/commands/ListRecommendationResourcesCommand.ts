// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRecommendationResourcesRequest, ListRecommendationResourcesResponse } from "../models/models_0";
import {
  de_ListRecommendationResourcesCommand,
  se_ListRecommendationResourcesCommand,
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
 * The input for {@link ListRecommendationResourcesCommand}.
 */
export interface ListRecommendationResourcesCommandInput extends ListRecommendationResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListRecommendationResourcesCommand}.
 */
export interface ListRecommendationResourcesCommandOutput
  extends ListRecommendationResourcesResponse,
    __MetadataBearer {}

/**
 * <p>List Resources of a Recommendation</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TrustedAdvisorClient, ListRecommendationResourcesCommand } from "@aws-sdk/client-trustedadvisor"; // ES Modules import
 * // const { TrustedAdvisorClient, ListRecommendationResourcesCommand } = require("@aws-sdk/client-trustedadvisor"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TrustedAdvisor", "ListRecommendationResources", {})
  .n("TrustedAdvisorClient", "ListRecommendationResourcesCommand")
  .f(void 0, void 0)
  .ser(se_ListRecommendationResourcesCommand)
  .de(de_ListRecommendationResourcesCommand)
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
