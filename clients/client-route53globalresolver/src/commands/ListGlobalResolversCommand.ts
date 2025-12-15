// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListGlobalResolversInput, ListGlobalResolversOutput } from "../models/models_0";
import type {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53GlobalResolverClient";
import { ListGlobalResolvers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGlobalResolversCommand}.
 */
export interface ListGlobalResolversCommandInput extends ListGlobalResolversInput {}
/**
 * @public
 *
 * The output of {@link ListGlobalResolversCommand}.
 */
export interface ListGlobalResolversCommandOutput extends ListGlobalResolversOutput, __MetadataBearer {}

/**
 * <p>Lists all Route 53 Global Resolver instances in your account with pagination support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, ListGlobalResolversCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, ListGlobalResolversCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // ListGlobalResolversInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListGlobalResolversCommand(input);
 * const response = await client.send(command);
 * // { // ListGlobalResolversOutput
 * //   nextToken: "STRING_VALUE",
 * //   globalResolvers: [ // GlobalResolvers // required
 * //     { // GlobalResolversItem
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       clientToken: "STRING_VALUE", // required
 * //       dnsName: "STRING_VALUE", // required
 * //       observabilityRegion: "STRING_VALUE",
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       regions: [ // Regions // required
 * //         "STRING_VALUE",
 * //       ],
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       status: "CREATING" || "OPERATIONAL" || "UPDATING" || "DELETING", // required
 * //       ipv4Addresses: [ // IPv4Addresses // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListGlobalResolversCommandInput - {@link ListGlobalResolversCommandInput}
 * @returns {@link ListGlobalResolversCommandOutput}
 * @see {@link ListGlobalResolversCommandInput} for command's `input` shape.
 * @see {@link ListGlobalResolversCommandOutput} for command's `response` shape.
 * @see {@link Route53GlobalResolverClientResolvedConfig | config} for Route53GlobalResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform this operation. Check your IAM permissions and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Try again later.</p>
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
export class ListGlobalResolversCommand extends $Command
  .classBuilder<
    ListGlobalResolversCommandInput,
    ListGlobalResolversCommandOutput,
    Route53GlobalResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53GlobalResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2DNSGlobalResolverCustomerAPI", "ListGlobalResolvers", {})
  .n("Route53GlobalResolverClient", "ListGlobalResolversCommand")
  .sc(ListGlobalResolvers$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGlobalResolversInput;
      output: ListGlobalResolversOutput;
    };
    sdk: {
      input: ListGlobalResolversCommandInput;
      output: ListGlobalResolversCommandOutput;
    };
  };
}
