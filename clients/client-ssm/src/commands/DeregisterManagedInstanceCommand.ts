// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeregisterManagedInstanceRequest, DeregisterManagedInstanceResult } from "../models/models_0";
import { DeregisterManagedInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Removes the server or virtual machine from the list of registered servers.
 *
 * If you want to reregister an on-premises server, edge device, or VM, you must use a different Activation Code and Activation ID than used to register the machine previously. The Activation Code and Activation ID must not have already been used on the maximum number of activations specified when they were created. For more information, see [Deregistering managed nodes in a hybrid and multicloud environment](https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-manager-deregister-hybrid-nodes.html) in the *Amazon Web Services Systems Manager User Guide*.
 *
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
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidInstanceId} (client fault)
 *
 * The following problems can cause this exception:
 *
 * - You don't have permission to access the managed node.
 * - Amazon Web Services Systems Manager Agent (SSM Agent) isn't running. Verify that SSM Agent is running.
 * - SSM Agent isn't registered with the SSM endpoint. Try reinstalling SSM Agent.
 * - The managed node isn't in a valid state. Valid states are: `Running`, `Pending`, `Stopped`, and `Stopping`. Invalid states are: `Shutting-down` and `Terminated`.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class DeregisterManagedInstanceCommand extends command<DeregisterManagedInstanceCommandInput, DeregisterManagedInstanceCommandOutput>(
  _ep0,
  _mw0,
  "DeregisterManagedInstance",
  DeregisterManagedInstance$
) {
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
