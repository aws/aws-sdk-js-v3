// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetManagedFirewallDomainListInput, GetManagedFirewallDomainListOutput } from "../models/models_0";
import { GetManagedFirewallDomainList$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetManagedFirewallDomainListCommand}.
 */
export interface GetManagedFirewallDomainListCommandInput extends GetManagedFirewallDomainListInput {}
/**
 * @public
 *
 * The output of {@link GetManagedFirewallDomainListCommand}.
 */
export interface GetManagedFirewallDomainListCommandOutput extends GetManagedFirewallDomainListOutput, __MetadataBearer {}

/**
 * Retrieves information about an Amazon Web Services-managed firewall domain list. Managed domain lists contain domains associated with malicious activity, content categories, or specific threats.
 *
 * > **Important:** Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, GetManagedFirewallDomainListCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, GetManagedFirewallDomainListCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // GetManagedFirewallDomainListInput
 *   managedFirewallDomainListId: "STRING_VALUE", // required
 * };
 * const command = new GetManagedFirewallDomainListCommand(input);
 * const response = await client.send(command);
 * // { // GetManagedFirewallDomainListOutput
 * //   description: "STRING_VALUE",
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   managedListType: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetManagedFirewallDomainListCommandInput - {@link GetManagedFirewallDomainListCommandInput}
 * @returns {@link GetManagedFirewallDomainListCommandOutput}
 * @see {@link GetManagedFirewallDomainListCommandInput} for command's `input` shape.
 * @see {@link GetManagedFirewallDomainListCommandOutput} for command's `response` shape.
 * @see {@link Route53GlobalResolverClientResolvedConfig | config} for Route53GlobalResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permission to perform this operation. Check your IAM permissions and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found. Verify the resource ID and try again.
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
export class GetManagedFirewallDomainListCommand extends command<GetManagedFirewallDomainListCommandInput, GetManagedFirewallDomainListCommandOutput>(
  _ep0,
  _mw0,
  "GetManagedFirewallDomainList",
  GetManagedFirewallDomainList$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetManagedFirewallDomainListInput;
      output: GetManagedFirewallDomainListOutput;
    };
    sdk: {
      input: GetManagedFirewallDomainListCommandInput;
      output: GetManagedFirewallDomainListCommandOutput;
    };
  };
}
