// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSharedDNSViewsInput, ListSharedDNSViewsOutput } from "../models/models_0";
import { ListSharedDNSViews$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSharedDNSViewsCommand}.
 */
export interface ListSharedDNSViewsCommandInput extends ListSharedDNSViewsInput {}
/**
 * @public
 *
 * The output of {@link ListSharedDNSViewsCommand}.
 */
export interface ListSharedDNSViewsCommandOutput extends ListSharedDNSViewsOutput, __MetadataBearer {}

/**
 * Lists the DNS views that have been shared with your Amazon Web Services account through Amazon Web Services Resource Access Manager (Amazon Web Services RAM), with pagination support.
 *
 * > **Important:** Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, ListSharedDNSViewsCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, ListSharedDNSViewsCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // ListSharedDNSViewsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSharedDNSViewsCommand(input);
 * const response = await client.send(command);
 * // { // ListSharedDNSViewsOutput
 * //   nextToken: "STRING_VALUE",
 * //   dnsViews: [ // SharedDNSViews // required
 * //     { // SharedDNSViewSummary
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       clientToken: "STRING_VALUE", // required
 * //       dnssecValidation: "ENABLED" || "DISABLED", // required
 * //       ednsClientSubnet: "ENABLED" || "DISABLED", // required
 * //       firewallRulesFailOpen: "ENABLED" || "DISABLED", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       globalResolverId: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       status: "CREATING" || "OPERATIONAL" || "UPDATING" || "ENABLING" || "DISABLING" || "DISABLED" || "DELETING", // required
 * //       ownerAccountId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSharedDNSViewsCommandInput - {@link ListSharedDNSViewsCommandInput}
 * @returns {@link ListSharedDNSViewsCommandOutput}
 * @see {@link ListSharedDNSViewsCommandInput} for command's `input` shape.
 * @see {@link ListSharedDNSViewsCommandOutput} for command's `response` shape.
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
export class ListSharedDNSViewsCommand extends command<ListSharedDNSViewsCommandInput, ListSharedDNSViewsCommandOutput>(
  _ep0,
  _mw0,
  "ListSharedDNSViews",
  ListSharedDNSViews$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSharedDNSViewsInput;
      output: ListSharedDNSViewsOutput;
    };
    sdk: {
      input: ListSharedDNSViewsCommandInput;
      output: ListSharedDNSViewsCommandOutput;
    };
  };
}
