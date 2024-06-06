// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterInstanceRequest, RegisterInstanceResponse } from "../models/models_0";
import { de_RegisterInstanceCommand, se_RegisterInstanceCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterInstanceCommand}.
 */
export interface RegisterInstanceCommandInput extends RegisterInstanceRequest {}
/**
 * @public
 *
 * The output of {@link RegisterInstanceCommand}.
 */
export interface RegisterInstanceCommandOutput extends RegisterInstanceResponse, __MetadataBearer {}

/**
 * <p>Creates or updates one or more records and, optionally, creates a health check based on the settings in a
 *    specified service. When you submit a <code>RegisterInstance</code> request, the following occurs:</p>
 *          <ul>
 *             <li>
 *                <p>For each DNS record that you define in the service that's specified by <code>ServiceId</code>, a record
 *      is created or updated in the hosted zone that's associated with the corresponding namespace.</p>
 *             </li>
 *             <li>
 *                <p>If the service includes <code>HealthCheckConfig</code>, a health check is created based on the settings
 *      in the health check configuration.</p>
 *             </li>
 *             <li>
 *                <p>The health check, if any, is associated with each of the new or updated records.</p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>One <code>RegisterInstance</code> request must complete before you can submit another request and specify
 *     the same service ID and instance ID.</p>
 *          </important>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html">CreateService</a>.</p>
 *          <p>When Cloud Map receives a DNS query for the specified DNS name, it returns the applicable value:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>If the health check is healthy</b>: returns all the records</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>If the health check is unhealthy</b>: returns the applicable value for the
 *      last healthy instance</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>If you didn't specify a health check configuration</b>: returns all the
 *      records</p>
 *             </li>
 *          </ul>
 *          <p>For the current quota on the number of instances that you can register using the same namespace and using
 *    the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map
 *     quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, RegisterInstanceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, RegisterInstanceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // RegisterInstanceRequest
 *   ServiceId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   CreatorRequestId: "STRING_VALUE",
 *   Attributes: { // Attributes // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new RegisterInstanceCommand(input);
 * const response = await client.send(command);
 * // { // RegisterInstanceResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterInstanceCommandInput - {@link RegisterInstanceCommandInput}
 * @returns {@link RegisterInstanceCommandOutput}
 * @see {@link RegisterInstanceCommandInput} for command's `input` shape.
 * @see {@link RegisterInstanceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link DuplicateRequest} (client fault)
 *  <p>The operation is already in progress.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value
 *    might be outside the allowed range, or a string value might exceed length constraints.</p>
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>The specified resource can't be deleted because it contains other resources. For example, you can't delete
 *    a service that contains any instances.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p>The resource can't be created because you've reached the quota on the number of resources.</p>
 *
 * @throws {@link ServiceNotFound} (client fault)
 *  <p>No service exists with the specified ID.</p>
 *
 * @throws {@link ServiceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from ServiceDiscovery service.</p>
 *
 * @public
 * @example Example: Register Instance
 * ```javascript
 * // Example: Register Instance
 * const input = {
 *   "Attributes": {
 *     "AWS_INSTANCE_IPV4": "172.2.1.3",
 *     "AWS_INSTANCE_PORT": "808"
 *   },
 *   "CreatorRequestId": "7a48a98a-72e6-4849-bfa7-1a458e030d7b",
 *   "InstanceId": "myservice-53",
 *   "ServiceId": "srv-p5zdwlg5uvvzjita"
 * };
 * const command = new RegisterInstanceCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "OperationId": "4yejorelbukcjzpnr6tlmrghsjwpngf4-k95yg2u7"
 * }
 * *\/
 * // example id: example-register-instance-1587236116314
 * ```
 *
 */
export class RegisterInstanceCommand extends $Command
  .classBuilder<
    RegisterInstanceCommandInput,
    RegisterInstanceCommandOutput,
    ServiceDiscoveryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ServiceDiscoveryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53AutoNaming_v20170314", "RegisterInstance", {})
  .n("ServiceDiscoveryClient", "RegisterInstanceCommand")
  .f(void 0, void 0)
  .ser(se_RegisterInstanceCommand)
  .de(de_RegisterInstanceCommand)
  .build() {}
