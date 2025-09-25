// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateManagedInstanceRoleRequest, UpdateManagedInstanceRoleResult } from "../models/models_2";
import { UpdateManagedInstanceRole } from "../schemas/schemas_40_Describe";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Changes the Identity and Access Management (IAM) role that is assigned to the
 *    on-premises server, edge device, or virtual machines (VM). IAM roles are first
 *    assigned to these hybrid nodes during the activation process. For more information, see <a>CreateActivation</a>.</p>
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
export class UpdateManagedInstanceRoleCommand extends $Command
  .classBuilder<
    UpdateManagedInstanceRoleCommandInput,
    UpdateManagedInstanceRoleCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "UpdateManagedInstanceRole", {})
  .n("SSMClient", "UpdateManagedInstanceRoleCommand")
  .sc(UpdateManagedInstanceRole)
  .build() {
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
