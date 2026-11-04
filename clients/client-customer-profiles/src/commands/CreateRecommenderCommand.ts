// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRecommenderRequest, CreateRecommenderResponse } from "../models/models_0";
import { CreateRecommender$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRecommenderCommand}.
 */
export interface CreateRecommenderCommandInput extends CreateRecommenderRequest {}
/**
 * @public
 *
 * The output of {@link CreateRecommenderCommand}.
 */
export interface CreateRecommenderCommandOutput extends CreateRecommenderResponse, __MetadataBearer {}

/**
 * Creates a recommender
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, CreateRecommenderCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, CreateRecommenderCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // CreateRecommenderRequest
 *   DomainName: "STRING_VALUE", // required
 *   RecommenderName: "STRING_VALUE", // required
 *   RecommenderRecipeName: "recommended-for-you" || "similar-items" || "frequently-paired-items" || "popular-items" || "trending-now" || "personalized-ranking", // required
 *   RecommenderConfig: { // RecommenderConfig
 *     EventsConfig: { // EventsConfig
 *       EventParametersList: [ // EventParametersList // required
 *         { // EventParameters
 *           EventType: "STRING_VALUE", // required
 *           EventValueThreshold: Number("double"),
 *           EventWeight: Number("double"),
 *         },
 *       ],
 *     },
 *     TrainingFrequency: Number("int"),
 *     InferenceConfig: { // InferenceConfig
 *       MinProvisionedTPS: Number("int"),
 *     },
 *     IncludedColumns: { // IncludedColumns
 *       "<keys>": [ // ColumnNamesList
 *         "STRING_VALUE",
 *       ],
 *     },
 *     ExcludedColumns: {
 *       "<keys>": [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     DiversityConfig: { // DiversityConfig
 *       DiversityColumns: [ // DiversityColumnsList
 *         { // DiversityColumn
 *           Name: "STRING_VALUE", // required
 *           CapType: "PERCENTAGE" || "VALUE", // required
 *           Target: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 *   Description: "STRING_VALUE",
 *   RecommenderSchemaName: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRecommenderCommand(input);
 * const response = await client.send(command);
 * // { // CreateRecommenderResponse
 * //   RecommenderArn: "STRING_VALUE", // required
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRecommenderCommandInput - {@link CreateRecommenderCommandInput}
 * @returns {@link CreateRecommenderCommandOutput}
 * @see {@link CreateRecommenderCommandInput} for command's `input` shape.
 * @see {@link CreateRecommenderCommandOutput} for command's `response` shape.
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
export class CreateRecommenderCommand extends command<CreateRecommenderCommandInput, CreateRecommenderCommandOutput>(
  _ep0,
  _mw0,
  "CreateRecommender",
  CreateRecommender$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRecommenderRequest;
      output: CreateRecommenderResponse;
    };
    sdk: {
      input: CreateRecommenderCommandInput;
      output: CreateRecommenderCommandOutput;
    };
  };
}
