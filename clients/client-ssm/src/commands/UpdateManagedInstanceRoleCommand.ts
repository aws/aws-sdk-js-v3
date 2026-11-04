// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateManagedInstanceRoleRequest, UpdateManagedInstanceRoleResult } from "../models/models_1";
import { UpdateManagedInstanceRole$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateManagedInstanceRoleCommand}.
 */
export interface UpdateManagedInstanceRoleCommandInput extends UpdateManagedInstanceRoleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateManagedInstanceRoleCommand}.
 */
export interface UpdateManagedInstanceRoleCommandOutput extends UpdateManagedInstanceRoleResult, __MetadataBearer {}

/**
 * Changes the Identity and Access Management (IAM) role that is assigned to the on-premises server, edge device, or virtual machines (VM). IAM roles are first assigned to these hybrid nodes during the activation process. For more information, see CreateActivation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateManagedInstanceRoleCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateManagedInstanceRoleCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // UpdateManagedInstanceRoleRequest
 *   InstanceId: "STRING_VALUE", // required
 *   IamRole: "STRING_VALUE", // required
 * };
 * const command = new UpdateManagedInstanceRoleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateManagedInstanceRoleCommandInput - {@link UpdateManagedInstanceRoleCommandInput}
 * @returns {@link UpdateManagedInstanceRoleCommandOutput}
 * @see {@link UpdateManagedInstanceRoleCommandInput} for command's `input` shape.
 * @see {@link UpdateManagedInstanceRoleCommandOutput} for command's `response` shape.
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
export class UpdateManagedInstanceRoleCommand extends command<UpdateManagedInstanceRoleCommandInput, UpdateManagedInstanceRoleCommandOutput>(
  _ep0,
  _mw0,
  "UpdateManagedInstanceRole",
  UpdateManagedInstanceRole$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateManagedInstanceRoleRequest;
      output: {};
    };
    sdk: {
      input: UpdateManagedInstanceRoleCommandInput;
      output: UpdateManagedInstanceRoleCommandOutput;
    };
  };
}
