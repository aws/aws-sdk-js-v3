// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeregisterInstanceRequest, DeregisterInstanceResponse } from "../models/models_0";
import { de_DeregisterInstanceCommand, se_DeregisterInstanceCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterInstanceCommand}.
 */
export interface DeregisterInstanceCommandInput extends DeregisterInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterInstanceCommand}.
 */
export interface DeregisterInstanceCommandOutput extends DeregisterInstanceResponse, __MetadataBearer {}

/**
 * <p>Deletes the Amazon Route 53 DNS records and health check, if any, that Cloud Map created for the
 *    specified instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, DeregisterInstanceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, DeregisterInstanceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // DeregisterInstanceRequest
 *   ServiceId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new DeregisterInstanceCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterInstanceResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeregisterInstanceCommandInput - {@link DeregisterInstanceCommandInput}
 * @returns {@link DeregisterInstanceCommandOutput}
 * @see {@link DeregisterInstanceCommandInput} for command's `input` shape.
 * @see {@link DeregisterInstanceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link DuplicateRequest} (client fault)
 *  <p>The operation is already in progress.</p>
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
 * @throws {@link ResourceInUse} (client fault)
 *  <p>The specified resource can't be deleted because it contains other resources. For example,
 *    you can't delete a service that contains any instances.</p>
 *
 * @throws {@link ServiceNotFound} (client fault)
 *  <p>No service exists with the specified ID.</p>
 *
 * @throws {@link ServiceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from ServiceDiscovery service.</p>
 *
 *
 * @example Example: Deregister a service instance
 * ```javascript
 * // Example: Deregister a service instance
 * const input = {
 *   InstanceId: "myservice-53",
 *   ServiceId: "srv-p5zdwlg5uvvzjita"
 * };
 * const command = new DeregisterInstanceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   OperationId: "4yejorelbukcjzpnr6tlmrghsjwpngf4-k98rnaiq"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeregisterInstanceCommand extends $Command
  .classBuilder<
    DeregisterInstanceCommandInput,
    DeregisterInstanceCommandOutput,
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
  .s("Route53AutoNaming_v20170314", "DeregisterInstance", {})
  .n("ServiceDiscoveryClient", "DeregisterInstanceCommand")
  .f(void 0, void 0)
  .ser(se_DeregisterInstanceCommand)
  .de(de_DeregisterInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterInstanceRequest;
      output: DeregisterInstanceResponse;
    };
    sdk: {
      input: DeregisterInstanceCommandInput;
      output: DeregisterInstanceCommandOutput;
    };
  };
}
