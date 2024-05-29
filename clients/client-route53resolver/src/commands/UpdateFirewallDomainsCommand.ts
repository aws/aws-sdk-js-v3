// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateFirewallDomainsRequest, UpdateFirewallDomainsResponse } from "../models/models_0";
import { de_UpdateFirewallDomainsCommand, se_UpdateFirewallDomainsCommand } from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateFirewallDomainsCommand}.
 */
export interface UpdateFirewallDomainsCommandInput extends UpdateFirewallDomainsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFirewallDomainsCommand}.
 */
export interface UpdateFirewallDomainsCommandOutput extends UpdateFirewallDomainsResponse, __MetadataBearer {}

/**
 * <p>Updates the firewall domain list from an array of domain specifications. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, UpdateFirewallDomainsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, UpdateFirewallDomainsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const input = { // UpdateFirewallDomainsRequest
 *   FirewallDomainListId: "STRING_VALUE", // required
 *   Operation: "ADD" || "REMOVE" || "REPLACE", // required
 *   Domains: [ // FirewallDomains // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateFirewallDomainsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFirewallDomainsResponse
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Status: "COMPLETE" || "COMPLETE_IMPORT_FAILED" || "IMPORTING" || "DELETING" || "UPDATING",
 * //   StatusMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateFirewallDomainsCommandInput - {@link UpdateFirewallDomainsCommandInput}
 * @returns {@link UpdateFirewallDomainsCommandOutput}
 * @see {@link UpdateFirewallDomainsCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallDomainsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateFirewallDomainsCommand extends $Command
  .classBuilder<
    UpdateFirewallDomainsCommandInput,
    UpdateFirewallDomainsCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53Resolver", "UpdateFirewallDomains", {})
  .n("Route53ResolverClient", "UpdateFirewallDomainsCommand")
  .f(void 0, void 0)
  .ser(se_UpdateFirewallDomainsCommand)
  .de(de_UpdateFirewallDomainsCommand)
  .build() {}
