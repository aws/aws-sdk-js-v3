// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRecommenderRequest, UpdateRecommenderResponse } from "../models/models_1";
import { UpdateRecommender$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRecommenderCommand}.
 */
export interface UpdateRecommenderCommandInput extends UpdateRecommenderRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRecommenderCommand}.
 */
export interface UpdateRecommenderCommandOutput extends UpdateRecommenderResponse, __MetadataBearer {}

/**
 * Updates the properties of an existing recommender, allowing you to modify its configuration and description.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, UpdateRecommenderCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, UpdateRecommenderCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // UpdateRecommenderRequest
 *   DomainName: "STRING_VALUE", // required
 *   RecommenderName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
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
 *   RecommenderVersionName: "STRING_VALUE",
 * };
 * const command = new UpdateRecommenderCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRecommenderResponse
 * //   RecommenderName: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateRecommenderCommandInput - {@link UpdateRecommenderCommandInput}
 * @returns {@link UpdateRecommenderCommandOutput}
 * @see {@link UpdateRecommenderCommandInput} for command's `input` shape.
 * @see {@link UpdateRecommenderCommandOutput} for command's `response` shape.
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
export class UpdateRecommenderCommand extends command<UpdateRecommenderCommandInput, UpdateRecommenderCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRecommender",
  UpdateRecommender$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRecommenderRequest;
      output: UpdateRecommenderResponse;
    };
    sdk: {
      input: UpdateRecommenderCommandInput;
      output: UpdateRecommenderCommandOutput;
    };
  };
}
