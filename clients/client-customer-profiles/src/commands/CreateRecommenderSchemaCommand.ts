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
import type { CreateRecommenderSchemaRequest, CreateRecommenderSchemaResponse } from "../models/models_0";
import { CreateRecommenderSchema$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a recommender schema. A recommender schema defines the set of data columns available for training recommenders and filters under a domain.</p>
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
export class CreateRecommenderSchemaCommand extends $Command
  .classBuilder<
    CreateRecommenderSchemaCommandInput,
    CreateRecommenderSchemaCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "CreateRecommenderSchema", {})
  .n("CustomerProfilesClient", "CreateRecommenderSchemaCommand")
  .sc(CreateRecommenderSchema$)
  .build() {
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
