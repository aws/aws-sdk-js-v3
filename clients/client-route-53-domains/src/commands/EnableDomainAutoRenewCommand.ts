// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { EnableDomainAutoRenewRequest, EnableDomainAutoRenewResponse } from "../models/models_0";
import { EnableDomainAutoRenew$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EnableDomainAutoRenewCommand}.
 */
export interface EnableDomainAutoRenewCommandInput extends EnableDomainAutoRenewRequest {}
/**
 * @public
 *
 * The output of {@link EnableDomainAutoRenewCommand}.
 */
export interface EnableDomainAutoRenewCommandOutput extends EnableDomainAutoRenewResponse, __MetadataBearer {}

/**
 * This operation configures Amazon Route 53 to automatically renew the specified domain before the domain registration expires. The cost of renewing your domain registration is billed to your Amazon Web Services account.
 *
 * The period during which you can renew a domain name varies by TLD. For a list of TLDs and their renewal policies, see [Domains That You Can Register with Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html) in the *Amazon Route 53 Developer Guide*. Route 53 requires that you renew before the end of the renewal period so we can complete processing before the deadline.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, EnableDomainAutoRenewCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, EnableDomainAutoRenewCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * // import type { Route53DomainsClientConfig } from "@aws-sdk/client-route-53-domains";
 * const config = {}; // type is Route53DomainsClientConfig
 * const client = new Route53DomainsClient(config);
 * const input = { // EnableDomainAutoRenewRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new EnableDomainAutoRenewCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableDomainAutoRenewCommandInput - {@link EnableDomainAutoRenewCommandInput}
 * @returns {@link EnableDomainAutoRenewCommandOutput}
 * @see {@link EnableDomainAutoRenewCommandInput} for command's `input` shape.
 * @see {@link EnableDomainAutoRenewCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *
 * The requested item is not acceptable. For example, for APIs that accept a domain name, the request might specify a domain name that doesn't belong to the account that submitted the request. For `AcceptDomainTransferFromAnotherAwsAccount`, the password might be invalid.
 *
 * @throws {@link TLDRulesViolation} (client fault)
 *
 * The top-level domain does not support this operation.
 *
 * @throws {@link UnsupportedTLD} (client fault)
 *
 * Amazon Route 53 does not support this top-level domain (TLD).
 *
 * @throws {@link Route53DomainsServiceException}
 *
 * Base exception class for all service exceptions from Route53Domains service.
 *
 * @public
 */
export class EnableDomainAutoRenewCommand extends command<EnableDomainAutoRenewCommandInput, EnableDomainAutoRenewCommandOutput>(
  _ep0,
  _mw0,
  "EnableDomainAutoRenew",
  EnableDomainAutoRenew$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableDomainAutoRenewRequest;
      output: {};
    };
    sdk: {
      input: EnableDomainAutoRenewCommandInput;
      output: EnableDomainAutoRenewCommandOutput;
    };
  };
}
