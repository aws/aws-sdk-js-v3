// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateHostedZoneFeaturesRequest, UpdateHostedZoneFeaturesResponse } from "../models/models_0";
import type { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { UpdateHostedZoneFeatures$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateHostedZoneFeaturesCommand}.
 */
export interface UpdateHostedZoneFeaturesCommandInput extends UpdateHostedZoneFeaturesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateHostedZoneFeaturesCommand}.
 */
export interface UpdateHostedZoneFeaturesCommandOutput extends UpdateHostedZoneFeaturesResponse, __MetadataBearer {}

/**
 * <p>Updates the features configuration for a hosted zone. This operation allows you to enable or disable specific features for your hosted zone, such as accelerated recovery.</p>
 *          <p>Accelerated recovery enables you to update DNS records in your public hosted zone even when the us-east-1 region is unavailable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, UpdateHostedZoneFeaturesCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, UpdateHostedZoneFeaturesCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // UpdateHostedZoneFeaturesRequest
 *   HostedZoneId: "STRING_VALUE", // required
 *   EnableAcceleratedRecovery: true || false,
 * };
 * const command = new UpdateHostedZoneFeaturesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateHostedZoneFeaturesCommandInput - {@link UpdateHostedZoneFeaturesCommandInput}
 * @returns {@link UpdateHostedZoneFeaturesCommandOutput}
 * @see {@link UpdateHostedZoneFeaturesCommandInput} for command's `input` shape.
 * @see {@link UpdateHostedZoneFeaturesCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link LimitsExceeded} (client fault)
 *  <p>This operation can't be completed because the current account has reached the
 * 			limit on the resource you are trying to create. To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the Amazon Web Services Support
 * 			Center.</p>
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *  <p>No hosted zone exists with the ID that you specified.</p>
 *
 * @throws {@link PriorRequestNotComplete} (client fault)
 *  <p>If Amazon Route 53 can't process a request before the next request arrives, it will
 * 			reject subsequent requests for the same hosted zone and return an <code>HTTP 400
 * 				error</code> (<code>Bad request</code>). If Route 53 returns this error repeatedly
 * 			for the same request, we recommend that you wait, in intervals of increasing duration,
 * 			before you try the request again.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class UpdateHostedZoneFeaturesCommand extends $Command
  .classBuilder<
    UpdateHostedZoneFeaturesCommandInput,
    UpdateHostedZoneFeaturesCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getIdNormalizerPlugin(config)];
  })
  .s("AWSDnsV20130401", "UpdateHostedZoneFeatures", {})
  .n("Route53Client", "UpdateHostedZoneFeaturesCommand")
  .sc(UpdateHostedZoneFeatures$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateHostedZoneFeaturesRequest;
      output: {};
    };
    sdk: {
      input: UpdateHostedZoneFeaturesCommandInput;
      output: UpdateHostedZoneFeaturesCommandOutput;
    };
  };
}
