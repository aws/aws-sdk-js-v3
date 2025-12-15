// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAccessTokensInput, ListAccessTokensOutput } from "../models/models_0";
import type {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53GlobalResolverClient";
import { ListAccessTokens$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccessTokensCommand}.
 */
export interface ListAccessTokensCommandInput extends ListAccessTokensInput {}
/**
 * @public
 *
 * The output of {@link ListAccessTokensCommand}.
 */
export interface ListAccessTokensCommandOutput extends ListAccessTokensOutput, __MetadataBearer {}

/**
 * <p>Lists all access tokens for a DNS view with pagination support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, ListAccessTokensCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, ListAccessTokensCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // ListAccessTokensInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   dnsViewId: "STRING_VALUE", // required
 *   filters: { // Filters
 *     "<keys>": [ // Strings
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new ListAccessTokensCommand(input);
 * const response = await client.send(command);
 * // { // ListAccessTokensOutput
 * //   nextToken: "STRING_VALUE",
 * //   accessTokens: [ // AccessTokens
 * //     { // AccessTokenItem
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       dnsViewId: "STRING_VALUE", // required
 * //       expiresAt: new Date("TIMESTAMP"), // required
 * //       globalResolverId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       status: "CREATING" || "OPERATIONAL" || "DELETING", // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAccessTokensCommandInput - {@link ListAccessTokensCommandInput}
 * @returns {@link ListAccessTokensCommandOutput}
 * @see {@link ListAccessTokensCommandInput} for command's `input` shape.
 * @see {@link ListAccessTokensCommandOutput} for command's `response` shape.
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
export class ListAccessTokensCommand extends $Command
  .classBuilder<
    ListAccessTokensCommandInput,
    ListAccessTokensCommandOutput,
    Route53GlobalResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53GlobalResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2DNSGlobalResolverCustomerAPI", "ListAccessTokens", {})
  .n("Route53GlobalResolverClient", "ListAccessTokensCommand")
  .sc(ListAccessTokens$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccessTokensInput;
      output: ListAccessTokensOutput;
    };
    sdk: {
      input: ListAccessTokensCommandInput;
      output: ListAccessTokensCommandOutput;
    };
  };
}
