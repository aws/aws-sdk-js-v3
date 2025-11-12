// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAppCookieStickinessPolicyInput, CreateAppCookieStickinessPolicyOutput } from "../models/models_0";
import { CreateAppCookieStickinessPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAppCookieStickinessPolicyCommand}.
 */
export interface CreateAppCookieStickinessPolicyCommandInput extends CreateAppCookieStickinessPolicyInput {}
/**
 * @public
 *
 * The output of {@link CreateAppCookieStickinessPolicyCommand}.
 */
export interface CreateAppCookieStickinessPolicyCommandOutput
  extends CreateAppCookieStickinessPolicyOutput,
    __MetadataBearer {}

/**
 * <p>Generates a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie. This policy can be associated only with HTTP/HTTPS listeners.</p>
 *         <p>This policy is similar to the policy created by <a>CreateLBCookieStickinessPolicy</a>,
 *             except that the lifetime of the special Elastic Load Balancing cookie, <code>AWSELB</code>,
 *             follows the lifetime of the application-generated cookie specified in the policy configuration.
 *             The load balancer only inserts a new stickiness cookie when the application response
 *             includes a new application cookie.</p>
 *         <p>If the application cookie is explicitly removed or expires, the session stops being sticky until a new application cookie is issued.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, CreateAppCookieStickinessPolicyCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, CreateAppCookieStickinessPolicyCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * // import type { ElasticLoadBalancingClientConfig } from "@aws-sdk/client-elastic-load-balancing";
 * const config = {}; // type is ElasticLoadBalancingClientConfig
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // CreateAppCookieStickinessPolicyInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 *   CookieName: "STRING_VALUE", // required
 * };
 * const command = new CreateAppCookieStickinessPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateAppCookieStickinessPolicyCommandInput - {@link CreateAppCookieStickinessPolicyCommandInput}
 * @returns {@link CreateAppCookieStickinessPolicyCommandOutput}
 * @see {@link CreateAppCookieStickinessPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateAppCookieStickinessPolicyCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link DuplicatePolicyNameException} (client fault)
 *  <p>A policy with the specified name already exists for this load balancer.</p>
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration change is not valid.</p>
 *
 * @throws {@link TooManyPoliciesException} (client fault)
 *  <p>The quota for the number of policies for this load balancer has been reached.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 *
 * @example To generate a stickiness policy for your load balancer
 * ```javascript
 * // This example generates a stickiness policy that follows the sticky session lifetimes of the application-generated cookie.
 * const input = {
 *   CookieName: "my-app-cookie",
 *   LoadBalancerName: "my-load-balancer",
 *   PolicyName: "my-app-cookie-policy"
 * };
 * const command = new CreateAppCookieStickinessPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CreateAppCookieStickinessPolicyCommand extends $Command
  .classBuilder<
    CreateAppCookieStickinessPolicyCommandInput,
    CreateAppCookieStickinessPolicyCommandOutput,
    ElasticLoadBalancingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticLoadBalancing_v7", "CreateAppCookieStickinessPolicy", {})
  .n("ElasticLoadBalancingClient", "CreateAppCookieStickinessPolicyCommand")
  .sc(CreateAppCookieStickinessPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAppCookieStickinessPolicyInput;
      output: {};
    };
    sdk: {
      input: CreateAppCookieStickinessPolicyCommandInput;
      output: CreateAppCookieStickinessPolicyCommandOutput;
    };
  };
}
