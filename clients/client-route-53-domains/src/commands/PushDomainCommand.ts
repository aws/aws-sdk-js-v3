// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PushDomainRequest } from "../models/models_0";
import type {
  Route53DomainsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53DomainsClient";
import { PushDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PushDomainCommand}.
 */
export interface PushDomainCommandInput extends PushDomainRequest {}
/**
 * @public
 *
 * The output of {@link PushDomainCommand}.
 */
export interface PushDomainCommandOutput extends __MetadataBearer {}

/**
 * <p> Moves a domain from Amazon Web Services to another registrar. </p>
 *          <p>Supported actions:</p>
 *          <ul>
 *             <li>
 *                <p>Changes the IPS tags of a .uk domain, and pushes it to transit. Transit means
 * 					that the domain is ready to be transferred to another registrar.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, PushDomainCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, PushDomainCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * // import type { Route53DomainsClientConfig } from "@aws-sdk/client-route-53-domains";
 * const config = {}; // type is Route53DomainsClientConfig
 * const client = new Route53DomainsClient(config);
 * const input = { // PushDomainRequest
 *   DomainName: "STRING_VALUE", // required
 *   Target: "STRING_VALUE", // required
 * };
 * const command = new PushDomainCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PushDomainCommandInput - {@link PushDomainCommandInput}
 * @returns {@link PushDomainCommandOutput}
 * @see {@link PushDomainCommandInput} for command's `input` shape.
 * @see {@link PushDomainCommandOutput} for command's `response` shape.
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
export class PushDomainCommand extends $Command
  .classBuilder<
    PushDomainCommandInput,
    PushDomainCommandOutput,
    Route53DomainsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53DomainsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Domains_v20140515", "PushDomain", {})
  .n("Route53DomainsClient", "PushDomainCommand")
  .sc(PushDomain$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PushDomainRequest;
      output: {};
    };
    sdk: {
      input: PushDomainCommandInput;
      output: PushDomainCommandOutput;
    };
  };
}
