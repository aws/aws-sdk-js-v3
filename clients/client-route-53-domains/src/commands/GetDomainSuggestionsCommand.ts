// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDomainSuggestionsRequest, GetDomainSuggestionsResponse } from "../models/models_0";
import { de_GetDomainSuggestionsCommand, se_GetDomainSuggestionsCommand } from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDomainSuggestionsCommand}.
 */
export interface GetDomainSuggestionsCommandInput extends GetDomainSuggestionsRequest {}
/**
 * @public
 *
 * The output of {@link GetDomainSuggestionsCommand}.
 */
export interface GetDomainSuggestionsCommandOutput extends GetDomainSuggestionsResponse, __MetadataBearer {}

/**
 * <p>The GetDomainSuggestions operation returns a list of suggested domain names.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, GetDomainSuggestionsCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, GetDomainSuggestionsCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const input = { // GetDomainSuggestionsRequest
 *   DomainName: "STRING_VALUE", // required
 *   SuggestionCount: Number("int"), // required
 *   OnlyAvailable: true || false, // required
 * };
 * const command = new GetDomainSuggestionsCommand(input);
 * const response = await client.send(command);
 * // { // GetDomainSuggestionsResponse
 * //   SuggestionsList: [ // DomainSuggestionsList
 * //     { // DomainSuggestion
 * //       DomainName: "STRING_VALUE",
 * //       Availability: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDomainSuggestionsCommandInput - {@link GetDomainSuggestionsCommandInput}
 * @returns {@link GetDomainSuggestionsCommandOutput}
 * @see {@link GetDomainSuggestionsCommandInput} for command's `input` shape.
 * @see {@link GetDomainSuggestionsCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The requested item is not acceptable. For example, for APIs that accept a domain name,
 * 			the request might specify a domain name that doesn't belong to the account that
 * 			submitted the request. For <code>AcceptDomainTransferFromAnotherAwsAccount</code>, the
 * 			password might be invalid.</p>
 *
 * @throws {@link UnsupportedTLD} (client fault)
 *  <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
 *
 * @throws {@link Route53DomainsServiceException}
 * <p>Base exception class for all service exceptions from Route53Domains service.</p>
 *
 * @public
 */
export class GetDomainSuggestionsCommand extends $Command
  .classBuilder<
    GetDomainSuggestionsCommandInput,
    GetDomainSuggestionsCommandOutput,
    Route53DomainsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: Route53DomainsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53Domains_v20140515", "GetDomainSuggestions", {})
  .n("Route53DomainsClient", "GetDomainSuggestionsCommand")
  .f(void 0, void 0)
  .ser(se_GetDomainSuggestionsCommand)
  .de(de_GetDomainSuggestionsCommand)
  .build() {}
