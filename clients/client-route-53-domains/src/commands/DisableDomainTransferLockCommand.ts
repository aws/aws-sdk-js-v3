// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisableDomainTransferLockRequest, DisableDomainTransferLockResponse } from "../models/models_0";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { DisableDomainTransferLock } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableDomainTransferLockCommand}.
 */
export interface DisableDomainTransferLockCommandInput extends DisableDomainTransferLockRequest {}
/**
 * @public
 *
 * The output of {@link DisableDomainTransferLockCommand}.
 */
export interface DisableDomainTransferLockCommandOutput extends DisableDomainTransferLockResponse, __MetadataBearer {}

/**
 * <p>This operation removes the transfer lock on the domain (specifically the
 * 				<code>clientTransferProhibited</code> status) to allow domain transfers. We
 * 			recommend you refrain from performing this action unless you intend to transfer the
 * 			domain to a different registrar. Successful submission returns an operation ID that you
 * 			can use to track the progress and completion of the action. If the request is not
 * 			completed successfully, the domain registrant will be notified by email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, DisableDomainTransferLockCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, DisableDomainTransferLockCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * // import type { Route53DomainsClientConfig } from "@aws-sdk/client-route-53-domains";
 * const config = {}; // type is Route53DomainsClientConfig
 * const client = new Route53DomainsClient(config);
 * const input = { // DisableDomainTransferLockRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new DisableDomainTransferLockCommand(input);
 * const response = await client.send(command);
 * // { // DisableDomainTransferLockResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisableDomainTransferLockCommandInput - {@link DisableDomainTransferLockCommandInput}
 * @returns {@link DisableDomainTransferLockCommandOutput}
 * @see {@link DisableDomainTransferLockCommandInput} for command's `input` shape.
 * @see {@link DisableDomainTransferLockCommandOutput} for command's `response` shape.
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
export class DisableDomainTransferLockCommand extends $Command
  .classBuilder<
    DisableDomainTransferLockCommandInput,
    DisableDomainTransferLockCommandOutput,
    Route53DomainsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53DomainsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Domains_v20140515", "DisableDomainTransferLock", {})
  .n("Route53DomainsClient", "DisableDomainTransferLockCommand")
  .sc(DisableDomainTransferLock)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableDomainTransferLockRequest;
      output: DisableDomainTransferLockResponse;
    };
    sdk: {
      input: DisableDomainTransferLockCommandInput;
      output: DisableDomainTransferLockCommandOutput;
    };
  };
}
