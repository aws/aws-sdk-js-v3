// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  RejectDomainTransferFromAnotherAwsAccountRequest,
  RejectDomainTransferFromAnotherAwsAccountResponse,
} from "../models/models_0";
import { RejectDomainTransferFromAnotherAwsAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RejectDomainTransferFromAnotherAwsAccountCommand}.
 */
export interface RejectDomainTransferFromAnotherAwsAccountCommandInput extends RejectDomainTransferFromAnotherAwsAccountRequest {}
/**
 * @public
 *
 * The output of {@link RejectDomainTransferFromAnotherAwsAccountCommand}.
 */
export interface RejectDomainTransferFromAnotherAwsAccountCommandOutput extends RejectDomainTransferFromAnotherAwsAccountResponse, __MetadataBearer {}

/**
 * Rejects the transfer of a domain from another Amazon Web Services account to the current Amazon Web Services account. You initiate a transfer betweenAmazon Web Services accounts using [TransferDomainToAnotherAwsAccount](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html).
 *
 * Use either [ListOperations](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html) or [GetOperationDetail](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html) to determine whether the operation succeeded. [GetOperationDetail](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html) provides additional information, for example, `Domain Transfer from Aws Account 111122223333 has been cancelled`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, RejectDomainTransferFromAnotherAwsAccountCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, RejectDomainTransferFromAnotherAwsAccountCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * // import type { Route53DomainsClientConfig } from "@aws-sdk/client-route-53-domains";
 * const config = {}; // type is Route53DomainsClientConfig
 * const client = new Route53DomainsClient(config);
 * const input = { // RejectDomainTransferFromAnotherAwsAccountRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new RejectDomainTransferFromAnotherAwsAccountCommand(input);
 * const response = await client.send(command);
 * // { // RejectDomainTransferFromAnotherAwsAccountResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RejectDomainTransferFromAnotherAwsAccountCommandInput - {@link RejectDomainTransferFromAnotherAwsAccountCommandInput}
 * @returns {@link RejectDomainTransferFromAnotherAwsAccountCommandOutput}
 * @see {@link RejectDomainTransferFromAnotherAwsAccountCommandInput} for command's `input` shape.
 * @see {@link RejectDomainTransferFromAnotherAwsAccountCommandOutput} for command's `response` shape.
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
export class RejectDomainTransferFromAnotherAwsAccountCommand extends command<RejectDomainTransferFromAnotherAwsAccountCommandInput, RejectDomainTransferFromAnotherAwsAccountCommandOutput>(
  _ep0,
  _mw0,
  "RejectDomainTransferFromAnotherAwsAccount",
  RejectDomainTransferFromAnotherAwsAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectDomainTransferFromAnotherAwsAccountRequest;
      output: RejectDomainTransferFromAnotherAwsAccountResponse;
    };
    sdk: {
      input: RejectDomainTransferFromAnotherAwsAccountCommandInput;
      output: RejectDomainTransferFromAnotherAwsAccountCommandOutput;
    };
  };
}
