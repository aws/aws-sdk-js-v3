// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAppCookieStickinessPolicyInput, CreateAppCookieStickinessPolicyOutput } from "../models/models_0";
import { CreateAppCookieStickinessPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CreateAppCookieStickinessPolicyCommandOutput extends CreateAppCookieStickinessPolicyOutput, __MetadataBearer {}

/**
 * Generates a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie. This policy can be associated only with HTTP/HTTPS listeners.
 *
 * This policy is similar to the policy created by CreateLBCookieStickinessPolicy, except that the lifetime of the special Elastic Load Balancing cookie, `AWSELB`, follows the lifetime of the application-generated cookie specified in the policy configuration. The load balancer only inserts a new stickiness cookie when the application response includes a new application cookie.
 *
 * If the application cookie is explicitly removed or expires, the session stops being sticky until a new application cookie is issued.
 *
 * For more information, see [Application-Controlled Session Stickiness](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application) in the *Classic Load Balancers Guide*.
 *
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
 *
 * The specified load balancer does not exist.
 *
 * @throws {@link DuplicatePolicyNameException} (client fault)
 *
 * A policy with the specified name already exists for this load balancer.
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *
 * The requested configuration change is not valid.
 *
 * @throws {@link TooManyPoliciesException} (client fault)
 *
 * The quota for the number of policies for this load balancer has been reached.
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 *
 * Base exception class for all service exceptions from ElasticLoadBalancing service.
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
export class CreateAppCookieStickinessPolicyCommand extends command<CreateAppCookieStickinessPolicyCommandInput, CreateAppCookieStickinessPolicyCommandOutput>(
  _ep0,
  _mw0,
  "CreateAppCookieStickinessPolicy",
  CreateAppCookieStickinessPolicy$
) {
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
