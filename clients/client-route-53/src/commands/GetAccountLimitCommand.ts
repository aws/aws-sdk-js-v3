// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetAccountLimitRequest, GetAccountLimitResponse } from "../models/models_0";
import type { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetAccountLimit } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccountLimitCommand}.
 */
export interface GetAccountLimitCommandInput extends GetAccountLimitRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountLimitCommand}.
 */
export interface GetAccountLimitCommandOutput extends GetAccountLimitResponse, __MetadataBearer {}

/**
 * <p>Gets the specified limit for the current account, for example, the maximum number of
 * 			health checks that you can create using the account.</p>
 *          <p>For the default limit, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the
 * 				<i>Amazon Route 53 Developer Guide</i>. To request a higher limit,
 * 				<a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&limitType=service-code-route53">open a case</a>.</p>
 *          <note>
 *             <p>You can also view account limits in Amazon Web Services Trusted Advisor. Sign in to
 * 				the Amazon Web Services Management Console and open the Trusted Advisor console at <a href="https://console.aws.amazon.com/trustedadvisor">https://console.aws.amazon.com/trustedadvisor/</a>. Then choose <b>Service limits</b> in the navigation pane.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetAccountLimitCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetAccountLimitCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // GetAccountLimitRequest
 *   Type: "MAX_HEALTH_CHECKS_BY_OWNER" || "MAX_HOSTED_ZONES_BY_OWNER" || "MAX_TRAFFIC_POLICY_INSTANCES_BY_OWNER" || "MAX_REUSABLE_DELEGATION_SETS_BY_OWNER" || "MAX_TRAFFIC_POLICIES_BY_OWNER", // required
 * };
 * const command = new GetAccountLimitCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountLimitResponse
 * //   Limit: { // AccountLimit
 * //     Type: "MAX_HEALTH_CHECKS_BY_OWNER" || "MAX_HOSTED_ZONES_BY_OWNER" || "MAX_TRAFFIC_POLICY_INSTANCES_BY_OWNER" || "MAX_REUSABLE_DELEGATION_SETS_BY_OWNER" || "MAX_TRAFFIC_POLICIES_BY_OWNER", // required
 * //     Value: Number("long"), // required
 * //   },
 * //   Count: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param GetAccountLimitCommandInput - {@link GetAccountLimitCommandInput}
 * @returns {@link GetAccountLimitCommandOutput}
 * @see {@link GetAccountLimitCommandInput} for command's `input` shape.
 * @see {@link GetAccountLimitCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class GetAccountLimitCommand extends $Command
  .classBuilder<
    GetAccountLimitCommandInput,
    GetAccountLimitCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDnsV20130401", "GetAccountLimit", {})
  .n("Route53Client", "GetAccountLimitCommand")
  .sc(GetAccountLimit)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccountLimitRequest;
      output: GetAccountLimitResponse;
    };
    sdk: {
      input: GetAccountLimitCommandInput;
      output: GetAccountLimitCommandOutput;
    };
  };
}
