// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSimilarProfilesRequest, GetSimilarProfilesResponse } from "../models/models_0";
import { GetSimilarProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSimilarProfilesCommand}.
 */
export interface GetSimilarProfilesCommandInput extends GetSimilarProfilesRequest {}
/**
 * @public
 *
 * The output of {@link GetSimilarProfilesCommand}.
 */
export interface GetSimilarProfilesCommandOutput extends GetSimilarProfilesResponse, __MetadataBearer {}

/**
 * Returns a set of profiles that belong to the same matching group using the `matchId` or `profileId`. You can also specify the type of matching that you want for finding similar profiles using either `RULE_BASED_MATCHING` or `ML_BASED_MATCHING`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetSimilarProfilesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetSimilarProfilesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetSimilarProfilesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DomainName: "STRING_VALUE", // required
 *   MatchType: "RULE_BASED_MATCHING" || "ML_BASED_MATCHING", // required
 *   SearchKey: "STRING_VALUE", // required
 *   SearchValue: "STRING_VALUE", // required
 * };
 * const command = new GetSimilarProfilesCommand(input);
 * const response = await client.send(command);
 * // { // GetSimilarProfilesResponse
 * //   ProfileIds: [ // ProfileIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   MatchId: "STRING_VALUE",
 * //   MatchType: "RULE_BASED_MATCHING" || "ML_BASED_MATCHING",
 * //   RuleLevel: Number("int"),
 * //   ConfidenceScore: Number("double"),
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSimilarProfilesCommandInput - {@link GetSimilarProfilesCommandInput}
 * @returns {@link GetSimilarProfilesCommandOutput}
 * @see {@link GetSimilarProfilesCommandInput} for command's `input` shape.
 * @see {@link GetSimilarProfilesCommandOutput} for command's `response` shape.
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
export class GetSimilarProfilesCommand extends command<GetSimilarProfilesCommandInput, GetSimilarProfilesCommandOutput>(
  _ep0,
  _mw0,
  "GetSimilarProfiles",
  GetSimilarProfiles$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSimilarProfilesRequest;
      output: GetSimilarProfilesResponse;
    };
    sdk: {
      input: GetSimilarProfilesCommandInput;
      output: GetSimilarProfilesCommandOutput;
    };
  };
}
