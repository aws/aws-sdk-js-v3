// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImportFirewallDomainsRequest, ImportFirewallDomainsResponse } from "../models/models_0";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { ImportFirewallDomains } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportFirewallDomainsCommand}.
 */
export interface ImportFirewallDomainsCommandInput extends ImportFirewallDomainsRequest {}
/**
 * @public
 *
 * The output of {@link ImportFirewallDomainsCommand}.
 */
export interface ImportFirewallDomainsCommandOutput extends ImportFirewallDomainsResponse, __MetadataBearer {}

/**
 * <p>Imports domain names from a file into a domain list, for use in a DNS firewall rule group. </p>
 *          <p>Each domain specification in your domain list must satisfy the following
 * 	requirements: </p>
 *          <ul>
 *             <li>
 *                <p>It can optionally start with <code>*</code> (asterisk).</p>
 *             </li>
 *             <li>
 *                <p>With the exception of the optional starting asterisk, it must only contain
 *       	   the following characters: <code>A-Z</code>, <code>a-z</code>,
 *       	   <code>0-9</code>, <code>-</code> (hyphen).</p>
 *             </li>
 *             <li>
 *                <p>It must be from 1-255 characters in length. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ImportFirewallDomainsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ImportFirewallDomainsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // ImportFirewallDomainsRequest
 *   FirewallDomainListId: "STRING_VALUE", // required
 *   Operation: "REPLACE", // required
 *   DomainFileUrl: "STRING_VALUE", // required
 * };
 * const command = new ImportFirewallDomainsCommand(input);
 * const response = await client.send(command);
 * // { // ImportFirewallDomainsResponse
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Status: "COMPLETE" || "COMPLETE_IMPORT_FAILED" || "IMPORTING" || "DELETING" || "UPDATING",
 * //   StatusMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ImportFirewallDomainsCommandInput - {@link ImportFirewallDomainsCommandInput}
 * @returns {@link ImportFirewallDomainsCommandOutput}
 * @see {@link ImportFirewallDomainsCommandInput} for command's `input` shape.
 * @see {@link ImportFirewallDomainsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The current account doesn't have the IAM permissions required to perform the specified Resolver operation.</p>
 *          <p>This error can also be thrown when a customer has reached the 5120 character limit for a
 * 			resource policy for CloudWatch Logs.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested state transition isn't valid. For example, you can't delete a firewall
 * 			domain list if it is in the process of being deleted, or you can't import domains into a
 * 			domain list that is in the process of being deleted.</p>
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request caused one or more limits to be exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Try again in a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You have provided an invalid command. If you ran the <code>UpdateFirewallDomains</code> request. supported values are <code>ADD</code>,
 * 			<code>REMOVE</code>, or <code>REPLACE</code> a domain.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 *
 * @public
 */
export class ImportFirewallDomainsCommand extends $Command
  .classBuilder<
    ImportFirewallDomainsCommandInput,
    ImportFirewallDomainsCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Resolver", "ImportFirewallDomains", {})
  .n("Route53ResolverClient", "ImportFirewallDomainsCommand")
  .sc(ImportFirewallDomains)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportFirewallDomainsRequest;
      output: ImportFirewallDomainsResponse;
    };
    sdk: {
      input: ImportFirewallDomainsCommandInput;
      output: ImportFirewallDomainsCommandOutput;
    };
  };
}
