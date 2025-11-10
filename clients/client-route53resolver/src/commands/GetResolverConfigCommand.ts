// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetResolverConfigRequest, GetResolverConfigResponse } from "../models/models_0";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { GetResolverConfig } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResolverConfigCommand}.
 */
export interface GetResolverConfigCommandInput extends GetResolverConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetResolverConfigCommand}.
 */
export interface GetResolverConfigCommandOutput extends GetResolverConfigResponse, __MetadataBearer {}

/**
 * <p>Retrieves the behavior configuration of Route 53 Resolver behavior for a single VPC from
 * 				Amazon Virtual Private Cloud.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetResolverConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetResolverConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // GetResolverConfigRequest
 *   ResourceId: "STRING_VALUE", // required
 * };
 * const command = new GetResolverConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetResolverConfigResponse
 * //   ResolverConfig: { // ResolverConfig
 * //     Id: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     AutodefinedReverse: "ENABLING" || "ENABLED" || "DISABLING" || "DISABLED" || "UPDATING_TO_USE_LOCAL_RESOURCE_SETTING" || "USE_LOCAL_RESOURCE_SETTING",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetResolverConfigCommandInput - {@link GetResolverConfigCommandInput}
 * @returns {@link GetResolverConfigCommandOutput}
 * @see {@link GetResolverConfigCommandInput} for command's `input` shape.
 * @see {@link GetResolverConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The current account doesn't have the IAM permissions required to perform the specified Resolver operation.</p>
 *          <p>This error can also be thrown when a customer has reached the 5120 character limit for a
 * 			resource policy for CloudWatch Logs.</p>
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in this request are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Try again in a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You have provided an invalid command. If you ran the <code>UpdateFirewallDomains</code> request. supported values are <code>ADD</code>,
 * 			<code>REMOVE</code>, or <code>REPLACE</code> a domain.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 *
 * @public
 */
export class GetResolverConfigCommand extends $Command
  .classBuilder<
    GetResolverConfigCommandInput,
    GetResolverConfigCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Resolver", "GetResolverConfig", {})
  .n("Route53ResolverClient", "GetResolverConfigCommand")
  .sc(GetResolverConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResolverConfigRequest;
      output: GetResolverConfigResponse;
    };
    sdk: {
      input: GetResolverConfigCommandInput;
      output: GetResolverConfigCommandOutput;
    };
  };
}
