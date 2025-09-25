// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFirewallDomainListRequest, DeleteFirewallDomainListResponse } from "../models/models_0";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { DeleteFirewallDomainList } from "../schemas/schemas_3_Firewall";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFirewallDomainListCommand}.
 */
export interface DeleteFirewallDomainListCommandInput extends DeleteFirewallDomainListRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFirewallDomainListCommand}.
 */
export interface DeleteFirewallDomainListCommandOutput extends DeleteFirewallDomainListResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified domain list. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DeleteFirewallDomainListCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DeleteFirewallDomainListCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // DeleteFirewallDomainListRequest
 *   FirewallDomainListId: "STRING_VALUE", // required
 * };
 * const command = new DeleteFirewallDomainListCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFirewallDomainListResponse
 * //   FirewallDomainList: { // FirewallDomainList
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     DomainCount: Number("int"),
 * //     Status: "COMPLETE" || "COMPLETE_IMPORT_FAILED" || "IMPORTING" || "DELETING" || "UPDATING",
 * //     StatusMessage: "STRING_VALUE",
 * //     ManagedOwnerName: "STRING_VALUE",
 * //     CreatorRequestId: "STRING_VALUE",
 * //     CreationTime: "STRING_VALUE",
 * //     ModificationTime: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteFirewallDomainListCommandInput - {@link DeleteFirewallDomainListCommandInput}
 * @returns {@link DeleteFirewallDomainListCommandOutput}
 * @see {@link DeleteFirewallDomainListCommandInput} for command's `input` shape.
 * @see {@link DeleteFirewallDomainListCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Try again in a few minutes.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 *
 * @public
 */
export class DeleteFirewallDomainListCommand extends $Command
  .classBuilder<
    DeleteFirewallDomainListCommandInput,
    DeleteFirewallDomainListCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Resolver", "DeleteFirewallDomainList", {})
  .n("Route53ResolverClient", "DeleteFirewallDomainListCommand")
  .sc(DeleteFirewallDomainList)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFirewallDomainListRequest;
      output: DeleteFirewallDomainListResponse;
    };
    sdk: {
      input: DeleteFirewallDomainListCommandInput;
      output: DeleteFirewallDomainListCommandOutput;
    };
  };
}
