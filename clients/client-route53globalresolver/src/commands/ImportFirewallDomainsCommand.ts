// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ImportFirewallDomainsInput, ImportFirewallDomainsOutput } from "../models/models_0";
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
export interface ImportFirewallDomainsCommandInput extends ImportFirewallDomainsInput {}
/**
 * @public
 *
 * The output of {@link ImportFirewallDomainsCommand}.
 */
export interface ImportFirewallDomainsCommandOutput extends ImportFirewallDomainsOutput, __MetadataBearer {}

/**
 * Imports a list of domains from an Amazon S3 file into a firewall domain list. The file should contain one domain per line.
 *
 * > **Important:** Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, ImportFirewallDomainsCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, ImportFirewallDomainsCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // ImportFirewallDomainsInput
 *   domainFileUrl: "STRING_VALUE", // required
 *   firewallDomainListId: "STRING_VALUE", // required
 *   operation: "STRING_VALUE", // required
 * };
 * const command = new ImportFirewallDomainsCommand(input);
 * const response = await client.send(command);
 * // { // ImportFirewallDomainsOutput
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   status: "CREATING" || "OPERATIONAL" || "UPDATING" || "DELETING", // required
 * // };
 *
 * ```
 *
 * @param ImportFirewallDomainsCommandInput - {@link ImportFirewallDomainsCommandInput}
 * @returns {@link ImportFirewallDomainsCommandOutput}
 * @see {@link ImportFirewallDomainsCommandInput} for command's `input` shape.
 * @see {@link ImportFirewallDomainsCommandOutput} for command's `response` shape.
 * @see {@link Route53GlobalResolverClientResolvedConfig | config} for Route53GlobalResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permission to perform this operation. Check your IAM permissions and try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request conflicts with the current state of the resource. This can occur when trying to modify a resource that is not in a valid state for the requested operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found. Verify the resource ID and try again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would exceed one or more service quotas. Check your current usage and quotas, then try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled due to too many requests. Wait a moment and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input parameters are invalid. Check the parameter values and try again.
 *
 * @throws {@link Route53GlobalResolverServiceException}
 *
 * Base exception class for all service exceptions from Route53GlobalResolver service.
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
      input: ImportFirewallDomainsInput;
      output: ImportFirewallDomainsOutput;
    };
    sdk: {
      input: ImportFirewallDomainsCommandInput;
      output: ImportFirewallDomainsCommandOutput;
    };
  };
}
