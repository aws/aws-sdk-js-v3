// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CustomerProfilesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListRecommendersRequest, ListRecommendersResponse } from "../models/models_0";
import { ListRecommenders$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRecommendersCommand}.
 */
export interface ListRecommendersCommandInput extends ListRecommendersRequest {}
/**
 * @public
 *
 * The output of {@link ListRecommendersCommand}.
 */
export interface ListRecommendersCommandOutput extends ListRecommendersResponse, __MetadataBearer {}

/**
 * <p>Returns a list of recommenders in the specified domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListRecommendersCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListRecommendersCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListRecommendersRequest
 *   DomainName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRecommendersCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommendersResponse
 * //   NextToken: "STRING_VALUE",
 * //   Recommenders: [ // RecommenderSummaryList
 * //     { // RecommenderSummary
 * //       RecommenderName: "STRING_VALUE",
 * //       RecipeName: "recommended-for-you" || "similar-items" || "frequently-paired-items" || "popular-items" || "trending-now",
 * //       RecommenderConfig: { // RecommenderConfig
 * //         EventsConfig: { // EventsConfig
 * //           EventParametersList: [ // EventParametersList // required
 * //             { // EventParameters
 * //               EventType: "STRING_VALUE", // required
 * //               EventValueThreshold: Number("double"),
 * //             },
 * //           ],
 * //         },
 * //         TrainingFrequency: Number("int"),
 * //       },
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       Description: "STRING_VALUE",
 * //       Status: "PENDING" || "IN_PROGRESS" || "ACTIVE" || "FAILED" || "STOPPING" || "INACTIVE" || "STARTING" || "DELETING",
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       FailureReason: "STRING_VALUE",
 * //       LatestRecommenderUpdate: { // RecommenderUpdate
 * //         RecommenderConfig: {
 * //           EventsConfig: {
 * //             EventParametersList: [ // required
 * //               {
 * //                 EventType: "STRING_VALUE", // required
 * //                 EventValueThreshold: Number("double"),
 * //               },
 * //             ],
 * //           },
 * //           TrainingFrequency: Number("int"),
 * //         },
 * //         Status: "PENDING" || "IN_PROGRESS" || "ACTIVE" || "FAILED" || "STOPPING" || "INACTIVE" || "STARTING" || "DELETING",
 * //         CreatedAt: new Date("TIMESTAMP"),
 * //         LastUpdatedAt: new Date("TIMESTAMP"),
 * //         FailureReason: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRecommendersCommandInput - {@link ListRecommendersCommandInput}
 * @returns {@link ListRecommendersCommandOutput}
 * @see {@link ListRecommendersCommandInput} for command's `input` shape.
 * @see {@link ListRecommendersCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 *
 * @public
 */
export class ListRecommendersCommand extends $Command
  .classBuilder<
    ListRecommendersCommandInput,
    ListRecommendersCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "ListRecommenders", {})
  .n("CustomerProfilesClient", "ListRecommendersCommand")
  .sc(ListRecommenders$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecommendersRequest;
      output: ListRecommendersResponse;
    };
    sdk: {
      input: ListRecommendersCommandInput;
      output: ListRecommendersCommandOutput;
    };
  };
}
