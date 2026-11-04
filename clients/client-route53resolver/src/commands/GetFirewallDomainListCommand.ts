// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetFirewallDomainListRequest, GetFirewallDomainListResponse } from "../models/models_0";
import { GetFirewallDomainList$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetFirewallDomainListCommand}.
 */
export interface GetFirewallDomainListCommandInput extends GetFirewallDomainListRequest {}
/**
 * @public
 *
 * The output of {@link GetFirewallDomainListCommand}.
 */
export interface GetFirewallDomainListCommandOutput extends GetFirewallDomainListResponse, __MetadataBearer {}

/**
 * Retrieves the specified firewall domain list.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetFirewallDomainListCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetFirewallDomainListCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // GetFirewallDomainListRequest
 *   FirewallDomainListId: "STRING_VALUE", // required
 * };
 * const command = new GetFirewallDomainListCommand(input);
 * const response = await client.send(command);
 * // { // GetFirewallDomainListResponse
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
 * //     Category: "STRING_VALUE",
 * //     ManagedListType: "THREAT" || "CONTENT",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetFirewallDomainListCommandInput - {@link GetFirewallDomainListCommandInput}
 * @returns {@link GetFirewallDomainListCommandOutput}
 * @see {@link GetFirewallDomainListCommandInput} for command's `input` shape.
 * @see {@link GetFirewallDomainListCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The current account doesn't have the IAM permissions required to perform the specified Resolver operation.
 *
 * This error can also be thrown when a customer has reached the 5120 character limit for a resource policy for CloudWatch Logs.
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *
 * We encountered an unknown error. Try again in a few minutes.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled. Try again in a few minutes.
 *
 * @throws {@link Route53ResolverServiceException}
 *
 * Base exception class for all service exceptions from Route53Resolver service.
 *
 * @public
 */
export class GetFirewallDomainListCommand extends command<GetFirewallDomainListCommandInput, GetFirewallDomainListCommandOutput>(
  _ep0,
  _mw0,
  "GetFirewallDomainList",
  GetFirewallDomainList$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFirewallDomainListRequest;
      output: GetFirewallDomainListResponse;
    };
    sdk: {
      input: GetFirewallDomainListCommandInput;
      output: GetFirewallDomainListCommandOutput;
    };
  };
}
