// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSimilarProfilesRequest, GetSimilarProfilesResponse } from "../models/models_0";
import { de_GetSimilarProfilesCommand, se_GetSimilarProfilesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns a set of profiles that belong to the same matching group using the
 *             <code>matchId</code> or <code>profileId</code>. You can also specify the type of
 *          matching that you want for finding similar profiles using either
 *             <code>RULE_BASED_MATCHING</code> or <code>ML_BASED_MATCHING</code>.</p>
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
export class GetSimilarProfilesCommand extends $Command
  .classBuilder<
    GetSimilarProfilesCommandInput,
    GetSimilarProfilesCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CustomerProfiles_20200815", "GetSimilarProfiles", {})
  .n("CustomerProfilesClient", "GetSimilarProfilesCommand")
  .f(void 0, void 0)
  .ser(se_GetSimilarProfilesCommand)
  .de(de_GetSimilarProfilesCommand)
  .build() {
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
