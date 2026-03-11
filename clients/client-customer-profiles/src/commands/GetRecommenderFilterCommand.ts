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
import type { GetRecommenderFilterRequest, GetRecommenderFilterResponse } from "../models/models_0";
import { GetRecommenderFilter$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRecommenderFilterCommand}.
 */
export interface GetRecommenderFilterCommandInput extends GetRecommenderFilterRequest {}
/**
 * @public
 *
 * The output of {@link GetRecommenderFilterCommand}.
 */
export interface GetRecommenderFilterCommandOutput extends GetRecommenderFilterResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a specific recommender filter in a domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetRecommenderFilterCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetRecommenderFilterCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetRecommenderFilterRequest
 *   DomainName: "STRING_VALUE", // required
 *   RecommenderFilterName: "STRING_VALUE", // required
 * };
 * const command = new GetRecommenderFilterCommand(input);
 * const response = await client.send(command);
 * // { // GetRecommenderFilterResponse
 * //   RecommenderFilterName: "STRING_VALUE", // required
 * //   RecommenderFilterExpression: "STRING_VALUE", // required
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   Status: "ACTIVE" || "PENDING" || "IN_PROGRESS" || "FAILED" || "DELETING", // required
 * //   Description: "STRING_VALUE",
 * //   FailureReason: "STRING_VALUE",
 * //   Tags: { // TagMap // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRecommenderFilterCommandInput - {@link GetRecommenderFilterCommandInput}
 * @returns {@link GetRecommenderFilterCommandOutput}
 * @see {@link GetRecommenderFilterCommandInput} for command's `input` shape.
 * @see {@link GetRecommenderFilterCommandOutput} for command's `response` shape.
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
export class GetRecommenderFilterCommand extends $Command
  .classBuilder<
    GetRecommenderFilterCommandInput,
    GetRecommenderFilterCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "GetRecommenderFilter", {})
  .n("CustomerProfilesClient", "GetRecommenderFilterCommand")
  .sc(GetRecommenderFilter$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRecommenderFilterRequest;
      output: GetRecommenderFilterResponse;
    };
    sdk: {
      input: GetRecommenderFilterCommandInput;
      output: GetRecommenderFilterCommandOutput;
    };
  };
}
