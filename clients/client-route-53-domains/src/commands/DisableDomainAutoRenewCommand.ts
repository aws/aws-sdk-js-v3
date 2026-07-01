// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisableDomainAutoRenewRequest, DisableDomainAutoRenewResponse } from "../models/models_0";
import { DisableDomainAutoRenew$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisableDomainAutoRenewCommand}.
 */
export interface DisableDomainAutoRenewCommandInput extends DisableDomainAutoRenewRequest {}
/**
 * @public
 *
 * The output of {@link DisableDomainAutoRenewCommand}.
 */
export interface DisableDomainAutoRenewCommandOutput extends DisableDomainAutoRenewResponse, __MetadataBearer {}

/**
 * <p>This operation disables automatic renewal of domain registration for the specified
 * 			domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, DisableDomainAutoRenewCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, DisableDomainAutoRenewCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * // import type { Route53DomainsClientConfig } from "@aws-sdk/client-route-53-domains";
 * const config = {}; // type is Route53DomainsClientConfig
 * const client = new Route53DomainsClient(config);
 * const input = { // DisableDomainAutoRenewRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new DisableDomainAutoRenewCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableDomainAutoRenewCommandInput - {@link DisableDomainAutoRenewCommandInput}
 * @returns {@link DisableDomainAutoRenewCommandOutput}
 * @see {@link DisableDomainAutoRenewCommandInput} for command's `input` shape.
 * @see {@link DisableDomainAutoRenewCommandOutput} for command's `response` shape.
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
export class DisableDomainAutoRenewCommand extends command<DisableDomainAutoRenewCommandInput, DisableDomainAutoRenewCommandOutput>(
  _ep0,
  _mw0,
  "DisableDomainAutoRenew",
  DisableDomainAutoRenew$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableDomainAutoRenewRequest;
      output: {};
    };
    sdk: {
      input: DisableDomainAutoRenewCommandInput;
      output: DisableDomainAutoRenewCommandOutput;
    };
  };
}
