// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateDNSViewInput, UpdateDNSViewOutput } from "../models/models_0";
import type {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53GlobalResolverClient";
import { UpdateDNSView$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDNSViewCommand}.
 */
export interface UpdateDNSViewCommandInput extends UpdateDNSViewInput {}
/**
 * @public
 *
 * The output of {@link UpdateDNSViewCommand}.
 */
export interface UpdateDNSViewCommandOutput extends UpdateDNSViewOutput, __MetadataBearer {}

/**
 * <p>Updates the configuration of a DNS view.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, UpdateDNSViewCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, UpdateDNSViewCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // UpdateDNSViewInput
 *   dnsViewId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   dnssecValidation: "ENABLED" || "DISABLED",
 *   ednsClientSubnet: "ENABLED" || "DISABLED",
 *   firewallRulesFailOpen: "ENABLED" || "DISABLED",
 * };
 * const command = new UpdateDNSViewCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDNSViewOutput
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
 * @param UpdateDNSViewCommandInput - {@link UpdateDNSViewCommandInput}
 * @returns {@link UpdateDNSViewCommandOutput}
 * @see {@link UpdateDNSViewCommandInput} for command's `input` shape.
 * @see {@link UpdateDNSViewCommandOutput} for command's `response` shape.
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
export class UpdateDNSViewCommand extends $Command
  .classBuilder<
    UpdateDNSViewCommandInput,
    UpdateDNSViewCommandOutput,
    Route53GlobalResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53GlobalResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2DNSGlobalResolverCustomerAPI", "UpdateDNSView", {})
  .n("Route53GlobalResolverClient", "UpdateDNSViewCommand")
  .sc(UpdateDNSView$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDNSViewInput;
      output: UpdateDNSViewOutput;
    };
    sdk: {
      input: UpdateDNSViewCommandInput;
      output: UpdateDNSViewCommandOutput;
    };
  };
}
