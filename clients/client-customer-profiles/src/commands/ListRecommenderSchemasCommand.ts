// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRecommenderSchemasRequest, ListRecommenderSchemasResponse } from "../models/models_1";
import { ListRecommenderSchemas$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a list of recommender schemas in the specified domain.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource does not exist, or access was denied.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * You exceeded the maximum number of requests.
 *
 * @throws {@link CustomerProfilesServiceException}
 *
 * Base exception class for all service exceptions from CustomerProfiles service.
 *
 * @public
 */
export class ListRecommenderSchemasCommand extends command<ListRecommenderSchemasCommandInput, ListRecommenderSchemasCommandOutput>(
  _ep0,
  _mw0,
  "ListRecommenderSchemas",
  ListRecommenderSchemas$
) {
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
