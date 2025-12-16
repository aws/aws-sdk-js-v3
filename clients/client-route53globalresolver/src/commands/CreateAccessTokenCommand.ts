// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateAccessTokenInput, CreateAccessTokenOutput } from "../models/models_0";
import type {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53GlobalResolverClient";
import { CreateAccessToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAccessTokenCommand}.
 */
export interface CreateAccessTokenCommandInput extends CreateAccessTokenInput {}
/**
 * @public
 *
 * The output of {@link CreateAccessTokenCommand}.
 */
export interface CreateAccessTokenCommandOutput extends CreateAccessTokenOutput, __MetadataBearer {}

/**
 * <p>Creates an access token for a DNS view. Access tokens provide token-based authentication for DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT) connections to the Route 53 Global Resolver.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, CreateAccessTokenCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, CreateAccessTokenCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // CreateAccessTokenInput
 *   clientToken: "STRING_VALUE",
 *   dnsViewId: "STRING_VALUE", // required
 *   expiresAt: new Date("TIMESTAMP"),
 *   name: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAccessTokenCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessTokenOutput
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   clientToken: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   dnsViewId: "STRING_VALUE", // required
 * //   expiresAt: new Date("TIMESTAMP"), // required
 * //   name: "STRING_VALUE",
 * //   status: "CREATING" || "OPERATIONAL" || "DELETING", // required
 * //   value: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateAccessTokenCommandInput - {@link CreateAccessTokenCommandInput}
 * @returns {@link CreateAccessTokenCommandOutput}
 * @see {@link CreateAccessTokenCommandInput} for command's `input` shape.
 * @see {@link CreateAccessTokenCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify the resource ID and try again.</p>
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
export class CreateAccessTokenCommand extends $Command
  .classBuilder<
    CreateAccessTokenCommandInput,
    CreateAccessTokenCommandOutput,
    Route53GlobalResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53GlobalResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2DNSGlobalResolverCustomerAPI", "CreateAccessToken", {})
  .n("Route53GlobalResolverClient", "CreateAccessTokenCommand")
  .sc(CreateAccessToken$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccessTokenInput;
      output: CreateAccessTokenOutput;
    };
    sdk: {
      input: CreateAccessTokenCommandInput;
      output: CreateAccessTokenCommandOutput;
    };
  };
}
