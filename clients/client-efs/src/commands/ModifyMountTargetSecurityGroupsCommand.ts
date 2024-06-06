// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyMountTargetSecurityGroupsRequest } from "../models/models_0";
import {
  de_ModifyMountTargetSecurityGroupsCommand,
  se_ModifyMountTargetSecurityGroupsCommand,
} from "../protocols/Aws_restJson1";

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
 *  <p>Returned if the size of <code>SecurityGroups</code> specified in the request is
 *             greater than five.</p>
 *
 * @throws {@link SecurityGroupNotFound} (client fault)
 *  <p>Returned if one of the specified security groups doesn't exist in the subnet's
 *             virtual private cloud (VPC).</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 * @public
 * @example To modify the security groups associated with a mount target for a file system
 * ```javascript
 * // This operation modifies the security groups associated with a mount target for a file system.
 * const input = {
 *   "MountTargetId": "fsmt-12340abc",
 *   "SecurityGroups": [
 *     "sg-abcd1234"
 *   ]
 * };
 * const command = new ModifyMountTargetSecurityGroupsCommand(input);
 * await client.send(command);
 * // example id: to-modify-the-security-groups-associated-with-a-mount-target-for-a-file-system-1481850772562
 * ```
 *
 */
export class ModifyMountTargetSecurityGroupsCommand extends $Command
  .classBuilder<
    ModifyMountTargetSecurityGroupsCommandInput,
    ModifyMountTargetSecurityGroupsCommandOutput,
    EFSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EFSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MagnolioAPIService_v20150201", "ModifyMountTargetSecurityGroups", {})
  .n("EFSClient", "ModifyMountTargetSecurityGroupsCommand")
  .f(void 0, void 0)
  .ser(se_ModifyMountTargetSecurityGroupsCommand)
  .de(de_ModifyMountTargetSecurityGroupsCommand)
  .build() {}
