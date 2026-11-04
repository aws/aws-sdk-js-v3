// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ImportFirewallDomainsRequest, ImportFirewallDomainsResponse } from "../models/models_0";
import { ImportFirewallDomains$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Imports domain names from a file into a domain list, for use in a DNS firewall rule group.
 *
 * Each domain specification in your domain list must satisfy the following requirements:
 *
 * - It can optionally start with `*` (asterisk).
 * - With the exception of the optional starting asterisk, it must only contain the following characters: `A-Z`, `a-z`, `0-9`, `-` (hyphen).
 * - It must be from 1-255 characters in length.
 *
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
 *
 * The current account doesn't have the IAM permissions required to perform the specified Resolver operation.
 *
 * This error can also be thrown when a customer has reached the 5120 character limit for a resource policy for CloudWatch Logs.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested state transition isn't valid. For example, you can't delete a firewall domain list if it is in the process of being deleted, or you can't import domains into a domain list that is in the process of being deleted.
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *
 * We encountered an unknown error. Try again in a few minutes.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request caused one or more limits to be exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource doesn't exist.
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
export class ImportFirewallDomainsCommand extends command<ImportFirewallDomainsCommandInput, ImportFirewallDomainsCommandOutput>(
  _ep0,
  _mw0,
  "ImportFirewallDomains",
  ImportFirewallDomains$
) {
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
