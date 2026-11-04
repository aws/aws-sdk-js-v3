// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFirewallDomainListsRequest, ListFirewallDomainListsResponse } from "../models/models_0";
import { ListFirewallDomainLists$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFirewallDomainListsCommand}.
 */
export interface ListFirewallDomainListsCommandInput extends ListFirewallDomainListsRequest {}
/**
 * @public
 *
 * The output of {@link ListFirewallDomainListsCommand}.
 */
export interface ListFirewallDomainListsCommandOutput extends ListFirewallDomainListsResponse, __MetadataBearer {}

/**
 * Retrieves the firewall domain lists that you have defined. For each firewall domain list, you can retrieve the domains that are defined for a list by calling ListFirewallDomains.
 *
 * A single call to this list operation might return only a partial list of the domain lists. For information, see `MaxResults`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListFirewallDomainListsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListFirewallDomainListsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // ListFirewallDomainListsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListFirewallDomainListsCommand(input);
 * const response = await client.send(command);
 * // { // ListFirewallDomainListsResponse
 * //   NextToken: "STRING_VALUE",
 * //   FirewallDomainLists: [ // FirewallDomainListMetadataList
 * //     { // FirewallDomainListMetadata
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       CreatorRequestId: "STRING_VALUE",
 * //       ManagedOwnerName: "STRING_VALUE",
 * //       ManagedListType: "THREAT" || "CONTENT",
 * //       Category: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListFirewallDomainListsCommandInput - {@link ListFirewallDomainListsCommandInput}
 * @returns {@link ListFirewallDomainListsCommandOutput}
 * @see {@link ListFirewallDomainListsCommandInput} for command's `input` shape.
 * @see {@link ListFirewallDomainListsCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled. Try again in a few minutes.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * You have provided an invalid command. If you ran the `UpdateFirewallDomains` request. supported values are `ADD`, `REMOVE`, or `REPLACE` a domain.
 *
 * @throws {@link Route53ResolverServiceException}
 *
 * Base exception class for all service exceptions from Route53Resolver service.
 *
 * @public
 */
export class ListFirewallDomainListsCommand extends command<ListFirewallDomainListsCommandInput, ListFirewallDomainListsCommandOutput>(
  _ep0,
  _mw0,
  "ListFirewallDomainLists",
  ListFirewallDomainLists$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFirewallDomainListsRequest;
      output: ListFirewallDomainListsResponse;
    };
    sdk: {
      input: ListFirewallDomainListsCommandInput;
      output: ListFirewallDomainListsCommandOutput;
    };
  };
}
