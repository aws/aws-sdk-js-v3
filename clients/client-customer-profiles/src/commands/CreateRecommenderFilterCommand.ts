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
import type { CreateRecommenderFilterRequest, CreateRecommenderFilterResponse } from "../models/models_0";
import { CreateRecommenderFilter$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRecommenderFilterCommand}.
 */
export interface CreateRecommenderFilterCommandInput extends CreateRecommenderFilterRequest {}
/**
 * @public
 *
 * The output of {@link CreateRecommenderFilterCommand}.
 */
export interface CreateRecommenderFilterCommandOutput extends CreateRecommenderFilterResponse, __MetadataBearer {}

/**
 * <p>Creates a recommender filter. A recommender filter specifies which items to include or exclude from recommendations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, CreateRecommenderFilterCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, CreateRecommenderFilterCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // CreateRecommenderFilterRequest
 *   DomainName: "STRING_VALUE", // required
 *   RecommenderFilterName: "STRING_VALUE", // required
 *   RecommenderFilterExpression: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRecommenderFilterCommand(input);
 * const response = await client.send(command);
 * // { // CreateRecommenderFilterResponse
 * //   RecommenderFilterArn: "STRING_VALUE", // required
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRecommenderFilterCommandInput - {@link CreateRecommenderFilterCommandInput}
 * @returns {@link CreateRecommenderFilterCommandOutput}
 * @see {@link CreateRecommenderFilterCommandInput} for command's `input` shape.
 * @see {@link CreateRecommenderFilterCommandOutput} for command's `response` shape.
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
export class CreateRecommenderFilterCommand extends $Command
  .classBuilder<
    CreateRecommenderFilterCommandInput,
    CreateRecommenderFilterCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "CreateRecommenderFilter", {})
  .n("CustomerProfilesClient", "CreateRecommenderFilterCommand")
  .sc(CreateRecommenderFilter$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRecommenderFilterRequest;
      output: CreateRecommenderFilterResponse;
    };
    sdk: {
      input: CreateRecommenderFilterCommandInput;
      output: CreateRecommenderFilterCommandOutput;
    };
  };
}
