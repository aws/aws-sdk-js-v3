// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  TransferDomainToAnotherAwsAccountRequest,
  TransferDomainToAnotherAwsAccountResponse,
} from "../models/models_0";
import { TransferDomainToAnotherAwsAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Transfers a domain from the current Amazon Web Services account to another Amazon Web Services account. Note the following:
 *
 * - The Amazon Web Services account that you're transferring the domain to must accept the transfer. If the other account doesn't accept the transfer within 3 days, we cancel the transfer. See [AcceptDomainTransferFromAnotherAwsAccount](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html).
 * - You can cancel the transfer before the other account accepts it. See [CancelDomainTransferToAnotherAwsAccount](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CancelDomainTransferToAnotherAwsAccount.html).
 * - The other account can reject the transfer. See [RejectDomainTransferFromAnotherAwsAccount](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RejectDomainTransferFromAnotherAwsAccount.html).
 *
 * > **Important:** When you transfer a domain from one Amazon Web Services account to another, Route 53 doesn't transfer the hosted zone that is associated with the domain. DNS resolution isn't affected if the domain and the hosted zone are owned by separate accounts, so transferring the hosted zone is optional. For information about transferring the hosted zone to another Amazon Web Services account, see [Migrating a Hosted Zone to a Different Amazon Web Services Account](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-migrating.html) in the *Amazon Route 53 Developer Guide*.
 *
 * Use either [ListOperations](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html) or [GetOperationDetail](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html) to determine whether the operation succeeded. [GetOperationDetail](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html) provides additional information, for example, `Domain Transfer from Aws Account 111122223333 has been cancelled`.
 *
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
export class TransferDomainToAnotherAwsAccountCommand extends command<TransferDomainToAnotherAwsAccountCommandInput, TransferDomainToAnotherAwsAccountCommandOutput>(
  _ep0,
  _mw0,
  "TransferDomainToAnotherAwsAccount",
  TransferDomainToAnotherAwsAccount$
) {
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
