// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RenewDomainRequest, RenewDomainResponse } from "../models/models_0";
import { RenewDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RenewDomainCommand}.
 */
export interface RenewDomainCommandInput extends RenewDomainRequest {}
/**
 * @public
 *
 * The output of {@link RenewDomainCommand}.
 */
export interface RenewDomainCommandOutput extends RenewDomainResponse, __MetadataBearer {}

/**
 * This operation renews a domain for the specified number of years. The cost of renewing your domain is billed to your Amazon Web Services account.
 *
 * We recommend that you renew your domain several weeks before the expiration date. Some TLD registries delete domains before the expiration date if you haven't renewed far enough in advance. For more information about renewing domain registration, see [Renewing Registration for a Domain](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-renew.html) in the *Amazon Route 53 Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, RenewDomainCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, RenewDomainCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * // import type { Route53DomainsClientConfig } from "@aws-sdk/client-route-53-domains";
 * const config = {}; // type is Route53DomainsClientConfig
 * const client = new Route53DomainsClient(config);
 * const input = { // RenewDomainRequest
 *   DomainName: "STRING_VALUE", // required
 *   DurationInYears: Number("int"),
 *   CurrentExpiryYear: Number("int"), // required
 *   Consent: { // Consent
 *     MaxPrice: Number("double"), // required
 *     Currency: "STRING_VALUE", // required
 *   },
 * };
 * const command = new RenewDomainCommand(input);
 * const response = await client.send(command);
 * // { // RenewDomainResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RenewDomainCommandInput - {@link RenewDomainCommandInput}
 * @returns {@link RenewDomainCommandOutput}
 * @see {@link RenewDomainCommandInput} for command's `input` shape.
 * @see {@link RenewDomainCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 * @throws {@link DuplicateRequest} (client fault)
 *
 * The request is already in progress for the domain.
 *
 * @throws {@link InvalidInput} (client fault)
 *
 * The requested item is not acceptable. For example, for APIs that accept a domain name, the request might specify a domain name that doesn't belong to the account that submitted the request. For `AcceptDomainTransferFromAnotherAwsAccount`, the password might be invalid.
 *
 * @throws {@link OperationLimitExceeded} (client fault)
 *
 * The number of operations or jobs running exceeded the allowed threshold for the account.
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
export class RenewDomainCommand extends command<RenewDomainCommandInput, RenewDomainCommandOutput>(
  _ep0,
  _mw0,
  "RenewDomain",
  RenewDomain$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RenewDomainRequest;
      output: RenewDomainResponse;
    };
    sdk: {
      input: RenewDomainCommandInput;
      output: RenewDomainCommandOutput;
    };
  };
}
