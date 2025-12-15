// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetGlobalResolverInput, GetGlobalResolverOutput } from "../models/models_0";
import type {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53GlobalResolverClient";
import { GetGlobalResolver$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGlobalResolverCommand}.
 */
export interface GetGlobalResolverCommandInput extends GetGlobalResolverInput {}
/**
 * @public
 *
 * The output of {@link GetGlobalResolverCommand}.
 */
export interface GetGlobalResolverCommandOutput extends GetGlobalResolverOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about a Route 53 Global Resolver instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, GetGlobalResolverCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, GetGlobalResolverCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // GetGlobalResolverInput
 *   globalResolverId: "STRING_VALUE", // required
 * };
 * const command = new GetGlobalResolverCommand(input);
 * const response = await client.send(command);
 * // { // GetGlobalResolverOutput
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   clientToken: "STRING_VALUE", // required
 * //   dnsName: "STRING_VALUE", // required
 * //   observabilityRegion: "STRING_VALUE",
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   regions: [ // Regions // required
 * //     "STRING_VALUE",
 * //   ],
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   status: "CREATING" || "OPERATIONAL" || "UPDATING" || "DELETING", // required
 * //   ipv4Addresses: [ // IPv4Addresses // required
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetGlobalResolverCommandInput - {@link GetGlobalResolverCommandInput}
 * @returns {@link GetGlobalResolverCommandOutput}
 * @see {@link GetGlobalResolverCommandInput} for command's `input` shape.
 * @see {@link GetGlobalResolverCommandOutput} for command's `response` shape.
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
export class GetGlobalResolverCommand extends $Command
  .classBuilder<
    GetGlobalResolverCommandInput,
    GetGlobalResolverCommandOutput,
    Route53GlobalResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53GlobalResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2DNSGlobalResolverCustomerAPI", "GetGlobalResolver", {})
  .n("Route53GlobalResolverClient", "GetGlobalResolverCommand")
  .sc(GetGlobalResolver$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGlobalResolverInput;
      output: GetGlobalResolverOutput;
    };
    sdk: {
      input: GetGlobalResolverCommandInput;
      output: GetGlobalResolverCommandOutput;
    };
  };
}
