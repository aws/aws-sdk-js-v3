// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDomainPricesRequest, GetDomainPricesResponse } from "../models/models_0";
import { GetDomainPrices$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDomainPricesCommand}.
 */
export interface GetDomainPricesCommandInput extends GetDomainPricesRequest {}
/**
 * @public
 *
 * The output of {@link GetDomainPricesCommand}.
 */
export interface GetDomainPricesCommandOutput extends GetDomainPricesResponse, __MetadataBearer {}

/**
 * <p>Returns the following prices for the specified domain:</p>
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
 *                <p>Renewal</p>
 *             </li>
 *             <li>
 *                <p>Restoration</p>
 *             </li>
 *          </ul>
 *          <p>For most domains, the prices match the standard prices for the TLD that the <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListPrices.html">ListPrices</a> operation returns. For a premium domain, the registry sets the
 * 			price individually. Premium prices might differ from the standard prices and can change
 * 			over time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, GetDomainPricesCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, GetDomainPricesCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * // import type { Route53DomainsClientConfig } from "@aws-sdk/client-route-53-domains";
 * const config = {}; // type is Route53DomainsClientConfig
 * const client = new Route53DomainsClient(config);
 * const input = { // GetDomainPricesRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new GetDomainPricesCommand(input);
 * const response = await client.send(command);
 * // { // GetDomainPricesResponse
 * //   DomainPrice: { // DomainPrice
 * //     Name: "STRING_VALUE",
 * //     RegistrationPrice: { // PriceWithCurrency
 * //       Price: Number("double"), // required
 * //       Currency: "STRING_VALUE", // required
 * //       PriceType: "STANDARD" || "REGISTRY_PREMIUM",
 * //     },
 * //     TransferPrice: {
 * //       Price: Number("double"), // required
 * //       Currency: "STRING_VALUE", // required
 * //       PriceType: "STANDARD" || "REGISTRY_PREMIUM",
 * //     },
 * //     RenewalPrice: {
 * //       Price: Number("double"), // required
 * //       Currency: "STRING_VALUE", // required
 * //       PriceType: "STANDARD" || "REGISTRY_PREMIUM",
 * //     },
 * //     ChangeOwnershipPrice: {
 * //       Price: Number("double"), // required
 * //       Currency: "STRING_VALUE", // required
 * //       PriceType: "STANDARD" || "REGISTRY_PREMIUM",
 * //     },
 * //     RestorationPrice: {
 * //       Price: Number("double"), // required
 * //       Currency: "STRING_VALUE", // required
 * //       PriceType: "STANDARD" || "REGISTRY_PREMIUM",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDomainPricesCommandInput - {@link GetDomainPricesCommandInput}
 * @returns {@link GetDomainPricesCommandOutput}
 * @see {@link GetDomainPricesCommandInput} for command's `input` shape.
 * @see {@link GetDomainPricesCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The requested item is not acceptable. For example, for APIs that accept a domain name,
 * 			the request might specify a domain name that doesn't belong to the account that
 * 			submitted the request. For <code>AcceptDomainTransferFromAnotherAwsAccount</code>, the
 * 			password might be invalid.</p>
 *
 * @throws {@link TLDInMaintenance} (client fault)
 *  <p>The top-level domain is currently undergoing maintenance and the request cannot be processed. Try again later.</p>
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
export class GetDomainPricesCommand extends command<GetDomainPricesCommandInput, GetDomainPricesCommandOutput>(
  _ep0,
  _mw0,
  "GetDomainPrices",
  GetDomainPrices$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDomainPricesRequest;
      output: GetDomainPricesResponse;
    };
    sdk: {
      input: GetDomainPricesCommandInput;
      output: GetDomainPricesCommandOutput;
    };
  };
}
