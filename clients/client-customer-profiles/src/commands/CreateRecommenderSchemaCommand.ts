// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRecommenderSchemaRequest, CreateRecommenderSchemaResponse } from "../models/models_0";
import { CreateRecommenderSchema$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRecommenderSchemaCommand}.
 */
export interface CreateRecommenderSchemaCommandInput extends CreateRecommenderSchemaRequest {}
/**
 * @public
 *
 * The output of {@link CreateRecommenderSchemaCommand}.
 */
export interface CreateRecommenderSchemaCommandOutput extends CreateRecommenderSchemaResponse, __MetadataBearer {}

/**
 * Creates a recommender schema. A recommender schema defines the set of data columns available for training recommenders and filters under a domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, CreateRecommenderSchemaCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, CreateRecommenderSchemaCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // CreateRecommenderSchemaRequest
 *   DomainName: "STRING_VALUE", // required
 *   RecommenderSchemaName: "STRING_VALUE", // required
 *   Fields: { // RecommenderSchemaFields // required
 *     "<keys>": [ // RecommenderSchemaFieldList
 *       { // RecommenderSchemaField
 *         TargetFieldName: "STRING_VALUE", // required
 *         ContentType: "STRING" || "NUMBER",
 *         FeatureType: "TEXTUAL" || "CATEGORICAL",
 *       },
 *     ],
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRecommenderSchemaCommand(input);
 * const response = await client.send(command);
 * // { // CreateRecommenderSchemaResponse
 * //   RecommenderSchemaArn: "STRING_VALUE", // required
 * //   RecommenderSchemaName: "STRING_VALUE", // required
 * //   Fields: { // RecommenderSchemaFields // required
 * //     "<keys>": [ // RecommenderSchemaFieldList
 * //       { // RecommenderSchemaField
 * //         TargetFieldName: "STRING_VALUE", // required
 * //         ContentType: "STRING" || "NUMBER",
 * //         FeatureType: "TEXTUAL" || "CATEGORICAL",
 * //       },
 * //     ],
 * //   },
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   Status: "ACTIVE" || "DELETING", // required
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRecommenderSchemaCommandInput - {@link CreateRecommenderSchemaCommandInput}
 * @returns {@link CreateRecommenderSchemaCommandOutput}
 * @see {@link CreateRecommenderSchemaCommandInput} for command's `input` shape.
 * @see {@link CreateRecommenderSchemaCommandOutput} for command's `response` shape.
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
export class CreateRecommenderSchemaCommand extends command<CreateRecommenderSchemaCommandInput, CreateRecommenderSchemaCommandOutput>(
  _ep0,
  _mw0,
  "CreateRecommenderSchema",
  CreateRecommenderSchema$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRecommenderSchemaRequest;
      output: CreateRecommenderSchemaResponse;
    };
    sdk: {
      input: CreateRecommenderSchemaCommandInput;
      output: CreateRecommenderSchemaCommandOutput;
    };
  };
}
