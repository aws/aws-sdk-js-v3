// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPricesRequest, ListPricesResponse } from "../models/models_0";
import { de_ListPricesCommand, se_ListPricesCommand } from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPricesCommand}.
 */
export interface ListPricesCommandInput extends ListPricesRequest {}
/**
 * @public
 *
 * The output of {@link ListPricesCommand}.
 */
export interface ListPricesCommandOutput extends ListPricesResponse, __MetadataBearer {}

/**
 * <p>Lists the following prices for either all the TLDs supported by Route 53, or
 * 			the specified TLD:</p>
 *          <ul>
 *             <li>
 *                <p>Registration</p>
 *             </li>
 *             <li>
 *                <p>Transfer</p>
 *             </li>
 *             <li>
 *                <p>Owner change</p>
 *             </li>
 *             <li>
 *                <p>Domain renewal</p>
 *             </li>
 *             <li>
 *                <p>Domain restoration</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, ListPricesCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, ListPricesCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Route53DomainsClient(config);
 * const input = { // ListPricesRequest
 *   Tld: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListPricesCommand(input);
 * const response = await client.send(command);
 * // { // ListPricesResponse
 * //   Prices: [ // DomainPriceList
 * //     { // DomainPrice
 * //       Name: "STRING_VALUE",
 * //       RegistrationPrice: { // PriceWithCurrency
 * //         Price: Number("double"), // required
 * //         Currency: "STRING_VALUE", // required
 * //       },
 * //       TransferPrice: {
 * //         Price: Number("double"), // required
 * //         Currency: "STRING_VALUE", // required
 * //       },
 * //       RenewalPrice: {
 * //         Price: Number("double"), // required
 * //         Currency: "STRING_VALUE", // required
 * //       },
 * //       ChangeOwnershipPrice: {
 * //         Price: Number("double"), // required
 * //         Currency: "STRING_VALUE", // required
 * //       },
 * //       RestorationPrice: {
 * //         Price: Number("double"), // required
 * //         Currency: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   NextPageMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPricesCommandInput - {@link ListPricesCommandInput}
 * @returns {@link ListPricesCommandOutput}
 * @see {@link ListPricesCommandInput} for command's `input` shape.
 * @see {@link ListPricesCommandOutput} for command's `response` shape.
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
export class ListPricesCommand extends $Command
  .classBuilder<
    ListPricesCommandInput,
    ListPricesCommandOutput,
    Route53DomainsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53DomainsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53Domains_v20140515", "ListPrices", {})
  .n("Route53DomainsClient", "ListPricesCommand")
  .f(void 0, void 0)
  .ser(se_ListPricesCommand)
  .de(de_ListPricesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPricesRequest;
      output: ListPricesResponse;
    };
    sdk: {
      input: ListPricesCommandInput;
      output: ListPricesCommandOutput;
    };
  };
}
