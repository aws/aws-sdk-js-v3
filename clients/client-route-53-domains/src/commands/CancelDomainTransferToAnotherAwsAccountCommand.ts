// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  CancelDomainTransferToAnotherAwsAccountRequest,
  CancelDomainTransferToAnotherAwsAccountResponse,
} from "../models/models_0";
import type {
  Route53DomainsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53DomainsClient";
import { CancelDomainTransferToAnotherAwsAccount } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelDomainTransferToAnotherAwsAccountCommand}.
 */
export interface CancelDomainTransferToAnotherAwsAccountCommandInput
  extends CancelDomainTransferToAnotherAwsAccountRequest {}
/**
 * @public
 *
 * The output of {@link CancelDomainTransferToAnotherAwsAccountCommand}.
 */
export interface CancelDomainTransferToAnotherAwsAccountCommandOutput
  extends CancelDomainTransferToAnotherAwsAccountResponse,
    __MetadataBearer {}

/**
 * <p>Cancels the transfer of a domain from the current Amazon Web Services account to
 * 			another Amazon Web Services account. You initiate a transfer betweenAmazon Web Services accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p>
 *          <important>
 *             <p>You must cancel the transfer before the other Amazon Web Services account accepts
 * 				the transfer using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>.</p>
 *          </important>
 *          <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example,
 * 				<code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
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
export class CancelDomainTransferToAnotherAwsAccountCommand extends $Command
  .classBuilder<
    CancelDomainTransferToAnotherAwsAccountCommandInput,
    CancelDomainTransferToAnotherAwsAccountCommandOutput,
    Route53DomainsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53DomainsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Domains_v20140515", "CancelDomainTransferToAnotherAwsAccount", {})
  .n("Route53DomainsClient", "CancelDomainTransferToAnotherAwsAccountCommand")
  .sc(CancelDomainTransferToAnotherAwsAccount)
  .build() {
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
