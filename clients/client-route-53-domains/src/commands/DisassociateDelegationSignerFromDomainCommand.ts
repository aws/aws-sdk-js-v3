// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisassociateDelegationSignerFromDomainRequest,
  DisassociateDelegationSignerFromDomainResponse,
} from "../models/models_0";
import { DisassociateDelegationSignerFromDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateDelegationSignerFromDomainCommand}.
 */
export interface DisassociateDelegationSignerFromDomainCommandInput extends DisassociateDelegationSignerFromDomainRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateDelegationSignerFromDomainCommand}.
 */
export interface DisassociateDelegationSignerFromDomainCommandOutput extends DisassociateDelegationSignerFromDomainResponse, __MetadataBearer {}

/**
 * <p>Deletes a delegation signer (DS) record in the registry zone for this domain
 * 			name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, DisassociateDelegationSignerFromDomainCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, DisassociateDelegationSignerFromDomainCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * // import type { Route53DomainsClientConfig } from "@aws-sdk/client-route-53-domains";
 * const config = {}; // type is Route53DomainsClientConfig
 * const client = new Route53DomainsClient(config);
 * const input = { // DisassociateDelegationSignerFromDomainRequest
 *   DomainName: "STRING_VALUE", // required
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DisassociateDelegationSignerFromDomainCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateDelegationSignerFromDomainResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateDelegationSignerFromDomainCommandInput - {@link DisassociateDelegationSignerFromDomainCommandInput}
 * @returns {@link DisassociateDelegationSignerFromDomainCommandOutput}
 * @see {@link DisassociateDelegationSignerFromDomainCommandInput} for command's `input` shape.
 * @see {@link DisassociateDelegationSignerFromDomainCommandOutput} for command's `response` shape.
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
 * @throws {@link TLDRulesViolation} (client fault)
 *  <p>The top-level domain does not support this operation.</p>
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
export class DisassociateDelegationSignerFromDomainCommand extends command<DisassociateDelegationSignerFromDomainCommandInput, DisassociateDelegationSignerFromDomainCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateDelegationSignerFromDomain",
  DisassociateDelegationSignerFromDomain$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateDelegationSignerFromDomainRequest;
      output: DisassociateDelegationSignerFromDomainResponse;
    };
    sdk: {
      input: DisassociateDelegationSignerFromDomainCommandInput;
      output: DisassociateDelegationSignerFromDomainCommandOutput;
    };
  };
}
