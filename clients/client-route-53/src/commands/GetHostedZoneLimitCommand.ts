// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetHostedZoneLimitRequest, GetHostedZoneLimitResponse } from "../models/models_0";
import type { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetHostedZoneLimit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetHostedZoneLimitCommand}.
 */
export interface GetHostedZoneLimitCommandInput extends GetHostedZoneLimitRequest {}
/**
 * @public
 *
 * The output of {@link GetHostedZoneLimitCommand}.
 */
export interface GetHostedZoneLimitCommandOutput extends GetHostedZoneLimitResponse, __MetadataBearer {}

/**
 * <p>Gets the specified limit for a specified hosted zone, for example, the maximum number
 * 			of records that you can create in the hosted zone. </p>
 *          <p>For the default limit, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the
 * 				<i>Amazon Route 53 Developer Guide</i>. To request a higher limit,
 * 				<a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&limitType=service-code-route53">open a case</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHostedZoneLimitCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHostedZoneLimitCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // GetHostedZoneLimitRequest
 *   Type: "MAX_RRSETS_BY_ZONE" || "MAX_VPCS_ASSOCIATED_BY_ZONE", // required
 *   HostedZoneId: "STRING_VALUE", // required
 * };
 * const command = new GetHostedZoneLimitCommand(input);
 * const response = await client.send(command);
 * // { // GetHostedZoneLimitResponse
 * //   Limit: { // HostedZoneLimit
 * //     Type: "MAX_RRSETS_BY_ZONE" || "MAX_VPCS_ASSOCIATED_BY_ZONE", // required
 * //     Value: Number("long"), // required
 * //   },
 * //   Count: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param GetHostedZoneLimitCommandInput - {@link GetHostedZoneLimitCommandInput}
 * @returns {@link GetHostedZoneLimitCommandOutput}
 * @see {@link GetHostedZoneLimitCommandInput} for command's `input` shape.
 * @see {@link GetHostedZoneLimitCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link HostedZoneNotPrivate} (client fault)
 *  <p>The specified hosted zone is a public hosted zone, not a private hosted zone.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *  <p>No hosted zone exists with the ID that you specified.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class GetHostedZoneLimitCommand extends $Command
  .classBuilder<
    GetHostedZoneLimitCommandInput,
    GetHostedZoneLimitCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getIdNormalizerPlugin(config)];
  })
  .s("AWSDnsV20130401", "GetHostedZoneLimit", {})
  .n("Route53Client", "GetHostedZoneLimitCommand")
  .sc(GetHostedZoneLimit$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetHostedZoneLimitRequest;
      output: GetHostedZoneLimitResponse;
    };
    sdk: {
      input: GetHostedZoneLimitCommandInput;
      output: GetHostedZoneLimitCommandOutput;
    };
  };
}
