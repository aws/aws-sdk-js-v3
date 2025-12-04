// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateDNSViewInput, CreateDNSViewOutput } from "../models/models_0";
import type {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53GlobalResolverClient";
import { CreateDNSView } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDNSViewCommand}.
 */
export interface CreateDNSViewCommandInput extends CreateDNSViewInput {}
/**
 * @public
 *
 * The output of {@link CreateDNSViewCommand}.
 */
export interface CreateDNSViewCommandOutput extends CreateDNSViewOutput, __MetadataBearer {}

/**
 * <p>Creates a DNS view within a Route 53 Global Resolver. A DNS view models end users, user groups, networks, and devices, and serves as a parent resource that holds configurations controlling access, authorization, DNS firewall rules, and forwarding rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, CreateDNSViewCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, CreateDNSViewCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // CreateDNSViewInput
 *   globalResolverId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   dnssecValidation: "ENABLED" || "DISABLED",
 *   ednsClientSubnet: "ENABLED" || "DISABLED",
 *   firewallRulesFailOpen: "ENABLED" || "DISABLED",
 *   description: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDNSViewCommand(input);
 * const response = await client.send(command);
 * // { // CreateDNSViewOutput
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   clientToken: "STRING_VALUE",
 * //   dnssecValidation: "ENABLED" || "DISABLED", // required
 * //   ednsClientSubnet: "ENABLED" || "DISABLED", // required
 * //   firewallRulesFailOpen: "ENABLED" || "DISABLED", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   globalResolverId: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   status: "CREATING" || "OPERATIONAL" || "UPDATING" || "ENABLING" || "DISABLING" || "DISABLED" || "DELETING", // required
 * // };
 *
 * ```
 *
 * @param CreateDNSViewCommandInput - {@link CreateDNSViewCommandInput}
 * @returns {@link CreateDNSViewCommandOutput}
 * @see {@link CreateDNSViewCommandInput} for command's `input` shape.
 * @see {@link CreateDNSViewCommandOutput} for command's `response` shape.
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
export class CreateDNSViewCommand extends $Command
  .classBuilder<
    CreateDNSViewCommandInput,
    CreateDNSViewCommandOutput,
    Route53GlobalResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53GlobalResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2DNSGlobalResolverCustomerAPI", "CreateDNSView", {})
  .n("Route53GlobalResolverClient", "CreateDNSViewCommand")
  .sc(CreateDNSView)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDNSViewInput;
      output: CreateDNSViewOutput;
    };
    sdk: {
      input: CreateDNSViewCommandInput;
      output: CreateDNSViewCommandOutput;
    };
  };
}
