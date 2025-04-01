// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRuleBasedMatchesRequest, ListRuleBasedMatchesResponse } from "../models/models_0";
import { de_ListRuleBasedMatchesCommand, se_ListRuleBasedMatchesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRuleBasedMatchesCommand}.
 */
export interface ListRuleBasedMatchesCommandInput extends ListRuleBasedMatchesRequest {}
/**
 * @public
 *
 * The output of {@link ListRuleBasedMatchesCommand}.
 */
export interface ListRuleBasedMatchesCommandOutput extends ListRuleBasedMatchesResponse, __MetadataBearer {}

/**
 * <p>Returns a set of <code>MatchIds</code> that belong to the given domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListRuleBasedMatchesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListRuleBasedMatchesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListRuleBasedMatchesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new ListRuleBasedMatchesCommand(input);
 * const response = await client.send(command);
 * // { // ListRuleBasedMatchesResponse
 * //   MatchIds: [ // MatchIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRuleBasedMatchesCommandInput - {@link ListRuleBasedMatchesCommandInput}
 * @returns {@link ListRuleBasedMatchesCommandOutput}
 * @see {@link ListRuleBasedMatchesCommandInput} for command's `input` shape.
 * @see {@link ListRuleBasedMatchesCommandOutput} for command's `response` shape.
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
export class ListRuleBasedMatchesCommand extends $Command
  .classBuilder<
    ListRuleBasedMatchesCommandInput,
    ListRuleBasedMatchesCommandOutput,
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
  .s("CustomerProfiles_20200815", "ListRuleBasedMatches", {})
  .n("CustomerProfilesClient", "ListRuleBasedMatchesCommand")
  .f(void 0, void 0)
  .ser(se_ListRuleBasedMatchesCommand)
  .de(de_ListRuleBasedMatchesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRuleBasedMatchesRequest;
      output: ListRuleBasedMatchesResponse;
    };
    sdk: {
      input: ListRuleBasedMatchesCommandInput;
      output: ListRuleBasedMatchesCommandOutput;
    };
  };
}
