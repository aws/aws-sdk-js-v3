// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeregisterManagedInstanceRequest, DeregisterManagedInstanceResult } from "../models/models_0";
import { DeregisterManagedInstance$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterManagedInstanceCommand}.
 */
export interface DeregisterManagedInstanceCommandInput extends DeregisterManagedInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterManagedInstanceCommand}.
 */
export interface DeregisterManagedInstanceCommandOutput extends DeregisterManagedInstanceResult, __MetadataBearer {}

/**
 * <p>Removes the server or virtual machine from the list of registered servers.</p>
 *          <p>If you want to reregister an on-premises server, edge device, or VM, you must use a
 *    different Activation Code and Activation ID than used to register the machine previously. The
 *    Activation Code and Activation ID must not have already been used on the maximum number of
 *    activations specified when they were created. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-manager-deregister-hybrid-nodes.html">Deregistering
 *     managed nodes in a hybrid and multicloud environment</a> in the
 *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeregisterManagedInstanceCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeregisterManagedInstanceCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DeregisterManagedInstanceRequest
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new DeregisterManagedInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterManagedInstanceCommandInput - {@link DeregisterManagedInstanceCommandInput}
 * @returns {@link DeregisterManagedInstanceCommandOutput}
 * @see {@link DeregisterManagedInstanceCommandInput} for command's `input` shape.
 * @see {@link DeregisterManagedInstanceCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidInstanceId} (client fault)
 *  <p>The following problems can cause this exception:</p>
 *          <ul>
 *             <li>
 *                <p>You don't have permission to access the managed node.</p>
 *             </li>
 *             <li>
 *                <p>Amazon Web Services Systems Manager Agent (SSM Agent) isn't running. Verify that SSM Agent is
 *      running.</p>
 *             </li>
 *             <li>
 *                <p>SSM Agent isn't registered with the SSM endpoint. Try reinstalling SSM Agent.</p>
 *             </li>
 *             <li>
 *                <p>The managed node isn't in a valid state. Valid states are: <code>Running</code>,
 *       <code>Pending</code>, <code>Stopped</code>, and <code>Stopping</code>. Invalid states are:
 *       <code>Shutting-down</code> and <code>Terminated</code>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class DeregisterManagedInstanceCommand extends $Command
  .classBuilder<
    DeregisterManagedInstanceCommandInput,
    DeregisterManagedInstanceCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "DeregisterManagedInstance", {})
  .n("SSMClient", "DeregisterManagedInstanceCommand")
  .sc(DeregisterManagedInstance$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterManagedInstanceRequest;
      output: {};
    };
    sdk: {
      input: DeregisterManagedInstanceCommandInput;
      output: DeregisterManagedInstanceCommandOutput;
    };
  };
}
