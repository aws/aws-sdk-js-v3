// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  TransferDomainToAnotherAwsAccountRequest,
  TransferDomainToAnotherAwsAccountResponse,
} from "../models/models_0";
import type {
  Route53DomainsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53DomainsClient";
import { TransferDomainToAnotherAwsAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TransferDomainToAnotherAwsAccountCommand}.
 */
export interface TransferDomainToAnotherAwsAccountCommandInput extends TransferDomainToAnotherAwsAccountRequest {}
/**
 * @public
 *
 * The output of {@link TransferDomainToAnotherAwsAccountCommand}.
 */
export interface TransferDomainToAnotherAwsAccountCommandOutput extends TransferDomainToAnotherAwsAccountResponse, __MetadataBearer {}

/**
 * <p>Transfers a domain from the current Amazon Web Services account to another Amazon Web Services account. Note the following:</p>
 *          <ul>
 *             <li>
 *                <p>The Amazon Web Services account that you're transferring the domain to must
 * 					accept the transfer. If the other account doesn't accept the transfer within 3
 * 					days, we cancel the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>. </p>
 *             </li>
 *             <li>
 *                <p>You can cancel the transfer before the other account accepts it. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CancelDomainTransferToAnotherAwsAccount.html">CancelDomainTransferToAnotherAwsAccount</a>. </p>
 *             </li>
 *             <li>
 *                <p>The other account can reject the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RejectDomainTransferFromAnotherAwsAccount.html">RejectDomainTransferFromAnotherAwsAccount</a>. </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>When you transfer a domain from one Amazon Web Services account to another, Route
 * 				53 doesn't transfer the hosted zone that is associated with the domain. DNS
 * 				resolution isn't affected if the domain and the hosted zone are owned by separate
 * 				accounts, so transferring the hosted zone is optional. For information about
 * 				transferring the hosted zone to another Amazon Web Services account, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-migrating.html">Migrating a
 * 					Hosted Zone to a Different Amazon Web Services Account</a> in the
 * 					<i>Amazon Route 53 Developer Guide</i>.</p>
 *          </important>
 *          <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example,
 * 				<code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, TransferDomainToAnotherAwsAccountCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, TransferDomainToAnotherAwsAccountCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * // import type { Route53DomainsClientConfig } from "@aws-sdk/client-route-53-domains";
 * const config = {}; // type is Route53DomainsClientConfig
 * const client = new Route53DomainsClient(config);
 * const input = { // TransferDomainToAnotherAwsAccountRequest
 *   DomainName: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE", // required
 * };
 * const command = new TransferDomainToAnotherAwsAccountCommand(input);
 * const response = await client.send(command);
 * // { // TransferDomainToAnotherAwsAccountResponse
 * //   OperationId: "STRING_VALUE",
 * //   Password: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param TransferDomainToAnotherAwsAccountCommandInput - {@link TransferDomainToAnotherAwsAccountCommandInput}
 * @returns {@link TransferDomainToAnotherAwsAccountCommandOutput}
 * @see {@link TransferDomainToAnotherAwsAccountCommandInput} for command's `input` shape.
 * @see {@link TransferDomainToAnotherAwsAccountCommandOutput} for command's `response` shape.
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
export class TransferDomainToAnotherAwsAccountCommand extends $Command
  .classBuilder<
    TransferDomainToAnotherAwsAccountCommandInput,
    TransferDomainToAnotherAwsAccountCommandOutput,
    Route53DomainsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53DomainsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Domains_v20140515", "TransferDomainToAnotherAwsAccount", {})
  .n("Route53DomainsClient", "TransferDomainToAnotherAwsAccountCommand")
  .sc(TransferDomainToAnotherAwsAccount$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TransferDomainToAnotherAwsAccountRequest;
      output: TransferDomainToAnotherAwsAccountResponse;
    };
    sdk: {
      input: TransferDomainToAnotherAwsAccountCommandInput;
      output: TransferDomainToAnotherAwsAccountCommandOutput;
    };
  };
}
