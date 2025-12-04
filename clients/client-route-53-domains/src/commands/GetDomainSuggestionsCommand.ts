// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetDomainSuggestionsRequest, GetDomainSuggestionsResponse } from "../models/models_0";
import type {
  Route53DomainsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53DomainsClient";
import { GetDomainSuggestions } from "../schemas/schemas_0";

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
 * // import type { Route53DomainsClientConfig } from "@aws-sdk/client-route-53-domains";
 * const config = {}; // type is Route53DomainsClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53DomainsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Domains_v20140515", "GetDomainSuggestions", {})
  .n("Route53DomainsClient", "GetDomainSuggestionsCommand")
  .sc(GetDomainSuggestions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDomainSuggestionsRequest;
      output: GetDomainSuggestionsResponse;
    };
    sdk: {
      input: GetDomainSuggestionsCommandInput;
      output: GetDomainSuggestionsCommandOutput;
    };
  };
}
