// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetInstancesHealthStatusRequest, GetInstancesHealthStatusResponse } from "../models/models_0";
import { de_GetInstancesHealthStatusCommand, se_GetInstancesHealthStatusCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInstancesHealthStatusCommand}.
 */
export interface GetInstancesHealthStatusCommandInput extends GetInstancesHealthStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetInstancesHealthStatusCommand}.
 */
export interface GetInstancesHealthStatusCommandOutput extends GetInstancesHealthStatusResponse, __MetadataBearer {}

/**
 * <p>Gets the current health status (<code>Healthy</code>, <code>Unhealthy</code>, or <code>Unknown</code>) of
 *    one or more instances that are associated with a specified service.</p>
 *          <note>
 *             <p>There's a brief delay between when you register an instance and when the health status for the instance is
 *     available. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, GetInstancesHealthStatusCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, GetInstancesHealthStatusCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // GetInstancesHealthStatusRequest
 *   ServiceId: "STRING_VALUE", // required
 *   Instances: [ // InstanceIdList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetInstancesHealthStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetInstancesHealthStatusResponse
 * //   Status: { // InstanceHealthStatusMap
 * //     "<keys>": "HEALTHY" || "UNHEALTHY" || "UNKNOWN",
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetInstancesHealthStatusCommandInput - {@link GetInstancesHealthStatusCommandInput}
 * @returns {@link GetInstancesHealthStatusCommandOutput}
 * @see {@link GetInstancesHealthStatusCommandInput} for command's `input` shape.
 * @see {@link GetInstancesHealthStatusCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link InstanceNotFound} (client fault)
 *  <p>No instance exists with the specified ID, or the instance was recently registered, and information about
 *    the instance hasn't propagated yet.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value
 *    might be outside the allowed range, or a string value might exceed length constraints.</p>
 *
 * @throws {@link ServiceNotFound} (client fault)
 *  <p>No service exists with the specified ID.</p>
 *
 * @throws {@link ServiceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from ServiceDiscovery service.</p>
 *
 *
 * @example GetInstancesHealthStatus example
 * ```javascript
 * // This example gets the current health status of one or more instances that are associate with a specified service.
 * const input = {
 *   ServiceId: "srv-e4anhexample0004"
 * };
 * const command = new GetInstancesHealthStatusCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Status: {
 *     i-abcd1234: "HEALTHY",
 *     i-abcd1235: "UNHEALTHY"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetInstancesHealthStatusCommand extends $Command
  .classBuilder<
    GetInstancesHealthStatusCommandInput,
    GetInstancesHealthStatusCommandOutput,
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
  .s("Route53AutoNaming_v20170314", "GetInstancesHealthStatus", {})
  .n("ServiceDiscoveryClient", "GetInstancesHealthStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetInstancesHealthStatusCommand)
  .de(de_GetInstancesHealthStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInstancesHealthStatusRequest;
      output: GetInstancesHealthStatusResponse;
    };
    sdk: {
      input: GetInstancesHealthStatusCommandInput;
      output: GetInstancesHealthStatusCommandOutput;
    };
  };
}
