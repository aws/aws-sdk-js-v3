// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CancelDomainTransferToAnotherAwsAccountRequest,
  CancelDomainTransferToAnotherAwsAccountResponse,
} from "../models/models_0";
import { CancelDomainTransferToAnotherAwsAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelDomainTransferToAnotherAwsAccountCommand}.
 */
export interface CancelDomainTransferToAnotherAwsAccountCommandInput extends CancelDomainTransferToAnotherAwsAccountRequest {}
/**
 * @public
 *
 * The output of {@link CancelDomainTransferToAnotherAwsAccountCommand}.
 */
export interface CancelDomainTransferToAnotherAwsAccountCommandOutput extends CancelDomainTransferToAnotherAwsAccountResponse, __MetadataBearer {}

/**
 * Cancels the transfer of a domain from the current Amazon Web Services account to another Amazon Web Services account. You initiate a transfer betweenAmazon Web Services accounts using [TransferDomainToAnotherAwsAccount](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html).
 *
 * > **Important:** You must cancel the transfer before the other Amazon Web Services account accepts the transfer using [AcceptDomainTransferFromAnotherAwsAccount](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html).
 *
 * Use either [ListOperations](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html) or [GetOperationDetail](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html) to determine whether the operation succeeded. [GetOperationDetail](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html) provides additional information, for example, `Domain Transfer from Aws Account 111122223333 has been cancelled`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, CancelDomainTransferToAnotherAwsAccountCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, CancelDomainTransferToAnotherAwsAccountCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * // import type { Route53DomainsClientConfig } from "@aws-sdk/client-route-53-domains";
 * const config = {}; // type is Route53DomainsClientConfig
 * const client = new Route53DomainsClient(config);
 * const input = { // CancelDomainTransferToAnotherAwsAccountRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new CancelDomainTransferToAnotherAwsAccountCommand(input);
 * const response = await client.send(command);
 * // { // CancelDomainTransferToAnotherAwsAccountResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelDomainTransferToAnotherAwsAccountCommandInput - {@link CancelDomainTransferToAnotherAwsAccountCommandInput}
 * @returns {@link CancelDomainTransferToAnotherAwsAccountCommandOutput}
 * @see {@link CancelDomainTransferToAnotherAwsAccountCommandInput} for command's `input` shape.
 * @see {@link CancelDomainTransferToAnotherAwsAccountCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
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
export class CancelDomainTransferToAnotherAwsAccountCommand extends command<CancelDomainTransferToAnotherAwsAccountCommandInput, CancelDomainTransferToAnotherAwsAccountCommandOutput>(
  _ep0,
  _mw0,
  "CancelDomainTransferToAnotherAwsAccount",
  CancelDomainTransferToAnotherAwsAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelDomainTransferToAnotherAwsAccountRequest;
      output: CancelDomainTransferToAnotherAwsAccountResponse;
    };
    sdk: {
      input: CancelDomainTransferToAnotherAwsAccountCommandInput;
      output: CancelDomainTransferToAnotherAwsAccountCommandOutput;
    };
  };
}
