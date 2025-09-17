// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteMountTargetRequest } from "../models/models_0";
import { de_DeleteMountTargetCommand, se_DeleteMountTargetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMountTargetCommand}.
 */
export interface DeleteMountTargetCommandInput extends DeleteMountTargetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMountTargetCommand}.
 */
export interface DeleteMountTargetCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified mount target.</p>
 *          <p>This operation forcibly breaks any mounts of the file system by using the mount target
 *       that is being deleted, which might disrupt instances or applications using those mounts. To
 *       avoid applications getting cut off abruptly, you might consider unmounting any mounts of the
 *       mount target, if feasible. The operation also deletes the associated network interface.
 *       Uncommitted writes might be lost, but breaking a mount target using this operation does not
 *       corrupt the file system itself. The file system you created remains. You can mount an
 *       EC2 instance in your VPC by using another mount target.</p>
 *          <p>This operation requires permissions for the following action on the file
 *       system:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>elasticfilesystem:DeleteMountTarget</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>The <code>DeleteMountTarget</code> call returns while the mount target state is still
 *           <code>deleting</code>. You can check the mount target deletion by calling the <a>DescribeMountTargets</a> operation, which returns a list of mount target
 *         descriptions for the given file system. </p>
 *          </note>
 *          <p>The operation also requires permissions for the following Amazon EC2 action on the
 *       mount target's network interface:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ec2:DeleteNetworkInterface</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DeleteMountTargetCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DeleteMountTargetCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * // import type { EFSClientConfig } from "@aws-sdk/client-efs";
 * const config = {}; // type is EFSClientConfig
 * const client = new EFSClient(config);
 * const input = { // DeleteMountTargetRequest
 *   MountTargetId: "STRING_VALUE", // required
 * };
 * const command = new DeleteMountTargetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMountTargetCommandInput - {@link DeleteMountTargetCommandInput}
 * @returns {@link DeleteMountTargetCommandOutput}
 * @see {@link DeleteMountTargetCommandInput} for command's `input` shape.
 * @see {@link DeleteMountTargetCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>Returned if the request is malformed or contains an error such as an invalid
 *             parameter value or a missing required parameter.</p>
 *
 * @throws {@link DependencyTimeout} (server fault)
 *  <p>The service timed out trying to fulfill the request, and the client should try the
 *             call again.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Returned if an error occurred on the server side.</p>
 *
 * @throws {@link MountTargetNotFound} (client fault)
 *  <p>Returned if there is no mount target with the specified ID found in the
 *             caller's Amazon Web Services account.</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 *
 * @example To delete a mount target
 * ```javascript
 * // This operation deletes a mount target.
 * const input = {
 *   MountTargetId: "fsmt-12340abc"
 * };
 * const command = new DeleteMountTargetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteMountTargetCommand extends $Command
  .classBuilder<
    DeleteMountTargetCommandInput,
    DeleteMountTargetCommandOutput,
    EFSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EFSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MagnolioAPIService_v20150201", "DeleteMountTarget", {})
  .n("EFSClient", "DeleteMountTargetCommand")
  .f(void 0, void 0)
  .ser(se_DeleteMountTargetCommand)
  .de(de_DeleteMountTargetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMountTargetRequest;
      output: {};
    };
    sdk: {
      input: DeleteMountTargetCommandInput;
      output: DeleteMountTargetCommandOutput;
    };
  };
}
