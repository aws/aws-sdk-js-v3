// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ModifyMountTargetSecurityGroupsRequest } from "../models/models_0";
import { ModifyMountTargetSecurityGroups } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyMountTargetSecurityGroupsCommand}.
 */
export interface ModifyMountTargetSecurityGroupsCommandInput extends ModifyMountTargetSecurityGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ModifyMountTargetSecurityGroupsCommand}.
 */
export interface ModifyMountTargetSecurityGroupsCommandOutput extends __MetadataBearer {}

/**
 * <p>Modifies the set of security groups in effect for a mount target.</p>
 *          <p>When you create a mount target, Amazon EFS also creates a new network interface. For
 *       more information, see <a>CreateMountTarget</a>. This operation replaces the security groups in effect for the
 *       network interface associated with a mount target, with the <code>SecurityGroups</code>
 *       provided in the request. This operation requires that the network interface of the mount
 *       target has been created and the lifecycle state of the mount target is not
 *         <code>deleted</code>. </p>
 *          <p>The operation requires permissions for the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>elasticfilesystem:ModifyMountTargetSecurityGroups</code> action on the mount
 *           target's file system. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ec2:ModifyNetworkInterfaceAttribute</code> action on the mount target's network
 *           interface. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, ModifyMountTargetSecurityGroupsCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, ModifyMountTargetSecurityGroupsCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * // import type { EFSClientConfig } from "@aws-sdk/client-efs";
 * const config = {}; // type is EFSClientConfig
 * const client = new EFSClient(config);
 * const input = { // ModifyMountTargetSecurityGroupsRequest
 *   MountTargetId: "STRING_VALUE", // required
 *   SecurityGroups: [ // SecurityGroups
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyMountTargetSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyMountTargetSecurityGroupsCommandInput - {@link ModifyMountTargetSecurityGroupsCommandInput}
 * @returns {@link ModifyMountTargetSecurityGroupsCommandOutput}
 * @see {@link ModifyMountTargetSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link ModifyMountTargetSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>Returned if the request is malformed or contains an error such as an invalid
 *             parameter value or a missing required parameter.</p>
 *
 * @throws {@link IncorrectMountTargetState} (client fault)
 *  <p>Returned if the mount target is not in the correct state for the
 *             operation.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Returned if an error occurred on the server side.</p>
 *
 * @throws {@link MountTargetNotFound} (client fault)
 *  <p>Returned if there is no mount target with the specified ID found in the
 *             caller's Amazon Web Services account.</p>
 *
 * @throws {@link SecurityGroupLimitExceeded} (client fault)
 *  <p>Returned if the number of <code>SecurityGroups</code> specified in the request is
 *             greater than the limit, which is based on account quota.  Either delete some security groups
 *             or request that the account quota be raised. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC Quotas</a>
 *             in the <i>Amazon VPC User Guide</i> (see the <b>Security Groups</b>
 *             table).
 *         </p>
 *
 * @throws {@link SecurityGroupNotFound} (client fault)
 *  <p>Returned if one of the specified security groups doesn't exist in the subnet's
 *             virtual private cloud (VPC).</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 *
 * @example To modify the security groups associated with a mount target for a file system
 * ```javascript
 * // This operation modifies the security groups associated with a mount target for a file system.
 * const input = {
 *   MountTargetId: "fsmt-12340abc",
 *   SecurityGroups: [
 *     "sg-abcd1234"
 *   ]
 * };
 * const command = new ModifyMountTargetSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ModifyMountTargetSecurityGroupsCommand extends $Command
  .classBuilder<
    ModifyMountTargetSecurityGroupsCommandInput,
    ModifyMountTargetSecurityGroupsCommandOutput,
    EFSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EFSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MagnolioAPIService_v20150201", "ModifyMountTargetSecurityGroups", {})
  .n("EFSClient", "ModifyMountTargetSecurityGroupsCommand")
  .sc(ModifyMountTargetSecurityGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyMountTargetSecurityGroupsRequest;
      output: {};
    };
    sdk: {
      input: ModifyMountTargetSecurityGroupsCommandInput;
      output: ModifyMountTargetSecurityGroupsCommandOutput;
    };
  };
}
