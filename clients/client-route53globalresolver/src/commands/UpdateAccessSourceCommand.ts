// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateAccessSourceInput, UpdateAccessSourceOutput } from "../models/models_0";
import type {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53GlobalResolverClient";
import { UpdateAccessSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAccessSourceCommand}.
 */
export interface UpdateAccessSourceCommandInput extends UpdateAccessSourceInput {}
/**
 * @public
 *
 * The output of {@link UpdateAccessSourceCommand}.
 */
export interface UpdateAccessSourceCommandOutput extends UpdateAccessSourceOutput, __MetadataBearer {}

/**
 * <p>Updates the configuration of an access source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, UpdateAccessSourceCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, UpdateAccessSourceCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // UpdateAccessSourceInput
 *   accessSourceId: "STRING_VALUE", // required
 *   cidr: "STRING_VALUE",
 *   ipAddressType: "IPV4" || "IPV6",
 *   name: "STRING_VALUE",
 *   protocol: "DO53" || "DOH" || "DOT",
 * };
 * const command = new UpdateAccessSourceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAccessSourceOutput
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
 * @param UpdateAccessSourceCommandInput - {@link UpdateAccessSourceCommandInput}
 * @returns {@link UpdateAccessSourceCommandOutput}
 * @see {@link UpdateAccessSourceCommandInput} for command's `input` shape.
 * @see {@link UpdateAccessSourceCommandOutput} for command's `response` shape.
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
export class UpdateAccessSourceCommand extends $Command
  .classBuilder<
    UpdateAccessSourceCommandInput,
    UpdateAccessSourceCommandOutput,
    Route53GlobalResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53GlobalResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2DNSGlobalResolverCustomerAPI", "UpdateAccessSource", {})
  .n("Route53GlobalResolverClient", "UpdateAccessSourceCommand")
  .sc(UpdateAccessSource$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccessSourceInput;
      output: UpdateAccessSourceOutput;
    };
    sdk: {
      input: UpdateAccessSourceCommandInput;
      output: UpdateAccessSourceCommandOutput;
    };
  };
}
