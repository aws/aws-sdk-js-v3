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
import type { ListRecommenderFiltersRequest, ListRecommenderFiltersResponse } from "../models/models_0";
import { ListRecommenderFilters$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRecommenderFiltersCommand}.
 */
export interface ListRecommenderFiltersCommandInput extends ListRecommenderFiltersRequest {}
/**
 * @public
 *
 * The output of {@link ListRecommenderFiltersCommand}.
 */
export interface ListRecommenderFiltersCommandOutput extends ListRecommenderFiltersResponse, __MetadataBearer {}

/**
 * <p>Returns a list of recommender filters in the specified domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListRecommenderFiltersCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListRecommenderFiltersCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListRecommenderFiltersRequest
 *   DomainName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRecommenderFiltersCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommenderFiltersResponse
 * //   NextToken: "STRING_VALUE",
 * //   RecommenderFilters: [ // RecommenderFilterSummaryList
 * //     { // RecommenderFilterSummary
 * //       RecommenderFilterName: "STRING_VALUE",
 * //       RecommenderFilterExpression: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       Description: "STRING_VALUE",
 * //       Status: "ACTIVE" || "PENDING" || "IN_PROGRESS" || "FAILED" || "DELETING",
 * //       FailureReason: "STRING_VALUE",
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRecommenderFiltersCommandInput - {@link ListRecommenderFiltersCommandInput}
 * @returns {@link ListRecommenderFiltersCommandOutput}
 * @see {@link ListRecommenderFiltersCommandInput} for command's `input` shape.
 * @see {@link ListRecommenderFiltersCommandOutput} for command's `response` shape.
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
export class ListRecommenderFiltersCommand extends $Command
  .classBuilder<
    ListRecommenderFiltersCommandInput,
    ListRecommenderFiltersCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "ListRecommenderFilters", {})
  .n("CustomerProfilesClient", "ListRecommenderFiltersCommand")
  .sc(ListRecommenderFilters$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecommenderFiltersRequest;
      output: ListRecommenderFiltersResponse;
    };
    sdk: {
      input: ListRecommenderFiltersCommandInput;
      output: ListRecommenderFiltersCommandOutput;
    };
  };
}
