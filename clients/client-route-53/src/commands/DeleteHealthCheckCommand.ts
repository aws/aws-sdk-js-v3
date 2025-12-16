// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteHealthCheckRequest, DeleteHealthCheckResponse } from "../models/models_0";
import type { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DeleteHealthCheck$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteHealthCheckCommand}.
 */
export interface DeleteHealthCheckCommandInput extends DeleteHealthCheckRequest {}
/**
 * @public
 *
 * The output of {@link DeleteHealthCheckCommand}.
 */
export interface DeleteHealthCheckCommandOutput extends DeleteHealthCheckResponse, __MetadataBearer {}

/**
 * <p>Deletes a health check.</p>
 *          <important>
 *             <p>Amazon Route 53 does not prevent you from deleting a health check even if the
 * 				health check is associated with one or more resource record sets. If you delete a
 * 				health check and you don't update the associated resource record sets, the future
 * 				status of the health check can't be predicted and may change. This will affect the
 * 				routing of DNS queries for your DNS failover configuration. For more information,
 * 				see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checks-creating-deleting.html#health-checks-deleting.html">Replacing and Deleting Health Checks</a> in the <i>Amazon Route 53
 * 					Developer Guide</i>.</p>
 *          </important>
 *          <p>If you're using Cloud Map and you configured Cloud Map to create a Route 53
 * 			health check when you register an instance, you can't use the Route 53
 * 				<code>DeleteHealthCheck</code> command to delete the health check. The health check
 * 			is deleted automatically when you deregister the instance; there can be a delay of
 * 			several hours before the health check is deleted from Route 53. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteHealthCheckCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteHealthCheckCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // DeleteHealthCheckRequest
 *   HealthCheckId: "STRING_VALUE", // required
 * };
 * const command = new DeleteHealthCheckCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteHealthCheckCommandInput - {@link DeleteHealthCheckCommandInput}
 * @returns {@link DeleteHealthCheckCommandOutput}
 * @see {@link DeleteHealthCheckCommandInput} for command's `input` shape.
 * @see {@link DeleteHealthCheckCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link HealthCheckInUse} (client fault)
 *  <p>This error code is not in use.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchHealthCheck} (client fault)
 *  <p>No health check exists with the specified ID.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class DeleteHealthCheckCommand extends $Command
  .classBuilder<
    DeleteHealthCheckCommandInput,
    DeleteHealthCheckCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDnsV20130401", "DeleteHealthCheck", {})
  .n("Route53Client", "DeleteHealthCheckCommand")
  .sc(DeleteHealthCheck$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteHealthCheckRequest;
      output: {};
    };
    sdk: {
      input: DeleteHealthCheckCommandInput;
      output: DeleteHealthCheckCommandOutput;
    };
  };
}
