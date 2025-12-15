// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  AssociateDelegationSignerToDomainRequest,
  AssociateDelegationSignerToDomainResponse,
} from "../models/models_0";
import type {
  Route53DomainsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53DomainsClient";
import { AssociateDelegationSignerToDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateDelegationSignerToDomainCommand}.
 */
export interface AssociateDelegationSignerToDomainCommandInput extends AssociateDelegationSignerToDomainRequest {}
/**
 * @public
 *
 * The output of {@link AssociateDelegationSignerToDomainCommand}.
 */
export interface AssociateDelegationSignerToDomainCommandOutput
  extends AssociateDelegationSignerToDomainResponse,
    __MetadataBearer {}

/**
 * <p> Creates a delegation signer (DS) record in the registry zone for this domain
 * 			name.</p>
 *          <p>Note that creating DS record at the registry impacts DNSSEC validation of your DNS
 * 			records. This action may render your domain name unavailable on the internet if the
 * 			steps are completed in the wrong order, or with incorrect timing. For more information
 * 			about DNSSEC signing, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-dnssec.html">Configuring DNSSEC
 * 				signing</a> in the <i>Route 53 developer
 * 			guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, AssociateDelegationSignerToDomainCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, AssociateDelegationSignerToDomainCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * // import type { Route53DomainsClientConfig } from "@aws-sdk/client-route-53-domains";
 * const config = {}; // type is Route53DomainsClientConfig
 * const client = new Route53DomainsClient(config);
 * const input = { // AssociateDelegationSignerToDomainRequest
 *   DomainName: "STRING_VALUE", // required
 *   SigningAttributes: { // DnssecSigningAttributes
 *     Algorithm: Number("int"),
 *     Flags: Number("int"),
 *     PublicKey: "STRING_VALUE",
 *   },
 * };
 * const command = new AssociateDelegationSignerToDomainCommand(input);
 * const response = await client.send(command);
 * // { // AssociateDelegationSignerToDomainResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateDelegationSignerToDomainCommandInput - {@link AssociateDelegationSignerToDomainCommandInput}
 * @returns {@link AssociateDelegationSignerToDomainCommandOutput}
 * @see {@link AssociateDelegationSignerToDomainCommandInput} for command's `input` shape.
 * @see {@link AssociateDelegationSignerToDomainCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 * @throws {@link DnssecLimitExceeded} (client fault)
 *  <p> This error is returned if you call <code>AssociateDelegationSignerToDomain</code>
 * 			when the specified domain has reached the maximum number of DS records. You can't add
 * 			any additional DS records unless you delete an existing one first. </p>
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
export class AssociateDelegationSignerToDomainCommand extends $Command
  .classBuilder<
    AssociateDelegationSignerToDomainCommandInput,
    AssociateDelegationSignerToDomainCommandOutput,
    Route53DomainsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53DomainsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Domains_v20140515", "AssociateDelegationSignerToDomain", {})
  .n("Route53DomainsClient", "AssociateDelegationSignerToDomainCommand")
  .sc(AssociateDelegationSignerToDomain$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateDelegationSignerToDomainRequest;
      output: AssociateDelegationSignerToDomainResponse;
    };
    sdk: {
      input: AssociateDelegationSignerToDomainCommandInput;
      output: AssociateDelegationSignerToDomainCommandOutput;
    };
  };
}
