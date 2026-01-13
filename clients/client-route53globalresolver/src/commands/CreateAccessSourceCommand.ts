// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateAccessSourceInput, CreateAccessSourceOutput } from "../models/models_0";
import type {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53GlobalResolverClient";
import { CreateAccessSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAccessSourceCommand}.
 */
export interface CreateAccessSourceCommandInput extends CreateAccessSourceInput {}
/**
 * @public
 *
 * The output of {@link CreateAccessSourceCommand}.
 */
export interface CreateAccessSourceCommandOutput extends CreateAccessSourceOutput, __MetadataBearer {}

/**
 * <p>Creates an access source for a DNS view. Access sources define IP addresses or CIDR ranges that are allowed to send DNS queries to the Route 53 Global Resolver, along with the permitted DNS protocols.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, CreateAccessSourceCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, CreateAccessSourceCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // CreateAccessSourceInput
 *   cidr: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   ipAddressType: "IPV4" || "IPV6",
 *   name: "STRING_VALUE",
 *   dnsViewId: "STRING_VALUE", // required
 *   protocol: "DO53" || "DOH" || "DOT", // required
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAccessSourceCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessSourceOutput
 * //   arn: "STRING_VALUE", // required
 * //   cidr: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   id: "STRING_VALUE", // required
 * //   ipAddressType: "IPV4" || "IPV6", // required
 * //   name: "STRING_VALUE",
 * //   dnsViewId: "STRING_VALUE", // required
 * //   protocol: "DO53" || "DOH" || "DOT", // required
 * //   status: "CREATING" || "OPERATIONAL" || "UPDATING" || "DELETING", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateAccessSourceCommandInput - {@link CreateAccessSourceCommandInput}
 * @returns {@link CreateAccessSourceCommandOutput}
 * @see {@link CreateAccessSourceCommandInput} for command's `input` shape.
 * @see {@link CreateAccessSourceCommandOutput} for command's `response` shape.
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
 * @example CreateAccessSource example
 * ```javascript
 * //
 * const input = {
 *   cidr: "85.90.183.3/30",
 *   clientToken: "9fas9-9usdfa-xbi8-kco",
 *   dnsViewId: "dnsv-123456789",
 *   ipAddressType: "IPV4",
 *   name: "My Access Source",
 *   protocol: "DO53",
 *   tags: {
 *     Key1: "Value1"
 *   }
 * };
 * const command = new CreateAccessSourceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   arn: "arn:aws:route53globalresolver::123456789012:access-source/as-823as9d9831",
 *   cidr: "85.90.183.3/30",
 *   createdAt: "2025-10-16T14:07:45.934184715Z",
 *   dnsViewId: "dnsv-123456789",
 *   id: "as-123456789",
 *   ipAddressType: "IPV4",
 *   name: "My Access Source",
 *   protocol: "DO53",
 *   status: "CREATING",
 *   updatedAt: "2025-10-16T14:07:45.934184715Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateAccessSourceCommand extends $Command
  .classBuilder<
    CreateAccessSourceCommandInput,
    CreateAccessSourceCommandOutput,
    Route53GlobalResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53GlobalResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2DNSGlobalResolverCustomerAPI", "CreateAccessSource", {})
  .n("Route53GlobalResolverClient", "CreateAccessSourceCommand")
  .sc(CreateAccessSource$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccessSourceInput;
      output: CreateAccessSourceOutput;
    };
    sdk: {
      input: CreateAccessSourceCommandInput;
      output: CreateAccessSourceCommandOutput;
    };
  };
}
