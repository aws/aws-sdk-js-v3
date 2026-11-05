// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RestoreDomainRequest, RestoreDomainResponse } from "../models/models_0";
import { RestoreDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RestoreDomainCommand}.
 */
export interface RestoreDomainCommandInput extends RestoreDomainRequest {}
/**
 * @public
 *
 * The output of {@link RestoreDomainCommand}.
 */
export interface RestoreDomainCommandOutput extends RestoreDomainResponse, __MetadataBearer {}

/**
 * <p>Restores a domain that has expired, or was deleted, before it becomes available
 * 			for others to register. The cost of restoring your domain is billed to your Amazon Web Services account.</p>
 *          <p>Not every TLD registry supports restoring domains, and the period during which a
 * 			domain can be restored varies by TLD. To find out whether your domain can be restored
 * 			and the period during which you can restore it, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that you can
 * 				register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer
 * 				Guide</i>.</p>
 *          <important>
 *             <p>Restoring a domain typically costs more, and sometimes much more, than registering
 * 				or renewing a domain. To get the restoration price for a domain before you restore
 * 				it, use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetDomainPrices.html">GetDomainPrices</a>.</p>
 *          </important>
 *          <p>Restoration is asynchronous. The response includes an operation ID that you can use
 * 			with <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to track the progress of the request. When the restoration
 * 			succeeds, the domain reappears in the response to <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListDomains.html">ListDomains</a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-restore-expired.html">Restoring an
 * 				expired or deleted domain</a> in the <i>Amazon Route 53 Developer
 * 				Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, RestoreDomainCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, RestoreDomainCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * // import type { Route53DomainsClientConfig } from "@aws-sdk/client-route-53-domains";
 * const config = {}; // type is Route53DomainsClientConfig
 * const client = new Route53DomainsClient(config);
 * const input = { // RestoreDomainRequest
 *   DomainName: "STRING_VALUE", // required
 *   Consent: { // Consent
 *     MaxPrice: Number("double"), // required
 *     Currency: "STRING_VALUE", // required
 *   },
 * };
 * const command = new RestoreDomainCommand(input);
 * const response = await client.send(command);
 * // { // RestoreDomainResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RestoreDomainCommandInput - {@link RestoreDomainCommandInput}
 * @returns {@link RestoreDomainCommandOutput}
 * @see {@link RestoreDomainCommandInput} for command's `input` shape.
 * @see {@link RestoreDomainCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 * @throws {@link DuplicateRequest} (client fault)
 *  <p>The request is already in progress for the domain.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The requested item is not acceptable. For example, for APIs that accept a domain name,
 * 			the request might specify a domain name that doesn't belong to the account that
 * 			submitted the request. For <code>AcceptDomainTransferFromAnotherAwsAccount</code>, the
 * 			password might be invalid.</p>
 *
 * @throws {@link OperationLimitExceeded} (client fault)
 *  <p>The number of operations or jobs running exceeded the allowed threshold for the
 * 			account.</p>
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
export class RestoreDomainCommand extends command<RestoreDomainCommandInput, RestoreDomainCommandOutput>(
  _ep0,
  _mw0,
  "RestoreDomain",
  RestoreDomain$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreDomainRequest;
      output: RestoreDomainResponse;
    };
    sdk: {
      input: RestoreDomainCommandInput;
      output: RestoreDomainCommandOutput;
    };
  };
}
