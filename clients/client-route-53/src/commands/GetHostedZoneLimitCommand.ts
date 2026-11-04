// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetHostedZoneLimitRequest, GetHostedZoneLimitResponse } from "../models/models_0";
import { GetHostedZoneLimit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets the specified limit for a specified hosted zone, for example, the maximum number of records that you can create in the hosted zone.
 *
 * For the default limit, see [Limits](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html) in the *Amazon Route 53 Developer Guide*. To request a higher limit, [open a case](https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&limitType=service-code-route53).
 *
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
 *
 * The specified hosted zone is a public hosted zone, not a private hosted zone.
 *
 * @throws {@link InvalidInput} (client fault)
 *
 * The input is not valid.
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *
 * No hosted zone exists with the ID that you specified.
 *
 * @throws {@link Route53ServiceException}
 *
 * Base exception class for all service exceptions from Route53 service.
 *
 * @public
 */
export class GetHostedZoneLimitCommand extends command<GetHostedZoneLimitCommandInput, GetHostedZoneLimitCommandOutput>(
  _ep0,
  _mw0,
  "GetHostedZoneLimit",
  GetHostedZoneLimit$
) {
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
