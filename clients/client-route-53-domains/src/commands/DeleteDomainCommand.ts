// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDomainRequest, DeleteDomainResponse } from "../models/models_0";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { DeleteDomain } from "../schemas/schemas_16_DeleteDomain";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDomainCommand}.
 */
export interface DeleteDomainCommandInput extends DeleteDomainRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDomainCommand}.
 */
export interface DeleteDomainCommandOutput extends DeleteDomainResponse, __MetadataBearer {}

/**
 * <p>This operation deletes the specified domain. This action is permanent. For more
 * 			information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-delete.html">Deleting a domain name
 * 				registration</a>.</p>
 *          <p>To transfer the domain registration to another registrar, use the transfer process
 * 			that’s provided by the registrar to which you want to transfer the registration.
 * 			Otherwise, the following apply:</p>
 *          <ol>
 *             <li>
 *                <p>You can’t get a refund for the cost of a deleted domain registration.</p>
 *             </li>
 *             <li>
 *                <p>The registry for the top-level domain might hold the domain name for a brief
 * 					time before releasing it for other users to register (varies by registry).
 * 				</p>
 *             </li>
 *             <li>
 *                <p>When the registration has been deleted, we'll send you a confirmation to the
 * 					registrant contact. The email will come from
 * 						<code>noreply@domainnameverification.net</code> or
 * 						<code>noreply@registrar.amazon.com</code>.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, DeleteDomainCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, DeleteDomainCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * // import type { Route53DomainsClientConfig } from "@aws-sdk/client-route-53-domains";
 * const config = {}; // type is Route53DomainsClientConfig
 * const client = new Route53DomainsClient(config);
 * const input = { // DeleteDomainRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDomainCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDomainResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteDomainCommandInput - {@link DeleteDomainCommandInput}
 * @returns {@link DeleteDomainCommandOutput}
 * @see {@link DeleteDomainCommandInput} for command's `input` shape.
 * @see {@link DeleteDomainCommandOutput} for command's `response` shape.
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
export class DeleteDomainCommand extends $Command
  .classBuilder<
    DeleteDomainCommandInput,
    DeleteDomainCommandOutput,
    Route53DomainsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53DomainsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Domains_v20140515", "DeleteDomain", {})
  .n("Route53DomainsClient", "DeleteDomainCommand")
  .sc(DeleteDomain)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDomainRequest;
      output: DeleteDomainResponse;
    };
    sdk: {
      input: DeleteDomainCommandInput;
      output: DeleteDomainCommandOutput;
    };
  };
}
