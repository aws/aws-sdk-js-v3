// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRecommenderSchemaRequest, GetRecommenderSchemaResponse } from "../models/models_0";
import { GetRecommenderSchema$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRecommenderSchemaCommand}.
 */
export interface GetRecommenderSchemaCommandInput extends GetRecommenderSchemaRequest {}
/**
 * @public
 *
 * The output of {@link GetRecommenderSchemaCommand}.
 */
export interface GetRecommenderSchemaCommandOutput extends GetRecommenderSchemaResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a specific recommender schema in a domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetRecommenderSchemaCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetRecommenderSchemaCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetRecommenderSchemaRequest
 *   DomainName: "STRING_VALUE", // required
 *   RecommenderSchemaName: "STRING_VALUE", // required
 * };
 * const command = new GetRecommenderSchemaCommand(input);
 * const response = await client.send(command);
 * // { // GetRecommenderSchemaResponse
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
 * // };
 *
 * ```
 *
 * @param GetRecommenderSchemaCommandInput - {@link GetRecommenderSchemaCommandInput}
 * @returns {@link GetRecommenderSchemaCommandOutput}
 * @see {@link GetRecommenderSchemaCommandInput} for command's `input` shape.
 * @see {@link GetRecommenderSchemaCommandOutput} for command's `response` shape.
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
export class GetRecommenderSchemaCommand extends command<GetRecommenderSchemaCommandInput, GetRecommenderSchemaCommandOutput>(
  _ep0,
  _mw0,
  "GetRecommenderSchema",
  GetRecommenderSchema$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRecommenderSchemaRequest;
      output: GetRecommenderSchemaResponse;
    };
    sdk: {
      input: GetRecommenderSchemaCommandInput;
      output: GetRecommenderSchemaCommandOutput;
    };
  };
}
