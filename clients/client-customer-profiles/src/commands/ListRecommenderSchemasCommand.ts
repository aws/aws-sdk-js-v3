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
import type { ListRecommenderSchemasRequest, ListRecommenderSchemasResponse } from "../models/models_0";
import { ListRecommenderSchemas$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRecommenderSchemasCommand}.
 */
export interface ListRecommenderSchemasCommandInput extends ListRecommenderSchemasRequest {}
/**
 * @public
 *
 * The output of {@link ListRecommenderSchemasCommand}.
 */
export interface ListRecommenderSchemasCommandOutput extends ListRecommenderSchemasResponse, __MetadataBearer {}

/**
 * <p>Returns a list of recommender schemas in the specified domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListRecommenderSchemasCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListRecommenderSchemasCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListRecommenderSchemasRequest
 *   DomainName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRecommenderSchemasCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommenderSchemasResponse
 * //   NextToken: "STRING_VALUE",
 * //   RecommenderSchemas: [ // RecommenderSchemaSummaryList
 * //     { // RecommenderSchemaSummary
 * //       RecommenderSchemaName: "STRING_VALUE", // required
 * //       Fields: { // RecommenderSchemaFields // required
 * //         "<keys>": [ // RecommenderSchemaFieldList
 * //           { // RecommenderSchemaField
 * //             TargetFieldName: "STRING_VALUE", // required
 * //             ContentType: "STRING" || "NUMBER",
 * //             FeatureType: "TEXTUAL" || "CATEGORICAL",
 * //           },
 * //         ],
 * //       },
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       Status: "ACTIVE" || "DELETING", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRecommenderSchemasCommandInput - {@link ListRecommenderSchemasCommandInput}
 * @returns {@link ListRecommenderSchemasCommandOutput}
 * @see {@link ListRecommenderSchemasCommandInput} for command's `input` shape.
 * @see {@link ListRecommenderSchemasCommandOutput} for command's `response` shape.
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
export class ListRecommenderSchemasCommand extends $Command
  .classBuilder<
    ListRecommenderSchemasCommandInput,
    ListRecommenderSchemasCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "ListRecommenderSchemas", {})
  .n("CustomerProfilesClient", "ListRecommenderSchemasCommand")
  .sc(ListRecommenderSchemas$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecommenderSchemasRequest;
      output: ListRecommenderSchemasResponse;
    };
    sdk: {
      input: ListRecommenderSchemasCommandInput;
      output: ListRecommenderSchemasCommandOutput;
    };
  };
}
