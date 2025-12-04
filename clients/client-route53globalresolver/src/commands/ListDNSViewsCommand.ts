// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListDNSViewsInput, ListDNSViewsOutput } from "../models/models_0";
import type {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53GlobalResolverClient";
import { ListDNSViews } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDNSViewsCommand}.
 */
export interface ListDNSViewsCommandInput extends ListDNSViewsInput {}
/**
 * @public
 *
 * The output of {@link ListDNSViewsCommand}.
 */
export interface ListDNSViewsCommandOutput extends ListDNSViewsOutput, __MetadataBearer {}

/**
 * <p>Lists all DNS views for a Route 53 Global Resolver with pagination support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, ListDNSViewsCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, ListDNSViewsCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // ListDNSViewsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   globalResolverId: "STRING_VALUE", // required
 * };
 * const command = new ListDNSViewsCommand(input);
 * const response = await client.send(command);
 * // { // ListDNSViewsOutput
 * //   nextToken: "STRING_VALUE",
 * //   dnsViews: [ // DNSViews // required
 * //     { // DNSViewSummary
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
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListDNSViewsCommandInput - {@link ListDNSViewsCommandInput}
 * @returns {@link ListDNSViewsCommandOutput}
 * @see {@link ListDNSViewsCommandInput} for command's `input` shape.
 * @see {@link ListDNSViewsCommandOutput} for command's `response` shape.
 * @see {@link Route53GlobalResolverClientResolvedConfig | config} for Route53GlobalResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform this operation. Check your IAM permissions and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify the resource ID and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests. Wait a moment and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters are invalid. Check the parameter values and try again.</p>
 *
 * @throws {@link Route53GlobalResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53GlobalResolver service.</p>
 *
 *
 * @public
 */
export class ListDNSViewsCommand extends $Command
  .classBuilder<
    ListDNSViewsCommandInput,
    ListDNSViewsCommandOutput,
    Route53GlobalResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53GlobalResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2DNSGlobalResolverCustomerAPI", "ListDNSViews", {})
  .n("Route53GlobalResolverClient", "ListDNSViewsCommand")
  .sc(ListDNSViews)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDNSViewsInput;
      output: ListDNSViewsOutput;
    };
    sdk: {
      input: ListDNSViewsCommandInput;
      output: ListDNSViewsCommandOutput;
    };
  };
}
