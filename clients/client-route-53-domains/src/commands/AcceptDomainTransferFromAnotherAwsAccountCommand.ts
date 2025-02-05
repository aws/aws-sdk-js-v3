// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  AcceptDomainTransferFromAnotherAwsAccountRequest,
  AcceptDomainTransferFromAnotherAwsAccountRequestFilterSensitiveLog,
  AcceptDomainTransferFromAnotherAwsAccountResponse,
} from "../models/models_0";
import {
  de_AcceptDomainTransferFromAnotherAwsAccountCommand,
  se_AcceptDomainTransferFromAnotherAwsAccountCommand,
} from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcceptDomainTransferFromAnotherAwsAccountCommand}.
 */
export interface AcceptDomainTransferFromAnotherAwsAccountCommandInput
  extends AcceptDomainTransferFromAnotherAwsAccountRequest {}
/**
 * @public
 *
 * The output of {@link AcceptDomainTransferFromAnotherAwsAccountCommand}.
 */
export interface AcceptDomainTransferFromAnotherAwsAccountCommandOutput
  extends AcceptDomainTransferFromAnotherAwsAccountResponse,
    __MetadataBearer {}

/**
 * <p>Accepts the transfer of a domain from another Amazon Web Services account to the
 * 				currentAmazon Web Services account. You initiate a transfer between Amazon Web Services accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>.</p>
 *          <p>If you use the CLI command at <a href="https://docs.aws.amazon.com/cli/latest/reference/route53domains/accept-domain-transfer-from-another-aws-account.html">accept-domain-transfer-from-another-aws-account</a>, use JSON format as input
 * 			instead of text because otherwise CLI will throw an error from domain
 * 			transfer input that includes single quotes.</p>
 *          <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example,
 * 				<code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, AcceptDomainTransferFromAnotherAwsAccountCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, AcceptDomainTransferFromAnotherAwsAccountCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Route53DomainsClient(config);
 * const input = { // AcceptDomainTransferFromAnotherAwsAccountRequest
 *   DomainName: "STRING_VALUE", // required
 *   Password: "STRING_VALUE", // required
 * };
 * const command = new AcceptDomainTransferFromAnotherAwsAccountCommand(input);
 * const response = await client.send(command);
 * // { // AcceptDomainTransferFromAnotherAwsAccountResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AcceptDomainTransferFromAnotherAwsAccountCommandInput - {@link AcceptDomainTransferFromAnotherAwsAccountCommandInput}
 * @returns {@link AcceptDomainTransferFromAnotherAwsAccountCommandOutput}
 * @see {@link AcceptDomainTransferFromAnotherAwsAccountCommandInput} for command's `input` shape.
 * @see {@link AcceptDomainTransferFromAnotherAwsAccountCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 * @throws {@link DomainLimitExceeded} (client fault)
 *  <p>The number of domains has exceeded the allowed threshold for the account.</p>
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
 * @public
 */
export class AcceptDomainTransferFromAnotherAwsAccountCommand extends $Command
  .classBuilder<
    AcceptDomainTransferFromAnotherAwsAccountCommandInput,
    AcceptDomainTransferFromAnotherAwsAccountCommandOutput,
    Route53DomainsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53DomainsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53Domains_v20140515", "AcceptDomainTransferFromAnotherAwsAccount", {})
  .n("Route53DomainsClient", "AcceptDomainTransferFromAnotherAwsAccountCommand")
  .f(AcceptDomainTransferFromAnotherAwsAccountRequestFilterSensitiveLog, void 0)
  .ser(se_AcceptDomainTransferFromAnotherAwsAccountCommand)
  .de(de_AcceptDomainTransferFromAnotherAwsAccountCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptDomainTransferFromAnotherAwsAccountRequest;
      output: AcceptDomainTransferFromAnotherAwsAccountResponse;
    };
    sdk: {
      input: AcceptDomainTransferFromAnotherAwsAccountCommandInput;
      output: AcceptDomainTransferFromAnotherAwsAccountCommandOutput;
    };
  };
}
