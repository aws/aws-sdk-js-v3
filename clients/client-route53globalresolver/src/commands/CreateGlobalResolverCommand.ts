// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateGlobalResolverInput, CreateGlobalResolverOutput } from "../models/models_0";
import {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53GlobalResolverClient";
import { CreateGlobalResolver } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateGlobalResolverCommand}.
 */
export interface CreateGlobalResolverCommandInput extends CreateGlobalResolverInput {}
/**
 * @public
 *
 * The output of {@link CreateGlobalResolverCommand}.
 */
export interface CreateGlobalResolverCommandOutput extends CreateGlobalResolverOutput, __MetadataBearer {}

/**
 * <p>Creates a new Route 53 Global Resolver instance. A Route 53 Global Resolver is a global, internet-accessible DNS resolver that provides secure DNS resolution for both public and private domains through global anycast IP addresses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, CreateGlobalResolverCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, CreateGlobalResolverCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // CreateGlobalResolverInput
 *   clientToken: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   observabilityRegion: "STRING_VALUE",
 *   regions: [ // Regions // required
 *     "STRING_VALUE",
 *   ],
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateGlobalResolverCommand(input);
 * const response = await client.send(command);
 * // { // CreateGlobalResolverOutput
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   clientToken: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   description: "STRING_VALUE",
 * //   dnsName: "STRING_VALUE", // required
 * //   ipv4Addresses: [ // IPv4Addresses // required
 * //     "STRING_VALUE",
 * //   ],
 * //   name: "STRING_VALUE", // required
 * //   observabilityRegion: "STRING_VALUE",
 * //   regions: [ // Regions // required
 * //     "STRING_VALUE",
 * //   ],
 * //   status: "CREATING" || "OPERATIONAL" || "UPDATING" || "DELETING", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateGlobalResolverCommandInput - {@link CreateGlobalResolverCommandInput}
 * @returns {@link CreateGlobalResolverCommandOutput}
 * @see {@link CreateGlobalResolverCommandInput} for command's `input` shape.
 * @see {@link CreateGlobalResolverCommandOutput} for command's `response` shape.
 * @see {@link Route53GlobalResolverClientResolvedConfig | config} for Route53GlobalResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform this operation. Check your IAM permissions and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. This can occur when trying to modify a resource that is not in a valid state for the requested operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Try again later.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed one or more service quotas. Check your current usage and quotas, then try again.</p>
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
export class CreateGlobalResolverCommand extends $Command
  .classBuilder<
    CreateGlobalResolverCommandInput,
    CreateGlobalResolverCommandOutput,
    Route53GlobalResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53GlobalResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2DNSGlobalResolverCustomerAPI", "CreateGlobalResolver", {})
  .n("Route53GlobalResolverClient", "CreateGlobalResolverCommand")
  .sc(CreateGlobalResolver)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGlobalResolverInput;
      output: CreateGlobalResolverOutput;
    };
    sdk: {
      input: CreateGlobalResolverCommandInput;
      output: CreateGlobalResolverCommandOutput;
    };
  };
}
