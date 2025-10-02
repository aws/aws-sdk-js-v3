// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateInstanceCustomHealthStatusRequest } from "../models/models_0";
import {
  de_UpdateInstanceCustomHealthStatusCommand,
  se_UpdateInstanceCustomHealthStatusCommand,
} from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateInstanceCustomHealthStatusCommand}.
 */
export interface UpdateInstanceCustomHealthStatusCommandInput extends UpdateInstanceCustomHealthStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInstanceCustomHealthStatusCommand}.
 */
export interface UpdateInstanceCustomHealthStatusCommandOutput extends __MetadataBearer {}

/**
 * <p>Submits a request to change the health status of a custom health check to healthy or
 *    unhealthy.</p>
 *          <p>You can use <code>UpdateInstanceCustomHealthStatus</code> to change the status only for
 *    custom health checks, which you define using <code>HealthCheckCustomConfig</code> when you create
 *    a service. You can't use it to change the status for Route 53 health checks, which you define using
 *     <code>HealthCheckConfig</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_HealthCheckCustomConfig.html">HealthCheckCustomConfig</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, UpdateInstanceCustomHealthStatusCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, UpdateInstanceCustomHealthStatusCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * // import type { ServiceDiscoveryClientConfig } from "@aws-sdk/client-servicediscovery";
 * const config = {}; // type is ServiceDiscoveryClientConfig
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // UpdateInstanceCustomHealthStatusRequest
 *   ServiceId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   Status: "HEALTHY" || "UNHEALTHY", // required
 * };
 * const command = new UpdateInstanceCustomHealthStatusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateInstanceCustomHealthStatusCommandInput - {@link UpdateInstanceCustomHealthStatusCommandInput}
 * @returns {@link UpdateInstanceCustomHealthStatusCommandOutput}
 * @see {@link UpdateInstanceCustomHealthStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateInstanceCustomHealthStatusCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link CustomHealthNotFound} (client fault)
 *  <p>The health check for the instance that's specified by <code>ServiceId</code> and
 *     <code>InstanceId</code> isn't a custom health check. </p>
 *
 * @throws {@link InstanceNotFound} (client fault)
 *  <p>No instance exists with the specified ID, or the instance was recently registered, and
 *    information about the instance hasn't propagated yet.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>One or more specified values aren't valid. For example, a required value might be missing, a
 *    numeric value might be outside the allowed range, or a string value might exceed length
 *    constraints.</p>
 *
 * @throws {@link ServiceNotFound} (client fault)
 *  <p>No service exists with the specified ID.</p>
 *
 * @throws {@link ServiceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from ServiceDiscovery service.</p>
 *
 *
 * @example Update instance custom health status using service ARN
 * ```javascript
 * // Updates instance custom health status using a service ARN instead of service ID, useful when working with shared namespaces.
 * const input = {
 *   InstanceId: "i-abcd1234xmpl5678",
 *   ServiceId: "arn:aws:servicediscovery:us-west-2:123456789012:service/srv-abcd1234xmpl5678",
 *   Status: "HEALTHY"
 * };
 * const command = new UpdateInstanceCustomHealthStatusCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @example UpdateInstanceCustomHealthStatus Example
 * ```javascript
 * // This example submits a request to change the health status of an instance associated with a service with a custom health check to HEALTHY.
 * const input = {
 *   InstanceId: "i-abcd1234",
 *   ServiceId: "srv-e4anhexample0004",
 *   Status: "HEALTHY"
 * };
 * const command = new UpdateInstanceCustomHealthStatusCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateInstanceCustomHealthStatusCommand extends $Command
  .classBuilder<
    UpdateInstanceCustomHealthStatusCommandInput,
    UpdateInstanceCustomHealthStatusCommandOutput,
    ServiceDiscoveryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceDiscoveryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53AutoNaming_v20170314", "UpdateInstanceCustomHealthStatus", {})
  .n("ServiceDiscoveryClient", "UpdateInstanceCustomHealthStatusCommand")
  .f(void 0, void 0)
  .ser(se_UpdateInstanceCustomHealthStatusCommand)
  .de(de_UpdateInstanceCustomHealthStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateInstanceCustomHealthStatusRequest;
      output: {};
    };
    sdk: {
      input: UpdateInstanceCustomHealthStatusCommandInput;
      output: UpdateInstanceCustomHealthStatusCommandOutput;
    };
  };
}
