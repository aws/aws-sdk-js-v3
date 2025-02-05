// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetReusableDelegationSetLimitRequest, GetReusableDelegationSetLimitResponse } from "../models/models_0";
import {
  de_GetReusableDelegationSetLimitCommand,
  se_GetReusableDelegationSetLimitCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetReusableDelegationSetLimitCommand}.
 */
export interface GetReusableDelegationSetLimitCommandInput extends GetReusableDelegationSetLimitRequest {}
/**
 * @public
 *
 * The output of {@link GetReusableDelegationSetLimitCommand}.
 */
export interface GetReusableDelegationSetLimitCommandOutput
  extends GetReusableDelegationSetLimitResponse,
    __MetadataBearer {}

/**
 * <p>Gets the maximum number of hosted zones that you can associate with the specified
 * 			reusable delegation set.</p>
 *          <p>For the default limit, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the
 * 				<i>Amazon Route 53 Developer Guide</i>. To request a higher limit,
 * 				<a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&limitType=service-code-route53">open a case</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetReusableDelegationSetLimitCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetReusableDelegationSetLimitCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Route53Client(config);
 * const input = { // GetReusableDelegationSetLimitRequest
 *   Type: "MAX_ZONES_BY_REUSABLE_DELEGATION_SET", // required
 *   DelegationSetId: "STRING_VALUE", // required
 * };
 * const command = new GetReusableDelegationSetLimitCommand(input);
 * const response = await client.send(command);
 * // { // GetReusableDelegationSetLimitResponse
 * //   Limit: { // ReusableDelegationSetLimit
 * //     Type: "MAX_ZONES_BY_REUSABLE_DELEGATION_SET", // required
 * //     Value: Number("long"), // required
 * //   },
 * //   Count: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param GetReusableDelegationSetLimitCommandInput - {@link GetReusableDelegationSetLimitCommandInput}
 * @returns {@link GetReusableDelegationSetLimitCommandOutput}
 * @see {@link GetReusableDelegationSetLimitCommandInput} for command's `input` shape.
 * @see {@link GetReusableDelegationSetLimitCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchDelegationSet} (client fault)
 *  <p>A reusable delegation set with the specified ID does not exist.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 * @public
 */
export class GetReusableDelegationSetLimitCommand extends $Command
  .classBuilder<
    GetReusableDelegationSetLimitCommandInput,
    GetReusableDelegationSetLimitCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getIdNormalizerPlugin(config),
    ];
  })
  .s("AWSDnsV20130401", "GetReusableDelegationSetLimit", {})
  .n("Route53Client", "GetReusableDelegationSetLimitCommand")
  .f(void 0, void 0)
  .ser(se_GetReusableDelegationSetLimitCommand)
  .de(de_GetReusableDelegationSetLimitCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetReusableDelegationSetLimitRequest;
      output: GetReusableDelegationSetLimitResponse;
    };
    sdk: {
      input: GetReusableDelegationSetLimitCommandInput;
      output: GetReusableDelegationSetLimitCommandOutput;
    };
  };
}
