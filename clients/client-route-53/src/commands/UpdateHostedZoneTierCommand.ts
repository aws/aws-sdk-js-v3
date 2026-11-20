// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateHostedZoneTierRequest, UpdateHostedZoneTierResponse } from "../models/models_0";
import { UpdateHostedZoneTier$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateHostedZoneTierCommand}.
 */
export interface UpdateHostedZoneTierCommandInput extends UpdateHostedZoneTierRequest {}
/**
 * @public
 *
 * The output of {@link UpdateHostedZoneTierCommand}.
 */
export interface UpdateHostedZoneTierCommandOutput extends UpdateHostedZoneTierResponse, __MetadataBearer {}

/**
 * <p>Changes the tier of a hosted zone. The tier determines which features the hosted zone includes and which optional features you can turn on. For pricing information, see <a href="https://aws.amazon.com/route53/pricing/">Amazon Route 53 pricing</a> on the AWS website.</p>
 *          <p>When the hosted zone moves to a new tier, Route 53 turns on the features that the new tier includes. Route 53 also disables any enabled features that the new tier doesn't include.</p>
 *          <p>Before you move a hosted zone to a tier that doesn't offer an optional feature that you turned on, turn off that feature. You can't change the tier of a hosted zone that uses a CloudFront flat-rate pricing plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, UpdateHostedZoneTierCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, UpdateHostedZoneTierCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // UpdateHostedZoneTierRequest
 *   HostedZoneId: "STRING_VALUE", // required
 *   HostedZoneTier: "STANDARD" || "ADVANCED", // required
 *   DryRun: true || false,
 * };
 * const command = new UpdateHostedZoneTierCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateHostedZoneTierCommandInput - {@link UpdateHostedZoneTierCommandInput}
 * @returns {@link UpdateHostedZoneTierCommandOutput}
 * @see {@link UpdateHostedZoneTierCommandInput} for command's `input` shape.
 * @see {@link UpdateHostedZoneTierCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
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
export class UpdateHostedZoneTierCommand extends command<UpdateHostedZoneTierCommandInput, UpdateHostedZoneTierCommandOutput>(
  _ep0,
  _mw0,
  "UpdateHostedZoneTier",
  UpdateHostedZoneTier$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateHostedZoneTierRequest;
      output: {};
    };
    sdk: {
      input: UpdateHostedZoneTierCommandInput;
      output: UpdateHostedZoneTierCommandOutput;
    };
  };
}
